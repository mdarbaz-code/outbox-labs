import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import { ROUTES } from "@/constants/routes";
import { LoginPage } from "@/pages/Login";
import { ScheduledPage } from "@/pages/Scheduled";
import { SentPage } from "@/pages/Sent";
import { ComposePage } from "@/pages/Compose";
import { EmailDetailsPage } from "@/pages/EmailDetails";

export const router = createBrowserRouter([
  {
    path: ROUTES.login,
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to={ROUTES.scheduled} replace /> },
      { path: ROUTES.scheduled, element: <ScheduledPage /> },
      { path: ROUTES.sent, element: <SentPage /> },
    ],
  },
  { path: ROUTES.compose, element: <ComposePage /> },
  { path: ROUTES.email, element: <EmailDetailsPage /> },
  { path: ROUTES.inbox, element: <Navigate to={ROUTES.scheduled} replace /> },
  { path: "*", element: <Navigate to={ROUTES.scheduled} replace /> },
]);
