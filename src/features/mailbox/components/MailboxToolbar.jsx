import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Filter, RefreshCw } from "lucide-react";
import { SearchInput } from "@/components/shared/design-system/SearchInput";
export function MailboxToolbar({ search, onSearchChange, onRefresh, }) {
    return (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(SearchInput, { placeholder: "Search", value: search, onChange: (event) => onSearchChange(event.target.value), containerClassName: "flex-1", className: "h-12 rounded-[14px] border-none bg-[#F4F7F5]" }), _jsx("button", { type: "button", "aria-label": "Filter", className: "text-[#9CA3AF] hover:text-[#111827]", children: _jsx(Filter, { className: "h-5 w-5" }) }), _jsx("button", { type: "button", "aria-label": "Refresh", onClick: onRefresh, className: "text-[#9CA3AF] hover:text-[#111827]", children: _jsx(RefreshCw, { className: "h-5 w-5" }) })] }));
}
