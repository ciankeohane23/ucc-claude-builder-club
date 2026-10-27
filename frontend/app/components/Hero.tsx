import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import HeroAnimation from "./HeroAnimation";
import { JOIN_URL } from "../lib/site";

export default function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden pb-16 pt-32 sm:-mt-[72px] sm:pb-20 sm:pt-40 lg:pb-28 lg:pt-48">
      {/* Warm background wash + slow glowing blobs, faded out at the bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
      >
        <div className="hero-wash absolute inset-0" />
        <div className="animate-pulse-glow absolute -right-32 -top-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="animate-pulse-glow absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-kraft/40 blur-3xl [animation-delay:3s]" />
      </div>

      <div className="container-wide relative z-10 grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
        <div className="min-w-0">
          <div className="rise-in">
            <h1 className="text-display font-semibold text-foreground">
              AI fluency
              <br />
              is the <em className="font-medium text-primary">skill of</em>
              <br />
              <em className="font-medium text-primary">this century.</em>
            </h1>
          </div>

          <div className="rise-in [animation-delay:120ms]">
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75 sm:mt-8 sm:text-xl">
              So we learn it the best way we know: by building. Workshops, tech talks and
              hackathons with Claude for every UCC student, whatever your course or experience.
            </p>
          </div>

          <div className="rise-in [animation-delay:240ms]">
            <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center md:gap-2.5 xl:gap-3">
              <a
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-8 text-base font-medium md:h-11 md:px-5 md:text-sm xl:h-12 xl:px-8 xl:text-base text-background shadow-lift transition-all duration-300 hover:shadow-lift-lg"
              >
                <span className="relative z-10">Join the Club</span>
                <FaArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
              </a>
              <Link
                href="/events"
                className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 px-8 text-base font-medium md:h-11 md:px-5 md:text-sm xl:h-12 xl:px-8 xl:text-base text-foreground transition-all duration-300 hover:bg-foreground/5 hover:shadow-lift"
              >
                Explore Events
              </Link>
              <a
                href="#assistant"
                className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 px-8 text-base font-medium md:h-11 md:px-5 md:text-sm xl:h-12 xl:px-8 xl:text-base text-foreground transition-all duration-300 hover:bg-foreground/5 hover:shadow-lift"
              >
                Ask the Assistant
              </a>
            </div>
          </div>
        </div>

        <div className="rise-in flex justify-center [animation-delay:200ms] md:justify-end">
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-surface p-6 shadow-lift-lg sm:p-8">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
