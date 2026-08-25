import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function ServiceCard({ item, index = 0, numbered = false }) {
  const hasImage = !!item.image;

  return (
    <Reveal delay={(index % 3) * 90}>
      <div className="card group relative flex h-full min-h-[16.5rem] flex-col justify-between overflow-hidden rounded-sm p-7 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_20px_50px_-20px_rgba(212,175,55,0.12)]">
        {/* Background Image & Overlay (for image cards) */}
        {hasImage ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            {/* Overlay to ensure readability while keeping the image visible */}
            <div className="absolute inset-0 bg-ink/60 transition-colors duration-500 group-hover:bg-ink/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          </div>
        ) : (
          /* Gold glow blob (for icon cards) */
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 glow-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        )}

        {/* Content Container */}
        <div className="relative z-10 flex h-full flex-col justify-between w-full">
          <div className="flex items-start justify-between">
            {hasImage ? (
              /* Left gold accent dot/diamond for image card */
              <span className="text-[8px] text-gold-soft select-none">◆</span>
            ) : (
              /* Icon for standard card */
              <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold/25 bg-gold/5 text-gold-soft transition duration-300 group-hover:bg-gold-deep group-hover:border-gold-deep group-hover:text-ink">
                <Icon name={item.icon} size={22} />
              </span>
            )}
            
            {numbered ? (
              <span className="font-display text-2xl text-line transition duration-500 group-hover:text-gold-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
            ) : null}
          </div>

          <div className="mt-8">
            <h3 className="font-display text-xl text-fog transition-colors duration-300 group-hover:text-gold-soft">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-mist/90">
              {item.desc}
            </p>
          </div>
        </div>

        {/* Top gold line highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gold-gradient origin-left transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </Reveal>
  );
}
