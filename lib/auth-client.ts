"use client"

export type UserRole = "user" | "instructor" | "admin"

export interface User {
  id: number
  name: string
  email: string
  role: UserRole
  subscription: "free" | "premium"
}

// Client-side function to get the current user from cookies
export function getCurrentUser(): User | null {
  try {
    // Parse cookies manually on the client side
    const cookies = document.cookie.split(";").reduce(
      (acc, cookie) => {
        const [key, value] = cookie.trim().split("=")
        acc[key] = value
        return acc
      },
      {} as Record<string, string>,
    )

    const authCookie = cookies["auth"]

    if (!authCookie) {
      return null
    }

    // For demo purposes, we're assuming the auth cookie contains the user ID
    const userId = Number.parseInt(authCookie)

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

// Mock login function (for demonstration purposes)
export async function login(email: string, password: string): Promise<User | null> {
  // In a real app, you would validate credentials against your database
  // and generate a JWT or session token

  // Mock users for demonstration
  const users: Record<string, User> = {
    "admin@example.com": {
      id: 1,
      name: "Admin User",
      email: "admin@example.com",
      role: "admin",
      subscription: "premium",
    },
    "premium@example.com": {
      id: 2,
      name: "Premium User",
      email: "premium@example.com",
      role: "user",
      subscription: "premium",
    },
    "free@example.com": {
      id: 3,
      name: "Free User",
      email: "free@example.com",
      role: "user",
      subscription: "free",
    },
    "instructor@example.com": {
      id: 4,
      name: "Instructor",
      email: "instructor@example.com",
      role: "instructor",
      subscription: "premium",
    },
  }

  const user = users[email]

  if (user && password === "password") {
    // Simple password check for demo
    // In a real app, you would set a secure HTTP-only cookie with a JWT
    document.cookie = `auth=${user.id}; path=/; max-age=86400`
    document.cookie = `role=${user.role}; path=/; max-age=86400`
    document.cookie = `subscription=${user.subscription}; path=/; max-age=86400`
    return user
  }

  return null
}

// Mock logout function
export function logout(): void {
  // Clear auth cookies
  document.cookie = "auth=; path=/; max-age=0"
  document.cookie = "role=; path=/; max-age=0"
  document.cookie = "subscription=; path=/; max-age=0"
}
