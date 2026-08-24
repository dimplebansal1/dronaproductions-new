"use client";

import { useState } from "react";

const categories = ["ALL", "Weddings", "Government Events", "Concerts", "Social Events", "Production Setup"];

const projects = [
  {
    id: 1,
    title: "Royal Heritage Palace Wedding",
    category: "Weddings",
    eventType: "Luxury Destination Wedding",
    services: ["Event Planning", "Venue Management", "Décor & Theming", "Stage Set Design", "Hospitality Management"],
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "National Trade & Technology Summit",
    category: "Government Events",
    eventType: "State Protocol Summit",
    services: ["Stage Production", "Protocol Management", "LED Walls & AV Support", "VVIP Seating & Lounge"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Bollywood Mega Live Tour",
    category: "Concerts",
    eventType: "Live Arena Concert",
    services: ["Stage Rigging", "Professional Sound Systems", "Intelligent Lighting", "Artist Tech Specialist"],
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Oceanfront Luxury Soirée",
    category: "Social Events",
    eventType: "Private Celebration",
    services: ["Decor & Theming", "Guest Management", "Catering Coordination", "DJs & Live Band Setup"],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Independence Day Arena Setup",
    category: "Production Setup",
    eventType: "Technical Production",
    services: ["German Hanger Setup", "Aluminum Trussing & Rigging", "Intelligent Lighting", "Event Infrastructure"],
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Bespoke Beach Wedding",
    category: "Weddings",
    eventType: "Destination Beach Wedding",
    services: ["Planning & Concept", "Decor Design", "Stage Set Construction", "Photography Management"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects = selectedCategory === "ALL"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="bg-black py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header & Filter controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-gold/80" />
              <span className="text-[11.5px] font-semibold tracking-[0.28em] text-gold uppercase">
                Case Studies & Proof
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight">
              Our Work
            </h2>
          </div>

          {/* Filters List */}
          <div className="flex flex-wrap gap-2 border-b border-zinc-900 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                suppressHydrationWarning={true}
                className={`text-[10px] md:text-xs font-semibold tracking-widest uppercase px-3 py-2 transition-all duration-300 border-b-2 ${
                  selectedCategory === category
                    ? "text-gold border-gold"
                    : "text-zinc-500 border-transparent hover:text-zinc-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative h-96 w-full border border-zinc-900 overflow-hidden flex flex-col justify-end p-8"
            >
              {/* Image backdrop */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              {/* Overlay gradients for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
              
              {/* Content Panel */}
              <div className="relative z-10 w-full transition-transform duration-300 group-hover:-translate-y-2">
                {/* Event Type */}
                <span className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase block mb-2">
                  {project.eventType}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-white font-light tracking-tight mb-4">
                  {project.title}
                </h3>

                {/* Services Provided (Always visible) */}
                <div className="border-t border-zinc-900 pt-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase block mb-2">
                      Services Provided
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-light text-zinc-300 bg-zinc-900/60 px-2 py-1 border border-zinc-800/40"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


