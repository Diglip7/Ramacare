import fs from 'fs';
import path from 'path';
import { DOCTORS } from '../../data/doctors';

let cachedBlogs = null;
let lastBlogFetchTime = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes TTL for fresh DB queries
const FALLBACK_CACHE_FILE = path.join(process.cwd(), '.sitemap-blogs-cache.json');

// Read persistent fallback cache from disk
function readPersistentCache() {
  try {
    if (fs.existsSync(FALLBACK_CACHE_FILE)) {
      const data = JSON.parse(fs.readFileSync(FALLBACK_CACHE_FILE, 'utf8'));
      if (data && Array.isArray(data.blogs) && data.blogs.length > 0) {
        return data.blogs;
      }
    }
  } catch (err) {
    console.error('[SITEMAP_ERROR] Error reading persistent cache file:', err);
  }
  return null;
}

// Write persistent fallback cache to disk
function writePersistentCache(blogs) {
  try {
    if (Array.isArray(blogs) && blogs.length > 0) {
      const data = {
        lastUpdated: Date.now(),
        lastUpdatedISO: new Date().toISOString(),
        count: blogs.length,
        blogs: blogs.map(b => ({
          paramlink: b.paramlink,
          updatedAt: b.updatedAt || null,
          createdAt: b.createdAt || null
        }))
      };
      fs.writeFileSync(FALLBACK_CACHE_FILE, JSON.stringify(data, null, 2), 'utf8');
    }
  } catch (err) {
    console.error('[SITEMAP_ERROR] Error writing persistent cache file:', err);
  }
}

// Helper function to get actual file modification date
function getFileLastMod(relativePagePath, fallbackDate) {
  try {
    const fullPath = path.join(process.cwd(), 'src', 'pages', relativePagePath);
    if (fs.existsSync(fullPath)) {
      const stat = fs.statSync(fullPath);
      if (stat && stat.mtime) {
        return stat.mtime.toISOString().split('T')[0];
      }
    }
  } catch (e) {
    // Ignore and fallback
  }
  return fallbackDate;
}

// Function to get all published blogs with persistent disk fallback and sanity checks
async function getAllPublishedBlogs() {
  const now = Date.now();
  
  // Return in-memory cache if still within TTL
  if (cachedBlogs && cachedBlogs.length > 0 && (now - lastBlogFetchTime < CACHE_TTL_MS)) {
    return cachedBlogs;
  }

  // Get previous fallback baseline from memory or disk
  const previousKnownBlogs = (cachedBlogs && cachedBlogs.length > 0) 
    ? cachedBlogs 
    : readPersistentCache();

  try {
    // Dynamically import database modules
    const dbConnect = (await import('../../../lib/database')).default;
    const Blog = (await import('../../../models/blog')).default;

    await dbConnect();
    const blogs = await Blog.find({ status: 'published' })
      .select('paramlink updatedAt createdAt')
      .lean();

    // Sanity check: If DB query returns empty but we had previous published blogs, do NOT wipe the cache
    if (Array.isArray(blogs) && blogs.length === 0 && previousKnownBlogs && previousKnownBlogs.length > 0) {
      console.warn(
        `[SITEMAP_FALLBACK_USED] Sanity check warning: MongoDB returned 0 published blogs despite ${previousKnownBlogs.length} previously cached blogs. Retaining last known-good blog list.`
      );
      cachedBlogs = previousKnownBlogs;
      return previousKnownBlogs;
    }

    if (Array.isArray(blogs) && blogs.length > 0) {
      cachedBlogs = blogs;
      lastBlogFetchTime = now;
      writePersistentCache(blogs);
      return blogs;
    }

    // If DB returned empty and we had no previous cache
    return blogs || [];
  } catch (error) {
    console.error('[SITEMAP_GENERATION_FAILED] Failed to fetch published blogs from database:', error.message || error);

    if (previousKnownBlogs && previousKnownBlogs.length > 0) {
      console.warn(
        `[SITEMAP_FALLBACK_USED] Database error encountered. Serving ${previousKnownBlogs.length} last known-good blog URLs from fallback cache.`
      );
      cachedBlogs = previousKnownBlogs;
      return previousKnownBlogs;
    }

    console.error('[SITEMAP_CRITICAL] No cached fallback blogs available and database query failed.');
    return [];
  }
}

// Function to get all service pages with real modification dates
function getAllServicePages() {
  try {
    const servicesDir = path.join(process.cwd(), 'src', 'pages', 'services');

    if (!fs.existsSync(servicesDir)) {
      return [];
    }

    const currentDate = new Date().toISOString().split('T')[0];
    const serviceFiles = fs.readdirSync(servicesDir);
    const servicePages = serviceFiles
      .filter(file => file.endsWith('.jsx') && file !== '_app.jsx' && file !== '_document.jsx')
      .map(file => {
        const slug = file.replace('.jsx', '');
        const filePath = path.join(servicesDir, file);
        let lastmod = currentDate;
        try {
          const stat = fs.statSync(filePath);
          if (stat && stat.mtime) {
            lastmod = stat.mtime.toISOString().split('T')[0];
          }
        } catch (e) {
          // Fallback
        }
        return { path: `/services/${slug}/`, lastmod };
      });

    return servicePages;
  } catch (error) {
    console.error('[SITEMAP_ERROR] Error reading services directory:', error);
    return [];
  }
}

// Function to get all doctor slugs from DOCTORS data
function getAllDoctorSlugs() {
  try {
    const ignoredLegacyAliases = new Set([
      'shamna', 'jeena', 'soumya', 'syamkumar', 'sahar', 'hirbod', 'aparna', 'nodainne', 'mariya', 'sonita'
    ]);
    return Object.keys(DOCTORS || {}).filter(slug => !ignoredLegacyAliases.has(slug));
  } catch (error) {
    console.error('[SITEMAP_ERROR] Error extracting doctor slugs:', error);
    return [];
  }
}

// Function to generate sitemap XML with canonical URLs, trailing slashes, and deduplication
async function generateSitemap(blogs, services, doctorSlugs) {
  const baseUrl = 'https://ramacarepolyclinic.ae';
  const currentDate = new Date().toISOString().split('T')[0];

  const urlSet = new Set();
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  const addUrl = (loc, lastmod, priority, changefreq) => {
    let normalizedPath = loc.startsWith('/') ? loc : `/${loc}`;
    if (!normalizedPath.endsWith('/') && !/\.[a-zA-Z0-9]+$/.test(normalizedPath)) {
      normalizedPath = `${normalizedPath}/`;
    }
    const fullUrl = normalizedPath.startsWith('http') ? normalizedPath : `${baseUrl}${normalizedPath}`;

    if (!urlSet.has(fullUrl)) {
      urlSet.add(fullUrl);
      xml += `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>
  </url>
`;
    }
  };

  // 1. Add Static Canonical Pages with actual file modification dates
  const staticPages = [
    { path: '/', file: 'index.jsx', priority: '1.0', changefreq: 'daily' },
    { path: '/about-us/', file: 'about-us.jsx', priority: '0.8', changefreq: 'monthly' },
    { path: '/services/', file: 'services.jsx', priority: '0.9', changefreq: 'weekly' },
    { path: '/doctors/', file: 'doctors/index.jsx', priority: '0.8', changefreq: 'weekly' },
    { path: '/blog/', file: 'blog/index.jsx', priority: '0.8', changefreq: 'daily' },
    { path: '/testimonials/', file: 'testimonials.jsx', priority: '0.8', changefreq: 'weekly' },
    { path: '/contact-us/', file: 'contact-us.jsx', priority: '0.7', changefreq: 'monthly' },
    { path: '/book-appointment/', file: 'book-appointment.js', priority: '0.8', changefreq: 'weekly' },
    { path: '/privacy-policy/', file: 'privacy-policy.jsx', priority: '0.3', changefreq: 'monthly' },
    { path: '/refund-and-cancellation-policy/', file: 'refund-and-cancellation-policy.jsx', priority: '0.3', changefreq: 'monthly' },
  ];

  for (const page of staticPages) {
    const lastmod = getFileLastMod(page.file, currentDate);
    addUrl(page.path, lastmod, page.priority, page.changefreq);
  }

  // 2. Add Service Pages with actual file modification dates
  services.forEach(service => {
    const servicePath = typeof service === 'string' ? service : service.path;
    const lastmod = typeof service === 'object' && service.lastmod ? service.lastmod : currentDate;
    addUrl(servicePath, lastmod, '0.8', 'weekly');
  });

  // 3. Add Doctor Profiles with doctor file modification date
  const doctorIndexLastMod = getFileLastMod('doctors/index.jsx', currentDate);
  doctorSlugs.forEach(slug => {
    addUrl(`/doctors/${slug}/`, doctorIndexLastMod, '0.7', 'monthly');
  });

  // 4. Add Blog Pages with actual content modification dates
  blogs.forEach(blog => {
    const lastmod = blog.updatedAt 
      ? new Date(blog.updatedAt).toISOString().split('T')[0] 
      : (blog.createdAt ? new Date(blog.createdAt).toISOString().split('T')[0] : currentDate);
    addUrl(`/blog/${blog.paramlink}/`, lastmod, '0.6', 'weekly');
  });

  xml += '</urlset>';

  console.log(`[SITEMAP_GENERATION_SUCCESS] Generated sitemap with ${urlSet.size} total URLs`);
  console.log('[SITEMAP_URL_COUNT]', urlSet.size);
  console.log('[SITEMAP_BLOG_URL_COUNT]', blogs.length);

  return xml;
}

export default async function handler(req, res) {
  const url = req.url || '';
  if (url.endsWith('/') && url !== '/') {
    return res.redirect(301, '/api/sitemap.xml');
  }

  console.log(`[SITEMAP_GENERATION_STARTED] Generating sitemap at ${new Date().toISOString()}`);

  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');

  try {
    const blogs = await getAllPublishedBlogs();
    const services = getAllServicePages();
    const doctorSlugs = getAllDoctorSlugs();

    const sitemap = await generateSitemap(blogs, services, doctorSlugs);

    res.status(200).send(sitemap);
  } catch (error) {
    console.error('[SITEMAP_CRITICAL_ERROR] Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
}