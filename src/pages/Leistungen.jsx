import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CtaBand, PageHero } from "../components/Blocks";
import Icon from "../components/Icons";
import PriceCalculator from "../components/PriceCalculator";
import { seoPages, services } from "../content/siteContent";

export default function Leistungen() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <>
      <PageHero eyebrow="Leistungen" title="Reinigung für Gewerbe und Zuhause">
        Ob regelmäßig oder einmalig: Wir stellen die Reinigung so zusammen, wie sie zu Ihren Räumen und Ihrem Alltag
        passt.
      </PageHero>

      <div className="container-page mt-12">
        {services.map((s) => (
          <article
            id={s.id}
            key={s.id}
            className="grid scroll-mt-28 gap-10 border-b border-navy/15 py-14 last:border-b-0 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
          >
            <div>
              <h2 className="text-4xl leading-tight sm:text-5xl">{s.title}</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed">{s.text}</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {seoPages
                  .filter((p) => p.serviceId === s.id)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      to={`/${p.slug}`}
                      className="inline-flex items-center gap-1.5 font-display font-semibold text-navy underline decoration-sky decoration-2 underline-offset-8 hover:text-sky"
                    >
                      {p.name} Bremen <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  ))}
              </div>
            </div>
            <div>
              <span className="eyebrow">Das gehört dazu</span>
              <ul className="mt-4 border-t border-navy/10">
                {s.items.map((item) => (
                  <li key={item} className="border-b border-navy/10 py-3.5 text-lg text-navy">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        <p className="pt-10 text-lg">
          Etwas anderes im Sinn? Sprechen Sie uns an – vieles lässt sich individuell vereinbaren.
        </p>
      </div>

      <section className="container-page mt-16" id="preisrechner">
        <PriceCalculator />
      </section>

      <CtaBand />
    </>
  );
}
