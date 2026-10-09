import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from "@/components/shared/design-system/Badge";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export function EmailCard({ email }) {
  const navigate = useNavigate();
  const initials = email.sender
    .split(/\\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <article
      onClick={() => navigate(`/email/${email.id}`)}
      role="button" tabIndex={0} onKeyDown={(event) => event.key === "Enter" && navigate(`/email/${email.id}`)}
      className={[
        "group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-[#edf0ed] px-3 py-4 transition-colors sm:gap-4 sm:px-4",
        "hover:bg-[#f6faf7]",
        email.unread ? "bg-[#fbfdfb]" : "bg-white",
      ].join(" ")}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f5ed] text-xs font-bold text-[#147a49] ring-1 ring-[#d7ecdf]">
        {initials || "?"}
      </div>
      <div className="min-w-0">
        <div className="flex min-w-0 items-center gap-2">
          <h3 className={["truncate text-sm", email.unread ? "font-bold text-[#17211b]" : "font-medium text-[#455149]"].join(" ")}>
            {email.sender}
          </h3>
          {email.unread ? <span className="h-2 w-2 shrink-0 rounded-full bg-[#0b9f5a]" aria-label="Unread" /> : null}
          <span className="ml-auto hidden shrink-0 text-[11px] text-[#8a958d] sm:block">{email.receivedAt}</span>
        </div>
        <p className={["mt-1 truncate text-sm", email.unread ? "font-semibold text-[#26342b]" : "font-medium text-[#5d6961]"].join(" ")}>
          {email.subject}
        </p>
        <p className="mt-1 truncate text-xs leading-5 text-[#8a958d]">{email.preview}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="text-[11px] text-[#8a958d] sm:hidden">{email.receivedAt}</span>
        <Badge variant="muted">{email.category}</Badge>
        <ArrowUpRight className="h-4 w-4 text-[#9aa69e] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#147a49]" aria-hidden="true" />
      </div>
    </article>
  );
}
