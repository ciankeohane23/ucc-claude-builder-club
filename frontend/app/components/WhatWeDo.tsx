import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ACTIVITIES = [
  {
    title: "Workshops",
    desc: "Hands-on sessions where you learn to build with Claude, from your first prompt to a working app.",
    image: "/images/claude-icons/lightbulb.png",
    href: "/events",
  },
  {
    title: "Hackathons",
    desc: "Team up, build something real against the clock, and demo it to judges from industry.",
    image: "/images/claude-icons/lightning.png",
    href: "/events",
  },
  {
    title: "Community",
    desc: "Meet students from every course who want to build with AI, swap ideas and find teammates.",
    image: "/images/claude-icons/shapes.png",
    href: "/about",
  },
];

export default function WhatWeDo() {
  return (
    <section className="pb-16 pt-20 sm:pb-24 lg:pb-32" aria-labelledby="what-we-do-heading">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="what-we-do-heading"
            title="What We Do"
            subtitle="We bring UCC students together to learn and build with AI."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3 lg:gap-8">
          {ACTIVITIES.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <Link
                href={item.href}
                className="card-soft group flex h-full flex-col rounded-2xl p-5 shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-lift-lg sm:p-6"
              >
                {/* Fixed light tile so the black line art reads in dark mode too */}
                <div className="flex h-44 items-center justify-center overflow-hidden rounded-xl bg-[#eee2d7] sm:h-48">
                  <img
                    src={item.image}
                    alt=""
                    className="h-28 w-auto transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 flex-1 text-foreground/70">{item.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
