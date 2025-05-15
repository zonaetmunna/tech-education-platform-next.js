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
  title: "Blog Management | Tech Education Platform",
  description: "Manage all blog posts on the platform",
}

export default function BlogManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Management</h1>
          <p className="text-muted-foreground">Manage all blog posts on the platform</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/content/import">
              <Download className="mr-2 h-4 w-4" />
              Import
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/content/new?type=blog">
              <Plus className="mr-2 h-4 w-4" />
              Add Blog Post
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search blog posts..." className="w-full pl-8" />
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
              <DropdownMenuLabel>Category</DropdownMenuLabel>
              <DropdownMenuItem>
                <Checkbox id="tutorials" className="mr-2" />
                <label htmlFor="tutorials">Tutorials</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="news" className="mr-2" />
                <label htmlFor="news">News</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="opinion" className="mr-2" />
                <label htmlFor="opinion">Opinion</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="case-studies" className="mr-2" />
                <label htmlFor="case-studies">Case Studies</label>
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
              <DropdownMenuItem>Most Views</DropdownMenuItem>
              <DropdownMenuItem>A-Z</DropdownMenuItem>
              <DropdownMenuItem>Z-A</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <CardTitle>All Blog Posts</CardTitle>
            <div className="text-sm text-muted-foreground">Showing 10 of 215 posts</div>
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
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Published</TableHead>
                <TableHead>Views</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  title: "The Future of AI in Web Development",
                  author: "Emily Parker",
                  category: "Opinion",
                  status: "Published",
                  date: "Apr 5, 2025",
                  views: 12543,
                  featured: true,
                },
                {
                  title: "Responsive Design Best Practices",
                  author: "Emily Parker",
                  category: "Tutorials",
                  status: "Published",
                  date: "Mar 18, 2025",
                  views: 8765,
                  featured: false,
                },
                {
                  title: "How We Optimized Our React App",
                  author: "Michael Chen",
                  category: "Case Studies",
                  status: "Published",
                  date: "Mar 10, 2025",
                  views: 9876,
                  featured: true,
                },
                {
                  title: "Understanding Web Accessibility",
                  author: "Sarah Johnson",
                  category: "Tutorials",
                  status: "Published",
                  date: "Mar 5, 2025",
                  views: 7654,
                  featured: false,
                },
                {
                  title: "The Rise of Serverless Architecture",
                  author: "David Wilson",
                  category: "News",
                  status: "Draft",
                  date: "",
                  views: 0,
                  featured: false,
                },
                {
                  title: "TypeScript vs JavaScript in 2025",
                  author: "Alex Rivera",
                  category: "Opinion",
                  status: "Published",
                  date: "Feb 28, 2025",
                  views: 11234,
                  featured: true,
                },
                {
                  title: "Building a Design System from Scratch",
                  author: "Emily Parker",
                  category: "Tutorials",
                  status: "Published",
                  date: "Feb 20, 2025",
                  views: 8543,
                  featured: false,
                },
                {
                  title: "The State of Frontend Frameworks",
                  author: "Michael Chen",
                  category: "News",
                  status: "Published",
                  date: "Feb 15, 2025",
                  views: 10456,
                  featured: true,
                },
                {
                  title: "Optimizing Database Queries",
                  author: "David Wilson",
                  category: "Tutorials",
                  status: "Published",
                  date: "Feb 10, 2025",
                  views: 7654,
                  featured: false,
                },
                {
                  title: "Our Journey to Microservices",
                  author: "Sarah Johnson",
                  category: "Case Studies",
                  status: "Draft",
                  date: "",
                  views: 0,
                  featured: false,
                },
              ].map((post, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox id={`select-${i}`} />
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{post.title}</div>
                    {post.featured && (
                      <Badge
                        variant="outline"
                        className="mt-1 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
                      >
                        Featured
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{post.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        post.status === "Published"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                      }`}
                    >
                      {post.status}
                    </div>
                  </TableCell>
                  <TableCell>{post.date || "—"}</TableCell>
                  <TableCell>{post.views.toLocaleString()}</TableCell>
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
          <div className="text-sm text-muted-foreground">Page 1 of 22</div>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
