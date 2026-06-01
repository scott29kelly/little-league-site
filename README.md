# Little League Site Demo

Client-safe demo for a youth baseball league website that works alongside SportsConnect today and the PlayMetrics transition path later.

The first goal is to show a polished public website experience for parents, sponsors, coaches, and board members without replacing the league's approved registration platform.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Positioning

- The public website should make league information easy for families to find.
- Registration, background checks, and official league records should stay in the approved platform.
- The demo uses neutral placeholder branding until the client provides exact league assets.
- Pricing is intentionally omitted from the repository and demo pages so nothing sensitive appears during a client screen share.

## Demo Focus

- Parent actions: registration path, schedules, field status, announcements, FAQs.
- Board operations: volunteer signups, sponsor visibility, contact routing, calendar clarity.
- Transition readiness: keep SportsConnect links easy to update as PlayMetrics integration progresses.

## Useful Docs

- [PRD](docs/PRD.md)
- [Client Discovery](docs/CLIENT_DISCOVERY.md)
- [Offer Notes](docs/OFFER.md)
- [Research Notes](docs/RESEARCH_NOTES.md)

## Scripts

```bash
npm run lint
npm run build
```

## Deployment

This project uses Next.js App Router and is intended to stay Vercel-compatible. It currently uses static content and local assets only.
