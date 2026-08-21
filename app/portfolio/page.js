import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGrid from "@/components/PortfolioGrid";
import CTABand from "@/components/CTABand";
import { IMAGES } from "@/lib/data";

export const metadata = {
  title: "Portfolio",
  description:
    "Selected work from Drona Productions across weddings, government events, concerts, social events, conferences and production setups.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="A portfolio of"
        gold="unforgettable events."
        description="Every project pairs an event type with the exact services we delivered on the ground."
        image={IMAGES.heroWedding}
        crumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Filter"
            title="Browse by"
            gold="category."
          />
          <div className="mt-12">
            <PortfolioGrid />
          </div>
        </div>
      </section>

      <CTABand
        title="Your event could be next."
        text="Let’s create work worth adding to this list."
      />
    </>
  );
}
