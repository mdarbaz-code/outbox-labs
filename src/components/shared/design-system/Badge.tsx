import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "muted";
}

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  const variantClasses = {
    default: "bg-[#F4F7F5] text-[#111827]",
    success: "bg-[#EAF9EF] text-[#00A63E]",
    muted: "bg-[#F3F4F6] text-[#6B7280]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
