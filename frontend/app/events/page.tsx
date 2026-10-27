"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { ComingSoonCard, PastEventCard, UpcomingEventCard } from "../components/EventCard";
import { useCalendarEvents } from "../lib/useCalendarEvents";

function SectionLabel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-6 font-sans text-sm font-medium uppercase tracking-wider text-primary sm:mb-8">
      {children}
    </h2>
  );
}

function CardSkeleton() {
  return (
    <div className="card-soft animate-pulse space-y-3 rounded-2xl p-6 shadow-lift lg:p-8" aria-label="Loading events">
      <div className="h-8 w-2/3 rounded bg-cream" />
      <div className="h-4 w-full rounded bg-cream" />
      <div className="h-4 w-1/2 rounded bg-cream" />
    </div>
  );
}

export default function EventsPage() {
  const { upcoming, past, loading, error } = useCalendarEvents();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative -mt-16 overflow-hidden pb-12 pt-32 sm:-mt-[72px] sm:pb-16 sm:pt-40">
          <div aria-hidden className="hero-wash pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_50%,transparent)]" />
          <div className="container-wide relative">
            <div className="rise-in max-w-3xl">
              <h1 className="text-display font-semibold text-foreground">
                Workshops, Talks &amp; Hackathons
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/75 sm:text-xl">
                From hands-on workshops to full-day hackathons, our events are where UCC students
                learn, team up and build real things with Claude.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming */}
        <section className="pb-16 sm:pb-20" aria-labelledby="upcoming-heading">
          <div className="container-wide">
            <SectionLabel id="upcoming-heading">Upcoming Events</SectionLabel>
            <div className="flex flex-col gap-6">
              {loading ? (
                <CardSkeleton />
              ) : upcoming.length > 0 ? (
                upcoming.map((event, i) => (
                  <Reveal key={event.id} delay={i * 80}>
                    <UpcomingEventCard event={event} />
                  </Reveal>
                ))
              ) : (
                <Reveal>
                  <ComingSoonCard />
                </Reveal>
              )}
              {!loading && error && (
                <p className="text-sm text-foreground/60">
                  We couldn&apos;t load the events calendar just now. Please try again later.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Past */}
        {(loading || past.length > 0) && (
          <section className="pb-24 sm:pb-32" aria-labelledby="past-heading">
            <div className="container-wide">
              <SectionLabel id="past-heading">Past Events</SectionLabel>
              <div className="flex flex-col gap-6">
                {loading ? (
                  <CardSkeleton />
                ) : (
                  past.map((event) => (
                    <Reveal key={event.id}>
                      <PastEventCard event={event} />
                    </Reveal>
                  ))
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
