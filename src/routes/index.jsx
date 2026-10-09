import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import { ROUTES } from "@/constants/routes";
import { LoginPage } from "@/pages/Login";
import { SignupPage } from "@/pages/Signup";
import { InboxPage } from "@/pages/Inbox";
import { ScheduledPage } from "@/pages/Scheduled";
import { SentPage } from "@/pages/Sent";
import { ComposePage } from "@/pages/Compose";
import { EmailDetailsPage } from "@/pages/EmailDetails";
import { ProfilePage } from "@/pages/Profile";
export const router = createBrowserRouter([
  { path: ROUTES.login, element: _jsx(LoginPage, {}) },
  { path: "/signup", element: _jsx(SignupPage, {}) },
  {
    path: "/",
    element: _jsx(DashboardLayout, {}),
    children: [
      {
        index: true,
        element: _jsx(Navigate, { to: ROUTES.inbox, replace: true }),
      },
      { path: ROUTES.inbox.slice(1), element: _jsx(InboxPage, {}) },
      { path: ROUTES.scheduled.slice(1), element: _jsx(ScheduledPage, {}) },
      { path: ROUTES.sent.slice(1), element: _jsx(SentPage, {}) },
      { path: ROUTES.compose.slice(1), element: _jsx(ComposePage, {}) },
      { path: "email/:id", element: _jsx(EmailDetailsPage, {}) },
      { path: "profile", element: _jsx(ProfilePage, {}) },
    ],
  },
  { path: "*", element: _jsx(Navigate, { to: ROUTES.inbox, replace: true }) },
]);
