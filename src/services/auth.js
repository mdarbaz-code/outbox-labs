const USERS_KEY = "outbox-users";
const CURRENT_USER_KEY = "outbox-user";

function readUsers() {
  try {
    const value = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export async function signUp({ name, email, password }) {
  const normalizedEmail = email.trim().toLowerCase();
  const users = readUsers();
  if (users.some((user) => user.email.toLowerCase() === normalizedEmail)) {
    throw new Error("An account with this email already exists. Please sign in.");
  }
  // Demo-only storage. Never store real passwords this way in production.
  const user = { id: crypto.randomUUID?.() || String(Date.now()), name: name.trim(), email: normalizedEmail, password };
  localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]));
  const profile = { id: user.id, name: user.name, email: user.email };
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(profile));
  return profile;
}

export async function signIn({ email, password }) {
  const normalizedEmail = email.trim().toLowerCase();
  const user = readUsers().find((item) => item.email.toLowerCase() === normalizedEmail && item.password === password);
  if (!user) {
    throw new Error("Email or password is incorrect. If you're new, create an account first.");
  }
  const profile = { id: user.id, name: user.name, email: user.email, avatar: user.avatar || "" };
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(profile));
  return profile;
}

export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || "null");
  } catch {
    return null;
  }
}

export function updateCurrentUser(updates) {
  const current = getCurrentUser();
  if (!current) throw new Error("Please sign in first.");
  const updated = { ...current, ...updates, email: current.email };
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updated));
  const users = readUsers().map((user) => user.id === current.id ? { ...user, name: updated.name, avatar: updated.avatar } : user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return updated;
}

export function signOut() {
  localStorage.removeItem(CURRENT_USER_KEY);
}
