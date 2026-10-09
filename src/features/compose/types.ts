export interface ComposeFormValues {
  recipients: string[];
  subject: string;
  body: string;
  attachmentNames: string[];
  sendLaterAt?: string;
  delayBetweenEmails?: string;
  hourlyLimit?: string;
}
