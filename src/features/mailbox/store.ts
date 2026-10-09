import { useSyncExternalStore } from "react";
import { scheduledSeedData, sentSeedData } from "./data";
import type { MailboxEmail, ScheduledEmail } from "./types";

let scheduled: ScheduledEmail[] = [...scheduledSeedData];
let sent: MailboxEmail[] = [...sentSeedData];
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function addSentEmail(email: Omit<MailboxEmail, "id">) {
  sent = [{ id: `sent-${Date.now()}`, ...email }, ...sent];
  emit();
}

export function addScheduledEmail(email: Omit<ScheduledEmail, "id">) {
  scheduled = [{ id: `sch-${Date.now()}`, ...email }, ...scheduled];
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useSentEmails() {
  return useSyncExternalStore(subscribe, () => sent);
}

export function useScheduledEmails() {
  return useSyncExternalStore(subscribe, () => scheduled);
}
