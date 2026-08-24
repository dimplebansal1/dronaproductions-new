"use client";

import { useState, useEffect } from "react";

const artists = [
  {
    title: "Bollywood Celebrity Artists",
    desc: "Direct coordination for bookings, contract negotiations, travel logistics, VVIP security guards, and full technical compliance for major Indian cinema stars and singers.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "International Artists",
    desc: "Managing visa documentation, foreign customs coordination, local logistics, translation needs, and technical gear riders for global performers and acts.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Live Bands",
    desc: "Sufi, rock, fusion, pop, and classical live bands. We manage full backline instrument kits, audio routing, soundchecks, and monitor setups.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "DJs",
    desc: "Top electronic and commercial club DJs. We provide industry-standard mixers, media players (Pioneer DJ), and high-output stage monitor systems.",
    image: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Anchors / Emcees",
    desc: "Professional emcees, corporate hosts, and bilingual anchors to guide show flows, engage audiences, and maintain event schedules.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Dancers & Performers",
    desc: "Theatrical acts, custom dance troupes, aerialists, classical folk artists, and special performance ensembles to fit thematic stages.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Artist Coordination & Management",
    desc: "End-to-end artist liaison covering air travel, hotel accommodations, backstage green rooms, food preferences, and precise stage cueing.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ArtistManagement() {
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setHoveredIdx((prevIdx) => (prevIdx + 1) % artists.length);
    }, 4000); // changes every 4 seconds

    return () => clearInterval(timer);
  }, [hoveredIdx, isHovered]);

  return (
    <section id="artists" className="bg-black py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-gold/80" />
              <span className="text-[11.5px] font-semibold tracking-[0.28em] text-gold uppercase">
                Celebrity & Talent Booking
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight">
              Artist & Entertainment
            </h2>
          </div>
          <div className="lg:col-span-6 text-left">
            <p className="text-zinc-500 text-sm md:text-base font-normal leading-relaxed max-w-xl lg:ml-auto">
              We manage relationships with top talents and coordinate their on-stage execution, 
              handling logistics, staging, and technical requirements flawlessly.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Left Column: Image Banner */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Asymmetric Artistic Placeholder Visual */}
            <div className="relative flex-grow min-h-[350px] lg:min-h-0 h-64 lg:h-full w-full border border-zinc-900 overflow-hidden group">
              <img
                key={hoveredIdx}
                src={artists[hoveredIdx].image}
                alt={artists[hoveredIdx].title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="h-[1px] w-4 bg-gold/75" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                    Spotlight
                  </span>
                </div>
                <span className="text-sm font-medium text-white tracking-wide uppercase">
                  {artists[hoveredIdx].title}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Artist Categories */}
          <div className="lg:col-span-7 flex flex-col justify-center divide-y divide-zinc-900/60 border-t border-b border-zinc-900/60">
            {artists.map((art, idx) => {
              const isActive = hoveredIdx === idx;
              const serialNum = String(idx + 1).padStart(2, "0");
              return (
                <div
                  key={idx}
                  onClick={() => setHoveredIdx(idx)}
                  className="py-6 cursor-pointer transition-all duration-300 group"
                >
                  {/* Accordion Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-left">
                      {/* Number Index */}
                      <span className={`font-mono text-xs tracking-widest transition-colors duration-300 ${
                        isActive ? "text-gold" : "text-zinc-700 group-hover:text-zinc-500"
                      }`}>
                        {serialNum}
                      </span>
                      
                      {/* Slash Divider */}
                      <span className="font-light text-xs text-zinc-800">/</span>

                      {/* Header Title */}
                      <h3 className={`text-xs md:text-sm font-bold tracking-wider uppercase transition-colors duration-300 ${
                        isActive ? "text-gold" : "text-white group-hover:text-gold"
                      }`}>
                        {art.title}
                      </h3>
                    </div>

                    {/* Plus/Minus Indicator */}
                    <span className="font-mono text-xs text-gold mr-2 select-none">
                      {isActive ? "—" : "+"}
                    </span>
                  </div>
                  
                  {/* Expandable detail description */}
                  <div className={`grid transition-all duration-300 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100 mt-4 pl-12" : "grid-rows-[0fr] opacity-0"
                  }`}>
                    <div className="overflow-hidden">
                      <p className="text-zinc-400 text-xs md:text-sm font-normal leading-relaxed max-w-2xl">
                        {art.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}



