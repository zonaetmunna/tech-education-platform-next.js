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
  title: "Instructor Management | Tech Education Platform",
  description: "Manage all instructors on the platform",
}

export default function InstructorManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Instructor Management</h1>
          <p className="text-muted-foreground">Manage all instructors on the platform</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/users/export?role=instructor">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/users/new?role=instructor">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Instructor
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search instructors..." className="w-full pl-8" />
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
              <DropdownMenuLabel>Expertise</DropdownMenuLabel>
              <DropdownMenuItem>
                <Checkbox id="frontend" className="mr-2" />
                <label htmlFor="frontend">Frontend</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="backend" className="mr-2" />
                <label htmlFor="backend">Backend</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="fullstack" className="mr-2" />
                <label htmlFor="fullstack">Full Stack</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="mobile" className="mr-2" />
                <label htmlFor="mobile">Mobile</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="devops" className="mr-2" />
                <label htmlFor="devops">DevOps</label>
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
              <DropdownMenuItem>Most Courses</DropdownMenuItem>
              <DropdownMenuItem>Highest Rated</DropdownMenuItem>
              <DropdownMenuItem>Most Students</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <CardTitle>All Instructors</CardTitle>
            <div className="text-sm text-muted-foreground">Showing 5 of 48 instructors</div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30px]">
                  <Checkbox id="select-all" />
                </TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Expertise</TableHead>
                <TableHead>Courses</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "Sarah Johnson",
                  email: "sarah.johnson@example.com",
                  expertise: ["Frontend", "UI/UX"],
                  courses: 12,
                  students: 3456,
                  rating: 4.8,
                  status: "Active",
                },
                {
                  name: "Michael Chen",
                  email: "michael.chen@example.com",
                  expertise: ["Backend", "Database"],
                  courses: 8,
                  students: 2789,
                  rating: 4.7,
                  status: "Active",
                },
                {
                  name: "Emily Parker",
                  email: "emily.parker@example.com",
                  expertise: ["Frontend", "Mobile"],
                  courses: 10,
                  students: 4123,
                  rating: 4.9,
                  status: "Active",
                },
                {
                  name: "David Wilson",
                  email: "david.wilson@example.com",
                  expertise: ["DevOps", "Cloud"],
                  courses: 6,
                  students: 1876,
                  rating: 4.6,
                  status: "Active",
                },
                {
                  name: "Alex Rivera",
                  email: "alex.rivera@example.com",
                  expertise: ["Full Stack", "JavaScript"],
                  courses: 15,
                  students: 5234,
                  rating: 4.9,
                  status: "Active",
                },
              ].map((instructor, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox id={`select-${i}`} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={`/placeholder.svg?height=32&width=32&text=${instructor.name[0]}`}
                          alt={instructor.name}
                        />
                        <AvatarFallback>
                          {instructor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{instructor.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>{instructor.email}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {instructor.expertise.map((exp, j) => (
                        <Badge key={j} variant="outline">
                          {exp}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{instructor.courses}</TableCell>
                  <TableCell>{instructor.students.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {instructor.rating}
                      <span className="ml-1 text-yellow-500">★</span>
                    </div>
                  </TableCell>
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
                        <DropdownMenuItem>Edit Instructor</DropdownMenuItem>
                        <DropdownMenuItem>View Courses</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Remove Instructor
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
          <div className="text-sm text-muted-foreground">Page 1 of 10</div>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
