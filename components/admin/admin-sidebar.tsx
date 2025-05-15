"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  BookOpen,
  ChevronDown,
  CreditCard,
  FileText,
  Globe,
  Home,
  LayoutDashboard,
  Mic,
  Settings,
  ShieldCheck,
  Users,
  Video,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

type NavItem = {
  title: string
  href: string
  icon: React.ElementType
  submenu?: NavItem[]
}

export function AdminSidebar() {
  const pathname = usePathname()
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    content: true,
    users: true,
  })

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }))
  }

  const isActive = (path: string) => pathname === path

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Content",
      href: "/admin/content",
      icon: FileText,
      submenu: [
        {
          title: "All Content",
          href: "/admin/content",
          icon: FileText,
        },
        {
          title: "Courses",
          href: "/admin/content/courses",
          icon: BookOpen,
        },
        {
          title: "Videos",
          href: "/admin/content/videos",
          icon: Video,
        },
        {
          title: "Podcasts",
          href: "/admin/content/podcasts",
          icon: Mic,
        },
        {
          title: "Blog Posts",
          href: "/admin/content/blog",
          icon: FileText,
        },
      ],
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: Users,
      submenu: [
        {
          title: "All Users",
          href: "/admin/users",
          icon: Users,
        },
        {
          title: "Instructors",
          href: "/admin/users/instructors",
          icon: Users,
        },
        {
          title: "Admins",
          href: "/admin/users/admins",
          icon: ShieldCheck,
        },
      ],
    },
    {
      title: "Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
    },
    {
      title: "Subscriptions",
      href: "/admin/subscriptions",
      icon: CreditCard,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
      submenu: [
        {
          title: "General",
          href: "/admin/settings",
          icon: Globe,
        },
        {
          title: "Appearance",
          href: "/admin/settings/appearance",
          icon: Settings,
        },
        {
          title: "Payments",
          href: "/admin/settings/payments",
          icon: CreditCard,
        },
      ],
    },
  ]

  return (
    <div className="flex h-full flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/admin" className="flex items-center gap-2 font-semibold">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <span>Admin Panel</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-2 py-2">
        <div className="space-y-1">
          <Link href="/" className="flex w-full">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Back to Site
            </Button>
          </Link>
          <Separator className="my-2" />
          {navItems.map((item) => {
            if (item.submenu) {
              return (
                <Collapsible
                  key={item.href}
                  open={openGroups[item.title.toLowerCase()]}
                  onOpenChange={() => toggleGroup(item.title.toLowerCase())}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-between",
                        pathname.startsWith(item.href) && "bg-accent text-accent-foreground",
                      )}
                    >
                      <span className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.title}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openGroups[item.title.toLowerCase()] && "rotate-180",
                        )}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 pt-1">
                    <div className="space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link key={subItem.href} href={subItem.href} className="flex w-full">
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start",
                              isActive(subItem.href) && "bg-accent text-accent-foreground",
                            )}
                          >
                            <subItem.icon className="mr-2 h-4 w-4" />
                            {subItem.title}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              )
            }

            return (
              <Link key={item.href} href={item.href} className="flex w-full">
                <Button
                  variant="ghost"
                  className={cn("w-full justify-start", isActive(item.href) && "bg-accent text-accent-foreground")}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Button>
              </Link>
            )
          })}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <div className="text-xs text-muted-foreground">
          <p>Tech Education Platform</p>
          <p>Admin v1.0.0</p>
        </div>
      </div>
    </div>
  )
}
