import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { JOIN_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "About · UCC Claude Builders Club",
  description:
    "The Claude Builders Club at University College Cork: a student community learning, building and shipping real projects with Claude.",
};

// From the club's spring 2026 sign-up poster
const MEMBER_PERKS = [
  "Free Claude Pro account",
  "Free API credits to build with",
  "Workshops and discussions with Anthropic",
  "Hackathons with real prizes",
  "Students with the same curiosity and drive",
  "Merch, prizes and more",
];

const YEAR_STEPS = [
  { title: "Join", desc: "Sign up, get your Claude Pro account and API credits, and meet the club." },
  { title: "Learn", desc: "Workshops and tech talks on prompting, agents, MCP and Claude Code." },
  { title: "Build", desc: "Team up at hackathons, ship something real and show it off." },
];

// Last spring's calendar: six events, two hackathons, €3,000 in Zartis
// hackathon prizes plus €1,500 of API credits at the end-of-year hackathon
const STATS = [
  { value: "6", label: "events last spring" },
  { value: "2", label: "hackathons" },
  { value: "€4,500", label: "in prizes and credits" },
];

function Spark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const outer = i % 2 === 0 ? 46 : 34;
        return (
          <line
            key={i}
            x1={(50 + Math.cos(a) * 6).toFixed(1)}
            y1={(50 + Math.sin(a) * 6).toFixed(1)}
            x2={(50 + Math.cos(a) * outer).toFixed(1)}
            y2={(50 + Math.sin(a) * outer).toFixed(1)}
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

// Framed, slightly tilted photo with a typewriter caption
function PhotoCard({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure
      className={`rounded-2xl border border-foreground/10 bg-surface p-2.5 shadow-lift-lg transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] ${className}`}
    >
      <img src={src} alt={alt} className="w-full rounded-xl object-cover" loading="lazy" />
      <figcaption className="px-1.5 pb-1 pt-3 font-mono text-xs tracking-wide text-foreground/70">
        {caption}
      </figcaption>
    </figure>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-primary">{children}</p>
  );
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 overflow-hidden">
        {/* Hero */}
        <section className="relative -mt-16 pb-20 pt-32 sm:-mt-[72px] sm:pb-28 sm:pt-40 lg:pt-48">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
          >
            <div className="hero-wash absolute inset-0" />
            <div className="animate-pulse-glow absolute -left-40 top-40 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
          </div>
          <Spark className="pointer-events-none absolute right-[6%] top-28 hidden h-40 w-40 text-primary/15 lg:block" />

          <div className="container-wide relative grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="rise-in min-w-0">
              <Eyebrow>About the club</Eyebrow>
              <h1 className="text-display mt-6 font-semibold text-foreground">
                Build with AI,
                <br />
                <em className="font-medium text-primary">right here in Cork.</em>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75 sm:text-xl">
                We&apos;re the Claude Builders Club at University College Cork: a student community
                learning, building and shipping real projects with Claude, whatever your course or
                experience.
              </p>
            </div>

            {/* Overlapping photo cards */}
            <div className="rise-in relative mx-auto h-[27rem] w-full max-w-md [animation-delay:200ms] sm:h-[33rem]">
              <PhotoCard
                src="/images/club-stand.jpg"
                alt="Two club members at the Claude stand on campus"
                caption="01 / Come say hello."
                className="absolute left-0 top-0 z-10 w-[54%] -rotate-3"
              />
              <PhotoCard
                src="/images/claudeimg4.jpg"
                alt="A club member presenting a talk titled AI Is Your Co-Founder"
                caption="02 / Learn from each other."
                className="absolute bottom-0 right-0 w-[70%] rotate-2"
              />
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="pb-20 sm:pb-28">
          <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                From a first prompt to a <em className="text-primary">finished project.</em>
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/75">
                <p>
                  We&apos;re a club for doing, not just talking about AI. Everyone is a builder here,
                  whether you&apos;re new to AI or a seasoned coder.
                </p>
                <p>
                  We run hands-on workshops on Claude and the tools around it, host tech talks, and
                  put on hackathons where teams turn an idea into something that works in an
                  afternoon.
                </p>
              </div>
              <Link
                href="/events"
                className="group mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-foreground/20 px-6 font-medium text-foreground transition-all hover:border-primary hover:text-primary"
              >
                See our events
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <Reveal delay={150}>
              <PhotoCard
                src="/images/claudeimg3.jpg"
                alt="Club members working together around a laptop"
                caption="03 / Build something real."
                className="rotate-1"
              />
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-foreground/10 py-12 sm:py-16">
          <div className="container-wide grid gap-10 text-center sm:grid-cols-3">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <p className="font-display text-5xl font-semibold text-primary sm:text-6xl">{s.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-foreground/60">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Community */}
        <section className="py-20 sm:py-28">
          <div className="container-wide grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <Reveal>
              <Eyebrow>Rooted in Cork</Eyebrow>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Part of a wider community.
              </h2>
            </Reveal>
            <Reveal delay={150} className="space-y-4 text-lg leading-relaxed text-foreground/75 lg:pt-10">
              <p>
                We&apos;re one of Anthropic&apos;s Claude Builder Clubs, a network of student-led
                builder communities at universities around the world.
              </p>
              <p>
                Here at UCC, it&apos;s about the people next to you: a teammate for the next
                hackathon, someone to debug with, and a room full of people who want to make things.
              </p>
              <Link
                href="/partnership"
                className="group inline-flex items-center gap-2 border-b border-foreground/30 pb-0.5 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Partner with us
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Perks + how the year runs */}
        <section className="pb-20 sm:pb-28">
          <div className="container-wide grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="card-soft h-full rounded-3xl p-7 shadow-lift sm:p-10">
                <Eyebrow>What members get</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  Tools, people and a place to build.
                </h2>
                <ul className="mt-8 space-y-3">
                  {MEMBER_PERKS.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-foreground/80">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={150} className="h-full">
              <div className="card-soft h-full rounded-3xl p-7 shadow-lift sm:p-10">
                <Eyebrow>How the year runs</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  From sign-up to demo.
                </h2>
                <ol className="mt-8 space-y-6">
                  {YEAR_STEPS.map((step, i) => (
                    <li key={step.title} className="flex gap-5">
                      <span className="font-display text-3xl font-semibold leading-none text-primary/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">{step.title}</p>
                        <p className="mt-1 text-foreground/70">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="pb-24 sm:pb-32">
          <div className="container-wide">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-12 text-on-ink sm:px-12 sm:py-16">
                <Spark className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-primary/20 sm:right-10" />
                <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                  <div>
                    <h2 className="text-3xl font-semibold sm:text-5xl">
                      Come as you are.
                      <br />
                      <em className="text-primary-light">Leave with something you built.</em>
                    </h2>
                    <p className="mt-4 text-on-ink/70">No experience needed. Just curiosity.</p>
                  </div>
                  <a
                    href={JOIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-primary px-8 font-medium text-white shadow-lift transition-all hover:bg-primary-dark hover:shadow-lift-lg"
                  >
                    Join the Club
                    <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
