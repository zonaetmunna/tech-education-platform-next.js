import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// Define route groups for better organization
const PROTECTED_ROUTES = ["/dashboard", "/subscribe", "/courses", "/videos", "/podcasts", "/roadmaps"]

const ADMIN_ROUTES = ["/admin"]

// Function to check if a route is protected (requires authentication)
function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_ROUTES.some(
    (route) =>
      pathname.startsWith(route) &&
      // Allow public listing pages without authentication
      !(
        pathname === "/courses" ||
        pathname === "/videos" ||
        pathname === "/podcasts" ||
        pathname === "/roadmaps" ||
        pathname === "/blog"
      ),
  )
}

// Function to check if a route is premium content
function isPremiumContent(pathname: string): boolean {
  // This is a simplified check. In a real app, you would query your database
  // to determine if specific content is premium
  const premiumContentPatterns = [
    /^\/courses\/[2-9]\d*$/, // Courses with ID 2 and above are premium
    /^\/videos\/[2-9]\d*$/, // Videos with ID 2 and above are premium
    /^\/podcasts\/[2-9]\d*$/, // Podcasts with ID 2 and above are premium
  ]

  return premiumContentPatterns.some((pattern) => pattern.test(pathname))
}

// Function to check if a route is admin-only
function isAdminRoute(pathname: string): boolean {
  return ADMIN_ROUTES.some((route) => pathname.startsWith(route))
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Get authentication status from cookies
  // In a real app, you would verify the JWT or session token
  const authCookie = request.cookies.get("auth")
  const isAuthenticated = !!authCookie?.value

  // Get user role from cookies
  // In a real app, you would decode this from the JWT or fetch from your database
  const roleCookie = request.cookies.get("role")
  const isAdmin = roleCookie?.value === "admin"

  // Case 1: Admin routes - redirect non-admin users
  if (isAdminRoute(pathname)) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login?from=" + pathname, request.url))
    }

    if (!isAdmin) {
      return NextResponse.redirect(new URL("/", request.url))
    }

    return NextResponse.next()
  }

  // Case 2: Protected routes - redirect unauthenticated users
  if (isProtectedRoute(pathname)) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login?from=" + pathname, request.url))
    }

    // Case 3: Premium content - check subscription status
    if (isPremiumContent(pathname)) {
      const subscriptionCookie = request.cookies.get("subscription")
      const isPremiumUser = subscriptionCookie?.value === "premium"

      if (!isPremiumUser) {
        return NextResponse.redirect(new URL("/subscribe?from=" + pathname, request.url))
      }
    }

    return NextResponse.next()
  }

  // Allow public routes
  return NextResponse.next()
}

// Configure middleware to run on specific paths
export const config = {
  matcher: [
    // Match all routes except static files, api routes, and _next
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
}
