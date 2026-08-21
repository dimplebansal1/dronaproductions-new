import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import { COMPANY, WHY_CHOOSE, STATS, IMAGES } from "@/lib/data";

export const metadata = {
  title: "About",
  description:
    "Drona Productions is a complete event management & production company based in Noida, delivering end-to-end event execution with in-house production and artist management.",
};

const CAPABILITIES = [
  "End-to-end event management",
  "In-house production & technical",
  "Artist & entertainment network",
  "Experienced on-ground teams",
  "Single-point coordination",
  "Pan-India execution",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Where vision meets"
        gold="flawless execution."
        description="Drona Productions is a complete event management & production company — built to design, engineer and deliver premium events from a single, accountable team."
        image={IMAGES.team}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      /> 

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="A complete production"
              gold="house."
              description="We founded Drona Productions on a simple belief: an event should feel effortless to the host and unforgettable to the guest. To make that possible, we brought management, production and talent together under one roof."
            />
            <Reveal delay={160}>
              <p className="mt-6 text-base leading-relaxed text-ash">
                From grand weddings and government ceremonies to arena concerts,
                conferences and private celebrations, our teams handle every
                detail — creative direction, technical production, hospitality
                and on-ground execution — so nothing is left to chance.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {CAPABILITIES.map((c, i) => (
                <Reveal as="div" key={c} delay={(i % 2) * 80}>
                  <span className="flex items-center gap-3 text-sm text-mist">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {c}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <div className="relative aspect-4/5 overflow-hidden rounded-sm border border-line shadow-[0_8px_30px_rgba(212,175,55,0.12)]">
              <Image
                src={IMAGES.decor}
                alt="Event styling by Drona Productions"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden border-y border-line bg-night py-16 md:py-20">
        {/* Soft atmospheric background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-[60rem] -translate-x-1/2 -translate-y-1/2 glow-gold opacity-15" />
        
        <div className="container-x relative z-10">
          <div className="grid grid-cols-2 gap-y-10 gap-x-4 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="text-center">
                  <div className="font-display text-4xl text-gold-gradient md:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.15em] text-ash">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-sm border border-line bg-charcoal p-8 md:p-10 shadow-[0_8px_30px_rgba(212,175,55,0.12)]">
              <span className="eyebrow">Our Mission</span>
              <p className="mt-6 text-lg leading-relaxed text-mist">
                To deliver premium, stress-free events by uniting meticulous
                management, powerful in-house production and the right talent —
                exceeding expectations at every scale.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-sm border border-line bg-charcoal p-8 md:p-10 shadow-[0_8px_30px_rgba(212,175,55,0.12)]">
              <span className="eyebrow">Our Vision</span>
              <p className="mt-6 text-lg leading-relaxed text-mist">
                To be India’s most trusted complete production house — the single
                partner clients rely on for their most important moments, from
                concept to curtain call.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="border-t border-line bg-night py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Leadership"
            title="Led by"
            gold="the founders."
            description="A hands-on partnership that stays close to every project."
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {COMPANY.partners.map((name, i) => (
              <Reveal key={name} delay={i * 100}>
                <div className="group rounded-sm border border-line bg-charcoal p-8 text-center transition hover:border-gold/40">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-gold/5 transition duration-300 group-hover:bg-gold-deep group-hover:border-gold-deep">
                    <span className="font-display text-2xl text-gold-soft transition duration-300 group-hover:text-ink">
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-xl text-fog">{name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold-soft">
                    Partner
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Why Choose Us"
            title="The Drona"
            gold="difference."
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
