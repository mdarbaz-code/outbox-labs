import { cn } from "@/lib/cn";

export interface DividerProps {
  label?: string;
  className?: string;
}

export function Divider({ label, className }: DividerProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="h-px flex-1 bg-[#E5E7EB]" />
      {label ? <span className="text-sm text-[#6B7280]">{label}</span> : null}
      <div className="h-px flex-1 bg-[#E5E7EB]" />
    </div>
  );
}
