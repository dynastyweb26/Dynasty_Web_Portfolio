import { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface ProjectCardProps {
  tag: string;
  name: string;
  niche: string;
  bullets: string[];
  palette: { color: string; label: string }[];
  paletteLabel: string;
  images: string[];
  reverse?: boolean;
}

const ProjectCard = ({ tag, name, niche, bullets, palette, paletteLabel, images, reverse }: ProjectCardProps) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      {/* Screenshot stack */}
      <div className={`relative aspect-[4/5] w-full ${reverse ? "md:order-2" : ""}`}>
        <div className="absolute inset-0 rounded-xl overflow-hidden border border-gold-faint shadow-[0_30px_80px_-20px_hsl(var(--gold)/0.25)]">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${name} screenshot ${i + 1}`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === idx ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Info */}
      <div className={reverse ? "md:order-1" : ""}>
        <p className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
          <Star className="h-3 w-3 fill-gold stroke-gold" />
          {tag}
        </p>
        <h3 className="font-display text-4xl md:text-5xl tracking-tight">{name}</h3>
        <p className="mt-3 text-sm text-muted-foreground italic">{niche}</p>
        <div className="mt-6 h-px w-16 bg-gold/60" />

        <ul className="mt-8 space-y-4">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex items-center gap-3">
          {palette.map((p) => (
            <div
              key={p.color}
              className="h-7 w-7 rounded-full border border-gold-faint"
              style={{ background: p.color }}
              title={p.label}
            />
          ))}
          <span className="ml-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {paletteLabel}
          </span>
        </div>

        <div className="mt-8 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`View screenshot ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === idx ? "w-8 bg-gold" : "w-2 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
