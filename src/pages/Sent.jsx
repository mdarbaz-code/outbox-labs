import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { PageContainer } from "@/components/shared/design-system/PageContainer";
import { EmptyState } from "@/components/shared/design-system/EmptyState";
import { MailboxToolbar } from "@/features/mailbox/components/MailboxToolbar";
import { MailboxRow } from "@/features/mailbox/components/MailboxRow";
import { useSentEmails } from "@/features/mailbox/store";
export function SentPage() {
    const [search, setSearch] = useState("");
    const sentEmails = useSentEmails();
    const emails = useMemo(() => {
        const query = search.trim().toLowerCase();
        if (!query)
            return sentEmails;
        return sentEmails.filter((email) => email.to.toLowerCase().includes(query) ||
            email.subject.toLowerCase().includes(query));
    }, [search, sentEmails]);
    return (_jsxs(PageContainer, { className: "max-w-6xl", children: [_jsx(MailboxToolbar, { search: search, onSearchChange: setSearch, onRefresh: () => setSearch("") }), _jsx("div", { className: "mt-6", children: emails.length ? (emails.map((email) => (_jsx(MailboxRow, { id: email.id, to: email.to, subject: email.subject, preview: email.preview, starred: email.starred, badge: { kind: "sent", label: "Sent" } }, email.id)))) : (_jsx(EmptyState, { title: "No sent emails", description: "Emails you send will show up here." })) })] }));
}
