"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  BookmarkPlus,
  Calendar,
  ChevronRight,
  Clock,
  Facebook,
  Linkedin,
  MessageSquare,
  Share2,
  ThumbsUp,
  Twitter,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

// Sample blog data
const blogData = [
  {
    id: 1,
    title: "10 Essential VS Code Extensions for Web Developers",
    excerpt:
      "Boost your productivity with these must-have VS Code extensions for web development. From code formatting to debugging tools, these extensions will streamline your workflow.",
    content: `
      <h2>Introduction</h2>
      <p>Visual Studio Code has become the editor of choice for many web developers due to its flexibility, speed, and extensive ecosystem of extensions. In this article, we'll explore 10 essential VS Code extensions that can significantly improve your productivity and make your development workflow smoother.</p>
      
      <h2>1. Prettier - Code Formatter</h2>
      <p>Prettier is an opinionated code formatter that supports many languages including JavaScript, TypeScript, CSS, HTML, and more. It automatically formats your code according to a set of rules, ensuring consistency across your codebase.</p>
      <p>Key features:</p>
      <ul>
        <li>Format on save</li>
        <li>Customizable formatting rules</li>
        <li>Integration with ESLint</li>
      </ul>
      
      <h2>2. ESLint</h2>
      <p>ESLint is a static code analysis tool that helps you identify and fix problems in your JavaScript code. It can catch syntax errors, enforce coding standards, and highlight potential bugs before they cause issues.</p>
      
      <h2>3. Live Server</h2>
      <p>Live Server provides a development local server with live reload feature for static and dynamic pages. It's perfect for quickly testing HTML, CSS, and JavaScript changes without manually refreshing the browser.</p>
      
      <h2>4. GitLens</h2>
      <p>GitLens supercharges Git capabilities built into VS Code. It helps you visualize code authorship, seamlessly navigate through git repositories, and gain insights into code changes.</p>
      
      <h2>5. Auto Rename Tag</h2>
      <p>This simple extension automatically renames paired HTML/XML tags. When you rename one tag, the corresponding opening or closing tag is updated automatically.</p>
      
      <h2>6. CSS Peek</h2>
      <p>CSS Peek allows you to quickly view and edit CSS definitions by peeking into them directly from HTML files. It makes working with CSS much more efficient, especially in large projects.</p>
      
      <h2>7. JavaScript (ES6) Code Snippets</h2>
      <p>This extension provides snippets for JavaScript in ES6 syntax, allowing you to quickly insert common code patterns like import statements, arrow functions, and class definitions.</p>
      
      <h2>8. Path Intellisense</h2>
      <p>Path Intellisense autocompletes filenames as you type import statements or require calls, making it easier to reference files in your project without typing full paths.</p>
      
      <h2>9. Bracket Pair Colorizer</h2>
      <p>This extension colorizes matching brackets, making it easier to identify the scope and nesting level of code blocks, especially in complex structures.</p>
      
      <h2>10. REST Client</h2>
      <p>REST Client allows you to send HTTP requests and view responses directly within VS Code, making it perfect for testing APIs without switching to external tools.</p>
      
      <h2>Conclusion</h2>
      <p>These extensions can significantly enhance your development experience in VS Code. While you don't need to install all of them, choosing the ones that align with your workflow can save you time and reduce frustration. What are your favorite VS Code extensions? Let us know in the comments!</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    author: "John Doe",
    authorAvatar: "/placeholder.svg",
    authorRole: "Senior Developer",
    authorBio:
      "John is a senior web developer with over 10 years of experience. He specializes in frontend technologies and loves sharing his knowledge with the developer community.",
    date: "2023-05-15",
    readTime: "5 min read",
    category: "Development Tools",
    tags: ["VS Code", "Web Development", "Productivity", "Tools"],
    views: 12500,
    likes: 342,
    comments: [
      {
        id: 1,
        user: "Sarah Johnson",
        avatar: "/placeholder.svg",
        date: "2023-05-16",
        content:
          "Great article! I've been using most of these extensions, but I didn't know about CSS Peek. Will definitely try it out. Thanks for sharing!",
        likes: 15,
      },
      {
        id: 2,
        user: "Michael Chen",
        avatar: "/placeholder.svg",
        date: "2023-05-17",
        content:
          "I would also recommend the 'Error Lens' extension. It highlights errors and warnings inline in your code, making them much more visible.",
        likes: 8,
      },
      {
        id: 3,
        user: "Emily Rodriguez",
        avatar: "/placeholder.svg",
        date: "2023-05-18",
        content:
          "Bracket Pair Colorizer is actually now built into VS Code! You can enable it in settings with 'editor.bracketPairColorization.enabled'.",
        likes: 22,
      },
    ],
    relatedPosts: [2, 5, 8],
    featured: true,
  },
  {
    id: 2,
    title: "Understanding Async/Await in JavaScript",
    excerpt:
      "A comprehensive guide to working with asynchronous JavaScript using async/await syntax. Learn how to write cleaner, more maintainable asynchronous code.",
    content: "Asynchronous programming is a fundamental concept in JavaScript...",
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
    id: 5,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt:
      "Discover how TypeScript can enhance your JavaScript development experience with static typing, improved tooling, and better code organization.",
    content: "TypeScript has gained significant popularity in recent years...",
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
    id: 8,
    title: "Advanced Git Techniques for Developers",
    excerpt:
      "Take your Git skills to the next level with advanced techniques like interactive rebasing, cherry-picking, and custom Git hooks.",
    content: "Git is an essential tool for modern software development...",
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
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = blogData.find((p) => p.id === postId)
  const [commentText, setCommentText] = useState("")

  if (!post) {
    notFound()
  }

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? blogData.filter((p) => post.relatedPosts?.includes(p.id))
    : blogData
        .filter(
          (p) => p.id !== post.id && (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag))),
        )
        .slice(0, 3)

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the comment to your backend
    console.log("Submitting comment:", commentText)
    setCommentText("")
  }

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
              <Link href="/blog" className="hover:text-foreground">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{post.title}</span>
            </nav>

            {/* Post header */}
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline">{post.category}</Badge>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={post.authorAvatar} alt={post.author} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{post.author}</div>
                    <div className="text-sm text-muted-foreground">{post.authorRole}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured image */}
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>

            {/* Post content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Post actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-b py-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Like ({post.likes})
                </Button>
                <Button variant="outline" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Comment ({post.comments?.length || 0})
                </Button>
                <Button variant="outline" size="sm">
                  <BookmarkPlus className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Share:</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Copy link</span>
                </Button>
              </div>
            </div>

            {/* Author bio */}
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={post.authorAvatar} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">{post.author}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{post.authorRole}</p>
                  <p className="text-muted-foreground">{post.authorBio}</p>
                </div>
              </div>
            </div>

            {/* Comments section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Comments ({post.comments?.length || 0})</h2>
              <form onSubmit={handleCommentSubmit} className="space-y-4 mb-8">
                <Textarea
                  placeholder="Add a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <div className="flex justify-end">
                  <Button type="submit" disabled={!commentText.trim()}>
                    Post Comment
                  </Button>
                </div>
              </form>

              <div className="space-y-6">
                {post.comments?.map((comment) => (
                  <div key={comment.id} className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={comment.avatar} alt={comment.user} />
                        <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                          <h4 className="font-medium">{comment.user}</h4>
                          <span className="text-sm text-muted-foreground">
                            {new Date(comment.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{comment.content}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <ThumbsUp className="mr-1 h-4 w-4" />
                            <span>{comment.likes}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Post stats */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Article Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Views</span>
                  <span className="font-medium">{post.views.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Likes</span>
                  <span className="font-medium">{post.likes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Comments</span>
                  <span className="font-medium">{post.comments?.length || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Published</span>
                  <span className="font-medium">{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>

            {/* Related posts */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Related Articles</h3>
                <Button variant="link" size="sm" asChild>
                  <Link href="/blog">
                    View All
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                    <div className="group flex gap-3 items-start">
                      <div className="relative aspect-video w-24 overflow-hidden rounded-md">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{relatedPost.author}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <span>{relatedPost.readTime}</span>
                          <span>•</span>
                          <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
                <Badge variant="outline">{post.category}</Badge>
              </div>
            </div>

            {/* Newsletter signup */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Subscribe to our Newsletter</CardTitle>
                <CardDescription>Get the latest articles delivered to your inbox</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
