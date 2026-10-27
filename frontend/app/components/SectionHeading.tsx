// Centred section title with a rule either side, plus an optional subtitle
export default function SectionHeading({
  title,
  subtitle,
  id,
}: {
  title: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <div className="text-center">
      <div className="flex items-center gap-4 sm:gap-6">
        <span aria-hidden className="h-px flex-1 bg-foreground/20" />
        <h2 id={id} className="text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <span aria-hidden className="h-px flex-1 bg-foreground/20" />
      </div>
      {subtitle && <p className="mt-4 text-base text-foreground/70 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
