import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/cn";
export function Input({ className, ...props }) {
    return (_jsx("input", { className: cn("w-full rounded-md border border-[#E5E7EB] px-3 py-2", className), ...props }));
}
