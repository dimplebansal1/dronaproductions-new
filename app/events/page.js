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
        <div className="container-x">
          <div className="flex flex-col gap-4 md:gap-6">
            {EVENTS.map((event, i) => (
              <Reveal key={event.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/events/${event.slug}`}
                  className="group grid overflow-hidden rounded-sm border border-line bg-gradient-to-br from-charcoal/80 to-ink/90 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_20px_50px_-20px_rgba(212,175,55,0.12)] md:grid-cols-2"
                >
                  <div className={`relative h-64 overflow-hidden md:h-full md:min-h-[24rem] ${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                  </div>
                  <div className={`flex flex-col justify-center p-8 md:p-14 ${i % 2 === 0 ? "md:order-2 md:border-l md:border-line/60" : "md:order-1 md:border-r md:border-line/60"}`}>
                    <span className="font-display text-5xl md:text-6xl text-line transition-colors duration-500 group-hover:text-gold/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display mt-4 text-3xl text-fog md:text-4xl group-hover:text-gold-soft transition-colors duration-300">
                      {event.title}
                    </h2>
                    <p className="mt-4 max-w-md text-sm md:text-base leading-relaxed text-ash">
                      {event.intro}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {event.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-line bg-ink/30 px-3 py-1 text-xs text-mist transition-all duration-300 hover:bg-gold/10 hover:border-gold/40 hover:text-gold-soft cursor-default"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                      View Capabilities
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Not sure which category fits?"
        text="Tell us about your event and we’ll shape the right team and plan around it."
      />
    </>
  );
}
