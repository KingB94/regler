"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, X } from "lucide-react";

// Kleiner Umschalter, damit drei Entwürfe unter einem Link
// verglichen werden können. Vor dem Live-Gang entfernen:
// diese Datei löschen und <VersionSwitcher /> aus app/layout.tsx nehmen.

const versions = [
  { href: "/v1", label: "1", name: "Technisch-editorial" },
  { href: "/", label: "2", name: "Dunkel & filmisch" },
  { href: "/v3", label: "3", name: "Warm & handwerklich" },
];

export default function VersionSwitcher() {
  const pathname = usePathname() || "/";
  const [hidden, setHidden] = useState(false);

  const activeHref = pathname.startsWith("/v1")
    ? "/v1"
    : pathname.startsWith("/v3")
      ? "/v3"
      : "/";
  const active = versions.find((v) => v.href === activeHref)!;

  if (hidden) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-[100] -translate-x-1/2 print:hidden">
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-[#0b0f13]/85 py-1.5 pl-3 pr-1.5 text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <Layers size={13} className="mr-1 shrink-0 opacity-50" strokeWidth={2} />
        <span className="mr-1 hidden text-[11px] font-medium tracking-tight text-white/50 sm:inline">
          Entwurf
        </span>
        <span className="mr-2 hidden text-[11px] tracking-tight text-white/85 md:inline">
          {active.name}
        </span>

        <div className="flex items-center gap-0.5">
          {versions.map((v) => {
            const isActive = v.href === activeHref;
            return (
              <Link
                key={v.href}
                href={v.href}
                title={v.name}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-semibold tabular-nums transition-colors ${
                  isActive
                    ? "bg-white text-[#0b0f13]"
                    : "text-white/55 hover:bg-white/10 hover:text-white"
                }`}
              >
                {v.label}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setHidden(true)}
          aria-label="Umschalter ausblenden"
          className="ml-1 flex h-7 w-7 items-center justify-center rounded-full text-white/35 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={13} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}
