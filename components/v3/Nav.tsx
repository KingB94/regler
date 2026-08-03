"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { business } from "@/data/business";

const links = [
  { href: "#handschrift", label: "Handschrift" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#werkstatt", label: "Werkstatt" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-v3-line bg-v3-paper/92 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#start" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt=""
              width={36}
              height={36}
              className="h-8 w-8 object-contain"
              priority
            />
            <span className="font-v3-display text-[1.35rem] font-semibold leading-none tracking-tight text-v3-ink">
              Regler
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="v3-link-underline text-[0.86rem] text-v3-muted transition-colors hover:text-v3-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 border-b border-v3-clay pb-0.5 text-[0.86rem] font-semibold text-v3-clay md:inline-flex"
          >
            <Phone size={14} strokeWidth={2.2} />
            {business.phoneDisplay}
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
            className="text-v3-ink md:hidden"
          >
            <Menu size={24} strokeWidth={1.7} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-v3-paper md:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-v3-display text-[1.35rem] font-semibold tracking-tight">
              Regler
            </span>
            <button onClick={() => setOpen(false)} aria-label="Menü schließen">
              <X size={24} strokeWidth={1.7} />
            </button>
          </div>
          <nav className="mt-6 flex flex-col px-5">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 60}ms` }}
                className="v3-rise border-b border-v3-line py-5 font-v3-display text-[2rem] font-normal leading-none tracking-tight text-v3-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={business.phoneHref}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-v3-pine px-6 py-4 text-sm font-semibold text-v3-paper"
            >
              <Phone size={16} strokeWidth={2.2} />
              {business.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
