import { AppButton } from "@/components/shared/AppButton";
import { SearchInput } from "@/components/shared/design-system/SearchInput";
import { RefreshCw } from "lucide-react";
import type { InboxFilters } from "../types";

export interface InboxToolbarProps {
  filters: InboxFilters;
  onFiltersChange: (filters: InboxFilters) => void;
  onRefresh: () => void;
}

export function InboxToolbar({
  filters,
  onFiltersChange,
  onRefresh,
}: InboxToolbarProps) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex-1">
        <SearchInput
          placeholder="Search inbox"
          value={filters.search}
          onChange={(event) =>
            onFiltersChange({ ...filters, search: event.target.value })
          }
        />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <select
          aria-label="Filter by category"
          className="h-12 rounded-[10px] border border-[#E5E7EB] bg-[#F4F7F5] px-3 text-sm text-[#111827]"
          value={filters.category}
          onChange={(event) =>
            onFiltersChange({ ...filters, category: event.target.value })
          }
        >
          <option value="All">All</option>
          <option value="Marketing">Marketing</option>
          <option value="Design">Design</option>
          <option value="Product">Product</option>
          <option value="Support">Support</option>
        </select>
        <AppButton
          variant="secondary"
          className="h-[48px] w-auto rounded-[12px] px-4"
          onClick={onRefresh}
        >
          <span className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </span>
        </AppButton>
      </div>
    </div>
  );
}
