"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Clock, Filter, Play, Search, SlidersHorizontal } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Sample video data
const videosData = [
  {
    id: 1,
    title: "Building a REST API with Node.js",
    description: "Learn how to build a scalable REST API using Node.js, Express, and MongoDB.",
    thumbnail: "/placeholder.svg?height=200&width=400",
    duration: "45:30",
    instructor: "John Doe",
    instructorAvatar: "/placeholder.svg",
    premium: true,
    category: "Backend Development",
    tags: ["Node.js", "Express", "MongoDB", "API"],
    views: 12500,
    publishedAt: "2023-05-15",
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
    id: 3,
    title: "CSS Grid Layout Masterclass",
    description: "Learn how to create complex layouts with CSS Grid.",
    thumbnail: "/placeholder.svg?height=200&width=400",
    duration: "32:45",
    instructor: "Mike Johnson",
    instructorAvatar: "/placeholder.svg",
    premium: false,
    category: "Frontend Development",
    tags: ["CSS", "Grid", "Layout", "Web Design"],
    views: 6300,
    publishedAt: "2023-03-10",
  },
  {
    id: 4,
    title: "Introduction to TypeScript",
    description: "Get started with TypeScript and learn how to add static typing to your JavaScript projects.",
    thumbnail: "/placeholder.svg?height=200&width=400",
    duration: "41:20",
    instructor: "Sarah Williams",
    instructorAvatar: "/placeholder.svg",
    premium: true,
    category: "Programming Languages",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    views: 9200,
    publishedAt: "2023-06-05",
  },
  {
    id: 5,
    title: "Docker for Developers",
    description: "Learn how to use Docker to containerize your applications and simplify your development workflow.",
    thumbnail: "/placeholder.svg?height=200&width=400",
    duration: "52:10",
    instructor: "David Chen",
    instructorAvatar: "/placeholder.svg",
    premium: true,
    category: "DevOps",
    tags: ["Docker", "Containers", "DevOps"],
    views: 7500,
    publishedAt: "2023-02-18",
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
    id: 7,
    title: "Responsive Web Design Principles",
    description: "Master the principles of responsive web design and create websites that look great on any device.",
    thumbnail: "/placeholder.svg?height=200&width=400",
    duration: "28:30",
    instructor: "Emily Parker",
    instructorAvatar: "/placeholder.svg",
    premium: false,
    category: "Web Design",
    tags: ["CSS", "Responsive", "Web Design"],
    views: 11200,
    publishedAt: "2023-04-28",
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
  {
    id: 9,
    title: "Introduction to Machine Learning with Python",
    description: "Get started with machine learning using Python and scikit-learn.",
    thumbnail: "/placeholder.svg?height=200&width=400",
    duration: "58:20",
    instructor: "Lisa Wang",
    instructorAvatar: "/placeholder.svg",
    premium: true,
    category: "Data Science",
    tags: ["Python", "Machine Learning", "Data Science"],
    views: 8900,
    publishedAt: "2023-05-15",
  },
]

// Get unique categories and tags
const categories = Array.from(new Set(videosData.map((video) => video.category)))
const allTags = videosData.flatMap((video) => video.tags)
const tags = Array.from(new Set(allTags))

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)
  const [sortBy, setSortBy] = useState("newest")

  // Filter videos based on search query and filters
  const filteredVideos = videosData.filter((video) => {
    // Search query filter
    const matchesSearch =
      searchQuery === "" ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    // Category filter
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(video.category)

    // Tags filter
    const matchesTags = selectedTags.length === 0 || video.tags.some((tag) => selectedTags.includes(tag))

    // Premium filter
    const matchesPremium = !showPremiumOnly || video.premium

    return matchesSearch && matchesCategory && matchesTags && matchesPremium
  })

  // Sort videos
  const sortedVideos = [...filteredVideos].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      case "oldest":
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      case "popular":
        return b.views - a.views
      case "duration-asc":
        return convertToSeconds(a.duration) - convertToSeconds(b.duration)
      case "duration-desc":
        return convertToSeconds(b.duration) - convertToSeconds(a.duration)
      default:
        return 0
    }
  })

  // Helper function to convert duration string to seconds
  function convertToSeconds(duration: string): number {
    const [minutes, seconds] = duration.split(":").map(Number)
    return minutes * 60 + seconds
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedTags([])
    setShowPremiumOnly(false)
    setSearchQuery("")
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Video Lessons</h1>
          <p className="text-muted-foreground">
            Watch expert instructors explain complex concepts with practical examples
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search videos..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Filter Videos</SheetTitle>
                  <SheetDescription>Narrow down videos based on your preferences</SheetDescription>
                </SheetHeader>
                <div className="grid gap-6 py-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Categories</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => handleCategoryChange(category)}
                          />
                          <label
                            htmlFor={`category-${category}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant={selectedTags.includes(tag) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => handleTagChange(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="premium-only"
                        checked={showPremiumOnly}
                        onCheckedChange={(checked) => setShowPremiumOnly(checked === true)}
                      />
                      <label
                        htmlFor="premium-only"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Show Premium Videos Only
                      </label>
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline" onClick={clearFilters}>
                      Reset Filters
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button>Apply Filters</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setSortBy("newest")}>Newest</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("oldest")}>Oldest</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("popular")}>Most Popular</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("duration-asc")}>Duration (Shortest First)</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("duration-desc")}>Duration (Longest First)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] h-9 hidden md:flex">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort by</SelectLabel>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="duration-asc">Duration (Shortest First)</SelectItem>
                  <SelectItem value="duration-desc">Duration (Longest First)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Filter pills */}
        {(selectedCategories.length > 0 || selectedTags.length > 0 || showPremiumOnly) && (
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedCategories.map((category) => (
              <Badge key={category} variant="secondary" className="flex items-center gap-1">
                {category}
                <button
                  onClick={() => handleCategoryChange(category)}
                  className="ml-1 rounded-full outline-none focus:ring-2 focus:ring-ring"
                >
                  ✕
                </button>
              </Badge>
            ))}
            {selectedTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                {tag}
                <button
                  onClick={() => handleTagChange(tag)}
                  className="ml-1 rounded-full outline-none focus:ring-2 focus:ring-ring"
                >
                  ✕
                </button>
              </Badge>
            ))}
            {showPremiumOnly && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Premium Only
                <button
                  onClick={() => setShowPremiumOnly(false)}
                  className="ml-1 rounded-full outline-none focus:ring-2 focus:ring-ring"
                >
                  ✕
                </button>
              </Badge>
            )}
            <Button variant="ghost" size="sm" onClick={clearFilters} className="h-6 px-2 text-xs">
              Clear All
            </Button>
          </div>
        )}

        {/* Results count */}
        <div className="text-sm text-muted-foreground mt-2">
          Showing {sortedVideos.length} of {videosData.length} videos
        </div>

        {/* Videos grid */}
        {sortedVideos.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {sortedVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden flex flex-col">
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    width={400}
                    height={200}
                    alt={video.title}
                    className="w-full object-cover h-48"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-background/80 p-2 backdrop-blur-sm">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
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
                  <CardTitle className="text-xl">
                    <Link href={`/videos/${video.id}`} className="hover:underline">
                      {video.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">{video.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-0 flex-grow">
                  <div className="flex flex-wrap gap-1 mt-2">
                    {video.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-4 flex justify-between items-center mt-auto border-t">
                  <div className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src={video.instructorAvatar} alt={video.instructor} />
                      <AvatarFallback>{video.instructor.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{video.instructor}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{video.duration}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Play className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No videos found</h3>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
