// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Routes } from "./routes/Routes";

export async function middleware(request: NextRequest) {
  const token = await getToken({ 
    req: request, 
    secret: process.env.NEXTAUTH_SECRET 
  });
  // Allow access to the root path (/) without authentication
  console.log(token)
  if (request.nextUrl.pathname === "/debug-token") {
    return new NextResponse(JSON.stringify({ token }, null, 2), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  // If user is authenticated but not onboarded, redirect to onboarding
  if (token && !token.isOnboarded && !request.nextUrl.pathname.startsWith('/onboarding')) {
    return NextResponse.redirect(new URL(Routes.onboarding, request.url));
  }
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }
  // If user is not authenticated and trying to access protected routes
  if (!token && !request.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL(Routes.signin, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
