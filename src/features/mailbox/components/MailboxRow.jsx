import { useNavigate } from "react-router-dom";
import { Star, Clock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { toggleEmailStar } from "@/features/mailbox/store";
export function MailboxRow({ id, to, subject, preview, starred = false, badge }) {
 const navigate = useNavigate(); const kind = badge?.kind === "scheduled" ? "scheduled" : "sent";
 return <article role="button" tabIndex={0} onClick={() => navigate(`/email/${id}`)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate(`/email/${id}`); } }} className="mail-row">
  <div className="mail-row-recipient"><span className="mail-row-avatar">{(to || "?").split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase()}</span><span className="mail-row-to">To: {to}</span></div>
  <span className={cn("mail-row-badge", kind === "scheduled" ? "mail-row-badge-scheduled" : "mail-row-badge-sent")}>{kind === "scheduled" ? <Clock size={14}/> : <span className="sent-dot"/>}{badge?.label || "Sent"}</span>
  <p className="mail-row-copy"><strong>{subject}</strong><span>{preview}</span></p>
  <div className="mail-row-actions"><button type="button" aria-label={starred ? "Unstar email" : "Star email"} onClick={(e)=>{e.stopPropagation();toggleEmailStar(id,kind)}} className="mail-star"><Star size={18} className={cn(starred && "is-starred")}/></button><ArrowUpRight className="mail-row-open" size={17}/></div>
 </article>;
}
