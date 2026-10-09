export function SidebarSkeleton() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-[#E5E7EB] bg-white p-4">
      <div className="mb-6 h-10 w-28 animate-pulse rounded bg-[#F4F7F5]" />
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-10 animate-pulse rounded-[12px] bg-[#F4F7F5]"
          />
        ))}
      </div>
    </aside>
  );
}
