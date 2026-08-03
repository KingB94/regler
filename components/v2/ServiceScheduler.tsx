"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

// Fünf-Schritt-Schleife: Cursor wandert auf einen Wartungstermin,
// klickt, Termin wird bestätigt.

const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const days = Array.from({ length: 21 }, (_, i) => i + 4);
const TARGET = 17; // Index im Raster

export default function ServiceScheduler() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 5), 1400);
    return () => clearInterval(id);
  }, []);

  const hovering = step >= 2;
  const picked = step >= 3;

  return (
    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/8 bg-v2-surface p-4">
      <div className="pointer-events-none absolute -left-8 -bottom-8 h-28 w-28 rounded-full bg-v2-ember/10 blur-2xl" />

      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/45">
          Wartungsplan
        </span>
        <span className="font-mono text-[0.6rem] tabular-nums text-v2-muted">
          Oktober
        </span>
      </div>

      <div className="relative mt-3 grid grid-cols-7 gap-1">
        {weekdays.map((d) => (
          <span
            key={d}
            className="text-center font-mono text-[0.52rem] uppercase tracking-wide text-white/25"
          >
            {d}
          </span>
        ))}
        {days.map((d, i) => {
          const isTarget = i === TARGET;
          return (
            <span
              key={d}
              className={`flex h-[18px] items-center justify-center rounded text-[0.58rem] tabular-nums transition-all duration-300 ${
                isTarget && picked
                  ? "scale-110 bg-v2-ice font-bold text-v2-deep"
                  : isTarget && hovering
                    ? "bg-v2-ice/20 text-v2-ice"
                    : "text-white/30"
              }`}
            >
              {d}
            </span>
          );
        })}

        {/* Cursor */}
        <svg
          viewBox="0 0 16 16"
          className="pointer-events-none absolute z-20 h-4 w-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            left: step === 0 ? "6%" : "44%",
            top: step === 0 ? "82%" : "56%",
            transform: step === 3 ? "scale(0.82)" : "scale(1)",
          }}
          aria-hidden
        >
          <path
            d="M2 1.5 13 8l-4.6 1.3L6.2 14 2 1.5Z"
            fill="currentColor"
            stroke="#0b1016"
            strokeWidth="0.9"
            strokeLinejoin="round"
          />
        </svg>

        {/* Klick-Ring */}
        {step === 3 && (
          <span
            className="pointer-events-none absolute left-[43%] top-[54%] block h-3 w-3 rounded-full border border-v2-ice"
            style={{ animation: "flake-ripple 0.9s ease-out both" }}
            aria-hidden
          />
        )}
      </div>

      <div
        className={`absolute inset-x-4 bottom-3 flex items-center gap-2 rounded-lg border px-3 py-2 transition-all duration-500 ${
          step === 4
            ? "border-v2-ice/30 bg-v2-ice/10 opacity-100"
            : "border-white/8 bg-white/4 opacity-70"
        }`}
      >
        {step === 4 ? (
          <>
            <Check size={12} className="shrink-0 text-v2-ice" strokeWidth={3} />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-v2-ice">
              Wartung terminiert
            </span>
          </>
        ) : (
          <>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/40">
              Termin wählen
            </span>
          </>
        )}
      </div>
    </div>
  );
}
