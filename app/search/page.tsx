"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, Clock, FileText, Filter, Mic, SearchIcon, Video } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample search data
const searchData = {
  courses: [
    {
      id: 1,
      title: "Modern Web Development",
      description: "Learn the latest web development techniques with React, Next.js, and more.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Web Development",
      type: "course",
      premium: true,
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Master the basics of data science, statistics, and machine learning.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Data Science",
      type: "course",
      premium: false,
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Build cross-platform mobile apps with React Native and Flutter.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Mobile Development",
      type: "course",
      premium: true,
    },
  ],
  videos: [
    {
      id: 1,
      title: "Building a REST API with Node.js",
      description: "Learn how to build a scalable REST API using Node.js, Express, and MongoDB.",
      image: "/placeholder.svg?height=200&width=400",
      duration: "45:30",
      category: "Backend Development",
      type: "video",
      premium: true,
    },
    {
      id: 2,
      title: "React Hooks Deep Dive",
      description: "Master React hooks with practical examples and best practices.",
      image: "/placeholder.svg?height=200&width=400",
      duration: "38:15",
      category: "Frontend Development",
      type: "video",
      premium: false,
    },
    {
      id: 3,
      title: "CSS Grid Layout Masterclass",
      description: "Learn how to create complex layouts with CSS Grid.",
      image: "/placeholder.svg?height=200&width=400",
      duration: "32:45",
      category: "Frontend Development",
      type: "video",
      premium: false,
    },
  ],
  podcasts: [
    {
      id: 1,
      title: "Tech Talk: The Future of AI",
      description: "Exploring the latest advancements in artificial intelligence and their impact on society.",
      image: "/placeholder.svg?height=200&width=200",
      duration: "1:15:30",
      category: "Technology",
      type: "podcast",
      premium: true,
    },
    {
      id: 2,
      title: "Developer Diaries",
      description: "Weekly discussions about software development, career growth, and industry trends.",
      image: "/placeholder.svg?height=200&width=200",
      duration: "58:20",
      category: "Software Development",
      type: "podcast",
      premium: false,
    },
    {
      id: 3,
      title: "Design Matters",
      description: "Conversations with leading designers about UX/UI, product design, and creative processes.",
      image: "/placeholder.svg?height=200&width=200",
      duration: "45:15",
      category: "Design",
      type: "podcast",
      premium: false,
    },
  ],
  blog: [
    {
      id: 1,
      title: "10 Essential VS Code Extensions for Web Developers",
      description:
        "Boost your productivity with these must-have VS Code extensions for web development. From code formatting to debugging tools, these extensions will streamline your workflow.",
      image: "/placeholder.svg?height=200&width=400",
      readTime: "5 min read",
      category: "Development Tools",
      type: "blog",
      premium: false,
    },
    {
      id: 2,
      title: "Understanding Async/Await in JavaScript",
      description:
        "A comprehensive guide to working with asynchronous JavaScript using async/await syntax. Learn how to write cleaner, more maintainable asynchronous code.",
      image: "/placeholder.svg?height=200&width=400",
      readTime: "8 min read",
      category: "JavaScript",
      type: "blog",
      premium: false,
    },
    {
      id: 3,
      title: "Getting Started with Docker for Developers",
      description:
        "Learn how to use Docker to containerize your applications and simplify your development workflow. This beginner-friendly guide covers the basics of Docker.",
      image: "/placeholder.svg?height=200&width=400",
      readTime: "10 min read",
      category: "DevOps",
      type: "blog",
      premium: false,
    },
  ],
  roadmaps: [
    {
      id: 1,
      title: "Frontend Developer",
      description: "Master HTML, CSS, JavaScript, and modern frontend frameworks",
      image: "/placeholder.svg?height=200&width=400",
      category: "Web Development",
      type: "roadmap",
      premium: false,
    },
    {
      id: 2,
      title: "Backend Developer",
      description: "Learn server-side programming, databases, and API development",
      image: "/placeholder.svg?height=200&width=400",
      category: "Web Development",
      type: "roadmap",
      premium: true,
    },
    {
      id: 3,
      title: "Data Scientist",
      description: "Explore statistics, machine learning, and data visualization",
      image: "/placeholder.svg?height=200&width=400",
      category: "Data Science",
      type: "roadmap",
      premium: true,
    },
  ],
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const initialQuery = typeof searchParams.q === "string" ? searchParams.q : ""
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [activeTab, setActiveTab] = useState("all")
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)

  // Combine all search results
  const allResults = [
    ...searchData.courses.map((item) => ({ ...item, type: "course" })),
    ...searchData.videos.map((item) => ({ ...item, type: "video" })),
    ...searchData.podcasts.map((item) => ({ ...item, type: "podcast" })),
    ...searchData.blog.map((item) => ({ ...item, type: "blog" })),
    ...searchData.roadmaps.map((item) => ({ ...item, type: "roadmap" })),
  ]

  // Filter results based on search query and active tab
  const filteredResults = allResults.filter((item) => {
    const matchesQuery =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTab = activeTab === "all" || item.type === activeTab

    const matchesPremium = !showPremiumOnly || item.premium

    return matchesQuery && matchesTab && matchesPremium
  })

  // Get results for each tab
  const getTabResults = (tabName: string) => {
    return filteredResults.filter((item) => tabName === "all" || item.type === tabName)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would trigger a search API call
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Search</h1>
          <p className="text-muted-foreground">Find courses, videos, podcasts, articles, and roadmaps</p>
        </div>

        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for anything..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit">Search</Button>
        </form>

        <div className="flex items-center justify-between">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="all">All ({filteredResults.length})</TabsTrigger>
              <TabsTrigger value="course">Courses ({getTabResults("course").length})</TabsTrigger>
              <TabsTrigger value="video">Videos ({getTabResults("video").length})</TabsTrigger>
              <TabsTrigger value="podcast">Podcasts ({getTabResults("podcast").length})</TabsTrigger>
              <TabsTrigger value="blog">Blog ({getTabResults("blog").length})</TabsTrigger>
              <TabsTrigger value="roadmap">Roadmaps ({getTabResults("roadmap").length})</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {filteredResults.length} {filteredResults.length === 1 ? "result" : "results"} found
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="premium-only"
                checked={showPremiumOnly}
                onChange={(e) => setShowPremiumOnly(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="premium-only" className="text-sm font-medium">
                Premium Only
              </label>
            </div>
          </div>
        </div>

        <Separator />

        <TabsContent value="all" className="mt-0">
          {filteredResults.length > 0 ? (
            <div className="space-y-8">
              {/* Courses */}
              {getTabResults("course").length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Courses</h2>
                    <Button variant="link" asChild>
                      <Link href="/courses">View All Courses</Link>
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {getTabResults("course")
                      .slice(0, 3)
                      .map((course) => (
                        <Card key={`course-${course.id}`} className="overflow-hidden">
                          <div className="relative">
                            <Image
                              src={course.image || "/placeholder.svg"}
                              width={400}
                              height={200}
                              alt={course.title}
                              className="w-full object-cover h-48"
                            />
                            {course.premium && (
                              <Badge className="absolute top-2 right-2" variant="default">
                                Premium
                              </Badge>
                            )}
                          </div>
                          <CardHeader className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline">{course.category}</Badge>
                              <BookOpen className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-xl">
                              <Link href={`/courses/${course.id}`} className="hover:underline">
                                {course.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="mt-2 line-clamp-2">{course.description}</CardDescription>
                          </CardHeader>
                          <CardFooter className="p-4 pt-0">
                            <Button size="sm" className="w-full" asChild>
                              <Link href={`/courses/${course.id}`}>View Course</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </div>
              )}

              {/* Videos */}
              {getTabResults("video").length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Videos</h2>
                    <Button variant="link" asChild>
                      <Link href="/videos">View All Videos</Link>
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {getTabResults("video")
                      .slice(0, 3)
                      .map((video) => (
                        <Card key={`video-${video.id}`} className="overflow-hidden">
                          <div className="relative">
                            <Image
                              src={video.image || "/placeholder.svg"}
                              width={400}
                              height={200}
                              alt={video.title}
                              className="w-full object-cover h-48"
                            />
                            {video.premium && (
                              <Badge className="absolute top-2 right-2" variant="default">
                                Premium
                              </Badge>
                            )}
                            <div className="absolute bottom-2 right-2 bg-background/80 text-foreground text-xs px-2 py-1 rounded backdrop-blur-sm">
                              {video.duration}
                            </div>
                          </div>
                          <CardHeader className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline">{video.category}</Badge>
                              <Video className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-xl">
                              <Link href={`/videos/${video.id}`} className="hover:underline">
                                {video.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="mt-2 line-clamp-2">{video.description}</CardDescription>
                          </CardHeader>
                          <CardFooter className="p-4 pt-0">
                            <Button size="sm" className="w-full" asChild>
                              <Link href={`/videos/${video.id}`}>Watch Video</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </div>
              )}

              {/* Podcasts */}
              {getTabResults("podcast").length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Podcasts</h2>
                    <Button variant="link" asChild>
                      <Link href="/podcasts">View All Podcasts</Link>
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {getTabResults("podcast")
                      .slice(0, 3)
                      .map((podcast) => (
                        <Card key={`podcast-${podcast.id}`} className="overflow-hidden">
                          <div className="p-4 flex justify-center">
                            <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                              <Image
                                src={podcast.image || "/placeholder.svg"}
                                alt={podcast.title}
                                fill
                                className="object-cover"
                              />
                              {podcast.premium && (
                                <Badge className="absolute top-2 right-2" variant="default">
                                  Premium
                                </Badge>
                              )}
                            </div>
                          </div>
                          <CardHeader className="p-4 pt-0">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline">{podcast.category}</Badge>
                              <Mic className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-xl">
                              <Link href={`/podcasts/${podcast.id}`} className="hover:underline">
                                {podcast.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="mt-2 line-clamp-2">{podcast.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="px-4 pb-0">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>{podcast.duration}</span>
                            </div>
                          </CardContent>
                          <CardFooter className="p-4 pt-4">
                            <Button size="sm" className="w-full" asChild>
                              <Link href={`/podcasts/${podcast.id}`}>Listen Now</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </div>
              )}

              {/* Blog */}
              {getTabResults("blog").length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Blog Articles</h2>
                    <Button variant="link" asChild>
                      <Link href="/blog">View All Articles</Link>
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {getTabResults("blog")
                      .slice(0, 3)
                      .map((article) => (
                        <Card key={`blog-${article.id}`} className="overflow-hidden">
                          <div className="relative">
                            <Image
                              src={article.image || "/placeholder.svg"}
                              width={400}
                              height={200}
                              alt={article.title}
                              className="w-full object-cover h-48"
                            />
                          </div>
                          <CardHeader className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline">{article.category}</Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="mr-1 h-4 w-4" />
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                            <CardTitle className="text-xl">
                              <Link href={`/blog/${article.id}`} className="hover:underline">
                                {article.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="mt-2 line-clamp-2">{article.description}</CardDescription>
                          </CardHeader>
                          <CardFooter className="p-4 pt-0">
                            <Button size="sm" className="w-full" asChild>
                              <Link href={`/blog/${article.id}`}>Read Article</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </div>
              )}

              {/* Roadmaps */}
              {getTabResults("roadmap").length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Learning Roadmaps</h2>
                    <Button variant="link" asChild>
                      <Link href="/roadmaps">View All Roadmaps</Link>
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {getTabResults("roadmap")
                      .slice(0, 3)
                      .map((roadmap) => (
                        <Card key={`roadmap-${roadmap.id}`} className="overflow-hidden">
                          <div className="relative">
                            <Image
                              src={roadmap.image || "/placeholder.svg"}
                              width={400}
                              height={200}
                              alt={roadmap.title}
                              className="w-full object-cover h-48"
                            />
                            {roadmap.premium && (
                              <Badge className="absolute top-2 right-2" variant="default">
                                Premium
                              </Badge>
                            )}
                          </div>
                          <CardHeader className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline">{roadmap.category}</Badge>
                              <FileText className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-xl">
                              <Link href={`/roadmaps/${roadmap.id}`} className="hover:underline">
                                {roadmap.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="mt-2 line-clamp-2">{roadmap.description}</CardDescription>
                          </CardHeader>
                          <CardFooter className="p-4 pt-0">
                            <Button size="sm" className="w-full" asChild>
                              <Link href={`/roadmaps/${roadmap.id}`}>View Roadmap</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <SearchIcon className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No results found</h3>
              <p className="text-muted-foreground mt-2">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <Button variant="outline" onClick={() => setSearchQuery("")} className="mt-4">
                Clear Search
              </Button>
            </div>
          )}
        </TabsContent>

        {/* Individual tab contents */}
        {["course", "video", "podcast", "blog", "roadmap"].map((tabName) => (
          <TabsContent key={tabName} value={tabName} className="mt-0">
            {getTabResults(tabName).length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {getTabResults(tabName).map((item) => (
                  <Card key={`${tabName}-${item.id}`} className="overflow-hidden">
                    <div className="relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        width={400}
                        height={200}
                        alt={item.title}
                        className="w-full object-cover h-48"
                      />
                      {item.premium && (
                        <Badge className="absolute top-2 right-2" variant="default">
                          Premium
                        </Badge>
                      )}
                      {item.type === "video" && (
                        <div className="absolute bottom-2 right-2 bg-background/80 text-foreground text-xs px-2 py-1 rounded backdrop-blur-sm">
                          {(item as any).duration}
                        </div>
                      )}
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{item.category}</Badge>
                        {item.type === "course" && <BookOpen className="h-4 w-4 text-muted-foreground" />}
                        {item.type === "video" && <Video className="h-4 w-4 text-muted-foreground" />}
                        {item.type === "podcast" && <Mic className="h-4 w-4 text-muted-foreground" />}
                        {item.type === "blog" && <FileText className="h-4 w-4 text-muted-foreground" />}
                        {item.type === "roadmap" && <FileText className="h-4 w-4 text-muted-foreground" />}
                      </div>
                      <CardTitle className="text-xl">
                        <Link href={`/${item.type}s/${item.id}`} className="hover:underline">
                          {item.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-2">{item.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button size="sm" className="w-full" asChild>
                        <Link href={`/${item.type}s/${item.id}`}>
                          {item.type === "course" && "View Course"}
                          {item.type === "video" && "Watch Video"}
                          {item.type === "podcast" && "Listen Now"}
                          {item.type === "blog" && "Read Article"}
                          {item.type === "roadmap" && "View Roadmap"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <SearchIcon className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No results found</h3>
                <p className="text-muted-foreground mt-2">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")} className="mt-4">
                  Clear Search
                </Button>
              </div>
            )}
          </TabsContent>
        ))}
      </div>
    </div>
  )
}
