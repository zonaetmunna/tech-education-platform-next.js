import { AuthCheck } from "@/components/auth-check"
import PodcastDetailContent from "@/components/podcast-detail-content"
import { getPodcastById } from "@/lib/data"
import { notFound } from "next/navigation"

export default function PodcastDetailPage({ params }: { params: { id: string } }) {
  const podcastId = Number.parseInt(params.id)
  const podcast = getPodcastById(podcastId)

  if (!podcast) {
    notFound()
  }

  // Check if this is a premium podcast
  const isPremium = podcast.premium === true

  return (
    <>
      {isPremium ? (
        <AuthCheck requirePremium>
          <PodcastDetailContent podcast={podcast} />
        </AuthCheck>
      ) : (
        <PodcastDetailContent podcast={podcast} />
      )}
    </>
  )
}
