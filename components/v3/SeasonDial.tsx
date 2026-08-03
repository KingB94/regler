"use client";

import { useEffect, useState } from "react";

const months = [
  "Jan",
  "Feb",
  "Mär",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dez",
];

// Zeiger schwingt über das Jahr: im Winter heizt die Wärmepumpe,
// im Sommer kühlt dieselbe Technik.
export default function SeasonDial() {
  const [m, setM] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setM((v) => (v + 1) % 12), 850);
    return () => clearInterval(id);
  }, []);

  const angle = -72 * Math.cos((2 * Math.PI * m) / 12);
  const cooling = angle > 0;

  return (
    <div className="relative h-44 overflow-hidden rounded-sm border border-v3-line bg-v3-paper-raised">
      <div className="flex items-center justify-between px-4 pt-3">
        <span className="v3-label text-[0.58rem] text-v3-muted">Jahreslauf</span>
        <span className="font-mono text-[0.58rem] tabular-nums text-v3-clay">
          {months[m]}
        </span>
      </div>

      <div className="relative mx-auto mt-2 h-[86px] w-[190px]">
        <svg viewBox="0 0 190 96" className="absolute inset-0 h-full w-full">
          {/* Skala */}
          <path
            d="M14 88 A 81 81 0 0 1 176 88"
            fill="none"
            stroke="var(--v3-line)"
            strokeWidth="1.4"
          />
          {Array.from({ length: 13 }).map((_, i) => {
            const a = Math.PI - (Math.PI * i) / 12;
            const x1 = 95 + Math.cos(a) * 74;
            const y1 = 88 - Math.sin(a) * 74;
            const x2 = 95 + Math.cos(a) * 81;
            const y2 = 88 - Math.sin(a) * 81;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--v3-line)"
                strokeWidth={i % 3 === 0 ? 1.6 : 0.9}
              />
            );
          })}
          {/* Warme Hälfte */}
          <path
            d="M14 88 A 81 81 0 0 1 95 7"
            fill="none"
            stroke="var(--v3-clay)"
            strokeWidth="2.4"
            opacity="0.35"
          />
          {/* Kalte Hälfte */}
          <path
            d="M95 7 A 81 81 0 0 1 176 88"
            fill="none"
            stroke="var(--v3-pine)"
            strokeWidth="2.4"
            opacity="0.35"
          />
        </svg>

        {/* Zeiger */}
        <div
          className="absolute bottom-[8px] left-1/2 h-[70px] w-px origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.34,1.4,0.64,1)]"
          style={{
            transform: `translateX(-50%) rotate(${angle}deg)`,
            background: cooling ? "var(--v3-pine)" : "var(--v3-clay)",
          }}
        >
          <span
            className="absolute -top-1 left-1/2 block h-2 w-2 -translate-x-1/2 rounded-full"
            style={{
              background: cooling ? "var(--v3-pine)" : "var(--v3-clay)",
            }}
          />
        </div>
        <span className="absolute bottom-[4px] left-1/2 block h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-v3-ink" />

        <span className="absolute bottom-0 left-0 v3-label text-[0.54rem] text-v3-clay">
          Heizen
        </span>
        <span className="absolute bottom-0 right-0 v3-label text-[0.54rem] text-v3-pine">
          Kühlen
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-v3-line px-4 py-2.5">
        <span
          key={cooling ? "k" : "h"}
          className="v3-label text-[0.58rem] text-v3-ink/70"
          style={{ animation: "sig-fadein 0.4s ease-out both" }}
        >
          {cooling ? "Dieselbe Anlage kühlt" : "Dieselbe Anlage heizt"}
        </span>
      </div>
    </div>
  );
}
