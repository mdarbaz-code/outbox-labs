import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function SidebarSkeleton() {
    return (_jsxs("aside", { className: "flex h-screen w-72 flex-col border-r border-[#E5E7EB] bg-white p-4", children: [_jsx("div", { className: "mb-6 h-10 w-28 animate-pulse rounded bg-[#F4F7F5]" }), _jsx("div", { className: "space-y-2", children: Array.from({ length: 5 }).map((_, index) => (_jsx("div", { className: "h-10 animate-pulse rounded-[12px] bg-[#F4F7F5]" }, index))) })] }));
}
