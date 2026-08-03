"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
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
    "w-full rounded-xl border border-v2-line bg-v2-deep/60 px-4 py-3 text-sm text-v2-text placeholder:text-v2-muted/50 outline-none transition-colors focus:border-v2-ice/60";
  const label =
    "mb-2 block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-v2-muted";

  return (
    <section id="kontakt" className="bg-v2-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Linke Spalte */}
          <div className="lg:col-span-5">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-v2-ice/70">
              Kontakt
            </p>
            <h2 className="mt-5 font-v2-display text-3xl font-extrabold leading-[1.05] tracking-tighter text-v2-text sm:text-5xl">
              Erzählen Sie uns,{" "}
              <span className="font-v2-serif font-normal italic text-v2-ice">
                was gekühlt werden soll
              </span>
            </h2>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-v2-muted">
              Ein Anruf reicht meistens, um einzuschätzen, worum es geht. Bei
              Störungen an einer laufenden Anlage sind wir telefonisch am
              schnellsten erreichbar.
            </p>

            <div className="mt-9 space-y-3">
              <a
                href={business.phoneHref}
                className="group flex items-center gap-4 rounded-2xl border border-v2-line/70 bg-v2-surface p-5 transition-colors hover:border-v2-ice/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-v2-ice/10 text-v2-ice">
                  <Phone size={17} strokeWidth={2.2} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[0.6rem] uppercase tracking-[0.16em] text-v2-muted">
                    Telefon
                  </span>
                  <span className="block text-[0.95rem] font-semibold text-v2-text">
                    {business.phoneDisplay}
                  </span>
                </span>
                <ArrowUpRight
                  size={15}
                  className="ml-auto shrink-0 text-v2-muted transition-colors group-hover:text-v2-ice"
                />
              </a>

              <a
                href={`mailto:${business.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-v2-line/70 bg-v2-surface p-5 transition-colors hover:border-v2-ice/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-v2-ice/10 text-v2-ice">
                  <Mail size={17} strokeWidth={2.2} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[0.6rem] uppercase tracking-[0.16em] text-v2-muted">
                    E-Mail
                  </span>
                  <span className="block truncate text-[0.95rem] font-semibold text-v2-text">
                    {business.email}
                  </span>
                </span>
                <ArrowUpRight
                  size={15}
                  className="ml-auto shrink-0 text-v2-muted transition-colors group-hover:text-v2-ice"
                />
              </a>

              <div className="rounded-2xl border border-v2-line/70 bg-v2-surface p-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-v2-ice/10 text-v2-ice">
                    <MapPin size={17} strokeWidth={2.2} />
                  </span>
                  <span>
                    <span className="block font-mono text-[0.6rem] uppercase tracking-[0.16em] text-v2-muted">
                      Werkstatt
                    </span>
                    <span className="block text-[0.95rem] font-semibold text-v2-text">
                      {business.address.full}
                    </span>
                  </span>
                </div>
                <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-xl border border-v2-line/70">
                  <MapEmbed
                    lat={business.geo.lat}
                    lng={business.geo.lng}
                    title={`Karte: ${business.name}, ${business.address.full}`}
                    tone="v2"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-v2-line/70 bg-v2-surface p-5">
                <div className="flex items-center gap-3">
                  <Clock size={15} className="text-v2-ice" strokeWidth={2.2} />
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-v2-muted">
                    Öffnungszeiten
                  </span>
                </div>
                <dl className="mt-4 space-y-1.5">
                  {business.hours.map((h, i) => (
                    <div key={i} className="flex justify-between gap-4 text-sm">
                      <dt className="text-v2-muted">{h.days}</dt>
                      <dd className="font-mono tabular-nums text-v2-text/85">
                        {h.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Formular */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-v2-line/70 bg-v2-surface p-6 sm:p-9">
              {status === "sent" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-v2-ice/12 text-v2-ice">
                    <CheckCircle2 size={26} strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 font-v2-display text-2xl font-bold tracking-tight text-v2-text">
                    Fast geschafft
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.9rem] leading-relaxed text-v2-muted">
                    Ihr E-Mail-Programm sollte sich mit der fertigen Nachricht
                    geöffnet haben. Bitte einmal auf Senden klicken. Falls nichts
                    passiert ist, schreiben Sie direkt an{" "}
                    <a
                      href={`mailto:${business.email}`}
                      className="text-v2-ice underline underline-offset-4"
                    >
                      {business.email}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 rounded-full border border-v2-line px-5 py-2.5 text-sm font-semibold text-v2-text transition-colors hover:border-v2-ice/50"
                  >
                    Neue Anfrage
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit}>
                  <h3 className="font-v2-display text-xl font-bold tracking-tight text-v2-text">
                    Anfrage stellen
                  </h3>
                  <p className="mt-2 text-[0.85rem] text-v2-muted">
                    Je mehr Sie schon wissen, desto konkreter fällt die Antwort
                    aus.
                  </p>

                  <div className="mt-7">
                    <span className={label}>Worum geht es?</span>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTopic(t)}
                          className={`rounded-full border px-4 py-2 text-[0.8rem] font-medium transition-colors ${
                            topic === t
                              ? "border-v2-ice bg-v2-ice/12 text-v2-ice"
                              : "border-v2-line text-v2-muted hover:text-v2-text"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="v2-name" className={label}>
                        Name oder Firma
                      </label>
                      <input
                        id="v2-name"
                        required
                        value={form.name}
                        onChange={(e) => set("name")(e.target.value)}
                        className={field}
                        placeholder="Max Mustermann"
                      />
                    </div>
                    <div>
                      <label htmlFor="v2-email" className={label}>
                        E-Mail
                      </label>
                      <input
                        id="v2-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => set("email")(e.target.value)}
                        className={field}
                        placeholder="name@firma.de"
                      />
                    </div>
                    <div>
                      <label htmlFor="v2-phone" className={label}>
                        Telefon
                      </label>
                      <input
                        id="v2-phone"
                        value={form.phone}
                        onChange={(e) => set("phone")(e.target.value)}
                        className={field}
                        placeholder="Für Rückfragen"
                      />
                    </div>
                    <div>
                      <label htmlFor="v2-zip" className={label}>
                        PLZ / Ort
                      </label>
                      <input
                        id="v2-zip"
                        value={form.zip}
                        onChange={(e) => set("zip")(e.target.value)}
                        className={field}
                        placeholder="85276 Hettenshausen"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="v2-msg" className={label}>
                      Ihr Vorhaben
                    </label>
                    <textarea
                      id="v2-msg"
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
                    className="v2-btn mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-v2-ice py-4 text-sm font-bold text-v2-deep shadow-lg shadow-v2-ice/20 disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Wird vorbereitet…
                      </>
                    ) : (
                      <>
                        Anfrage abschicken
                        <ArrowUpRight size={16} strokeWidth={2.6} />
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-[0.75rem] leading-relaxed text-v2-muted/80">
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
