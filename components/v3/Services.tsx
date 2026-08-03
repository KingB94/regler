"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/business";

const previews: Record<string, string> = {
  heatpump: "/images/maschinenraum-2.jpg",
  climate: "/images/maschinenraum-1.jpg",
  cooling: "/images/kompressoren.jpg",
  water: "/images/rohrleitungen-ventile.jpg",
  recovery: "/images/maschinenraum-1.jpg",
  service: "/images/rohrleitungen-ventile.jpg",
};

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="leistungen"
      className="border-t border-v3-line bg-v3-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <p className="v3-label text-v3-clay">Leistungen</p>
            <h2 className="mt-6 font-v3-display text-[2.2rem] font-normal leading-[1.05] tracking-[-0.02em] text-v3-ink sm:text-[3.2rem]">
              Sechs Bereiche, ein Handwerk
            </h2>
          </div>
          <p className="max-w-xs text-[0.9rem] leading-[1.7] text-v3-muted">
            Vom Wohnhaus bis zur Prozesskühlung im Betrieb. Am Ende hängt fast
            alles am selben Kältekreis.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <ul className="lg:col-span-7">
            {services.map((s, i) => (
              <li key={s.title}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-baseline gap-5 border-t border-v3-line py-6 text-left last:border-b sm:gap-7"
                >
                  <span
                    className={`shrink-0 font-mono text-[0.7rem] tabular-nums transition-colors ${
                      active === i ? "text-v3-clay" : "text-v3-muted/50"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block font-v3-display text-[1.4rem] font-normal leading-tight tracking-tight transition-colors sm:text-[1.75rem] ${
                        active === i ? "text-v3-clay" : "text-v3-ink"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span className="mt-2 block max-w-md text-[0.88rem] leading-[1.7] text-v3-muted">
                      {s.description}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                {services.map((s, i) => (
                  <Image
                    key={s.title}
                    src={previews[s.icon] ?? "/images/kompressoren.jpg"}
                    alt={`Beispielbild: ${s.title}`}
                    fill
                    sizes="(max-width: 1024px) 92vw, 420px"
                    className={`object-cover transition-opacity duration-700 ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 flex items-baseline justify-between gap-4 text-[0.72rem] text-v3-muted">
                <span>{services[active].title}</span>
                <span className="font-mono tabular-nums">
                  {String(active + 1).padStart(2, "0")} / 06
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
