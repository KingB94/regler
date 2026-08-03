import type { Metadata } from "next";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

// ---------------------------------------------------------------
// WICHTIG: Diese Seite ist eine strukturelle Vorlage nach §5 TMG.
// Angaben zu Handelsregister und Komplementärin stammen aus
// öffentlichen Registerquellen und wurden nicht durch den Betrieb
// selbst bestätigt. Alle [Platzhalter] und weitere Angaben bitte
// vor dem Live-Schalten prüfen bzw. ergänzen. Dies ist keine
// Rechtsberatung — im Zweifel bitte von einem Steuerberater oder
// Anwalt prüfen lassen.
// ---------------------------------------------------------------

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-36">
      <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-v2-ice/70">Rechtliches</p>
      <h1 className="mt-6 font-v2-display text-4xl font-extrabold tracking-tighter text-v2-text sm:text-5xl">
        Impressum
      </h1>
      <p className="mt-4 text-sm text-v2-muted">Angaben gemäß § 5 TMG</p>

      <div className="mt-12 max-w-none space-y-9 text-[0.95rem] leading-relaxed text-v2-muted">
        <section>
          <h2 className="font-v2-display text-lg font-bold tracking-tight text-v2-text">Diensteanbieter</h2>
          <p className="mt-2">
            {business.name} {business.legalSuffix}
            <br />
            {business.address.street}
            <br />
            {business.address.zip} {business.address.city}
          </p>
        </section>

        <section>
          <h2 className="font-v2-display text-lg font-bold tracking-tight text-v2-text">Vertretungsberechtigte</h2>
          <p className="mt-2">
            Persönlich haftende Gesellschafterin: Regler Verwaltungs GmbH
            <br />
            Vertreten durch die Geschäftsführung: [Vollständiger Name der Geschäftsführung,
            vermutlich {business.owner} — bitte bestätigen]
          </p>
        </section>

        <section>
          <h2 className="font-v2-display text-lg font-bold tracking-tight text-v2-text">Kontakt</h2>
          <p className="mt-2">
            Telefon: {business.phoneDisplay}
            <br />
            E-Mail: {business.email}
          </p>
        </section>

        <section>
          <h2 className="font-v2-display text-lg font-bold tracking-tight text-v2-text">Registereintrag</h2>
          <p className="mt-2">
            Rechtsform: {business.legalForm}
            <br />
            Registergericht: {business.registerNote}
            <br />
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: [USt-IdNr. eintragen, falls
            vorhanden]
          </p>
        </section>

        <section>
          <h2 className="font-v2-display text-lg font-bold tracking-tight text-v2-text">Zuständige Handwerkskammer</h2>
          <p className="mt-2">
            Handwerkskammer für München und Oberbayern
            <br />
            [Betriebsnummer / Mitgliedsnummer, falls gewünscht]
          </p>
        </section>

        <section>
          <h2 className="font-v2-display text-lg font-bold tracking-tight text-v2-text">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mt-2">
            [Vollständiger Name]
            <br />
            {business.address.street}, {business.address.zip} {business.address.city}
          </p>
        </section>

        <section>
          <h2 className="font-v2-display text-lg font-bold tracking-tight text-v2-text">EU-Streitschlichtung</h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-v2-ice underline underline-offset-4"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben in diesem Impressum. Wir sind nicht verpflichtet
            und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen. [Bitte prüfen und ggf. anpassen.]
          </p>
        </section>

        <section>
          <h2 className="font-v2-display text-lg font-bold tracking-tight text-v2-text">Haftung für Inhalte</h2>
          <p className="mt-2">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
            den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
            hinweisen.
          </p>
        </section>
      </div>
    </div>
  );
}
