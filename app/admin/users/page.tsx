import type { Metadata } from "next"
import Link from "next/link"
import { ChevronDown, Download, Filter, MoreHorizontal, Search, UserPlus } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"

export const metadata: Metadata = {
  title: "User Management | Tech Education Platform",
  description: "Manage users and their accounts",
}

export default function UserManagementPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
            <p className="text-muted-foreground">Manage users, roles, and permissions</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/admin/users/export">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Link>
            </Button>
            <Button asChild>
              <Link href="/admin/users/new">
                <UserPlus className="mr-2 h-4 w-4" />
                Add User
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search users..." className="w-full pl-8" />
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Checkbox id="premium-users" className="mr-2" />
                  <label htmlFor="premium-users">Premium Users</label>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Checkbox id="free-users" className="mr-2" />
                  <label htmlFor="free-users">Free Users</label>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Checkbox id="admins" className="mr-2" />
                  <label htmlFor="admins">Admins</label>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Checkbox id="instructors" className="mr-2" />
                  <label htmlFor="instructors">Instructors</label>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Checkbox id="active" className="mr-2" />
                  <label htmlFor="active">Active</label>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Checkbox id="inactive" className="mr-2" />
                  <label htmlFor="inactive">Inactive</label>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Sort
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[180px]">
                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Newest First</DropdownMenuItem>
                <DropdownMenuItem>Oldest First</DropdownMenuItem>
                <DropdownMenuItem>A-Z</DropdownMenuItem>
                <DropdownMenuItem>Z-A</DropdownMenuItem>
                <DropdownMenuItem>Most Active</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
            <TabsTrigger value="free">Free</TabsTrigger>
            <TabsTrigger value="admins">Admins</TabsTrigger>
            <TabsTrigger value="instructors">Instructors</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <CardTitle>All Users</CardTitle>
                  <div className="text-sm text-muted-foreground">Showing 10 of 12,345 users</div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[30px]">
                        <Checkbox id="select-all-users" />
                      </TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "Emma Wilson",
                        email: "emma.wilson@example.com",
                        role: "User",
                        plan: "Premium",
                        status: "Active",
                        joined: "Apr 15, 2025",
                      },
                      {
                        name: "James Rodriguez",
                        email: "james.r@example.com",
                        role: "User",
                        plan: "Free",
                        status: "Active",
                        joined: "Apr 12, 2025",
                      },
                      {
                        name: "Sophia Chen",
                        email: "sophia.chen@example.com",
                        role: "Instructor",
                        plan: "Premium",
                        status: "Active",
                        joined: "Apr 10, 2025",
                      },
                      {
                        name: "Marcus Johnson",
                        email: "marcus.j@example.com",
                        role: "User",
                        plan: "Free",
                        status: "Inactive",
                        joined: "Apr 8, 2025",
                      },
                      {
                        name: "Sarah Thompson",
                        email: "sarah.t@example.com",
                        role: "Admin",
                        plan: "Premium",
                        status: "Active",
                        joined: "Apr 5, 2025",
                      },
                      {
                        name: "David Lee",
                        email: "david.lee@example.com",
                        role: "User",
                        plan: "Premium",
                        status: "Active",
                        joined: "Apr 3, 2025",
                      },
                      {
                        name: "Olivia Martinez",
                        email: "olivia.m@example.com",
                        role: "User",
                        plan: "Free",
                        status: "Active",
                        joined: "Apr 1, 2025",
                      },
                      {
                        name: "Michael Brown",
                        email: "michael.b@example.com",
                        role: "Instructor",
                        plan: "Premium",
                        status: "Active",
                        joined: "Mar 28, 2025",
                      },
                      {
                        name: "Emily Davis",
                        email: "emily.d@example.com",
                        role: "User",
                        plan: "Free",
                        status: "Inactive",
                        joined: "Mar 25, 2025",
                      },
                      {
                        name: "Daniel Wilson",
                        email: "daniel.w@example.com",
                        role: "User",
                        plan: "Premium",
                        status: "Active",
                        joined: "Mar 20, 2025",
                      },
                    ].map((user, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <Checkbox id={`select-user-${i}`} />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user.name} />
                              <AvatarFallback>
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="font-medium">{user.name}</div>
                          </div>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              user.role === "Admin"
                                ? "border-red-200 bg-red-100 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-300"
                                : user.role === "Instructor"
                                  ? "border-blue-200 bg-blue-100 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300"
                                  : ""
                            }
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={user.plan === "Premium" ? "default" : "outline"}
                            className={user.plan === "Premium" ? "bg-purple-600 hover:bg-purple-600/80" : ""}
                          >
                            {user.plan}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              user.status === "Active"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                            }`}
                          >
                            {user.status}
                          </div>
                        </TableCell>
                        <TableCell>{user.joined}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Edit User</DropdownMenuItem>
                              <DropdownMenuItem>Change Role</DropdownMenuItem>
                              <DropdownMenuItem>Reset Password</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Deactivate User</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex items-center justify-between p-4">
                <div className="text-sm text-muted-foreground">Showing 1-10 of 12,345 users</div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Other tab contents would be similar */}
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
