import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/cn";
export function Spinner({ className, label = "Loading..." }) {
    return (_jsxs("div", { className: cn("flex items-center gap-2 text-[#6B7280]", className), children: [_jsx("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-[#00A63E] border-t-transparent" }), _jsx("span", { className: "text-sm", children: label })] }));
}
