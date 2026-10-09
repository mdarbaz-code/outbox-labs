import type { InboxEmail } from "./types";

export const inboxSeedData: InboxEmail[] = [
  {
    id: "1",
    sender: "Maya Chen",
    subject: "Quarterly campaign review",
    preview:
      "Here are the latest engagement insights and launch notes for this quarter.",
    receivedAt: "10:30 AM",
    unread: true,
    category: "Marketing",
  },
  {
    id: "2",
    sender: "Alicia Brooks",
    subject: "Design system handoff",
    preview:
      "The final tokens and components are ready for review before the release.",
    receivedAt: "9:05 AM",
    unread: false,
    category: "Design",
  },
  {
    id: "3",
    sender: "Jordan Patel",
    subject: "Product launch checklist",
    preview:
      "I attached the updated checklist and rollout timeline for the team.",
    receivedAt: "Yesterday",
    unread: true,
    category: "Product",
  },
  {
    id: "4",
    sender: "Nina Alvarez",
    subject: "Customer feedback summary",
    preview:
      "The latest feedback trends suggest stronger retention in the onboarding flow.",
    receivedAt: "Yesterday",
    unread: false,
    category: "Support",
  },
];
