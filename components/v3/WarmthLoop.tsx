"use client";

import { useEffect, useState } from "react";

// Signatur-Animation Entwurf 3: Die Abwärme der Kälteanlage steigt aus
// dem Verdichter nach oben in den Warmwasserspeicher. Genau der Kreis,
// für den der Betrieb 2016 ausgezeichnet wurde.

const embers = [
  { left: "13%", size: 9, delay: "0s", duration: "3.4s" },
  { left: "26%", size: 6, delay: "1.1s", duration: "4.1s" },
  { left: "39%", size: 11, delay: "0.5s", duration: "3.1s" },
  { left: "51%", size: 7, delay: "2.2s", duration: "3.8s" },
  { left: "63%", size: 10, delay: "1.6s", duration: "3.3s" },
  { left: "76%", size: 6, delay: "0.8s", duration: "4.4s" },
  { left: "88%", size: 9, delay: "2.7s", duration: "3.6s" },
];

const states = [
  { label: "Kühlraum auf −2 °C", warm: false },
  { label: "Abwärme 62 °C", warm: true },
  { label: "Speicher lädt", warm: true },
  { label: "Gasheizung aus", warm: false },
];

export default function WarmthLoop() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % states.length), 2300);
    return () => clearInterval(id);
  }, []);

  const state = states[step];

  return (
    <div
      className="relative h-44 overflow-hidden rounded-sm border border-v3-line"
      style={{
        background:
          "linear-gradient(180deg, #fdf5ea 0%, #f6e3cd 62%, #eed3b4 100%)",
      }}
    >
      <div className="pointer-events-none absolute -left-6 top-6 h-20 w-24 rounded-full bg-white/60 blur-2xl" />
      <div className="pointer-events-none absolute -right-4 top-2 h-16 w-24 rounded-full bg-white/50 blur-2xl" />

      {/* Kopfzeile */}
      <div className="relative z-20 flex items-center justify-between px-4 pt-3">
        <span className="v3-label text-[0.58rem] text-v3-muted">
          Wärmerückgewinnung
        </span>
        <span className="font-mono text-[0.58rem] tabular-nums text-v3-clay">
          Kreis 1/1
        </span>
      </div>

      {/* Oberfläche oben: Speicher */}
      <svg
        viewBox="0 0 240 18"
        preserveAspectRatio="none"
        className="absolute inset-x-4 top-11 z-10 h-4 w-[calc(100%-2rem)] text-v3-pine/45"
        aria-hidden
      >
        <path
          d="M0 13 Q 30 7 60 13 T 120 13 T 180 13 T 240 13"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={i}
            x1={12 + i * 27}
            y1="2"
            x2={12 + i * 27}
            y2="7"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.55"
          />
        ))}
      </svg>

      {/* Aufsteigende Wärme */}
      <div className="absolute inset-x-0 top-14 h-24" aria-hidden>
        {embers.map((e, i) => (
          <span
            key={i}
            className="absolute top-0 block rounded-full"
            style={{
              left: e.left,
              width: e.size,
              height: e.size,
              background:
                "radial-gradient(circle at 35% 30%, #ffd9a8 0%, #e88b3c 55%, #b0521f 100%)",
              boxShadow: "0 0 10px rgba(232,139,60,0.55)",
              animation: `ember-rise ${e.duration} ease-in ${e.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Quelle unten: Verdichter */}
      <svg
        viewBox="0 0 240 22"
        preserveAspectRatio="none"
        className="absolute inset-x-4 bottom-10 h-5 w-[calc(100%-2rem)] text-v3-ink/35"
        aria-hidden
      >
        <rect
          x="0.5"
          y="4.5"
          width="239"
          height="17"
          rx="3"
          fill="rgba(29,27,23,0.06)"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        {Array.from({ length: 6 }).map((_, i) => (
          <circle
            key={i}
            cx={26 + i * 38}
            cy="13"
            r="3.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.9"
          />
        ))}
      </svg>

      {/* Halos über dem Verdichter */}
      <div className="absolute inset-x-0 bottom-12 h-4" aria-hidden>
        {[
          { left: "26%", delay: "0.3s" },
          { left: "56%", delay: "1.4s" },
          { left: "82%", delay: "2.4s" },
        ].map((h, i) => (
          <span
            key={i}
            className="absolute block h-2 w-2 rounded-full border border-v3-clay/60"
            style={{
              left: h.left,
              animation: `ember-halo 2.7s ease-out ${h.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Statusstreifen */}
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t border-v3-line bg-v3-paper-raised/85 px-4 py-2.5 backdrop-blur-sm">
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
            state.warm ? "bg-v3-clay" : "bg-v3-pine"
          }`}
        />
        <span
          key={step}
          className="v3-label text-[0.58rem] text-v3-ink/70"
          style={{ animation: "sig-fadein 0.4s ease-out both" }}
        >
          {state.label}
        </span>
      </div>
    </div>
  );
}
