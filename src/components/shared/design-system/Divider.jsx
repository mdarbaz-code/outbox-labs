import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/cn";
export function Divider({ label, className }) {
    return (_jsxs("div", { className: cn("flex items-center gap-3", className), children: [_jsx("div", { className: "h-px flex-1 bg-[#E5E7EB]" }), label ? _jsx("span", { className: "text-sm text-[#6B7280]", children: label }) : null, _jsx("div", { className: "h-px flex-1 bg-[#E5E7EB]" })] }));
}
