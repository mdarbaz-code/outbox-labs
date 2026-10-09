import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { AppButton } from "@/components/shared/AppButton";
export function InboxPagination({ page, totalPages, onPageChange, }) {
    return (_jsxs("div", { className: "flex items-center justify-between border-t border-[#E5E7EB] pt-4", children: [_jsxs("p", { className: "text-sm text-[#6B7280]", children: ["Page ", page, " of ", totalPages] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(AppButton, { variant: "secondary", className: "h-10 w-auto rounded-[12px] px-4", onClick: () => onPageChange(Math.max(1, page - 1)), disabled: page === 1, children: "Previous" }), _jsx(AppButton, { className: "h-10 w-auto rounded-[12px] px-4", onClick: () => onPageChange(Math.min(totalPages, page + 1)), disabled: page === totalPages, children: "Next" })] })] }));
}
