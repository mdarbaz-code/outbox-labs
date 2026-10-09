import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/cn";
export function SectionHeading({ title, description, action, className, ...props }) {
    return (_jsxs("header", { className: cn("flex items-end justify-between gap-4", className), ...props, children: [_jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold text-[#111827]", children: title }), description ? (_jsx("p", { className: "mt-1 text-sm text-[#6B7280]", children: description })) : null] }), action ? _jsx("div", { children: action }) : null] }));
}
