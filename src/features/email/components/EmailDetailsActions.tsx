import { AppButton } from "@/components/shared/AppButton";
import { Download, Forward, Reply, Trash2 } from "lucide-react";

interface EmailDetailsActionsProps {
  onReply?: () => void;
  onForward?: () => void;
  onDelete?: () => void;
  onDownload?: () => void;
}

export function EmailDetailsActions({
  onReply,
  onForward,
  onDelete,
  onDownload,
}: EmailDetailsActionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <AppButton
        variant="secondary"
        className="h-10 w-auto rounded-[12px] px-4"
        onClick={onReply}
      >
        <span className="flex items-center gap-2">
          <Reply className="h-4 w-4" />
          Reply
        </span>
      </AppButton>
      <AppButton
        variant="secondary"
        className="h-10 w-auto rounded-[12px] px-4"
        onClick={onForward}
      >
        <span className="flex items-center gap-2">
          <Forward className="h-4 w-4" />
          Forward
        </span>
      </AppButton>
      <AppButton
        variant="secondary"
        className="h-10 w-auto rounded-[12px] px-4"
        onClick={onDelete}
      >
        <span className="flex items-center gap-2">
          <Trash2 className="h-4 w-4" />
          Delete
        </span>
      </AppButton>
      <AppButton
        className="h-10 w-auto rounded-[12px] px-4"
        onClick={onDownload}
      >
        <span className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download attachments
        </span>
      </AppButton>
    </div>
  );
}
