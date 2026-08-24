"use client";

import { useState } from "react";

const reasons = [
  {
    num: "01",
    title: "End-to-End Event Management",
    desc: "We take total ownership of your project, starting from initial concepts and licensing to logistics, staging, and site clean-up.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Professional Production Team",
    desc: "A specialized in-house crew including spatial designers, lighting operators, acoustic consultants, and artist managers.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Quality Equipment",
    desc: "Access to world-class tour gear, German hangers, massive sound systems, active LED arrays, and rigging rigs.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "Experienced On-Ground Team",
    desc: "Trained field staff managing security channels, gate access, crowd control, and coordination during live shows.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "05",
    title: "Artist & Entertainment Network",
    desc: "Direct booking channels with Bollywood celebrity management, major international acts, live bands, and top hosts.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "06",
    title: "Single-Point Event Coordination",
    desc: "You collaborate with one dedicated project manager. We orchestrate the entire team of technicians and vendors behind the scenes.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "07",
    title: "Complete Technical Support",
    desc: "Fail-safes, backups, power distributions, and structural certifications are standard for every event setup.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-2 mb-3">
              <span className="eyebrow">Why Partner With Us</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-fog font-normal leading-tight tracking-tight">
              Executing Without Compromise
            </h2>
            <div className="h-1 w-20 bg-gold mt-6 mb-6" />
            <p className="text-mist text-sm md:text-base font-normal leading-relaxed max-w-sm">
              We eliminate the stress of managing multiple agencies. By keeping planning, 
              coordination, and production equipment in-house, we guarantee consistency in quality and execution.
            </p>
          </div>

          {/* Right Column: Pillars List */}
          <div className="lg:col-span-7 space-y-8">
            {reasons.map((item) => (
              <div 
                key={item.num} 
                className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-stretch sm:items-start group border-b border-zinc-900/60 pb-8 last:border-0 last:pb-0"
              >
                {/* Image Section */}
                <div className="w-full sm:w-36 h-40 sm:h-24 shrink-0 relative overflow-hidden rounded-sm border border-zinc-900 bg-zinc-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/5 transition-colors duration-300" />
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                  {/* Number & Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs tracking-widest text-gold-soft font-semibold">
                      {item.num}
                    </span>
                    <span className="text-zinc-800">/</span>
                    <h3 className="text-xs md:text-sm font-bold tracking-wider text-white uppercase group-hover:text-gold-soft transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-mist text-sm md:text-base font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}



