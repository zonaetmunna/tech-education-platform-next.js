"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Code, Compass, FileText, Home, LayoutDashboard, Mic, Settings, User, Video } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const pathname = usePathname()

  const mainNavItems = [
    {
      title: "Home",
      href: "/",
      icon: Home,
    },
    {
      title: "Courses",
      href: "/courses",
      icon: BookOpen,
    },
    {
      title: "Videos",
      href: "/videos",
      icon: Video,
    },
    {
      title: "Podcasts",
      href: "/podcasts",
      icon: Mic,
    },
    {
      title: "Blog",
      href: "/blog",
      icon: FileText,
    },
    {
      title: "Roadmaps",
      href: "/roadmaps",
      icon: Compass,
    },
    {
      title: "Playground",
      href: "/playground",
      icon: Code,
    },
  ]

  const dashboardNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center px-2 py-3">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Tech</span>
            <span>Academy</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {mainNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarSeparator />
        <SidebarMenu>
          {dashboardNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">© 2025 Tech Academy</div>
          <SidebarTrigger />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
