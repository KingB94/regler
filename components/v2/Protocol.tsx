"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    n: "01",
    eyebrow: "Aufnahme",
    title: "Erst schauen, dann rechnen",
    text: "Wir kommen vorbei, bevor irgendetwas angeboten wird. Bestand, Platzverhältnisse, Stromanschluss, Lastprofil über den Tag — das entscheidet über die Anlage mehr als jeder Katalog.",
    bullets: ["Bestandsaufnahme vor Ort", "Lastprofil statt Faustformel"],
    img: "/images/maschinenraum-2.jpg",
    alt: "Technikraum mit Rohrleitungen, Reglern und Manometern",
  },
  {
    n: "02",
    eyebrow: "Auslegung",
    title: "Ein Angebot, das man nachrechnen kann",
    text: "Sie bekommen die Auslegung mit Komponenten, Leistungsdaten und dem, was die Anlage im Jahr verbrauchen wird. Wo sich Wärmerückgewinnung lohnt, steht sie mit Zahlen drin — nicht als Zusatzoption im Kleingedruckten.",
    bullets: ["Nachvollziehbare Auslegung", "Wärmerückgewinnung durchgerechnet"],
    img: "/images/rohrleitungen-ventile.jpg",
    alt: "Rohrleitungen mit Manometern und grünen Absperrventilen",
  },
  {
    n: "03",
    eyebrow: "Montage & Übergabe",
    title: "Fertig ist sie erst, wenn sie eingeregelt ist",
    text: "Montage, Inbetriebnahme, Dichtheitsprüfung, Einweisung. Danach die Feinregelung über die ersten Betriebswochen und ein Wartungsintervall, das zur Anlage passt.",
    bullets: ["Dokumentierte Inbetriebnahme", "Feste Wartung ab Tag eins"],
    img: "/images/kompressoren.jpg",
    alt: "Kompressorenaggregat mit REGLER-Kennzeichnung",
  },
];

export default function Protocol() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".protocol-card");
      cards.slice(0, -1).forEach((card) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top top+=110",
            end: "+=520",
            scrub: 1,
          },
          scale: 0.93,
          filter: "blur(6px) saturate(0.65)",
          opacity: 0.45,
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
      className="relative bg-v2-deep py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-v2-ice/70">
            Ablauf
          </p>
          <h2 className="mt-5 font-v2-display text-3xl font-extrabold leading-[1.05] tracking-tighter text-v2-text sm:text-5xl lg:text-6xl">
            Drei Schritte,{" "}
            <span className="font-v2-serif font-normal italic text-v2-ice">
              keine Überraschungen
            </span>
          </h2>
        </div>

        <div className="relative mt-16 pb-[30vh]">
          {steps.map((s, i) => (
            <article
              key={s.n}
              className={`protocol-card sticky top-[110px] overflow-hidden rounded-3xl border border-v2-line/70 bg-v2-surface will-change-transform ${
                i > 0 ? "mt-[26vh]" : ""
              }`}
            >
              <div className="grid grid-cols-1 gap-8 p-7 sm:p-10 lg:grid-cols-5 lg:gap-12">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-4">
                    <span className="font-v2-display text-5xl font-extrabold tracking-tighter text-v2-line">
                      {s.n}
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-v2-ice/70">
                      {s.eyebrow}
                    </span>
                  </div>
                  <h3 className="mt-5 font-v2-display text-2xl font-bold leading-tight tracking-tight text-v2-text sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-[0.93rem] leading-relaxed text-v2-muted">
                    {s.text}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-v2-line bg-white/4 px-3.5 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-v2-text/70"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-2 lg:aspect-auto lg:min-h-[240px]">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="object-cover brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-v2-surface/70 via-transparent to-transparent" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
