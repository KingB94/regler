import Image from "next/image";
import { business } from "@/data/business";

const stats = [
  { value: "2016", label: "Deutscher Kältepreis" },
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "3", label: "Privat · Gewerbe · Industrie" },
];

export default function About() {
  return (
    <section id="ueber-uns" className="bg-frost py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="relative order-2 md:order-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/maschinenraum-2.jpg"
              alt="Technikraum einer Kälte- und Klimaanlage von REGLER"
              fill
              sizes="(max-width: 768px) 90vw, 520px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-sm bg-brand-red px-5 py-4 text-white shadow-xl sm:block">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em]">
              {business.ownerRole}
            </p>
            <p className="mt-1 font-display text-lg font-semibold leading-tight">
              {business.owner}
            </p>
          </div>
        </div>

        <div className="order-1 flex flex-col justify-center md:order-2">
          <span className="plate-badge w-fit text-ice-deep">Über uns</span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Tradition, die sich neu erfindet.
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-ink/70">
            {business.name} ist ein inhabergeführter Fachbetrieb für Kälte-,
            Klima- und Wärmepumpentechnik in {business.address.city}. Seit
            über 15 Jahren stehen wir für Handwerk mit Anspruch — stolz auf
            unsere Erfahrung, aber immer offen für neue Ideen und effiziente
            Technik.
          </p>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">
            Ob Wärmepumpe im Eigenheim, Klimaanlage im Betrieb oder
            industrielle Kälteanlage: Wir planen, montieren und betreuen die
            Technik, die dafür sorgt, dass es dort kühl bleibt, wo es kühl
            bleiben muss — und warm, wo es warm werden soll.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-frost-line pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-brand-red-deep sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-[0.68rem] uppercase leading-snug tracking-[0.08em] text-ink/55">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
