import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { IMAGES } from "@/lib/data";

// Cinematic image tiles interleaved with the service cards.
// Positions are chosen so each row fills a 4-column grid perfectly.
const IMAGE_TILES = {
  0: { src: IMAGES.decor, label: "Décor & Theming", icon: "Flower2" },
  5: { src: IMAGES.production, label: "Stage & Production", icon: "Layout" },
  6: { src: IMAGES.team, label: "On-Ground Teams", icon: "ClipboardCheck" },
};

function ImageTile({ tile, delay }) {
  return (
    <Reveal delay={delay} className="col-span-1 sm:col-span-2">
      <Link
        href="/event-management"
        className="group relative flex min-h-[14rem] overflow-hidden rounded-sm border border-line"
      >
        <Image
          src={tile.src}
          alt={tile.label}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent transition-colors duration-500 group-hover:from-ink/95" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <span className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
            <Icon name={tile.icon} size={15} />
            {tile.label}
          </span>
          <span className="mt-2 inline-flex items-center gap-1 text-sm text-mist opacity-0 transition-all duration-500 group-hover:opacity-100">
            View services <ArrowUpRight size={14} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

function ServiceTile({ item, index, delay }) {
  const hasImage = !!item.image;

  return (
    <Reveal delay={delay} className="col-span-1">
      <div className="card group relative flex h-full min-h-[14rem] flex-col justify-between overflow-hidden rounded-sm p-6 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_20px_50px_-20px_rgba(212,175,55,0.12)]">
        {/* Background Image & Overlay */}
        {hasImage ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            {/* Overlay to ensure readability while keeping the image visible */}
            <div className="absolute inset-0 bg-ink/60 transition-colors duration-500 group-hover:bg-ink/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          </div>
        ) : (
          /* Gold glow blob */
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 glow-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        )}

        {/* Content Container */}
        <div className="relative z-10 flex h-full flex-col justify-between w-full">
          <div className="flex items-start justify-between">
            {hasImage ? (
              /* Accent Diamond */
              <span className="text-[8px] text-gold-soft select-none">◆</span>
            ) : (
              /* Icon */
              <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/25 bg-gold/5 text-gold-soft transition duration-300 group-hover:bg-gold-deep group-hover:border-gold-deep group-hover:text-ink">
                <Icon name={item.icon} size={20} />
              </span>
            )}
            <span className="font-display text-2xl text-line transition-colors duration-500 group-hover:text-gold-soft">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-xl leading-snug text-fog transition-colors duration-300 group-hover:text-gold-soft">
              {item.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-mist/90">
              {item.desc}
            </p>
          </div>
        </div>

        {/* Bottom sweep highlight */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </Reveal>
  );
}

export default function ManagementShowcase({ services }) {
  const tiles = [];
  let serviceIndex = 0;

  // 13 tiles total: 10 services + 3 wide image tiles, arranged to fill
  // a 4-col grid across 4 clean rows.
  for (let pos = 0; pos < 13; pos++) {
    const delay = (pos % 4) * 70;
    if (IMAGE_TILES[pos]) {
      tiles.push(
        <ImageTile key={`img-${pos}`} tile={IMAGE_TILES[pos]} delay={delay} />
      );
    } else {
      const item = services[serviceIndex];
      const idx = serviceIndex;
      serviceIndex += 1;
      if (!item) continue;
      tiles.push(
        <ServiceTile key={item.title} item={item} index={idx} delay={delay} />
      );
    }
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{tiles}</div>
  );
}
