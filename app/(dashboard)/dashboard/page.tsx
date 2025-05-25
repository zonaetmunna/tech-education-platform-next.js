import Link from "next/link"
import { BookOpen, Clock, Code, FileText, Map, Mic, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Track your progress and continue learning.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 in progress, 3 completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Videos</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">12 watched</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Podcasts</CardTitle>
            <Mic className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 listened</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Roadmaps</CardTitle>
            <Map className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Frontend (65%), Backend (20%)</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-6">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Continue Learning</CardTitle>
            <CardDescription>Pick up where you left off</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  title: "Modern Web Development",
                  type: "Course",
                  icon: BookOpen,
                  progress: 65,
                  lastAccessed: "2 days ago",
                  href: "/courses/1",
                },
                {
                  title: "Building a REST API with Node.js",
                  type: "Video",
                  icon: Video,
                  progress: 45,
                  lastAccessed: "1 week ago",
                  href: "/videos/1",
                },
                {
                  title: "Tech Talk: The Future of AI",
                  type: "Podcast",
                  icon: Mic,
                  progress: 80,
                  lastAccessed: "3 days ago",
                  href: "/podcasts/1",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="rounded-md bg-primary/10 p-1">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.type} • Last accessed {item.lastAccessed}
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href={item.href}>Continue</Link>
                    </Button>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Roadmap Progress</CardTitle>
            <CardDescription>Your learning paths</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  title: "Frontend Developer",
                  progress: 65,
                  href: "/roadmaps/1",
                },
                {
                  title: "Backend Developer",
                  progress: 20,
                  href: "/roadmaps/2",
                },
              ].map((roadmap, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{roadmap.title}</div>
                    <div className="text-sm text-muted-foreground">{roadmap.progress}%</div>
                  </div>
                  <Progress value={roadmap.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/roadmaps">View All Roadmaps</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recommended For You</CardTitle>
          <CardDescription>Based on your interests and learning history</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="courses">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="courses">
                <BookOpen className="mr-2 h-4 w-4" />
                Courses
              </TabsTrigger>
              <TabsTrigger value="videos">
                <Video className="mr-2 h-4 w-4" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="articles">
                <FileText className="mr-2 h-4 w-4" />
                Articles
              </TabsTrigger>
              <TabsTrigger value="code">
                <Code className="mr-2 h-4 w-4" />
                Code
              </TabsTrigger>
            </TabsList>
            <TabsContent value="courses" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Advanced React Patterns</CardTitle>
                      <CardDescription>Learn advanced React patterns and techniques</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>8 hours</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button size="sm" className="w-full" asChild>
                        <Link href={`/courses/${i + 3}`}>View Course</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="videos" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">GraphQL Fundamentals</CardTitle>
                      <CardDescription>Introduction to GraphQL and its benefits</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>35 minutes</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button size="sm" className="w-full" asChild>
                        <Link href={`/videos/${i + 3}`}>Watch Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="articles" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Microservices Architecture</CardTitle>
                      <CardDescription>Building scalable applications with microservices</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>10 min read</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button size="sm" className="w-full" asChild>
                        <Link href={`/blog/${i}`}>Read Article</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="code" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">Authentication Middleware</CardTitle>
                      <CardDescription>Secure your API with JWT authentication</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Code className="mr-1 h-4 w-4" />
                        <span>Node.js</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button size="sm" className="w-full" asChild>
                        <Link href={`/playground/${i}`}>View Code</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
