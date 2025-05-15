"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Clock, Filter, Mic, Search, SlidersHorizontal } from "lucide-react"

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

// Sample podcast data
const podcastsData = [
  {
    id: 1,
    title: "Tech Talk: The Future of AI",
    description: "Exploring the latest advancements in artificial intelligence and their impact on society.",
    image: "/placeholder.svg?height=200&width=200",
    duration: "1:15:30",
    hosts: ["Jane Smith", "John Doe"],
    hostAvatars: ["/placeholder.svg", "/placeholder.svg"],
    premium: true,
    category: "Technology",
    tags: ["AI", "Machine Learning", "Future Tech"],
    listens: 12500,
    publishedAt: "2023-05-15",
    episodes: 45,
  },
  {
    id: 2,
    title: "Developer Diaries",
    description: "Weekly discussions about software development, career growth, and industry trends.",
    image: "/placeholder.svg?height=200&width=200",
    duration: "58:20",
    hosts: ["Mike Johnson", "Sarah Williams"],
    hostAvatars: ["/placeholder.svg", "/placeholder.svg"],
    premium: false,
    category: "Software Development",
    tags: ["Career", "Programming", "Industry"],
    listens: 8700,
    publishedAt: "2023-04-20",
    episodes: 78,
  },
  {
    id: 3,
    title: "Design Matters",
    description: "Conversations with leading designers about UX/UI, product design, and creative processes.",
    image: "/placeholder.svg?height=200&width=200",
    duration: "45:15",
    hosts: ["Emily Parker"],
    hostAvatars: ["/placeholder.svg"],
    premium: false,
    category: "Design",
    tags: ["UX/UI", "Product Design", "Creativity"],
    listens: 6300,
    publishedAt: "2023-03-10",
    episodes: 32,
  },
  {
    id: 4,
    title: "Startup Stories",
    description: "Interviews with founders and entrepreneurs about their journey building successful companies.",
    image: "/placeholder.svg?height=200&width=200",
    duration: "1:05:45",
    hosts: ["David Chen", "Lisa Wang"],
    hostAvatars: ["/placeholder.svg", "/placeholder.svg"],
    premium: true,
    category: "Business",
    tags: ["Startups", "Entrepreneurship", "Venture Capital"],
    listens: 9200,
    publishedAt: "2023-06-05",
    episodes: 56,
  },
  {
    id: 5,
    title: "Data Science Decoded",
    description: "Breaking down complex data science concepts and exploring real-world applications.",
    image: "/placeholder.svg?height=200&width=200",
    duration: "52:10",
    hosts: ["Alex Johnson"],
    hostAvatars: ["/placeholder.svg"],
    premium: true,
    category: "Data Science",
    tags: ["Data", "Analytics", "Machine Learning"],
    listens: 7500,
    publishedAt: "2023-02-18",
    episodes: 28,
  },
  {
    id: 6,
    title: "Web Dev Weekly",
    description: "Updates on the latest web development technologies, frameworks, and best practices.",
    image: "/placeholder.svg?height=200&width=200",
    duration: "42:30",
    hosts: ["Michael Lee", "Emma Wilson"],
    hostAvatars: ["/placeholder.svg", "/placeholder.svg"],
    premium: false,
    category: "Web Development",
    tags: ["JavaScript", "Frameworks", "Web Technologies"],
    listens: 5800,
    publishedAt: "2023-05-12",
    episodes: 64,
  },
  {
    id: 7,
    title: "Cybersecurity Now",
    description: "Discussions about the latest cybersecurity threats, vulnerabilities, and defense strategies.",
    image: "/placeholder.svg?height=200&width=200",
    duration: "1:10:15",
    hosts: ["Robert Taylor"],
    hostAvatars: ["/placeholder.svg"],
    premium: false,
    category: "Cybersecurity",
    tags: ["Security", "Hacking", "Privacy"],
    listens: 11200,
    publishedAt: "2023-04-28",
    episodes: 42,
  },
  {
    id: 8,
    title: "Product Management Insights",
    description: "Strategies and insights for building and managing successful tech products.",
    image: "/placeholder.svg?height=200&width=200",
    duration: "55:20",
    hosts: ["Jennifer Adams", "Chris Martin"],
    hostAvatars: ["/placeholder.svg", "/placeholder.svg"],
    premium: true,

    category: "Product Management",
    tags: ["Product", "Management", "Strategy"],
    listens: 6200,
    publishedAt: "2023-06-10",
    episodes: 37,
  },
  {
    id: 9,
    title: "Cloud Computing Chronicles",
    description: "Exploring cloud technologies, architectures, and best practices for modern applications.",
    image: "/placeholder.svg?height=200&width=200",
    duration: "48:45",
    hosts: ["Thomas Brown"],
    hostAvatars: ["/placeholder.svg"],
    premium: false,
    category: "Cloud Computing",
    tags: ["AWS", "Azure", "Cloud Architecture"],
    listens: 8900,
    publishedAt: "2023-05-15",
    episodes: 51,
  },
]

// Get unique categories and tags
const categories = Array.from(new Set(podcastsData.map((podcast) => podcast.category)))
const allTags = podcastsData.flatMap((podcast) => podcast.tags)
const tags = Array.from(new Set(allTags))

export default function PodcastsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)
  const [sortBy, setSortBy] = useState("newest")

  // Filter podcasts based on search query and filters
  const filteredPodcasts = podcastsData.filter((podcast) => {
    // Search query filter
    const matchesSearch =
      searchQuery === "" ||
      podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      podcast.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      podcast.hosts.some((host) => host.toLowerCase().includes(searchQuery.toLowerCase())) ||
      podcast.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    // Category filter
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(podcast.category)

    // Tags filter
    const matchesTags = selectedTags.length === 0 || podcast.tags.some((tag) => selectedTags.includes(tag))

    // Premium filter
    const matchesPremium = !showPremiumOnly || podcast.premium

    return matchesSearch && matchesCategory && matchesTags && matchesPremium
  })

  // Sort podcasts
  const sortedPodcasts = [...filteredPodcasts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      case "oldest":
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      case "popular":
        return b.listens - a.listens
      case "episodes-asc":
        return a.episodes - b.episodes
      case "episodes-desc":
        return b.episodes - a.episodes
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
    const parts = duration.split(":").map(Number)
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2]
    } else if (parts.length === 2) {
      return parts[0] * 60 + parts[1]
    }
    return 0
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
          <h1 className="text-3xl font-bold tracking-tight">Podcasts</h1>
          <p className="text-muted-foreground">Listen to industry experts discuss the latest trends and technologies</p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search podcasts..."
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
                  <SheetTitle>Filter Podcasts</SheetTitle>
                  <SheetDescription>Narrow down podcasts based on your preferences</SheetDescription>
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
                        Show Premium Podcasts Only
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
                <DropdownMenuItem onClick={() => setSortBy("episodes-desc")}>Most Episodes</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("episodes-asc")}>Fewest Episodes</DropdownMenuItem>
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
                  <SelectItem value="episodes-desc">Most Episodes</SelectItem>
                  <SelectItem value="episodes-asc">Fewest Episodes</SelectItem>
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
          Showing {sortedPodcasts.length} of {podcastsData.length} podcasts
        </div>

        {/* Podcasts grid */}
        {sortedPodcasts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {sortedPodcasts.map((podcast) => (
              <Card key={podcast.id} className="overflow-hidden flex flex-col">
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
                  <CardTitle className="text-xl">
                    <Link href={`/podcasts/${podcast.id}`} className="hover:underline">
                      {podcast.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">{podcast.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-0 flex-grow">
                  <div className="flex flex-wrap gap-1 mt-2">
                    {podcast.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Mic className="mr-1 h-4 w-4" />
                      <span>{podcast.episodes} episodes</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{podcast.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-4 flex justify-between items-center mt-auto border-t">
                  <div className="flex -space-x-2">
                    {podcast.hostAvatars.map((avatar, i) => (
                      <Avatar key={i} className="h-6 w-6 border-2 border-background">
                        <AvatarImage src={avatar} alt={podcast.hosts[i]} />
                        <AvatarFallback>{podcast.hosts[i].charAt(0)}</AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="ml-2 text-sm">
                      {podcast.hosts.length > 1
                        ? `${podcast.hosts[0]} & ${podcast.hosts.length - 1} more`
                        : podcast.hosts[0]}
                    </div>
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/podcasts/${podcast.id}`}>Listen</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Mic className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No podcasts found</h3>
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
