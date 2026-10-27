# UCC Claude Builders Club Website

The website for the Claude Builders Club at University College Cork: a student community learning and building with Claude.

Live site: https://ucc-claude-builders.vercel.app

## Pages

| Page | What it shows |
|---|---|
| `/` | Homepage: animated hero, next event, what we do, why join, gallery, club assistant chatbot |
| `/about` | The club's mission and what members get |
| `/build` | Anthropic guides for each workshop topic, plus free courses |
| `/events` | Upcoming and past events, pulled from the club Google Calendar |
| `/partnership` | For companies who want to work with the club |
| `/links` | Quick links: sign-up form, socials, email |

## Updating content without touching code

**Events** come from the club's public Google Calendar. Add an event there and it shows on the homepage and Events page within 5 minutes. The event type (workshop, hackathon, tech talk, social...) is picked up from words in the title or description.

**Posters, Instagram links and corrections** for an event go in `frontend/app/lib/eventExtras.ts`, keyed by the event's date. Put poster images in `frontend/public/images/events/`.

**Gallery photos** live in `frontend/public/images/` and are listed in `frontend/app/components/Gallery.tsx`.

**Join form, email and Instagram links** are set once in `frontend/app/lib/site.ts`.

## Tech stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, hosted on Vercel. The chatbot uses the Anthropic API (`frontend/app/api/chat/route.ts`).

## Running it locally

```bash
cd frontend
bun install
cp .env.example .env.local   # then fill in the values
bun run dev
```

Environment variables (also set these in the Vercel project settings):

- `NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY`: a Google Cloud API key with the Calendar API enabled. Restrict it to the site's domain, because it is visible in the browser.
- `NEXT_PUBLIC_GOOGLE_CALENDAR_ID`: the club calendar's ID (Google Calendar settings, "Integrate calendar"). The calendar must be public.
- `ANTHROPIC_API_KEY`: for the club assistant chatbot. Server-side only.

Never commit `.env.local`.

## Deploying

Vercel deploys `main` automatically (root directory `frontend`). Pull requests get a preview deployment.

## Credits

Started from the open-source Claude Builder Club website template made by the Texas Claude Builder Club at UT Austin.
