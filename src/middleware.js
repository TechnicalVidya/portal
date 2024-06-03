import { NextResponse } from "next/server";

export function middleware(request) {
  const { value } = request.cookies.get("isLoggedIn")
    ? request.cookies.get("isLoggedIn")
    : false;
  const isLoggedIn = value === "true";
  //   const isLoggedIn = true
  const { pathname } = request.nextUrl;

  // Restrict access to login page if user is already logged in
  if (isLoggedIn && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow access to protected routes if user is logged in
  //   if (!isLoggedIn && pathname === "/clubs") {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }

  return NextResponse.next();
}
