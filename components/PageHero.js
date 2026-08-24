"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowDown } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  gold,
  description,
  image,
  video,
  crumbs = [],
  hideBottomBar = false,
  actions = [], // Added actions array prop
}) {
  const handleActionClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
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
    }
  };

  return (
    <section className="grain relative isolate flex min-h-screen flex-col justify-center overflow-hidden pt-28 md:pt-36 xl:pt-48 pb-36 md:pb-40 xl:pb-36">
      {/* Cinematic backdrop */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {video ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-45"
            >
              <source src={video} type="video/mp4" />
            </video>
            {/* Overlay gradient to keep text readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black" />
            {/* Subtle grid pattern on top of video */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          </>
        ) : (
          <>
            {image ? (
              <Image
                src={image}
                alt=""
                fill
                priority
                loading="eager"
                sizes="100vw"
                className="animate-hero-zoom object-cover"
              />
            ) : null}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 via-ink/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ background: "radial-gradient(circle at 60% 50%, transparent 35%, #000000 85%)" }} />
          </>
        )}
      </div>

      {/* Ambient Glow Elements */}
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[30rem] w-[30rem] glow-gold opacity-50" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[45rem] w-[45rem] opacity-75" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 40%, transparent 70%)" }} />

      <div className="container-x relative z-10 w-full flex flex-col items-center text-center">
        <div className="relative w-full max-w-4xl pt-8 flex flex-col items-center">
          
          {/* Horizontal line & eyebrow container centered */}
          {eyebrow ? (
            <div className="relative h-5 flex items-center justify-center gap-2.5 select-none mb-6">
              {/* Line segment from corner to first diamond */}
              <div className="h-0.5 w-6 sm:w-10 bg-gradient-to-r from-transparent to-gold-soft" />
              {/* First Diamond */}
              <span className="text-[8px] md:text-[10px] text-gold-soft">◆</span>
              {/* Eyebrow Text */}
              <span className="text-[0.58rem] sm:text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-gold-soft whitespace-nowrap">
                {eyebrow}
              </span>
              {/* Second Diamond */}
              <span className="text-[8px] md:text-[10px] text-gold-soft">◆</span>
              {/* Line segment extending to the right */}
              <div className="h-0.5 w-6 sm:w-10 bg-gradient-to-l from-transparent to-gold-soft" />
            </div>
          ) : null}

          <Reveal delay={140}>
            <h1 className="font-serif text-5xl font-normal tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-glow select-none">
              {title}{" "}
              {gold ? (
                <span className="text-gold-gradient block sm:inline">{gold}</span>
              ) : null}
            </h1>
          </Reveal>

          {description ? (
            <Reveal delay={220}>
              <p className="mt-6 md:mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 mx-auto">
                {description}
              </p>
            </Reveal>
          ) : null}

          {/* Action Buttons */}
          {actions && actions.length > 0 ? (
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4 w-full max-w-md px-4 select-none">
                {actions.map((act, idx) => (
                  <Link
                    key={idx}
                    href={act.href}
                    onClick={(e) => handleActionClick(e, act.href)}
                    className={
                      act.variant === "gold"
                        ? "w-full sm:w-auto bg-gold hover:bg-gold-hover text-black transition-all duration-300 text-[13px] font-semibold tracking-[0.12em] px-6 py-3.5 rounded-none uppercase shadow-lg shadow-gold/10 text-center"
                        : "w-full sm:w-auto border border-zinc-700 hover:border-gold hover:text-gold text-zinc-300 transition-all duration-300 text-[13px] font-semibold tracking-[0.12em] px-6 py-3.5 rounded-none uppercase text-center"
                    }
                  >
                    {act.label}
                  </Link>
                ))}
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>

      {/* Bottom decorative bar */}
      {!hideBottomBar && (
        <div className="absolute bottom-6 md:bottom-8 inset-x-0 z-20">
          <div className="container-x">
            {/* Thin divider line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
            
            <div className="mt-5 md:mt-6 flex items-center justify-between text-[0.62rem] md:text-[0.68rem] tracking-[0.2em] text-ash/70 uppercase">
              {/* Left label */}
              <div className="flex items-center gap-2 select-none">
                <span className="text-[8px] text-gold-soft">◆</span>
                <span>Drona Productions</span>
              </div>
              
              {/* Right scroll indicator */}
              <div className="flex items-center gap-2 md:gap-3 select-none">
                <span>Scroll to Explore</span>
                <div className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full border border-line text-gold animate-bounce">
                  <ArrowDown size={10} className="text-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
