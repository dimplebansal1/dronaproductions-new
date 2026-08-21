import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowDown } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  gold,
  description,
  image,
  crumbs = [],
}) {
  return (
    <section className="grain relative isolate flex min-h-screen flex-col justify-center overflow-hidden pt-28 md:pt-36 xl:pt-48 pb-36 md:pb-40 xl:pb-36">
      {/* Cinematic backdrop */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-hero-zoom object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ background: "radial-gradient(circle at 60% 50%, transparent 35%, #000000 85%)" }} />
      </div>

      {/* Ambient Glow Elements */}
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[30rem] w-[30rem] glow-gold opacity-50" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[45rem] w-[45rem] opacity-75" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 40%, transparent 70%)" }} />

      <div className="container-x relative z-10 w-full">
        <div className="relative pl-8 pt-8 md:pl-10">
          {/* Left vertical line */}
          <div className="absolute left-0 top-[10px] bottom-36 w-px bg-gold/15" />
          {/* Thicker gold accent segment on the vertical line */}
          <div className="absolute left-0 top-[10px] h-12 w-px bg-gold" />
          
          {/* Horizontal line & eyebrow container */}
          {eyebrow ? (
            <div className="absolute left-0 top-0 right-0 h-5 flex items-center gap-3 select-none">
              {/* Line segment from corner to first diamond */}
              <div className="h-px w-8 bg-gold/25" />
              {/* First Diamond */}
              <span className="text-[8px] md:text-[10px] text-gold-soft">◆</span>
              {/* Eyebrow Text */}
              <span className="text-[0.65rem] md:text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold-soft whitespace-nowrap">
                {eyebrow}
              </span>
              {/* Second Diamond */}
              <span className="text-[8px] md:text-[10px] text-gold-soft">◆</span>
              {/* Line segment extending to the right */}
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-gold/25 to-transparent" />
            </div>
          ) : null}

          <Reveal delay={140}>
            <h1 className="font-display max-w-4xl text-5xl font-medium tracking-tight text-fog sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
              {title}{" "}
              {gold ? (
                <span className="text-gold-gradient">{gold}</span>
              ) : null}
            </h1>
          </Reveal>

          {description ? (
            <Reveal delay={220}>
              <p className="mt-6 md:mt-8 max-w-xl text-lg leading-relaxed text-mist">
                {description}
              </p>
            </Reveal>
          ) : null}
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-6 md:bottom-8 inset-x-0 z-20">
        <div className="container-x">
          {/* Thin divider line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
          
          <div className="mt-5 md:mt-6 flex items-center justify-between text-[0.62rem] md:text-[0.68rem] tracking-[0.2em] text-ash/70 uppercase">
            {/* Left label */}
            <div className="flex items-center gap-2 select-none">
              <span className="text-[8px] text-gold-soft">◆</span>
              <span>Drona Productions</span>
            </div>
            
            {/* Right scroll indicator */}
            <div className="flex items-center gap-2 md:gap-3 select-none">
              <span>Scroll to Explore</span>
              <div className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full border border-line text-gold animate-bounce">
                <ArrowDown size={10} className="text-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
