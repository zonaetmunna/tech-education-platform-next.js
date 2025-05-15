import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, ChevronLeft, FileText, ImageIcon, Mic, Save, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { DashboardLayout } from "@/components/dashboard-layout"

export const metadata: Metadata = {
  title: "Add New Content | Tech Education Platform",
  description: "Create new courses, videos, podcasts, and blog posts",
}

export default function NewContentPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/admin/content">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Link>
              </Button>
              <h1 className="text-3xl font-bold tracking-tight">Add New Content</h1>
            </div>
            <p className="text-muted-foreground">Create new courses, videos, podcasts, and blog posts</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Save as Draft</Button>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Publish
            </Button>
          </div>
        </div>

        <Separator />

        <div className="grid gap-6 md:grid-cols-6">
          <div className="md:col-span-4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Type</CardTitle>
                <CardDescription>Select the type of content you want to create</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="course" className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div>
                    <RadioGroupItem value="course" id="course" className="peer sr-only" />
                    <Label
                      htmlFor="course"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <BookOpen className="mb-3 h-6 w-6" />
                      Course
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="video" id="video" className="peer sr-only" />
                    <Label
                      htmlFor="video"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Video className="mb-3 h-6 w-6" />
                      Video
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="podcast" id="podcast" className="peer sr-only" />
                    <Label
                      htmlFor="podcast"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Mic className="mb-3 h-6 w-6" />
                      Podcast
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="blog" id="blog" className="peer sr-only" />
                    <Label
                      htmlFor="blog"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <FileText className="mb-3 h-6 w-6" />
                      Blog Post
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Enter the basic details for your content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter a title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter a description" rows={4} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-development">Mobile Development</SelectItem>
                        <SelectItem value="data-science">Data Science</SelectItem>
                        <SelectItem value="devops">DevOps</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="soft-skills">Soft Skills</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="level">Difficulty Level</Label>
                    <Select>
                      <SelectTrigger id="level">
                        <SelectValue placeholder="Select a level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" placeholder="Enter tags separated by commas" />
                  <p className="text-xs text-muted-foreground">Add relevant tags to help users find your content</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>Add your content details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="course" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="course">Course</TabsTrigger>
                    <TabsTrigger value="video">Video</TabsTrigger>
                    <TabsTrigger value="podcast">Podcast</TabsTrigger>
                    <TabsTrigger value="blog">Blog</TabsTrigger>
                  </TabsList>
                  <TabsContent value="course" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="course-duration">Duration (hours)</Label>
                      <Input id="course-duration" type="number" min="0" step="0.5" placeholder="e.g., 8.5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course-modules">Number of Modules</Label>
                      <Input id="course-modules" type="number" min="1" placeholder="e.g., 10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course-requirements">Requirements</Label>
                      <Textarea
                        id="course-requirements"
                        placeholder="Enter course prerequisites or requirements"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course-outcomes">Learning Outcomes</Label>
                      <Textarea
                        id="course-outcomes"
                        placeholder="What will students learn from this course?"
                        rows={3}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="video" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="video-url">Video URL</Label>
                      <Input id="video-url" placeholder="Enter YouTube or Vimeo URL" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="video-duration">Duration (minutes)</Label>
                      <Input id="video-duration" type="number" min="0" placeholder="e.g., 45" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="video-transcript">Transcript</Label>
                      <Textarea id="video-transcript" placeholder="Enter video transcript" rows={6} />
                    </div>
                  </TabsContent>
                  <TabsContent value="podcast" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="podcast-url">Audio URL</Label>
                      <Input id="podcast-url" placeholder="Enter podcast audio URL" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="podcast-duration">Duration (minutes)</Label>
                      <Input id="podcast-duration" type="number" min="0" placeholder="e.g., 30" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="podcast-guests">Guests</Label>
                      <Input id="podcast-guests" placeholder="Enter guest names separated by commas" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="podcast-transcript">Transcript</Label>
                      <Textarea id="podcast-transcript" placeholder="Enter podcast transcript" rows={6} />
                    </div>
                  </TabsContent>
                  <TabsContent value="blog" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="blog-content">Blog Content</Label>
                      <Textarea id="blog-content" placeholder="Write your blog post content here" rows={10} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="blog-excerpt">Excerpt</Label>
                      <Textarea id="blog-excerpt" placeholder="Enter a short excerpt for your blog post" rows={3} />
                      <p className="text-xs text-muted-foreground">
                        This will be displayed in blog listings and search results
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Featured Image</CardTitle>
                <CardDescription>Upload a featured image for your content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="flex h-48 w-full items-center justify-center rounded-md border border-dashed">
                    <div className="flex flex-col items-center justify-center space-y-2 p-4 text-center">
                      <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      <div className="text-xs text-muted-foreground">Drag and drop an image, or click to browse</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-2">
                    Upload Image
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Publishing Options</CardTitle>
                <CardDescription>Configure how your content is published</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="premium">Premium Content</Label>
                  <Switch id="premium" />
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="featured">Featured Content</Label>
                  <Switch id="featured" />
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="comments">Allow Comments</Label>
                  <Switch id="comments" defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="publish-date">Publish Date</Label>
                  <Input id="publish-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Select>
                    <SelectTrigger id="author">
                      <SelectValue placeholder="Select an author" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                      <SelectItem value="michael-chen">Michael Chen</SelectItem>
                      <SelectItem value="emily-parker">Emily Parker</SelectItem>
                      <SelectItem value="david-wilson">David Wilson</SelectItem>
                      <SelectItem value="alex-rivera">Alex Rivera</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Save as Draft</Button>
                <Button>Publish</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
