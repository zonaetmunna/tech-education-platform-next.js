import { NextResponse } from "next/server"
import { getVideos, getVideoById } from "@/lib/data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (id) {
    const video = getVideoById(Number(id))

    if (!video) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 })
    }

    return NextResponse.json(video)
  }

  const videos = getVideos()
  return NextResponse.json(videos)
}
