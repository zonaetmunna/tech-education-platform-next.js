import { AuthCheck } from "@/components/auth-check"
import { DashboardLayout } from "@/components/dashboard-layout"
import { SidebarProvider } from "@/components/ui/sidebar"
import type React from "react"

export default function DashboardLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AuthCheck>
      <SidebarProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </SidebarProvider>
    </AuthCheck>
  )
}
