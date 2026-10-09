import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export interface SectionHeadingProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function SectionHeading({
  title,
  description,
  action,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <header
      className={cn("flex items-end justify-between gap-4", className)}
      {...props}
    >
      <div>
        <h2 className="text-xl font-semibold text-[#111827]">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-[#6B7280]">{description}</p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </header>
  );
}
