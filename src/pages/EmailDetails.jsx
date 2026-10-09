import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { EmailDetailsHeader } from "@/features/email/components/EmailDetailsHeader";
import { EmailDetailsSkeleton } from "@/features/email/components/EmailDetailsSkeleton";
import { emailDetailSeed } from "@/features/email/data";
import { inboxSeedData } from "@/features/inbox/data";
import { useScheduledEmails, useSentEmails, removeScheduledEmail, removeSentEmail } from "@/features/mailbox/store";
export function EmailDetailsPage() {
 const { id } = useParams(); const navigate = useNavigate();
 const scheduled = useScheduledEmails(); const sent = useSentEmails();
 const [isLoading, setIsLoading] = useState(true); const [flagged, setFlagged] = useState(false);
 useEffect(() => { const timer = window.setTimeout(() => setIsLoading(false), 180); return () => window.clearTimeout(timer); }, []);
 const email = useMemo(() => {
  const mailbox = [...scheduled.map(x=>({...x, _kind:"scheduled"})), ...sent.map(x=>({...x, _kind:"sent"}))].find(x=>x.id===id);
  if (mailbox) return { ...emailDetailSeed, id:mailbox.id, subject:mailbox.subject, sender:"Oliver Brown", senderEmail:"oliver.brown@domain.io", recipients:[mailbox.to], preview:mailbox.preview, body:mailbox.preview, receivedAt:mailbox.scheduledAt || "Just now", attachments:[], _kind:mailbox._kind };
  const inbox = inboxSeedData.find(x=>x.id===id);
  if (inbox) return { ...emailDetailSeed, id:inbox.id, subject:inbox.subject, sender:inbox.sender, preview:inbox.preview, body:`Hi Oliver,\n\n${inbox.preview}\n\nBest,\n${inbox.sender}`, receivedAt:inbox.receivedAt, attachments:[], _kind:"inbox" };
  return null;
 }, [id, scheduled, sent]);
 if (isLoading) return <EmailDetailsSkeleton />;
 if (!email) return <div className="email-detail-page"><div className="email-detail-body"><div className="detail-breadcrumb">MAILBOX <span>/</span> MESSAGE</div><h1 className="detail-subject">Message not found</h1><p className="detail-message-body">This message may have been removed or the link may be outdated.</p><button type="button" className="auth-submit" onClick={() => navigate("/inbox")}>Return to inbox</button></div></div>;
 const onDelete = () => { if (email._kind === "scheduled") removeScheduledEmail(id); else if (email._kind === "sent") removeSentEmail(id); toast.success("Email removed from this demo mailbox"); navigate(-1); };
 const onReply = () => navigate("/compose", { state:{ recipient: email.senderEmail || email.sender, subject:`Re: ${email.subject}` } });
 return <div className="email-detail-page"><EmailDetailsHeader email={email} flagged={flagged} onFlag={() => { setFlagged(x=>!x); toast.success(flagged ? "Flag removed" : "Email flagged"); }} onDelete={onDelete} onReply={onReply} /></div>;
}
