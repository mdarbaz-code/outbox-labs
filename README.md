# Outbox Labs — JavaScript edition

A polished email-workspace UI built with React, Vite, Tailwind CSS v4 and Lucide icons. This version uses JavaScript/JSX rather than TypeScript.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## What is included

- Responsive workspace navigation for Inbox, Scheduled, Sent and Compose
- Searchable scheduled and sent mail lists; sidebar counts derive from the current local data
- Local persistence for sent and scheduled demo messages, plus working star toggles
- Inbox list, email detail, attachment previews, compose/send and send-later flows
- Separate login and signup screens (demo-only local account state)
- Visual refresh for sidebar, mailbox rows, compose surface, auth pages, spacing and mobile layout

## Important

This is a front-end demo. Login/signup are not secure production authentication, and sending/scheduling is stored in the browser only. Connect an API and authentication provider before using real email accounts.


## Frontend QA
See [FRONTEND-QA.md](./FRONTEND-QA.md) for the screen-by-screen smoke-test checklist and current demo limitations.
