"use client";

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20"
    >
      {/* Background Video & Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        >
          <source src="/videos/hero-bg-vdo.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay gradient to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black" />

        {/* Subtle grid pattern on top of video */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Cinematic Gold Glow (extremely subtle, radial) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[120px] opacity-60 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 text-center flex flex-col items-center">
        {/* Upper Accent Label */}
        <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
          <span className="h-[1px] w-8 bg-gold/50" />
          <span className="text-[11.5px] font-semibold tracking-[0.28em] text-gold uppercase">
            Complete Event Management & Production
          </span>
          <span className="h-[1px] w-8 bg-gold/50" />
        </div>

        {/* Brand Main Title */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 text-glow leading-none select-none">
          DRONA
          <span className="block font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.1em] text-zinc-300 mt-2">
            PRODUCTIONS
          </span>
        </h1>

        {/* Tagline Sound | Light | Stage */}
        <p className="text-xs font-semibold tracking-[0.4em] text-gold uppercase mb-8">
          Sound <span className="text-zinc-600">|</span> Light <span className="text-zinc-600">|</span> Stage
        </p>

        {/* Positioning Summary */}
        <p className="max-w-2xl text-zinc-400 text-base md:text-lg font-normal leading-relaxed mb-12 px-4">
          Elevating live experiences across India. We merge world-class technical production, 
          artist management, and flawless end-to-end execution to craft awe-inspiring events.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md px-4">
          <button
            onClick={() => handleScrollTo("#contact")}
            suppressHydrationWarning={true}
            className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-black transition-all duration-300 text-[13px] font-semibold tracking-[0.12em] px-6 py-3.5 rounded-none uppercase shadow-lg shadow-gold/10"
          >
            Get a Quote
          </button>
          
          <button
            onClick={() => handleScrollTo("#portfolio")}
            suppressHydrationWarning={true}
            className="w-full sm:w-auto border border-zinc-700 hover:border-gold hover:text-gold text-zinc-300 transition-all duration-300 text-[13px] font-semibold tracking-[0.12em] px-6 py-3.5 rounded-none uppercase"
          >
            Explore Work
          </button>
        </div>
      </div>
    </section>
  );
}



