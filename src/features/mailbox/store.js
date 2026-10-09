import { useSyncExternalStore } from "react";
import { scheduledSeedData, sentSeedData } from "./data";
const read = (key, fallback) => { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch { return fallback; } };
let scheduled = read("outbox-scheduled", [...scheduledSeedData]);
let sent = read("outbox-sent", [...sentSeedData]);
const listeners = new Set();
function emit() { try { localStorage.setItem("outbox-scheduled", JSON.stringify(scheduled)); localStorage.setItem("outbox-sent", JSON.stringify(sent)); } catch {} listeners.forEach((listener) => listener()); }
function subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); }
export function addSentEmail(email) { sent = [{ id: `sent-${Date.now()}`, createdAt: new Date().toISOString(), ...email }, ...sent]; emit(); }
export function addScheduledEmail(email) { scheduled = [{ id: `sch-${Date.now()}`, createdAt: new Date().toISOString(), ...email }, ...scheduled]; emit(); }
export function removeScheduledEmail(id) { scheduled = scheduled.filter((email) => email.id !== id); emit(); }
export function removeSentEmail(id) { sent = sent.filter((email) => email.id !== id); emit(); }
export function toggleEmailStar(id, type) { const list = type === "scheduled" ? scheduled : sent; const updated = list.map((email) => email.id === id ? { ...email, starred: !email.starred } : email); if (type === "scheduled") scheduled = updated; else sent = updated; emit(); }
export function useSentEmails() { return useSyncExternalStore(subscribe, () => sent); }
export function useScheduledEmails() { return useSyncExternalStore(subscribe, () => scheduled); }
