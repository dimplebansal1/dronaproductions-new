import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { EVENTS, IMAGES } from "@/lib/data";

export const metadata = {
  title: "Events We Manage",
  description:
    "Weddings, social & private events, government events, concerts & live shows, conferences & exhibitions — managed end to end by Drona Productions.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="We Manage"
        title="Events, engineered as"
        gold="experiences."
        description="Five distinct categories, each with a dedicated team and a tailored approach to management and execution."
        image={IMAGES.heroStage}
        crumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x space-y-6">
          {EVENTS.map((event, i) => (
            <Reveal key={event.slug} delay={(i % 2) * 80}>
              <Link
                href={`/events/${event.slug}`}
                className="group grid overflow-hidden rounded-sm border border-line bg-charcoal transition hover:border-gold/40 md:grid-cols-2"
              >
                <div className="relative h-64 overflow-hidden md:h-full md:min-h-[22rem]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent md:bg-gradient-to-r" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <span className="font-display text-5xl text-line transition group-hover:text-gold/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display mt-4 text-3xl text-fog md:text-4xl">
                    {event.title}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-ash">
                    {event.intro}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {event.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-line px-3 py-1 text-xs text-mist"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-gold-soft">
                    View Capabilities
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        title="Not sure which category fits?"
        text="Tell us about your event and we’ll shape the right team and plan around it."
      />
    </>
  );
}
