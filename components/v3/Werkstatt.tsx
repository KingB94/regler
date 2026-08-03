import Image from "next/image";
import { gallery, business } from "@/data/business";

export default function Werkstatt() {
  return (
    <section
      id="werkstatt"
      className="border-t border-v3-line bg-v3-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="v3-label text-v3-clay">Aus der Werkstatt</p>
            <h2 className="mt-6 font-v3-display text-[2rem] font-normal leading-[1.08] tracking-[-0.02em] text-v3-ink sm:text-[2.6rem]">
              Wo unsere Arbeit am Ende steht
            </h2>
            <p className="mt-6 max-w-sm text-[0.92rem] leading-[1.75] text-v3-muted">
              Maschinenräume sind selten schön fotografiert. Trotzdem sieht man
              hier ganz gut, worum es geht: sauber verlegte Leitungen,
              beschriftete Bauteile und Messpunkte, an die man später auch
              wieder herankommt.
            </p>
            <p className="mt-8 v3-label text-[0.6rem] text-v3-muted/70">
              Anlagen in Betreuung durch {business.name}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {gallery.map((g, i) => (
                <figure
                  key={g.src}
                  className={i === 0 ? "col-span-2" : "col-span-1"}
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 1024px) 92vw, 520px"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-2.5 flex items-baseline gap-3 text-[0.72rem] text-v3-muted">
                    <span className="font-mono tabular-nums text-v3-clay">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{g.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
