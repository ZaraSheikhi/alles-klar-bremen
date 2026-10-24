import { Link } from "react-router-dom";
import { CtaBand, FaqList, SectionHead, TrustStrip } from "../components/Blocks";
import { Sparkle, Swoosh } from "../components/Decor";
import Icon from "../components/Icons";
import PriceCalculator from "../components/PriceCalculator";
import { benefits, company, seoPages, services, steps, whatsappLink } from "../content/siteContent";

export default function Home() {

  return (
    <>
      <Hero />

      <section className="container-page mt-6" aria-label="Darauf können Sie sich verlassen">
        <TrustStrip />
      </section>

      {/* Leistungen */}
      <section className="container-page mt-28 grid gap-12 lg:grid-cols-[0.75fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead eyebrow="Leistungen" title="Was wir für Sie sauber machen">
            Vom Büro bis zur Wohnung – vier Bereiche, ein Anspruch: Wenn wir gehen, ist alles klar.
          </SectionHead>
          <Link
            to="/leistungen"
            className="mt-6 inline-flex items-center gap-2 font-display font-semibold text-navy underline decoration-sky decoration-2 underline-offset-8 hover:text-sky"
          >
            Alle Leistungen im Detail <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <div>
          <ul className="border-t border-navy/15">
            {services.map((s) => (
              <li key={s.id} className="border-b border-navy/15">
                <Link to={`/leistungen#${s.id}`} className="group flex items-center gap-6 py-8 sm:py-9">
                  <div className="min-w-0 flex-1">
                    <h3 className="relative inline-block text-3xl leading-tight transition-colors duration-300 group-hover:text-sky sm:text-4xl">
                      {s.title}
                      <Swoosh className="pointer-events-none absolute -bottom-3 left-0 h-4 w-full origin-left scale-x-0 text-sky/60 transition-transform duration-500 group-hover:scale-x-100" />
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed">{s.short}</p>
                    <p className="mt-3 font-display text-sm font-medium text-navy/70">{s.keywords.join("\u00a0\u00a0·\u00a0\u00a0")}</p>
                  </div>
                  <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-full text-navy ring-1 ring-navy/20 sm:grid transition duration-300 group-hover:-rotate-45 group-hover:bg-navy group-hover:text-white group-hover:ring-navy">
                    <Icon name="arrow" className="h-5 w-5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 leading-relaxed">
            <span className="font-display font-medium text-navy">Gezielt gesucht? </span>
            {seoPages.map((p, i) => (
              <span key={p.slug}>
                {i > 0 && <span className="text-navy/30"> · </span>}
                <Link to={`/${p.slug}`} className="text-navy underline decoration-sky/60 underline-offset-4 hover:decoration-sky">
                  {p.name} Bremen
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="container-page mt-24" id="preisrechner">
        <PriceCalculator />
      </section>

      {/* Vorteile */}
      <section className="mt-28 bg-navy py-20 text-white/80 sm:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <span className="eyebrow">Warum Alles Klar</span>
            <h2 className="mt-3 text-3xl leading-tight text-white sm:text-4xl">
              Sauberkeit, auf die Sie sich verlassen können.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed">
              Wir sind ein Bremer Team mit klaren Absprachen, festen Gesichtern und einem genauen Blick fürs Detail.
              Inhaber {company.owner} ist persönlich für Sie erreichbar.
            </p>
            <Sparkle className="twinkle absolute -top-6 right-6 hidden h-10 w-10 text-sky lg:block" />
          </div>
          <dl className="grid gap-x-12 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="border-t border-white/20 pb-8 pt-6">
                <dt className="font-display text-2xl font-semibold text-sky">{b.title}</dt>
                <dd className="mt-3 leading-relaxed">{b.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Ablauf */}
      <section className="container-page mt-24">
        <SectionHead eyebrow="So einfach geht's" title="In drei Schritten zur sauberen Sache" center />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          <Swoosh className="pointer-events-none absolute left-[10%] top-2 hidden h-16 w-[80%] text-sky/30 md:block" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white font-display text-2xl font-bold text-navy shadow-[0_10px_30px_-12px_rgba(11,45,135,0.45)] ring-1 ring-navy/10">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="container-page mt-28 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead eyebrow="Häufige Fragen" title="Gut zu wissen">
          Ihre Frage ist nicht dabei? Rufen Sie uns einfach an unter{" "}
          <a href={company.phoneHref} className="font-semibold text-navy underline decoration-sky underline-offset-4">
            {company.phone}
          </a>
          .
        </SectionHead>
        <FaqList />
      </section>

      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-sky-soft/70 to-white" />
      <div className="container-page grid items-center gap-14 pb-10 pt-12 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
        <div className="reveal">
          <span className="eyebrow">
            <Sparkle className="h-3.5 w-3.5" /> Reinigungsfirma in Bremen
          </span>
          <h1 className="mt-4 text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Alles sauber.
            <br />
            <span className="relative inline-block text-sky">
              Alles klar.
              <Swoosh className="absolute -bottom-4 left-0 h-5 w-full text-sky/50" />
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed sm:text-xl">
            Unterhaltsreinigung, Fenster, Grundreinigung und Haushalt – zuverlässig erledigt von Ihrem Team aus Bremen.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/kontakt" className="btn-primary">
              Kostenloses Angebot <Icon name="arrow" className="h-5 w-5" />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-whatsapp">
              <Icon name="whatsapp" className="h-5 w-5" /> Per WhatsApp anfragen
            </a>
          </div>
          <p className="mt-4 text-sm">
            Lieber telefonieren?{" "}
            <a href={company.phoneHref} className="font-semibold text-navy underline decoration-sky underline-offset-4">
              {company.phone}
            </a>
          </p>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-navy">
            {["Unverbindliches Angebot", "Feste Ansprechpartner", "Bremen & Umgebung"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-sky" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="reveal relative mx-auto aspect-square w-full max-w-md [animation-delay:150ms]">
      <div className="absolute inset-6 rounded-full bg-sky-soft" />
      <div className="absolute inset-16 rounded-full bg-white shadow-[0_30px_80px_-30px_rgba(11,45,135,0.45)]" />

      <Sparkle className="twinkle absolute left-[6%] top-[14%] h-7 w-7 text-sky" />
      <Sparkle className="twinkle twinkle-delay-2 absolute right-[6%] top-[8%] h-5 w-5 text-sky" />

      <img
        src={company.logo}
        alt=""
        width="640"
        height="448"
        className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="absolute -left-2 bottom-[6%] flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-navy/5 sm:-left-8">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-sky text-navy-deep">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <span className="text-sm leading-tight">
          <strong className="block font-display text-navy">Büro gereinigt</strong>
          heute, 07:30 Uhr
        </span>
      </div>
      <div className="absolute -right-1 top-[64%] rounded-2xl bg-navy px-4 py-3 text-white shadow-xl sm:-right-6">
        <span className="block font-display text-2xl font-bold leading-none">4</span>
        <span className="text-xs text-white/75">Leistungsbereiche</span>
      </div>
    </div>
  );
}
