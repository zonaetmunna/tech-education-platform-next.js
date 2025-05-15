"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  FileText,
  Lock,
  Map,
  Share2,
  Star,
  Users,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample roadmap data
const roadmapsData = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "Master HTML, CSS, JavaScript, and modern frontend frameworks. This comprehensive roadmap will guide you from the basics of web development to advanced frontend techniques used in modern applications.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Web Development",
    difficulty: "Beginner to Intermediate",
    duration: "6 months",
    steps: [
      "HTML & CSS Basics",
      "JavaScript Fundamentals",
      "React & Next.js",
      "State Management",
      "Testing & Deployment",
    ],
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    students: 1250,
    completionRate: 65,
    updatedAt: "2023-05-15",
    premium: false,
    instructors: [
      {
        name: "John Doe",
        avatar: "/placeholder.svg",
        role: "Senior Frontend Developer",
        bio: "John has over 10 years of experience in frontend development and has worked with companies like Google and Facebook. He specializes in React and modern JavaScript frameworks.",
      },
      {
        name: "Jane Smith",
        avatar: "/placeholder.svg",
        role: "UI/UX Specialist",
        bio: "Jane is a UI/UX specialist with a background in design and frontend development. She has helped numerous startups create beautiful, user-friendly interfaces.",
      },
    ],
    modules: [
      {
        id: 1,
        title: "HTML & CSS Fundamentals",
        description: "Learn the building blocks of the web",
        duration: "4 weeks",
        lessons: [
          {
            id: 101,
            title: "Introduction to HTML",
            type: "video",
            duration: "45:30",
            completed: true,
            premium: false,
          },
          {
            id: 102,
            title: "HTML Structure and Elements",
            type: "video",
            duration: "38:15",
            completed: true,
            premium: false,
          },
          {
            id: 103,
            title: "Introduction to CSS",
            type: "video",
            duration: "52:20",
            completed: true,
            premium: false,
          },
          {
            id: 104,
            title: "CSS Selectors and Properties",
            type: "video",
            duration: "41:45",
            completed: false,
            premium: false,
          },
          {
            id: 105,
            title: "CSS Box Model",
            type: "video",
            duration: "35:10",
            completed: false,
            premium: false,
          },
          {
            id: 106,
            title: "Responsive Design with CSS",
            type: "video",
            duration: "48:30",
            completed: false,
            premium: false,
          },
          {
            id: 107,
            title: "Module Project: Build a Responsive Website",
            type: "project",
            duration: "2 hours",
            completed: false,
            premium: false,
          },
          {
            id: 108,
            title: "Module Assessment",
            type: "quiz",
            duration: "30 min",
            completed: false,
            premium: false,
          },
        ],
      },
      {
        id: 2,
        title: "JavaScript Fundamentals",
        description: "Master the core concepts of JavaScript programming",
        duration: "5 weeks",
        lessons: [
          {
            id: 201,
            title: "Introduction to JavaScript",
            type: "video",
            duration: "42:15",
            completed: false,
            premium: false,
          },
          {
            id: 202,
            title: "Variables, Data Types, and Operators",
            type: "video",
            duration: "55:30",
            completed: false,
            premium: false,
          },
          {
            id: 203,
            title: "Control Flow: Conditionals and Loops",
            type: "video",
            duration: "48:45",
            completed: false,
            premium: false,
          },
          {
            id: 204,
            title: "Functions and Scope",
            type: "video",
            duration: "51:20",
            completed: false,
            premium: false,
          },
          {
            id: 205,
            title: "Arrays and Objects",
            type: "video",
            duration: "47:35",
            completed: false,
            premium: false,
          },
          {
            id: 206,
            title: "DOM Manipulation",
            type: "video",
            duration: "53:10",
            completed: false,
            premium: true,
          },
          {
            id: 207,
            title: "Events and Event Handling",
            type: "video",
            duration: "44:25",
            completed: false,
            premium: true,
          },
          {
            id: 208,
            title: "Module Project: Interactive Web Application",
            type: "project",
            duration: "3 hours",
            completed: false,
            premium: true,
          },
          {
            id: 209,
            title: "Module Assessment",
            type: "quiz",
            duration: "45 min",
            completed: false,
            premium: true,
          },
        ],
      },
      {
        id: 3,
        title: "React & Next.js",
        description: "Build modern web applications with React and Next.js",
        duration: "6 weeks",
        lessons: [
          {
            id: 301,
            title: "Introduction to React",
            type: "video",
            duration: "50:15",
            completed: false,
            premium: true,
          },
          {
            id: 302,
            title: "Components and Props",
            type: "video",
            duration: "45:30",
            completed: false,
            premium: true,
          },
          {
            id: 303,
            title: "State and Lifecycle",
            type: "video",
            duration: "52:45",
            completed: false,
            premium: true,
          },
          {
            id: 304,
            title: "Hooks in React",
            type: "video",
            duration: "58:20",
            completed: false,
            premium: true,
          },
          {
            id: 305,
            title: "Introduction to Next.js",
            type: "video",
            duration: "47:10",
            completed: false,
            premium: true,
          },
          {
            id: 306,
            title: "Routing in Next.js",
            type: "video",
            duration: "43:35",
            completed: false,
            premium: true,
          },
          {
            id: 307,
            title: "Data Fetching in Next.js",
            type: "video",
            duration: "55:50",
            completed: false,
            premium: true,
          },
          {
            id: 308,
            title: "Module Project: Build a Next.js Application",
            type: "project",
            duration: "4 hours",
            completed: false,
            premium: true,
          },
          {
            id: 309,
            title: "Module Assessment",
            type: "quiz",
            duration: "1 hour",
            completed: false,
            premium: true,
          },
        ],
      },
      {
        id: 4,
        title: "State Management",
        description: "Learn advanced state management techniques for React applications",
        duration: "4 weeks",
        lessons: [
          {
            id: 401,
            title: "Introduction to State Management",
            type: "video",
            duration: "40:15",
            completed: false,
            premium: true,
          },
          {
            id: 402,
            title: "Context API",
            type: "video",
            duration: "48:30",
            completed: false,
            premium: true,
          },
          {
            id: 403,
            title: "Redux Fundamentals",
            type: "video",
            duration: "55:45",
            completed: false,
            premium: true,
          },
          {
            id: 404,
            title: "Redux Toolkit",
            type: "video",
            duration: "52:20",
            completed: false,
            premium: true,
          },
          {
            id: 405,
            title: "Zustand and Other State Management Libraries",
            type: "video",
            duration: "45:10",
            completed: false,
            premium: true,
          },
          {
            id: 406,
            title: "Module Project: Implement State Management",
            type: "project",
            duration: "3 hours",
            completed: false,
            premium: true,
          },
          {
            id: 407,
            title: "Module Assessment",
            type: "quiz",
            duration: "45 min",
            completed: false,
            premium: true,
          },
        ],
      },
      {
        id: 5,
        title: "Testing & Deployment",
        description: "Learn how to test and deploy your frontend applications",
        duration: "3 weeks",
        lessons: [
          {
            id: 501,
            title: "Introduction to Testing",
            type: "video",
            duration: "38:15",
            completed: false,
            premium: true,
          },
          {
            id: 502,
            title: "Unit Testing with Jest",
            type: "video",
            duration: "52:30",
            completed: false,
            premium: true,
          },
          {
            id: 503,
            title: "Component Testing with React Testing Library",
            type: "video",
            duration: "48:45",
            completed: false,
            premium: true,
          },
          {
            id: 504,
            title: "End-to-End Testing with Cypress",
            type: "video",
            duration: "55:20",
            completed: false,
            premium: true,
          },
          {
            id: 505,
            title: "Deployment with Vercel",
            type: "video",
            duration: "42:10",
            completed: false,
            premium: true,
          },
          {
            id: 506,
            title: "CI/CD for Frontend Applications",
            type: "video",
            duration: "47:35",
            completed: false,
            premium: true,
          },
          {
            id: 507,
            title: "Module Project: Test and Deploy Your Application",
            type: "project",
            duration: "3 hours",
            completed: false,
            premium: true,
          },
          {
            id: 508,
            title: "Final Assessment",
            type: "quiz",
            duration: "1 hour",
            completed: false,
            premium: true,
          },
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        user: "Sarah Johnson",
        avatar: "/placeholder.svg",
        rating: 5,
        date: "2023-04-15",
        comment:
          "This roadmap was exactly what I needed to structure my learning journey. The content is well-organized and the projects helped me apply what I learned. Highly recommended!",
      },
      {
        id: 2,
        user: "Michael Chen",
        avatar: "/placeholder.svg",
        rating: 4,
        date: "2023-03-28",
        comment:
          "Great roadmap overall. The JavaScript and React sections were particularly helpful. The only reason I'm not giving 5 stars is that some of the content could be more up-to-date with the latest versions.",
      },
      {
        id: 3,
        user: "Emily Rodriguez",
        avatar: "/placeholder.svg",
        rating: 5,
        date: "2023-05-02",
        comment:
          "I've tried several frontend development courses, and this roadmap is by far the most comprehensive. The instructors explain complex concepts in a way that's easy to understand, and the progression from basic to advanced topics is well thought out.",
      },
    ],
    relatedRoadmaps: [2, 9],
  },
  {
    id: 2,
    title: "Backend Developer",
    description: "Learn server-side programming, databases, and API development",
    image: "/placeholder.svg?height=200&width=400",
    category: "Web Development",
    difficulty: "Intermediate",
    duration: "8 months",
    steps: [
      "Server-side Languages",
      "Database Design",
      "API Development",
      "Authentication & Security",
      "Deployment & DevOps",
    ],
    tags: ["Node.js", "Express", "MongoDB", "SQL", "API"],
    students: 980,
    completionRate: 58,
    updatedAt: "2023-04-20",
    premium: true,
  },
  {
    id: 9,
    title: "Full Stack JavaScript Developer",
    description: "Master both frontend and backend development with JavaScript",
    image: "/placeholder.svg?height=200&width=400",
    category: "Web Development",
    difficulty: "Intermediate",
    duration: "9 months",
    steps: [
      "JavaScript Fundamentals",
      "Frontend with React",
      "Backend with Node.js",
      "Database Integration",
      "Full Stack Projects",
    ],
    tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    students: 1100,
    completionRate: 63,
    updatedAt: "2023-05-15",
    premium: false,
  },
]

export default function RoadmapDetailPage({ params }: { params: { id: string } }) {
  const roadmapId = Number.parseInt(params.id)
  const roadmap = roadmapsData.find((r) => r.id === roadmapId)
  const [expandedModules, setExpandedModules] = useState<number[]>([0]) // First module expanded by default

  if (!roadmap) {
    notFound()
  }

  // Get related roadmaps
  const relatedRoadmaps = roadmap.relatedRoadmaps
    ? roadmapsData.filter((r) => roadmap.relatedRoadmaps?.includes(r.id))
    : roadmapsData
        .filter(
          (r) =>
            r.id !== roadmap.id &&
            (r.category === roadmap.category || r.tags.some((tag) => roadmap.tags.includes(tag))),
        )
        .slice(0, 2)

  const toggleModule = (index: number) => {
    setExpandedModules((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  // Calculate progress
  const calculateProgress = () => {
    if (!roadmap.modules) return 0

    const totalLessons = roadmap.modules.reduce((acc, module) => acc + module.lessons.length, 0)
    const completedLessons = roadmap.modules.reduce(
      (acc, module) => acc + module.lessons.filter((lesson) => lesson.completed).length,
      0,
    )

    return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0
  }

  const progress = calculateProgress()

  // Calculate total duration
  const calculateTotalDuration = () => {
    if (!roadmap.modules) return "0 hours"

    const totalMinutes = roadmap.modules.reduce((acc, module) => {
      return (
        acc +
        module.lessons.reduce((lessonAcc, lesson) => {
          if (lesson.type === "video" && lesson.duration) {
            const [minutes, seconds] = lesson.duration.split(":").map(Number)
            return lessonAcc + minutes + seconds / 60
          } else if (lesson.type === "project" || lesson.type === "quiz") {
            // Extract hours and convert to minutes
            const durationMatch = lesson.duration?.match(/(\d+)\s*hours?|(\d+)\s*min/)
            if (durationMatch) {
              if (durationMatch[1]) {
                // Hours
                return lessonAcc + Number.parseInt(durationMatch[1]) * 60
              } else if (durationMatch[2]) {
                // Minutes
                return lessonAcc + Number.parseInt(durationMatch[2])
              }
            }
          }
          return lessonAcc
        }, 0)
      )
    }, 0)

    const hours = Math.floor(totalMinutes / 60)
    const minutes = Math.round(totalMinutes % 60)

    return `${hours} hours${minutes > 0 ? ` ${minutes} min` : ""}`
  }

  const totalDuration = calculateTotalDuration()

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
              <Link href="/roadmaps" className="hover:text-foreground">
                Roadmaps
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{roadmap.title}</span>
            </nav>

            {/* Roadmap title and badges */}
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline">{roadmap.category}</Badge>
                {roadmap.premium && <Badge>Premium</Badge>}
                <Badge variant="secondary">{roadmap.difficulty}</Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{roadmap.title}</h1>
            </div>

            {/* Roadmap image */}
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={roadmap.image || "/placeholder.svg"}
                alt={roadmap.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Roadmap tabs */}
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              {/* Overview tab */}
              <TabsContent value="overview" className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About This Roadmap</h2>
                    <p className="text-muted-foreground">{roadmap.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {roadmap.steps.map((step, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">This Roadmap Includes</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span>{totalDuration} of content</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <span>
                          {roadmap.modules?.reduce((acc, module) => acc + module.lessons.length, 0) || 0} lessons
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-muted-foreground" />
                        <span>{roadmap.modules?.length || 0} modules</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <span>Duration: {roadmap.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <span>Last updated {new Date(roadmap.updatedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <span>{roadmap.students.toLocaleString()} students enrolled</span>
                      </div>
                    </div>
                  </div>

                  {roadmap.instructors && (
                    <div>
                      <h3 className="text-xl font-bold mb-4">Instructors</h3>
                      <div className="space-y-6">
                        {roadmap.instructors.map((instructor, i) => (
                          <div key={i} className="flex flex-col sm:flex-row gap-6 items-start">
                            <Avatar className="h-16 w-16">
                              <AvatarImage src={instructor.avatar} alt={instructor.name} />
                              <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-2">
                              <div>
                                <h4 className="text-lg font-bold">{instructor.name}</h4>
                                <p className="text-muted-foreground">{instructor.role}</p>
                              </div>
                              <p className="text-muted-foreground">{instructor.bio}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Curriculum tab */}
              <TabsContent value="curriculum" className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Roadmap Curriculum</h2>
                    <div className="text-sm text-muted-foreground">
                      {roadmap.modules?.reduce((acc, module) => acc + module.lessons.length, 0) || 0} lessons •{" "}
                      {totalDuration} total length
                    </div>
                  </div>

                  <div className="space-y-4">
                    {roadmap.modules?.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="border rounded-lg overflow-hidden">
                        <div
                          className="flex items-center justify-between p-4 bg-muted cursor-pointer"
                          onClick={() => toggleModule(moduleIndex)}
                        >
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <h3 className="font-medium">{module.title}</h3>
                              <p className="text-sm text-muted-foreground">{module.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">{module.lessons.length} lessons</span>
                            <span className="text-sm text-muted-foreground">{module.duration}</span>
                            {expandedModules.includes(moduleIndex) ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </div>
                        </div>
                        {expandedModules.includes(moduleIndex) && (
                          <div className="divide-y">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="flex items-center justify-between p-4 hover:bg-muted/50"
                              >
                                <div className="flex items-center gap-3">
                                  {lesson.type === "video" ? (
                                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                                  ) : lesson.type === "quiz" ? (
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                  ) : lesson.type === "project" ? (
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                  ) : (
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                  )}
                                  <div className="flex items-center gap-2">
                                    <span className={lesson.completed ? "line-through opacity-70" : ""}>
                                      {lesson.title}
                                    </span>
                                    {lesson.completed && <Check className="h-4 w-4 text-green-500" />}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  {lesson.premium && (
                                    <Badge variant="outline" className="gap-1 text-xs">
                                      <Lock className="h-3 w-3" /> Premium
                                    </Badge>
                                  )}
                                  <Badge variant="outline" className="text-xs">
                                    {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}
                                  </Badge>
                                  {lesson.duration && <span className="text-sm">{lesson.duration}</span>}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Reviews tab */}
              <TabsContent value="reviews" className="pt-6">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-1">Student Reviews</h2>
                      <p className="text-muted-foreground">See what our students say about this roadmap</p>
                    </div>
                    <div className="flex flex-col items-center bg-muted p-4 rounded-lg">
                      <div className="text-5xl font-bold">
                        {roadmap.reviews
                          ? (
                              roadmap.reviews.reduce((acc, review) => acc + review.rating, 0) / roadmap.reviews.length
                            ).toFixed(1)
                          : "N/A"}
                      </div>
                      <div className="flex items-center mt-2">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                roadmap.reviews &&
                                i <
                                  Math.floor(
                                    roadmap.reviews.reduce((acc, review) => acc + review.rating, 0) /
                                      roadmap.reviews.length,
                                  )
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Based on {roadmap.reviews?.length || 0} reviews
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-6">
                    {roadmap.reviews?.map((review) => (
                      <div key={review.id} className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={review.avatar} alt={review.user} />
                            <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                              <h4 className="font-medium">{review.user}</h4>
                              <div className="flex items-center">
                                {Array(5)
                                  .fill(null)
                                  .map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                                      }`}
                                    />
                                  ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {new Date(review.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
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
          <div className="sticky top-24">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant={roadmap.premium ? "default" : "outline"}>
                    {roadmap.premium ? "Premium" : "Free"}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">
                      {roadmap.reviews
                        ? (
                            roadmap.reviews.reduce((acc, review) => acc + review.rating, 0) / roadmap.reviews.length
                          ).toFixed(1)
                        : "N/A"}
                    </span>
                    <span className="text-muted-foreground">({roadmap.reviews?.length || 0} reviews)</span>
                  </div>
                </div>
                <CardTitle className="text-2xl">
                  {roadmap.premium ? "$99.99" : "Free"}
                  {roadmap.premium && <span className="text-muted-foreground line-through ml-2 text-lg">$199.99</span>}
                </CardTitle>
                <CardDescription>{roadmap.premium && "50% off - Limited time offer"}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Your Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <Button size="lg" className="w-full">
                  {progress > 0 ? "Continue Learning" : roadmap.premium ? "Enroll Now" : "Start Learning"}
                </Button>
                {roadmap.premium && (
                  <Button variant="outline" size="lg" className="w-full">
                    Try For Free
                  </Button>
                )}

                {roadmap.premium && (
                  <div className="text-sm text-muted-foreground text-center">30-Day Money-Back Guarantee</div>
                )}

                <div className="space-y-3">
                  <div className="text-sm font-medium">This roadmap includes:</div>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{totalDuration} of content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {roadmap.modules?.reduce((acc, module) => acc + module.lessons.length, 0) || 0} lessons
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>{roadmap.modules?.length || 0} modules</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Map className="h-4 w-4 text-muted-foreground" />
                      <span>Structured learning path</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>Projects and assessments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 pt-2">
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related roadmaps */}
            {relatedRoadmaps.length > 0 && (
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Related Roadmaps</h3>
                  <Button variant="link" size="sm" asChild>
                    <Link href="/roadmaps">
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  {relatedRoadmaps.map((relatedRoadmap) => (
                    <Card key={relatedRoadmap.id}>
                      <CardHeader className="p-4">
                        <div className="flex justify-between">
                          <Badge variant="outline">{relatedRoadmap.category}</Badge>
                          {relatedRoadmap.premium && <Badge>Premium</Badge>}
                        </div>
                        <CardTitle className="text-lg mt-2">
                          <Link href={`/roadmaps/${relatedRoadmap.id}`} className="hover:underline">
                            {relatedRoadmap.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2 mt-1">{relatedRoadmap.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{relatedRoadmap.duration}</span>
                          <span>{relatedRoadmap.students.toLocaleString()} students</span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button size="sm" className="w-full" asChild>
                          <Link href={`/roadmaps/${relatedRoadmap.id}`}>View Roadmap</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
