import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { PageContainer } from "@/components/shared/design-system/PageContainer";
import { SectionHeading } from "@/components/shared/design-system/SectionHeading";
import { EmailList } from "@/features/inbox/components/EmailList";
import { InboxPagination } from "@/features/inbox/components/InboxPagination";
import { InboxToolbar } from "@/features/inbox/components/InboxToolbar";
import { useInbox } from "@/features/inbox/hooks/useInbox";
export function InboxPage() {
    const { emails, loading, filters, setFilters, page, setPage, totalPages, totalCount, } = useInbox();
    const [refreshing, setRefreshing] = useState(false);
    const isBusy = loading || refreshing;
    const summary = useMemo(() => {
        return `${totalCount} messages • Page ${page}`;
    }, [page, totalCount]);
    const handleRefresh = () => {
        setRefreshing(true);
        window.setTimeout(() => setRefreshing(false), 600);
    };
    return (_jsxs(PageContainer, { className: "space-y-6", children: [_jsx(SectionHeading, { title: "Inbox", description: summary, action: _jsx("span", { className: "rounded-full bg-[#EAF9EF] px-3 py-1 text-sm font-medium text-[#00A63E]", children: "Live" }) }), _jsxs("div", { className: "rounded-[24px] border border-[#E5E7EB] bg-white p-4 shadow-sm sm:p-6", children: [_jsx(InboxToolbar, { filters: filters, onFiltersChange: setFilters, onRefresh: handleRefresh }), _jsx("div", { className: "mt-6", children: _jsx(EmailList, { emails: emails, loading: isBusy, onRefresh: handleRefresh }) }), _jsx("div", { className: "mt-6", children: _jsx(InboxPagination, { page: page, totalPages: totalPages, onPageChange: setPage }) })] })] }));
}
