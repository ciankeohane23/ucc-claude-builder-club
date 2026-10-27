"use client";

import { useEffect, useState } from "react";
import { fetchCalendarEvents, CalendarEvent } from "./calendar";
import { MANUAL_EVENTS } from "./manualEvents";

// Loads the club calendar once, adds the hand-listed events, and splits them
// into upcoming (soonest first) and past (most recent first) events
export function useCalendarEvents() {
  const [state, setState] = useState<{
    upcoming: CalendarEvent[];
    past: CalendarEvent[];
    loading: boolean;
    error: string | null;
  }>({ upcoming: [], past: [], loading: true, error: null });

  useEffect(() => {
    fetchCalendarEvents().then(({ events, error }) => {
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);
      const byDate = [...events, ...MANUAL_EVENTS].sort((a, b) => a.date.getTime() - b.date.getTime());
      setState({
        upcoming: byDate.filter((e) => e.date >= startOfToday),
        past: byDate.filter((e) => e.date < startOfToday).reverse(),
        loading: false,
        error,
      });
    });
  }, []);

  return state;
}
