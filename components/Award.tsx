import Image from "next/image";
import { Award as AwardIcon } from "lucide-react";
import { award, business } from "@/data/business";

export default function Award() {
  return (
    <section id="auszeichnung" className="bg-navy py-20 text-frost md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <span className="plate-badge text-brand-red">
              <AwardIcon size={13} strokeWidth={2} />
              Auszeichnung
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {award.title}
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-frost/80">
              {award.description}
            </p>
            <dl className="mt-8 space-y-4 border-t border-navy-line pt-6 text-sm">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 font-mono uppercase tracking-[0.06em] text-frost/45">
                  Kategorie
                </dt>
                <dd className="text-frost/80">{award.category}</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 font-mono uppercase tracking-[0.06em] text-frost/45">
                  Verliehen von
                </dt>
                <dd className="text-frost/80">{award.issuer}</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 font-mono uppercase tracking-[0.06em] text-frost/45">
                  Zeitpunkt
                </dt>
                <dd className="text-frost/80">{award.date}</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-navy-line">
              <Image
                src="/images/kaeltepreis-urkunde.jpg"
                alt="Preisträger-Urkunde des Deutschen Kältepreises 2016, Bundesministerium für Umwelt, Naturschutz, Bau und Reaktorsicherheit"
                fill
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-navy-line">
              <Image
                src="/images/preisverleihung-berlin.jpg"
                alt={`Team von ${business.name} bei der Preisverleihung 2016 in Berlin`}
                fill
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
