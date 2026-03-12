import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaInstagram,
  FaSlack,
  FaDiscord,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaUsers,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaLink,
} from "react-icons/fa";
import { IconType } from "react-icons";

// ============================================================
// LINKS CONFIGURATION
// ============================================================
// To add a new link: Copy a link object and update the fields
// To hide a link: Set visible: false (keeps it in code for later)
// To archive a link: Move it to the ARCHIVED_LINKS array below
// ============================================================

interface LinkItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  icon: IconType;
  visible: boolean; // Set to false to hide without deleting
  category?: "social" | "form" | "resource" | "community";
}

const LINKS: LinkItem[] = [
  
  {
    id: "membership-form",
    title: "Membership Sign-Up",
    description: "Join the Claude Builder Club",
    url: "https://www.jotform.com/253555944387168",
    icon: FaFileAlt,
    visible: true,
    category: "form",
  },
  {
    id: "events",
    title: "Upcoming Events",
    description: "See what's happening",
    url: "/events",
    icon: FaCalendarAlt,
    visible: true,
    category: "resource",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "Follow us for updates and behind-the-scenes",
    url: "https://www.instagram.com/claudebuilderclubucc",
    icon: FaInstagram,
    visible: true,
    category: "social",
  },
  {
    id: "email",
    title: "Contact Us",
    description: "Reach out via email",
    url: "mailto:claudebuildersclubucc@gmail.com",
    icon: FaEnvelope,
    visible: true,
    category: "social",
  },
];

// ============================================================
// ARCHIVED LINKS
// Move old links here to keep them for reference without showing
// ============================================================
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ARCHIVED_LINKS: LinkItem[] = [
  // Example archived link:
  // {
  //   id: "old-form",
  //   title: "Fall 2025 Sign-Up",
  //   description: "No longer active",
  //   url: "https://old-form-url.com",
  //   icon: FaFileAlt,
  //   visible: false,
  //   category: "form",
  // },
];

function LinkCard({ link }: { link: LinkItem }) {
  const Icon = link.icon;
  const isExternal = link.url.startsWith("http") || link.url.startsWith("mailto");

  return (
    <a
      href={link.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-muted/20 bg-surface p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-md sm:p-5"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-14 sm:w-14">
        <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-foreground sm:text-base">
          {link.title}
        </h3>
        {link.description && (
          <p className="mt-0.5 truncate text-xs text-foreground/60 sm:text-sm">
            {link.description}
          </p>
        )}
      </div>
      <FaExternalLinkAlt className="h-3 w-3 shrink-0 text-foreground/30 transition-colors group-hover:text-primary sm:h-4 sm:w-4" />
    </a>
  );
}

export default function LinksPage() {
  // Filter to only show visible links
  const visibleLinks = LINKS.filter((link) => link.visible);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="border-b border-muted/20 bg-surface px-4 py-10 text-center sm:px-8 sm:py-16 md:py-20">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Links
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-foreground/70 sm:mt-6 sm:text-base md:text-lg">
            Quick access to all our resources, forms, and social media
          </p>
        </section>

        {/* Links Grid */}
        <section className="mx-auto max-w-2xl px-4 py-8 sm:px-8 sm:py-12">
          {visibleLinks.length > 0 ? (
            <div className="flex flex-col gap-3 sm:gap-4">
              {visibleLinks.map((link) => (
                <LinkCard key={link.id} link={link} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-muted/20 bg-surface p-8 text-center">
              <FaUsers className="mx-auto h-12 w-12 text-foreground/20" />
              <p className="mt-4 text-foreground/60">
                Links coming soon! Check back later.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
