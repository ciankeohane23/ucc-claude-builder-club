import { FaArrowRight, FaCalendarAlt, FaCalendarPlus, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { CalendarEvent } from "../lib/calendar";
import { JOIN_URL } from "../lib/site";

export const TYPE_LABELS: Record<CalendarEvent["type"], string> = {
  meeting: "General Meeting",
  tabling: "Club Stand",
  hackathon: "Hackathon",
  workshop: "Workshop",
  demo: "Demo Day",
  social: "Social",
  speaker: "Tech Talk",
  other: "Event",
};

// Club line drawing shown when a past event has no poster or photo
const FALLBACK_ART: Partial<Record<CalendarEvent["type"], string>> = {
  hackathon: "/images/claude-icons/lightning.png",
  workshop: "/images/claude-icons/lightbulb.png",
  speaker: "/images/claude-icons/lightbulb.png",
};

function formatWhen(event: CalendarEvent) {
  const day = event.date.toLocaleDateString("en-IE", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Dublin",
  });
  if (event.startTime === "All Day") return day;
  return `${day} • ${event.startTime}${event.endTime ? ` - ${event.endTime}` : ""}`;
}

function addToCalendarUrl(event: CalendarEvent) {
  const start = event.date.toISOString().replace(/-|:|\.\d+/g, "");
  const endDate = new Date(event.date);
  endDate.setHours(endDate.getHours() + 2);
  const end = endDate.toISOString().replace(/-|:|\.\d+/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${start}/${end}`,
    details: event.description,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

function Meta({ event }: { event: CalendarEvent }) {
  return (
    <p className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/70">
      <span className="flex items-center gap-2">
        <FaCalendarAlt className="h-3.5 w-3.5 shrink-0" />
        {formatWhen(event)}
      </span>
      <span className="flex items-center gap-2">
        <FaMapMarkerAlt className="h-3.5 w-3.5 shrink-0" />
        {event.location}
      </span>
    </p>
  );
}

export function UpcomingEventCard({ event }: { event: CalendarEvent }) {
  return (
    <article className="card-soft group flex flex-col overflow-hidden rounded-2xl shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-lift-lg lg:flex-row">
      <div className="flex-1 p-6 lg:p-8">
        <h3 className="mb-2 text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-3xl">
          {event.title}
        </h3>
        {event.description && (
          <p className="mb-4 whitespace-pre-line text-foreground/75">{event.description}</p>
        )}
        <Meta event={event} />
        <ul className="flex flex-wrap gap-2">
          <li className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {TYPE_LABELS[event.type]}
          </li>
          {event.isFlagship && (
            <li className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Featured
            </li>
          )}
          {event.tags?.map((tag) => (
            <li key={tag} className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center gap-3 p-6 pt-0 lg:w-80 lg:p-8">
        <a
          href={JOIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-medium text-background shadow-lift transition-all duration-300 hover:shadow-lift-lg"
        >
          Register Now
          <FaArrowRight className="h-3.5 w-3.5" />
        </a>
        <a
          href={addToCalendarUrl(event)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
        >
          <FaCalendarPlus className="h-3.5 w-3.5" />
          Add to calendar
        </a>
      </div>
    </article>
  );
}

export function ComingSoonCard() {
  return (
    <article className="card-soft group flex flex-col overflow-hidden rounded-2xl shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-lift-lg lg:flex-row">
      <div className="flex-1 p-6 lg:p-8">
        <h3 className="mb-2 text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-3xl">
          Next event coming soon
        </h3>
        <p className="text-foreground/75">
          We&apos;re planning this year&apos;s workshops, tech talks and hackathons. Sign up and
          you&apos;ll be the first to hear when the next one is announced.
        </p>
      </div>
      <div className="flex flex-col justify-center p-6 pt-0 lg:w-80 lg:p-8">
        <a
          href={JOIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-medium text-background shadow-lift transition-all duration-300 hover:shadow-lift-lg"
        >
          Get Notified
          <FaArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

export function PastEventCard({ event }: { event: CalendarEvent }) {
  const art = FALLBACK_ART[event.type] ?? "/images/claude-icons/shapes.png";

  return (
    <article className="card-soft group flex flex-col-reverse gap-6 overflow-hidden rounded-2xl p-6 shadow-lift transition-all duration-300 hover:shadow-lift-lg sm:flex-row sm:items-center lg:p-8">
      <div className="min-w-0 flex-1">
        <h3 className="mb-2 text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-3xl">
          {event.title}
        </h3>
        {event.description && (
          <p className="mb-4 whitespace-pre-line text-foreground/75">{event.description}</p>
        )}
        <Meta event={event} />
        {event.link ? (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-foreground/15 px-4 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <FaInstagram className="h-3.5 w-3.5" />
            View Post
            <FaArrowRight className="h-3 w-3" />
          </a>
        ) : (
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {TYPE_LABELS[event.type]}
          </span>
        )}
      </div>
      <div className="w-full shrink-0 overflow-hidden rounded-xl sm:w-36 lg:w-40">
        {event.image ? (
          <img
            src={event.image}
            alt={`${event.title} poster`}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex aspect-[4/5] w-full items-center justify-center bg-[#eee2d7]">
            <img src={art} alt="" className="h-1/2 w-auto" />
          </div>
        )}
      </div>
    </article>
  );
}
