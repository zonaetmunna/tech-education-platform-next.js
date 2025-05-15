import { NextResponse } from "next/server"
import { getPlatformStats, getEngagementStats, getRevenueStats, getContentStats, getGrowthStats } from "@/lib/data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")

  switch (type) {
    case "platform":
      return NextResponse.json(getPlatformStats())
    case "engagement":
      return NextResponse.json(getEngagementStats())
    case "revenue":
      return NextResponse.json(getRevenueStats())
    case "content":
      return NextResponse.json(getContentStats())
    case "growth":
      return NextResponse.json(getGrowthStats())
    default:
      // Return all stats
      return NextResponse.json({
        platform: getPlatformStats(),
        engagement: getEngagementStats(),
        revenue: getRevenueStats(),
        content: getContentStats(),
        growth: getGrowthStats(),
      })
  }
}
