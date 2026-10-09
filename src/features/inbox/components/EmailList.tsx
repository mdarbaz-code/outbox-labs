import { EmptyState } from "@/components/shared/design-system/EmptyState";
import { AppButton } from "@/components/shared/AppButton";
import type { InboxEmail } from "../types";
import { EmailCard } from "./EmailCard";

export interface EmailListProps {
  emails: InboxEmail[];
  loading?: boolean;
  onRefresh?: () => void;
}

export function EmailList({ emails, loading = false }: EmailListProps) {
  if (loading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="h-28 animate-pulse rounded-[16px] border border-[#E5E7EB] bg-[#F9FAFB]"
          />
        ))}
      </div>
    );
  }

  if (!emails.length) {
    return (
      <EmptyState
        title="No messages found"
        description="Try a different search or filter to surface more emails."
        action={<AppButton variant="secondary">Refresh</AppButton>}
      />
    );
  }

  return (
    <div className="space-y-3">
      {emails.map((email) => (
        <EmailCard key={email.id} email={email} />
      ))}
    </div>
  );
}
