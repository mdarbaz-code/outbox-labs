import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
export function AppProviders({ children }) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                retry: 1,
                refetchOnWindowFocus: false,
            },
        },
    }));
    return (_jsxs(QueryClientProvider, { client: queryClient, children: [children, _jsx(Toaster, { position: "top-right", toastOptions: { duration: 4000 } })] }));
}
