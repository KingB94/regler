import Image from "next/image";
import { gallery } from "@/data/business";

const spanClasses: Record<string, string> = {
  wide: "md:col-span-2 md:row-span-1",
  tall: "md:col-span-1 md:row-span-2",
  normal: "md:col-span-1 md:row-span-1",
};

export default function Gallery() {
  return (
    <section id="galerie" className="bg-navy py-20 text-frost md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <span className="plate-badge text-ice">Galerie</span>
        <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Einblicke in unsere Anlagen.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-3 md:[grid-auto-flow:dense] md:auto-rows-[230px]">
          {gallery.map((item) => (
            <div
              key={item.src}
              className={`group relative overflow-hidden rounded-sm ${spanClasses[item.span ?? "normal"]} aspect-[4/3] md:aspect-auto`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/0 to-transparent opacity-90" />
              <p className="absolute bottom-4 left-4 right-4 font-mono text-xs uppercase tracking-[0.06em] text-frost">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
