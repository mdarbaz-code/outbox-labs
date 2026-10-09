import { Download } from "lucide-react";
import type { EmailDetail } from "../types";

interface EmailDetailsContentProps {
  email: EmailDetail;
}

export function EmailDetailsContent({ email }: EmailDetailsContentProps) {
  return (
    <div className="space-y-6">
      {/* Email body */}
      <div className="whitespace-pre-line text-sm leading-7 text-[#111827]">
        {email.body}
      </div>

      {/* Attachments */}
      {email.attachments.length > 0 && (
        <div className="border-t border-[#E5E7EB] pt-6">
          <h3 className="mb-4 font-medium text-[#111827]">Attachments</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {email.attachments.map((attachment) => (
              <a
                key={attachment.id}
                href={attachment.url || "#"}
                className="group flex flex-col gap-2 rounded-[12px] border border-[#E5E7EB] p-3 hover:border-[#00A63E] hover:bg-[#F4F7F5]"
              >
                <div className="overflow-hidden rounded-[8px] bg-gray-100">
                  {attachment.thumbnail ? (
                    <img
                      src={attachment.thumbnail}
                      alt={attachment.name}
                      className="h-24 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-24 items-center justify-center bg-[#F4F7F5]">
                      <span className="text-xs text-[#6B7280]">
                        {attachment.type}
                      </span>
                    </div>
                  )}
                </div>
                <div className="space-y-1 text-left">
                  <p className="truncate text-xs font-medium text-[#111827] group-hover:text-[#00A63E]">
                    {attachment.name}
                  </p>
                  <p className="text-xs text-[#6B7280]">{attachment.size}</p>
                </div>
              </a>
            ))}
          </div>
          <button className="mt-4 flex items-center gap-2 rounded-[12px] border border-[#00A63E] bg-white px-4 py-2 text-sm font-medium text-[#00A63E] hover:bg-[#EAF9EF]">
            <Download className="h-4 w-4" />
            Download all
          </button>
        </div>
      )}
    </div>
  );
}
