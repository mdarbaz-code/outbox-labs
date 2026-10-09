import type { MailboxEmail, ScheduledEmail } from "./types";

export const scheduledSeedData: ScheduledEmail[] = [
  {
    id: "sch-1",
    to: "John Smith",
    subject: "Meeting follow-up - Scheduled",
    preview: "Hi John, just wanted to follow up on our meeting...",
    scheduledAt: "Tue 9:15:12 AM",
  },
  {
    id: "sch-2",
    to: "Olive",
    subject: "Ramit, great to meet you - you'll love it",
    preview: "Hi Olive, just wanted to follow up on our meeting...",
    scheduledAt: "Thu 8:15:12 PM",
  },
];

export const sentSeedData: MailboxEmail[] = [
  {
    id: "sent-1",
    to: "Sarah Wilson",
    subject: "Re: Project Update",
    preview: "Thanks for the update, Sarah. Looks good!",
  },
  {
    id: "sent-2",
    to: "Support",
    subject: "Issue with login",
    preview: "I am having trouble logging in to the dashboard...",
  },
];
