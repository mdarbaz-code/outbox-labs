import { ArrowLeft, Flag, MoreVertical, Trash2, Reply, Forward, Archive } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { EmailDetailsContent } from "./EmailDetailsContent";
import { Avatar } from "@/components/shared/design-system/Avatar";
export function EmailDetailsHeader({ email, flagged = false, onFlag, onDelete, onReply }) {
 const navigate = useNavigate();
 const initials = (email.sender || "?").split(/\s+/).map(part=>part[0]).join("").slice(0,2).toUpperCase();
 return <div className="email-detail-shell">
  <div className="email-detail-toolbar"><button type="button" aria-label="Back to mailbox" onClick={()=>navigate(-1)} className="detail-icon-button"><ArrowLeft size={19}/></button><div className="detail-toolbar-spacer"/><button type="button" aria-label={flagged?"Remove flag":"Flag email"} onClick={onFlag} className={`detail-icon-button ${flagged?"detail-flagged":""}`}><Flag size={18}/></button><button type="button" aria-label="Delete email" onClick={onDelete} className="detail-icon-button"><Trash2 size={18}/></button><button type="button" aria-label="More options" onClick={()=>window.alert("Outbox demo: more message actions will be available when connected to an email provider.")} className="detail-icon-button"><MoreVertical size={18}/></button></div>
  <div className="email-detail-body"><div className="detail-breadcrumb">MAILBOX <span>/</span> MESSAGE</div><h1 className="detail-subject">{email.subject}</h1><div className="detail-sender-card"><Avatar fallback={initials} size="lg"/><div className="detail-sender-meta"><strong>{email.sender}</strong><span>{email.senderEmail ? `<${email.senderEmail}>` : "Message recipient"}</span><small>to {email.recipients?.join(", ") || "me"}</small></div><time>{email.receivedAt}</time></div><div className="detail-message-body">{email.body}</div><EmailDetailsContent email={email}/><div className="detail-reply-actions"><button type="button" onClick={onReply}><Reply size={16}/> Reply</button><button type="button" onClick={()=>window.alert("Forward is a demo action. Connect an email provider to forward messages.")}><Forward size={16}/> Forward</button><button type="button" onClick={()=>window.print()}><Archive size={16}/> Print message</button></div></div>
 </div>;
}
