"use client"

import type React from "react"

import {
  BookOpen,
  Code,
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  Map,
  Mic,
  Search,
  Settings,
  ShieldCheck,
  User,
  Video,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { ModeToggle } from "@/components/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const { isMobile } = useSidebar()

  const mainNavItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Videos", href: "/videos", icon: Video },
    { name: "Podcasts", href: "/podcasts", icon: Mic },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "Roadmaps", href: "/roadmaps", icon: Map },
    { name: "Code Playground", href: "/playground", icon: Code },
  ]

  const userNavItems = [
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  const adminNavItems = [{ name: "Admin Panel", href: "/admin", icon: ShieldCheck }]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        <Sidebar variant="sidebar" collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-md bg-primary p-1">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold">Tech Education</span>
            </Link>
          </div>
          <form onSubmit={handleSearch} className="px-2 pt-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-background pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNavItems.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild isActive={isActive(item.href)} tooltip={item.name}>
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>User</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {userNavItems.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild isActive={isActive(item.href)} tooltip={item.name}>
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Admin</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminNavItems.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild isActive={isActive(item.href)} tooltip={item.name}>
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">User Name</span>
                <span className="text-xs text-muted-foreground">Premium</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <ModeToggle />
              <Button variant="ghost" size="icon" asChild>
                <Link href="/logout">
                  <LogOut className="h-4 w-4" />
                  <span className="sr-only">Log out</span>
                </Link>
              </Button>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <SidebarTrigger />
            <div className="ml-auto flex items-center gap-4">
              {isMobile && (
                <Button variant="outline" size="icon" asChild>
                  <Link href="/search">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Link>
                </Button>
              )}
              <Button variant="outline" size="sm" asChild>
                <Link href="/premium">Upgrade to Premium</Link>
              </Button>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6">{children}</main>
          <footer className="border-t py-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tech Education Platform. All rights reserved.
          </footer>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
