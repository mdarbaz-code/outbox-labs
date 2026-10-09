import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/cn";
export function SidebarItem({ to, label, icon: Icon, count, collapsed = false, }) {
    return (_jsx(NavLink, { to: to, className: ({ isActive }) => cn("flex items-center justify-between gap-3 rounded-[12px] px-3 py-3 text-sm font-medium transition-colors", collapsed ? "justify-center px-2" : "", isActive
            ? "bg-[#EAF9EF] text-[#00A63E]"
            : "text-[#6B7280] hover:bg-[#F4F7F5] hover:text-[#111827]"), children: ({ isActive }) => (_jsxs(_Fragment, { children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Icon, { className: cn("h-4 w-4", isActive ? "text-[#00A63E]" : "text-current") }), !collapsed ? _jsx("span", { children: label }) : null] }), !collapsed && count ? (_jsx("span", { className: "text-xs font-semibold text-[#6B7280]", children: count })) : null] })) }));
}
