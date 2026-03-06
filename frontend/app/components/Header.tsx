"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Slides", href: "/slides" },
  { label: "Links", href: "/links" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-8 sm:py-2.5 md:px-12">
        <Link href="/" className="group flex items-center gap-1.5 sm:gap-2">
          <Image
            src="/images/claude_logo.svg"
            alt="Claude logo"
            width={28}
            height={28}
            className="h-5 w-5 transition-transform duration-300 ease-out group-hover:rotate-12 sm:h-6 sm:w-6 md:h-7 md:w-7"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-sans text-xs font-bold tracking-tight text-foreground sm:text-sm md:text-base">
              University College Cork
            </span>
            <span className="text-[10px] font-semibold tracking-wide text-primary sm:text-xs md:text-sm">
              Claude Builder Club
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-foreground/70 md:flex lg:gap-8 lg:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-cream hover:text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FaTimes className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`grid transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-muted/20 bg-surface px-4 pb-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-medium text-foreground/70 transition-colors hover:bg-cream hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="h-[1.5px] w-full bg-primary" />
    </header>
  );
}
