import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export interface PageContainerProps extends HTMLAttributes<HTMLElement> {
  compact?: boolean;
}

export function PageContainer({
  children,
  className,
  compact = false,
  ...props
}: PageContainerProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8",
        compact ? "max-w-5xl" : "max-w-7xl",
        className,
      )}
      {...props}
    >
      {children}
    </main>
  );
}
