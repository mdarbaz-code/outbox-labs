import { useNavigate } from "react-router-dom";
import { Star, Clock } from "lucide-react";
import { cn } from "@/lib/cn";

interface MailboxRowProps {
  id: string;
  to: string;
  subject: string;
  preview: string;
  starred?: boolean;
  badge:
    | { kind: "scheduled"; label: string }
    | { kind: "sent"; label: "Sent" };
}

export function MailboxRow({
  id,
  to,
  subject,
  preview,
  starred = false,
  badge,
}: MailboxRowProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/email/${id}`)}
      className="flex cursor-pointer items-center gap-4 border-b border-[#F3F4F6] px-2 py-4 hover:bg-[#F9FAFB]"
    >
      <span className="w-48 shrink-0 truncate text-sm font-semibold text-[#111827]">
        To: {to}
      </span>

      {badge.kind === "scheduled" ? (
        <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#F59E0B]/30 bg-[#FFF3DC] px-3 py-1 text-xs font-medium text-[#B45309]">
          <Clock className="h-3.5 w-3.5" />
          {badge.label}
        </span>
      ) : (
        <span className="shrink-0 whitespace-nowrap rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-medium text-[#6B7280]">
          {badge.label}
        </span>
      )}

      <p className="min-w-0 flex-1 truncate text-sm">
        <span className="font-semibold text-[#111827]">{subject}</span>
        <span className="text-[#9CA3AF]"> - {preview}</span>
      </p>

      <button
        type="button"
        aria-label={starred ? "Unstar" : "Star"}
        onClick={(event) => event.stopPropagation()}
        className="shrink-0 text-[#D1D5DB] hover:text-[#F59E0B]"
      >
        <Star
          className={cn("h-4 w-4", starred && "fill-[#F59E0B] text-[#F59E0B]")}
        />
      </button>
    </div>
  );
}
