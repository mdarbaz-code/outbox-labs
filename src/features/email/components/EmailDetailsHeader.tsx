import { Flag, MoreVertical, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { EmailDetail } from "../types";
import { EmailDetailsContent } from "./EmailDetailsContent";
import { Avatar } from "@/components/shared/design-system/Avatar";

interface EmailDetailsHeaderProps {
  email: EmailDetail;
}

export function EmailDetailsHeader({ email }: EmailDetailsHeaderProps) {
  const navigate = useNavigate();
  const initials = email.sender
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col">
      {/* Top header with back button and actions */}
      <div className="flex items-center justify-between border-b border-[#E5E7EB] px-4 py-4 sm:px-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-lg text-[#111827] hover:text-[#00A63E]"
        >
          <span>←</span>
        </button>
        <div className="flex items-center gap-3">
          <button type="button" className="hover:text-[#00A63E]">
            <Flag className="h-5 w-5 text-[#6B7280]" />
          </button>
          <button type="button" className="hover:text-[#00A63E]">
            <Trash2 className="h-5 w-5 text-[#6B7280]" />
          </button>
          <button type="button" className="hover:text-[#00A63E]">
            <MoreVertical className="h-5 w-5 text-[#6B7280]" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 px-4 py-6 sm:px-6">
        {/* Subject */}
        <h1 className="mb-6 text-2xl font-semibold text-[#111827]">
          {email.subject}
        </h1>

        {/* Sender profile section */}
        <div className="mb-8 flex items-start gap-4">
          <Avatar fallback={initials} size="lg" />
          <div className="flex flex-1 items-start justify-between">
            <div>
              <p className="font-semibold text-[#111827]">{email.sender}</p>
              {email.senderEmail && (
                <p className="text-sm text-[#6B7280]">
                  &lt;{email.senderEmail}&gt;
                </p>
              )}
              <p className="mt-1 text-sm text-[#6B7280]">
                to {email.recipients.join(", ")}
              </p>
            </div>
            <p className="text-sm text-[#6B7280]">{email.receivedAt}</p>
          </div>
        </div>

        {/* Email body and attachments */}
        <EmailDetailsContent email={email} />
      </div>
    </div>
  );
}
