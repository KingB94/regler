// ---------------------------------------------------------------
// Alle Inhalte der Website an einem Ort.
// Ändern Sie Texte, Zahlen und Öffnungszeiten einfach hier —
// der Rest der Seite aktualisiert sich automatisch.
//
// WICHTIG: Bitte prüfen Sie vor dem Live-Schalten insbesondere
// die mit "// TODO" markierten Werte.
// ---------------------------------------------------------------

export const business = {
  name: "REGLER",
  legalSuffix: "Klima & Kältetechnik GmbH & Co. KG",
  claim: "Kälte, Klima, Wärmepumpen — ausgezeichnet effizient",
  phoneDisplay: "08441 871747",
  phoneHref: "tel:+498441871747",
  // TODO: Es wurde keine öffentliche geschäftliche E-Mail-Adresse
  // gefunden — bitte durch die echte Adresse ersetzen.
  email: "info@regler-kaeltetechnik.de",
  address: {
    street: "Hauptstraße 1",
    zip: "85276",
    city: "Hettenshausen",
    full: "Hauptstraße 1, 85276 Hettenshausen",
  },
  geo: {
    lat: 48.49407,
    lng: 11.5048,
  },
  // TODO: Aus einer Handwerkskammer-Ausbildungsanzeige übernommen —
  // bitte gegenprüfen.
  owner: "Martin Regler",
  ownerRole: "Inhaber & Geschäftsführer",
  legalForm: "GmbH & Co. KG",
  registerNote: "Amtsgericht Ingolstadt, HRA 3631",
  // TODO: Bitte tatsächliche Öffnungszeiten bestätigen/anpassen.
  hours: [
    { days: "Montag – Freitag", time: "08:00 – 12:00 Uhr" },
    { days: "Montag – Freitag", time: "13:00 – 18:00 Uhr" },
    { days: "Samstag / Sonntag", time: "geschlossen" },
  ],
  googleMapsUrl:
    "https://www.google.com/maps/place/Regler+Klima+%26+K%C3%A4ltetechnik+GmbH+%26+Co.KG/@48.49407,11.5041563,19z",
} as const;

export const award = {
  title: "2. Platz — Deutscher Kältepreis 2016",
  category:
    "Kategorie „Maßnahmen zur Emissionsminderung durch Teilsanierung von Kälte- oder Klimaanlagen“",
  issuer:
    "Bundesministerium für Umwelt, Naturschutz, Bau und Reaktorsicherheit (BMUB), im Rahmen der Nationalen Klimaschutzinitiative",
  date: "verliehen am 11. April 2016 im Rahmen der Berliner Energietage",
  description:
    "Ausgezeichnet für eine Kälteanlage mit Wärmerückgewinnung und Abwärmespeicherung in einer Metzgerei — realisiert gemeinsam mit Robert Schiessl. Die Lösung machte eine Gasheizung überflüssig und senkte die Emissionen des Betriebs um rund 60 Prozent.",
};

export type Service = {
  title: string;
  description: string;
  icon: "heatpump" | "climate" | "cooling" | "water" | "recovery" | "service";
};

export const services: Service[] = [
  {
    title: "Wärmepumpen",
    description:
      "Planung und Installation hocheffizienter Wärmepumpen für Wohn- und Gewerbeobjekte.",
    icon: "heatpump",
  },
  {
    title: "Klimatechnik",
    description:
      "Klimaanlagen für Handwerk, Gewerbe und Industrie — von der Planung bis zur laufenden Wartung.",
    icon: "climate",
  },
  {
    title: "Kältetechnik",
    description:
      "Gewerbliche und industrielle Kälteanlagen, u. a. für Lebensmittelhandel und Handwerksbetriebe.",
    icon: "cooling",
  },
  {
    title: "Kaltwasser- & Soleanlagen",
    description:
      "Spezialanlagen für industrielle Kühlprozesse und Prozesskühlung nach Maß.",
    icon: "water",
  },
  {
    title: "Wärmerückgewinnung",
    description:
      "Ausgezeichnete Konzepte zur Abwärmenutzung, die fossile Heizsysteme ersetzen können.",
    icon: "recovery",
  },
  {
    title: "Wartung & Kundendienst",
    description:
      "Regelmäßige Wartung, Störungsbehebung und Instandhaltung bestehender Anlagen.",
    icon: "service",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  span?: "wide" | "tall" | "normal";
};

export const gallery: GalleryItem[] = [
  {
    src: "/images/maschinenraum-1.jpg",
    alt: "Blick in einen Maschinenraum mit mehreren Rohrleitungen und Manometern",
    caption: "Maschinenraum einer betreuten Anlage",
    span: "wide",
  },
  {
    src: "/images/rohrleitungen-ventile.jpg",
    alt: "Nahaufnahme dreier Rohrleitungen mit Manometern und grünen Absperrventilen",
    caption: "Präzise Rohrleitungstechnik im Detail",
    span: "tall",
  },
  {
    src: "/images/kompressoren.jpg",
    alt: "Kompressorenaggregat mit REGLER-Kennzeichnung im Kälteanlagenraum",
    caption: "Kälteanlage mit REGLER-Kennzeichnung",
  },
  {
    src: "/images/maschinenraum-2.jpg",
    alt: "Reihe von Rohrleitungen mit Reglern und Manometern in einem Technikraum",
    caption: "Technikraum einer Kälte- und Klimaanlage",
  },
];
