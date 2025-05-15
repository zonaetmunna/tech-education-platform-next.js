import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Bookmark, Filter, Mic, Search, Trash2, Video } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"

export const metadata: Metadata = {
  title: "Bookmarks | Tech Education Platform",
  description: "Access your saved courses, videos, and podcasts",
}

export default function BookmarksPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Bookmarks</h1>
            <p className="text-muted-foreground">Access your saved content for later</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search bookmarks..."
                className="w-full min-w-[200px] pl-8 md:w-[300px]"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Docker for Developers",
                  type: "Course",
                  icon: BookOpen,
                  description: "Learn how to containerize your applications with Docker",
                  instructor: "Michael Chen",
                  href: "/courses/6",
                },
                {
                  title: "GraphQL Fundamentals",
                  type: "Video",
                  icon: Video,
                  description: "Introduction to GraphQL and its benefits over REST",
                  instructor: "Emily Parker",
                  href: "/videos/3",
                },
                {
                  title: "The State of Web Development in 2025",
                  type: "Podcast",
                  icon: Mic,
                  description: "Discussing the latest trends in web development",
                  instructor: "Alex Rivera",
                  href: "/podcasts/2",
                },
                {
                  title: "Microservices Architecture",
                  type: "Course",
                  icon: BookOpen,
                  description: "Building scalable applications with microservices",
                  instructor: "Sarah Johnson",
                  href: "/courses/7",
                },
                {
                  title: "Advanced CSS Animations",
                  type: "Video",
                  icon: Video,
                  description: "Create stunning animations with CSS",
                  instructor: "David Wilson",
                  href: "/videos/4",
                },
                {
                  title: "Serverless Computing Explained",
                  type: "Article",
                  icon: BookOpen,
                  description: "Understanding the benefits of serverless architecture",
                  instructor: "Lisa Thompson",
                  href: "/blog/1",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="font-normal">
                        <item.icon className="mr-1 h-3 w-3" />
                        {item.type}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Bookmark className="h-4 w-4 fill-current" />
                        <span className="sr-only">Remove bookmark</span>
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
                  <CardContent className="pb-2">
                    <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={item.href}>View</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Docker for Developers",
                  type: "Course",
                  icon: BookOpen,
                  description: "Learn how to containerize your applications with Docker",
                  instructor: "Michael Chen",
                  href: "/courses/6",
                },
                {
                  title: "Microservices Architecture",
                  type: "Course",
                  icon: BookOpen,
                  description: "Building scalable applications with microservices",
                  instructor: "Sarah Johnson",
                  href: "/courses/7",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="font-normal">
                        <item.icon className="mr-1 h-3 w-3" />
                        {item.type}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Bookmark className="h-4 w-4 fill-current" />
                        <span className="sr-only">Remove bookmark</span>
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
                  <CardContent className="pb-2">
                    <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={item.href}>View</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Similar content for other tabs (videos, podcasts, articles) */}
          <TabsContent value="videos" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "GraphQL Fundamentals",
                  type: "Video",
                  icon: Video,
                  description: "Introduction to GraphQL and its benefits over REST",
                  instructor: "Emily Parker",
                  href: "/videos/3",
                },
                {
                  title: "Advanced CSS Animations",
                  type: "Video",
                  icon: Video,
                  description: "Create stunning animations with CSS",
                  instructor: "David Wilson",
                  href: "/videos/4",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="font-normal">
                        <item.icon className="mr-1 h-3 w-3" />
                        {item.type}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Bookmark className="h-4 w-4 fill-current" />
                        <span className="sr-only">Remove bookmark</span>
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
                  <CardContent className="pb-2">
                    <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={item.href}>View</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="podcasts" className="space-y-4">
            {/* Podcast bookmarks content */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "The State of Web Development in 2025",
                  type: "Podcast",
                  icon: Mic,
                  description: "Discussing the latest trends in web development",
                  instructor: "Alex Rivera",
                  href: "/podcasts/2",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="font-normal">
                        <item.icon className="mr-1 h-3 w-3" />
                        {item.type}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Bookmark className="h-4 w-4 fill-current" />
                        <span className="sr-only">Remove bookmark</span>
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
                  <CardContent className="pb-2">
                    <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={item.href}>View</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="space-y-4">
            {/* Articles bookmarks content */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Serverless Computing Explained",
                  type: "Article",
                  icon: BookOpen,
                  description: "Understanding the benefits of serverless architecture",
                  instructor: "Lisa Thompson",
                  href: "/blog/1",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="font-normal">
                        <item.icon className="mr-1 h-3 w-3" />
                        {item.type}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Bookmark className="h-4 w-4 fill-current" />
                        <span className="sr-only">Remove bookmark</span>
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
                  <CardContent className="pb-2">
                    <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={item.href}>View</Link>
                    </Button>
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
