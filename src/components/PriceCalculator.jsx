import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { estimatePrice, pricing, whatsappLink } from "../content/siteContent";
import { Sparkle } from "./Decor";
import Icon from "./Icons";

const euro = (n) => n.toLocaleString("de-DE");

export default function PriceCalculator({ title = "Was kostet meine Reinigung?" }) {
  const [area, setArea] = useState(pricing.defaultArea);
  const id = useId();
  const { min, max } = estimatePrice(area);

  const clamp = (v) => Math.min(pricing.maxArea, Math.max(pricing.minArea, v));
  const onNumber = (e) => {
    const v = Number(e.target.value);
    if (!Number.isNaN(v)) setArea(v);
  };

  const summary = `Fläche ca. ${area} m² – Preisrechner: ca. ${euro(min)}–${euro(max)} € pro Reinigung`;
  const waText = `Hallo Alles Klar, ich interessiere mich für eine Reinigung. ${summary}. Gern schicke ich Fotos.`;
  const fill = ((clamp(area) - pricing.minArea) / (pricing.maxArea - pricing.minArea)) * 100;

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-navy p-7 text-white/80 sm:p-10">
      <Sparkle className="twinkle absolute right-8 top-8 h-8 w-8 text-sky" />
      <Sparkle className="twinkle twinkle-delay absolute right-20 top-20 h-4 w-4 text-sky" />
      <span className="eyebrow">Preisrechner</span>
      <h2 className="mt-3 max-w-lg text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-xl leading-relaxed">
        Geben Sie die ungefähre Fläche ein und erhalten Sie sofort eine unverbindliche Preisspanne.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <div className="flex items-end justify-between gap-4">
            <label htmlFor={`${id}-range`} className="font-display text-lg font-medium text-white">
              Fläche
            </label>
            <span className="flex items-center gap-2">
              <input
                type="number"
                inputMode="numeric"
                min={pricing.minArea}
                max={pricing.maxArea}
                value={area}
                onChange={onNumber}
                onBlur={() => setArea(clamp(area))}
                aria-label="Fläche in Quadratmetern"
                className="w-24 rounded-xl border-0 bg-white/10 px-3 py-2 text-right font-display text-xl font-semibold text-white ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-sky"
              />
              <span className="font-display text-lg text-white">m²</span>
            </span>
          </div>
          <input
            id={`${id}-range`}
            type="range"
            min={pricing.minArea}
            max={pricing.maxArea}
            step={5}
            value={clamp(area)}
            onChange={(e) => setArea(Number(e.target.value))}
            className="mt-5 h-2 w-full cursor-pointer appearance-none rounded-full accent-sky"
            style={{
              background: `linear-gradient(to right, var(--color-sky) ${fill}%, rgba(255,255,255,0.18) ${fill}%)`,
            }}
          />
          <div className="mt-2 flex justify-between text-sm text-white/60">
            <span>{pricing.minArea} m²</span>
            <span>{pricing.maxArea} m²</span>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 text-slate" aria-live="polite">
          <span className="text-sm">Unverbindlicher Richtwert pro Reinigung</span>
          <p className="mt-1 whitespace-nowrap font-display text-3xl font-bold text-navy sm:text-4xl">
            ca. {euro(min)} – {euro(max)} €
          </p>
        </div>
      </div>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/65">
        Der Rechner liefert eine grobe Orientierung. Der tatsächliche Preis hängt von Art der Reinigung, Verschmutzung,
        Ausstattung und Häufigkeit ab. Ihr verbindliches Angebot erhalten Sie kostenlos nach kurzer Absprache.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link to={`/kontakt?flaeche=${clamp(area)}`} className="btn-sky">
          Genaues Angebot anfragen <Icon name="arrow" className="h-5 w-5" />
        </Link>
        <a href={whatsappLink(waText)} target="_blank" rel="noopener" className="btn-whatsapp">
          <Icon name="whatsapp" className="h-5 w-5" /> Per WhatsApp mit Fotos
        </a>
      </div>
    </div>
  );
}
