import coursesData from "@/data/courses.json"
import videosData from "@/data/videos.json"
import podcastsData from "@/data/podcasts.json"
import blogData from "@/data/blog.json"
import roadmapsData from "@/data/roadmaps.json"
import usersData from "@/data/users.json"
import configData from "@/data/config.json"
import statsData from "@/data/stats.json"

// Courses
export const getCourses = () => coursesData.courses
export const getCourseById = (id: number) => coursesData.courses.find((course) => course.id === id)
export const getPopularCourses = () => coursesData.courses.sort((a, b) => b.students - a.students).slice(0, 5)
export const getRecentCourses = () =>
  [...coursesData.courses].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 5)
export const getPremiumCourses = () => coursesData.courses.filter((course) => course.premium)
export const getFreeCourses = () => coursesData.courses.filter((course) => !course.premium)

// Videos
export const getVideos = () => videosData.videos
export const getVideoById = (id: number) => videosData.videos.find((video) => video.id === id)
export const getPopularVideos = () => videosData.videos.sort((a, b) => b.views - a.views).slice(0, 5)
export const getRecentVideos = () =>
  [...videosData.videos]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5)
export const getPremiumVideos = () => videosData.videos.filter((video) => video.premium)
export const getFreeVideos = () => videosData.videos.filter((video) => !video.premium)

// Podcasts
export const getPodcasts = () => podcastsData.podcasts
export const getPodcastById = (id: number) => podcastsData.podcasts.find((podcast) => podcast.id === id)
export const getPopularPodcasts = () => podcastsData.podcasts.sort((a, b) => b.listens - a.listens).slice(0, 5)
export const getRecentPodcasts = () =>
  [...podcastsData.podcasts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5)
export const getPremiumPodcasts = () => podcastsData.podcasts.filter((podcast) => podcast.premium)
export const getFreePodcasts = () => podcastsData.podcasts.filter((podcast) => !podcast.premium)

// Blog
export const getBlogPosts = () => blogData.blog
export const getBlogPostById = (id: number) => blogData.blog.find((post) => post.id === id)
export const getPopularBlogPosts = () => blogData.blog.sort((a, b) => b.views - a.views).slice(0, 5)
export const getRecentBlogPosts = () =>
  [...blogData.blog].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5)
export const getFeaturedBlogPosts = () => blogData.blog.filter((post) => post.featured)

// Roadmaps
export const getRoadmaps = () => roadmapsData.roadmaps
export const getRoadmapById = (id: number) => roadmapsData.roadmaps.find((roadmap) => roadmap.id === id)
export const getPopularRoadmaps = () => roadmapsData.roadmaps.sort((a, b) => b.students - a.students).slice(0, 5)
export const getRecentRoadmaps = () =>
  [...roadmapsData.roadmaps]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5)
export const getPremiumRoadmaps = () => roadmapsData.roadmaps.filter((roadmap) => roadmap.premium)
export const getFreeRoadmaps = () => roadmapsData.roadmaps.filter((roadmap) => !roadmap.premium)

// Users
export const getUsers = () => usersData.users
export const getUserById = (id: number) => usersData.users.find((user) => user.id === id)
export const getAdmins = () => usersData.users.filter((user) => user.role === "admin")
export const getInstructors = () => usersData.users.filter((user) => user.role === "instructor")
export const getPremiumUsers = () => usersData.users.filter((user) => user.plan === "premium")
export const getFreeUsers = () => usersData.users.filter((user) => user.plan === "free")
export const getActiveUsers = () => usersData.users.filter((user) => user.status === "active")
export const getInactiveUsers = () => usersData.users.filter((user) => user.status === "inactive")

// User Progress
export const getUserProgress = (userId: number) => {
  const user = getUserById(userId)
  return user?.progress
}

export const getUserEnrolledCourses = (userId: number) => {
  const user = getUserById(userId)
  if (!user?.enrolledCourses) return []
  return user.enrolledCourses.map((courseId) => getCourseById(courseId)).filter(Boolean)
}

export const getUserCompletedCourses = (userId: number) => {
  const user = getUserById(userId)
  if (!user?.completedCourses) return []
  return user.completedCourses.map((courseId) => getCourseById(courseId)).filter(Boolean)
}

export const getUserBookmarks = (userId: number) => {
  const user = getUserById(userId)
  return user?.bookmarks
}

// Config
export const getSiteConfig = () => configData.site
export const getFeatureConfig = () => configData.features
export const getSubscriptionPlans = () => configData.subscriptions.plans

// Stats
export const getPlatformStats = () => statsData.platform
export const getEngagementStats = () => statsData.engagement
export const getRevenueStats = () => statsData.revenue
export const getContentStats = () => statsData.content
export const getGrowthStats = () => statsData.growth

// Search
export const searchContent = (query: string) => {
  const normalizedQuery = query.toLowerCase()

  const matchedCourses = coursesData.courses.filter(
    (course) =>
      course.title.toLowerCase().includes(normalizedQuery) ||
      course.description.toLowerCase().includes(normalizedQuery) ||
      course.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)),
  )

  const matchedVideos = videosData.videos.filter(
    (video) =>
      video.title.toLowerCase().includes(normalizedQuery) ||
      video.description.toLowerCase().includes(normalizedQuery) ||
      video.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)),
  )

  const matchedPodcasts = podcastsData.podcasts.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(normalizedQuery) ||
      podcast.description.toLowerCase().includes(normalizedQuery) ||
      podcast.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)),
  )

  const matchedBlogPosts = blogData.blog.filter(
    (post) =>
      post.title.toLowerCase().includes(normalizedQuery) ||
      post.excerpt.toLowerCase().includes(normalizedQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)),
  )

  const matchedRoadmaps = roadmapsData.roadmaps.filter(
    (roadmap) =>
      roadmap.title.toLowerCase().includes(normalizedQuery) ||
      roadmap.description.toLowerCase().includes(normalizedQuery) ||
      roadmap.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)),
  )

  return {
    courses: matchedCourses,
    videos: matchedVideos,
    podcasts: matchedPodcasts,
    blog: matchedBlogPosts,
    roadmaps: matchedRoadmaps,
    total:
      matchedCourses.length +
      matchedVideos.length +
      matchedPodcasts.length +
      matchedBlogPosts.length +
      matchedRoadmaps.length,
  }
}
