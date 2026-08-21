import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <Image
          src={IMAGES.heroConcert}
          alt="Live event production by Drona Productions"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div className="pointer-events-none absolute -left-40 top-1/4 h-[30rem] w-[30rem] glow-gold" />

        <div className="container-x relative z-10 pt-28">
          <Reveal>
            <span className="eyebrow">
              Complete Event Management &amp; Production
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[1.02] text-fog sm:text-6xl md:text-7xl">
              We craft <span className="text-gold-gradient">cinematic</span>{" "}
              events, end to end.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist">
              From concept to final execution — management, production and
              artist management under one roof. Premium. Modern. Professional.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn btn-gold">
                Get a Quote <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="btn btn-outline">
                View Our Work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-line/70 bg-line/40 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-ink/80 px-5 py-6 text-center">
                  <div className="font-display text-3xl text-gold-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[0.7rem] uppercase tracking-[0.15em] text-ash">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
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
              <div className="relative aspect-4/3 overflow-hidden rounded-sm border border-line">
                <Image
                  src={IMAGES.production}
                  alt="Stage production setup"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden w-44 rounded-sm border border-gold/30 bg-ink/90 p-5 backdrop-blur sm:block">
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
      <section className="relative overflow-hidden border-y border-line bg-night py-24 md:py-28">
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
            <div className="relative">
              <div className="relative aspect-3/4 overflow-hidden rounded-sm border border-line">
                <Image
                  src={IMAGES.artist}
                  alt="Artist performing on stage"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
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
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {ARTISTS.map((a, i) => (
                <Reveal as="li" key={a.title} delay={(i % 2) * 80}>
                  <span className="flex items-center gap-3 border-b border-line/60 py-3 text-sm text-mist">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {a.title}
                  </span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={160}>
              <Link
                href="/artist-management"
                className="btn btn-outline mt-8 inline-flex"
              >
                Explore Artist Management
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
