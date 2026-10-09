import { cn } from "@/lib/cn";

export interface SpinnerProps {
  className?: string;
  label?: string;
}

export function Spinner({ className, label = "Loading..." }: SpinnerProps) {
  return (
    <div className={cn("flex items-center gap-2 text-[#6B7280]", className)}>
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#00A63E] border-t-transparent" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
