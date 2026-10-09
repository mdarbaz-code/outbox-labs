import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
export function AppButton({ children, className, loading, disabled, variant = "primary", size = "md", ...props }) {
    const variantClasses = {
        primary: "bg-[#00A63E] text-white hover:bg-[#009137] border-transparent",
        secondary: "bg-[#F4F7F5] text-[#111827] hover:bg-[#e8efea] border-transparent",
        ghost: "border-[#E5E7EB] bg-white text-[#111827] hover:bg-[#F4F7F5]",
    };
    const sizeClasses = {
        sm: "h-10 px-3 text-sm",
        md: "h-12 px-4 text-sm",
        lg: "h-14 px-6 text-base",
    };
    return (_jsx(Button, { disabled: disabled || loading, className: cn("w-full rounded-[12px] font-medium shadow-none transition-colors", variantClasses[variant], sizeClasses[size], className), ...props, children: loading ? "Loading..." : children }));
}
