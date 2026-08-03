"use client";

import { useEffect, useState } from "react";

// Signatur-Animation: Kristalle fallen aus einem Luftauslass auf den
// Verdampfer und schlagen dort als Ringe auf. Der Statusstreifen
// unten läuft durch die vier Zustände einer laufenden Anlage.

const flakes = [
  { left: "12%", size: 11, delay: "0s", duration: "3.1s", opacity: 0.9 },
  { left: "24%", size: 8, delay: "0.7s", duration: "3.8s", opacity: 0.65 },
  { left: "37%", size: 13, delay: "1.4s", duration: "3.3s", opacity: 0.95 },
  { left: "50%", size: 7, delay: "0.35s", duration: "4.2s", opacity: 0.55 },
  { left: "64%", size: 12, delay: "2.1s", duration: "3.5s", opacity: 0.85 },
  { left: "77%", size: 9, delay: "1.05s", duration: "3.9s", opacity: 0.7 },
  { left: "89%", size: 10, delay: "2.6s", duration: "3.2s", opacity: 0.8 },
];

const states = [
  { label: "21,5 °C gehalten", tone: "ice" },
  { label: "Lastspitze erkannt", tone: "ember" },
  { label: "Verdichter regelt nach", tone: "ice" },
  { label: "Sollwert erreicht", tone: "ice" },
] as const;

export default function FrostSignature() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % states.length), 2300);
    return () => clearInterval(id);
  }, []);

  const state = states[step];

  return (
    <div
      className="relative h-44 overflow-hidden rounded-2xl border border-white/8"
      style={{
        background:
          "linear-gradient(180deg, #0b1720 0%, #0f2836 65%, #123a4c 100%)",
      }}
    >
      {/* Atmosphärische Schleier */}
      <div className="pointer-events-none absolute -left-8 top-4 h-24 w-24 rounded-full bg-v2-ice/12 blur-2xl" />
      <div className="pointer-events-none absolute -right-6 bottom-2 h-20 w-28 rounded-full bg-v2-ice/10 blur-2xl" />

      {/* Kopfzeile */}
      <div className="relative z-20 flex items-center justify-between px-4 pt-3">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/45">
          Kältekreis
        </span>
        <span className="font-mono text-[0.6rem] tabular-nums text-v2-ice/70">
          7 Fühler
        </span>
      </div>

      {/* Quelle: Luftauslass */}
      <svg
        viewBox="0 0 240 16"
        preserveAspectRatio="none"
        className="absolute inset-x-4 top-11 z-10 h-4 w-[calc(100%-2rem)] text-v2-ice/45"
        aria-hidden
      >
        <rect
          x="0.5"
          y="0.5"
          width="239"
          height="15"
          rx="4"
          fill="rgba(111,211,247,0.07)"
          stroke="currentColor"
          strokeWidth="1"
        />
        {Array.from({ length: 14 }).map((_, i) => (
          <line
            key={i}
            x1={14 + i * 16}
            y1="4"
            x2={14 + i * 16}
            y2="12"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Fallende Kristalle */}
      <div className="absolute inset-x-0 top-14 h-24" aria-hidden>
        {flakes.map((f, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="absolute top-0 text-v2-ice-soft"
            style={{
              left: f.left,
              width: f.size,
              height: f.size,
              opacity: f.opacity,
              animation: `flake-fall ${f.duration} linear ${f.delay} infinite`,
            }}
          >
            <path d="M12 1v22M2.5 6.5l19 11M2.5 17.5l19-11" />
            <path d="M12 6 9.5 3.8M12 6l2.5-2.2M12 18l-2.5 2.2M12 18l2.5 2.2" />
          </svg>
        ))}
      </div>

      {/* Oberfläche: Verdampferlamellen */}
      <svg
        viewBox="0 0 240 20"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-9 h-5 w-full text-v2-ice/35"
        aria-hidden
      >
        <path
          d="M0 12 Q 30 6 60 12 T 120 12 T 180 12 T 240 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M0 17 Q 30 12 60 17 T 120 17 T 180 17 T 240 17"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.6"
        />
      </svg>

      {/* Aufschlag-Ringe */}
      <div className="absolute inset-x-0 bottom-11 h-4" aria-hidden>
        {[
          { left: "22%", delay: "0.4s" },
          { left: "52%", delay: "1.6s" },
          { left: "79%", delay: "2.5s" },
        ].map((r, i) => (
          <span
            key={i}
            className="absolute block h-2 w-2 rounded-full border border-v2-ice/70"
            style={{
              left: r.left,
              animation: `flake-ripple 2.6s ease-out ${r.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Statusstreifen */}
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t border-white/8 bg-v2-deep/55 px-4 py-2.5 backdrop-blur-sm">
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
            state.tone === "ember" ? "bg-v2-ember" : "bg-v2-ice"
          }`}
        />
        <span
          key={step}
          className="font-mono text-[0.63rem] uppercase tracking-[0.14em] text-white/70"
          style={{ animation: "sig-fadein 0.4s ease-out both" }}
        >
          {state.label}
        </span>
      </div>
    </div>
  );
}
