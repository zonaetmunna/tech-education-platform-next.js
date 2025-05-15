import { NextResponse } from "next/server"
import { getPodcasts, getPodcastById } from "@/lib/data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (id) {
    const podcast = getPodcastById(Number(id))

    if (!podcast) {
      return NextResponse.json({ error: "Podcast not found" }, { status: 404 })
    }

    return NextResponse.json(podcast)
  }

  const podcasts = getPodcasts()
  return NextResponse.json(podcasts)
}
