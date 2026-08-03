import type { Metadata } from "next";
import "./globals.css";
import { business, award } from "@/data/business";
import VersionSwitcher from "@/components/VersionSwitcher";

export const metadata: Metadata = {
  metadataBase: new URL("https://regler-kaeltetechnik.vercel.app"),
  title: {
    default: `${business.name} – ${business.legalSuffix}`,
    template: `%s – ${business.name}`,
  },
  description:
    "REGLER Klima & Kältetechnik: Wärmepumpen, Klima- und Kälteanlagen für Privat, Gewerbe und Industrie in Hettenshausen bei Pfaffenhofen — ausgezeichnet mit dem Deutschen Kältepreis 2016.",
  keywords: [
    "Kältetechnik Hettenshausen",
    "Klimatechnik Pfaffenhofen",
    "Wärmepumpen Bayern",
    "Kälteanlagen Gewerbe",
    "Kältetechnik Ingolstadt",
    "REGLER Kälte Klima",
  ],
  openGraph: {
    title: `${business.name} – ${business.legalSuffix}`,
    description:
      "Wärmepumpen, Klima- und Kälteanlagen für Privat, Gewerbe und Industrie — ausgezeichnet mit dem Deutschen Kältepreis 2016.",
    url: "https://regler-kaeltetechnik.vercel.app",
    siteName: business.name,
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: `${business.name} ${business.legalSuffix}`,
    image: "https://regler-kaeltetechnik.vercel.app/images/kompressoren.jpg",
    telephone: business.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.zip,
      addressLocality: business.address.city,
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    award: award.title,
  };

  return (
    <html lang="de" className="h-full">
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <VersionSwitcher />
      </body>
    </html>
  );
}
