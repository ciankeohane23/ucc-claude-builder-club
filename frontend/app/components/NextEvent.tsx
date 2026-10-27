"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { ComingSoonCard, UpcomingEventCard } from "./EventCard";
import { useCalendarEvents } from "../lib/useCalendarEvents";

export default function NextEvent() {
  const { upcoming, loading } = useCalendarEvents();

  return (
    <section className="relative pb-8 pt-2" aria-labelledby="next-event-heading">
      <div className="container-wide">
        <div className="mb-6 flex items-baseline justify-between gap-4 sm:mb-8">
          <h2
            id="next-event-heading"
            className="font-sans text-sm font-medium uppercase tracking-wider text-primary"
          >
            Next Event
          </h2>
          <Link href="/events" className="text-sm text-foreground/70 transition-colors hover:text-primary">
            See all events
          </Link>
        </div>

        <Reveal>
          {loading ? (
            <div className="card-soft animate-pulse space-y-3 rounded-2xl p-6 shadow-lift lg:p-8" aria-label="Loading next event">
              <div className="h-7 w-2/3 rounded bg-cream" />
              <div className="h-4 w-full rounded bg-cream" />
              <div className="h-4 w-1/2 rounded bg-cream" />
            </div>
          ) : upcoming[0] ? (
            <UpcomingEventCard event={upcoming[0]} />
          ) : (
            <ComingSoonCard />
          )}
        </Reveal>
      </div>
    </section>
  );
}
