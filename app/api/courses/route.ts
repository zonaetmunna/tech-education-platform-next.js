import { NextResponse } from "next/server"
import { getCourses, getCourseById } from "@/lib/data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (id) {
    const courseId = Number.parseInt(id)
    const course = getCourseById(courseId)

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 })
    }

    return NextResponse.json(course)
  }

  const courses = getCourses()
  return NextResponse.json(courses)
}
