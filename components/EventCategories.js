"use client";

import { useState, useEffect } from "react";

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
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = categories.findIndex((c) => c.id === prevTab.id);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex];
      });
    }, 4000); // changes every 4 seconds

    return () => clearInterval(timer);
  }, [activeTab, isHovered]);

  const handleInquire = (categoryName) => {
    const contactForm = document.querySelector("#contact");
    if (contactForm) {
      // Find event type input and set value
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
              <span className="h-[1px] w-6 bg-gold/80" />
              <span className="text-[11.5px] font-semibold tracking-[0.28em] text-gold uppercase">
                What We Do
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight">
              We Manage
            </h2>
          </div>
          <div className="lg:col-span-6 text-left">
            <p className="text-zinc-500 text-sm md:text-base font-normal leading-relaxed max-w-xl lg:ml-auto">
              We deliver distinct event management strategies tailored to the precise requirements 
              of each environment. Select a category below to view our operational capabilities.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Left: Tab Selector List */}
          <div className="lg:col-span-4 flex flex-col justify-start space-y-1">
            {categories.map((category, index) => {
              const isActive = activeTab.id === category.id;
              const serialNum = String(index + 1).padStart(2, "0");
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category)}
                  suppressHydrationWarning={true}
                  className="w-full text-left py-4 flex items-center gap-4 transition-all duration-300 group outline-none focus:outline-none border-b border-zinc-900/50 pb-4"
                >
                  {/* Serial Number */}
                  <span className={`font-mono text-xs tracking-widest transition-colors duration-300 ${
                    isActive ? "text-gold" : "text-zinc-700 group-hover:text-zinc-500"
                  }`}>
                    {serialNum}
                  </span>
                  
                  {/* Slash Divider */}
                  <span className="font-light text-xs text-zinc-800">/</span>

                  {/* Tab Label */}
                  <span className={`text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                    isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-200"
                  }`}>
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Capability Presenter */}
          <div className="lg:col-span-8 bg-zinc-950/40 border border-zinc-900/80 p-8 md:p-10 flex flex-col justify-between transition-all duration-500 relative overflow-hidden group min-h-[480px]">
            {/* Background styled glow */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold/3 rounded-full filter blur-[80px] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch">
              {/* Left Side: Content Text */}
              <div className="md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  {/* Category Subtitle */}
                  <span className="text-[11.5px] font-semibold tracking-[0.28em] text-gold uppercase block mb-2">
                    {activeTab.tagline}
                  </span>
                  
                  {/* Category Name */}
                  <h3 className="font-serif text-3xl md:text-4xl text-white font-light tracking-tight mb-6">
                    {activeTab.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-zinc-400 text-sm font-normal leading-relaxed mb-6">
                    {activeTab.description}
                  </p>

                  {/* Specific Management Capabilities */}
                  <h4 className="text-xs md:text-sm font-bold tracking-[0.15em] text-zinc-500 uppercase mb-3.5">
                    Core Capabilities & Focus
                  </h4>
                  
                  <ul className="flex flex-col gap-3">
                    {activeTab.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-zinc-300 text-xs md:text-sm font-light">
                        <span className="text-gold mt-1 text-[8px] md:text-[10px]">■</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side: Tab Related Image */}
              <div className="md:col-span-5 w-full relative aspect-video md:aspect-auto md:h-full min-h-[300px] rounded-sm overflow-hidden border border-zinc-900 group/img bg-zinc-950">
                <img
                  key={activeTab.id}
                  src={activeTab.image}
                  alt={activeTab.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105 animate-fade-in"
                />
                {/* Subtle dark gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
              </div>
            </div>

            {/* Inquire Action */}
            <div className="pt-6 mt-8 border-t border-zinc-900 flex items-center justify-between flex-wrap gap-4 z-10">
              <span className="text-xs text-zinc-500 font-light">
                Tailored setup & coordination options are available.
              </span>
              <button
                onClick={() => handleInquire(activeTab.name)}
                suppressHydrationWarning={true}
                className="border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 text-xs font-bold tracking-[0.15em] px-6 py-3 rounded-none uppercase"
              >
                Inquire for {activeTab.name}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



