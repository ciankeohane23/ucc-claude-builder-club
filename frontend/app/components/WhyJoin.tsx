import { FaArrowRight, FaGift, FaUsers, FaChalkboardTeacher, FaRocket } from "react-icons/fa";
import Reveal from "./Reveal";
import { JOIN_URL } from "../lib/site";

const REASONS = [
  {
    icon: FaGift,
    title: "Free Claude",
    desc: "Members get access to Claude Pro, API credits and club merch.",
  },
  {
    icon: FaUsers,
    title: "Community",
    desc: "Make friends who build, find hackathon teammates and grow your network across UCC.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Learn by Doing",
    desc: "Tutorials for every skill level, from no-code prompting to the Claude API and Claude Code.",
  },
  {
    icon: FaRocket,
    title: "Ship Real Projects",
    desc: "Build things you can put on your CV and talk about in placement and graduate interviews.",
  },
];

export default function WhyJoin() {
  return (
    <section
      className="relative overflow-hidden bg-ink pb-16 pt-16 text-on-ink sm:pb-20 sm:pt-24 lg:pb-28 lg:pt-32"
      aria-labelledby="why-join-heading"
    >
      <div
        aria-hidden
        className="animate-pulse-glow pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div className="container-wide relative">
        <Reveal className="text-center">
          <h2 id="why-join-heading" className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Why Join Us?
          </h2>
          <span aria-hidden className="mx-auto mt-5 block h-0.5 w-16 rounded-full bg-primary" />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:gap-6">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={(i % 2) * 120}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-surface p-6 transition-colors duration-300 hover:border-primary/50 sm:p-8">
                  <span
                    aria-hidden
                    className="absolute right-5 top-3 font-display text-6xl font-semibold text-white/[0.06] transition-colors duration-300 group-hover:text-primary/20 sm:text-7xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-5 text-2xl font-semibold">{reason.title}</h3>
                  <p className="mt-3 max-w-md text-on-ink/70">{reason.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center sm:mt-16">
          <a
            href={JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-white shadow-lift transition-all duration-300 hover:bg-primary-dark hover:shadow-lift-lg"
          >
            Join Now
            <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
