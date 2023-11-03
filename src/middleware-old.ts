import { NextRequest } from 'next/server';

import logger from '@src/lib/logger';

export async function middleware(req: NextRequest) {
  logger('middlewarecalled' + req);
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/editor/:path*',
    '/login',
    '/register',
    '/identities/:path*',
  ],
};
