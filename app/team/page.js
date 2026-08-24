import PageHero from "@/components/PageHero";
import Team from "@/components/Team";
import CTABand from "@/components/CTABand";
import { IMAGES } from "@/lib/data";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the leadership team behind Drona Productions. Dedicated event management, production, and hospitality professionals in Noida.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The minds behind"
        gold="the magic."
        description="Meet the leadership and experts who bring your events to life with flawless coordination and technical mastery."
        image={IMAGES.team}
        crumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
      />

      <Team />

      <CTABand />
    </>
  );
}
