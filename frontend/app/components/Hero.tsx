import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 pb-16 pt-6 sm:px-8 sm:pb-24 sm:pt-10 md:flex-row md:items-center md:gap-12 md:px-12 md:pb-36 md:pt-16">
      <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-6xl">
  UCC Claude Builders Club
</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 sm:mt-10 sm:text-lg md:text-xl">
          Join a community of builders exploring, creating,
          and shipping with Claude. Workshops, hackathons, and demos every month.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:gap-5">
          <a
            href="/events"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:px-10 sm:py-3.5 sm:text-base md:text-lg"
          >
            View Events
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center rounded-md border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white sm:px-10 sm:py-3.5 sm:text-base md:text-lg"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="hidden flex-1 items-center justify-center md:flex">
        <Image
          src="/images/hero_image.png"
          alt="UT Austin AI Club illustration"
          width={500}
          height={500}
          className="h-auto w-full max-w-md md:max-w-lg"
          priority
        />
      </div>
    </section>
  );
}
