import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface EmptyStateProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center rounded-[16px] border border-dashed border-[#E5E7EB] bg-white px-6 py-12 text-center",
        className,
      )}
      {...props}
    >
      <h3 className="text-lg font-semibold text-[#111827]">{title}</h3>
      {description ? (
        <p className="mt-2 max-w-md text-sm text-[#6B7280]">{description}</p>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </section>
  );
}
