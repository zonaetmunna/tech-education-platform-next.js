"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Award, BookOpen, Clock, Filter, Search, SlidersHorizontal } from "lucide-react"

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
import { getCourses } from "@/lib/data"

// Get courses from the data file
const coursesData = getCourses()

// Get unique categories, levels, and tags
const categories = Array.from(new Set(coursesData.map((course) => course.category)))
const levels = Array.from(new Set(coursesData.map((course) => course.level)))
const allTags = coursesData.flatMap((course) => course.tags)
const tags = Array.from(new Set(allTags))

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)
  const [sortBy, setSortBy] = useState("newest")

  // Filter courses based on search query and filters
  const filteredCourses = coursesData.filter((course) => {
    // Search query filter
    const matchesSearch =
      searchQuery === "" ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    // Category filter
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category)

    // Level filter
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level)

    // Tags filter
    const matchesTags = selectedTags.length === 0 || course.tags.some((tag) => selectedTags.includes(tag))

    // Premium filter
    const matchesPremium = !showPremiumOnly || course.premium

    return matchesSearch && matchesCategory && matchesLevel && matchesTags && matchesPremium
  })

  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      case "oldest":
        return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
      case "popular":
        return b.students - a.students
      case "rating":
        return b.rating - a.rating
      case "duration-asc":
        return a.hours - b.hours
      case "duration-desc":
        return b.hours - a.hours
      default:
        return 0
    }
  })

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleLevelChange = (level: string) => {
    setSelectedLevels((prev) => (prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]))
  }

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedLevels([])
    setSelectedTags([])
    setShowPremiumOnly(false)
    setSearchQuery("")
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">Browse our collection of courses to enhance your tech skills</p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses..."
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
                  <SheetTitle>Filter Courses</SheetTitle>
                  <SheetDescription>Narrow down courses based on your preferences</SheetDescription>
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
                    <h3 className="text-sm font-medium">Level</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {levels.map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox
                            id={`level-${level}`}
                            checked={selectedLevels.includes(level)}
                            onCheckedChange={() => handleLevelChange(level)}
                          />
                          <label
                            htmlFor={`level-${level}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {level}
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
                        Show Premium Courses Only
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
                <DropdownMenuItem onClick={() => setSortBy("rating")}>Highest Rated</DropdownMenuItem>
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
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="duration-asc">Duration (Shortest First)</SelectItem>
                  <SelectItem value="duration-desc">Duration (Longest First)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Filter pills */}
        {(selectedCategories.length > 0 || selectedLevels.length > 0 || selectedTags.length > 0 || showPremiumOnly) && (
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
            {selectedLevels.map((level) => (
              <Badge key={level} variant="secondary" className="flex items-center gap-1">
                {level}
                <button
                  onClick={() => handleLevelChange(level)}
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
          Showing {sortedCourses.length} of {coursesData.length} courses
        </div>

        {/* Courses grid */}
        {sortedCourses.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {sortedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden flex flex-col">
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
                  <CardTitle className="text-xl">
                    <Link href={`/courses/${course.id}`} className="hover:underline">
                      {course.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-0 flex-grow">
                  <div className="flex flex-wrap gap-1 mt-2">
                    {course.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-4 flex justify-between items-center mt-auto border-t">
                  <div className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src={course.instructorAvatar} alt={course.instructor} />
                      <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{course.instructor}</span>
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/courses/${course.id}`}>View Course</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No courses found</h3>
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
