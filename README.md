# Middletown-Neshaminy Baseball Site Demo

Client-safe demo for Middletown-Neshaminy Baseball, a chartered Little League in Middletown Township, Bucks County, PA.

The first goal is to show a polished public website experience for parents, sponsors, coaches, and board members without replacing Sports Connect, the league's approved registration platform.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Positioning

- The public website should make league information easy for families to find.
- Registration, background checks, and official league records should stay in Sports Connect.
- The demo uses a league-style logo, direct registration link, field names, sponsor names, and realistic placeholder photos.
- Pricing is intentionally omitted from the repository and demo pages so nothing sensitive appears during a client screen share.

## Demo Focus

- Parent actions: homepage overview, Sports Connect registration path, schedule and fields, game-day update, photo gallery, sponsors, volunteer information, FAQs.
- Board operations: volunteer signups, sponsor visibility, contact routing, calendar clarity.
- Transition readiness: keep Sports Connect links and transition copy easy to update when the league confirms final wording.

## Useful Docs

- [PRD](docs/PRD.md)
- [Client Discovery](docs/CLIENT_DISCOVERY.md)
- [Client Walkthrough Script](docs/CLIENT_WALKTHROUGH.md)
- [Offer Notes](docs/OFFER.md)
- [Research Notes](docs/RESEARCH_NOTES.md)

## Scripts

```bash
npm run lint
npm run build
```

## Deployment

This project uses Next.js App Router and is intended to stay Vercel-compatible. It currently uses static content and local assets only.
