import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/cn";
export function PageContainer({ children, className, compact = false, ...props }) {
    return (_jsx("main", { className: cn("mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8", compact ? "max-w-5xl" : "max-w-7xl", className), ...props, children: children }));
}
