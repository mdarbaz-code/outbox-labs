import { PageContainer } from "@/components/shared/design-system/PageContainer";

export function ComposeSkeleton() {
  return (
    <PageContainer className="space-y-4">
      <div className="h-8 w-32 animate-pulse rounded bg-[#F4F7F5]" />
      <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-4 shadow-sm sm:p-6">
        <div className="space-y-4">
          <div className="h-[56px] animate-pulse rounded-[10px] bg-[#F4F7F5]" />
          <div className="h-[56px] animate-pulse rounded-[10px] bg-[#F4F7F5]" />
          <div className="h-64 animate-pulse rounded-[16px] bg-[#F4F7F5]" />
          <div className="h-20 animate-pulse rounded-[16px] bg-[#F4F7F5]" />
        </div>
      </div>
    </PageContainer>
  );
}
