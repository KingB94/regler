"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { business } from "@/data/business";

const navLinks = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#auszeichnung", label: "Auszeichnung" },
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur border-b border-navy-line" : "bg-navy"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white md:h-11 md:w-11">
            <Image
              src="/images/logo.png"
              alt={business.name}
              width={44}
              height={44}
              className="h-8 w-8 object-contain md:h-9 md:w-9"
              priority
            />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-frost">
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.12em] text-frost/80 transition-colors hover:text-ice"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 rounded-sm bg-brand-red px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-red-deep"
          >
            <Phone size={14} strokeWidth={2} />
            {business.phoneDisplay}
          </a>
        </div>

        <button
          className="text-frost md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-line bg-navy px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.1em] text-frost/85"
              >
                {l.label}
              </a>
            ))}
            <a
              href={business.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-red px-5 py-3 font-mono text-xs uppercase tracking-[0.1em] text-white"
            >
              <Phone size={14} strokeWidth={2} />
              {business.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
