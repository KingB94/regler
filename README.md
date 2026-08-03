# REGLER Klima & Kältetechnik — Website

Moderne Next.js-Website für REGLER Klima & Kältetechnik GmbH & Co. KG in
Hettenshausen.

Gebaut mit Next.js 16 (App Router), TypeScript, Tailwind CSS 4 und
selbst gehosteten Schriftarten (kein Nachladen von Google Fonts o. ä.).

## ⚠️ Vor dem Live-Schalten unbedingt prüfen

Diese Website wurde auf Basis öffentlich zugänglicher Informationen
(Google Maps, Handelsregister, Handwerkskammer-Anzeigen, Presseartikel
zum Deutschen Kältepreis, Fotos) erstellt. Bitte vor der
Veröffentlichung kontrollieren:

- **`data/business.ts`** — alle mit `// TODO` markierten Werte:
  - Name der Geschäftsführung (aus einer Handwerkskammer-Ausbildungsanzeige
    übernommen: „Martin Regler" — bitte bestätigen)
  - Öffnungszeiten (aus einem Branchenverzeichnis übernommen, bitte bestätigen)
  - E-Mail-Adresse (aktuell ein Platzhalter, da öffentlich keine gefunden wurde)
- **`app/impressum/page.tsx`** und **`app/datenschutz/page.tsx`** — enthalten
  `[Platzhalter]` für rechtlich notwendige Angaben (USt-ID, vollständiger Name
  der Geschäftsführung etc.). Handelsregisterdaten (Amtsgericht Ingolstadt,
  HRA 3631, Regler Verwaltungs GmbH als Komplementärin) stammen aus einer
  öffentlichen Registerquelle. Diese Seiten sind eine Struktur-Vorlage,
  **keine Rechtsberatung** — bitte von einem Steuerberater/Anwalt prüfen lassen.
- **Auszeichnung „Deutscher Kältepreis 2016"** (`components/Award.tsx`,
  `data/business.ts`): Die Fakten zu Platzierung, Kategorie und Projekt sind
  anhand der offiziellen Pressemitteilung des Bundesumweltministeriums
  sowie Fachpresse-Berichten recherchiert. Bitte gegenprüfen, falls sich seit
  2016 Details geändert haben (z. B. Firmierung).

## Lokal starten

```bash
npm install
npm run dev
```

Seite öffnet sich unter http://localhost:3000

## Inhalte bearbeiten

Fast alle Texte, Zahlen und Links liegen zentral in **`data/business.ts`** —
Adresse, Telefonnummer, Öffnungszeiten, Leistungen, Auszeichnung,
Galerie-Bildunterschriften. Änderungen dort wirken sich automatisch auf die
ganze Seite aus.

Bilder liegen in **`public/images/`** — einfach eine Datei ersetzen (gleicher
Dateiname) oder in `data/business.ts` auf einen neuen Dateinamen verweisen.

## Deployment (GitHub + Vercel)

1. Neues Repository auf GitHub anlegen und dieses Projekt hochladen (`git push`)
2. Auf [vercel.com](https://vercel.com) mit GitHub einloggen → „Add New Project" →
   das Repository auswählen → „Deploy" (keine Konfiguration nötig, Vercel
   erkennt Next.js automatisch)
3. Nach dem Deploy erhalten Sie einen Link wie
   `https://regler-kaeltetechnik.vercel.app`, den Sie z. B. an Kundschaft
   weitergeben können

## Tech-Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk),
  [Public Sans](https://fonts.google.com/specimen/Public+Sans),
  [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via
  [Fontsource](https://fontsource.org) (self-hosted, DSGVO-freundlich)
- [lucide-react](https://lucide.dev) für UI-Icons
