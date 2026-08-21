import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import { PRODUCTION_SERVICES, IMAGES } from "@/lib/data";

export const metadata = {
  title: "Production & Technical Solutions",
  description:
    "German hangar & pagoda tents, stage production, professional sound, intelligent lighting, LED walls & AV, aluminium trussing & rigging, Bollywood artist tech and complete event infrastructure.",
};

const GALLERY = [
  { src: IMAGES.lighting, label: "Intelligent Lighting" },
  { src: IMAGES.led, label: "LED Walls & AV" },
  { src: IMAGES.sound, label: "Professional Sound" },
  { src: IMAGES.tent, label: "German Hangar & Tents" },
];

export default function ProductionPage() {
  return (
    <>
      <PageHero
        eyebrow="Production & Technical"
        title="Technical production,"
        gold="done in-house."
        description="Owned equipment, certified rigging and an expert crew — engineered once, deployed reliably across every event. Explained here, not repeated on each event page."
        image={IMAGES.production}
        crumbs={[{ label: "Home", href: "/" }, { label: "Production" }]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Production Solutions"
            title="The technical"
            gold="backbone."
            description="Everything required to build and power a world-class stage and show."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTION_SERVICES.map((item, i) => (
              <ServiceCard key={item.title} item={item} index={i} numbered />
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="border-y border-line bg-night py-20 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="On The Ground"
            title="Built for"
            gold="scale & spectacle."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <Reveal key={g.label} delay={(i % 4) * 80}>
                <div className="group relative aspect-3/4 overflow-hidden rounded-sm border border-line">
                  <Image
                    src={g.src}
                    alt={g.label}
                    fill
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-sm font-semibold uppercase tracking-[0.15em] text-gold-soft">
                    {g.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPEC BAND */}
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {[
            {
              k: "Owned Inventory",
              v: "Premium sound, lighting & LED maintained to performance standard.",
            },
            {
              k: "Certified Rigging",
              v: "Aluminium trussing and rigging built to strict safety specification.",
            },
            {
              k: "Rider-Ready",
              v: "Technical delivery matched to Bollywood & international artist riders.",
            },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 90}>
              <div className="h-full rounded-sm border border-line bg-charcoal p-8">
                <div className="hairline w-16" />
                <h3 className="mt-5 font-display text-2xl text-fog">{s.k}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">{s.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        title="Have a technical rider or spec?"
        text="Send it over — our production team will scope the stage, power and rigging for your show."
      />
    </>
  );
}
