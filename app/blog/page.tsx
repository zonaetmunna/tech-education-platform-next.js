"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Filter, Search, SlidersHorizontal } from "lucide-react"

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

// Sample blog data
const blogData = [
  {
    id: 1,
    title: "10 Essential VS Code Extensions for Web Developers",
    excerpt:
      "Boost your productivity with these must-have VS Code extensions for web development. From code formatting to debugging tools, these extensions will streamline your workflow.",
    content:
      "Visual Studio Code has become the editor of choice for many web developers due to its flexibility, speed, and extensive ecosystem of extensions. In this article, we'll explore 10 essential VS Code extensions that can significantly improve your productivity and make your development workflow smoother...",
    image: "/placeholder.svg?height=200&width=400",
    author: "John Doe",
    authorAvatar: "/placeholder.svg",
    authorRole: "Senior Developer",
    date: "2023-05-15",
    readTime: "5 min read",
    category: "Development Tools",
    tags: ["VS Code", "Web Development", "Productivity", "Tools"],
    views: 12500,
    featured: true,
  },
  {
    id: 2,
    title: "Understanding Async/Await in JavaScript",
    excerpt:
      "A comprehensive guide to working with asynchronous JavaScript using async/await syntax. Learn how to write cleaner, more maintainable asynchronous code.",
    content:
      "Asynchronous programming is a fundamental concept in JavaScript, especially when dealing with operations like API calls, file I/O, or any task that might take some time to complete. The introduction of async/await in ES2017 has revolutionized how we write asynchronous code, making it more readable and maintainable...",
    image: "/placeholder.svg?height=200&width=400",
    author: "Jane Smith",
    authorAvatar: "/placeholder.svg",
    authorRole: "JavaScript Developer",
    date: "2023-04-28",
    readTime: "8 min read",
    category: "JavaScript",
    tags: ["JavaScript", "Async/Await", "ES6", "Programming"],
    views: 8700,
    featured: false,
  },
  {
    id: 3,
    title: "Getting Started with Docker for Developers",
    excerpt:
      "Learn how to use Docker to containerize your applications and simplify your development workflow. This beginner-friendly guide covers the basics of Docker.",
    content:
      "Docker has transformed how developers build, ship, and run applications by introducing containerization to the mainstream. Containers allow you to package your application along with all its dependencies, ensuring it works consistently across different environments...",
    image: "/placeholder.svg?height=200&width=400",
    author: "Mike Johnson",
    authorAvatar: "/placeholder.svg",
    authorRole: "DevOps Engineer",
    date: "2023-04-10",
    readTime: "10 min read",
    category: "DevOps",
    tags: ["Docker", "Containers", "DevOps", "Development"],
    views: 7500,
    featured: true,
  },
  {
    id: 4,
    title: "Building Responsive Layouts with CSS Grid",
    excerpt:
      "Master CSS Grid to create flexible, responsive layouts for modern web applications. This tutorial covers everything from basic concepts to advanced techniques.",
    content:
      "CSS Grid Layout has revolutionized how we design web layouts, providing a two-dimensional system that handles both columns and rows. Unlike Flexbox, which is primarily designed for one-dimensional layouts, Grid allows you to create complex, responsive designs with less code and more flexibility...",
    image: "/placeholder.svg?height=200&width=400",
    author: "Sarah Williams",
    authorAvatar: "/placeholder.svg",
    authorRole: "Frontend Developer",
    date: "2023-06-05",
    readTime: "7 min read",
    category: "CSS",
    tags: ["CSS", "Grid", "Responsive Design", "Web Development"],
    views: 9200,
    featured: false,
  },
  {
    id: 5,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt:
      "Discover how TypeScript can enhance your JavaScript development experience with static typing, improved tooling, and better code organization.",
    content:
      "TypeScript has gained significant popularity in recent years as a superset of JavaScript that adds static typing and other features to help developers write more robust, maintainable code. If you're a JavaScript developer looking to level up your skills, TypeScript offers numerous benefits that can improve your development workflow and reduce bugs in your applications...",
    image: "/placeholder.svg?height=200&width=400",
    author: "David Chen",
    authorAvatar: "/placeholder.svg",
    authorRole: "TypeScript Enthusiast",
    date: "2023-02-18",
    readTime: "6 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Programming", "Web Development"],
    views: 6800,
    featured: false,
  },
  {
    id: 6,
    title: "Optimizing React Performance: Tips and Tricks",
    excerpt:
      "Learn practical strategies to improve the performance of your React applications, from code splitting to memoization and efficient state management.",
    content:
      "As React applications grow in complexity, performance optimization becomes increasingly important. Slow rendering, unnecessary re-renders, and inefficient data fetching can significantly impact user experience. In this article, we'll explore various techniques to optimize your React applications and ensure they run smoothly even as they scale...",
    image: "/placeholder.svg?height=200&width=400",
    author: "Alex Johnson",
    authorAvatar: "/placeholder.svg",
    authorRole: "React Developer",
    date: "2023-05-12",
    readTime: "9 min read",
    category: "React",
    tags: ["React", "Performance", "JavaScript", "Optimization"],
    views: 10800,
    featured: true,
  },
  {
    id: 7,
    title: "The Complete Guide to CSS Flexbox",
    excerpt:
      "Master the Flexbox layout model to create flexible, responsive designs with ease. This comprehensive guide covers all Flexbox properties with practical examples.",
    content:
      "Flexbox, or the Flexible Box Layout, has revolutionized how we create layouts in CSS. It provides a more efficient way to arrange, align, and distribute space among items in a container, even when their size is unknown or dynamic. In this comprehensive guide, we'll explore all aspects of Flexbox, from basic concepts to advanced techniques...",
    image: "/placeholder.svg?height=200&width=400",
    author: "Emily Parker",
    authorAvatar: "/placeholder.svg",
    authorRole: "CSS Specialist",
    date: "2023-04-28",
    readTime: "8 min read",
    category: "CSS",
    tags: ["CSS", "Flexbox", "Web Design", "Layout"],
    views: 11200,
    featured: false,
  },
  {
    id: 8,
    title: "Advanced Git Techniques for Developers",
    excerpt:
      "Take your Git skills to the next level with advanced techniques like interactive rebasing, cherry-picking, and custom Git hooks.",
    content:
      "Git is an essential tool for modern software development, but many developers only scratch the surface of its capabilities. Beyond basic commands like commit, push, and pull, Git offers powerful features that can help you manage your codebase more effectively and recover from mistakes with ease...",
    image: "/placeholder.svg?height=200&width=400",
    author: "Michael Lee",
    authorAvatar: "/placeholder.svg",
    authorRole: "Senior Developer",
    date: "2023-06-10",
    readTime: "12 min read",
    category: "Development Tools",
    tags: ["Git", "Version Control", "Development", "Collaboration"],
    views: 6200,
    featured: false,
  },
  {
    id: 9,
    title: "Building RESTful APIs with Node.js and Express",
    excerpt:
      "Learn how to create robust, scalable RESTful APIs using Node.js and Express. This tutorial covers routing, middleware, error handling, and more.",
    content:
      "RESTful APIs are the backbone of modern web applications, enabling communication between the frontend and backend, as well as between different services. Node.js, with its non-blocking I/O and event-driven architecture, is an excellent choice for building high-performance APIs. When combined with Express, a minimal and flexible Node.js web application framework, you have a powerful toolkit for API development...",
    image: "/placeholder.svg?height=200&width=400",
    author: "Lisa Wang",
    authorAvatar: "/placeholder.svg",
    authorRole: "Backend Developer",
    date: "2023-05-15",
    readTime: "11 min read",
    category: "Node.js",
    tags: ["Node.js", "Express", "API", "Backend"],
    views: 8900,
    featured: false,
  },
]

// Get unique categories and tags
const categories = Array.from(new Set(blogData.map((post) => post.category)))
const allTags = blogData.flatMap((post) => post.tags)
const tags = Array.from(new Set(allTags))

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)
  const [sortBy, setSortBy] = useState("newest")

  // Filter blog posts based on search query and filters
  const filteredPosts = blogData.filter((post) => {
    // Search query filter
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    // Category filter
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(post.category)

    // Tags filter
    const matchesTags = selectedTags.length === 0 || post.tags.some((tag) => selectedTags.includes(tag))

    // Featured filter
    const matchesFeatured = !showFeaturedOnly || post.featured

    return matchesSearch && matchesCategory && matchesTags && matchesFeatured
  })

  // Sort blog posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case "popular":
        return b.views - a.views
      case "readtime-asc":
        return Number.parseInt(a.readTime) - Number.parseInt(b.readTime)
      case "readtime-desc":
        return Number.parseInt(b.readTime) - Number.parseInt(a.readTime)
      default:
        return 0
    }
  })

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
    setShowFeaturedOnly(false)
    setSearchQuery("")
  }

  // Featured posts
  const featuredPosts = blogData.filter((post) => post.featured).slice(0, 3)

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <p className="text-muted-foreground">Developer articles, tutorials, and opinions</p>
        </div>

        {/* Featured posts */}
        {featuredPosts.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Featured Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden flex flex-col">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      width={400}
                      height={200}
                      alt={post.title}
                      className="w-full object-cover h-48"
                    />
                    <Badge className="absolute top-2 right-2" variant="default">
                      Featured
                    </Badge>
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">
                      <Link href={`/blog/${post.id}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 pb-0 flex-grow">
                    <div className="flex flex-wrap gap-1 mt-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-4 flex justify-between items-center mt-auto border-t">
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarImage src={post.authorAvatar} alt={post.author} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        <Separator />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
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
                  <SheetTitle>Filter Articles</SheetTitle>
                  <SheetDescription>Narrow down articles based on your preferences</SheetDescription>
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
                        id="featured-only"
                        checked={showFeaturedOnly}
                        onCheckedChange={(checked) => setShowFeaturedOnly(checked === true)}
                      />
                      <label
                        htmlFor="featured-only"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Show Featured Articles Only
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
                <DropdownMenuItem onClick={() => setSortBy("readtime-asc")}>
                  Read Time (Shortest First)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("readtime-desc")}>
                  Read Time (Longest First)
                </DropdownMenuItem>
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
                  <SelectItem value="readtime-asc">Read Time (Shortest First)</SelectItem>
                  <SelectItem value="readtime-desc">Read Time (Longest First)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Filter pills */}
        {(selectedCategories.length > 0 || selectedTags.length > 0 || showFeaturedOnly) && (
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
            {showFeaturedOnly && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Featured Only
                <button
                  onClick={() => setShowFeaturedOnly(false)}
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
          Showing {sortedPosts.length} of {blogData.length} articles
        </div>

        {/* Blog posts grid */}
        {sortedPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {sortedPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    width={400}
                    height={200}
                    alt={post.title}
                    className="w-full object-cover h-48"
                  />
                  {post.featured && (
                    <Badge className="absolute top-2 right-2" variant="default">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">
                    <Link href={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-0 flex-grow">
                  <div className="flex flex-wrap gap-1 mt-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-4 flex justify-between items-center mt-auto border-t">
                  <div className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src={post.authorAvatar} alt={post.author} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{post.author}</span>
                  </div>
                  <Button size="sm" variant="ghost" asChild>
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <h3 className="text-lg font-medium">No articles found</h3>
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
