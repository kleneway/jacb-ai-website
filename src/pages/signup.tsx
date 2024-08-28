import { NextResponse } from 'next/server';

export async function middleware(req: any) {
  const url = new URL(req.url as string);
  const params = url.searchParams.toString();
  const destination = `https://app.jacb.ai/setup${params ? `?${params}` : ''}`;
  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: '/signup',
};