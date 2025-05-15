"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Award,
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  FileText,
  Globe,
  Heart,
  Info,
  LayoutList,
  MessageSquare,
  Play,
  Share2,
  Star,
  Users,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CourseDetailContent({ course }: { course: any }) {
  const [expandedModules, setExpandedModules] = useState<number[]>([0]) // First module expanded by default

  const toggleModule = (index: number) => {
    setExpandedModules((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const totalLessons = course.modules
    ? course.modules.reduce((acc, module) => acc + (module.lessons?.length || 0), 0)
    : 0
  const totalVideoDuration = course.modules
    ? course.modules
        .flatMap((module) => module.lessons || [])
        .filter((lesson) => lesson.type === "video" && lesson.duration)
        .reduce((acc, lesson) => {
          const [minutes, seconds] = (lesson.duration || "0:0").split(":").map(Number)
          return acc + minutes * 60 + seconds
        }, 0)
    : 0

  // Format total duration as hours and minutes
  const hours = Math.floor(totalVideoDuration / 3600)
  const minutes = Math.floor((totalVideoDuration % 3600) / 60)
  const formattedDuration = `${hours > 0 ? `${hours}h ` : ""}${minutes}m`

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
              <Link href="/courses" className="hover:text-foreground">
                Courses
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{course.title}</span>
            </nav>

            {/* Course title and badges */}
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline">{course.category}</Badge>
                {course.premium && <Badge>Premium</Badge>}
                <Badge variant="secondary">{course.level}</Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{course.title}</h1>
            </div>

            {/* Course image */}
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Button size="lg" className="rounded-full">
                  <Play className="mr-2 h-5 w-5" />
                  Preview Course
                </Button>
              </div>
            </div>

            {/* Course tabs */}
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              {/* Overview tab */}
              <TabsContent value="overview" className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                    <p className="text-muted-foreground">{course.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {course.whatYouWillLearn?.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      )) || <p className="text-muted-foreground">No learning objectives specified for this course.</p>}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Requirements</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {course.requirements?.map((req, i) => <li key={i}>{req}</li>) || (
                        <li>No specific requirements for this course.</li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">This Course Includes</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span>{formattedDuration} of video content</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <span>{totalLessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <LayoutList className="h-5 w-5 text-muted-foreground" />
                        <span>{course.modules?.length || 0} modules</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-muted-foreground" />
                        <span>{course.language}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <span>Last updated {new Date(course.updatedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <span>{course.students.toLocaleString()} students enrolled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Curriculum tab */}
              <TabsContent value="curriculum" className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Course Curriculum</h2>
                    <div className="text-sm text-muted-foreground">
                      {totalLessons} lessons • {formattedDuration} total length
                    </div>
                  </div>

                  <div className="space-y-4">
                    {course.modules?.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="border rounded-lg overflow-hidden">
                        <div
                          className="flex items-center justify-between p-4 bg-muted cursor-pointer"
                          onClick={() => toggleModule(moduleIndex)}
                        >
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-muted-foreground" />
                            <h3 className="font-medium">{module.title}</h3>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">{module.lessons?.length || 0} lessons</span>
                            {expandedModules.includes(moduleIndex) ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </div>
                        </div>
                        {expandedModules.includes(moduleIndex) && (
                          <div className="divide-y">
                            {module.lessons?.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="flex items-center justify-between p-4 hover:bg-muted/50"
                              >
                                <div className="flex items-center gap-3">
                                  {lesson.type === "video" ? (
                                    <Play className="h-4 w-4 text-muted-foreground" />
                                  ) : lesson.type === "quiz" ? (
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                  ) : lesson.type === "assignment" ? (
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                  ) : (
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                  )}
                                  <span>{lesson.title}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  {lesson.type !== "video" && (
                                    <Badge variant="outline" className="text-xs">
                                      {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}
                                    </Badge>
                                  )}
                                  {lesson.duration && <span className="text-sm">{lesson.duration}</span>}
                                </div>
                              </div>
                            )) || (
                              <div className="p-4 text-muted-foreground">No lessons available for this module.</div>
                            )}
                          </div>
                        )}
                      </div>
                    )) || <div className="text-muted-foreground">No curriculum available for this course yet.</div>}
                  </div>
                </div>
              </TabsContent>

              {/* Instructor tab */}
              <TabsContent value="instructor" className="pt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Meet Your Instructor</h2>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={course.instructorAvatar || "/placeholder.svg"} alt={course.instructor} />
                      <AvatarFallback>{course.instructor?.charAt(0) || "I"}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">{course.instructor}</h3>
                        <p className="text-muted-foreground">Web Development Instructor</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                          <span className="ml-1 font-medium">{course.rating}</span>
                          <span className="ml-1 text-muted-foreground">Instructor Rating</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-muted-foreground" />
                          <span className="ml-1">{(course.students || 0).toLocaleString()} Students</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-muted-foreground" />
                          <span className="ml-1">5 Courses</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{course.instructorBio}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Reviews tab */}
              <TabsContent value="reviews" className="pt-6">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-1">Student Reviews</h2>
                      <p className="text-muted-foreground">See what our students say about this course</p>
                    </div>
                    <div className="flex flex-col items-center bg-muted p-4 rounded-lg">
                      <div className="text-5xl font-bold">{course.rating}</div>
                      <div className="flex items-center mt-2">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(course.rating)
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Based on {course.reviews?.length || 0} reviews
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-6">
                    {course.reviews?.map((review) => (
                      <div key={review.id} className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.user} />
                            <AvatarFallback>{review.user?.charAt(0) || "U"}</AvatarFallback>
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
                    )) || <div className="text-muted-foreground">No reviews available for this course yet.</div>}
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
                  <Badge variant={course.premium ? "default" : "outline"}>{course.premium ? "Premium" : "Free"}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">({course.reviews?.length || 0} reviews)</span>
                  </div>
                </div>
                <CardTitle className="text-2xl">
                  {course.premium ? "$49.99" : "Free"}
                  {course.premium && <span className="text-muted-foreground line-through ml-2 text-lg">$99.99</span>}
                </CardTitle>
                <CardDescription>{course.premium && "50% off - Limited time offer"}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button size="lg" className="w-full">
                  {course.premium ? "Enroll Now" : "Start Learning"}
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Try For Free
                </Button>

                <div className="text-sm text-muted-foreground text-center">30-Day Money-Back Guarantee</div>

                <div className="space-y-3">
                  <div className="text-sm font-medium">This course includes:</div>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{formattedDuration} of on-demand video</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>{totalLessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-muted-foreground" />
                      <span>Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 pt-2">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageSquare className="h-5 w-5" />
                    <span className="sr-only">Ask a question</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
