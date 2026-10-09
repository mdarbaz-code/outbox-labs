import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/cn";
export function Card({ className, ...props }) {
    return (_jsx("div", { className: cn("rounded-xl border bg-white p-4 shadow-sm", className), ...props }));
}
