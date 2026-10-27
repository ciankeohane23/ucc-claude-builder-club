import type { Metadata } from "next";
import { FaArrowRight, FaBullhorn, FaUserGraduate } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import CopyEmail from "../components/CopyEmail";
import { CLUB_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Become a Partner · UCC Claude Builders Club",
  description: "Partner with the UCC Claude Builders Club to reach students building with AI at University College Cork.",
};

const CONTACT_URL = `mailto:${CLUB_EMAIL}?subject=${encodeURIComponent("Partnering with the UCC Claude Builders Club")}`;

const BENEFITS = [
  {
    icon: FaUserGraduate,
    title: "Talent Pipeline",
    desc: "Meet ambitious students from courses across University College Cork who are already building with AI.",
  },
  {
    icon: FaBullhorn,
    title: "Brand Visibility",
    desc: "Showcase your company at our workshops, tech talks and hackathons throughout the year.",
  },
];

function BenefitCard({ benefit }: { benefit: (typeof BENEFITS)[number] }) {
  const Icon = benefit.icon;
  return (
    <div className="card-soft h-full rounded-2xl p-6 shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-lift-lg sm:p-7">
      <Icon className="h-6 w-6 text-primary" />
      <h2 className="mt-4 text-xl font-semibold text-foreground">{benefit.title}</h2>
      <p className="mt-2 text-foreground/70">{benefit.desc}</p>
    </div>
  );
}

export default function PartnershipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="relative flex-1 overflow-hidden">
        <div aria-hidden className="hero-wash pointer-events-none absolute inset-0 -top-[72px] [mask-image:linear-gradient(to_bottom,black_45%,transparent)]" />

        <section className="relative pb-24 pt-16 sm:pb-32 sm:pt-24">
          <div className="container-wide">
            <div className="rise-in mx-auto max-w-2xl text-center">
              <h1 className="text-display font-semibold text-foreground">Become a Partner</h1>
              <p className="mt-5 text-lg text-foreground/75 sm:text-xl">
                Work with the next generation of AI builders at University College Cork.
              </p>
            </div>

            {/* Two benefits joined by the contact button, like a bridge */}
            <div className="mx-auto mt-14 grid max-w-5xl items-center gap-6 sm:mt-20 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
              <Reveal>
                <BenefitCard benefit={BENEFITS[0]} />
              </Reveal>

              <Reveal delay={150} className="flex flex-col items-center py-2 lg:flex-row">
                <span aria-hidden className="hidden h-px w-12 bg-primary/60 lg:block xl:w-16" />
                <span aria-hidden className="hidden h-2 w-2 rounded-full bg-primary lg:block" />
                <a
                  href={CONTACT_URL}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 font-medium text-white shadow-lift transition-all duration-300 hover:bg-primary-dark hover:shadow-lift-lg lg:mx-3"
                >
                  Get in Touch
                  <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <span aria-hidden className="hidden h-2 w-2 rounded-full bg-primary lg:block" />
                <span aria-hidden className="hidden h-px w-12 bg-primary/60 lg:block xl:w-16" />
              </Reveal>

              <Reveal delay={300}>
                <BenefitCard benefit={BENEFITS[1]} />
              </Reveal>
            </div>

            <Reveal className="mt-10 text-center">
              <p className="text-sm text-foreground/60">Prefer to write to us directly?</p>
              <CopyEmail email={CLUB_EMAIL} />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
