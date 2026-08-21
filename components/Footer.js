import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import { COMPANY, NAV, EVENTS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-night">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[60rem] -translate-x-1/2 glow-gold opacity-60" />
      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link
              href="/"
              className="group inline-block transition duration-300"
              aria-label="Drona Productions home"
            >
              <Image
                src="/images/Drona_png.png"
                alt="Drona Productions"
                width={240}
                height={160}
                sizes="(max-width: 640px) 180px, 220px"
                className="h-16 sm:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_22px_rgba(212,175,55,0.5)]"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ash">
              A complete event management & production company crafting premium,
              cinematic experiences from concept to final execution.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={COMPANY.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded border border-line text-mist transition duration-300 hover:bg-gold-deep hover:border-gold-deep hover:text-black"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={COMPANY.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded border border-line text-mist transition duration-300 hover:bg-gold-deep hover:border-gold-deep hover:text-black"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ash transition hover:text-fog"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              We Manage
            </h3>
            <ul className="mt-5 space-y-3">
              {EVENTS.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/events/${e.slug}`}
                    className="text-sm text-ash transition hover:text-fog"
                  >
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-ash">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold/70" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold/70" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition hover:text-fog"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate">
                Partners
              </p>
              <p className="mt-2 text-sm text-mist">
                {COMPANY.partners.join(" · ")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-slate sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="tracking-wide">
            Complete Event Management &amp; Production · Noida, India
          </p>
        </div>
      </div>
    </footer>
  );
}
