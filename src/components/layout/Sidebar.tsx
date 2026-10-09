import { NavLink } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
import { Avatar } from "@/components/shared/design-system/Avatar";
import { Clock, Send, ChevronDown } from "lucide-react";

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  { to: ROUTES.scheduled, label: "Scheduled", icon: Clock, count: 12 },
  { to: ROUTES.sent, label: "Sent", icon: Send, count: 785 },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex h-screen w-72 flex-col border-r border-[#E5E7EB] bg-white px-4 py-6",
        className,
      )}
    >
      {/* Logo */}
      <div className="mb-6 px-1">
        <span
          className="text-3xl font-bold tracking-tight text-[#111827]"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          ONB
        </span>
      </div>

      {/* Profile section */}
      <div className="mb-6 flex items-center gap-3 rounded-[12px] bg-[#F9FAFB] p-3">
        <Avatar
          src="https://i.pravatar.cc/64?img=12"
          alt="Oliver Brown"
          fallback="OB"
          size="md"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-[#111827]">
            Oliver Brown
          </p>
          <p className="truncate text-xs text-[#6B7280]">
            oliver.brown@domain.io
          </p>
        </div>
        <button type="button" className="text-[#6B7280] hover:text-[#111827]">
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Compose button */}
      <NavLink
        to={ROUTES.compose}
        className="mb-6 block w-full rounded-full border-2 border-[#00A63E] bg-white py-2.5 text-center text-sm font-semibold text-[#00A63E] transition-colors hover:bg-[#EAF9EF]"
      >
        Compose
      </NavLink>

      {/* Navigation section */}
      <div>
        <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
          Core
        </p>
        <nav className="space-y-1" aria-label="Sidebar navigation">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.to}
              to={item.to}
              label={item.label}
              icon={item.icon}
              count={item.count}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}
