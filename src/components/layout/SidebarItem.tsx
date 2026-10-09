import { NavLink } from "react-router-dom";
import { cn } from "@/lib/cn";
import type { LucideIcon } from "lucide-react";

export interface SidebarItemProps {
  to: string;
  label: string;
  icon: LucideIcon;
  count?: number;
  collapsed?: boolean;
}

export function SidebarItem({
  to,
  label,
  icon: Icon,
  count,
  collapsed = false,
}: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center justify-between gap-3 rounded-[12px] px-3 py-3 text-sm font-medium transition-colors",
          collapsed ? "justify-center px-2" : "",
          isActive
            ? "bg-[#EAF9EF] text-[#00A63E]"
            : "text-[#6B7280] hover:bg-[#F4F7F5] hover:text-[#111827]",
        )
      }
    >
      {({ isActive }) => (
        <>
          <div className="flex items-center gap-3">
            <Icon
              className={cn(
                "h-4 w-4",
                isActive ? "text-[#00A63E]" : "text-current",
              )}
            />
            {!collapsed ? <span>{label}</span> : null}
          </div>
          {!collapsed && count ? (
            <span className="text-xs font-semibold text-[#6B7280]">
              {count}
            </span>
          ) : null}
        </>
      )}
    </NavLink>
  );
}
