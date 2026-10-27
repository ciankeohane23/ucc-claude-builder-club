"use client";

import { useEffect, useRef, useState } from "react";
import { FaCheck, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

const OPTIONS = [
  { value: "light", label: "Light", icon: FaSun },
  { value: "dark", label: "Dark", icon: FaMoon },
] as const;

// Small dropdown for picking light or dark mode
export default function ThemeMenu() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const Current = theme === "dark" ? FaMoon : FaSun;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
        aria-label="Choose light or dark mode"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Current className="h-4 w-4" />
      </button>

      {open && (
        <div
          role="menu"
          className="animate-fade-in absolute right-0 top-12 z-50 w-40 overflow-hidden rounded-xl border border-foreground/10 bg-surface p-1 shadow-lift-lg"
        >
          {OPTIONS.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              type="button"
              role="menuitemradio"
              aria-checked={theme === value}
              onClick={() => {
                setTheme(value);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-foreground/5 ${
                theme === value ? "text-primary" : "text-foreground"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="flex-1">{label}</span>
              {theme === value && <FaCheck className="h-3 w-3" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
