"use client";

const services = [
  {
    num: "01",
    title: "Event Planning & Concept",
    description: "Architecting the core narrative, technical requirements, creative themes, and comprehensive operational timelines.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Venue Management",
    description: "Sourcing sites, conducting feasibility studies, negotiating leases, and securing necessary municipal/legal permissions.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Décor & Theming",
    description: "Designing the physical atmosphere through floral arrangements, luxurious fabrics, custom props, and color palettes.",
    image: "https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "Stage & Set Design",
    description: "Creating full 3D CAD renders and constructing customized stage platforms, backdrops, and scenic architecture.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "05",
    title: "Photography & Videography",
    description: "Deploying professional documentation teams to capture cinematic recaps, live broadcasts, and media-ready galleries.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "06",
    title: "Guest Management",
    description: "Managing invitations, RSVP databases, entry access controls, and custom greeting protocols at key gates.",
    image: "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "07",
    title: "Hospitality Management",
    description: "Directing VIP seating plans, guest transportation fleets, luxury lodging coordination, and catering logistics.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "08",
    title: "On-Ground Event Management",
    description: "Positioning floor managers, stage hands, and emergency crews to oversee safety and maintain schedule discipline.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "09",
    title: "Event Coordination",
    description: "Synchronizing all suppliers, artists, technicians, and local vendors under a single command channel.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop"
  },
  {
    num: "10",
    title: "Complete Event Execution",
    description: "Providing full operational oversight from the initial logistics load-in to final site restoration and hand-off.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800&auto=format&fit=crop"
  }
];

export default function EventServices() {
  return (
    <section id="management" className="bg-black py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-gold/80" />
              <span className="text-[11.5px] font-semibold tracking-[0.28em] text-gold uppercase">
                Management Excellence
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight">
              Complete Event Management
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-zinc-500 text-sm md:text-base font-normal leading-relaxed">
              We manage the complexity of live operations, integrating distinct specialized workflows 
              into a singular, seamless execution timeline. Here is our service blueprint.
            </p>
          </div>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-zinc-950/20 border border-zinc-900/60 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Section */}
                <div className="w-full aspect-[16/10] relative overflow-hidden bg-zinc-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle dark overlay */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  {/* Number and Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-gold tracking-widest">
                      {service.num}
                    </span>
                    <h3 className="text-sm md:text-base font-bold tracking-wider text-white uppercase">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-zinc-400 text-xs md:text-sm font-normal leading-relaxed">
                    {service.description}
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



