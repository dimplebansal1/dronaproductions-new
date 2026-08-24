import Link from "next/link";
import Reveal from "./Reveal";

export default function CTABand({
  title = "Let’s produce something unforgettable.",
  text = "Share your vision and our team will craft a complete plan — management, production and talent, all under one roof.",
  primary = { label: "Get a Quote", href: "/contact" },
  secondary = { label: "View Our Work", href: "/portfolio" },
}) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-charcoal">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[70rem] -translate-x-1/2 glow-gold" />
      <div className="container-x relative py-20 text-center">
        <Reveal>
          <span className="eyebrow eyebrow-center justify-center">
            Ready when you are
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight text-fog sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ash">
            {text}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href={primary.href} className="btn btn-gold">
              {primary.label}
            </Link>
            <Link href={secondary.href} className="btn btn-outline">
              {secondary.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
