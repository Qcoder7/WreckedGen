import { NextResponse } from 'next/server';

const SECRET_TOKEN = process.env.API_SECRET_TOKEN;

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/api/')) {
    const authHeader = request.headers.get('authorization')?.trim();

    if (!SECRET_TOKEN || authHeader !== SECRET_TOKEN.trim()) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized access to API' }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  }

  return NextResponse.next();
}
