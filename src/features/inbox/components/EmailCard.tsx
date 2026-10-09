import { Badge } from "@/components/shared/design-system/Badge";
import type { InboxEmail } from "../types";

export interface EmailCardProps {
  email: InboxEmail;
}

export function EmailCard({ email }: EmailCardProps) {
  return (
    <article className="rounded-[16px] border border-[#E5E7EB] bg-white p-4 shadow-sm transition-colors hover:border-[#00A63E]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-semibold text-[#111827]">
              {email.sender}
            </h3>
            {email.unread ? <Badge variant="success">Unread</Badge> : null}
          </div>
          <p className="mt-1 truncate text-sm font-medium text-[#111827]">
            {email.subject}
          </p>
          <p className="mt-1 line-clamp-2 text-sm text-[#6B7280]">
            {email.preview}
          </p>
        </div>
        <span className="whitespace-nowrap text-xs text-[#6B7280]">
          {email.receivedAt}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Badge variant="muted">{email.category}</Badge>
        <button
          type="button"
          className="text-sm font-medium text-[#00A63E] hover:underline"
        >
          Open
        </button>
      </div>
    </article>
  );
}
