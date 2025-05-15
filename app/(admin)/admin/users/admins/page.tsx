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
  title: "Admin Management | Tech Education Platform",
  description: "Manage all administrators on the platform",
}

export default function AdminManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Management</h1>
          <p className="text-muted-foreground">Manage all administrators on the platform</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/users/export?role=admin">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/users/new?role=admin">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Admin
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search admins..." className="w-full pl-8" />
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
              <DropdownMenuLabel>Permission Level</DropdownMenuLabel>
              <DropdownMenuItem>
                <Checkbox id="super-admin" className="mr-2" />
                <label htmlFor="super-admin">Super Admin</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="content-admin" className="mr-2" />
                <label htmlFor="content-admin">Content Admin</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="user-admin" className="mr-2" />
                <label htmlFor="user-admin">User Admin</label>
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
              <DropdownMenuItem>Last Active</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <CardTitle>All Administrators</CardTitle>
            <div className="text-sm text-muted-foreground">Showing 5 of 12 administrators</div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30px]">
                  <Checkbox id="select-all" />
                </TableHead>
                <TableHead>Admin</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Permission Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "John Smith",
                  email: "john.smith@example.com",
                  permissionLevel: "Super Admin",
                  status: "Active",
                  lastActive: "Today",
                  joined: "Jan 15, 2025",
                },
                {
                  name: "Lisa Johnson",
                  email: "lisa.johnson@example.com",
                  permissionLevel: "Content Admin",
                  status: "Active",
                  lastActive: "Yesterday",
                  joined: "Feb 10, 2025",
                },
                {
                  name: "Robert Chen",
                  email: "robert.chen@example.com",
                  permissionLevel: "User Admin",
                  status: "Active",
                  lastActive: "Today",
                  joined: "Mar 5, 2025",
                },
                {
                  name: "Maria Garcia",
                  email: "maria.garcia@example.com",
                  permissionLevel: "Content Admin",
                  status: "Inactive",
                  lastActive: "2 weeks ago",
                  joined: "Jan 20, 2025",
                },
                {
                  name: "James Wilson",
                  email: "james.wilson@example.com",
                  permissionLevel: "Super Admin",
                  status: "Active",
                  lastActive: "Today",
                  joined: "Dec 10, 2024",
                },
              ].map((admin, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox id={`select-${i}`} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={`/placeholder.svg?height=32&width=32&text=${admin.name[0]}`}
                          alt={admin.name}
                        />
                        <AvatarFallback>
                          {admin.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{admin.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>{admin.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        admin.permissionLevel === "Super Admin"
                          ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                          : admin.permissionLevel === "Content Admin"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      }
                    >
                      {admin.permissionLevel}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        admin.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                      }`}
                    >
                      {admin.status}
                    </div>
                  </TableCell>
                  <TableCell>{admin.lastActive}</TableCell>
                  <TableCell>{admin.joined}</TableCell>
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
                        <DropdownMenuItem>Edit Permissions</DropdownMenuItem>
                        <DropdownMenuItem>Reset Password</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Remove Admin
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
          <div className="text-sm text-muted-foreground">Page 1 of 3</div>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
