import { Mail, MapPin, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { COMPANY, IMAGES } from "@/lib/data";

export const metadata = {
  title: "Contact & Get a Quote",
  description:
    "Get a quote from Drona Productions. Share your event details — type, date, location and requirement — and our team will craft a complete plan.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Let’s plan your"
        gold="next event."
        description="Share your query and requirements. For event production, artist and technical needs, our team will get back to you promptly."
        image={IMAGES.conference}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Info column */}
          <div>
            <Reveal>
              <span className="eyebrow">Reach Us</span>
              <h2 className="font-display mt-4 text-3xl text-fog">
                Welcome to Drona Productions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ash">
                For event production, artist &amp; technical requirements, share
                your query here — we’d love to hear about your celebration.
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              <Reveal delay={80}>
              <a
                  href={`mailto:${COMPANY.email}`}
                  className="group flex items-start gap-4 rounded-sm border border-line bg-charcoal p-5 transition duration-300 hover:border-gold/40 hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/25 bg-gold/5 text-gold-soft transition duration-300 group-hover:bg-gold-deep group-hover:border-gold-deep group-hover:text-ink">
                    <Mail size={20} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.15em] text-slate">
                      Enquiries
                    </span>
                    <span className="mt-1 block text-sm text-fog">
                      {COMPANY.email}
                    </span>
                  </span>
                </a>
              </Reveal>
 
              <Reveal delay={140}>
                <div className="group flex items-start gap-4 rounded-sm border border-line bg-charcoal p-5 transition duration-300 hover:border-gold/40 hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/25 bg-gold/5 text-gold-soft transition duration-300 group-hover:bg-gold-deep group-hover:border-gold-deep group-hover:text-ink">
                    <MapPin size={20} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.15em] text-slate">
                      Address
                    </span>
                    <span className="mt-1 block text-sm text-fog">
                      {COMPANY.address}
                    </span>
                  </span>
                </div>
              </Reveal>
 
              <Reveal delay={200}>
                <div className="group flex items-start gap-4 rounded-sm border border-line bg-charcoal p-5 transition duration-300 hover:border-gold/40 hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/25 bg-gold/5 text-gold-soft transition duration-300 group-hover:bg-gold-deep group-hover:border-gold-deep group-hover:text-ink">
                    <Clock size={20} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.15em] text-slate">
                      Response Time
                    </span>
                    <span className="mt-1 block text-sm text-fog">
                      Within 24 hours, all days
                    </span>
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={240}>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  Follow Us
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href={COMPANY.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-sm border border-line text-mist transition duration-300 hover:bg-gold-deep hover:border-gold-deep hover:text-black"
                  >
                    <InstagramIcon size={20} />
                  </a>
                  <a
                    href={COMPANY.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-sm border border-line text-mist transition duration-300 hover:bg-gold-deep hover:border-gold-deep hover:text-black"
                  >
                    <FacebookIcon size={20} />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-8 rounded-sm border border-gold/20 bg-gold/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate">
                  Partners
                </p>
                <p className="mt-2 text-sm text-mist">
                  {COMPANY.partners.join(" · ")}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
