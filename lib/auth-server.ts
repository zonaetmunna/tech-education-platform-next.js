import { cookies } from "next/headers"

export type UserRole = "user" | "instructor" | "admin"

export interface User {
  id: number
  name: string
  email: string
  role: UserRole
  subscription: "free" | "premium"
}

// Server-side function to get the current user
export function getCurrentUser(): User | null {
  const cookieStore = cookies()
  const authCookie = cookieStore.get("auth")

  if (!authCookie) {
    return null
  }

  // In a real app, you would decode the JWT or fetch the user from your database
  try {
    // For demo purposes, we're assuming the auth cookie contains the user ID
    const userId = Number.parseInt(authCookie.value)

    // Mock user data
    const users: Record<number, User> = {
      1: {
        id: 1,
        name: "Admin User",
        email: "admin@example.com",
        role: "admin",
        subscription: "premium",
      },
      2: {
        id: 2,
        name: "Premium User",
        email: "premium@example.com",
        role: "user",
        subscription: "premium",
      },
      3: {
        id: 3,
        name: "Free User",
        email: "free@example.com",
        role: "user",
        subscription: "free",
      },
      4: {
        id: 4,
        name: "Instructor",
        email: "instructor@example.com",
        role: "instructor",
        subscription: "premium",
      },
    }

    return users[userId] || null
  } catch (error) {
    console.error("Error parsing auth cookie:", error)
    return null
  }
}

// Check if the user is authenticated
export function isAuthenticated(): boolean {
  return !!getCurrentUser()
}

// Check if the user has a specific role
export function hasRole(role: UserRole): boolean {
  const user = getCurrentUser()
  return user?.role === role
}

// Check if the user has a premium subscription
export function isPremiumUser(): boolean {
  const user = getCurrentUser()
  return user?.subscription === "premium"
}
