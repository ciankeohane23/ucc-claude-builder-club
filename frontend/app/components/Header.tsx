"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeMenu from "./ThemeMenu";
import { JOIN_URL } from "../lib/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Build", href: "/build" },
  { label: "Events", href: "/events" },
  { label: "Partnership", href: "/partnership" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "border-b border-foreground/10 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/claude_logo.svg"
            alt=""
            width={28}
            height={28}
            className="h-6 w-6 transition-transform duration-500 ease-out group-hover:rotate-45"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Claude Builders Club
          </span>
          <span className="hidden text-sm text-foreground/70 sm:inline">UCC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-[15px] text-foreground/80 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : ""}`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeMenu />
          <Link
            href="/#assistant"
            className="inline-flex h-10 items-center rounded-lg border border-primary/40 px-4 text-[15px] text-foreground transition-colors hover:border-primary hover:bg-primary/5"
          >
            Ask the Assistant
          </Link>
          <a
            href={JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-lg bg-foreground px-4 text-[15px] font-medium text-background transition-opacity hover:opacity-90"
          >
            Join the Club
          </a>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeMenu />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`grid transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="container-wide flex flex-col gap-1 pb-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-foreground text-base font-medium text-background"
            >
              Join the Club
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
