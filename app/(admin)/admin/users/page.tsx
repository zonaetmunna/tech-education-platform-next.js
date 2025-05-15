import type { Metadata } from "next"
import Link from "next/link"
import { ChevronDown, Download, Filter, MoreHorizontal, Search, Trash2, UserPlus } from "lucide-react"

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

export const metadata: Metadata = {
  title: "User Management | Tech Education Platform",
  description: "Manage all users on the platform",
}

export default function UserManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">Manage all users on the platform</p>
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
              <DropdownMenuLabel>Role</DropdownMenuLabel>
              <DropdownMenuItem>
                <Checkbox id="student" className="mr-2" />
                <label htmlFor="student">Student</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="instructor" className="mr-2" />
                <label htmlFor="instructor">Instructor</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="admin" className="mr-2" />
                <label htmlFor="admin">Admin</label>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Status</DropdownMenuLabel>
              <DropdownMenuItem>
                <Checkbox id="active" className="mr-2" />
                <label htmlFor="active">Active</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="inactive" className="mr-2" />
                <label htmlFor="inactive">Inactive</label>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Subscription</DropdownMenuLabel>
              <DropdownMenuItem>
                <Checkbox id="premium" className="mr-2" />
                <label htmlFor="premium">Premium</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="free" className="mr-2" />
                <label htmlFor="free">Free</label>
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
                  <Checkbox id="select-all" />
                </TableHead>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "Emma Wilson",
                  email: "emma.wilson@example.com",
                  role: "Student",
                  status: "Active",
                  joined: "Apr 15, 2025",
                  lastActive: "Today",
                  premium: true,
                },
                {
                  name: "James Rodriguez",
                  email: "james.r@example.com",
                  role: "Student",
                  status: "Active",
                  joined: "Apr 12, 2025",
                  lastActive: "Yesterday",
                  premium: false,
                },
                {
                  name: "Sophia Chen",
                  email: "sophia.chen@example.com",
                  role: "Student",
                  status: "Active",
                  joined: "Apr 8, 2025",
                  lastActive: "2 days ago",
                  premium: true,
                },
                {
                  name: "Marcus Johnson",
                  email: "marcus.j@example.com",
                  role: "Student",
                  status: "Inactive",
                  joined: "Apr 5, 2025",
                  lastActive: "2 weeks ago",
                  premium: false,
                },
                {
                  name: "Sarah Johnson",
                  email: "sarah.johnson@example.com",
                  role: "Instructor",
                  status: "Active",
                  joined: "Mar 20, 2025",
                  lastActive: "Today",
                  premium: true,
                },
                {
                  name: "Michael Chen",
                  email: "michael.chen@example.com",
                  role: "Instructor",
                  status: "Active",
                  joined: "Mar 15, 2025",
                  lastActive: "Yesterday",
                  premium: true,
                },
                {
                  name: "Emily Parker",
                  email: "emily.parker@example.com",
                  role: "Instructor",
                  status: "Active",
                  joined: "Mar 10, 2025",
                  lastActive: "Today",
                  premium: true,
                },
                {
                  name: "David Wilson",
                  email: "david.wilson@example.com",
                  role: "Instructor",
                  status: "Active",
                  joined: "Mar 5, 2025",
                  lastActive: "3 days ago",
                  premium: true,
                },
                {
                  name: "Alex Rivera",
                  email: "alex.rivera@example.com",
                  role: "Instructor",
                  status: "Active",
                  joined: "Feb 28, 2025",
                  lastActive: "Today",
                  premium: true,
                },
                {
                  name: "John Smith",
                  email: "john.smith@example.com",
                  role: "Admin",
                  status: "Active",
                  joined: "Jan 15, 2025",
                  lastActive: "Today",
                  premium: true,
                },
              ].map((user, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox id={`select-${i}`} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${user.name[0]}`} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        {user.premium && (
                          <Badge variant="outline" className="mt-1">
                            Premium
                          </Badge>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        user.role === "Admin"
                          ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                          : user.role === "Instructor"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                      }
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                      }`}
                    >
                      {user.status}
                    </div>
                  </TableCell>
                  <TableCell>{user.joined}</TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit User</DropdownMenuItem>
                        <DropdownMenuItem>Reset Password</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <div className="text-sm text-muted-foreground">Page 1 of 1,235</div>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
