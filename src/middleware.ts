import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host');

  // Redirect www to non-www
  if (hostname && hostname.startsWith('www.')) {
    url.hostname = hostname.replace(/^www\./, '');
    return NextResponse.redirect(url, 301);
  }

  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith('/wp-') ||
    pathname.includes('index.php') ||
    pathname.includes('xmlrpc.php')
  ) {
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  // Enforce trailing slash on non-API, non-file routes
  if (
    pathname !== '/' &&
    !pathname.startsWith('/api') &&
    !pathname.includes('.') &&
    !pathname.endsWith('/')
  ) {
    url.pathname = `${pathname}/`;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};