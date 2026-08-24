import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  gold,
  description,
  align = "left",
  className = "",
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <Reveal>
          <span className={`eyebrow ${centered ? "eyebrow-center" : ""}`}>
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={80}>
        <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-fog sm:text-4xl md:text-5xl">
          {title} {gold ? <span className="text-gold-gradient">{gold}</span> : null}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={160}>
          <p className="mt-5 text-base leading-relaxed text-ash">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
