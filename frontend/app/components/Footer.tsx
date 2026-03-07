export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:px-8 sm:py-6 md:flex-row md:px-12">
        <p className="text-xs text-cream sm:text-sm md:text-base">
          &copy; {new Date().getFullYear()} University College Cork Claude Builders Club
        </p>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-xs text-cream sm:text-sm md:text-base">Backed by</span>
          <a
            href="https://www.anthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="brightness-0 invert transition-all hover:invert-0"
            aria-label="Anthropic"
          >
            <img
              src="/images/Anthropic_Logo.svg"
              alt="Anthropic"
              className="h-2.5 w-auto sm:h-3.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
