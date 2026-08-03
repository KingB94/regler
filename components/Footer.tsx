import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import IceCrystal from "@/components/IceCrystal";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-navy-line bg-navy text-frost">
      <IceCrystal
        className="pointer-events-none absolute -bottom-16 -left-16 w-[380px] text-navy-raised"
        strokeWidth={3}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white">
                <Image src="/images/logo.png" alt={business.name} width={36} height={36} className="h-8 w-8 object-contain" />
              </div>
              <span className="font-display text-lg font-semibold text-frost">{business.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-frost/60">
              {business.legalSuffix} in {business.address.city} — Wärmepumpen, Klima- und
              Kälteanlagen für Privat, Gewerbe und Industrie.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-frost/45">Navigation</p>
            <nav className="mt-4 flex flex-col gap-2.5 text-sm">
              <Link href="/v1#leistungen" className="text-frost/75 hover:text-ice">Leistungen</Link>
              <Link href="/v1#auszeichnung" className="text-frost/75 hover:text-ice">Auszeichnung</Link>
              <Link href="/v1#ueber-uns" className="text-frost/75 hover:text-ice">Über uns</Link>
              <Link href="/v1#galerie" className="text-frost/75 hover:text-ice">Galerie</Link>
              <Link href="/v1#kontakt" className="text-frost/75 hover:text-ice">Kontakt</Link>
            </nav>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-frost/45">Kontakt</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-frost/75">
              <span>{business.address.full}</span>
              <a href={business.phoneHref} className="hover:text-ice">{business.phoneDisplay}</a>
              <a href={`mailto:${business.email}`} className="hover:text-ice">{business.email}</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-navy-line pt-6 text-xs text-frost/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {business.name} {business.legalSuffix}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-ice">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-ice">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
