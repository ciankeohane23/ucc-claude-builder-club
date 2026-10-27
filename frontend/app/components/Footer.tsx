import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CLUB_EMAIL, INSTAGRAM_URL, JOIN_URL } from "../lib/site";

const COLUMNS = [
  {
    title: "Build",
    links: [
      { label: "Guides & Workshops", href: "/build" },
      { label: "Events", href: "/events" },
      { label: "Claude", href: "https://claude.ai", external: true },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join the Club", href: JOIN_URL, external: true },
      { label: "About the Club", href: "/about" },
      { label: "All Links", href: "/links" },
      { label: "Anthropic", href: "https://www.anthropic.com", external: true },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Email", href: `mailto:${CLUB_EMAIL}`, external: true },
      { label: "Instagram", href: INSTAGRAM_URL, external: true },
      { label: "Partner With Us", href: "/partnership" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-on-ink">
      <div className="container-wide py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold">Claude Builders Club</p>
            <p className="mt-3 max-w-xs text-sm text-on-ink/60">
              Building the future of AI at University College Cork.
            </p>
            <a
              href="https://www.anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs text-on-ink/50 transition-colors hover:text-on-ink"
              aria-label="Backed by Anthropic"
            >
              Backed by
              <img src="/images/Anthropic_Logo.svg" alt="Anthropic" className="h-2.5 w-auto brightness-0 invert" />
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="inline-block border-b-2 border-primary pb-1 text-sm font-semibold">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-on-ink/70">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                      >
                        {link.label}
                        <FaExternalLinkAlt className="h-2.5 w-2.5 opacity-60" />
                      </a>
                    ) : (
                      <Link href={link.href} className="transition-colors hover:text-primary">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-on-ink/50">
          &copy; {new Date().getFullYear()} University College Cork Claude Builders Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
