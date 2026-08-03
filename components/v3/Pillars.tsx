import CountUp from "@/components/CountUp";

const pillars = [
  {
    // TODO: Jahresangabe aus dem bestehenden Entwurf übernommen — bitte bestätigen.
    end: 15,
    suffix: "+",
    title: "Jahre im Kältehandwerk",
    text: "Inhabergeführt, gewachsen mit Kundschaft aus Handwerk, Handel und Industrie in ganz Oberbayern.",
  },
  {
    end: 60,
    suffix: " %",
    title: "weniger Emissionen",
    text: "So viel sparte der ausgezeichnete Umbau einer Metzgerei ein. Die Abwärme der Kälteanlage ersetzte dort die Gasheizung.",
  },
  {
    end: 2,
    suffix: ".",
    title: "Platz, Deutscher Kältepreis",
    text: "Verliehen 2016 vom Bundesumweltministerium im Rahmen der Nationalen Klimaschutzinitiative.",
  },
];

export default function Pillars() {
  return (
    <section className="border-t border-v3-line bg-v3-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-v3-line">
          {pillars.map((p) => (
            <div key={p.title} className="sm:px-9 sm:first:pl-0 sm:last:pr-0">
              <p className="font-v3-display text-[4.4rem] font-normal leading-[0.85] tracking-[-0.04em] text-v3-clay sm:text-[5.2rem]">
                <CountUp end={p.end} suffix={p.suffix} />
              </p>
              <p className="mt-6 font-v3-display text-[1.15rem] font-medium leading-snug tracking-tight text-v3-ink">
                {p.title}
              </p>
              <p className="mt-3 max-w-xs text-[0.88rem] leading-[1.7] text-v3-muted">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
