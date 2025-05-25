import { BarChart3, BookOpen, Calendar, Download, LineChart, PieChart, Users } from "lucide-react"
import type { Metadata } from "next"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Analytics | Tech Education Platform",
  description: "Platform analytics and insights",
}

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">Platform analytics and performance insights</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="30days">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">Last year</SelectItem>
                <SelectItem value="all">All time</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8,942</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+8%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Course Enrollments</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24,156</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+15%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18m 42s</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500">+3%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                  <CardDescription>New user registrations over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full rounded-md border p-4">
                    <div className="flex h-full w-full items-center justify-center">
                      <LineChart className="h-16 w-16 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">User Growth Chart</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Where your users are coming from</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full rounded-md border p-4">
                    <div className="flex h-full w-full items-center justify-center">
                      <PieChart className="h-16 w-16 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Traffic Sources Chart</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Popular Content</CardTitle>
                  <CardDescription>Most viewed content in the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full rounded-md border p-4">
                    <div className="flex h-full w-full items-center justify-center">
                      <BarChart3 className="h-16 w-16 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Popular Content Chart</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>User Retention</CardTitle>
                  <CardDescription>Weekly user retention rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full rounded-md border p-4">
                    <div className="flex h-full w-full items-center justify-center">
                      <LineChart className="h-16 w-16 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Retention Chart</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Other tab contents would be similar */}
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
