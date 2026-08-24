"use client";

import { useState, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const categories = [
  {
    id: "weddings",
    name: "Weddings",
    tagline: "Unforgettable Luxury Celebrations",
    description: "Creating magical, bespoke weddings that reflect your personal love story. We focus on curating an atmosphere of romance, premium hospitality, and breathtaking aesthetics.",
    capabilities: [
      "Bespoke Decor & Theme Styling",
      "VVIP Guest & Hospitality Management",
      "Seamless Wedding Day Timeline Coordination",
      "Creative Bride & Groom Entry Concepts",
      "Specialty Entertainment & Artist Curation",
      "Destination Logistics & Venue Layout"
    ],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "social",
    name: "Social & Private Events",
    tagline: "Exclusive Private Gatherings",
    description: "Whether it is a milestone anniversary, a high-society gala, or an intimate birthday affair, we deliver elite social event management with premium custom touches.",
    capabilities: [
      "Custom Thematic Concepts",
      "Entertainment & DJ Integration",
      "Bespoke Catering & Mixology Setup",
      "Guest Flow & On-Ground Supervision",
      "Bespoke Photo & Video Coordination",
      "Privately Hosted Security Details"
    ],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "government",
    name: "Government Events",
    tagline: "Dignified Protocol & Flawless Security",
    description: "Handling high-profile summits, official inaugurations, and state-level government programs with strict adherence to official protocols and security standards.",
    capabilities: [
      "Strict Protocol & Protocol Management",
      "VVIP Seating & Lounge Coordination",
      "Security & Media Liaison",
      "Stage Setup & Official Decor",
      "Teleprompter & Multilingual AV Integration",
      "Clear Public Entry-Exit Routing"
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "concerts",
    name: "Concerts & Live Shows",
    tagline: "High-Energy Arena Execution",
    description: "Engineering massive rock shows, celebrity performances, and live music tours. We specialize in crowd dynamics and star-studded artist hospitality.",
    capabilities: [
      "Artist Hospitality & Green Room Setup",
      "Crowd Management & Barricading Strategy",
      "Bollywood/International Artist Liaison",
      "Ticket Counter & RFID Gate Coordination",
      "Emergency & Safety Permissions Liaison",
      "Show-Flow & Artist Coordination"
    ],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "conferences",
    name: "Conferences & Exhibitions",
    tagline: "Polished Corporate Spaces",
    description: "Maximizing networking value and branding impact for commercial trade shows, product launches, global corporate conferences, and company meetups.",
    capabilities: [
      "Corporate Registration & Badge Systems",
      "Exhibitor Booth Planning & Fabrications",
      "High-End Panel Presentation AV Integration",
      "Interactive Networking Lounges",
      "Corporate Branding & Signage Setup",
      "On-Time Keynote Speaker Coordination"
    ],
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop"
  }
];

export default function EventCategories() {
  const handleInquire = (categoryName) => {
    const contactForm = document.querySelector("#contact");
    if (contactForm) {
      const selectElement = document.querySelector('select[name="eventType"]');
      if (selectElement) {
        selectElement.value = categoryName;
      }
      
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactForm.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="events" className="bg-black py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="eyebrow">What We Do</span>
            </div>
            <Reveal>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-fog font-normal leading-tight tracking-tight">
                We Manage
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 text-left">
            <Reveal delay={100}>
              <p className="text-mist text-lg font-normal leading-relaxed max-w-xl lg:ml-auto">
                We deliver distinct event management strategies tailored to the precise requirements 
                of each environment. Select a category below to view our operational capabilities.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 3-Column Grid Layout (Aligned to start, not centered) */}
        <div className="flex flex-wrap justify-start gap-6">
          {categories.map((category) => {
            return (
              <div
                key={category.id}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] h-[560px] relative overflow-hidden rounded-sm border border-line bg-zinc-950 cursor-pointer group hover:border-gold/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.05)] transition-all duration-500"
              >
                {/* Background Image and Overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 filter grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-[0.7]"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/25 group-hover:from-black group-hover:via-black/90 group-hover:to-black/35 transition-all duration-500 z-10" />
                </div>

                {/* Content Panel */}
                <div className="relative z-20 flex flex-col justify-end h-full p-6 md:p-8">
                  
                  {/* Sliding Container (Always visible on mobile/tablet, slides up on desktop hover) */}
                  <div className="transform lg:translate-y-[220px] lg:group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                    
                    {/* Tagline */}
                    <span className="text-xs font-semibold tracking-[0.28em] text-gold-soft uppercase block mb-2">
                      {category.tagline}
                    </span>

                    {/* Category Title */}
                    <h3 className="font-serif text-3xl md:text-4xl text-white font-normal tracking-tight mb-4">
                      {category.name}
                    </h3>

                    {/* Description */}
                    <p className="text-mist text-sm md:text-base font-normal leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {category.description}
                    </p>

                    {/* Capabilities (Hidden on desktop, fades/slides in on hover) */}
                    <div className="lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      <h4 className="text-xs md:text-sm font-bold tracking-[0.15em] text-zinc-400 uppercase mb-3.5 flex items-center gap-2">
                        <span className="h-px w-3 bg-gold/50" />
                        Core Capabilities & Focus
                      </h4>
                      <ul className="flex flex-col gap-2 mb-5">
                        {category.capabilities.slice(0, 4).map((cap, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-mist text-sm md:text-base font-normal leading-snug">
                            <Check className="text-gold-soft mt-0.5 w-4 h-4 shrink-0" />
                            <span className="truncate">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Inquire Button (Hidden on desktop, fades/slides in on hover) */}
                    <div className="lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Avoid triggering card events if any
                          handleInquire(category.name);
                        }}
                        suppressHydrationWarning={true}
                        className="btn btn-outline py-2.5 px-5 text-xs font-bold w-full text-center group/btn flex items-center justify-center gap-2 mt-2"
                      >
                        Enquire Now
                        <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 shrink-0" />
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
