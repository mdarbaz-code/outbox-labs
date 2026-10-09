export interface EmailDetail {
  id: string;
  sender: string;
  senderEmail?: string;
  recipients: string[];
  subject: string;
  preview: string;
  body: string;
  receivedAt: string;
  attachments: Attachment[];
}

export interface Attachment {
  id: string;
  name: string;
  size: string;
  type: string;
  url?: string;
  thumbnail?: string;
}
