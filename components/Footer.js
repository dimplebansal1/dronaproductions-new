"use client";

import Image from "next/image";

export default function Footer() {
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

  const handleNavClick = (e, href) => {
    e.preventDefault();
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
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-zinc-900">
          
          {/* Logo & Narrative Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-12 w-28 md:h-14 md:w-36">
              <Image
                src="/logo.png"
                alt="Drona Productions"
                fill
                sizes="(max-width: 768px) 112px, 144px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-zinc-500 text-xs md:text-sm font-normal leading-relaxed max-w-sm">
              Drona Productions is a complete event management and production company. 
              We own and operate stadium-grade sound systems, intelligent lighting, staging rigs, 
              and manage premier artistic talents.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-xs md:text-sm text-zinc-400 hover:text-gold transition-colors duration-200 uppercase"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2">
                Enquiries
              </h4>
              <p className="text-xs md:text-sm">
                <a href="mailto:info@dronaproductions.in" className="text-gold hover:underline font-medium">
                  info@dronaproductions.in
                </a>
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2">
                Office Address
              </h4>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                B-36, Sector 99,<br />
                Noida, Uttar Pradesh
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2">
                Connect
              </h4>
              <a 
                href="https://www.instagram.com/dronaproductionsofficial?igsh=eDFvMWFzdG40Ym51" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs md:text-sm text-zinc-400 hover:text-gold transition-colors duration-200 inline-flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/share/1EriBKJ4h1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs md:text-sm text-zinc-400 hover:text-gold transition-colors duration-200 inline-flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Panel */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-600 font-light uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Drona Productions. Sound | Light | Stage. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-[11px] text-zinc-700 uppercase tracking-widest">
              Premium Event Management & Production
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}


