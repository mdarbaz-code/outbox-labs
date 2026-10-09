import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/cn";
export function EmptyState({ title, description, action, className, ...props }) {
    return (_jsxs("section", { className: cn("flex flex-col items-center justify-center rounded-[16px] border border-dashed border-[#E5E7EB] bg-white px-6 py-12 text-center", className), ...props, children: [_jsx("h3", { className: "text-lg font-semibold text-[#111827]", children: title }), description ? (_jsx("p", { className: "mt-2 max-w-md text-sm text-[#6B7280]", children: description })) : null, action ? _jsx("div", { className: "mt-6", children: action }) : null] }));
}
