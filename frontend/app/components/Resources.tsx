import { FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";

const RESOURCES = [
  {
    title: "Anthropic",
    desc: "The company behind Claude, and its mission for safe AI",
    href: "https://www.anthropic.com",
  },
  {
    title: "Claude Code",
    desc: "Claude as a coding partner in your terminal and editor",
    href: "https://www.anthropic.com/claude-code",
  },
  {
    title: "Claude Developer Docs",
    desc: "Everything you need to start building with the Claude API",
    href: "https://docs.anthropic.com",
  },
  {
    title: "Anthropic Research",
    desc: "The latest research on how AI models work and how to make them safe",
    href: "https://www.anthropic.com/research",
  },
];

export default function Resources() {
  return (
    <section className="pb-16 pt-24 sm:pb-20 sm:pt-32" aria-labelledby="resources-heading">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-2xl">
          <h2
            id="resources-heading"
            className="card-soft mx-auto w-fit rounded-xl px-6 py-3 text-center text-2xl font-normal text-foreground shadow-lift sm:text-3xl"
          >
            Start building responsibly with AI
          </h2>
          <ul className="card-soft mt-3 divide-y divide-foreground/10 rounded-2xl px-6 py-2 shadow-lift-lg sm:px-8">
            {RESOURCES.map((r) => (
              <li key={r.href}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block py-4"
                >
                  <span className="flex items-center gap-2 font-semibold text-foreground transition-colors group-hover:text-primary">
                    {r.title}
                    <FaExternalLinkAlt className="h-3 w-3 text-foreground/40 transition-colors group-hover:text-primary" />
                  </span>
                  <span className="mt-1 block text-sm text-foreground/60">{r.desc}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
