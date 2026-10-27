import { FaArrowRight } from "react-icons/fa";
import Reveal from "./Reveal";
import { JOIN_URL } from "../lib/site";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden pb-28 pt-10 sm:pb-36 sm:pt-12 lg:pb-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-kraft/50 to-transparent"
      />
      {/* Side illustrations on wide screens */}
      <img
        src="/images/claude-icons/flowers.png"
        alt=""
        className="pointer-events-none absolute bottom-10 left-[4%] hidden w-40 opacity-60 dark:invert lg:block xl:w-48"
      />
      <img
        src="/images/claude-icons/grid.png"
        alt=""
        className="pointer-events-none absolute bottom-10 right-[4%] hidden w-40 opacity-60 dark:invert lg:block xl:w-48"
      />

      <Reveal className="container-wide relative text-center">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
          Ready to build?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-foreground/70 sm:text-lg">
          Join the club and start building the future of AI at UCC today.
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
      </Reveal>
    </section>
  );
}
