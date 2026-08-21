import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ManagementShowcase from "@/components/ManagementShowcase";
import ProductionShowcase from "@/components/ProductionShowcase";
import CTABand from "@/components/CTABand";
import {
  EVENTS,
  MANAGEMENT_SERVICES,
  PRODUCTION_SERVICES,
  ARTISTS,
  PORTFOLIO,
  WHY_CHOOSE,
  STATS,
  IMAGES,
} from "@/lib/data";

const MARQUEE = [
  "Weddings",
  "Concerts",
  "Government Events",
  "Conferences",
  "Live Shows",
  "Exhibitions",
  "Social Events",
  "Product Launches",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden pt-28 md:pt-36 xl:pt-48 pb-36 md:pb-40 xl:pb-36">
        <Image
          src={IMAGES.heroConcert}
          alt="Live event production by Drona Productions"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-zoom"
        />
        {/* Cinematic Background Treatment */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ background: "radial-gradient(circle at 60% 50%, transparent 35%, #000000 85%)" }} />
        
        {/* Ambient Glow Elements */}
        <div className="pointer-events-none absolute -left-40 top-1/4 h-[30rem] w-[30rem] glow-gold opacity-50" />
        <div className="pointer-events-none absolute right-0 top-0 h-[45rem] w-[45rem] opacity-75" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 40%, transparent 70%)" }} />

        <div className="container-x relative z-10 w-full">
          <div className="relative pl-8 pt-8 md:pl-10">
            {/* Left vertical line */}
            <div className="absolute left-0 top-[10px] bottom-36 w-px bg-gold/15" />
            {/* Thicker gold accent segment on the vertical line */}
            <div className="absolute left-0 top-[10px] h-12 w-px bg-gold" />
            
            {/* Horizontal line & eyebrow container */}
            <div className="absolute left-0 top-0 right-0 h-5 flex items-center gap-3 select-none">
              {/* Line segment from corner to first diamond */}
              <div className="h-px w-8 bg-gold/25" />
              {/* First Diamond */}
              <span className="text-[8px] md:text-[10px] text-gold-soft">◆</span>
              {/* Eyebrow Text */}
              <span className="text-[0.65rem] md:text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold-soft whitespace-nowrap">
                Complete Event Management &amp; Production
              </span>
              {/* Second Diamond */}
              <span className="text-[8px] md:text-[10px] text-gold-soft">◆</span>
              {/* Line segment extending to the right */}
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-gold/25 to-transparent" />
            </div>

            <Reveal delay={90}>
              <h1 className="font-display max-w-4xl text-5xl font-medium tracking-tight text-fog sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
                We craft <span className="text-gold-gradient">cinematic</span>{" "}
                events, end to end.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 md:mt-8 max-w-xl text-lg leading-relaxed text-mist">
                From concept to final execution — management, production and
                artist management under one roof. Premium. Modern. Professional.
              </p>
            </Reveal>
          </div>

          <div className="pl-8 md:pl-10">
            <Reveal delay={260}>
              <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn btn-gold group">
                  Get a Quote <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/portfolio" className="btn border border-white/10 text-mist hover:text-fog hover:border-gold/40 hover:bg-white/5 transition-all duration-300">
                  View Our Work
                </Link>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-x-8 gap-y-6 md:gap-x-12 border-t border-line/40 pt-8 max-w-3xl">
                {STATS.map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <div className="font-display text-2xl md:text-3xl text-gold-gradient font-medium">
                       {s.value}
                    </div>
                    <div className="text-[0.62rem] md:text-[0.68rem] uppercase tracking-[0.18em] text-slate font-medium">
                       {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
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

      {/* MARQUEE */}
      <div className="grain relative overflow-hidden border-y border-line bg-charcoal py-5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((word, i) => (
            <span
              key={i}
              className="font-display flex items-center gap-10 text-xl text-mist/60"
            >
              {word}
              <span className="text-gold">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="relative py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="One partner for the"
              gold="entire event."
              description="Drona Productions is a complete event management and production company. We bring together meticulous planning, in-house technical production and a powerful artist network — so every element of your event is designed, engineered and delivered by a single, accountable team."
            />
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about" className="btn btn-ghost">
                  About Drona
                </Link>
                <Link href="/event-management" className="btn btn-outline">
                  Our Services
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-sm border border-line shadow-[0_8px_30px_rgba(212,175,55,0.12)]">
                <Image
                  src={IMAGES.production}
                  alt="Stage production setup"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden w-44 rounded-sm border border-gold-soft/60 bg-ink/90 p-5 backdrop-blur sm:block">
                <div className="font-display text-2xl text-gold-gradient">
                  360°
                </div>
                <p className="mt-1 text-xs text-ash">
                  Management · Production · Talent
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WE MANAGE — EVENT CATEGORIES */}
      <section className="border-t border-line bg-night py-24 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="We Manage"
              title="Events we bring"
              gold="to life."
              description="Every category has a dedicated approach and a team that understands its unique demands."
            />
            <Reveal delay={120}>
              <Link
                href="/events"
                className="group hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-gold-soft md:inline-flex"
              >
                All Events
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((event, i) => (
              <Reveal key={event.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/events/${event.slug}`}
                  className="group relative block h-80 overflow-hidden rounded-sm border border-line"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-display text-2xl text-fog">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-mist opacity-0 transition-all duration-500 group-hover:opacity-100">
                      {event.short}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-soft">
                      Explore
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={90}>
              <Link
                href="/events"
                className="card group flex h-80 flex-col items-start justify-center gap-4 rounded-sm p-8"
              >
                <span className="font-display text-4xl text-gold-gradient">
                  05
                </span>
                <p className="text-lg text-fog">
                  Distinct event categories, each with specialised capability.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-gold-soft">
                  Browse all
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EVENT MANAGEMENT */}
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 glow-gold opacity-40" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 glow-gold opacity-30" />
        <div className="container-x relative">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <SectionHeading
              eyebrow="Complete Event Management"
              title="Everything the event needs,"
              gold="managed for you."
              description="A single, coordinated team handling every discipline of your event — from first concept to final teardown — so the experience is seamless and stress-free."
            />
            <Reveal delay={120}>
              <Link
                href="/event-management"
                className="btn btn-outline group whitespace-nowrap"
              >
                Explore All Services
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14">
            <ManagementShowcase services={MANAGEMENT_SERVICES} />
          </div>
        </div>
      </section>

      {/* PRODUCTION */}
      <section className="relative border-y border-line bg-night py-24 md:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 glow-gold opacity-50" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 glow-gold opacity-30" />
        <div className="container-x relative">
          <ProductionShowcase services={PRODUCTION_SERVICES} />
        </div>
      </section>

      {/* ARTIST MANAGEMENT */}
      <section className="py-24 md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="group relative">
              <div className="relative aspect-3/4 overflow-hidden rounded-sm border border-line shadow-[0_8px_30px_rgba(212,175,55,0.12)]">
                <Image
                  src={IMAGES.artist}
                  alt="Artist performing on stage"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Artist & Entertainment"
              title="Star power,"
              gold="perfectly managed."
              description="From Bollywood celebrities to international headliners, DJs, live bands and performers — we source the right talent and manage every rider, arrival and cue."
            />
            <ul className="mt-8 grid gap-x-6 gap-y-1 sm:grid-cols-2">
              {ARTISTS.map((a, i) => (
                <Reveal as="li" key={a.title} delay={(i % 2) * 80}>
                  <span className="group flex items-center gap-3 border-b border-line/60 py-3 text-sm text-mist transition-colors duration-300 hover:border-gold/20">
                    <span className="text-[7px] text-gold transition-transform duration-300 group-hover:scale-125">◆</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-fog">{a.title}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={160}>
              <Link
                href="/artist-management"
                className="btn btn-outline group mt-8 inline-flex items-center gap-2"
              >
                Explore Artist Management
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="border-t border-line bg-night py-24 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our Work"
              title="Selected"
              gold="productions."
            />
            <Reveal delay={120}>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-gold-soft"
              >
                Full Portfolio
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO.slice(0, 6).map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <div className="group relative h-72 overflow-hidden rounded-sm border border-line">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                      {p.category}
                    </span>
                    <h3 className="font-display mt-2 text-xl text-fog">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-ash opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {p.services}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 md:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Why Choose Us"
            title="Built for"
            gold="flawless delivery."
            description="Seven reasons clients trust Drona Productions with their most important events."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((item, i) => (
              <ServiceCard key={item.title} item={item} index={i} numbered />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
