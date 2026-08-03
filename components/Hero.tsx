import Image from "next/image";
import { Phone, Award, MapPin } from "lucide-react";
import { business } from "@/data/business";
import IceCrystal from "@/components/IceCrystal";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-frost">
      <IceCrystal
        className="crystal-reveal pointer-events-none absolute -right-[12%] top-[4%] w-[80%] max-w-[820px] text-navy-raised md:-right-[4%] md:w-[52%]"
        strokeWidth={3}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:px-8 md:pb-24 md:pt-16">
        <div className="flex flex-col justify-center">
          <span className="plate-badge w-fit text-ice">Kälte · Klima · Wärmepumpen</span>

          <h1 className="mt-6 font-display text-[2.35rem] font-semibold leading-[1.12] tracking-tight text-frost sm:text-5xl">
            Kälte, Klima, Wärmepumpen —{" "}
            <span className="text-brand-red">ausgezeichnet effizient</span>.
          </h1>

          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-frost/75">
            Wir planen, installieren und warten Wärmepumpen-, Klima- und
            Kälteanlagen für Privat, Gewerbe und Industrie — als
            inhabergeführter Fachbetrieb in {business.address.city}, für
            Kundschaft in ganz Oberbayern.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={business.phoneHref} icon={<Phone size={14} />}>
              {business.phoneDisplay}
            </Button>
            <Button href={business.googleMapsUrl} variant="outline" external icon={<MapPin size={14} />}>
              Route planen
            </Button>
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-navy-line pt-6">
            <div className="flex items-center gap-2.5">
              <Award size={18} className="text-brand-red" strokeWidth={1.6} />
              <span className="font-mono text-xs text-frost/70">
                2. Platz · Deutscher Kältepreis 2016
              </span>
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.1em] text-frost/50">
              Privat · Gewerbe · Industrie
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-3 -z-10 rounded-sm border border-ice/30" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/kompressoren.jpg"
                alt="Kälteanlage mit REGLER-Kennzeichnung im Kompressorraum"
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-sm bg-navy-raised px-4 py-3 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ice shadow-lg">
              Anlagenbau · Wartung · Service
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
