"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award as AwardIcon, ShieldCheck, MapPin } from "lucide-react";
import { award, business } from "@/data/business";

const badges = [
  {
    icon: AwardIcon,
    title: "Deutscher Kältepreis 2016",
    text: "2. Platz, verliehen vom Bundesumweltministerium im Rahmen der Nationalen Klimaschutzinitiative.",
  },
  {
    icon: ShieldCheck,
    title: "Eingetragener Fachbetrieb",
    text: `${business.legalForm}, ${business.registerNote}. Inhabergeführt von ${business.owner}.`,
  },
  {
    icon: MapPin,
    title: "Aus der Region, für die Region",
    text: `Sitz in ${business.address.city} bei Pfaffenhofen. Kurze Wege zu Kundschaft in ganz Oberbayern.`,
  },
];

export default function TrustSignals() {
  const root = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.15 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="auszeichnung"
      ref={root}
      className="relative overflow-hidden bg-v2-deep py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-v2-ember/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-v2-line/70">
                <Image
                  src="/images/preisverleihung-berlin.jpg"
                  alt="Preisverleihung des Deutschen Kältepreises in Berlin"
                  fill
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-v2-deep/75 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden w-40 overflow-hidden rounded-2xl border border-v2-line/70 shadow-2xl sm:block">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/kaeltepreis-urkunde.jpg"
                    alt="Urkunde zum Deutschen Kältepreis 2016"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-v2-ember">
              Auszeichnung
            </p>
            <h2 className="mt-5 font-v2-display text-3xl font-extrabold leading-[1.05] tracking-tighter text-v2-text sm:text-5xl">
              Eine Metzgerei ohne Gasheizung
            </h2>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-v2-muted">
              {award.description}
            </p>
            <p className="mt-4 max-w-xl text-[0.88rem] leading-relaxed text-v2-muted/80">
              {award.category}, {award.date}.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {badges.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="rounded-2xl border border-v2-line/70 bg-v2-surface p-5 transition-transform duration-500 hover:-translate-y-1"
                    style={{
                      opacity: shown ? 1 : 0,
                      transform: shown ? "translateY(0)" : "translateY(18px)",
                      transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={2.1}
                      className="text-v2-ember"
                    />
                    <p className="mt-4 font-v2-display text-[0.95rem] font-bold leading-snug tracking-tight text-v2-text">
                      {b.title}
                    </p>
                    <p className="mt-2 text-[0.8rem] leading-relaxed text-v2-muted">
                      {b.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
