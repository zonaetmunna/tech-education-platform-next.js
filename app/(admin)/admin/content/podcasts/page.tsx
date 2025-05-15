import type { Metadata } from "next"
import Link from "next/link"
import { ChevronDown, Download, Filter, Mic, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"

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
  title: "Podcast Management | Tech Education Platform",
  description: "Manage all podcasts on the platform",
}

export default function PodcastManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Podcast Management</h1>
          <p className="text-muted-foreground">Manage all podcasts on the platform</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/content/import">
              <Download className="mr-2 h-4 w-4" />
              Import
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/content/new?type=podcast">
              <Plus className="mr-2 h-4 w-4" />
              Add Podcast
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search podcasts..." className="w-full pl-8" />
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
              <DropdownMenuLabel>Duration</DropdownMenuLabel>
              <DropdownMenuItem>
                <Checkbox id="short" className="mr-2" />
                <label htmlFor="short\">Short (< 30 min)</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="medium" className="mr-2" />
                <label htmlFor="medium">Medium (30-60 min)</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="long" className="mr-2" />
                <label htmlFor="long">Long (> 60 min)</label>
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
              <DropdownMenuItem>Most Listens</DropdownMenuItem>
              <DropdownMenuItem>Highest Rated</DropdownMenuItem>
              <DropdownMenuItem>Duration (Shortest)</DropdownMenuItem>
              <DropdownMenuItem>Duration (Longest)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <CardTitle>All Podcasts</CardTitle>
            <div className="text-sm text-muted-foreground">Showing 10 of 78 podcasts</div>
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
                <TableHead>Host</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Listens</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  title: "Interview with Tech Industry Leaders",
                  host: "Alex Rivera",
                  duration: "58:32",
                  status: "Draft",
                  listens: 0,
                  rating: 0,
                  premium: false,
                },
                {
                  title: "Tech Talk: Web Performance Optimization",
                  host: "Alex Rivera",
                  duration: "45:15",
                  status: "Published",
                  listens: 8765,
                  rating: 4.6,
                  premium: false,
                },
                {
                  title: "The Future of AI in Development",
                  host: "Emily Parker & David Wilson",
                  duration: "62:20",
                  status: "Published",
                  listens: 12543,
                  rating: 4.8,
                  premium: true,
                },
                {
                  title: "Navigating Tech Career Paths",
                  host: "Sarah Johnson",
                  duration: "51:45",
                  status: "Published",
                  listens: 9876,
                  rating: 4.7,
                  premium: false,
                },
                {
                  title: "Open Source Contribution Strategies",
                  host: "Michael Chen",
                  duration: "48:30",
                  status: "Published",
                  listens: 7654,
                  rating: 4.5,
                  premium: false,
                },
                {
                  title: "DevOps Best Practices",
                  host: "David Wilson",
                  duration: "55:20",
                  status: "Published",
                  listens: 10234,
                  rating: 4.9,
                  premium: true,
                },
                {
                  title: "Women in Tech Roundtable",
                  host: "Emily Parker & Sarah Johnson",
                  duration: "72:15",
                  status: "Published",
                  listens: 11234,
                  rating: 4.8,
                  premium: false,
                },
                {
                  title: "Cybersecurity Trends",
                  host: "Alex Rivera",
                  duration: "49:45",
                  status: "Published",
                  listens: 8543,
                  rating: 4.7,
                  premium: true,
                },
                {
                  title: "Remote Work and Collaboration Tools",
                  host: "Sarah Johnson",
                  duration: "42:30",
                  status: "Published",
                  listens: 9456,
                  rating: 4.6,
                  premium: false,
                },
                {
                  title: "Startup Founder Stories",
                  host: "Michael Chen",
                  duration: "65:20",
                  status: "Draft",
                  listens: 0,
                  rating: 0,
                  premium: true,
                },
              ].map((podcast, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox id={`select-${i}`} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Mic className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">{podcast.title}</div>
                        {podcast.premium && (
                          <Badge variant="outline" className="mt-1">
                            Premium
                          </Badge>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{podcast.host}</TableCell>
                  <TableCell>{podcast.duration}</TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        podcast.status === "Published"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                      }`}
                    >
                      {podcast.status}
                    </div>
                  </TableCell>
                  <TableCell>{podcast.listens.toLocaleString()}</TableCell>
                  <TableCell>
                    {podcast.rating > 0 ? (
                      <div className="flex items-center">
                        {podcast.rating}
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
          <div className="text-sm text-muted-foreground">Page 1 of 8</div>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
