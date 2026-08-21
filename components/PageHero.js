import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  gold,
  description,
  image,
  crumbs = [],
}) {
  return (
    <section className="grain relative isolate flex min-h-[74vh] flex-col justify-end overflow-hidden pt-32">
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
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      {/* Ambient gold atmosphere */}
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-96 w-96 glow-gold" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 glow-gold opacity-50" />

      {/* Gold corner frame */}
      <div className="pointer-events-none absolute right-8 top-28 hidden h-28 w-28 border-r border-t border-gold/30 lg:block" />
      <div className="pointer-events-none absolute right-8 top-28 hidden h-3 w-3 -translate-y-1/2 translate-x-1/2 rotate-45 border border-gold/50 lg:block" />

      <div className="container-x relative z-10 pb-8">
        {/* Breadcrumbs — glass pill */}
        {crumbs.length ? (
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-ink/40 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-slate backdrop-blur-md"
            >
              {crumbs.map((c, i) => (
                <span key={c.href || c.label} className="flex items-center gap-2.5">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-gold-soft"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-gold-soft">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 ? (
                    <span className="text-[0.5rem] text-gold/50">◆</span>
                  ) : null}
                </span>
              ))}
            </nav>
          </Reveal>
        ) : null}

        {eyebrow ? (
          <Reveal delay={70}>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
        ) : null}

        <Reveal delay={140}>
          <h1 className="font-display mt-5 max-w-4xl text-4xl leading-[1.04] text-fog sm:text-5xl md:text-6xl lg:text-7xl">
            {title}{" "}
            {gold ? (
              <span className="text-gold-gradient animate-shimmer">{gold}</span>
            ) : null}
          </h1>
        </Reveal>

        {description ? (
          <Reveal delay={220}>
            <p className="mt-7 max-w-2xl border-l border-gold/40 pl-5 text-base leading-relaxed text-mist md:text-lg">
              {description}
            </p>
          </Reveal>
        ) : null}

        {/* Baseline bar — brand mark + scroll cue */}
        <Reveal delay={300}>
          <div className="mt-12 flex items-center justify-between gap-6 border-t border-white/10 pt-5">
            <span className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-slate">
              <span className="text-gold/60">◆</span>
              Drona Productions
            </span>
            <span className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-slate">
              Scroll
              <span className="relative h-9 w-px overflow-hidden rounded-full bg-white/10">
                <span className="absolute inset-0 animate-scroll-cue bg-gradient-to-b from-transparent via-gold to-transparent" />
              </span>
            </span>
          </div>
        </Reveal>
      </div>

      {/* Gold hairline base */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
    </section>
  );
}
