import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { metaFor } from "../content/routeMeta";
import { company, faqs, trust, whatsappLink } from "../content/siteContent";
import { Sparkle, Swoosh } from "./Decor";
import Icon from "./Icons";

// Aktualisiert Titel, Beschreibung und Canonical bei Navigation im Browser (vorab gerendert steht es bereits im HTML)
export function usePageMeta(pathname) {
  useEffect(() => {
    const meta = metaFor(pathname);
    const url = `${company.siteUrl}${pathname === "/" ? "/" : pathname}`;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [pathname]);
}

export function PageHero({ eyebrow, title, children }) {
  return (
    <section className="relative overflow-hidden bg-cloud">
      <Swoosh className="pointer-events-none absolute -bottom-6 -right-20 h-36 w-[46rem] text-sky/40" />
      <Sparkle className="twinkle absolute right-[12%] top-10 h-8 w-8 text-sky" />
      <Sparkle className="twinkle twinkle-delay absolute right-[22%] top-24 h-4 w-4 text-sky" />
      <div className="container-page relative py-16 sm:py-20">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="reveal mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">{title}</h1>
        {children && <div className="reveal mt-5 max-w-2xl text-lg leading-relaxed">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, children, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed">{children}</p>}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="container-page mt-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-sky px-6 py-12 sm:px-12 sm:py-14">
        <Swoosh className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-[40rem] text-white/45" />
        <Sparkle className="twinkle absolute right-10 top-8 h-10 w-10 text-white" />
        <Sparkle className="twinkle twinkle-delay-2 absolute right-24 top-24 h-5 w-5 text-white" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl leading-tight text-navy-deep sm:text-4xl">Sauber geplant? Alles klar.</h2>
            <p className="mt-3 text-lg text-navy-deep/80">
              Erzählen Sie uns kurz, was gereinigt werden soll – Sie bekommen ein kostenloses, unverbindliches Angebot.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/kontakt" className="btn-primary">
              Angebot anfragen <Icon name="arrow" className="h-5 w-5" />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-whatsapp">
              <Icon name="whatsapp" className="h-5 w-5" /> WhatsApp
            </a>
            <a href={company.phoneHref} className="btn-light !ring-0">
              <Icon name="phone" className="h-5 w-5" /> {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqList() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="divide-y divide-navy/15 border-y border-navy/15">
      {faqs.map((f, i) => {
        const open = openIndex === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              <span className="font-display text-lg font-semibold text-navy">{f.q}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-soft text-navy transition ${
                  open ? "rotate-45" : ""
                }`}
              >
                <Icon name="plus" className="h-4 w-4" />
              </span>
            </button>
            {open && <p className="max-w-2xl pb-6 leading-relaxed">{f.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function TrustStrip({ className = "" }) {
  return (
    <ul
      className={`grid border-y border-navy/15 sm:grid-cols-3 sm:divide-x sm:divide-navy/15 ${className}`}
    >
      {trust.map((t) => (
        <li key={t.title} className="border-b border-navy/10 py-6 last:border-b-0 sm:border-b-0 sm:px-8 sm:first:pl-0 sm:last:pr-0">
          <strong className="flex items-center gap-2.5 font-display text-lg font-semibold text-navy">
            <Icon name={t.icon} className="h-5 w-5 shrink-0 text-sky" />
            {t.title}
          </strong>
          <span className="mt-2 block text-sm leading-relaxed">{t.text}</span>
        </li>
      ))}
    </ul>
  );
}
