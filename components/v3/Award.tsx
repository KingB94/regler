import Image from "next/image";
import { award, business } from "@/data/business";

const facts = [
  {
    k: "Auszeichnung",
    v: "2. Platz, Deutscher Kältepreis 2016",
  },
  {
    k: "Verliehen von",
    v: "Bundesumweltministerium (BMUB), Nationale Klimaschutzinitiative",
  },
  {
    k: "Übergabe",
    v: "11. April 2016, Berliner Energietage",
  },
];

export default function Award() {
  return (
    <section
      id="auszeichnung"
      className="bg-v3-pine py-20 text-v3-paper sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="v3-label text-v3-paper/50">Auszeichnung</p>

            <blockquote className="mt-8">
              <p className="font-v3-display text-[2rem] font-normal leading-[1.15] tracking-[-0.02em] text-v3-paper sm:text-[2.9rem]">
                Eine Metzgerei, die ihre{" "}
                <span className="italic text-v3-clay-soft">Gasheizung</span>{" "}
                nicht mehr braucht.
              </p>
            </blockquote>

            <p className="mt-8 max-w-xl text-[0.98rem] leading-[1.8] text-v3-paper/75">
              {award.description}
            </p>

            <dl className="mt-12 border-t border-v3-paper/15">
              {facts.map((f) => (
                <div
                  key={f.k}
                  className="grid grid-cols-1 gap-1 border-b border-v3-paper/15 py-4 sm:grid-cols-[160px_1fr] sm:gap-6"
                >
                  <dt className="v3-label text-[0.6rem] text-v3-paper/45">
                    {f.k}
                  </dt>
                  <dd className="text-[0.9rem] leading-relaxed text-v3-paper/90">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-[0.82rem] leading-relaxed text-v3-paper/50">
              Realisiert gemeinsam mit Robert Schiessl. {business.name}{" "}
              {business.legalSuffix}, {business.registerNote}.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/images/kaeltepreis-urkunde.jpg"
                  alt="Urkunde zum Deutschen Kältepreis 2016"
                  fill
                  sizes="(max-width: 1024px) 92vw, 420px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-6 hidden w-44 sm:block lg:-left-10 lg:w-52">
                <div className="relative aspect-[4/3] w-full overflow-hidden border-4 border-v3-pine">
                  <Image
                    src="/images/preisverleihung-berlin.jpg"
                    alt="Preisverleihung in Berlin"
                    fill
                    sizes="210px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
