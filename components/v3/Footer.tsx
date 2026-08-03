import Image from "next/image";
import Link from "next/link";
import { business, services } from "@/data/business";

const nav = [
  { href: "#handschrift", label: "Handschrift" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#auszeichnung", label: "Auszeichnung" },
  { href: "#werkstatt", label: "Werkstatt" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-v3-line bg-v3-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt=""
                width={36}
                height={36}
                className="h-8 w-8 object-contain"
              />
              <span className="font-v3-display text-[1.35rem] font-semibold leading-none tracking-tight text-v3-ink">
                Regler
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[0.86rem] leading-[1.7] text-v3-muted">
              {business.legalSuffix} in {business.address.city}. Wärmepumpen,
              Klima- und Kälteanlagen für Privat, Gewerbe und Industrie.
            </p>
            <p className="mt-5 v3-label text-[0.56rem] text-v3-muted/70">
              {business.ownerRole}: {business.owner}
            </p>
          </div>

          <div>
            <p className="v3-label text-[0.56rem] text-v3-muted/70">
              Leistungen
            </p>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.title}>
                  <a
                    href="#leistungen"
                    className="v3-link-underline text-[0.86rem] text-v3-ink/75"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="v3-label text-[0.56rem] text-v3-muted/70">
              Navigation
            </p>
            <ul className="mt-5 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="v3-link-underline text-[0.86rem] text-v3-ink/75"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="v3-label text-[0.56rem] text-v3-muted/70">Kontakt</p>
            <ul className="mt-5 space-y-2.5 text-[0.86rem] text-v3-ink/75">
              <li>{business.address.street}</li>
              <li>
                {business.address.zip} {business.address.city}
              </li>
              <li>
                <a href={business.phoneHref} className="v3-link-underline">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="v3-link-underline break-all"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-v3-line pt-7 text-[0.76rem] text-v3-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name} {business.legalSuffix}. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="v3-link-underline">
              Impressum
            </Link>
            <Link href="/datenschutz" className="v3-link-underline">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
