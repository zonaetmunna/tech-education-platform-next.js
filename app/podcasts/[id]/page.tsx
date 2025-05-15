"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  Calendar,
  ChevronRight,
  Clock,
  Download,
  Heart,
  Mic,
  Pause,
  Play,
  Share2,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample podcast data
const podcastsData = [
  {
    id: 1,
    title: "Tech Talk: The Future of AI",
    description:
      "Exploring the latest advancements in artificial intelligence and their impact on society. In this episode, we discuss the ethical implications of AI, recent breakthroughs in machine learning, and how businesses are leveraging AI to transform their operations.",
    image: "/placeholder.svg?height=400&width=400",
    audioUrl: "https://example.com/podcasts/tech-talk-ai",
    duration: "1:15:30",
    hosts: ["Jane Smith", "John Doe"],
    hostAvatars: ["/placeholder.svg", "/placeholder.svg"],
    hostBios: [
      "Jane is a senior AI researcher with over 10 years of experience in the field. She has published numerous papers on machine learning and neural networks.",
      "John is a tech journalist and author who specializes in covering emerging technologies and their societal impact.",
    ],
    premium: true,
    category: "Technology",
    tags: ["AI", "Machine Learning", "Future Tech"],
    listens: 12500,
    publishedAt: "2023-05-15",
    episodes: 45,
    currentEpisode: {
      number: 45,
      title: "The Ethics of Artificial General Intelligence",
      description:
        "In this episode, we explore the ethical considerations surrounding the development of artificial general intelligence (AGI) and the potential implications for humanity.",
      publishedAt: "2023-05-15",
      duration: "1:15:30",
      guests: ["Dr. Sarah Johnson - AI Ethics Researcher", "Prof. Michael Chen - Computer Science Department"],
    },
    recentEpisodes: [
      {
        id: 101,
        number: 44,
        title: "Machine Learning in Healthcare",
        description: "How AI is transforming medical diagnosis and treatment planning.",
        publishedAt: "2023-05-01",
        duration: "1:05:20",
      },
      {
        id: 102,
        number: 43,
        title: "The Rise of Computer Vision",
        description: "Recent advancements in computer vision technology and real-world applications.",
        publishedAt: "2023-04-15",
        duration: "58:45",
      },
      {
        id: 103,
        number: 42,
        title: "Natural Language Processing Breakthroughs",
        description: "Exploring the latest developments in NLP and conversational AI.",
        publishedAt: "2023-04-01",
        duration: "1:10:15",
      },
    ],
    transcript:
      "Host (Jane): Welcome to Tech Talk! I'm Jane Smith.\n\nHost (John): And I'm John Doe. Today, we're diving deep into the future of artificial intelligence and its ethical implications.\n\nHost (Jane): We're joined by Dr. Sarah Johnson, an AI ethics researcher, and Professor Michael Chen from the Computer Science Department at Tech University.\n\nHost (John): Dr. Johnson, let's start with you. What are some of the biggest ethical concerns surrounding the development of artificial general intelligence?\n\nGuest (Dr. Johnson): Thank you for having me. One of the primary concerns is the potential for AGI to make decisions that align with its programmed objectives but might have unintended consequences for humanity...",
    showNotes:
      '# Show Notes\n\n## Topics Discussed\n- The difference between narrow AI and artificial general intelligence\n- Current timeline predictions for AGI development\n- Ethical frameworks for AI development\n- The role of regulation in AI research\n\n## Resources Mentioned\n- "Life 3.0" by Max Tegmark\n- The Partnership on AI initiative\n- IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems\n\n## Guest Information\n- Dr. Sarah Johnson - [Website](https://example.com/sarah-johnson)\n- Prof. Michael Chen - [Research Page](https://example.com/michael-chen)',
    relatedPodcasts: [2, 5, 9],
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

export default function PodcastDetailPage({ params }: { params: { id: string } }) {
  const podcastId = Number.parseInt(params.id)
  const podcast = podcastsData.find((p) => p.id === podcastId)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(80)

  if (!podcast) {
    notFound()
  }

  // Get related podcasts
  const relatedPodcasts = podcast.relatedPodcasts
    ? podcastsData.filter((p) => podcast.relatedPodcasts?.includes(p.id))
    : podcastsData
        .filter(
          (p) =>
            p.id !== podcast.id &&
            (p.category === podcast.category || p.tags.some((tag) => podcast.tags.includes(tag))),
        )
        .slice(0, 3)

  // Format time from seconds to MM:SS
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  // Calculate total duration in seconds
  const totalDuration = (() => {
    const [hours, minutes, seconds] = (podcast.duration || "0:0:0").split(":").map(Number)
    return (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0)
  })()

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
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
              <Link href="/podcasts" className="hover:text-foreground">
                Podcasts
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{podcast.title}</span>
            </nav>

            {/* Podcast header */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-lg overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  src={podcast.image || "/placeholder.svg"}
                  alt={podcast.title}
                  fill
                  className="object-cover"
                  priority
                />
                {podcast.premium && (
                  <Badge className="absolute top-2 right-2" variant="default">
                    Premium
                  </Badge>
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="outline">{podcast.category}</Badge>
                  {podcast.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{podcast.title}</h1>
                <p className="text-muted-foreground mt-2">{podcast.description}</p>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {podcast.hostAvatars.map((avatar, i) => (
                        <Avatar key={i} className="h-8 w-8 border-2 border-background">
                          <AvatarImage src={avatar} alt={podcast.hosts[i]} />
                          <AvatarFallback>{podcast.hosts[i].charAt(0)}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span>{podcast.hosts.length > 1 ? podcast.hosts.join(" & ") : podcast.hosts[0]}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Mic className="h-4 w-4" />
                    <span>{podcast.episodes} episodes</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Since {new Date(podcast.publishedAt).getFullYear()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current episode */}
            {podcast.currentEpisode && (
              <div className="mt-4">
                <h2 className="text-2xl font-bold mb-4">Current Episode</h2>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge variant="outline">Episode {podcast.currentEpisode.number}</Badge>
                      <div className="text-sm text-muted-foreground">
                        {new Date(podcast.currentEpisode.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl mt-2">{podcast.currentEpisode.title}</CardTitle>
                    <CardDescription className="mt-1">{podcast.currentEpisode.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {podcast.currentEpisode.guests && (
                      <div className="mb-4">
                        <h3 className="text-sm font-medium mb-2">Featuring</h3>
                        <ul className="space-y-1">
                          {podcast.currentEpisode.guests.map((guest, i) => (
                            <li key={i} className="text-sm text-muted-foreground">
                              {guest}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{podcast.currentEpisode.duration}</span>
                      </div>
                      <Button>
                        <Play className="mr-2 h-4 w-4" />
                        Play Episode
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Audio player */}
            <div className="mt-4">
              <Card className="overflow-hidden">
                <div className="bg-muted p-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                          src={podcast.image || "/placeholder.svg"}
                          alt={podcast.title}
                          width={48}
                          height={48}
                          className="rounded"
                        />
                        <div>
                          <div className="font-medium line-clamp-1">
                            {podcast.currentEpisode?.title || podcast.title}
                          </div>
                          <div className="text-xs text-muted-foreground">{podcast.hosts.join(" & ")}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Heart className="h-4 w-4" />
                          <span className="sr-only">Add to favorites</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Share2 className="h-4 w-4" />
                          <span className="sr-only">Share</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="relative">
                        <Progress value={(currentTime / totalDuration) * 100} className="h-1" />
                        <div className="absolute left-0 right-0 -top-2 bottom-0 cursor-pointer" />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{formatTime(currentTime)}</span>
                        <span>{podcast.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Volume2 className="h-4 w-4" />
                          <span className="sr-only">Volume</span>
                        </Button>
                        <Progress value={volume} className="h-1 w-24" onValueChange={(value) => setVolume(value)} />
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <SkipBack className="h-5 w-5" />
                          <span className="sr-only">Previous</span>
                        </Button>
                        <Button
                          variant="default"
                          size="icon"
                          className="rounded-full h-10 w-10"
                          onClick={togglePlayPause}
                        >
                          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                          <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <SkipForward className="h-5 w-5" />
                          <span className="sr-only">Next</span>
                        </Button>
                      </div>
                      <div className="w-[88px]" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Podcast tabs */}
            <Tabs defaultValue="episodes" className="mt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="episodes">Episodes</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="transcript">Transcript</TabsTrigger>
              </TabsList>

              {/* Episodes tab */}
              <TabsContent value="episodes" className="pt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Recent Episodes</h2>
                  <div className="space-y-4">
                    {podcast.recentEpisodes?.map((episode) => (
                      <Card key={episode.id}>
                        <CardHeader className="p-4">
                          <div className="flex justify-between">
                            <Badge variant="outline">Episode {episode.number}</Badge>
                            <div className="text-sm text-muted-foreground">
                              {new Date(episode.publishedAt).toLocaleDateString()}
                            </div>
                          </div>
                          <CardTitle className="text-lg mt-2">{episode.title}</CardTitle>
                          <CardDescription className="mt-1">{episode.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{episode.duration}</span>
                            </div>
                            <Button size="sm">
                              <Play className="mr-2 h-3 w-3" />
                              Play
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button variant="outline">View All Episodes</Button>
                  </div>
                </div>
              </TabsContent>

              {/* About tab */}
              <TabsContent value="about" className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About This Podcast</h2>
                    <p className="text-muted-foreground">{podcast.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Hosts</h3>
                    <div className="space-y-6">
                      {podcast.hosts.map((host, i) => (
                        <div key={i} className="flex flex-col sm:flex-row gap-6 items-start">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={podcast.hostAvatars[i]} alt={host} />
                            <AvatarFallback>{host.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-2">
                            <div>
                              <h4 className="text-lg font-bold">{host}</h4>
                              <p className="text-muted-foreground">Host & Producer</p>
                            </div>
                            <p className="text-muted-foreground">{podcast.hostBios?.[i] || "No bio available."}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {podcast.showNotes && (
                    <div>
                      <h3 className="text-xl font-bold mb-4">Show Notes</h3>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-muted-foreground whitespace-pre-line">{podcast.showNotes}</p>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Transcript tab */}
              <TabsContent value="transcript" className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Episode Transcript</h2>
                    {podcast.transcript ? (
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-muted-foreground whitespace-pre-line">{podcast.transcript}</p>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">Transcript not available for this episode.</p>
                      </div>
                    )}
                    {podcast.transcript && (
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download Transcript
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Subscribe options */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Subscribe</CardTitle>
                <CardDescription>Listen on your favorite platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      width={20}
                      height={20}
                      alt="Spotify"
                      className="mr-2"
                    />
                    Spotify
                  </Link>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      width={20}
                      height={20}
                      alt="Apple Podcasts"
                      className="mr-2"
                    />
                    Apple Podcasts
                  </Link>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      width={20}
                      height={20}
                      alt="Google Podcasts"
                      className="mr-2"
                    />
                    Google Podcasts
                  </Link>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      width={20}
                      height={20}
                      alt="RSS Feed"
                      className="mr-2"
                    />
                    RSS Feed
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Related podcasts */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Similar Podcasts</h3>
                <Button variant="link" size="sm" asChild>
                  <Link href="/podcasts">
                    View All
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-4">
                {relatedPodcasts.map((relatedPodcast) => (
                  <Link key={relatedPodcast.id} href={`/podcasts/${relatedPodcast.id}`}>
                    <div className="group flex gap-3 items-start">
                      <div className="relative w-16 h-16 overflow-hidden rounded-md">
                        <Image
                          src={relatedPodcast.image || "/placeholder.svg"}
                          alt={relatedPodcast.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPodcast.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{relatedPodcast.hosts.join(" & ")}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <span>{relatedPodcast.episodes} episodes</span>
                          <span>•</span>
                          <span>{relatedPodcast.duration}</span>
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
                {podcast.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
                <Badge variant="outline">{podcast.category}</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
