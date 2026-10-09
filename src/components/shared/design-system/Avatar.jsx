import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/cn";
export function Avatar({ src, alt, fallback, size = "md", className, ...props }) {
    const sizeClasses = {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
    };
    return (_jsx("div", { className: cn("flex items-center justify-center overflow-hidden rounded-full bg-[#F4F7F5] text-[#111827]", sizeClasses[size], className), ...props, children: src ? (_jsx("img", { src: src, alt: alt, className: "h-full w-full object-cover" })) : (fallback) }));
}
