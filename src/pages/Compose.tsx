import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  Bold,
  Clock,
  Italic,
  List,
  ListOrdered,
  Paperclip,
  Quote,
  Redo2,
  Strikethrough,
  Underline,
  Undo2,
} from "lucide-react";
import { PageContainer } from "@/components/shared/design-system/PageContainer";
import { ComposeSkeleton } from "@/features/compose/components/ComposeSkeleton";
import { RecipientsField } from "@/features/compose/components/RecipientsField";
import { SendLaterPopover } from "@/features/compose/components/SendLaterPopover";
import type { ComposeFormValues } from "@/features/compose/types";
import { addScheduledEmail, addSentEmail } from "@/features/mailbox/store";
import { cn } from "@/lib/cn";

export function ComposePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [attachments, setAttachments] = useState<string[]>([]);
  const [showSendLater, setShowSendLater] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = useForm<ComposeFormValues>({
    defaultValues: {
      recipients: [],
      subject: "",
      body: "",
      attachmentNames: [],
      delayBetweenEmails: "",
      hourlyLimit: "",
    },
    mode: "onTouched",
  });

  const recipients = watch("recipients") ?? [];
  const sendLaterAt = watch("sendLaterAt");

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 350);
    return () => window.clearTimeout(timer);
  }, []);

  const onSubmit = (values: ComposeFormValues) => {
    if (!values.recipients.length) {
      toast.error("Add at least one recipient before sending.");
      return;
    }
    if (!values.subject.trim()) {
      toast.error("Add a subject before sending.");
      return;
    }

    const to = values.recipients.join(", ");
    const preview = values.body.trim().slice(0, 120) || "(no message body)";

    if (values.sendLaterAt) {
      addScheduledEmail({
        to,
        subject: values.subject,
        preview,
        scheduledAt: values.sendLaterAt,
      });
      toast.success(`Email scheduled for ${values.sendLaterAt}`);
      navigate("/scheduled");
    } else {
      addSentEmail({ to, subject: values.subject, preview });
      toast.success("Email sent");
      navigate("/sent");
    }
  };

  const handleUpload = (files: FileList | null) => {
    const names = Array.from(files ?? []).map((file) => file.name);
    if (!names.length) return;
    const next = [...attachments, ...names];
    setAttachments(next);
    setValue("attachmentNames", next);
  };

  if (isLoading) {
    return <ComposeSkeleton />;
  }

  return (
    <PageContainer className="max-w-5xl">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-[#111827] hover:text-[#00A63E]"
              aria-label="Back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-2xl font-medium text-[#111827]">
              Compose New Email
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <label className="relative cursor-pointer text-[#6B7280] hover:text-[#00A63E]">
              <Paperclip className="h-5 w-5" />
              {attachments.length > 0 ? (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#00A63E] text-[9px] font-semibold text-white">
                  {attachments.length}
                </span>
              ) : null}
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                onChange={(event) => handleUpload(event.target.files)}
              />
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowSendLater((current) => !current)}
                className={cn(
                  "text-[#6B7280] hover:text-[#00A63E]",
                  sendLaterAt && "text-[#00A63E]",
                )}
                aria-label="Send later"
              >
                <Clock className="h-5 w-5" />
              </button>
              {showSendLater ? (
                <SendLaterPopover
                  value={sendLaterAt}
                  className="absolute right-0 top-8"
                  onDone={(picked) => {
                    setValue("sendLaterAt", picked);
                    setShowSendLater(false);
                  }}
                  onCancel={() => setShowSendLater(false)}
                />
              ) : null}
            </div>

            {sendLaterAt ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full border border-[#00A63E] px-5 py-2 text-sm font-medium text-[#00A63E] hover:bg-[#EAF9EF]"
              >
                Send Later
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#00A63E] px-5 py-2 text-sm font-medium text-white hover:bg-[#009137]"
              >
                Send
              </button>
            )}
          </div>
        </div>

        {/* Fields */}
        <div className="divide-y divide-[#E5E7EB] border-t border-[#E5E7EB]">
          <div className="flex items-center gap-4 py-4">
            <span className="w-24 shrink-0 text-sm text-[#111827]">From</span>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F7F5] px-4 py-2 text-sm text-[#111827]">
              oliver.brown@domain.io
            </div>
          </div>

          <div className="flex items-center gap-4 py-4">
            <span className="w-24 shrink-0 text-sm text-[#111827]">To</span>
            <RecipientsField
              value={recipients}
              onChange={(value) => setValue("recipients", value)}
            />
          </div>

          <div className="flex items-center gap-4 py-4">
            <span className="w-24 shrink-0 text-sm text-[#111827]">
              Subject
            </span>
            <input
              placeholder="Subject"
              className="flex-1 bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
              {...register("subject")}
            />
          </div>

          <div className="flex flex-wrap items-center gap-8 py-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#111827]">
                Delay between 2 emails
              </span>
              <input
                type="number"
                placeholder="00"
                className="h-10 w-16 rounded-[8px] border border-[#E5E7EB] bg-white text-center text-sm text-[#111827] outline-none focus:border-[#00A63E]"
                {...register("delayBetweenEmails")}
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#111827]">Hourly Limit</span>
              <input
                type="number"
                placeholder="00"
                className="h-10 w-16 rounded-[8px] border border-[#E5E7EB] bg-white text-center text-sm text-[#111827] outline-none focus:border-[#00A63E]"
                {...register("hourlyLimit")}
              />
            </div>
          </div>
        </div>

        {/* Message body */}
        <div className="mt-4 min-h-[420px] rounded-[16px] bg-[#F4F7F5] p-4">
          <textarea
            placeholder="Type Your Reply..."
            rows={8}
            className="w-full resize-none bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
            {...register("body")}
          />

          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-full bg-white px-4 py-2.5 text-[#6B7280] shadow-sm">
            <Undo2 className="h-4 w-4" />
            <Redo2 className="h-4 w-4" />
            <span className="h-4 w-px bg-[#E5E7EB]" />
            <Bold className="h-4 w-4" />
            <Italic className="h-4 w-4" />
            <Underline className="h-4 w-4" />
            <span className="h-4 w-px bg-[#E5E7EB]" />
            <ListOrdered className="h-4 w-4" />
            <List className="h-4 w-4" />
            <span className="h-4 w-px bg-[#E5E7EB]" />
            <Quote className="h-4 w-4" />
            <Strikethrough className="h-4 w-4" />
          </div>
        </div>
      </form>
    </PageContainer>
  );
}
