"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    n: "Eins",
    title: "Wir kommen vorbei, bevor wir rechnen",
    text: "Bestand, Platz, Stromanschluss, wie der Betrieb über den Tag läuft. Diese Stunde vor Ort entscheidet mehr über die richtige Anlage als jedes Datenblatt.",
    aside: "Ortstermin, unverbindlich",
    img: "/images/maschinenraum-2.jpg",
    alt: "Technikraum mit Rohrleitungen, Reglern und Manometern",
  },
  {
    n: "Zwei",
    title: "Ein Angebot, das Sie nachrechnen können",
    text: "Sie bekommen Komponenten, Leistungsdaten und den zu erwartenden Jahresverbrauch schwarz auf weiß. Wo sich Wärmerückgewinnung rechnet, steht es mit Zahlen dabei.",
    aside: "Auslegung & Festpreis",
    img: "/images/rohrleitungen-ventile.jpg",
    alt: "Rohrleitungen mit Manometern und grünen Absperrventilen",
  },
  {
    n: "Drei",
    title: "Fertig ist sie erst, wenn sie eingeregelt ist",
    text: "Montage, Inbetriebnahme, Dichtheitsprüfung, Einweisung. Danach die Feinregelung über die ersten Betriebswochen und ein Wartungsintervall, das zur Anlage passt.",
    aside: "Montage & Wartung",
    img: "/images/kompressoren.jpg",
    alt: "Kompressorenaggregat mit REGLER-Kennzeichnung",
  },
];

export default function Protocol() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".v3-step");
      cards.slice(0, -1).forEach((card) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top top+=120",
            end: "+=480",
            scrub: 1,
          },
          scale: 0.965,
          opacity: 0.35,
          filter: "blur(4px)",
          ease: "none",
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ablauf"
      ref={root}
      className="border-t border-v3-line bg-v3-paper-raised py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="v3-label text-v3-clay">So läuft es ab</p>
          <h2 className="mt-6 font-v3-display text-[2.2rem] font-normal leading-[1.05] tracking-[-0.02em] text-v3-ink sm:text-[3.2rem]">
            Kein Termin ohne Grund, keine Rechnung ohne Ansage
          </h2>
        </div>

        <div className="relative mt-14 pb-[26vh]">
          {steps.map((s, i) => (
            <article
              key={s.n}
              className={`v3-step sticky top-[120px] border border-v3-line bg-v3-paper will-change-transform ${
                i > 0 ? "mt-[22vh]" : ""
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="border-b border-v3-line p-7 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r">
                  <p className="font-v3-display text-[0.95rem] font-medium italic tracking-tight text-v3-clay">
                    {s.n}
                  </p>
                  <h3 className="mt-4 max-w-md font-v3-display text-[1.6rem] font-normal leading-[1.15] tracking-tight text-v3-ink sm:text-[2.1rem]">
                    {s.title}
                  </h3>
                  <p className="mt-5 max-w-md text-[0.95rem] leading-[1.75] text-v3-muted">
                    {s.text}
                  </p>
                  <p className="mt-8 v3-label text-[0.6rem] text-v3-muted/70">
                    {s.aside}
                  </p>
                </div>

                <div className="relative min-h-[220px] lg:col-span-5">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 420px"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
