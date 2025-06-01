export function middleware(request) {
  const { pathname } = request.nextUrl;
  const authHeader = request.headers.get('authorization');
  console.log('SECRET_TOKEN:', process.env.API_SECRET_TOKEN);
  console.log('Auth header:', authHeader);

  if (pathname.startsWith('/api/')) {
    if (!process.env.API_SECRET_TOKEN || authHeader !== `Bearer ${process.env.API_SECRET_TOKEN}`) {
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
