export function EmailDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar skeleton */}
      <div className="border-b border-[#E5E7EB] px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="h-6 w-24 animate-pulse rounded bg-[#F4F7F5]" />
          <div className="flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-10 w-10 animate-pulse rounded bg-[#F4F7F5]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
        <div className="mb-6 space-y-4">
          <div className="h-8 w-64 animate-pulse rounded bg-[#F4F7F5]" />
          <div className="flex gap-4">
            <div className="h-12 w-12 animate-pulse rounded-full bg-[#F4F7F5]" />
            <div className="space-y-2 flex-1">
              <div className="h-4 w-40 animate-pulse rounded bg-[#F4F7F5]" />
              <div className="h-4 w-32 animate-pulse rounded bg-[#F4F7F5]" />
              <div className="h-4 w-24 animate-pulse rounded bg-[#F4F7F5]" />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-4 animate-pulse rounded bg-[#F4F7F5]" />
          ))}
        </div>
      </div>
    </div>
  );
}
