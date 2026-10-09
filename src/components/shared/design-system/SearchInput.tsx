import { AppInput } from "./AppInput";
import { Search } from "lucide-react";
import { cn } from "@/lib/cn";
import type { InputHTMLAttributes } from "react";

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

export function SearchInput({
  className,
  containerClassName,
  ...props
}: SearchInputProps) {
  return (
    <div className={cn("relative", containerClassName)}>
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
      <AppInput className={cn("pl-11", className)} {...props} />
    </div>
  );
}
