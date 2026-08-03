import CountUp from "@/components/CountUp";

const pillars = [
  {
    // TODO: Jahresangabe aus dem bestehenden Entwurf übernommen — bitte bestätigen.
    eyebrow: "Erfahrung",
    end: 15,
    suffix: "+",
    title: "Jahre im Kältehandwerk",
    text: "Inhabergeführt in Hettenshausen, gewachsen mit Kundschaft aus Handwerk, Handel und Industrie in ganz Oberbayern.",
  },
  {
    eyebrow: "Wärmerückgewinnung",
    end: 60,
    suffix: " %",
    title: "weniger Emissionen",
    text: "So viel sparte der ausgezeichnete Umbau einer Metzgerei ein: Die Abwärme der Kälteanlage ersetzte dort die komplette Gasheizung.",
  },
  {
    eyebrow: "Deutscher Kältepreis 2016",
    end: 2,
    suffix: ".",
    title: "Platz, verliehen vom BMUB",
    text: "Ausgezeichnet in der Kategorie Emissionsminderung durch Teilsanierung — im Rahmen der Nationalen Klimaschutzinitiative.",
  },
];

export default function Pillars() {
  return (
    <section className="relative overflow-hidden border-y border-v2-line/60 bg-v2-surface py-24 sm:py-28">
      <div className="v2-grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-v2-ice/8 blur-[90px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-v2-ember/8 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-v2-line/60">
          {pillars.map((p) => (
            <div key={p.eyebrow} className="lg:px-10 lg:first:pl-0 lg:last:pr-0">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-v2-ice/60">
                {p.eyebrow}
              </p>
              <p className="mt-5 font-v2-display text-6xl font-extrabold tracking-tighter sm:text-7xl">
                <span className="v2-gradient-text">
                  <CountUp end={p.end} suffix={p.suffix} />
                </span>
              </p>
              <div className="relative mt-4 h-px w-full overflow-hidden bg-v2-line/70">
                <span className="v2-sweep absolute inset-y-0 left-0 block w-full bg-gradient-to-r from-transparent via-v2-ice to-transparent" />
              </div>
              <p className="mt-4 font-v2-display text-lg font-bold tracking-tight text-v2-text">
                {p.title}
              </p>
              <p className="mt-3 max-w-sm text-[0.88rem] leading-relaxed text-v2-muted">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
