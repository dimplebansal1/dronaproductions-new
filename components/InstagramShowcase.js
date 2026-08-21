"use client";

import Image from "next/image";
import { Heart, Play } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { InstagramIcon } from "./SocialIcons";
import { COMPANY, INSTAGRAM_REELS } from "@/lib/data";

export default function InstagramShowcase() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28 border-y border-line bg-night">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[30rem] w-[30rem] glow-gold opacity-30" />
      <div className="pointer-events-none absolute -left-40 bottom-1/4 h-[30rem] w-[30rem] glow-gold opacity-20" />

      <div className="container-x relative">
        <SectionHeading
          align="center"
          eyebrow="Social Feed"
          title="Inside our latest"
          gold="highlights."
          description="Follow our journey, setup updates, and behind-the-scenes action directly on our official Instagram feed."
          className="mb-14"
        />

        {/* Reels Grid (9:16 aspect ratio) */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {INSTAGRAM_REELS.map((reel, i) => (
            <Reveal key={reel.id} delay={(i % 4) * 80}>
              <a
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[9/16] overflow-hidden rounded-sm border border-line bg-ink shadow-md hover:border-gold/30 hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)]"
              >
                {/* Background Image */}
                <Image
                  src={reel.image}
                  alt={reel.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                {/* Tint Overlay (persistent dark state matching hover) */}
                <div className="absolute inset-0 bg-black/45" />



                {/* Centered Play Button (appears/scales on hover) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/45 bg-gold/10 text-gold-soft transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-soft group-hover:text-ink">
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  </span>
                </div>


              </a>
            </Reveal>
          ))}
        </div>

        {/* View All Reels Button */}
        <Reveal delay={200}>
          <div className="mt-14 flex justify-center">
            <a
              href={COMPANY.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline group gap-2.5 px-6 py-3 text-[0.72rem]"
            >
              <InstagramIcon size={14} className="text-gold-soft" />
              <span>Follow @dronaproductionsofficial</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
