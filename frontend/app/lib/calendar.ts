// ============================================================
// Google Calendar API Integration
// ============================================================

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  type: EventType;
  description: string;
  isFlagship: boolean;
}

export type EventType =
  | "meeting"
  | "tabling"
  | "hackathon"
  | "workshop"
  | "demo"
  | "social"
  | "speaker"
  | "other";

// Google Calendar API response types
interface GoogleCalendarEvent {
  id: string;
  summary?: string;
  description?: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  colorId?: string;
}

interface GoogleCalendarResponse {
  items: GoogleCalendarEvent[];
  error?: {
    code: number;
    message: string;
  };
}

// Map Google Calendar color IDs to event types
// Google Calendar colors: https://developers.google.com/calendar/api/v3/reference/colors
const COLOR_TO_TYPE: Record<string, EventType> = {
  "1": "other", // Lavender
  "2": "demo", // Sage (green)
  "3": "hackathon", // Grape → we'll use for hackathons (purple-ish)
  "4": "social", // Flamingo (pink)
  "5": "workshop", // Banana (yellow)
  "6": "hackathon", // Tangerine (orange) - flagship
  "7": "tabling", // Peacock (teal)
  "8": "other", // Graphite
  "9": "workshop", // Blueberry (blue)
  "10": "demo", // Basil (green)
  "11": "hackathon", // Tomato (red/orange)
};

// Keywords in title/description that indicate event type
const TYPE_KEYWORDS: Record<EventType, string[]> = {
  meeting: ["meeting", "gm", "general meeting", "gm#", "general mtg"],
  tabling: ["tabling", "table", "recruitment", "speedway"],
  hackathon: ["hackathon", "hack", "buildathon", "claudehacks"],
  workshop: ["workshop", "tutorial", "hands-on", "learn", "intro to"],
  demo: ["demo", "showcase", "presentation", "show and tell"],
  social: ["social", "hangout", "mixer", "party", "networking"],
  speaker: ["guest speaker", "speaker", "talk", "fireside", "keynote", "guest lecture"],
  other: [],
};

// Keywords that indicate a flagship/featured event
const FLAGSHIP_KEYWORDS = [
  "flagship",
  "featured",
  "main event",
  "hackathon",
  "claudehacks",
  "★",
  "⭐",
];

function detectEventType(event: GoogleCalendarEvent): EventType {
  const title = (event.summary || "").toLowerCase();
  const description = (event.description || "").toLowerCase();
  const combined = `${title} ${description}`;

  // First, check for keyword matches (more reliable than colors)
  for (const [type, keywords] of Object.entries(TYPE_KEYWORDS)) {
    if (keywords.some((keyword) => combined.includes(keyword))) {
      return type as EventType;
    }
  }

  // Fall back to color-based detection
  if (event.colorId && COLOR_TO_TYPE[event.colorId]) {
    return COLOR_TO_TYPE[event.colorId];
  }

  return "other";
}

function detectIsFlagship(event: GoogleCalendarEvent): boolean {
  const title = (event.summary || "").toLowerCase();
  const description = (event.description || "").toLowerCase();
  const combined = `${title} ${description}`;

  return FLAGSHIP_KEYWORDS.some((keyword) => combined.includes(keyword));
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').trim();
}

function formatTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function parseGoogleEvent(event: GoogleCalendarEvent): CalendarEvent {
  // Handle all-day events vs timed events
  const startDateTime = event.start.dateTime || event.start.date || "";
  const endDateTime = event.end.dateTime || event.end.date || "";

  const isAllDay = !event.start.dateTime;

  return {
    id: event.id,
    title: event.summary || "Untitled Event",
    date: new Date(startDateTime),
    startTime: isAllDay ? "All Day" : formatTime(startDateTime),
    endTime: isAllDay ? "" : formatTime(endDateTime),
    location: event.location || "TBA",
    type: detectEventType(event),
    description: event.description ? stripHtml(event.description) : "No description provided.",
    isFlagship: detectIsFlagship(event),
  };
}

export async function fetchCalendarEvents(): Promise<{
  events: CalendarEvent[];
  error: string | null;
}> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
  const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;

  if (!apiKey || !calendarId) {
    console.error("Missing Google Calendar API key or Calendar ID");
    return {
      events: [],
      error: "Calendar configuration missing. Please check environment variables.",
    };
  }

  // Fetch events from now onwards (or past month for testing)
  const timeMin = new Date();
  timeMin.setMonth(timeMin.getMonth() - 1); // Show events from past month too

  const timeMax = new Date();
  timeMax.setMonth(timeMax.getMonth() + 6); // Show events up to 6 months ahead

  const params = new URLSearchParams({
    key: apiKey,
    timeMin: timeMin.toISOString(),
    timeMax: timeMax.toISOString(),
    singleEvents: "true",
    orderBy: "startTime",
    maxResults: "50",
  });

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?${params}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Google Calendar API error:", errorData);
      return {
        events: [],
        error: `API Error: ${errorData.error?.message || response.statusText}`,
      };
    }

    const data: GoogleCalendarResponse = await response.json();

    if (data.error) {
      return {
        events: [],
        error: data.error.message,
      };
    }

    const events = (data.items || []).map(parseGoogleEvent);

    return { events, error: null };
  } catch (err) {
    console.error("Failed to fetch calendar events:", err);
    return {
      events: [],
      error: "Failed to connect to Google Calendar. Please try again later.",
    };
  }
}
