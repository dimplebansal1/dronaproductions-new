import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { EVENTS } from "@/lib/data";

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.intro,
  };
}

export default async function EventDetailPage({ params }) {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);
  if (!event) notFound();

  const index = EVENTS.findIndex((e) => e.slug === slug);
  const next = EVENTS[(index + 1) % EVENTS.length];

  return (
    <>
      <PageHero
        eyebrow="Event Category"
        title={event.title}
        description={event.short}
        image={event.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: event.title },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Our Approach"
              title="Managed for"
              gold={event.title.toLowerCase() + "."}
              description={event.intro}
            />
            <Reveal delay={160}>
              <div className="mt-8 rounded-sm border border-gold/20 bg-gold/5 p-6">
                <p className="text-sm leading-relaxed text-mist">
                  Equipment, staging, sound, lighting and technical builds are
                  detailed once in our{" "}
                  <Link
                    href="/production"
                    className="font-semibold text-gold-soft underline-offset-4 hover:underline"
                  >
                    Production &amp; Technical
                  </Link>{" "}
                  section — and deployed for this event as needed.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <Link href="/contact" className="btn btn-gold mt-8 inline-flex">
                Plan a {event.title.replace(/s$/, "")} <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                What we manage
              </h3>
            </Reveal>
            <ul className="mt-6 space-y-4">
              {event.capabilities.map((cap, i) => (
                <Reveal as="li" key={cap} delay={(i % 4) * 70}>
                  <div className="flex items-start gap-4 rounded-sm border border-line bg-charcoal p-5 transition hover:border-gold/40">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-soft">
                      <Check size={13} />
                    </span>
                    <p className="text-base text-mist">{cap}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Next category */}
      <section className="border-t border-line bg-night py-16">
        <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate">
              Next category
            </p>
            <p className="font-display mt-2 text-2xl text-fog">{next.title}</p>
          </div>
          <Link href={`/events/${next.slug}`} className="btn btn-outline">
            Continue <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}
