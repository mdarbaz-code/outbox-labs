import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
export function AppRouter() {
    return _jsx(RouterProvider, { router: router });
}
