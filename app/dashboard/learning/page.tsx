import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Calendar, CheckCircle, Clock, Filter, Mic, Search, Video } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"

export const metadata: Metadata = {
  title: "My Learning | Tech Education Platform",
  description: "Track your learning progress and continue your courses",
}

export default function LearningPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Learning</h1>
            <p className="text-muted-foreground">Track your progress and continue your learning journey</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search your courses..."
                className="w-full min-w-[200px] pl-8 md:w-[300px]"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="in-progress" className="space-y-4">
          <TabsList>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          <TabsContent value="in-progress" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Modern Web Development",
                  type: "Course",
                  icon: BookOpen,
                  progress: 65,
                  lastAccessed: "2 days ago",
                  instructor: "Sarah Johnson",
                  href: "/courses/1",
                },
                {
                  title: "Building a REST API with Node.js",
                  type: "Video",
                  icon: Video,
                  progress: 45,
                  lastAccessed: "1 week ago",
                  instructor: "Michael Chen",
                  href: "/videos/1",
                },
                {
                  title: "Tech Talk: The Future of AI",
                  type: "Podcast",
                  icon: Mic,
                  progress: 80,
                  lastAccessed: "3 days ago",
                  instructor: "Alex Rivera",
                  href: "/podcasts/1",
                },
                {
                  title: "Advanced React Patterns",
                  type: "Course",
                  icon: BookOpen,
                  progress: 25,
                  lastAccessed: "5 days ago",
                  instructor: "Emily Parker",
                  href: "/courses/2",
                },
                {
                  title: "Introduction to TypeScript",
                  type: "Course",
                  icon: BookOpen,
                  progress: 10,
                  lastAccessed: "1 day ago",
                  instructor: "David Wilson",
                  href: "/courses/3",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="font-normal">
                        <item.icon className="mr-1 h-3 w-3" />
                        {item.type}
                      </Badge>
                      <div className="text-sm text-muted-foreground">{item.progress}% complete</div>
                    </div>
                    <CardTitle className="line-clamp-1 text-lg">{item.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Avatar className="mr-1 h-4 w-4">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt={item.instructor} />
                        <AvatarFallback>{item.instructor[0]}</AvatarFallback>
                      </Avatar>
                      {item.instructor}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <Progress value={item.progress} className="h-2" />
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        Last accessed {item.lastAccessed}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {item.progress === 0 ? "Not started" : "In progress"}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={item.href}>Continue Learning</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "JavaScript Fundamentals",
                  type: "Course",
                  icon: BookOpen,
                  completedDate: "March 15, 2025",
                  instructor: "David Wilson",
                  href: "/courses/4",
                },
                {
                  title: "CSS Grid and Flexbox",
                  type: "Course",
                  icon: BookOpen,
                  completedDate: "February 28, 2025",
                  instructor: "Sarah Johnson",
                  href: "/courses/5",
                },
                {
                  title: "Git and GitHub for Beginners",
                  type: "Video",
                  icon: Video,
                  completedDate: "January 10, 2025",
                  instructor: "Michael Chen",
                  href: "/videos/2",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="font-normal">
                        <item.icon className="mr-1 h-3 w-3" />
                        {item.type}
                      </Badge>
                      <div className="flex items-center text-sm text-green-600 dark:text-green-500">
                        <CheckCircle className="mr-1 h-4 w-4" />
                        Completed
                      </div>
                    </div>
                    <CardTitle className="line-clamp-1 text-lg">{item.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Avatar className="mr-1 h-4 w-4">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt={item.instructor} />
                        <AvatarFallback>{item.instructor[0]}</AvatarFallback>
                      </Avatar>
                      {item.instructor}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <Progress value={100} className="h-2" />
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        Completed on {item.completedDate}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={item.href}>Review Content</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bookmarked" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Docker for Developers",
                  type: "Course",
                  icon: BookOpen,
                  instructor: "Michael Chen",
                  href: "/courses/6",
                },
                {
                  title: "GraphQL Fundamentals",
                  type: "Video",
                  icon: Video,
                  instructor: "Emily Parker",
                  href: "/videos/3",
                },
                {
                  title: "The State of Web Development in 2025",
                  type: "Podcast",
                  icon: Mic,
                  instructor: "Alex Rivera",
                  href: "/podcasts/2",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="font-normal">
                        <item.icon className="mr-1 h-3 w-3" />
                        {item.type}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <BookOpen className="h-4 w-4" />
                        <span className="sr-only">Bookmark</span>
                      </Button>
                    </div>
                    <CardTitle className="line-clamp-1 text-lg">{item.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Avatar className="mr-1 h-4 w-4">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt={item.instructor} />
                        <AvatarFallback>{item.instructor[0]}</AvatarFallback>
                      </Avatar>
                      {item.instructor}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={item.href}>Start Learning</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "JavaScript Fundamentals",
                  date: "March 15, 2025",
                  id: "CERT-JS-2025-001",
                },
                {
                  title: "CSS Grid and Flexbox",
                  date: "February 28, 2025",
                  id: "CERT-CSS-2025-042",
                },
                {
                  title: "Git and GitHub for Beginners",
                  date: "January 10, 2025",
                  id: "CERT-GIT-2025-189",
                },
              ].map((cert, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex justify-end">
                      <Badge>Certificate</Badge>
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>Issued on {cert.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border border-dashed p-6 text-center">
                      <div className="mb-2 text-2xl font-bold text-primary">Certificate</div>
                      <div className="text-sm text-muted-foreground">ID: {cert.id}</div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Download</Button>
                    <Button variant="outline">Share</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
