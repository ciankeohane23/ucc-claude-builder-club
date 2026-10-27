// ============================================================
// MANUAL EVENTS
// ============================================================
// Events listed here show on the homepage and Events page alongside the
// Google Calendar ones, without needing a calendar entry. They move to
// "Past Events" by themselves once the day has passed.
//
// Give start/end as ISO strings with the Irish offset: +00:00 in winter
// (late October to late March), +01:00 in summer.
// ============================================================

import { CalendarEvent, formatTime } from "./calendar";

interface ManualEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  location: string;
  description: string;
  type: CalendarEvent["type"];
  tags?: string[];
  image?: string;
  link?: string;
}

const EVENTS: ManualEvent[] = [
  {
    id: "2026-10-28-meetup-1",
    title: "CBC Meetup #1",
    start: "2026-10-28T17:00:00+00:00",
    end: "2026-10-28T18:00:00+00:00",
    location: "Sustainable Futures Lab, Civil Engineering Building",
    description:
      "Our first monthly meetup of the year. Come meet the club, hear what's planned for the year and start building with Claude. Everyone welcome, no experience needed. Everyone who comes gets 3 free months of Claude Pro.",
    type: "meeting",
    tags: ["3 months of free Claude Pro"],
  },
];

export const MANUAL_EVENTS: CalendarEvent[] = EVENTS.map((e) => ({
  id: e.id,
  title: e.title,
  date: new Date(e.start),
  startTime: formatTime(e.start),
  endTime: formatTime(e.end),
  location: e.location,
  type: e.type,
  description: e.description,
  isFlagship: false,
  tags: e.tags,
  image: e.image,
  link: e.link,
}));
