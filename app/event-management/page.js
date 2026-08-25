import Link from "next/link";
import { Wrench, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import { MANAGEMENT_SERVICES, IMAGES } from "@/lib/data";

export const metadata = {
  title: "Complete Event Management",
  description:
    "Event planning & concept, venue management, décor & theming, stage & set design, photography, guest & hospitality management, on-ground coordination and complete execution.",
};

const PROCESS = [
  {
    step: "01",
    title: "Discover & Conceptualise",
    desc: "We understand your vision, objectives and audience, then shape a concept and creative direction.",
  },
  {
    step: "02",
    title: "Plan & Design",
    desc: "Detailed planning — venue, décor, staging, timelines and budgets — engineered around the concept.",
  },
  {
    step: "03",
    title: "Coordinate & Build",
    desc: "Vendors, logistics and production come together under a single point of coordination.",
  },
  {
    step: "04",
    title: "Execute & Deliver",
    desc: "Our on-ground team runs the show to the second — from load-in to a clean, complete teardown.",
  },
];

export default function EventManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Complete Event Management"
        title="Every discipline,"
        gold="one accountable team."
        description="From the first idea to the final teardown, we manage every moving part of your event so the experience feels effortless."
        image={IMAGES.decor}
        crumbs={[{ label: "Home", href: "/" }, { label: "Event Management" }]}
      />

      <section id="explore" className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Our Services"
            title="Full-service"
            gold="event management."
            description="Ten core capabilities that cover the complete lifecycle of your event."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {MANAGEMENT_SERVICES.map((item, i) => (
              <ServiceCard key={item.title} item={item} index={i} numbered />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-line bg-night py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="How We Work"
            title="A proven"
            gold="four-step process."
            description="Structured, transparent and built around a single point of contact."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line/40 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="group h-full bg-charcoal p-8 transition hover:bg-elevated">
                  <span className="font-display text-4xl text-gold-gradient">
                    {p.step}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-fog">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[50rem] -translate-x-1/2 -translate-y-1/2 glow-gold opacity-30" />
        
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl rounded-sm border border-line bg-gradient-to-b from-[#131313] to-[#0c0c0c] p-8 text-center md:p-12 transition-all duration-500 hover:border-gold/30 shadow-[0_8px_30px_rgba(212,175,55,0.06)]">
            <Reveal>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-mist">
                Looking for staging, sound, lighting, LED or rigging? Those live in
                our dedicated{" "}
                <Link
                  href="/production"
                  className="font-semibold text-gold-soft underline-offset-4 hover:underline"
                >
                  Production &amp; Technical
                </Link>{" "}
                section.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
