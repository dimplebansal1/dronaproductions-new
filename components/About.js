"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-black py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Sticky Left Column: Large Editorial Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-2 mb-3">
              <span className="eyebrow">Who We Are</span>
            </div>
            <Reveal>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-fog font-normal leading-tight tracking-tight">
                Crafting Flawless Live Experiences
              </h2>
            </Reveal>
            <div className="h-[1px] w-20 bg-gold mt-6 mb-8" />
            
            {/* Visual Block: Cinematic Live Stage Scale */}
            <Reveal delay={100}>
              <div className="relative aspect-[4/3] w-full border border-zinc-900 bg-zinc-950 overflow-hidden group rounded-sm">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 grayscale contrast-125 brightness-50 group-hover:brightness-75"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-left z-10">
                  <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase block mb-1">
                    Live Operations
                  </span>
                  <span className="text-sm text-white font-normal uppercase tracking-wider block">
                    Stadium & Arena Staging Setup
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative Copy & Details */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={120}>
              <p className="text-mist text-base md:text-lg font-normal leading-relaxed">
                Drona Productions is a premier, complete event management and production company. 
                We offer end-to-end execution, bringing together sophisticated conceptual planning, 
                elite artist networks, and full-scale physical infrastructure to deliver seamless, 
                high-impact events across India.
              </p>
            </Reveal>
            
            <Reveal delay={180}>
              <p className="text-mist text-base md:text-lg font-normal leading-relaxed">
                Our professional team combines strategic coordination with technical expertise. Whether 
                constructing state-of-the-art concert arenas, executing protocol-driven government summits, 
                or designing luxury private celebrations, we take ownership of every operational layer. From 
                sound, light, and rigging to stage production and artist coordination, Drona Productions is your 
                single-point partner.
              </p>
            </Reveal>

            {/* Qualitative Capability Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-900">
              <Reveal delay={240}>
                <div>
                  <h3 className="text-sm md:text-base font-semibold tracking-[0.12em] text-gold-soft uppercase mb-2 flex items-center">
                    <span className="text-gold-soft mr-2 text-sm">✓</span> End-to-End Execution
                  </h3>
                  <p className="text-ash text-sm md:text-base font-normal leading-snug">
                    We handle everything from initial concept, venue management, and decor themes, 
                    to sound engineering, lighting controls, and full stage teardown.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div>
                  <h3 className="text-sm md:text-base font-semibold tracking-[0.12em] text-gold-soft uppercase mb-2 flex items-center">
                    <span className="text-gold-soft mr-2 text-sm">✓</span> In-House Infrastructure
                  </h3>
                  <p className="text-ash text-sm md:text-base font-normal leading-snug">
                    Unlike typical agencies, we control the production gear. German hangers, 
                    line arrays, truss systems, and AV setups are managed directly by our technical specialists.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div>
                  <h3 className="text-sm md:text-base font-semibold tracking-[0.12em] text-gold-soft uppercase mb-2 flex items-center">
                    <span className="text-gold-soft mr-2 text-sm">✓</span> Elite Artist Network
                  </h3>
                  <p className="text-ash text-sm md:text-base font-normal leading-snug">
                    Direct channels for booking and managing Bollywood celebrity artists, international 
                    performers, live bands, dancers, and top-tier emcees.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={360}>
                <div>
                  <h3 className="text-sm md:text-base font-semibold tracking-[0.12em] text-gold-soft uppercase mb-2 flex items-center">
                    <span className="text-gold-soft mr-2 text-sm">✓</span> Rigorous Coordination
                  </h3>
                  <p className="text-ash text-sm md:text-base font-normal leading-snug">
                    A dedicated team on the ground provides single-point event coordination, 
                    ensuring timelines are met and protocol is strictly observed.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
