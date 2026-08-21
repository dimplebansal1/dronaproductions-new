"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO, PORTFOLIO_FILTERS } from "@/lib/data";

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const items =
    active === "All"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {PORTFOLIO_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
              active === f
                ? "border-gold/60 bg-gold/10 text-gold-bright"
                : "border-line text-ash hover:border-gold/40 hover:text-fog"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <div
            key={p.title}
            className="group relative h-80 overflow-hidden rounded-sm border border-line"
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                {p.category}
              </span>
              <h3 className="font-display mt-2 text-2xl text-fog">{p.title}</h3>
              <p className="mt-2 max-h-0 overflow-hidden text-sm text-mist opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                {p.services}
              </p>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="mt-16 text-center text-ash">
          Projects in this category are coming soon.
        </p>
      ) : null}
    </div>
  );
}
