import { NextResponse } from 'next/server';

export function middleware(request) {
  const SECRET_TOKEN = process.env.API_SECRET_TOKEN;

  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/api/')) {
    const authHeader = request.headers.get('authorization');

    if (!SECRET_TOKEN || authHeader !== `Bearer ${SECRET_TOKEN}`) {
      return new Response(
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
