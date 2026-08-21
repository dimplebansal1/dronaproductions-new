import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { IMAGES } from "@/lib/data";

const SPECS = ["Owned Inventory", "Certified Rigging", "Rider-Ready Crew"];

// Two wide photo tiles interleaved with the 8 service cards in the
// right-hand bento (2-col grid → 6 clean rows).
const IMAGE_TILES = {
  0: { src: IMAGES.lighting, label: "Intelligent Lighting", icon: "Lightbulb" },
  5: { src: IMAGES.led, label: "LED Walls & AV", icon: "MonitorPlay" },
};

function PhotoTile({ tile, delay }) {
  return (
    <Reveal delay={delay} className="col-span-2">
      <Link
        href="/production"
        className="group relative flex min-h-[12rem] overflow-hidden rounded-sm border border-line"
      >
        <Image
          src={tile.src}
          alt={tile.label}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <span className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
            <Icon name={tile.icon} size={15} />
            {tile.label}
          </span>
          <span className="mt-2 inline-flex items-center gap-1 text-sm text-mist opacity-0 transition-all duration-500 group-hover:opacity-100">
            Explore <ArrowUpRight size={14} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

function TechCard({ item, index, delay }) {
  return (
    <Reveal delay={delay} className="col-span-1">
      <div className="card group relative flex h-full min-h-[12rem] flex-col justify-between overflow-hidden rounded-sm p-6">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100" />
        <div className="flex items-start justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/25 bg-gold/5 text-gold-soft transition duration-300 group-hover:border-gold/60 group-hover:text-gold-bright">
            <Icon name={item.icon} size={20} />
          </span>
          <span className="font-display text-2xl text-line transition-colors duration-300 group-hover:text-gold/30">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div>
          <h3 className="text-base font-semibold leading-snug text-fog">
            {item.title}
          </h3>
          <p className="mt-2 text-[0.8rem] leading-relaxed text-ash">
            {item.desc}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function ProductionShowcase({ services }) {
  const tiles = [];
  let serviceIndex = 0;

  for (let pos = 0; pos < 10; pos++) {
    const delay = (pos % 2) * 90;
    if (IMAGE_TILES[pos]) {
      tiles.push(
        <PhotoTile key={`img-${pos}`} tile={IMAGE_TILES[pos]} delay={delay} />
      );
    } else {
      const item = services[serviceIndex];
      const idx = serviceIndex;
      serviceIndex += 1;
      if (!item) continue;
      tiles.push(
        <TechCard key={item.title} item={item} index={idx} delay={delay} />
      );
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Feature panel */}
      <Reveal className="lg:col-span-5">
        <div className="group relative flex min-h-[26rem] overflow-hidden rounded-sm border border-line lg:sticky lg:top-28 lg:min-h-[34rem]">
          <Image
            src={IMAGES.production}
            alt="In-house stage production"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />
          <div className="pointer-events-none absolute -right-16 top-10 h-56 w-56 glow-gold opacity-60" />
          <div className="relative z-10 flex flex-col justify-end p-8 md:p-10">
            <span className="eyebrow">Production &amp; Technical</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-fog md:text-4xl">
              In-house <span className="text-gold-gradient">production power.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">
              Owned equipment, certified rigging and a technical crew that turns
              ambitious ideas into safe, spectacular reality — engineered once,
              then adapted to every event, never duplicated.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SPECS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-gold/25 bg-gold/5 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-gold-soft"
                >
                  {s}
                </span>
              ))}
            </div>
            <Link href="/production" className="btn btn-gold group mt-8 self-start">
              See Production Solutions
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Bento of services + photo tiles */}
      <div className="grid grid-cols-2 gap-4 lg:col-span-7">{tiles}</div>
    </div>
  );
}
