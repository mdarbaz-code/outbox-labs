import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/cn";
export function Button({ className, type = "button", ...props }) {
    return (_jsx("button", { type: type, className: cn("rounded-md border px-4 py-2", className), ...props }));
}
