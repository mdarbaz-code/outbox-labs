import { Outlet, useLocation, Link } from "react-router-dom";
import { getCurrentUser } from "@/services/auth";
import { Sidebar } from "@/components/layout/Sidebar";
import { Bell, Search } from "lucide-react";

const pageTitles = {
  "/scheduled": ["Scheduled", "Your emails, ready for the right moment."],
  "/sent": ["Sent mail", "A record of every message you've sent."],
  "/inbox": ["Inbox", "A little more clarity in your day."],
  "/compose": ["Compose", "Put your thoughts into words."],
};
export default function DashboardLayout() {
  const { pathname } = useLocation();
  const [title, subtitle] = pageTitles[pathname] || [
    "Your workspace",
    "Everything important, in one place.",
  ];
  return (
    <div className="app-shell">
      <Sidebar className="hidden lg:flex" />
      <main className="app-main">
        <header className="topbar">
          <div className="topbar-heading">
            <span className="eyebrow">YOUR WORKSPACE</span>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className="topbar-actions">
            <div className="shortcut-search">
              <Search size={17} />
              <span>Search anything</span>
              <kbd>⌘ K</kbd>
            </div>
            <button
              className="icon-button notification-button"
              aria-label="Notifications"
              type="button"
            >
              <Bell size={18} />
              <i />
            </button>
            <AvatarFallback />
          </div>
        </header>
        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
function AvatarFallback() {
  const user = getCurrentUser();
  const name = user?.name || "Guest user";
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <Link
      to={user ? "/profile" : "/login"}
      className="topbar-avatar"
      aria-label="Open profile"
      title={name}
    >
      {user?.avatar ? <img src={user.avatar} alt="" /> : initials}
    </Link>
  );
}
