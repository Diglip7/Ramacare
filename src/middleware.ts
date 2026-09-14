import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host');

  let needsRedirect = false;

  // 1. Redirect www to non-www
  if (hostname && hostname.startsWith('www.')) {
    url.hostname = hostname.replace(/^www\./, '');
    needsRedirect = true;
  }

  const pathname = request.nextUrl.pathname;

  // 2. Redirect malicious / legacy WordPress paths & query params
  if (
    pathname.startsWith('/wp-') ||
    pathname.includes('index.php') ||
    pathname.includes('xmlrpc.php') ||
    request.nextUrl.searchParams.has('p') ||
    request.nextUrl.searchParams.has('page_id')
  ) {
    url.pathname = '/';
    url.search = '';
    return NextResponse.redirect(url, 301);
  }

  // Note: trailing-slash enforcement is handled natively by
  // `trailingSlash: true` in next.config.js — confirmed via live
  // curl test (308 firing correctly). No middleware fallback needed.

  if (needsRedirect) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};