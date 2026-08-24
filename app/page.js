import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EventCategories from "@/components/EventCategories";
import EventServices from "@/components/EventServices";
import TechnicalSolutions from "@/components/TechnicalSolutions";
import ArtistManagement from "@/components/ArtistManagement";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <EventCategories />
        <EventServices />
        <TechnicalSolutions />
        <ArtistManagement />
        <Portfolio />
        <WhyChooseUs />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
