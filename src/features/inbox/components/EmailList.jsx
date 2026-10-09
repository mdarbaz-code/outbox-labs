import { jsx as _jsx } from "react/jsx-runtime";
import { EmptyState } from "@/components/shared/design-system/EmptyState";
import { AppButton } from "@/components/shared/AppButton";
import { EmailCard } from "./EmailCard";
export function EmailList({ emails, loading = false }) {
    if (loading) {
        return (_jsx("div", { className: "space-y-3", children: Array.from({ length: 3 }).map((_, index) => (_jsx("div", { className: "h-28 animate-pulse rounded-[16px] border border-[#E5E7EB] bg-[#F9FAFB]" }, index))) }));
    }
    if (!emails.length) {
        return (_jsx(EmptyState, { title: "No messages found", description: "Try a different search or filter to surface more emails.", action: _jsx(AppButton, { variant: "secondary", children: "Refresh" }) }));
    }
    return (_jsx("div", { className: "space-y-3", children: emails.map((email) => (_jsx(EmailCard, { email: email }, email.id))) }));
}
