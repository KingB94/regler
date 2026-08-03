# REGLER Klima & Kältetechnik — Website

Moderne Next.js-Website für REGLER Klima & Kältetechnik GmbH & Co. KG in
Hettenshausen.

Gebaut mit Next.js 16 (App Router), TypeScript, Tailwind CSS 4 und
selbst gehosteten Schriftarten (kein Nachladen von Google Fonts o. ä.).

## Drei Entwürfe, einer davon aktiv

Das Projekt enthält drei vollständige Gestaltungsvarianten derselben Website.
Alle drei nutzen dieselben Inhalte aus `data/business.ts` und dieselben Fotos —
nur Gestaltung, Aufbau und Tonfall unterscheiden sich.

| Route | Entwurf | Charakter |
|---|---|---|
| `/` | **2 — dunkel & filmisch** (aktiv) | Nachtblau mit Eis- und Glut-Akzent, große Headlines, scroll-gesteuerte Animationen |
| `/v1` | 1 — technisch-editorial | Eisblau/Stahlblau, Space Grotesk, Typenschild-Optik, sachlich |
| `/v3` | 3 — warm & handwerklich | Papierton, große Serifenschrift (Fraunces), Magazin-Layout, ruhig |

Entwurf 2 ist die Hauptseite; Impressum und Datenschutz laufen im selben Design.
Die beiden anderen Entwürfe bleiben zum Vergleich erreichbar und sind für
Suchmaschinen auf `noindex` gesetzt. Unten auf jeder Seite liegt ein kleiner
Umschalter, mit dem man zwischen den drei Entwürfen springen kann.

**Wenn die Entscheidung endgültig ist:** die Ordner `app/v1`, `app/v3`,
`components/v1`-Reste (`Header.tsx`, `Footer.tsx`, `Hero.tsx`, `About.tsx`,
`Award.tsx`, `Gallery.tsx`, `Services.tsx`, `ServiceIcons.tsx`,
`SegmentsMarquee.tsx`, `IceCrystal.tsx`, `Button.tsx`, `Contact.tsx`,
`ContactForm.tsx`) und `components/v3` löschen, dazu `<VersionSwitcher />` aus
`app/layout.tsx` sowie `components/VersionSwitcher.tsx` entfernen.

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
- **`app/(main)/impressum/page.tsx`** und **`app/(main)/datenschutz/page.tsx`** — enthalten
  `[Platzhalter]` für rechtlich notwendige Angaben (USt-ID, vollständiger Name
  der Geschäftsführung etc.). Handelsregisterdaten (Amtsgericht Ingolstadt,
  HRA 3631, Regler Verwaltungs GmbH als Komplementärin) stammen aus einer
  öffentlichen Registerquelle. Diese Seiten sind eine Struktur-Vorlage,
  **keine Rechtsberatung** — bitte von einem Steuerberater/Anwalt prüfen lassen.
- **Auszeichnung „Deutscher Kältepreis 2016"** (`components/v2/TrustSignals.tsx`,
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
- Schriften via [Fontsource](https://fontsource.org), alle selbst gehostet
  (DSGVO-freundlich):
  - Entwurf 1: Space Grotesk, Public Sans, JetBrains Mono
  - Entwurf 2: Plus Jakarta Sans, Cormorant Garamond, Inter, JetBrains Mono
  - Entwurf 3: Fraunces, Inter
- [GSAP](https://gsap.com) (ScrollTrigger) für die Scroll-Animationen in
  Entwurf 2 und 3
- [lucide-react](https://lucide.dev) für UI-Icons
