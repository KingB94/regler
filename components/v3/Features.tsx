"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WarmthLoop from "@/components/v3/WarmthLoop";
import SeasonDial from "@/components/v3/SeasonDial";
import MaintenanceList from "@/components/v3/MaintenanceList";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    n: "01",
    title: "Abwärme ist zu schade zum Wegwerfen",
    widget: <WarmthLoop />,
    text: "Jede Kälteanlage produziert Wärme. In einer Metzgerei bei uns in der Gegend reichte diese Wärme aus, um die Gasheizung komplett stillzulegen. Dafür gab es 2016 den zweiten Platz beim Deutschen Kältepreis.",
    foot: "Ausgezeichnet vom Bundesumweltministerium",
  },
  {
    n: "02",
    title: "Eine Technik für Sommer und Winter",
    widget: <SeasonDial />,
    text: "Wärmepumpe und Klimaanlage sind technisch nah beieinander. Wer das beim Planen mitdenkt, bekommt für dasselbe Geld ein Gerät, das im Januar heizt und im Juli kühlt, statt zweier Anlagen nebeneinander.",
    foot: "Planung mit Blick aufs ganze Jahr",
  },
  {
    n: "03",
    title: "Nach der Montage fängt es erst an",
    widget: <MaintenanceList />,
    text: "Wir betreuen Anlagen über Jahre: feste Intervalle, Dichtheitsprüfung, dokumentierte Messwerte. Auch dann, wenn die Anlage ursprünglich von jemand anderem gebaut wurde.",
    foot: "Auch für Fremdanlagen im Bestand",
  },
];

export default function Features() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".v3-feature", {
        scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        y: 34,
        opacity: 0,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="handschrift"
      ref={root}
      className="border-t border-v3-line bg-v3-paper-raised py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="v3-label text-v3-clay">Unsere Handschrift</p>
          <h2 className="mt-6 font-v3-display text-[2.2rem] font-normal leading-[1.05] tracking-[-0.02em] text-v3-ink sm:text-[3.2rem]">
            Drei Dinge, die wir anders machen als der Katalog
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
          {cards.map((c) => (
            <article key={c.n} className="v3-feature flex flex-col">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[0.7rem] tabular-nums text-v3-clay">
                  {c.n}
                </span>
                <div className="v3-rule flex-1" />
              </div>

              <h3 className="mt-5 font-v3-display text-[1.35rem] font-medium leading-[1.2] tracking-tight text-v3-ink">
                {c.title}
              </h3>

              <div className="mt-6">{c.widget}</div>

              <p className="mt-6 text-[0.92rem] leading-[1.75] text-v3-muted">
                {c.text}
              </p>

              <p className="mt-auto pt-6 v3-label text-[0.6rem] text-v3-muted/70">
                {c.foot}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
