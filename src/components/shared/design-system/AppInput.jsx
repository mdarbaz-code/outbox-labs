import { jsx as _jsx } from "react/jsx-runtime";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";
export function AppInput({ className, fullWidth = true, ...props }) {
    return (_jsx(Input, { className: cn("h-14 rounded-[10px] border border-[#E5E7EB] bg-[#F4F7F5] px-4 text-[#111827] shadow-none placeholder:text-[#6B7280] focus-visible:border-[#00A63E] focus-visible:ring-2 focus-visible:ring-[#00A63E]/20", fullWidth && "w-full", className), ...props }));
}
