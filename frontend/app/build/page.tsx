import type { Metadata } from "next";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import BuildAnimation from "../components/BuildAnimation";
import { JOIN_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Build · UCC Claude Builders Club",
  description: "Hands-on guides from Anthropic for building with Claude, picked by the UCC Claude Builders Club.",
};

// Each card links to an Anthropic guide on the same topic as one of our workshops
const GUIDES = [
  {
    title: "Prompting Claude Well",
    desc: "The techniques Anthropic recommends for clear, reliable prompts: be specific, give examples and let Claude think.",
    href: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",
    image: "/images/claude-icons/lightbulb.png",
    tile: "#e8b4a0",
  },
  {
    title: "Building Agents",
    desc: "What an agent actually is, when you need one, and the simple patterns that work best, from Anthropic's own guide.",
    href: "https://www.anthropic.com/research/building-effective-agents",
    image: "/images/claude-icons/hands.png",
    tile: "#d97757",
  },
  {
    title: "Claude Code",
    desc: "Set up Claude Code in your terminal and use it as a coding partner to build your very first project.",
    href: "https://code.claude.com/docs/en/overview",
    image: "/images/claude-icons/grid.png",
    tile: "#a9b78f",
  },
  {
    title: "Building with MCP",
    desc: "Connect Claude to your own tools and data with the Model Context Protocol, the open standard Anthropic created.",
    href: "https://modelcontextprotocol.io",
    image: "/images/claude-icons/lightning.png",
    tile: "#c9c6df",
  },
  {
    title: "Inside the Model",
    desc: "See how Anthropic's interpretability researchers trace what happens inside Claude while it thinks.",
    href: "https://www.anthropic.com/research/tracing-thoughts-language-model",
    image: "/images/claude-icons/shapes.png",
    tile: "#9dbcdc",
  },
  {
    title: "AI and the Future of Work",
    desc: "Anthropic's Economic Index tracks how people really use AI at work, and what that could mean for your career.",
    href: "https://www.anthropic.com/economic-index",
    image: "/images/claude-icons/flowers.png",
    tile: "#ebcfcf",
  },
];

export default function BuildPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative -mt-16 overflow-hidden pb-16 pt-32 sm:-mt-[72px] sm:pb-20 sm:pt-40 lg:pt-44">
          <div aria-hidden className="hero-wash pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]" />
          <div className="container-wide relative grid items-center gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
            <div className="rise-in min-w-0">
              <h1 className="text-display font-semibold text-foreground">Learn by building.</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75 sm:mt-8 sm:text-xl">
                Hands-on guides that take you from an idea to a working app. Start with the topics
                our workshops cover, straight from the people who make Claude.
              </p>
              <p className="mt-6 max-w-xl text-foreground/70">
                Join the club to hear about upcoming workshops and build nights.
              </p>
              <a
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-medium text-background shadow-lift transition-all duration-300 hover:shadow-lift-lg"
              >
                Join the Club
                <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="rise-in mx-auto w-3/4 max-w-md [animation-delay:200ms] md:w-full">
              <BuildAnimation />
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="pb-20 sm:pb-28" aria-label="Guides">
          <div className="container-wide grid gap-6 md:grid-cols-2 lg:gap-8">
            {GUIDES.map((g, i) => (
              <Reveal key={g.title} delay={(i % 2) * 120}>
                <a
                  href={g.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-soft group flex h-full items-start gap-5 rounded-2xl p-5 shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-lift-lg sm:gap-6 sm:p-7"
                >
                  <div
                    className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl sm:h-24 sm:w-24"
                    style={{ backgroundColor: g.tile }}
                  >
                    <img
                      src={g.image}
                      alt=""
                      className="h-14 w-14 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 sm:h-16 sm:w-16"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                      {g.title}
                      <FaExternalLinkAlt className="h-3 w-3 shrink-0 text-foreground/30 transition-colors group-hover:text-primary" />
                    </h2>
                    <p className="mt-2 text-foreground/70">{g.desc}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Courses band */}
        <section className="bg-ink py-16 text-on-ink sm:py-20">
          <Reveal className="container-wide flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold sm:text-4xl">Want a full course?</h2>
              <p className="mt-3 text-on-ink/70">
                Anthropic Academy and Anthropic&apos;s open courses on GitHub walk you through the
                Claude API, tool use and prompting step by step, for free.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://academy.claude.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 font-medium text-white transition-colors hover:bg-primary-dark"
              >
                Anthropic Academy
                <FaExternalLinkAlt className="h-3 w-3" />
              </a>
              <a
                href="https://github.com/anthropics/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-7 font-medium transition-colors hover:bg-white/10"
              >
                Courses on GitHub
                <FaExternalLinkAlt className="h-3 w-3" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
