import { AppButton } from "@/components/shared/AppButton";

export interface InboxPaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function InboxPagination({
  page,
  totalPages,
  onPageChange,
}: InboxPaginationProps) {
  return (
    <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-4">
      <p className="text-sm text-[#6B7280]">
        Page {page} of {totalPages}
      </p>
      <div className="flex gap-2">
        <AppButton
          variant="secondary"
          className="h-10 w-auto rounded-[12px] px-4"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
        >
          Previous
        </AppButton>
        <AppButton
          className="h-10 w-auto rounded-[12px] px-4"
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
        >
          Next
        </AppButton>
      </div>
    </div>
  );
}
