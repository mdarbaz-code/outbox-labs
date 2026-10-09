import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB] text-[#111827]">
      <Sidebar className="hidden lg:flex" />
      <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}
