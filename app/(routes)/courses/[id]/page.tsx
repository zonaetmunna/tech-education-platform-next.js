import { AuthCheck } from "@/components/auth-check"
import CourseDetailContent from "@/components/course-detail-content"
import { getCourseById } from "@/lib/data"
import { notFound } from "next/navigation"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const courseId = Number.parseInt(params.id)
  const course = getCourseById(courseId)

  if (!course) {
    notFound()
  }

  // Check if this is a premium course
  const isPremium = course.premium === true

  return (
    <>
      {isPremium ? (
        <AuthCheck requirePremium>
          <CourseDetailContent course={course} />
        </AuthCheck>
      ) : (
        <CourseDetailContent course={course} />
      )}
    </>
  )
}
