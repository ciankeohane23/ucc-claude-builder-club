import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const images = [
  { src: "/images/club-stand.jpg", alt: "Club members at the Claude stand on campus" },
  { src: "/images/claudeimg2.jpg", alt: "General meeting" },
  { src: "/images/claudeimg3.jpg", alt: "Hackathon winners" },
  { src: "/images/claudeimg5.jpg", alt: "Club stand"},
  { src: "/images/claudeimg4.jpg", alt: "Club members at an event"},
];

const scrollImages = [...images, ...images, ...images, ...images];

export default function Gallery() {
  return (
    <section className="overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28">
      <Reveal className="container-wide mb-10 sm:mb-14">
        <SectionHeading title="What We've Been Up To" subtitle="Meetings, hackathons and club stands around UCC." />
      </Reveal>
      <style>{`
        @keyframes gallery-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .gallery-track { animation: gallery-scroll 20s linear infinite; }
        @media (min-width: 640px) { .gallery-track { animation-duration: 40s; } }
        @media (min-width: 768px) { .gallery-track { animation-duration: 50s; } }
      `}</style>
      <div className="gallery-track flex gap-4 sm:gap-6">
        {scrollImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            style={{ height: "clamp(16rem, 30vw, 100rem)" }}
            className="w-auto flex-shrink-0 rounded-2xl object-cover shadow-lift"
          />
        ))}
      </div>
    </section>
  );
}
