import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppInput } from "./AppInput";
import { Search } from "lucide-react";
import { cn } from "@/lib/cn";
export function SearchInput({ className, containerClassName, ...props }) {
    return (_jsxs("div", { className: cn("relative", containerClassName), children: [_jsx(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" }), _jsx(AppInput, { className: cn("pl-11", className), ...props })] }));
}
