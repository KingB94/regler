"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const checks = [
  "Dichtheitsprüfung",
  "Verflüssiger gereinigt",
  "Sollwerte geprüft",
  "Messwerte protokolliert",
];

// Wartungsprotokoll füllt sich Zeile für Zeile und beginnt von vorn.
export default function MaintenanceList() {
  const [done, setDone] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setDone((d) => (d >= checks.length ? 0 : d + 1)),
      1100,
    );
    return () => clearInterval(id);
  }, []);

  const complete = done >= checks.length;

  return (
    <div className="relative h-44 overflow-hidden rounded-sm border border-v3-line bg-v3-paper-raised">
      <div className="flex items-center justify-between px-4 pt-3">
        <span className="v3-label text-[0.58rem] text-v3-muted">
          Wartungsprotokoll
        </span>
        <span className="font-mono text-[0.58rem] tabular-nums text-v3-clay">
          {Math.min(done, checks.length)}/{checks.length}
        </span>
      </div>

      <ul className="mt-2 px-4">
        {checks.map((c, i) => {
          const isDone = i < done;
          return (
            <li
              key={c}
              className="flex items-center gap-3 border-b border-v3-line/70 py-[9px] last:border-b-0"
            >
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                  isDone
                    ? "border-v3-pine bg-v3-pine text-v3-paper"
                    : "border-v3-line text-transparent"
                }`}
              >
                <Check size={9} strokeWidth={3.4} />
              </span>
              <span
                className={`text-[0.78rem] transition-colors duration-500 ${
                  isDone ? "text-v3-ink" : "text-v3-muted/60"
                }`}
              >
                {c}
              </span>
              <span className="ml-auto font-mono text-[0.6rem] tabular-nums text-v3-muted/45">
                {isDone ? "ok" : "–"}
              </span>
            </li>
          );
        })}
      </ul>

      <div
        className={`absolute inset-x-0 bottom-0 flex items-center gap-2 border-t px-4 py-2.5 transition-colors duration-500 ${
          complete
            ? "border-v3-pine/30 bg-v3-pine-soft/50"
            : "border-v3-line bg-transparent"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
            complete ? "bg-v3-pine" : "bg-v3-line"
          }`}
        />
        <span className="v3-label text-[0.58rem] text-v3-ink/70">
          {complete ? "Anlage freigegeben" : "Wartung läuft"}
        </span>
      </div>
    </div>
  );
}
