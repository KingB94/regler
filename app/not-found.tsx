import { business } from "@/data/business";
import IceCrystal from "@/components/IceCrystal";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy px-5 text-center text-frost">
      <IceCrystal
        className="pointer-events-none absolute left-1/2 top-1/2 w-[70%] max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-navy-raised"
        strokeWidth={3}
      />
      <div className="relative">
        <span className="plate-badge text-brand-red">404</span>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Hier ist es kalt — und leer.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-frost/70">
          Die gesuchte Seite gibt es nicht (mehr). Zurück zur Startseite von {business.name}
          oder rufen Sie uns direkt an.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/">Zur Startseite</Button>
          <Button href={business.phoneHref} variant="outline">
            {business.phoneDisplay}
          </Button>
        </div>
      </div>
    </div>
  );
}
