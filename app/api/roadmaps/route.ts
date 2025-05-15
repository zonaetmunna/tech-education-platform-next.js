import { NextResponse } from "next/server"
import { getRoadmaps, getRoadmapById } from "@/lib/data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (id) {
    const roadmap = getRoadmapById(Number(id))

    if (!roadmap) {
      return NextResponse.json({ error: "Roadmap not found" }, { status: 404 })
    }

    return NextResponse.json(roadmap)
  }

  const roadmaps = getRoadmaps()
  return NextResponse.json(roadmaps)
}
