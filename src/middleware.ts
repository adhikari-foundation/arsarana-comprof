import { isValidLanguageCode } from '@utils/url-utils';
import { NextRequest, NextResponse } from 'next/server';

import logger from '@src/lib/logger';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { ln } = Object.fromEntries(req.nextUrl.searchParams);

  const valid = isValidLanguageCode(ln);

  logger(req.headers.get('origin'));

  if (!valid) {
    url.searchParams.set('ln', 'id'); // Add a new query parameter
    return NextResponse.redirect(url, 307);
  }
}

export const config = {
  matcher: [
    '/',
    '/services',
    '/contact',
    '/tabloid',
    '/experiences',
    '/about',
    '/our-team',
    '/careers',
    '/profiles',
  ],
};
