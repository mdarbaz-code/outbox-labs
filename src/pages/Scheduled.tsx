import { useMemo, useState } from "react";
import { PageContainer } from "@/components/shared/design-system/PageContainer";
import { EmptyState } from "@/components/shared/design-system/EmptyState";
import { MailboxToolbar } from "@/features/mailbox/components/MailboxToolbar";
import { MailboxRow } from "@/features/mailbox/components/MailboxRow";
import { useScheduledEmails } from "@/features/mailbox/store";

export function ScheduledPage() {
  const [search, setSearch] = useState("");
  const scheduledEmails = useScheduledEmails();

  const emails = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return scheduledEmails;
    return scheduledEmails.filter(
      (email) =>
        email.to.toLowerCase().includes(query) ||
        email.subject.toLowerCase().includes(query),
    );
  }, [search, scheduledEmails]);

  return (
    <PageContainer className="max-w-6xl">
      <MailboxToolbar
        search={search}
        onSearchChange={setSearch}
        onRefresh={() => setSearch("")}
      />

      <div className="mt-6">
        {emails.length ? (
          emails.map((email) => (
            <MailboxRow
              key={email.id}
              id={email.id}
              to={email.to}
              subject={email.subject}
              preview={email.preview}
              starred={email.starred}
              badge={{ kind: "scheduled", label: email.scheduledAt }}
            />
          ))
        ) : (
          <EmptyState
            title="No scheduled emails"
            description="Emails you schedule to send later will show up here."
          />
        )}
      </div>
    </PageContainer>
  );
}
