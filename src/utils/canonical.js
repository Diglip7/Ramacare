// Utility functions for generating canonical URLs
const BASE_URL = 'https://ramacarepolyclinic.ae';

// Generate canonical URL for a given path
export function generateCanonical(path) {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const hasExtension = /\.[a-zA-Z0-9]+$/.test(normalizedPath);
  const pathWithSlash = (normalizedPath.endsWith('/') || hasExtension) ? normalizedPath : `${normalizedPath}/`;
  return `${BASE_URL}${pathWithSlash}`;
}

// Generate canonical URL for service pages
export function getServiceCanonical(serviceSlug) {
  return generateCanonical(`/services/${serviceSlug}`);
}

// Generate canonical URL for blog posts
export function getBlogCanonical(blogSlug) {
  return generateCanonical(`/blog/${blogSlug}`);
}

// Generate canonical URL for doctor profiles
export function getDoctorCanonical(doctorId) {
  return generateCanonical(`/doctors/${doctorId}`);
}

// Common canonical URLs
export const CANONICAL_URLS = {
  HOME: generateCanonical('/'),
  SERVICES: generateCanonical('/services/'),
  BLOG: generateCanonical('/blog/'),
  DOCTORS: generateCanonical('/doctors/'),
  PRIVACY_POLICY: generateCanonical('/privacy-policy/'),
  REFUND_POLICY: generateCanonical('/refund-and-cancellation-policy/'),
  TESTIMONIALS: generateCanonical('/testimonials/')
};

// Generate canonical tag HTML
export function generateCanonicalTag(url) {
  return `<link rel="canonical" href="${url}" />`;
}