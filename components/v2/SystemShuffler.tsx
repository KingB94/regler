"use client";

import { useEffect, useState } from "react";
import { Snowflake, Wind, Flame } from "lucide-react";

const systems = [
  {
    icon: Flame,
    name: "Wärmepumpe",
    meta: "Wohnhaus · Bestand",
    reading: "JAZ 4,1",
    note: "Luft/Wasser, 11 kW",
  },
  {
    icon: Wind,
    name: "Klimaanlage",
    meta: "Büro · 340 m²",
    reading: "24 °C",
    note: "VRF, 6 Innengeräte",
  },
  {
    icon: Snowflake,
    name: "Kälteanlage",
    meta: "Metzgerei · Kühlraum",
    reading: "−2 °C",
    note: "Verbundanlage, WRG",
  },
];

export default function SystemShuffler() {
  const [front, setFront] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFront((f) => (f + 1) % systems.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-v2-raised to-v2-surface">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-v2-ice/8 blur-2xl" />

      <div className="relative flex h-full items-center justify-center px-6">
        {systems.map((s, i) => {
          const pos = (i - front + systems.length) % systems.length;
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className="absolute left-6 right-6 rounded-xl border border-white/10 bg-v2-raised/95 p-4 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `translateY(${pos * 12 - 8}px) scale(${1 - pos * 0.06})`,
                opacity: pos === 0 ? 1 : pos === 1 ? 0.55 : 0.25,
                filter: pos === 0 ? "none" : `blur(${pos * 1.5}px)`,
                zIndex: systems.length - pos,
              }}
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-v2-ice/12 text-v2-ice">
                  <Icon size={17} strokeWidth={2.2} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-v2-display text-sm font-bold tracking-tight text-v2-text">
                    {s.name}
                  </p>
                  <p className="mt-0.5 truncate font-mono text-[0.6rem] uppercase tracking-[0.12em] text-v2-muted">
                    {s.meta}
                  </p>
                </div>
                <span className="shrink-0 rounded-md bg-white/6 px-2 py-1 font-mono text-[0.62rem] tabular-nums text-v2-ice">
                  {s.reading}
                </span>
              </div>
              <p className="mt-3 border-t border-white/6 pt-2.5 font-mono text-[0.6rem] text-v2-muted">
                {s.note}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
