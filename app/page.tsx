"use client"

import { ArrowRight, Award, BookOpen, CheckCircle, Clock, Code, FileText, Map, Mic, Play, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Master Tech Skills at Your Own Pace
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Courses, videos, podcasts, and roadmaps to help you learn programming, data science, AI, and more.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/courses">
                    Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/roadmaps">View Learning Paths</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>100+ Courses</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Learn at Your Pace</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  width={700}
                  height={500}
                  alt="Hero"
                  className="aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" variant="outline" className="rounded-full bg-background/80 backdrop-blur-sm">
                    <Play className="mr-2 h-5 w-5 text-primary" />
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 border-y">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold md:text-4xl lg:text-5xl">100+</div>
              <div className="text-sm font-medium text-muted-foreground md:text-base">Courses</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold md:text-4xl lg:text-5xl">50k+</div>
              <div className="text-sm font-medium text-muted-foreground md:text-base">Students</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold md:text-4xl lg:text-5xl">200+</div>
              <div className="text-sm font-medium text-muted-foreground md:text-base">Videos</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold md:text-4xl lg:text-5xl">15+</div>
              <div className="text-sm font-medium text-muted-foreground md:text-base">Learning Paths</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Courses</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our most popular courses and start learning today
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {[
              {
                title: "Modern Web Development",
                description: "Learn the latest web development techniques with React, Next.js, and more.",
                image: "/placeholder.svg?height=200&width=400",
                hours: 12,
                level: "Intermediate",
                instructor: "John Doe",
                premium: true,
              },
              {
                title: "Data Science Fundamentals",
                description: "Master the basics of data science, statistics, and machine learning.",
                image: "/placeholder.svg?height=200&width=400",
                hours: 15,
                level: "Beginner",
                instructor: "Jane Smith",
                premium: false,
              },
              {
                title: "Mobile App Development",
                description: "Build cross-platform mobile apps with React Native and Flutter.",
                image: "/placeholder.svg?height=200&width=400",
                hours: 10,
                level: "Intermediate",
                instructor: "Mike Johnson",
                premium: true,
              },
            ].map((course, i) => (
              <Card key={i} className="overflow-hidden">
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
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{course.hours} hours</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Award className="mr-1 h-4 w-4" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src="/placeholder.svg" alt="Instructor" />
                      <AvatarFallback>IN</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{course.instructor}</span>
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/courses/${i + 1}`}>View Course</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything You Need to Learn
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform offers a variety of learning resources to help you master tech skills
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Comprehensive Courses",
                description: "In-depth courses with hands-on projects and quizzes to test your knowledge.",
                icon: BookOpen,
              },
              {
                title: "Video Lessons",
                description: "Watch expert instructors explain complex concepts with practical examples.",
                icon: Video,
              },
              {
                title: "Tech Podcasts",
                description: "Listen to industry experts discuss the latest trends and technologies.",
                icon: Mic,
              },
              {
                title: "Learning Roadmaps",
                description: "Follow structured learning paths designed to take you from beginner to expert.",
                icon: Map,
              },
              {
                title: "Code Playground",
                description: "Practice coding in a real-time environment with instant feedback.",
                icon: Code,
              },
              {
                title: "Blog Articles",
                description: "Read in-depth articles on various tech topics written by industry professionals.",
                icon: FileText,
              },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Videos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Watch our most popular video lessons
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=400`}
                    width={400}
                    height={200}
                    alt={`Video ${i}`}
                    className="w-full object-cover h-48"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-background/80 p-2 backdrop-blur-sm">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>45 minutes</span>
                  </div>
                  <CardTitle className="text-xl">Building a REST API with Node.js</CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">
                    Learn how to build a scalable REST API using Node.js, Express, and MongoDB.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0">
                  <Button size="sm" className="w-full" asChild>
                    <Link href={`/videos/${i}`}>Watch Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/videos">
                View All Videos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tech Podcasts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Listen to our podcasts on the go
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 m:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-primary/10 p-2">
                      <Mic className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Tech Talk Episode {i}</CardTitle>
                      <CardDescription className="mt-1">With Jane Smith & John Doe</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="line-clamp-3 text-muted-foreground">
                    In this episode, we discuss the latest trends in technology and how they're shaping the future of
                    software development.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mt-4">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>1 hour 15 minutes</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <Link href={`/podcasts/${i}`}>Listen Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/podcasts">
                View All Podcasts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Roadmaps Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learning Roadmaps</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow structured learning paths to master tech skills
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {[
              {
                title: "Frontend Developer",
                description: "Master HTML, CSS, JavaScript, and modern frontend frameworks",
                steps: [
                  "HTML & CSS Basics",
                  "JavaScript Fundamentals",
                  "React & Next.js",
                  "State Management",
                  "Testing & Deployment",
                ],
              },
              {
                title: "Backend Developer",
                description: "Learn server-side programming, databases, and API development",
                steps: [
                  "Server-side Languages",
                  "Database Design",
                  "API Development",
                  "Authentication & Security",
                  "Deployment & DevOps",
                ],
              },
              {
                title: "Data Scientist",
                description: "Explore statistics, machine learning, and data visualization",
                steps: [
                  "Python for Data Science",
                  "Statistical Analysis",
                  "Machine Learning",
                  "Deep Learning",
                  "Data Visualization",
                ],
              },
            ].map((roadmap, i) => (
              <Card key={i}>
                <CardHeader className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-primary/10 p-2">
                      <Map className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{roadmap.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <CardDescription className="mb-4">{roadmap.description}</CardDescription>
                  <div className="space-y-2">
                    {roadmap.steps.map((step, j) => (
                      <div key={j} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button size="sm" className="w-full" asChild>
                    <Link href={`/roadmaps/${i + 1}`}>View Roadmap</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/roadmaps">
                View All Roadmaps <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Articles</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Read our latest blog posts and tutorials
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "10 Essential VS Code Extensions for Web Developers",
                excerpt: "Boost your productivity with these must-have VS Code extensions for web development.",
                date: "May 15, 2023",
                readTime: "5 min read",
                author: "John Doe",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Understanding Async/Await in JavaScript",
                excerpt: "A comprehensive guide to working with asynchronous JavaScript using async/await syntax.",
                date: "April 28, 2023",
                readTime: "8 min read",
                author: "Jane Smith",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Getting Started with Docker for Developers",
                excerpt:
                  "Learn how to use Docker to containerize your applications and simplify your development workflow.",
                date: "April 10, 2023",
                readTime: "10 min read",
                author: "Mike Johnson",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((article, i) => (
              <Card key={i} className="overflow-hidden">
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
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src="/placeholder.svg" alt="Author" />
                      <AvatarFallback>AU</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{article.author}</span>
                  </div>
                  <Button size="sm" variant="ghost" asChild>
                    <Link href={`/blog/${i + 1}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Code Playground Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Code Playground</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Practice coding with interactive examples
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <Card className="overflow-hidden">
              <CardHeader className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Interactive Code Editor</CardTitle>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/playground">Open Full Editor</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="bg-muted p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-foreground">
                    <code>{`// Example React component
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`}</code>
                  </pre>
                </div>
              </CardContent>
              <CardFooter className="p-4 border-t">
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Run Code
                    </Button>
                    <Button size="sm" variant="outline">
                      Reset
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">Try editing the code above</div>
                </div>
              </CardFooter>
            </Card>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Our code playground supports multiple languages and frameworks
              </p>
              <Tabs defaultValue="javascript" className="max-w-md mx-auto">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="react">React</TabsTrigger>
                  <TabsTrigger value="node">Node.js</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="mt-6">
                <Button size="lg" asChild>
                  <Link href="/playground">
                    Try Code Playground <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our students have accomplished
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {[
              {
                name: "Jane Doe",
                role: "Frontend Developer at Tech Co.",
                testimonial:
                  "The courses on this platform helped me transition from a non-technical role to a frontend developer position in just 6 months. The roadmap was especially helpful in guiding my learning journey.",
              },
              {
                name: "Mike Smith",
                role: "Data Scientist at AI Startup",
                testimonial:
                  "I was able to land my dream job as a data scientist after completing the data science roadmap and related courses. The practical projects and code examples were invaluable.",
              },
              {
                name: "Sarah Johnson",
                role: "Full Stack Developer",
                testimonial:
                  "The combination of video lessons, practical exercises, and community support made learning full stack development much easier than I expected. I now work remotely for a tech company.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" alt="User" />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">"{testimonial.testimonial}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Subscribe to our newsletter for the latest courses, videos, and tech news
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our{" "}
                <Link href="/terms" className="underline underline-offset-2">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start Learning?</h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get unlimited access to all our premium content with a subscription
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/premium">
                  Upgrade to Premium <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/signup">Create Free Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
