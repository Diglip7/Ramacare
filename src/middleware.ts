import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Redirect the old WordPress URL /?p=21045 (a duplicate of the homepage) to /
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  if (url.pathname === '/' && url.searchParams.has('p')) {
    url.search = '';
    return NextResponse.redirect(url, 301);
  }
}

export const config = { matcher: '/' };