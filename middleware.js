import { NextResponse } from 'next/server';

export function middleware(request) {
  const SECRET_TOKEN = process.env.API_SECRET_TOKEN;
  console.log('SECRET_TOKEN in middleware:', SECRET_TOKEN); // DEBUG

  const authHeader = request.headers.get('authorization');
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/api/')) {
    if (!SECRET_TOKEN || authHeader !== `Bearer ${SECRET_TOKEN}`) {
      console.log('Auth failed. Header:', authHeader); // DEBUG
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
