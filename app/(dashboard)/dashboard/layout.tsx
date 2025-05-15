import type React from "react"
import { AuthCheck } from "@/components/auth-check"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function DashboardLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AuthCheck>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthCheck>
  )
}
