import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("Learning_Purpose")?.value;
  const { pathname } = request.nextUrl;

  // Log to check if middleware is running (check your terminal)
  console.log(`Middleware Checking: ${pathname}`);

  // 1. Redirect if no token for protected routes
  if (!token) {
    if (pathname.startsWith("/dashboard") || pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // 2. Role-based protection for /admin
  if (token && pathname.startsWith("/admin")) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));

      if (payload.role !== "admin") {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (e) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Broad matcher to ensure sub-routes are captured
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/dashboard",
    "/admin"
  ],
};