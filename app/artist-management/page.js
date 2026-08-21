import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import { ARTISTS, IMAGES } from "@/lib/data";

export const metadata = {
  title: "Artist & Entertainment Management",
  description:
    "Bollywood celebrities, international artists, DJs, live bands, anchors, dancers and performers — sourced, booked and managed end to end by Drona Productions.",
};

export default function ArtistManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Artist & Entertainment"
        title="The right talent,"
        gold="flawlessly delivered."
        description="Direct access to Bollywood, international and homegrown talent — with every rider, arrival and stage cue managed for you."
        image={IMAGES.dj}
        crumbs={[{ label: "Home", href: "/" }, { label: "Artist Management" }]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Who We Book"
            title="A full roster of"
            gold="entertainment."
            description="From headline acts to the crew that keeps the energy high all night."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ARTISTS.map((item, i) => (
              <ServiceCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT */}
      <section className="border-y border-line bg-night py-20 md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-4/5 overflow-hidden rounded-sm border border-line">
              <Image
                src={IMAGES.dancers}
                alt="Performers on stage"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="End-to-End Coordination"
              title="More than booking —"
              gold="full management."
              description="We don’t just connect you with talent. We manage the entire artist journey so performances land exactly as planned."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Artist sourcing, negotiation & confirmations",
                "Contracts, riders & technical requirements",
                "Travel, stay, hospitality & green-room setup",
                "Stage schedule, sound-check & cue management",
                "On-ground artist liaison throughout the event",
              ].map((line, i) => (
                <Reveal as="li" key={line} delay={(i % 5) * 70}>
                  <span className="flex items-center gap-3 border-b border-line/60 pb-4 text-base text-mist">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {line}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand
        title="Booking an artist for your event?"
        text="Tell us the vibe, date and budget — we’ll propose the perfect line-up and handle the rest."
        secondary={{ label: "See Production", href: "/production" }}
      />
    </>
  );
}
