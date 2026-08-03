import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import { services } from "@/data/business";
import Snowflake from "@/components/v2/Snowflake";

const nav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#anlagen", label: "Anlagen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#auszeichnung", label: "Auszeichnung" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-v2-line/60 bg-v2-surface">
      <Snowflake
        className="pointer-events-none absolute -bottom-24 -left-16 w-[420px] text-white/[0.025]"
        strokeWidth={0.8}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={36}
                  height={36}
                  className="h-7 w-7 object-contain"
                />
              </span>
              <span className="font-v2-display text-lg font-extrabold tracking-tight text-v2-text">
                REGLER
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[0.88rem] leading-relaxed text-v2-muted">
              {business.legalSuffix} in {business.address.city}. Wärmepumpen,
              Klima- und Kälteanlagen für Privat, Gewerbe und Industrie.
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-v2-line bg-v2-deep/50 px-3.5 py-2">
              <span className="v2-ring-pulse h-1.5 w-1.5 rounded-full bg-v2-ice" />
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-v2-muted">
                Werktags erreichbar
              </span>
            </div>
          </div>

          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-v2-muted/60">
              Leistungen
            </p>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.title}>
                  <Link
                    href="/#anlagen"
                    className="text-[0.85rem] text-v2-text/70 transition-colors hover:text-v2-ice"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-v2-muted/60">
              Navigation
            </p>
            <ul className="mt-5 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-[0.85rem] text-v2-text/70 transition-colors hover:text-v2-ice"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-v2-muted/60">
              Kontakt
            </p>
            <ul className="mt-5 space-y-2.5 text-[0.85rem] text-v2-text/70">
              <li>{business.address.street}</li>
              <li>
                {business.address.zip} {business.address.city}
              </li>
              <li>
                <a
                  href={business.phoneHref}
                  className="transition-colors hover:text-v2-ice"
                >
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="break-all transition-colors hover:text-v2-ice"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-v2-line/60 pt-7 text-[0.75rem] text-v2-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name} {business.legalSuffix}. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="transition-colors hover:text-v2-ice"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-v2-ice"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
