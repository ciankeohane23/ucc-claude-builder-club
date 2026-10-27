// ============================================================
// EVENT EXTRAS
// ============================================================
// Google Calendar stays the source of truth for events. This file adds what a
// calendar entry can't hold: a poster/photo, an Instagram link, a better title
// or description, or a correction when plans changed after the entry was made.
//
// Key each entry by the event's start date in Irish time ("YYYY-MM-DD", as it
// appears in Google Calendar). Every field is optional. Put images in
// frontend/public/images/events/.
// ============================================================

export interface EventExtras {
  title?: string;
  description?: string;
  location?: string;
  image?: string;
  link?: string;
  // Corrected start/end, as ISO strings with the Irish offset
  start?: string;
  end?: string;
}

const INSTAGRAM_POST = "https://www.instagram.com/p/";

export const EVENT_EXTRAS: Record<string, EventExtras> = {
  "2026-03-16": {
    title: "Tech Talk with Joe Feller",
    description:
      "A tech talk with Joe Feller, plus a chance to explore AI tools, share ideas and build projects with Claude.",
    location: "G79/G80, O'Rahilly Building",
    image: "/images/events/tech-talk-joe-feller.jpg",
    link: `${INSTAGRAM_POST}DV36Gi_DHXl/`,
  },
  "2026-03-19": {
    title: "Building MCP Workshop",
    description:
      "A hands-on workshop on the Model Context Protocol: how to connect Claude to real-world tools.",
    image: "/images/events/mcp-workshop.jpg",
    link: `${INSTAGRAM_POST}DWCbsPoABsj/`,
  },
  "2026-03-24": {
    title: "BIS × Zartis × Claude Builders Club Hackathon",
    description:
      "A hackathon for 2nd year BIS students, run with Zartis. Prizes of €1,500 for first place, €1,000 for second and €500 for third.",
    location: "G79/G80, O'Rahilly Building",
  },
  "2026-03-26": {
    title: "Building with Agents Workshop",
    description:
      "Stop building apps, start building agents. A hands-on session on letting Claude do the thinking.",
    location: "UCC",
    image: "/images/events/agents-workshop.jpg",
    link: `${INSTAGRAM_POST}DWOz5OgDE0H/`,
  },
  "2026-03-30": {
    title: "Study Smarter with Claude Pro",
    description: "Learn how to increase your study efficiency with Claude Pro.",
    location: "UCC",
  },
  // Moved from 2 April to 16 April (per the club's Instagram announcement)
  "2026-04-02": {
    title: "End of Year Hackathon",
    description:
      "A team-based hackathon hosted by the club. Teams brought their ideas and competed for €1,500 worth of API credits.",
    location: "G79/G80, O'Rahilly Building",
    image: "/images/events/end-of-year-hackathon.jpg",
    link: `${INSTAGRAM_POST}DXE1ls9DNBR/`,
    start: "2026-04-16T12:00:00+01:00",
    end: "2026-04-16T18:00:00+01:00",
  },
};
