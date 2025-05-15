import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, ChevronDown, Download, Filter, Mic, MoreHorizontal, Plus, Search, Trash2, Video } from "lucide-react"

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

export const metadata: Metadata = {
  title: "Content Management | Tech Education Platform",
  description: "Manage all content on the platform",
}

export default function ContentManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
          <p className="text-muted-foreground">Manage all courses, videos, podcasts, and blog posts</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/content/import">
              <Download className="mr-2 h-4 w-4" />
              Import
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/content/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Content
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search content..." className="w-full pl-8" />
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
              <DropdownMenuItem>
                <Checkbox id="archived" className="mr-2" />
                <label htmlFor="archived">Archived</label>
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
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Content</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
          <TabsTrigger value="blog">Blog Posts</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle>All Content</CardTitle>
                <div className="text-sm text-muted-foreground">Showing 10 of 235 items</div>
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
                    <TableHead>Type</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      title: "Advanced TypeScript Patterns",
                      type: "Course",
                      icon: BookOpen,
                      author: "Sarah Johnson",
                      status: "Published",
                      date: "Apr 15, 2025",
                      premium: true,
                    },
                    {
                      title: "Building a Full-Stack App with Next.js",
                      type: "Video",
                      icon: Video,
                      author: "Michael Chen",
                      status: "Published",
                      date: "Apr 10, 2025",
                      premium: true,
                    },
                    {
                      title: "Interview with Tech Industry Leaders",
                      type: "Podcast",
                      icon: Mic,
                      author: "Alex Rivera",
                      status: "Draft",
                      date: "Apr 8, 2025",
                      premium: false,
                    },
                    {
                      title: "The Future of AI in Web Development",
                      type: "Blog",
                      icon: BookOpen,
                      author: "Emily Parker",
                      status: "Published",
                      date: "Apr 5, 2025",
                      premium: false,
                    },
                    {
                      title: "Docker and Kubernetes Fundamentals",
                      type: "Course",
                      icon: BookOpen,
                      author: "David Wilson",
                      status: "Published",
                      date: "Apr 1, 2025",
                      premium: true,
                    },
                    {
                      title: "Mastering CSS Grid Layouts",
                      type: "Video",
                      icon: Video,
                      author: "Sarah Johnson",
                      status: "Published",
                      date: "Mar 28, 2025",
                      premium: false,
                    },
                    {
                      title: "Tech Talk: Web Performance Optimization",
                      type: "Podcast",
                      icon: Mic,
                      author: "Alex Rivera",
                      status: "Published",
                      date: "Mar 25, 2025",
                      premium: false,
                    },
                    {
                      title: "Introduction to GraphQL",
                      type: "Course",
                      icon: BookOpen,
                      author: "Michael Chen",
                      status: "Draft",
                      date: "Mar 20, 2025",
                      premium: true,
                    },
                    {
                      title: "Responsive Design Best Practices",
                      type: "Blog",
                      icon: BookOpen,
                      author: "Emily Parker",
                      status: "Published",
                      date: "Mar 18, 2025",
                      premium: false,
                    },
                    {
                      title: "JavaScript Design Patterns",
                      type: "Course",
                      icon: BookOpen,
                      author: "David Wilson",
                      status: "Published",
                      date: "Mar 15, 2025",
                      premium: true,
                    },
                  ].map((item, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Checkbox id={`select-${i}`} />
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{item.title}</div>
                        {item.premium && (
                          <Badge variant="outline" className="mt-1">
                            Premium
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <item.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                          {item.type}
                        </div>
                      </TableCell>
                      <TableCell>{item.author}</TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            item.status === "Published"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                          }`}
                        >
                          {item.status}
                        </div>
                      </TableCell>
                      <TableCell>{item.date}</TableCell>
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
              <div className="text-sm text-muted-foreground">Page 1 of 24</div>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Other tab contents would be similar */}
      </Tabs>
    </div>
  )
}
