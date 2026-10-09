import { Filter, RefreshCw } from "lucide-react";
import { SearchInput } from "@/components/shared/design-system/SearchInput";

interface MailboxToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onRefresh: () => void;
}

export function MailboxToolbar({
  search,
  onSearchChange,
  onRefresh,
}: MailboxToolbarProps) {
  return (
    <div className="flex items-center gap-3">
      <SearchInput
        placeholder="Search"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        containerClassName="flex-1"
        className="h-12 rounded-[14px] border-none bg-[#F4F7F5]"
      />
      <button
        type="button"
        aria-label="Filter"
        className="text-[#9CA3AF] hover:text-[#111827]"
      >
        <Filter className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Refresh"
        onClick={onRefresh}
        className="text-[#9CA3AF] hover:text-[#111827]"
      >
        <RefreshCw className="h-5 w-5" />
      </button>
    </div>
  );
}
