import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PageHero } from "../components/Blocks";
import Icon from "../components/Icons";
import { company, estimatePrice, services, trust, whatsappLink } from "../content/siteContent";

const field =
  "w-full rounded-2xl border-0 bg-cloud px-4 py-3.5 text-navy ring-1 ring-navy/10 placeholder:text-slate/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky";
const label = "mb-2 block font-display font-medium text-navy";

export default function Kontakt() {
  const [params] = useSearchParams();
  const message = useRef(null);

  // Fläche aus dem Preisrechner übernehmen (erst nach dem Laden, damit das vorab gerenderte HTML gleich bleibt)
  useEffect(() => {
    const area = Number(params.get("flaeche"));
    if (!area || !message.current || message.current.value) return;
    const { min, max } = estimatePrice(area);
    message.current.value = `Fläche ca. ${area} m² (Preisrechner: ca. ${min}–${max} € pro Reinigung).\n\n`;
  }, [params]);

  return (
    <>
      <PageHero eyebrow="Kontakt" title="Lassen Sie uns kurz sprechen">
        Schreiben Sie uns, was gereinigt werden soll. Wir melden uns in der Regel innerhalb eines Werktags mit einem
        kostenlosen Angebot.
      </PageHero>

      <section className="container-page mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="group flex items-start gap-4 rounded-3xl bg-whatsapp/15 p-5 ring-1 ring-whatsapp/40 transition hover:-translate-y-0.5"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-whatsapp text-[#05341b]">
              <Icon name="whatsapp" className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-sm text-slate">Am schnellsten</span>
              <span className="block font-display text-lg font-medium text-navy">Per WhatsApp schreiben</span>
              <span className="mt-1 block text-sm">Schicken Sie gern ein paar Fotos der Räume mit – dann wird das Angebot genauer.</span>
            </span>
          </a>
          <ContactCard icon="phone" title="Telefon" href={company.phoneHref}>
            {company.phone}
          </ContactCard>
          <ContactCard icon="mail" title="E-Mail" href={`mailto:${company.email}`}>
            {company.email}
          </ContactCard>
          <ContactCard icon="clock" title="Erreichbarkeit">
            {company.hours}
            <br />
            <span className="text-slate">{company.hoursNote}</span>
          </ContactCard>
          <ContactCard icon="pin" title="Adresse">
            {company.street}, {company.zip} {company.city}
            <br />
            <span className="text-slate">Einsatzgebiet: {company.area}</span>
          </ContactCard>
        </aside>

        <form
          action={`https://formsubmit.co/${company.email}`}
          method="POST"
          className="rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_-40px_rgba(11,45,135,0.45)] ring-1 ring-navy/10 sm:p-10"
        >
          <input type="hidden" name="_subject" value="Neue Reinigungsanfrage über allesklar-bremen.de" />
          <input type="hidden" name="_next" value={`${company.siteUrl}/danke`} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px opacity-0"
          />

          <h2 className="text-2xl">Anfrage senden</h2>
          <p className="mt-1 text-sm">Felder mit * sind Pflichtfelder.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={label}>
                Name *
              </label>
              <input id="name" name="Name" required autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="telefon" className={label}>
                Telefon
              </label>
              <input id="telefon" name="Telefon" type="tel" autoComplete="tel" className={field} />
            </div>
            <div>
              <label htmlFor="email" className={label}>
                E-Mail *
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={field} />
            </div>
            <div>
              <label htmlFor="ort" className={label}>
                Ort / Stadtteil
              </label>
              <input id="ort" name="Ort" autoComplete="address-level2" placeholder="z. B. Schwachhausen" className={field} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="leistung" className={label}>
                Gewünschte Leistung *
              </label>
              <select id="leistung" name="Leistung" required defaultValue="" className={field}>
                <option value="" disabled>
                  Bitte auswählen
                </option>
                {services.map((s) => (
                  <option key={s.id}>{s.title}</option>
                ))}
                <option>Sonstiges</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="nachricht" className={label}>
                Ihre Nachricht *
              </label>
              <textarea
                id="nachricht"
                ref={message}
                name="Nachricht"
                required
                rows={5}
                placeholder="Was soll gereinigt werden? Ungefähre Fläche, gewünschter Rhythmus, Wunschtermin …"
                className={field}
              />
            </div>
          </div>

          <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed">
            <input type="checkbox" name="Datenschutz" value="akzeptiert" required className="mt-1 h-4 w-4 accent-navy" />
            <span>
              Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet werden. Details in der{" "}
              <Link to="/datenschutz" className="text-navy underline decoration-sky underline-offset-4">
                Datenschutzerklärung
              </Link>
              . *
            </span>
          </label>

          <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
            Anfrage absenden <Icon name="arrow" className="h-5 w-5" />
          </button>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy">
            {trust.map((t) => (
              <li key={t.short} className="flex items-center gap-1.5">
                <Icon name={t.icon} className="h-4 w-4 text-sky" /> {t.short}
              </li>
            ))}
          </ul>
        </form>
      </section>
    </>
  );
}

function ContactCard({ icon, title, href, children }) {
  const content = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-soft text-navy transition group-hover:bg-sky">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm text-slate">{title}</span>
        <span className="block break-words font-display text-lg font-medium text-navy">{children}</span>
      </span>
    </>
  );
  const cls = "group flex items-start gap-4 rounded-3xl bg-cloud p-5";
  return href ? (
    <a href={href} className={`${cls} transition hover:-translate-y-0.5`}>
      {content}
    </a>
  ) : (
    <div className={cls}>{content}</div>
  );
}
