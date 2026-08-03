"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";
import { gsap } from "gsap";
import { business } from "@/data/business";
import Snowflake from "@/components/v2/Snowflake";

const particles = [
  { top: "14%", right: "8%", size: 30, delay: "0s", opacity: 0.5 },
  { top: "26%", right: "20%", size: 18, delay: "1.4s", opacity: 0.32 },
  { top: "40%", right: "5%", size: 22, delay: "2.6s", opacity: 0.24 },
  { top: "56%", right: "16%", size: 14, delay: "0.7s", opacity: 0.28 },
  { top: "8%", right: "30%", size: 12, delay: "3.4s", opacity: 0.2 },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-line-1", {
        y: 44,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      });
      gsap.from(".hero-line-2", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.45,
        ease: "power3.out",
      });
      gsap.from(".hero-fade", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        delay: 0.75,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="start"
      ref={root}
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden"
    >
      <Image
        src="/images/maschinenraum-1.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-[0.42]"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-v2-deep/85 via-v2-deep/45 to-v2-deep/80" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-v2-deep via-v2-deep/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-v2-deep/80 to-transparent" />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {particles.map((p, i) => (
          <Snowflake
            key={i}
            className="v2-float absolute text-v2-ice"
            strokeWidth={1.1}
            style={{
              top: p.top,
              right: p.right,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 sm:px-10 lg:px-16 lg:pb-28">
        <p className="hero-fade mb-7 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-v2-ice/80">
          Fachbetrieb aus {business.address.city} · Oberbayern
        </p>

        <h1 className="max-w-4xl font-v2-display text-[2.9rem] font-extrabold leading-[0.94] tracking-tighter text-white sm:text-7xl lg:text-[5.6rem]">
          <span className="hero-line-1 block">Kälte. Klima. Wärme.</span>
          <span className="hero-line-2 mt-1 block font-v2-serif text-[3.1rem] font-normal italic tracking-tight text-v2-ice sm:mt-2 sm:text-[4.8rem] lg:text-[6.2rem]">
            ausgezeichnet effizient
          </span>
        </h1>

        <p className="hero-fade mt-8 max-w-xl text-[0.98rem] leading-relaxed text-white/70 sm:text-lg">
          Wir planen, bauen und betreuen Wärmepumpen, Klimaanlagen und
          gewerbliche Kälteanlagen. Vom Einfamilienhaus bis zur Prozesskühlung
          in der Industrie – mit Technik, die im Betrieb tatsächlich hält, was
          das Datenblatt verspricht.
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#kontakt"
            className="v2-btn inline-flex items-center gap-2 rounded-full bg-v2-ice px-6 py-3.5 text-sm font-semibold text-v2-deep shadow-xl shadow-v2-ice/25"
          >
            Anlage anfragen
            <ArrowUpRight size={16} strokeWidth={2.6} />
          </a>
          <a
            href={business.phoneHref}
            className="v2-btn inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl"
          >
            <Phone size={15} strokeWidth={2.3} />
            {business.phoneDisplay}
          </a>
        </div>

        <div className="hero-fade mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-7">
          <div className="flex items-center gap-2.5">
            <span className="v2-ring-pulse h-1.5 w-1.5 rounded-full bg-v2-ice" />
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/60">
              2. Platz Deutscher Kältepreis 2016
            </span>
          </div>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/40">
            Privat · Gewerbe · Industrie
          </span>
          <div className="ml-auto hidden items-center gap-3 sm:flex">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/35">
              Scrollen
            </span>
            <span className="relative block h-px w-16 overflow-hidden bg-white/15">
              <span className="v2-sweep absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-v2-ice to-transparent" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
