"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "EVENTS", href: "#events" },
    { label: "EVENT MANAGEMENT", href: "#management" },
    { label: "PRODUCTION", href: "#production" },
    { label: "ARTIST MANAGEMENT", href: "#artists" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "ABOUT", href: "#about" },
    { label: "LEADERSHIP", href: "#leadership" },
    { label: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navItems.map((item) => item.href.substring(1));
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

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-zinc-900/80 shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Top Info Bar */}
        <div
          className={`hidden md:block border-b border-zinc-800/60 bg-transparent transition-all duration-300 ease-in-out ${
            isScrolled
              ? "max-h-0 py-0 overflow-hidden opacity-0 border-b-0"
              : "max-h-12 py-2.5 opacity-100"
          }`}
        >
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between text-[10px] font-semibold tracking-[0.15em] text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-gold text-xs">◆</span>
              <span className="uppercase">Complete Event Management & Production</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:info@dronaproductions.in"
                className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5 text-gold fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>INFO@DRONAPRODUCTIONS.IN</span>
              </a>
              <span className="text-zinc-800">|</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/dronaproductionsofficial?igsh=eDFvMWFzdG40Ym51"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-gold transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Header */}
        <div
          className={`w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative z-50 transition-all duration-300 ${
            isScrolled ? "py-3" : "py-5"
          }`}
        >
          {/* Left Side: Logo + Nav Group */}
          <div className="flex items-center gap-3 xl:gap-4 2xl:gap-8">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="relative flex items-center gap-3 group">
              <div className="relative h-10 w-24 md:h-12 md:w-30 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Drona Productions"
                  fill
                  sizes="(max-width: 768px) 96px, 120px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-0">
              {navItems.map((item, index) => (
                <div key={item.label} className="flex items-center relative group">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[10px] 2xl:text-[12px] font-semibold tracking-[0.08em] 2xl:tracking-[0.12em] transition-colors duration-200 px-1.5 2xl:px-3 py-2.5 whitespace-nowrap relative text-zinc-400 hover:text-white"
                  >
                    {item.label}
                    {/* Active Gold Underline */}
                    <span
                      className={`absolute bottom-0 left-1 right-1 h-[2px] bg-gold transition-all duration-300 origin-center ${
                        activeSection === item.href.substring(1)
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                </div>
              ))}
            </nav>
          </div>

          {/* Desktop CTA Button (Right) */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden xl:inline-block border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 text-[10px] 2xl:text-[12px] font-bold tracking-[0.12em] px-3 2xl:px-4 py-2 2xl:py-2.5 rounded-none uppercase whitespace-nowrap xl:ml-4 2xl:ml-6"
          >
            Get a Quote
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            suppressHydrationWarning={true}
            className="xl:hidden text-zinc-100 focus:outline-none p-2"
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-[1.5px] bg-zinc-100 transition-all duration-300 ${
                  isMobileMenuOpen ? "transform rotate-45 translate-y-[9px] bg-gold" : ""
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-zinc-100 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-zinc-100 transition-all duration-300 ${
                  isMobileMenuOpen ? "transform -rotate-45 -translate-y-[9px] bg-gold" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay (Sibling Layout) */}
      <div
        className={`fixed inset-0 bg-black z-45 transition-all duration-300 xl:hidden flex flex-col overflow-y-auto ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top Spacer to start menu links below the sticky header bar */}
        <div className="h-[68px] md:h-[80px] flex-shrink-0" />

        <nav className="flex flex-col items-center justify-start flex-grow gap-4 py-8 px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-base font-medium tracking-[0.2em] text-zinc-300 hover:text-white transition-colors duration-200 uppercase py-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-6 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 text-sm font-bold tracking-[0.2em] px-8 py-3 rounded-none uppercase w-full max-w-[280px] text-center"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </>
  );
}


