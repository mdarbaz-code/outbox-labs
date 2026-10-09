import { Download, FileImage } from "lucide-react";
export function EmailDetailsContent({ email }) {
 const attachments = email.attachments || [];
 if (!attachments.length) return null;
 return <section className="detail-attachments"><div className="detail-attachments-heading"><div><span>FILES</span><h2>Attachments <small>{attachments.length}</small></h2></div><button type="button" onClick={()=>window.print()}><Download size={15}/> Save / print</button></div><div className="detail-attachment-grid">{attachments.map(file=><a key={file.id} href={file.url || "#"} onClick={e=>{if(!file.url || file.url==="#"){e.preventDefault();window.alert(`${file.name} is a sample attachment preview.`)}}} className="detail-attachment-card"><div className="detail-attachment-preview">{file.thumbnail ? <img src={file.thumbnail} alt={file.name}/> : <FileImage size={30}/>}</div><div className="detail-attachment-meta"><strong>{file.name}</strong><span>{file.size || "Attachment"}</span></div><Download size={15} className="detail-attachment-download"/></a>)}</div></section>;
}
