"use client";

const solutions = [
  {
    title: "German Hanger & Pagoda Tent",
    details: "Certified, modular aluminum structures with fire-retardant PVC skins. Engineered to build weatherproof indoor arenas of any size on raw ground.",
    image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Stage Production",
    details: "Heavy-duty stage decks, structural layouts, custom ramps, and scenic fabrications built to withstand extreme loads and accommodate complex performances.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Professional Sound Systems",
    details: "Tour-grade line array configurations (L-Acoustics/JBL), subwoofers, digital mixing consoles, and professional audio engineers for acoustic precision.",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Intelligent Lighting",
    details: "Intelligent beam lights, LED washes, profile spots, pixel bars, and grandMA console operators programming custom light shows for live bands.",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "LED Walls & AV Support",
    details: "Ultra-fine pixel pitch indoor/outdoor LED screens, live multi-camera switchers, video splitters, and media servers for real-time visual displays.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Aluminum Trussing & Rigging",
    details: "Certified ground-support trussing, overhead rigging, and electric chain hoists designed to suspend audio, lighting, and heavy stage decor safely.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Bollywood Artist Tech Specialist",
    details: "Specialized crew handling riders for major Bollywood artists, ensuring full compliance with technical specs, monitors, and direct staging preferences.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Event Infrastructure",
    details: "Complete supporting logistics including mojo barricades, industrial silent generators, electrical distribution boards, and green rooms.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop"
  }
];

export default function TechnicalSolutions() {
  return (
    <section id="production" className="bg-black py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-gold/80" />
              <span className="text-[11.5px] font-semibold tracking-[0.28em] text-gold uppercase">
                Physical Infrastructure & Gear
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight">
              Production & Technical Solutions
            </h2>
          </div>
          <div className="lg:col-span-6 text-left">
            <p className="text-zinc-500 text-sm md:text-base font-normal leading-relaxed max-w-xl lg:ml-auto">
              We operate in-house event infrastructure and high-end technical systems, ensuring 
              structural safety, operational redundancy, and elite engineering.
            </p>
          </div>
        </div>

        {/* Separated Cards Layout (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, index) => (
            <div
              key={index}
              className="relative p-8 border border-zinc-900 bg-zinc-950/30 hover:border-gold/30 transition-all duration-500 flex flex-col group min-h-[290px] overflow-hidden"
            >
              {/* Background Image with Rich Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-105 opacity-40 saturate-[75%] brightness-90 group-hover:opacity-65"
                style={{ backgroundImage: `url('${sol.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10" />

              {/* Content Wrapper (Title & Description slide up on hover) */}
              <div className="relative z-10 flex flex-col justify-end h-full w-full">
                {/* Title */}
                <h3 className="text-sm font-semibold text-white tracking-wide uppercase transition-all duration-300 lg:group-hover:text-gold lg:group-hover:-translate-y-1">
                  {sol.title}
                </h3>
                
                {/* Detail Description */}
                <div className="max-h-[140px] opacity-100 mt-3 lg:max-h-0 lg:opacity-0 lg:overflow-hidden lg:mt-0 lg:transition-all lg:duration-500 lg:ease-in-out lg:group-hover:max-h-[140px] lg:group-hover:opacity-100 lg:group-hover:mt-3">
                  <p className="text-zinc-300 text-xs md:text-sm font-normal leading-relaxed">
                    {sol.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



