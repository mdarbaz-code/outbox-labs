# Outbox Labs — Frontend QA checklist

This build is a frontend portfolio demo. Mailbox data is seeded/local; login, Google sign-in, forwarding, and delivery are not connected to a production backend/provider.

## Run
1. Open the folder containing `package.json` in VS Code.
2. Run `npm install`.
3. Run `npm run dev`.
4. Run `npm run build` and `npm run lint` before committing.

## Screen-by-screen smoke tests

- [ ] `/login`: required email/password errors appear; submit enters demo workspace; signup link opens `/signup`.
- [ ] `/signup`: name/email/password validation works; password requires at least 8 characters; sign-in link returns to login.
- [ ] `/inbox`: search filters sender, subject and preview; category filter works; pagination updates; selecting a message opens details.
- [ ] `/scheduled`: list count equals visible scheduled dataset count; search works; star toggles; open a message; delete removes it from local demo list.
- [ ] `/sent`: list count equals visible sent dataset count; search works; star toggles; open a message; delete removes it from local demo list.
- [ ] `/compose`: missing recipient/subject is rejected; send creates a sent demo item; Send Later creates a scheduled demo item; refresh page and confirm local demo data persists.
- [ ] `/email/:id`: valid inbox/sent/scheduled messages open; reply pre-fills recipient and subject; flag action toggles; delete works for sent/scheduled items; invalid ID shows “Message not found”.
- [ ] Responsive: test widths around 375px, 768px, 1024px and desktop; no horizontal overflow or hidden primary actions.
- [ ] Accessibility: keyboard Tab focus is visible; buttons have accessible names; mail rows open with Enter and Space.

## Before portfolio release
- [ ] `npm run build` succeeds.
- [ ] `npm run lint` succeeds (fix existing lint configuration/rules if it fails).
- [ ] Check browser DevTools Console and Network for errors.
- [ ] Add screenshots/GIF to README and describe demo-only behavior honestly.
