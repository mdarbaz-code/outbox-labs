import { Badge } from "@/components/shared/design-system/Badge";
import { UploadCloud } from "lucide-react";

interface AttachmentPanelProps {
  attachments: string[];
  onUpload: (files: FileList | null) => void;
}

export function AttachmentPanel({
  attachments,
  onUpload,
}: AttachmentPanelProps) {
  return (
    <div className="space-y-3 rounded-[16px] border border-[#E5E7EB] bg-[#F9FAFB] p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-[#111827]">Attachments</p>
          <p className="text-sm text-[#6B7280]">
            Upload files or import a CSV list of recipients.
          </p>
        </div>
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-[10px] border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-medium text-[#111827]">
          <UploadCloud className="h-4 w-4" />
          Upload files
          <input
            type="file"
            className="hidden"
            multiple
            onChange={(event) => onUpload(event.target.files)}
          />
        </label>
      </div>

      {attachments.length ? (
        <div className="flex flex-wrap gap-2">
          {attachments.map((attachment) => (
            <Badge key={attachment} variant="muted">
              {attachment}
            </Badge>
          ))}
        </div>
      ) : null}
    </div>
  );
}
