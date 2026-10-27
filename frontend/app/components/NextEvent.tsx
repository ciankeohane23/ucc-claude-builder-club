"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { fetchCalendarEvents, CalendarEvent } from "../lib/calendar";
import { JOIN_URL } from "../lib/site";
import Reveal from "./Reveal";

const TYPE_LABELS: Record<CalendarEvent["type"], string> = {
  meeting: "General Meeting",
  tabling: "Club Stand",
  hackathon: "Hackathon",
  workshop: "Workshop",
  demo: "Demo Day",
  social: "Social",
  speaker: "Guest Speaker",
  other: "Event",
};

export default function NextEvent() {
  const [event, setEvent] = useState<CalendarEvent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCalendarEvents().then(({ events }) => {
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);
      const upcoming = events
        .filter((e) => e.date >= startOfToday)
        .sort((a, b) => a.date.getTime() - b.date.getTime());
      setEvent(upcoming[0] ?? null);
      setLoading(false);
    });
  }, []);

  return (
    <section className="relative pb-8 pt-2" aria-labelledby="next-event-heading">
      <div className="container-wide">
        <h2
          id="next-event-heading"
          className="mb-6 font-sans text-sm font-medium uppercase tracking-wider text-primary sm:mb-8"
        >
          Next Event
        </h2>

        <Reveal>
          <article className="card-soft group flex flex-col overflow-hidden rounded-2xl shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-lift-lg lg:flex-row">
            <div className="flex-1 p-6 lg:p-8">
              {loading ? (
                <div className="animate-pulse space-y-3" aria-label="Loading next event">
                  <div className="h-7 w-2/3 rounded bg-cream" />
                  <div className="h-4 w-full rounded bg-cream" />
                  <div className="h-4 w-1/2 rounded bg-cream" />
                </div>
              ) : event ? (
                <>
                  <h3 className="mb-2 text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {event.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-foreground/70">{event.description}</p>
                  <p className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/70">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="h-3.5 w-3.5" />
                      {event.date.toLocaleDateString("en-IE", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaClock className="h-3.5 w-3.5" />
                      {event.startTime}
                      {event.endTime && ` - ${event.endTime}`}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="h-3.5 w-3.5" />
                      {event.location}
                    </span>
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    <li className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                      {TYPE_LABELS[event.type]}
                    </li>
                    {event.isFlagship && (
                      <li className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                        Featured
                      </li>
                    )}
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="mb-2 text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    Next event coming soon
                  </h3>
                  <p className="text-foreground/70">
                    We&apos;re planning this year&apos;s workshops and build nights. Sign up and
                    you&apos;ll be the first to hear when the next one is announced.
                  </p>
                </>
              )}
            </div>

            <div className="flex flex-col justify-center gap-3 p-6 pt-0 lg:w-72 lg:p-8">
              <a
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-medium text-background shadow-lift transition-all duration-300 hover:shadow-lift-lg"
              >
                Get Notified
                <FaArrowRight className="h-3.5 w-3.5" />
              </a>
              <Link
                href="/events"
                className="text-center text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              >
                See all events
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
