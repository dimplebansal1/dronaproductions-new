"use client";

const team = [
  {
    name: "Mohit Mudgal",
    role: "Managing Director",
    company: "Drona Productions",
    quote: "“At Drona Productions, we understand that behind every event, there is a lot of hard work, expectations, and stress.\n\nThat's why we are here.\n\nOur promise is simple - Aapki har zarurat, har chinta ab hamari zimmedari hai.\n\nFrom the smallest detail to the biggest arrangement, venue, decoration, entertainment, productions, photography, guest management - you just share your vision, and we will handle everything. No tension, no hassle, only celebration.\n\nWe are not just your event managers, we are your partners who ensure that you actually enjoy your own event while we do all the work.\n\nWelcome to a stress-free, memorable event journey with Drona Productions.”",
    image: "/images/managing-director.jpeg"
  },
  {
    name: "Mansi Goswami",
    role: "Director – Finance & Administration",
    company: "Drona Productions",
    quote: "“A great event needs great financial planning. We believe the right budgeting and financial management are the foundation of smooth execution, quality and successful events.”",
    image: "/images/finance.jpeg"
  },
  {
    name: "Priyanshi Tomer",
    role: "Head – Creative & Marketing",
    company: "Drona Productions",
    quote: "“An event is not just a date, it's a feeling that stays forever.\n\nAt Drona Productions, we specialize in transforming ideas into extraordinary experiences. Whether it's a high-profile corporate event, a luxurious wedding, or a grand celebration, we ensure every detail speaks of perfection.\n\nWe don't just plan events. We craft memories.”",
    image: "/images/marketing.jpeg"
  },
  {
    name: "Virat Mudgal",
    role: "Head – Operations",
    company: "Drona Productions",
    quote: "“An event may look effortless, but great operations make it happen. We bring people, processes and every detail together to ensure smooth execution, on-time delivery and a seamless experience.”",
    image: "/images/head-operation.jpeg"
  },
  {
    name: "Dollar Lavania",
    role: "Head – Business Development",
    company: "Drona Productions",
    quote: "“Strong relationships create strong businesses. We focus on understanding our clients, building trusted partnerships and creating opportunities that lead to long-term growth.”",
    image: "/images/business.jpeg"
  },
  {
    name: "Vaishnavi Chauhan",
    role: "Head – Wedding & Hospitality",
    company: "Drona Productions",
    quote: "“Every wedding deserves its own story. We blend thoughtful planning, warm hospitality and refined execution to create celebrations that feel personal, effortless and unforgettable.”",
    image: "/images/weddings.jpeg"
  }
];

export default function Team() {
  return (
    <section id="leadership" className="bg-black py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-[1px] w-6 bg-gold/80" />
          <span className="text-[11.5px] font-semibold tracking-[0.28em] text-gold uppercase">
            Our Leadership
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-tight mb-16 md:mb-20">
          The Minds Behind The Magic
        </h2>

        {/* MD Card (Prominent Wide Layout) */}
        <div className="bg-zinc-950/30 border border-zinc-900/80 p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12 rounded-none relative group">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          <div className="md:col-span-4 lg:col-span-3 relative aspect-[3/4] overflow-hidden rounded-sm border border-zinc-900/80 max-w-[280px] mx-auto md:mx-0 w-full bg-zinc-950">
            <img 
              src={team[0].image} 
              alt={team[0].name} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center text-left">
            <p className="text-zinc-300 text-base font-normal leading-relaxed mb-6 md:pl-4 whitespace-pre-line">
              {team[0].quote}
            </p>
            <div className="border-l border-gold pl-4 mt-2">
              <h4 className="text-white text-sm md:text-base font-bold uppercase tracking-wider">{team[0].name}</h4>
              <p className="text-gold text-xs md:text-sm tracking-wider font-semibold uppercase mt-0.5">{team[0].role}</p>
              <p className="text-zinc-650 text-[10px] md:text-xs uppercase tracking-widest mt-0.5">{team[0].company}</p>
            </div>
          </div>
        </div>

        {/* Core Leadership & Creative (2-Column Horizontal Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {team.slice(1, 3).map((member, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-950/30 border border-zinc-900/80 p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center rounded-none relative group hover:border-zinc-800 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
              {/* Photo on Left */}
              <div className="sm:col-span-4 relative aspect-[3/4] overflow-hidden rounded-sm border border-zinc-900/80 max-w-[280px] sm:max-w-[180px] mx-auto sm:mx-0 w-full bg-zinc-950">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Text on Right */}
              <div className="sm:col-span-8 flex flex-col justify-between h-full text-left">
                <div>
                  <p className="text-zinc-300 text-base font-normal leading-relaxed mb-4 whitespace-pre-line">
                    {member.quote}
                  </p>
                </div>
                <div className="border-l border-gold pl-4 mt-2">
                  <h4 className="text-white text-sm md:text-base font-bold uppercase tracking-wider">{member.name}</h4>
                  <p className="text-gold text-xs md:text-sm tracking-wider font-semibold uppercase mt-0.5">{member.role}</p>
                  <p className="text-zinc-650 text-[10px] md:text-xs uppercase tracking-widest mt-0.5">{member.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Team Grid (3-Column layout for remaining Heads) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.slice(3).map((member, idx) => (
            <div 
              key={idx} 
              className="group bg-zinc-950/20 border border-zinc-900/60 p-6 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-zinc-900/80 mb-5 bg-zinc-950 max-w-[280px] sm:max-w-[180px] mx-auto w-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Quote */}
                <p className="text-zinc-300 text-base font-normal leading-relaxed mb-6 whitespace-pre-line">
                  {member.quote}
                </p>
              </div>
              {/* Name and Designation */}
              <div className="border-t border-zinc-900/80 pt-4">
                <h4 className="text-white text-sm md:text-base font-bold uppercase tracking-wider">{member.name}</h4>
                <p className="text-gold text-xs md:text-sm tracking-wider font-semibold uppercase mt-0.5">{member.role}</p>
                <p className="text-zinc-650 text-[10px] md:text-xs uppercase tracking-widest mt-0.5">{member.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
