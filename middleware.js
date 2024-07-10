import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("authToken");


  if (!token && req.nextUrl.pathname !== "/auth/login") {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // If token is present, proceed to the requested route
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*","/profile"]
};
