"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import CopyEmail from "./CopyEmail";

// "Get in Touch" button that opens a small panel with the address and ways to
// write to it. A bare mailto: link does nothing in browsers with no email app
// set up, so webmail compose links are offered too.
export default function ContactButton({ email, subject }: { email: string; subject: string }) {
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

  const to = encodeURIComponent(email);
  const su = encodeURIComponent(subject);
  const options = [
    { label: "Open in Gmail", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}`, external: true },
    { label: "Open in Outlook", href: `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${su}`, external: true },
    { label: "Use my email app", href: `mailto:${email}?subject=${su}`, external: false },
  ];

  return (
    <div ref={ref} className="relative lg:mx-3">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 font-medium text-white shadow-lift transition-all duration-300 hover:bg-primary-dark hover:shadow-lift-lg"
      >
        Get in Touch
        <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Contact the club"
          className="animate-fade-in absolute left-1/2 top-14 z-40 w-72 -translate-x-1/2 rounded-2xl border border-foreground/10 bg-surface p-4 text-left shadow-lift-lg"
        >
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <FaEnvelope className="h-3.5 w-3.5 text-primary" />
            Email the club
          </p>
          <div className="-mx-3 mt-1">
            <CopyEmail email={email} />
          </div>
          <div className="mt-3 flex flex-col gap-1 border-t border-foreground/10 pt-3">
            {options.map((o) => (
              <a
                key={o.label}
                href={o.href}
                target={o.external ? "_blank" : undefined}
                rel={o.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-foreground/5 hover:text-primary"
              >
                {o.label}
                {o.external && <FaExternalLinkAlt className="h-3 w-3 opacity-50" />}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
