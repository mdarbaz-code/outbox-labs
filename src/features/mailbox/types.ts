export interface MailboxEmail {
  id: string;
  to: string;
  subject: string;
  preview: string;
  starred?: boolean;
}

export interface ScheduledEmail extends MailboxEmail {
  scheduledAt: string;
}
