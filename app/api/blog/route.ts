import { NextResponse } from "next/server"
import { getBlogPosts, getBlogPostById } from "@/lib/data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (id) {
    const post = getBlogPostById(Number(id))

    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    return NextResponse.json(post)
  }

  const posts = getBlogPosts()
  return NextResponse.json(posts)
}
