"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, ArrowRight, Check, Loader2 } from "lucide-react";
import { business } from "@/data/business";
import MapEmbed from "@/components/MapEmbed";

const topics = ["Neubau", "Sanierung", "Wartungsvertrag", "Störung"];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [topic, setTopic] = useState(topics[0]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(
      `${topic}: Anfrage über die Website${form.name ? ` von ${form.name}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        `Anliegen: ${topic}`,
        `Name: ${form.name}`,
        `E-Mail: ${form.email}`,
        `Telefon: ${form.phone}`,
        `PLZ / Ort: ${form.zip}`,
        "",
        "Nachricht:",
        form.message,
      ].join("\n"),
    );
    setTimeout(() => {
      window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 700);
  }

  const field =
    "w-full border-b border-v3-line bg-transparent py-3 text-[0.95rem] text-v3-ink placeholder:text-v3-muted/45 outline-none transition-colors focus:border-v3-clay";
  const label = "mb-1 block v3-label text-[0.58rem] text-v3-muted";

  return (
    <section
      id="kontakt"
      className="border-t border-v3-line bg-v3-paper-raised py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="v3-label text-v3-clay">Kontakt</p>
            <h2 className="mt-6 font-v3-display text-[2.2rem] font-normal leading-[1.05] tracking-[-0.02em] text-v3-ink sm:text-[3rem]">
              Rufen Sie an. Das geht meistens am schnellsten.
            </h2>
            <p className="mt-6 max-w-md text-[0.95rem] leading-[1.75] text-v3-muted">
              Zwei Minuten am Telefon ersparen oft drei E-Mails. Bei einer
              Störung an einer laufenden Anlage sowieso.
            </p>

            <div className="mt-10 border-t border-v3-line">
              <a
                href={business.phoneHref}
                className="group flex items-center gap-4 border-b border-v3-line py-5"
              >
                <Phone size={17} strokeWidth={1.8} className="text-v3-clay" />
                <span>
                  <span className="block v3-label text-[0.56rem] text-v3-muted">
                    Telefon
                  </span>
                  <span className="mt-0.5 block font-v3-display text-[1.25rem] font-medium tracking-tight text-v3-ink">
                    {business.phoneDisplay}
                  </span>
                </span>
                <ArrowRight
                  size={15}
                  className="ml-auto text-v3-line transition-all duration-300 group-hover:translate-x-1 group-hover:text-v3-clay"
                />
              </a>

              <a
                href={`mailto:${business.email}`}
                className="group flex items-center gap-4 border-b border-v3-line py-5"
              >
                <Mail size={17} strokeWidth={1.8} className="text-v3-clay" />
                <span className="min-w-0">
                  <span className="block v3-label text-[0.56rem] text-v3-muted">
                    E-Mail
                  </span>
                  <span className="mt-0.5 block truncate text-[0.95rem] text-v3-ink">
                    {business.email}
                  </span>
                </span>
                <ArrowRight
                  size={15}
                  className="ml-auto shrink-0 text-v3-line transition-all duration-300 group-hover:translate-x-1 group-hover:text-v3-clay"
                />
              </a>

              <div className="flex items-start gap-4 border-b border-v3-line py-5">
                <MapPin
                  size={17}
                  strokeWidth={1.8}
                  className="mt-1 text-v3-clay"
                />
                <div>
                  <span className="block v3-label text-[0.56rem] text-v3-muted">
                    Werkstatt
                  </span>
                  <span className="mt-0.5 block text-[0.95rem] text-v3-ink">
                    {business.address.full}
                  </span>
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="v3-link-underline mt-1 inline-block text-[0.8rem] text-v3-clay"
                  >
                    Route planen
                  </a>
                </div>
              </div>

              <div className="py-5">
                <span className="block v3-label text-[0.56rem] text-v3-muted">
                  Öffnungszeiten
                </span>
                <dl className="mt-3 space-y-1.5">
                  {business.hours.map((h, i) => (
                    <div
                      key={i}
                      className="flex justify-between gap-4 text-[0.88rem]"
                    >
                      <dt className="text-v3-muted">{h.days}</dt>
                      <dd className="font-mono tabular-nums text-v3-ink/85">
                        {h.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="relative mt-2 aspect-[16/10] w-full overflow-hidden border border-v3-line">
              <MapEmbed
                lat={business.geo.lat}
                lng={business.geo.lng}
                title={`Karte: ${business.name}, ${business.address.full}`}
                tone="v3"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-v3-line bg-v3-paper p-6 sm:p-10">
              {status === "sent" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-v3-pine-soft text-v3-pine">
                    <Check size={24} strokeWidth={2.4} />
                  </span>
                  <h3 className="mt-6 font-v3-display text-[1.7rem] font-normal tracking-tight text-v3-ink">
                    Fast geschafft
                  </h3>
                  <p className="mt-4 max-w-sm text-[0.92rem] leading-[1.75] text-v3-muted">
                    Ihr E-Mail-Programm sollte sich mit der fertigen Nachricht
                    geöffnet haben. Ein Klick auf Senden, und sie ist bei uns.
                    Falls nichts passiert ist, schreiben Sie bitte direkt an{" "}
                    <a
                      href={`mailto:${business.email}`}
                      className="text-v3-clay underline underline-offset-4"
                    >
                      {business.email}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 border-b border-v3-clay pb-0.5 text-sm font-semibold text-v3-clay"
                  >
                    Neue Anfrage
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit}>
                  <h3 className="font-v3-display text-[1.5rem] font-normal tracking-tight text-v3-ink">
                    Oder schreiben Sie uns
                  </h3>

                  <div className="mt-8">
                    <span className={label}>Worum geht es?</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTopic(t)}
                          className={`rounded-full border px-4 py-2 text-[0.8rem] transition-colors ${
                            topic === t
                              ? "border-v3-clay bg-v3-clay text-v3-paper"
                              : "border-v3-line text-v3-muted hover:border-v3-clay/40 hover:text-v3-ink"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="v3-name" className={label}>
                        Name oder Firma
                      </label>
                      <input
                        id="v3-name"
                        required
                        value={form.name}
                        onChange={(e) => set("name")(e.target.value)}
                        className={field}
                        placeholder="Max Mustermann"
                      />
                    </div>
                    <div>
                      <label htmlFor="v3-email" className={label}>
                        E-Mail
                      </label>
                      <input
                        id="v3-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => set("email")(e.target.value)}
                        className={field}
                        placeholder="name@firma.de"
                      />
                    </div>
                    <div>
                      <label htmlFor="v3-phone" className={label}>
                        Telefon
                      </label>
                      <input
                        id="v3-phone"
                        value={form.phone}
                        onChange={(e) => set("phone")(e.target.value)}
                        className={field}
                        placeholder="Für Rückfragen"
                      />
                    </div>
                    <div>
                      <label htmlFor="v3-zip" className={label}>
                        PLZ / Ort
                      </label>
                      <input
                        id="v3-zip"
                        value={form.zip}
                        onChange={(e) => set("zip")(e.target.value)}
                        className={field}
                        placeholder="85276 Hettenshausen"
                      />
                    </div>
                  </div>

                  <div className="mt-7">
                    <label htmlFor="v3-msg" className={label}>
                      Ihr Vorhaben
                    </label>
                    <textarea
                      id="v3-msg"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => set("message")(e.target.value)}
                      className={`${field} resize-none`}
                      placeholder="Objekt, Größe, bestehende Anlage, gewünschter Zeitraum…"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-v3-pine px-7 py-3.5 text-sm font-semibold text-v3-paper transition-colors hover:bg-v3-ink disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Wird vorbereitet…
                      </>
                    ) : (
                      <>
                        Anfrage abschicken
                        <ArrowRight
                          size={15}
                          strokeWidth={2.2}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>

                  <p className="mt-5 text-[0.76rem] leading-relaxed text-v3-muted/80">
                    Die Anfrage wird in Ihrem E-Mail-Programm geöffnet und erst
                    durch Sie versendet. Es werden keine Daten an Dritte
                    übertragen.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
