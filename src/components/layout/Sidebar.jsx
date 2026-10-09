import { NavLink, useNavigate } from "react-router-dom";
import { getCurrentUser, signOut } from "@/services/auth";
import toast from "react-hot-toast";
import { SidebarItem } from "./SidebarItem";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
import { Avatar } from "@/components/shared/design-system/Avatar";
import {
  Clock3,
  Send,
  ChevronDown,
  PenLine,
  Inbox,
  Sparkles,
} from "lucide-react";
import { useScheduledEmails, useSentEmails } from "@/features/mailbox/store";

export function Sidebar({ className }) {
  const scheduled = useScheduledEmails();
  const sent = useSentEmails();
  const navigationItems = [
    { to: ROUTES.inbox, label: "Inbox", icon: Inbox, count: 4 },
    {
      to: ROUTES.scheduled,
      label: "Scheduled",
      icon: Clock3,
      count: scheduled.length,
    },
    { to: ROUTES.sent, label: "Sent", icon: Send, count: sent.length },
  ];

  return (
    <aside
      className={cn(
        "app-sidebar sticky top-0 flex h-screen w-[280px] shrink-0 flex-col",
        className,
      )}
    >
      <NavLink
        to={ROUTES.scheduled}
        className="brand-lockup"
        aria-label="Outbox home"
      >
        <span className="brand-mark">O</span>
        <span className="brand-name">
          outbox<span>.</span>
        </span>
      </NavLink>
      <button className="profile-switcher" type="button">
        <Avatar
          src="https://i.pravatar.cc/64?img=12"
          alt="Oliver Brown"
          fallback="OB"
          size="md"
        />
        <span className="profile-copy">
          <strong>Oliver Brown</strong>
          <small>oliver.brown@domain.io</small>
        </span>
        <ChevronDown size={17} />
      </button>
      <NavLink to={ROUTES.compose} className="compose-cta">
        <PenLine size={17} /> Compose email
      </NavLink>
      <div className="sidebar-section-label">WORKSPACE</div>
      <nav className="sidebar-navigation" aria-label="Mailbox navigation">
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
      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <span className="upgrade-icon">
            <Sparkles size={17} />
          </span>
          <strong>Make room for focus</strong>
          <p>Your inbox, thoughtfully organized.</p>
        </div>
        <div className="sidebar-footer">
          <span className="status-dot" /> All systems operational{" "}
          <span className="footer-version">v1.0</span>
        </div>
      </div>
    </aside>
  );
}
