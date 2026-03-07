import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaLightbulb, FaUsers, FaRocket, FaGraduationCap, FaScroll } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-cream">
        {/* Page Hero */}
        <section className="bg-surface px-4 py-10 text-center sm:px-8 sm:py-16 md:py-20">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            About the UCC Claude Builders Club
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/70 sm:mt-6 sm:text-base md:text-lg">
            Empowering University College Cork students to build the future with AI
          </p>
        </section>

        {/* Mission Section */}
        <section className="px-4 py-10 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-center text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                Our Mission
              </h2>
              <a
                href="https://www.anthropic.com/constitution"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                title="Anthropic's Constitution"
              >
                <FaScroll className="h-4 w-4" />
              </a>
            </div>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-foreground/70 sm:mt-6 sm:text-base md:text-lg">
              The Claude Builders Club at University College Cork is dedicated to fostering a
community of students passionate about artificial intelligence. We provide
hands-on experience with modern AI tools, host workshops and hackathons, and
create a space where students can experiment, collaborate, and build exciting
projects together.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-16">
          <h2 className="text-center text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
            What We Do
          </h2>
          <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="rounded-xl border border-muted/20 bg-surface p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 sm:mb-4">
                <FaLightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Workshops
              </h3>
              <p className="mt-2 text-xs text-foreground/70 sm:text-sm">
                Hands-on sessions teaching practical AI skills, from prompt engineering
                to building full applications with Claude.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-muted/20 bg-surface p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 sm:mb-4">
                <FaRocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Hackathons
              </h3>
              <p className="mt-2 text-xs text-foreground/70 sm:text-sm">
                Compete in exciting build challenges, collaborate with peers, and create
                innovative AI-powered projects.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-muted/20 bg-surface p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 sm:mb-4">
                <FaUsers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Community
              </h3>
              <p className="mt-2 text-xs text-foreground/70 sm:text-sm">
                Join a network of like-minded students passionate about AI, share ideas,
                and build lasting connections.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl border border-muted/20 bg-surface p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 sm:mb-4">
                <FaGraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                Resources
              </h3>
              <p className="mt-2 text-xs text-foreground/70 sm:text-sm">
                Get access to Claude Pro subscriptions, API credits, exclusive tutorials,
                and the latest AI development tools.
              </p>
            </div>
          </div>
        </section>

        {/* Backed by Anthropic Section */}
        <section className="px-4 py-10 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-foreground/50 sm:text-sm">
              Official Partner
            </p>
            <h2 className="mt-2 text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
              Backed by Anthropic
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/70 sm:text-base">
              As an official Claude Builder Club, we&apos;re proud to be supported by Anthropic,
              the creators of Claude. This partnership gives our members exclusive access to
              resources, tools, and opportunities to learn directly from industry leaders.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-10 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
              Ready to Join?
            </h2>
            <p className="mt-3 text-sm text-foreground/70 sm:mt-4 sm:text-base">
              Whether you&apos;re an AI enthusiast or just getting started, there&apos;s a place
              for you in the Claude Builder Club.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <a
                href="/events"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:px-8 sm:py-3 sm:text-base"
              >
                View Upcoming Events
              </a>
              <a
                href="https://www.jotform.com/253555944387168"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white sm:px-8 sm:py-3 sm:text-base"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
