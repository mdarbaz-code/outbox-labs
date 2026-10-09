import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Bold, Clock, Italic, List, ListOrdered, Paperclip, Quote, Redo2, Strikethrough, Underline, Undo2, } from "lucide-react";
import { PageContainer } from "@/components/shared/design-system/PageContainer";
import { ComposeSkeleton } from "@/features/compose/components/ComposeSkeleton";
import { RecipientsField } from "@/features/compose/components/RecipientsField";
import { SendLaterPopover } from "@/features/compose/components/SendLaterPopover";
import { addScheduledEmail, addSentEmail } from "@/features/mailbox/store";
import { cn } from "@/lib/cn";
export function ComposePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [attachments, setAttachments] = useState([]);
    const [showSendLater, setShowSendLater] = useState(false);
    const fileInputRef = useRef(null);
    const { register, handleSubmit, setValue, watch, formState: { isSubmitting }, } = useForm({
        defaultValues: {
            recipients: location.state?.recipient ? [location.state.recipient] : [],
            subject: location.state?.subject || "",
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
    const onSubmit = (values) => {
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
        }
        else {
            addSentEmail({ to, subject: values.subject, preview });
            toast.success("Email sent");
            navigate("/sent");
        }
    };
    const handleUpload = (files) => {
        const names = Array.from(files ?? []).map((file) => file.name);
        if (!names.length)
            return;
        const next = [...attachments, ...names];
        setAttachments(next);
        setValue("attachmentNames", next);
    };
    if (isLoading) {
        return _jsx(ComposeSkeleton, {});
    }
    return (_jsx(PageContainer, { className: "max-w-5xl", children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), noValidate: true, children: [_jsxs("div", { className: "mb-6 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { type: "button", onClick: () => navigate(-1), className: "text-[#111827] hover:text-[#00A63E]", "aria-label": "Back", children: _jsx(ArrowLeft, { className: "h-5 w-5" }) }), _jsx("h1", { className: "text-2xl font-medium text-[#111827]", children: "Compose New Email" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("label", { className: "relative cursor-pointer text-[#6B7280] hover:text-[#00A63E]", children: [_jsx(Paperclip, { className: "h-5 w-5" }), attachments.length > 0 ? (_jsx("span", { className: "absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#00A63E] text-[9px] font-semibold text-white", children: attachments.length })) : null, _jsx("input", { ref: fileInputRef, type: "file", multiple: true, className: "hidden", onChange: (event) => handleUpload(event.target.files) })] }), _jsxs("div", { className: "relative", children: [_jsx("button", { type: "button", onClick: () => setShowSendLater((current) => !current), className: cn("text-[#6B7280] hover:text-[#00A63E]", sendLaterAt && "text-[#00A63E]"), "aria-label": "Send later", children: _jsx(Clock, { className: "h-5 w-5" }) }), showSendLater ? (_jsx(SendLaterPopover, { value: sendLaterAt, className: "absolute right-0 top-8", onDone: (picked) => {
                                                setValue("sendLaterAt", picked);
                                                setShowSendLater(false);
                                            }, onCancel: () => setShowSendLater(false) })) : null] }), sendLaterAt ? (_jsx("button", { type: "submit", disabled: isSubmitting, className: "rounded-full border border-[#00A63E] px-5 py-2 text-sm font-medium text-[#00A63E] hover:bg-[#EAF9EF]", children: "Send Later" })) : (_jsx("button", { type: "submit", disabled: isSubmitting, className: "rounded-full bg-[#00A63E] px-5 py-2 text-sm font-medium text-white hover:bg-[#009137]", children: "Send" }))] })] }), _jsxs("div", { className: "divide-y divide-[#E5E7EB] border-t border-[#E5E7EB]", children: [_jsxs("div", { className: "flex items-center gap-4 py-4", children: [_jsx("span", { className: "w-24 shrink-0 text-sm text-[#111827]", children: "From" }), _jsx("div", { className: "inline-flex items-center gap-2 rounded-full bg-[#F4F7F5] px-4 py-2 text-sm text-[#111827]", children: "oliver.brown@domain.io" })] }), _jsxs("div", { className: "flex items-center gap-4 py-4", children: [_jsx("span", { className: "w-24 shrink-0 text-sm text-[#111827]", children: "To" }), _jsx(RecipientsField, { value: recipients, onChange: (value) => setValue("recipients", value) })] }), _jsxs("div", { className: "flex items-center gap-4 py-4", children: [_jsx("span", { className: "w-24 shrink-0 text-sm text-[#111827]", children: "Subject" }), _jsx("input", { placeholder: "Subject", className: "flex-1 bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]", ...register("subject") })] }), _jsxs("div", { className: "flex flex-wrap items-center gap-8 py-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "text-sm text-[#111827]", children: "Delay between 2 emails" }), _jsx("input", { type: "number", placeholder: "00", className: "h-10 w-16 rounded-[8px] border border-[#E5E7EB] bg-white text-center text-sm text-[#111827] outline-none focus:border-[#00A63E]", ...register("delayBetweenEmails") })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "text-sm text-[#111827]", children: "Hourly Limit" }), _jsx("input", { type: "number", placeholder: "00", className: "h-10 w-16 rounded-[8px] border border-[#E5E7EB] bg-white text-center text-sm text-[#111827] outline-none focus:border-[#00A63E]", ...register("hourlyLimit") })] })] })] }), _jsxs("div", { className: "mt-4 min-h-[420px] rounded-[16px] bg-[#F4F7F5] p-4", children: [_jsx("textarea", { placeholder: "Type Your Reply...", rows: 8, className: "w-full resize-none bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]", ...register("body") }), _jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-3 rounded-full bg-white px-4 py-2.5 text-[#6B7280] shadow-sm", children: [_jsx(Undo2, { className: "h-4 w-4" }), _jsx(Redo2, { className: "h-4 w-4" }), _jsx("span", { className: "h-4 w-px bg-[#E5E7EB]" }), _jsx(Bold, { className: "h-4 w-4" }), _jsx(Italic, { className: "h-4 w-4" }), _jsx(Underline, { className: "h-4 w-4" }), _jsx("span", { className: "h-4 w-px bg-[#E5E7EB]" }), _jsx(ListOrdered, { className: "h-4 w-4" }), _jsx(List, { className: "h-4 w-4" }), _jsx("span", { className: "h-4 w-px bg-[#E5E7EB]" }), _jsx(Quote, { className: "h-4 w-4" }), _jsx(Strikethrough, { className: "h-4 w-4" })] })] })] }) }));
}
