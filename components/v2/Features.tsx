"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import SystemShuffler from "@/components/v2/SystemShuffler";
import FrostSignature from "@/components/v2/FrostSignature";
import ServiceScheduler from "@/components/v2/ServiceScheduler";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    eyebrow: "Anlagenbau",
    title: "Drei Welten, ein Ansprechpartner",
    widget: <SystemShuffler />,
    text: "Wärmepumpe, Klimaanlage, gewerbliche Kälte: Wir planen alle drei Bereiche im selben Haus. Das spart Schnittstellen — und es sorgt dafür, dass Abwärme aus der Kälte dort landet, wo sie Heizkosten spart.",
    bullets: [
      "Planung, Montage und Inbetriebnahme aus einer Hand",
      "Auslegung nach realem Lastprofil, nicht nach Katalog",
    ],
  },
  {
    eyebrow: "Regelung",
    title: "Effizienz entsteht im Betrieb",
    widget: <FrostSignature />,
    text: "Eine Anlage ist nicht mit der Montage fertig. Erst das Einregeln über die ersten Betriebswochen bringt Verdichter, Ventile und Sollwerte in den Bereich, in dem die Anlage wirklich sparsam läuft.",
    bullets: [
      "Einregelung auf den tatsächlichen Bedarf",
      "Störungsanalyse statt Bauteiltausch auf Verdacht",
    ],
  },
  {
    eyebrow: "Service",
    title: "Wartung, bevor es teuer wird",
    widget: <ServiceScheduler />,
    text: "Gewerbliche Kälte verzeiht keinen Ausfall. Wir betreuen Bestandsanlagen mit festen Wartungsintervallen, Dichtheitsprüfung und dokumentierten Messwerten — auch bei Anlagen, die wir nicht selbst gebaut haben.",
    bullets: [
      "Feste Intervalle mit Protokoll",
      "Auch für Fremdanlagen im Bestand",
    ],
  },
];

export default function Features() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        y: 42,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="leistungen"
      ref={root}
      className="relative border-t border-v2-line/60 bg-v2-deep py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-v2-ice/70">
            Was wir machen
          </p>
          <h2 className="mt-5 font-v2-display text-3xl font-extrabold leading-[1.05] tracking-tighter text-v2-text sm:text-5xl lg:text-6xl">
            Technik, die man{" "}
            <span className="font-v2-serif font-normal italic text-v2-ice">
              nicht bemerkt
            </span>
          </h2>
          <p className="mt-6 text-[0.98rem] leading-relaxed text-v2-muted sm:text-lg">
            Eine gute Anlage fällt niemandem auf. Sie hält die Temperatur, sie
            ist leise, und die Stromrechnung bleibt da, wo sie kalkuliert wurde.
            Genau darauf arbeiten wir hin.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.eyebrow}
              className="feature-card rounded-3xl border border-v2-line/70 bg-v2-surface p-6 sm:p-8"
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-v2-ice/60">
                {c.eyebrow}
              </p>
              <h3 className="mt-3 font-v2-display text-xl font-bold tracking-tight text-v2-text sm:text-2xl">
                {c.title}
              </h3>

              <div className="mt-6">{c.widget}</div>

              <p className="mt-6 text-[0.9rem] leading-relaxed text-v2-muted">
                {c.text}
              </p>

              <ul className="mt-5 space-y-2.5 border-t border-v2-line/60 pt-5">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check
                      size={13}
                      strokeWidth={3}
                      className="mt-1 shrink-0 text-v2-ice"
                    />
                    <span className="text-[0.83rem] leading-snug text-v2-text/75">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
