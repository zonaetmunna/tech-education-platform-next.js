import { AuthCheck } from "@/components/auth-check"
import VideoDetailContent from "@/components/video-detail-content"
import { getVideoById } from "@/lib/data"
import { notFound } from "next/navigation"

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  const videoId = Number.parseInt(params.id)
  const video = getVideoById(videoId)

  if (!video) {
    notFound()
  }

  // Check if this is a premium video
  const isPremium = video.premium === true

  return (
    <>
      {isPremium ? (
        <AuthCheck requirePremium>
          <VideoDetailContent video={video} />
        </AuthCheck>
      ) : (
        <VideoDetailContent video={video} />
      )}
    </>
  )
}
