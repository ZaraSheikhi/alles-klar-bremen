import { company, seoPages } from "./siteContent";

// Titel und Beschreibung pro Seite – genutzt im Browser (Layout) und beim Vorab-Rendering (scripts/prerender.mjs).
export const routeMeta = {
  "/": {
    title: `${company.name} | Reinigungsfirma in Bremen`,
    description:
      "Alles Klar Bremen: Unterhaltsreinigung, Glas- und Fensterreinigung, Grundreinigung und Haushaltsreinigung in Bremen und Umgebung. Jetzt kostenloses Angebot anfragen.",
  },
  "/leistungen": {
    title: `Leistungen | ${company.name}`,
    description:
      "Unterhaltsreinigung, Glas- und Fensterreinigung, Grund- und Sonderreinigung sowie Haushaltsreinigung in Bremen – mit Preisrechner.",
  },
  "/ueber-uns": {
    title: `Über uns | ${company.name}`,
    description: "Alles Klar Bremen – Ihre Reinigungsfirma aus Bremen mit festangestellten Mitarbeitern und festen Ansprechpartnern.",
  },
  "/kontakt": {
    title: `Kontakt | ${company.name}`,
    description: "Jetzt kostenloses Reinigungsangebot in Bremen anfragen – per WhatsApp, Telefon oder Formular.",
  },
  "/impressum": { title: `Impressum | ${company.name}`, description: `Impressum von ${company.name}.` },
  "/datenschutz": { title: `Datenschutz | ${company.name}`, description: `Datenschutzerklärung von ${company.name}.` },
  "/agb": { title: `AGB | ${company.name}`, description: `Allgemeine Geschäftsbedingungen von ${company.name}.` },
  "/danke": { title: `Vielen Dank | ${company.name}`, description: "Ihre Anfrage wurde gesendet.", noindex: true },
  ...Object.fromEntries(
    seoPages.map((p) => [`/${p.slug}`, { title: `${p.metaTitle} | ${company.name}`, description: p.description }])
  ),
};

export const notFoundMeta = {
  title: `Seite nicht gefunden | ${company.name}`,
  description: "Diese Seite existiert nicht.",
  noindex: true,
};

export function metaFor(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return routeMeta[clean] ?? notFoundMeta;
}
