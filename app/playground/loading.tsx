import { Skeleton } from "@/components/ui/skeleton"

export default function PlaygroundLoading() {
  return (
    <div className="container py-6 h-[calc(100vh-4rem)]">
      <div className="flex h-full flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <Skeleton className="h-8 w-40" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-24 rounded-md" />
              <Skeleton className="h-8 w-24 rounded-md" />
            </div>
          </div>
          <Skeleton className="flex-1 min-h-[300px] rounded-lg" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>
          <Skeleton className="flex-1 min-h-[300px] rounded-lg" />
        </div>
      </div>
    </div>
  )
}
