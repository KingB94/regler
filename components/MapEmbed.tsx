"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

type Tone = "v1" | "v2" | "v3";

const tones: Record<Tone, { button: string; icon: string; note: string }> = {
  v1: {
    button: "bg-navy-raised text-frost hover:bg-navy",
    icon: "text-brand-red",
    note: "text-frost/55",
  },
  v2: {
    button: "bg-v2-raised text-v2-text hover:bg-v2-deep",
    icon: "text-v2-ice",
    note: "text-v2-muted",
  },
  v3: {
    button: "bg-v3-paper-deep text-v3-ink hover:bg-v3-line",
    icon: "text-v3-clay",
    note: "text-v3-muted",
  },
};

export default function MapEmbed({
  lat,
  lng,
  title,
  tone = "v1",
}: {
  lat: number;
  lng: number;
  title: string;
  tone?: Tone;
}) {
  const [loaded, setLoaded] = useState(false);
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  const t = tones[tone];

  if (loaded) {
    return (
      <iframe
        src={mapSrc}
        title={title}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className={`absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center transition-colors ${t.button}`}
    >
      <MapPin className={`h-6 w-6 ${t.icon}`} strokeWidth={1.5} />
      <span className="font-mono text-xs uppercase tracking-[0.08em]">Karte laden</span>
      <span className={`max-w-xs text-xs leading-relaxed ${t.note}`}>
        Beim Laden wird eine Verbindung zu Google Maps hergestellt. Es gelten die
        Datenschutzbestimmungen von Google.
      </span>
    </button>
  );
}
