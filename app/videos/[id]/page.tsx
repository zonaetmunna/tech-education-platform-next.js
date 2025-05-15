"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ChevronRight, Clock, Download, Heart, MessageSquare, Play, Share2, ThumbsUp, Video } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

// Sample video data
const videosData = [
  {
    id: 1,
    title: "Building a REST API with Node.js",
    description:
      "Learn how to build a scalable REST API using Node.js, Express, and MongoDB. This comprehensive tutorial covers everything from setting up your project to deploying your API to production.",
    videoUrl: "https://example.com/videos/rest-api-nodejs",
    thumbnail: "/placeholder.svg?height=400&width=800",
    duration: "45:30",
    instructor: "John Doe",
    instructorAvatar: "/placeholder.svg",
    instructorBio:
      "John is a senior backend developer with over 8 years of experience. He specializes in Node.js and has built numerous APIs for startups and enterprise companies.",
    premium: true,
    category: "Backend Development",
    tags: ["Node.js", "Express", "MongoDB", "API"],
    views: 12500,
    likes: 856,
    publishedAt: "2023-05-15",
    transcript:
      "In this video, we'll be building a REST API using Node.js, Express, and MongoDB. We'll start by setting up our project and installing the necessary dependencies. Then, we'll create our Express server and connect it to MongoDB using Mongoose. After that, we'll define our data models and create our API endpoints. Finally, we'll add authentication using JWT and deploy our API to production.",
    relatedVideos: [2, 6, 8],
    comments: [
      {
        id: 1,
        user: "Sarah Johnson",
        avatar: "/placeholder.svg",
        comment: "This was exactly what I needed! The explanation of middleware was particularly helpful.",
        date: "2023-05-20",
        likes: 24,
      },
      {
        id: 2,
        user: "Michael Chen",
        avatar: "/placeholder.svg",
        comment:
          "Great tutorial! I was struggling with authentication in my API, but your explanation made it clear. Thanks!",
        date: "2023-05-18",
        likes: 18,
      },
      {
        id: 3,
        user: "Emily Rodriguez",
        avatar: "/placeholder.svg",
        comment:
          "Do you have any recommendations for hosting Node.js applications? I'm looking for something affordable for a small project.",
        date: "2023-05-16",
        likes: 7,
      },
    ],
  },
  {
    id: 2,
    title: "React Hooks Deep Dive",
    description: "Master React hooks with practical examples and best practices.",
    thumbnail: "/placeholder.svg?height=200&width=400",
    duration: "38:15",
    instructor: "Jane Smith",
    instructorAvatar: "/placeholder.svg",
    premium: false,
    category: "Frontend Development",
    tags: ["React", "Hooks", "JavaScript"],
    views: 8700,
    publishedAt: "2023-04-20",
  },
  {
    id: 6,
    title: "GraphQL Fundamentals",
    description: "Learn the basics of GraphQL and how to implement it in your applications.",
    thumbnail: "/placeholder.svg?height=200&width=400",
    duration: "35:45",
    instructor: "Alex Johnson",
    instructorAvatar: "/placeholder.svg",
    premium: false,
    category: "Backend Development",
    tags: ["GraphQL", "API", "Web Development"],
    views: 5800,
    publishedAt: "2023-05-12",
  },
  {
    id: 8,
    title: "Advanced Git Techniques",
    description: "Take your Git skills to the next level with advanced techniques and workflows.",
    thumbnail: "/placeholder.svg?height=200&width=400",
    duration: "47:15",
    instructor: "Michael Lee",
    instructorAvatar: "/placeholder.svg",
    premium: true,
    category: "Development Tools",
    tags: ["Git", "Version Control", "Collaboration"],
    views: 6200,
    publishedAt: "2023-06-10",
  },
]

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  const videoId = Number.parseInt(params.id)
  const video = videosData.find((v) => v.id === videoId)
  const [commentText, setCommentText] = useState("")

  if (!video) {
    notFound()
  }

  // Get related videos
  const relatedVideos = video.relatedVideos
    ? videosData.filter((v) => video.relatedVideos?.includes(v.id))
    : videosData
        .filter(
          (v) => v.id !== video.id && (v.category === video.category || v.tags.some((tag) => video.tags.includes(tag))),
        )
        .slice(0, 3)

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the comment to your backend
    console.log("Submitting comment:", commentText)
    setCommentText("")
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-6">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/videos" className="hover:text-foreground">
                Videos
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{video.title}</span>
            </nav>

            {/* Video title and badges */}
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline">{video.category}</Badge>
                {video.premium && <Badge>Premium</Badge>}
                {video.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{video.title}</h1>
            </div>

            {/* Video player */}
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Button size="lg" className="rounded-full">
                  <Play className="mr-2 h-5 w-5" />
                  Play Video
                </Button>
              </div>
            </div>

            {/* Video info */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={video.instructorAvatar} alt={video.instructor} />
                  <AvatarFallback>{video.instructor.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{video.instructor}</div>
                  <div className="text-sm text-muted-foreground">Instructor</div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{video.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Video className="h-4 w-4" />
                  <span>{video.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{video.likes?.toLocaleString() || 0} likes</span>
                </div>
              </div>
            </div>

            {/* Video tabs */}
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="transcript">Transcript</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>

              {/* Description tab */}
              <TabsContent value="description" className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About This Video</h2>
                    <p className="text-muted-foreground">{video.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Instructor</h3>
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={video.instructorAvatar} alt={video.instructor} />
                        <AvatarFallback>{video.instructor.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <div>
                          <h4 className="text-lg font-bold">{video.instructor}</h4>
                          <p className="text-muted-foreground">Backend Development Instructor</p>
                        </div>
                        <p className="text-muted-foreground">{video.instructorBio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Transcript tab */}
              <TabsContent value="transcript" className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Video Transcript</h2>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-muted-foreground whitespace-pre-line">{video.transcript}</p>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download Transcript
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Comments tab */}
              <TabsContent value="comments" className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Comments</h2>
                    <form onSubmit={handleCommentSubmit} className="space-y-4">
                      <Textarea
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                      />
                      <div className="flex justify-end">
                        <Button type="submit" disabled={!commentText.trim()}>
                          Post Comment
                        </Button>
                      </div>
                    </form>
                  </div>

                  <Separator />

                  <div className="space-y-6">
                    {video.comments?.map((comment) => (
                      <div key={comment.id} className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={comment.avatar} alt={comment.user} />
                            <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1 flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                              <h4 className="font-medium">{comment.user}</h4>
                              <span className="text-sm text-muted-foreground">
                                {new Date(comment.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-muted-foreground">{comment.comment}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <Button variant="ghost" size="sm" className="h-8 px-2">
                                <ThumbsUp className="mr-1 h-4 w-4" />
                                <span>{comment.likes}</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 px-2">
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Separator />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Video progress */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Your Progress</CardTitle>
                <CardDescription>Track your learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
                <Button className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Continue Watching
                </Button>
                <div className="flex justify-center gap-4 pt-2">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageSquare className="h-5 w-5" />
                    <span className="sr-only">Comment</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related videos */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Related Videos</h3>
                <Button variant="link" size="sm" asChild>
                  <Link href="/videos">
                    View All
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-4">
                {relatedVideos.map((relatedVideo) => (
                  <Link key={relatedVideo.id} href={`/videos/${relatedVideo.id}`}>
                    <div className="group flex gap-3 items-start">
                      <div className="relative aspect-video w-32 overflow-hidden rounded-md">
                        <Image
                          src={relatedVideo.thumbnail || "/placeholder.svg"}
                          alt={relatedVideo.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute bottom-1 right-1 bg-background/80 text-foreground text-xs px-1 rounded">
                          {relatedVideo.duration}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedVideo.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{relatedVideo.instructor}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <span>{relatedVideo.views.toLocaleString()} views</span>
                          <span>•</span>
                          <span>{new Date(relatedVideo.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
