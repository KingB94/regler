const segments = [
  "Lebensmittelhandel",
  "Metzgereien",
  "Gastronomie",
  "Industrie",
  "Handwerk",
  "Wohngebäude",
  "Rechenzentren",
  "Gewerbe",
];

export default function SegmentsMarquee() {
  const doubled = [...segments, ...segments];
  return (
    <div className="overflow-hidden border-y border-navy-line bg-navy-raised py-4">
      <div className="marquee-track">
        {doubled.map((s, i) => (
          <span
            key={i}
            className="mx-6 shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-frost/55"
          >
            {s}
            <span className="ml-6 text-brand-red/60">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
