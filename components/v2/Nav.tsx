"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { business } from "@/data/business";

// Absolute Ziele, damit die Navigation auch auf Impressum und
// Datenschutz funktioniert.
const links = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#anlagen", label: "Anlagen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#auszeichnung", label: "Auszeichnung" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 rounded-full px-3 py-2 transition-all duration-500 sm:px-5 sm:py-2.5 ${
          scrolled
            ? "v2-glass shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
              <Image
                src="/images/logo.png"
                alt=""
                width={36}
                height={36}
                className="h-7 w-7 object-contain"
                priority
              />
            </span>
            <span className="font-v2-display text-[0.95rem] font-extrabold tracking-tight text-v2-text">
              REGLER
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.8rem] font-medium text-v2-text/65 transition-colors hover:text-v2-ice"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={business.phoneHref}
              className="v2-btn inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[0.8rem] font-semibold text-v2-text"
            >
              <Phone size={13} strokeWidth={2.3} />
              {business.phoneDisplay}
            </a>
            <Link
              href="/#kontakt"
              className="v2-btn inline-flex items-center gap-1.5 rounded-full bg-v2-ice px-4 py-2 text-[0.8rem] font-semibold text-v2-deep shadow-lg shadow-v2-ice/25"
            >
              Anfrage
              <ArrowUpRight size={14} strokeWidth={2.6} />
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-v2-text lg:hidden"
          >
            <Menu size={17} strokeWidth={2.2} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-v2-deep/95 backdrop-blur-2xl lg:hidden">
          <div className="flex items-center justify-between px-6 py-6">
            <span className="font-v2-display text-lg font-extrabold tracking-tight">
              REGLER
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Menü schließen"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5"
            >
              <X size={18} strokeWidth={2.2} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 pt-6">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 60}ms` }}
                className="v3-rise border-b border-white/8 py-4 font-v2-display text-3xl font-bold tracking-tight text-v2-text"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={business.phoneHref}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-v2-ice px-6 py-4 font-semibold text-v2-deep"
            >
              <Phone size={16} strokeWidth={2.4} />
              {business.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
