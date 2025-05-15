"use client"

import type React from "react"

import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { isAuthenticated, hasRole, isPremiumUser } from "@/lib/auth-client"

interface AuthCheckProps {
  children: React.ReactNode
  requiredRole?: "user" | "instructor" | "admin"
  requirePremium?: boolean
}

export function AuthCheck({ children, requiredRole, requirePremium }: AuthCheckProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication
    const authenticated = isAuthenticated()

    if (!authenticated) {
      router.push(`/login?from=${encodeURIComponent(pathname)}`)
      return
    }

    // Check role if required
    if (requiredRole && !hasRole(requiredRole)) {
      router.push("/")
      return
    }

    // Check premium subscription if required
    if (requirePremium && !isPremiumUser()) {
      router.push(`/subscribe?from=${encodeURIComponent(pathname)}`)
      return
    }

    setIsAuthorized(true)
    setIsLoading(false)
  }, [pathname, requiredRole, requirePremium, router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return isAuthorized ? <>{children}</> : null
}
