import type { Metadata } from "next"
import Link from "next/link"
import {
  BarChart3,
  BookOpen,
  DollarSign,
  Download,
  FileText,
  LineChart,
  Mic,
  PieChart,
  Plus,
  Users,
  Video,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Admin Dashboard | Tech Education Platform",
  description: "Admin dashboard for platform management",
}

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your platform and monitor performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/reports">
              <Download className="mr-2 h-4 w-4" />
              Reports
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/content/new">
              <Plus className="mr-2 h-4 w-4" />
              New Content
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+12%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$48,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+8%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+5</span> new this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+3%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-md border p-4">
              <div className="flex h-full w-full items-center justify-center">
                <LineChart className="h-16 w-16 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Revenue Chart</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Content Distribution</CardTitle>
            <CardDescription>Breakdown by content type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-md border p-4">
              <div className="flex h-full w-full items-center justify-center">
                <PieChart className="h-16 w-16 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Content Distribution Chart</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Platform Analytics</CardTitle>
          <CardDescription>Key metrics and performance indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="users">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="users">
                <Users className="mr-2 h-4 w-4" />
                Users
              </TabsTrigger>
              <TabsTrigger value="content">
                <FileText className="mr-2 h-4 w-4" />
                Content
              </TabsTrigger>
              <TabsTrigger value="engagement">
                <BarChart3 className="mr-2 h-4 w-4" />
                Engagement
              </TabsTrigger>
              <TabsTrigger value="revenue">
                <DollarSign className="mr-2 h-4 w-4" />
                Revenue
              </TabsTrigger>
            </TabsList>
            <TabsContent value="users" className="mt-6 space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">New Users</div>
                      <div className="text-sm text-muted-foreground">1,245 this month</div>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Active Users</div>
                      <div className="text-sm text-muted-foreground">8,942 this month</div>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Premium Users</div>
                      <div className="text-sm text-muted-foreground">3,156 this month</div>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex h-full w-full items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">User Growth Chart</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="content" className="mt-6 space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Courses</div>
                      <div className="text-sm text-muted-foreground">156 total</div>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Videos</div>
                      <div className="text-sm text-muted-foreground">432 total</div>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Podcasts</div>
                      <div className="text-sm text-muted-foreground">78 total</div>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Blog Posts</div>
                      <div className="text-sm text-muted-foreground">215 total</div>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex h-full w-full items-center justify-center">
                    <PieChart className="h-16 w-16 text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">Content Distribution Chart</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            {/* Other tab contents would be similar */}
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Content</CardTitle>
            <CardDescription>Recently added courses, videos, and other content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Advanced TypeScript Patterns",
                  type: "Course",
                  icon: BookOpen,
                  date: "2 days ago",
                  status: "Published",
                },
                {
                  title: "Building a Full-Stack App with Next.js",
                  type: "Video",
                  icon: Video,
                  date: "1 week ago",
                  status: "Published",
                },
                {
                  title: "Interview with Tech Industry Leaders",
                  type: "Podcast",
                  icon: Mic,
                  date: "3 days ago",
                  status: "Draft",
                },
                {
                  title: "The Future of AI in Web Development",
                  type: "Blog",
                  icon: FileText,
                  date: "5 days ago",
                  status: "Published",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-primary/10 p-2">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {item.type} • Added {item.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`rounded-full px-2 py-1 text-xs ${
                        item.status === "Published"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                      }`}
                    >
                      {item.status}
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/admin/content">View All Content</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
            <CardDescription>Recently registered users on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Emma Wilson",
                  email: "emma.wilson@example.com",
                  date: "2 days ago",
                  plan: "Premium",
                },
                {
                  name: "James Rodriguez",
                  email: "james.r@example.com",
                  date: "3 days ago",
                  plan: "Free",
                },
                {
                  name: "Sophia Chen",
                  email: "sophia.chen@example.com",
                  date: "1 week ago",
                  plan: "Premium",
                },
                {
                  name: "Marcus Johnson",
                  email: "marcus.j@example.com",
                  date: "1 week ago",
                  plan: "Free",
                },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {user.email} • Joined {user.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`rounded-full px-2 py-1 text-xs ${
                        user.plan === "Premium"
                          ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                      }`}
                    >
                      {user.plan}
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/admin/users">View All Users</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
