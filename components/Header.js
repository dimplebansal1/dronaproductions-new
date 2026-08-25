"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Mail } from "lucide-react";
import { NAV, COMPANY } from "@/lib/data";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Active section detection on scroll
      const sections = NAV.map((item) => item.href.substring(1));
      let currentSection = "home";
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const handleNavClick = (e, href) => {
    if (href.startsWith("/") && !href.includes("#")) {
      closeMenu();
      return;
    }

    const hashIndex = href.indexOf("#");
    const hash = hashIndex !== -1 ? href.substring(hashIndex) : "";

    if (pathname === "/" && hash) {
      e.preventDefault();
      closeMenu();
      const element = document.querySelector(hash);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      closeMenu();
    }
  };

  const isActive = (href) => {
    if (href === "/team") {
      return pathname === "/team";
    }
    if (pathname !== "/") {
      return false;
    }
    const hashIndex = href.indexOf("#");
    const section = hashIndex !== -1 ? href.substring(hashIndex + 1) : "";
    return section === activeSection;
  };

  return (
    <header className={`fixed inset-x-0 top-0 transition-all ${open ? "z-[60]" : "z-50"}`}>
      {/* Top Info Bar */}
      <div
        className={`hidden xl:block border-b border-line bg-ink/95 text-[0.62rem] md:text-[0.68rem] tracking-[0.18em] uppercase text-ash transition-all duration-500 overflow-hidden ${
          scrolled ? "h-0 opacity-0 border-b-0" : "h-9 opacity-100"
        }`}
      >
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center gap-2 select-none">
            <span className="text-[8px] md:text-[10px] text-gold-soft">◆</span>
            <span className="text-mist">{COMPANY.tagline}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1.5 transition hover:text-gold-soft"
            >
              <Mail size={11} className="text-gold-soft" />
              <span>{COMPANY.email}</span>
            </a>
            <span className="text-line">|</span>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition hover:text-gold-soft"
              >
                <InstagramIcon size={12} />
              </a>
              <a
                href={COMPANY.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition hover:text-gold-soft"
              >
                <FacebookIcon size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative transition-all duration-500 ${scrolled
          ? "border-b border-gold/10 bg-ink/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          : "border-b-0 border-transparent bg-gradient-to-b from-black/80 via-black/40 to-transparent"
          }`}
      >
        <nav
          className={`container-x flex items-center justify-between gap-4 transition-all duration-500 ${scrolled ? "py-2.5 lg:py-3.5" : "py-3.5 lg:py-6"
            }`}
        >
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e, "/#home")}
            className="group relative flex shrink-0 items-center py-1 transition duration-300"
            aria-label="Drona Productions home"
          >
            <Image
              src="/images/Drona_png.png"
              alt="Drona Productions"
              width={180}
              height={120}
              sizes="(max-width: 640px) 130px, 160px"
              className="h-11 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_18px_rgba(212,175,55,0.45)]"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-2 xl:flex">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`group relative block whitespace-nowrap rounded-full px-3.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.11em] transition-colors duration-300 ${active
                      ? "text-gold-soft"
                      : "text-mist hover:text-fog"
                      }`}
                  >
                    <span className="relative">{item.label}</span>
                    <span
                      className={`absolute inset-x-4 -bottom-px h-px origin-center bg-gold-gradient transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden shrink-0 xl:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn btn-gold group px-5 py-2.5 text-[0.72rem]"
            >
              Get a Quote
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-fog transition hover:border-gold/50 hover:text-gold-soft xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Gold hairline accent */}
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"
            }`}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[64px] z-40 origin-top bg-ink/98 backdrop-blur-xl transition-all duration-300 xl:hidden overflow-y-auto ${open
          ? "pointer-events-auto opacity-100 visible"
          : "pointer-events-none -translate-y-2 opacity-0 invisible"
          }`}
      >
        <div className="container-x flex min-h-[calc(100dvh-64px)] flex-col pb-16 pt-8">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group flex items-center border-b border-line/50 py-4 transition ${isActive(item.href) ? "text-gold-soft" : "text-mist"
                    }`}
                >
                  <span className="font-display text-2xl tracking-wide transition-transform duration-300 group-hover:translate-x-1">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="btn btn-gold w-full"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <div className="mt-6 flex items-center justify-between text-xs text-ash">
              <a
                href={`mailto:${COMPANY.email}`}
                className="transition hover:text-gold-soft"
              >
                {COMPANY.email}
              </a>
              <div className="flex items-center gap-4">
                <a
                  href={COMPANY.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition hover:text-gold-soft"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={COMPANY.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="transition hover:text-gold-soft"
                >
                  <FacebookIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
