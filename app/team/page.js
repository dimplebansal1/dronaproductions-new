import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/data";

export const metadata = {
  title: "Our Team | Drona Productions",
  description:
    "Meet the leadership team behind Drona Productions. Dedicated event management, production, and hospitality professionals in Noida.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PageHero
          eyebrow="Our Team"
          title="The minds behind"
          gold="the magic."
          description="Meet the leadership and experts who bring your events to life with flawless coordination and technical mastery."
          image={IMAGES.team}
          crumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
          hideBottomBar={true}
          actions={[
            { label: "Meet the Team", href: "#leadership", variant: "gold" },
            { label: "Get a Quote", href: "/#contact", variant: "outline" },
          ]}
        />
        <Team />
        <CTABand
          title="Ready to partner with our leaders?"
          text="Connect directly with our event heads and directors to discuss layout design, staging, custom infrastructure, and artist rosters."
          primary={{ label: "Talk to our Team", href: "/#contact" }}
          secondary={{ label: "Explore Our Work", href: "/#portfolio" }}
          variant="dark"
        />
      </main>
      <Footer />
    </>
  );
}
