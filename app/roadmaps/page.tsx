"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, Map, Search, SlidersHorizontal } from "lucide-react"

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
import { Progress } from "@/components/ui/progress"
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

// Sample roadmap data
const roadmapsData = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Master HTML, CSS, JavaScript, and modern frontend frameworks",
    image: "/placeholder.svg?height=200&width=400",
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
    id: 3,
    title: "Data Scientist",
    description: "Explore statistics, machine learning, and data visualization",
    image: "/placeholder.svg?height=200&width=400",
    category: "Data Science",
    difficulty: "Intermediate to Advanced",
    duration: "10 months",
    steps: [
      "Python for Data Science",
      "Statistical Analysis",
      "Machine Learning",
      "Deep Learning",
      "Data Visualization",
    ],
    tags: ["Python", "Statistics", "Machine Learning", "Data Visualization"],
    students: 850,
    completionRate: 52,
    updatedAt: "2023-03-10",
    premium: true,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    description: "Master the tools and practices for continuous integration and deployment",
    image: "/placeholder.svg?height=200&width=400",
    category: "DevOps",
    difficulty: "Intermediate to Advanced",
    duration: "9 months",
    steps: [
      "Linux Fundamentals",
      "Containerization with Docker",
      "Orchestration with Kubernetes",
      "CI/CD Pipelines",
      "Infrastructure as Code",
    ],
    tags: ["Linux", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    students: 620,
    completionRate: 48,
    updatedAt: "2023-06-05",
    premium: true,
  },
  {
    id: 5,
    title: "Mobile App Developer",
    description: "Build cross-platform mobile applications for iOS and Android",
    image: "/placeholder.svg?height=200&width=400",
    category: "Mobile Development",
    difficulty: "Intermediate",
    duration: "7 months",
    steps: [
      "JavaScript/TypeScript Fundamentals",
      "React Native Basics",
      "State Management",
      "Native Device Features",
      "App Store Deployment",
    ],
    tags: ["React Native", "JavaScript", "TypeScript", "Mobile", "Cross-platform"],
    students: 780,
    completionRate: 61,
    updatedAt: "2023-02-18",
    premium: false,
  },
  {
    id: 6,
    title: "Blockchain Developer",
    description: "Learn blockchain fundamentals and smart contract development",
    image: "/placeholder.svg?height=200&width=400",
    category: "Blockchain",
    difficulty: "Advanced",
    duration: "12 months",
    steps: [
      "Blockchain Fundamentals",
      "Ethereum & Smart Contracts",
      "Solidity Programming",
      "Web3 Development",
      "DApp Architecture",
    ],
    tags: ["Blockchain", "Ethereum", "Solidity", "Web3", "Smart Contracts"],
    students: 420,
    completionRate: 45,
    updatedAt: "2023-05-12",
    premium: true,
  },
  {
    id: 7,
    title: "UI/UX Designer",
    description: "Master the principles of user interface and experience design",
    image: "/placeholder.svg?height=200&width=400",
    category: "Design",
    difficulty: "Beginner to Intermediate",
    duration: "6 months",
    steps: [
      "Design Fundamentals",
      "User Research",
      "Wireframing & Prototyping",
      "UI Design with Figma",
      "Design Systems",
    ],
    tags: ["UI", "UX", "Figma", "Design", "Prototyping"],
    students: 950,
    completionRate: 72,
    updatedAt: "2023-04-28",
    premium: false,
  },
  {
    id: 8,
    title: "Cloud Architect",
    description: "Design and implement scalable, secure cloud infrastructure",
    image: "/placeholder.svg?height=200&width=400",
    category: "Cloud Computing",
    difficulty: "Advanced",
    duration: "11 months",
    steps: [
      "Cloud Fundamentals",
      "AWS/Azure/GCP Services",
      "Cloud Security",
      "Serverless Architecture",
      "Multi-cloud Strategies",
    ],
    tags: ["AWS", "Azure", "GCP", "Cloud", "Serverless"],
    students: 580,
    completionRate: 49,
    updatedAt: "2023-06-10",
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

// Get unique categories, difficulties, and tags
const categories = Array.from(new Set(roadmapsData.map((roadmap) => roadmap.category)))
const difficulties = Array.from(new Set(roadmapsData.map((roadmap) => roadmap.difficulty)))
const allTags = roadmapsData.flatMap((roadmap) => roadmap.tags)
const tags = Array.from(new Set(allTags))

export default function RoadmapsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)
  const [sortBy, setSortBy] = useState("popular")

  // Filter roadmaps based on search query and filters
  const filteredRoadmaps = roadmapsData.filter((roadmap) => {
    // Search query filter
    const matchesSearch =
      searchQuery === "" ||
      roadmap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      roadmap.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      roadmap.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    // Category filter
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(roadmap.category)

    // Difficulty filter
    const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(roadmap.difficulty)

    // Tags filter
    const matchesTags = selectedTags.length === 0 || roadmap.tags.some((tag) => selectedTags.includes(tag))

    // Premium filter
    const matchesPremium = !showPremiumOnly || roadmap.premium

    return matchesSearch && matchesCategory && matchesDifficulty && matchesTags && matchesPremium
  })

  // Sort roadmaps
  const sortedRoadmaps = [...filteredRoadmaps].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      case "oldest":
        return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
      case "popular":
        return b.students - a.students
      case "completion-high":
        return b.completionRate - a.completionRate
      case "completion-low":
        return a.completionRate - b.completionRate
      case "duration-short":
        return Number.parseInt(a.duration) - Number.parseInt(b.duration)
      case "duration-long":
        return Number.parseInt(b.duration) - Number.parseInt(a.duration)
      default:
        return 0
    }
  })

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulties((prev) =>
      prev.includes(difficulty) ? prev.filter((d) => d !== difficulty) : [...prev, difficulty],
    )
  }

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedDifficulties([])
    setSelectedTags([])
    setShowPremiumOnly(false)
    setSearchQuery("")
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Learning Roadmaps</h1>
          <p className="text-muted-foreground">Follow structured learning paths to master tech skills</p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search roadmaps..."
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
                  <SheetTitle>Filter Roadmaps</SheetTitle>
                  <SheetDescription>Narrow down roadmaps based on your preferences</SheetDescription>
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
                    <h3 className="text-sm font-medium">Difficulty</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {difficulties.map((difficulty) => (
                        <div key={difficulty} className="flex items-center space-x-2">
                          <Checkbox
                            id={`difficulty-${difficulty}`}
                            checked={selectedDifficulties.includes(difficulty)}
                            onCheckedChange={() => handleDifficultyChange(difficulty)}
                          />
                          <label
                            htmlFor={`difficulty-${difficulty}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {difficulty}
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
                        Show Premium Roadmaps Only
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
                <DropdownMenuItem onClick={() => setSortBy("popular")}>Most Popular</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("newest")}>Newest</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("oldest")}>Oldest</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("completion-high")}>
                  Completion Rate (Highest First)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("completion-low")}>
                  Completion Rate (Lowest First)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("duration-short")}>
                  Duration (Shortest First)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("duration-long")}>Duration (Longest First)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] h-9 hidden md:flex">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort by</SelectLabel>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="completion-high">Completion Rate (Highest First)</SelectItem>
                  <SelectItem value="completion-low">Completion Rate (Lowest First)</SelectItem>
                  <SelectItem value="duration-short">Duration (Shortest First)</SelectItem>
                  <SelectItem value="duration-long">Duration (Longest First)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Filter pills */}
        {(selectedCategories.length > 0 ||
          selectedDifficulties.length > 0 ||
          selectedTags.length > 0 ||
          showPremiumOnly) && (
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
            {selectedDifficulties.map((difficulty) => (
              <Badge key={difficulty} variant="secondary" className="flex items-center gap-1">
                {difficulty}
                <button
                  onClick={() => handleDifficultyChange(difficulty)}
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
          Showing {sortedRoadmaps.length} of {roadmapsData.length} roadmaps
        </div>

        {/* Roadmaps grid */}
        {sortedRoadmaps.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {sortedRoadmaps.map((roadmap) => (
              <Card key={roadmap.id} className="overflow-hidden flex flex-col">
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
                    <div className="text-sm text-muted-foreground">{roadmap.duration}</div>
                  </div>
                  <CardTitle className="text-xl">
                    <Link href={`/roadmaps/${roadmap.id}`} className="hover:underline">
                      {roadmap.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">{roadmap.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-0 flex-grow">
                  <div className="flex flex-wrap gap-1 mt-2">
                    {roadmap.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completion Rate</span>
                      <span>{roadmap.completionRate}%</span>
                    </div>
                    <Progress value={roadmap.completionRate} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-4 flex justify-between items-center mt-auto border-t">
                  <div className="text-sm text-muted-foreground">
                    {roadmap.students.toLocaleString()} students enrolled
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/roadmaps/${roadmap.id}`}>View Roadmap</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Map className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No roadmaps found</h3>
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
