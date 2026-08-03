"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Flame,
  Wind,
  Snowflake,
  Droplets,
  Recycle,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/business";

gsap.registerPlugin(ScrollTrigger);

const icons: Record<string, LucideIcon> = {
  heatpump: Flame,
  climate: Wind,
  cooling: Snowflake,
  water: Droplets,
  recovery: Recycle,
  service: Wrench,
};

export default function ServicesGrid() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".svc-tile", {
        scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="anlagen"
      ref={root}
      className="border-y border-v2-line/60 bg-v2-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-v2-ice/70">
              Leistungen
            </p>
            <h2 className="mt-5 font-v2-display text-3xl font-extrabold leading-[1.05] tracking-tighter text-v2-text sm:text-5xl">
              Sechs Bereiche, ein Handwerk
            </h2>
          </div>
          <p className="max-w-sm text-[0.9rem] leading-relaxed text-v2-muted">
            Vom Wohnhaus bis zur Prozesskühlung im Betrieb — meist hängt am
            Ende alles am selben Kältekreis.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-v2-line/70 bg-v2-line/70 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Wrench;
            return (
              <div
                key={s.title}
                className="svc-tile group relative bg-v2-surface p-7 transition-colors duration-300 hover:bg-v2-raised sm:p-9"
              >
                <span className="absolute right-6 top-6 font-mono text-[0.62rem] tabular-nums text-v2-line">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-v2-ice/10 text-v2-ice transition-transform duration-300 group-hover:scale-110">
                  <Icon size={19} strokeWidth={2.1} />
                </span>
                <h3 className="mt-6 font-v2-display text-lg font-bold tracking-tight text-v2-text">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.87rem] leading-relaxed text-v2-muted">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
