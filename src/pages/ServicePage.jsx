import { Link } from "react-router-dom";
import { CtaBand, PageHero, SectionHead, TrustStrip } from "../components/Blocks";
import Icon from "../components/Icons";
import PriceCalculator from "../components/PriceCalculator";
import { company, seoPages, whatsappLink } from "../content/siteContent";

export default function ServicePage({ page }) {
  const others = seoPages.filter((p) => p.slug !== page.slug);

  return (
    <>
      <PageHero eyebrow={`${page.name} · Bremen & Umgebung`} title={page.title}>
        <p>{page.intro}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/kontakt" className="btn-primary">
            Kostenloses Angebot <Icon name="arrow" className="h-5 w-5" />
          </Link>
          <a
            href={whatsappLink(`Hallo Alles Klar, ich interessiere mich für eine ${page.name} in Bremen.`)}
            target="_blank"
            rel="noopener"
            className="btn-whatsapp"
          >
            <Icon name="whatsapp" className="h-5 w-5" /> Per WhatsApp anfragen
          </a>
        </div>
      </PageHero>

      <section className="container-page mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHead eyebrow="Leistungsumfang" title={`Das gehört zu unserer ${page.name}`} />
          <ul className="mt-8 grid border-t border-navy/10 sm:grid-cols-2 sm:gap-x-10">
            {page.items.map((item) => (
              <li key={item} className="border-b border-navy/10 py-3.5 text-lg text-navy">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed">
            Weitere Wünsche? Sprechen Sie uns an – wir stimmen den Umfang individuell mit Ihnen ab.
          </p>
        </div>

        <aside className="space-y-10 lg:border-l lg:border-navy/15 lg:pl-12">
          <div>
            <span className="eyebrow">Für wen?</span>
            <p className="mt-3 font-display text-2xl font-medium leading-snug text-navy">
              {page.audience.join(", ")}.
            </p>
          </div>
          <div>
            <span className="eyebrow">Wie oft?</span>
            <p className="mt-3 text-lg leading-relaxed">{page.rhythm}</p>
          </div>
        </aside>
      </section>

      <section className="container-page mt-16">
        <TrustStrip />
      </section>

      <section className="container-page mt-16">
        <PriceCalculator title={`Was kostet eine ${page.name} in Bremen?`} />
      </section>

      <section className="container-page mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead eyebrow="Häufige Fragen" title={`Fragen zur ${page.name}`}>
          Noch etwas offen? Rufen Sie an unter{" "}
          <a href={company.phoneHref} className="font-semibold text-navy underline decoration-sky underline-offset-4">
            {company.phone}
          </a>
          .
        </SectionHead>
        <dl className="border-t border-navy/15">
          {page.faqs.map((f) => (
            <div key={f.q} className="border-b border-navy/15 py-6">
              <dt className="font-display text-lg font-semibold text-navy">{f.q}</dt>
              <dd className="mt-2 leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-page mt-24">
        <SectionHead eyebrow="Weitere Leistungen" title="Das machen wir auch" />
        <ul className="mt-8 border-t border-navy/15">
          {others.map((p) => (
            <li key={p.slug} className="border-b border-navy/15">
              <Link to={`/${p.slug}`} className="group flex items-center justify-between gap-6 py-6">
                <span className="font-display text-2xl font-semibold text-navy transition-colors group-hover:text-sky sm:text-3xl">
                  {p.name} Bremen
                </span>
                <Icon name="arrow" className="h-6 w-6 shrink-0 text-navy transition group-hover:translate-x-1 group-hover:text-sky" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
