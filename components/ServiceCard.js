import Icon from "./Icon";
import Reveal from "./Reveal";

export default function ServiceCard({ item, index = 0, numbered = false }) {
  return (
    <Reveal delay={(index % 3) * 90}>
      <div className="card group relative h-full overflow-hidden rounded-sm p-7">
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 glow-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold/25 bg-gold/5 text-gold-soft transition group-hover:border-gold/60 group-hover:text-gold-bright">
            <Icon name={item.icon} size={22} />
          </span>
          {numbered ? (
            <span className="font-display text-3xl text-line transition group-hover:text-gold/30">
              {String(index + 1).padStart(2, "0")}
            </span>
          ) : null}
        </div>
        <h3 className="mt-6 text-lg font-semibold text-fog">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ash">{item.desc}</p>
      </div>
    </Reveal>
  );
}
