import { useMemo, useState } from "react";
import { inboxSeedData } from "../data";
import type { InboxEmail, InboxFilters } from "../types";

const PAGE_SIZE = 3;

export function useInbox() {
  const [filters, setFilters] = useState<InboxFilters>({
    search: "",
    category: "All",
  });
  const [page, setPage] = useState(1);
  const [loading] = useState(false);

  const filteredEmails = useMemo(() => {
    const search = filters.search.trim().toLowerCase();
    return inboxSeedData.filter((email) => {
      const matchesSearch =
        !search ||
        email.sender.toLowerCase().includes(search) ||
        email.subject.toLowerCase().includes(search) ||
        email.preview.toLowerCase().includes(search);
      const matchesCategory =
        filters.category === "All" || email.category === filters.category;
      return matchesSearch && matchesCategory;
    });
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filteredEmails.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pagedEmails = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filteredEmails.slice(start, start + PAGE_SIZE);
  }, [filteredEmails, safePage]);

  return {
    emails: pagedEmails as InboxEmail[],
    loading,
    filters,
    setFilters,
    page: safePage,
    setPage,
    totalPages,
    totalCount: filteredEmails.length,
  };
}
