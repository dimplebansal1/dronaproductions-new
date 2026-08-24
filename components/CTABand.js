import Link from "next/link";
import Reveal from "./Reveal";

export default function CTABand({
  title = "Let’s produce something unforgettable.",
  text = "Share your vision and our team will craft a complete plan — management, production and talent, all under one roof.",
  primary = { label: "Get a Quote", href: "/contact" },
  secondary = { label: "View Our Work", href: "/portfolio" },
  variant = "gold", // "gold" or "dark"
}) {
  const isGold = variant === "gold";

  return (
    <section className={`relative overflow-hidden border-y border-line ${isGold ? "bg-charcoal" : "bg-black"}`}>
      {isGold ? (
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[70rem] -translate-x-1/2 glow-gold" />
      ) : (
        /* Sleek Silver/White Ambient Glow */
        <div 
          className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[70rem] -translate-x-1/2 opacity-40" 
          style={{ background: "radial-gradient(closest-side, rgba(255, 255, 255, 0.08), transparent 70%)" }}
        />
      )}
      <div className="container-x relative py-20 text-center">
        <Reveal>
          {/* Eyebrow is now gold for both styles */}
          <span className="eyebrow eyebrow-center justify-center">
            Ready when you are
          </span>
        </Reveal>
        <Reveal delay={80}>
          {isGold ? (
            <h2 className="font-display mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight text-fog sm:text-4xl md:text-5xl">
              {title}
            </h2>
          ) : (
            /* Premium Platinum Gradient Text for Title */
            <h2 className="font-display mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-zinc-200 via-white to-zinc-400 bg-clip-text text-transparent">
              {title}
            </h2>
          )}
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
            {text}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {isGold ? (
              <>
                <Link href={primary.href} className="btn btn-gold">
                  {primary.label}
                </Link>
                <Link href={secondary.href} className="btn btn-outline">
                  {secondary.label}
                </Link>
              </>
            ) : (
              <>
                {/* One gold button (primary) */}
                <Link 
                  href={primary.href} 
                  className="btn btn-gold"
                >
                  {primary.label}
                </Link>
                {/* One dark outline button (secondary) */}
                <Link 
                  href={secondary.href} 
                  className="btn border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-white/5 transition-all duration-300 rounded-sm"
                >
                  {secondary.label}
                </Link>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
