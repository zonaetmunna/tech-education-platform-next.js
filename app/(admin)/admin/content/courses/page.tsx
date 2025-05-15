import type { Metadata } from "next"
import Link from "next/link"
import { ChevronDown, Download, Filter, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"

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
  title: "Course Management | Tech Education Platform",
  description: "Manage all courses on the platform",
}

export default function CourseManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Course Management</h1>
          <p className="text-muted-foreground">Manage all courses on the platform</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/content/import">
              <Download className="mr-2 h-4 w-4" />
              Import
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/content/new?type=course">
              <Plus className="mr-2 h-4 w-4" />
              Add Course
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search courses..." className="w-full pl-8" />
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
                <Checkbox id="published" className="mr-2" />
                <label htmlFor="published">Published</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="draft" className="mr-2" />
                <label htmlFor="draft">Draft</label>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Difficulty</DropdownMenuLabel>
              <DropdownMenuItem>
                <Checkbox id="beginner" className="mr-2" />
                <label htmlFor="beginner">Beginner</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="intermediate" className="mr-2" />
                <label htmlFor="intermediate">Intermediate</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="advanced" className="mr-2" />
                <label htmlFor="advanced">Advanced</label>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
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
              <DropdownMenuItem>Most Popular</DropdownMenuItem>
              <DropdownMenuItem>Highest Rated</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <CardTitle>All Courses</CardTitle>
            <div className="text-sm text-muted-foreground">Showing 10 of 156 courses</div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30px]">
                  <Checkbox id="select-all" />
                </TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  title: "Advanced TypeScript Patterns",
                  instructor: "Sarah Johnson",
                  difficulty: "Advanced",
                  status: "Published",
                  students: 1245,
                  rating: 4.8,
                  premium: true,
                },
                {
                  title: "Docker and Kubernetes Fundamentals",
                  instructor: "David Wilson",
                  difficulty: "Intermediate",
                  status: "Published",
                  students: 987,
                  rating: 4.7,
                  premium: true,
                },
                {
                  title: "Introduction to GraphQL",
                  instructor: "Michael Chen",
                  difficulty: "Beginner",
                  status: "Draft",
                  students: 0,
                  rating: 0,
                  premium: true,
                },
                {
                  title: "JavaScript Design Patterns",
                  instructor: "David Wilson",
                  difficulty: "Intermediate",
                  status: "Published",
                  students: 1532,
                  rating: 4.9,
                  premium: true,
                },
                {
                  title: "React Hooks Masterclass",
                  instructor: "Emily Parker",
                  difficulty: "Intermediate",
                  status: "Published",
                  students: 2156,
                  rating: 4.9,
                  premium: true,
                },
                {
                  title: "CSS Animation Workshop",
                  instructor: "Sarah Johnson",
                  difficulty: "Beginner",
                  status: "Published",
                  students: 876,
                  rating: 4.5,
                  premium: false,
                },
                {
                  title: "Full-Stack Development with MERN",
                  instructor: "Alex Rivera",
                  difficulty: "Advanced",
                  status: "Published",
                  students: 1423,
                  rating: 4.7,
                  premium: true,
                },
                {
                  title: "Python for Data Science",
                  instructor: "Michael Chen",
                  difficulty: "Intermediate",
                  status: "Published",
                  students: 3245,
                  rating: 4.8,
                  premium: true,
                },
                {
                  title: "Web Accessibility Fundamentals",
                  instructor: "Emily Parker",
                  difficulty: "Beginner",
                  status: "Published",
                  students: 654,
                  rating: 4.6,
                  premium: false,
                },
                {
                  title: "Serverless Architecture",
                  instructor: "David Wilson",
                  difficulty: "Advanced",
                  status: "Draft",
                  students: 0,
                  rating: 0,
                  premium: true,
                },
              ].map((course, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox id={`select-${i}`} />
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{course.title}</div>
                    {course.premium && (
                      <Badge variant="outline" className="mt-1">
                        Premium
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{course.instructor}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        course.difficulty === "Beginner"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : course.difficulty === "Intermediate"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                            : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                      }
                    >
                      {course.difficulty}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        course.status === "Published"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                      }`}
                    >
                      {course.status}
                    </div>
                  </TableCell>
                  <TableCell>{course.students.toLocaleString()}</TableCell>
                  <TableCell>
                    {course.rating > 0 ? (
                      <div className="flex items-center">
                        {course.rating}
                        <span className="ml-1 text-yellow-500">★</span>
                      </div>
                    ) : (
                      "N/A"
                    )}
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
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
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
          <div className="text-sm text-muted-foreground">Page 1 of 16</div>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
