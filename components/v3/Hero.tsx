"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { gsap } from "gsap";
import { business } from "@/data/business";

const teasers = [
  { n: "01", label: "Wärmepumpen", note: "Wohnhaus & Gewerbe" },
  { n: "02", label: "Klimatechnik", note: "Büro, Werkstatt, Halle" },
  { n: "03", label: "Kälteanlagen", note: "Handel & Industrie" },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".h3-line", {
        y: 46,
        opacity: 0,
        duration: 1.1,
        delay: 0.15,
        stagger: 0.11,
        ease: "power3.out",
      });
      gsap.from(".h3-fade", {
        y: 20,
        opacity: 0,
        duration: 0.9,
        delay: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
      gsap.from(".h3-img", {
        scale: 1.06,
        opacity: 0,
        duration: 1.4,
        delay: 0.25,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="start" ref={root} className="relative overflow-hidden">
      <div className="v3-paper-tex pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="h3-fade v3-label text-v3-clay">
              Klima &amp; Kältetechnik · seit über 15 Jahren
            </p>

            <h1 className="mt-7 font-v3-display text-[3.1rem] font-normal leading-[0.92] tracking-[-0.03em] text-v3-ink sm:text-[4.6rem] lg:text-[5.4rem]">
              <span className="h3-line block overflow-hidden">Kälte, die</span>
              <span className="h3-line block overflow-hidden">einfach</span>
              <span className="h3-line block overflow-hidden italic text-v3-clay">
                läuft.
              </span>
            </h1>

            <p className="h3-fade mt-8 max-w-md text-[1rem] leading-[1.75] text-v3-muted">
              Wir sind ein inhabergeführter Betrieb aus {business.address.city}.
              Wir bauen Wärmepumpen, Klimaanlagen und gewerbliche Kälteanlagen
              und kümmern uns danach weiter darum. Das ist der eigentliche Punkt.
            </p>

            <div className="h3-fade mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-2.5 rounded-full bg-v3-pine px-7 py-3.5 text-sm font-semibold text-v3-paper transition-colors hover:bg-v3-ink"
              >
                Beratung anfragen
                <ArrowRight
                  size={15}
                  strokeWidth={2.2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-v3-ink"
              >
                <Phone size={15} strokeWidth={2.2} className="text-v3-clay" />
                <span className="v3-link-underline">{business.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="h3-img relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/images/kompressoren.jpg"
                  alt="Kompressorenaggregat mit REGLER-Kennzeichnung im Kälteanlagenraum"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 440px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[0.72rem] text-v3-muted">
                <span>Verbundanlage im Kundenbetrieb</span>
                <span className="font-mono tabular-nums">
                  {business.address.zip}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="h3-fade mt-16 border-t border-v3-line pt-8 sm:mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {teasers.map((t) => (
              <a
                key={t.n}
                href="#leistungen"
                className="group flex items-baseline gap-4"
              >
                <span className="font-mono text-[0.7rem] tabular-nums text-v3-clay">
                  {t.n}
                </span>
                <span>
                  <span className="block font-v3-display text-[1.3rem] font-medium leading-tight tracking-tight text-v3-ink">
                    {t.label}
                  </span>
                  <span className="mt-0.5 block text-[0.8rem] text-v3-muted">
                    {t.note}
                  </span>
                </span>
                <ArrowRight
                  size={14}
                  className="ml-auto shrink-0 self-center text-v3-line transition-all duration-300 group-hover:translate-x-1 group-hover:text-v3-clay"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
