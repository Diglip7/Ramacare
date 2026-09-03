# Canonical Tags Implementation for RamaCare Polyclinic

## Overview
This document summarizes the implementation of canonical tags for the RamaCare Polyclinic website to improve SEO and prevent duplicate content issues.

## What are Canonical Tags?
Canonical tags (`<link rel="canonical" href="..." />`) are HTML elements that tell search engines which URL is the "master" version of a page when there are multiple URLs with similar or identical content.

### Benefits:
- Prevents duplicate content issues
- Consolidates link equity to one preferred URL
- Helps search engines understand which page to index and rank
- Useful when the same content appears on multiple URLs (with parameters, filters, etc.)

## Implementation Details

### 1. Utility Functions
Created `src/utils/canonical.js` with utility functions for generating canonical URLs:
- `generateCanonical(path)` - Generates canonical URL for a given path
- `getServiceCanonical(serviceSlug)` - Generates canonical URL for service pages
- `getBlogCanonical(blogSlug)` - Generates canonical URL for blog posts
- `getDoctorCanonical(doctorId)` - Generates canonical URL for doctor profiles
- `CANONICAL_URLS` - Object containing common canonical URLs
- `generateCanonicalTag(url)` - Generates canonical tag HTML

### 2. Homepage
- **File**: `src/pages/index.jsx`
- **Canonical URL**: `https://ramacarepolyclinic.ae/`
- **Status**: ✅ Already implemented

### 3. Service Pages
- **Implementation**: Centralized in `components/Layout.jsx` and `src/utils/canonical.js`.
- **Canonical URL Format**: `https://ramacarepolyclinic.ae/services/{service-slug}/` (With trailing slash matching Next.js `trailingSlash: true`)
- **Approach**: 
  - Centralized canonical generation ensuring all paths end with a trailing slash.
  - Modified `components/Layout.jsx` and `src/utils/canonical.js` to automatically generate trailing-slash canonical tags.
- **Examples**:
  - General Medicine: `https://ramacarepolyclinic.ae/services/general-physician-dubai/`
  - Aesthetic Dermatology: `https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/`

### 4. Blog Pages
- **Blog Index**: `https://ramacarepolyclinic.ae/blog/`
- **Individual Blog Posts**: `https://ramacarepolyclinic.ae/blog/{blog-slug}/`
- **Implementation**: 
  - Modified `components/Layout.jsx` to generate dynamic trailing-slash canonical URLs.

### 5. Redirects (www to non-www)
- **Implementation**: `src/middleware.ts`
- **Purpose**: Automatically redirects all `www.ramacarepolyclinic.ae` traffic to `ramacarepolyclinic.ae` with a 301 status. This is the primary fix for the duplicate content issues reported in the site audit.

### 5. Doctor Pages
- **Doctors Listing**: `https://ramacarepolyclinic.ae/doctors/`
- **Individual Doctor Profiles**: `https://ramacarepolyclinic.ae/doctors/{doctor-id}/`
- **Implementation**: 
  - Added canonical tags to `src/pages/doctors/index.jsx`
  - Added dynamic canonical tags to `src/pages/doctors/[id].jsx`

### 6. Policy Pages
- **Privacy Policy**: `https://ramacarepolyclinic.ae/privacy-policy/`
- **Refund and Cancellation Policy**: `https://ramacarepolyclinic.ae/refund-and-cancellation-policy/`
- **Implementation**: 
  - Added Head components to both policy pages
  - Added canonical tags with appropriate URLs

### 7. Other Pages
- **Testimonials**: `https://ramacarepolyclinic.ae/testimonials/`
- **Implementation**: Added canonical tag to `src/pages/testimonials.jsx`

## Key Features
### Automatic Canonical Generation
The `Layout.jsx` component now automatically generates canonical tags for:
- Service pages (using `router.pathname`)
- Blog posts (using `router.asPath` for dynamic URLs)
- Other pages that use the Layout component

### Fallback Handling
- Pages that don't use the Layout component have manual canonical tags
- Policy pages have individual Head components with canonical tags
- Doctor profile pages generate dynamic canonical URLs based on doctor ID

## Testing
To test the implementation:
1. Start the development server: `npm run dev`
2. Visit various pages and check the HTML source for canonical tags
3. Verify that each page has the correct canonical URL

## SEO Best Practices Implemented
✅ **One canonical tag per page** - Each page has exactly one canonical tag
✅ **Full HTTPS URLs** - All canonical URLs use the full HTTPS protocol
✅ **200 Status Pages** - Canonical URLs point to pages that return 200 OK status
✅ **Preventive SEO** - Canonical tags implemented even where no duplicate content currently exists
✅ **Dynamic Content Support** - Blog posts and doctor profiles generate dynamic canonical URLs

## Future Maintenance
- When adding new service pages, they will automatically get canonical tags through the Layout component
- When adding new blog posts, they will automatically get canonical tags through the Layout component
- For completely new page types, add canonical tags manually or integrate with the Layout component