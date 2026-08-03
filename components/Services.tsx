import { services } from "@/data/business";
import {
  HeatpumpIcon,
  ClimateIcon,
  CoolingIcon,
  WaterIcon,
  RecoveryIcon,
  ServiceIcon,
} from "@/components/ServiceIcons";

const iconMap = {
  heatpump: HeatpumpIcon,
  climate: ClimateIcon,
  cooling: CoolingIcon,
  water: WaterIcon,
  recovery: RecoveryIcon,
  service: ServiceIcon,
};

export default function Services() {
  return (
    <section id="leistungen" className="bg-frost py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-xl">
          <span className="plate-badge text-ice-deep">Leistungen</span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Ein Fachbetrieb, jede Temperatur.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">
            Von der Wärmepumpe bis zur industriellen Kälteanlage — wir planen,
            installieren und betreuen Ihre Technik über den gesamten
            Lebenszyklus.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-frost-line bg-frost-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.title} className="group flex flex-col bg-frost p-8 transition-colors hover:bg-frost-raised">
                <Icon className="h-10 w-10 text-ice-deep" />
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
