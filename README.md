# Alles Klar Bremen

Website der Reinigungsfirma Alles Klar Bremen (Inhaber: Yacoub Gerges). React + Vite + Tailwind v4, gehostet auf GitHub Pages unter `allesklar-bremen.de`.

## Schnellstart

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # Ausgabe in dist/ – inkl. Vorab-Rendering jeder Seite als eigene HTML-Datei (SEO)
npm run preview  # fertigen Build lokal ansehen
```

## Struktur

```text
src/content/siteContent.js   # ALLE Stammdaten, Leistungen, Vertrauens-Hinweise, FAQ, Preisrechner, SEO-Seiten – Änderungen nur hier
src/content/routeMeta.js     # Seitentitel + Meta-Beschreibung pro URL
src/AppRoutes.jsx            # Routen (gemeinsam für Browser und Vorab-Rendering)
scripts/prerender.mjs        # schreibt nach dem Build pro Route eine HTML-Datei + 404.html
src/components/              # Layout (Header/Footer), Logo, Icons, Decor (Sterne, Schwung, Skyline), Blocks
src/pages/                   # Start, Leistungen, Über uns, Kontakt, Danke, Impressum/Datenschutz/AGB, 404
brand/                       # Logo-Originale (nicht veröffentlicht): Original-JPG + transparente Master-PNG
public/                      # CNAME, robots.txt, sitemap.xml, favicon, Bilder
.github/workflows/           # Build + Deploy auf GitHub Pages bei Push auf main
```

## Vor dem Livegang erledigen

- [x] Logo eingebunden (`public/images/brand/logo.webp`, freigestellt aus dem Original)
- [x] Vorschaubild für WhatsApp/Facebook (`public/images/brand/og-image.png`, 1200×630)
- [x] Steuernummer eingetragen (`company.taxNumber`).
- [ ] Erreichbarkeit (Mo–Sa 08–18 Uhr) bestätigen.
- [ ] Rechtstexte (Impressum, Datenschutz, AGB) final prüfen lassen.
- [ ] Klären, ob die Preise im Rechner inkl. MwSt. sind (Pflicht bei Preisangaben an Privatkunden) bzw. ob Kleinunternehmerregelung gilt – dann Hinweis im Rechner ergänzen.
- [ ] WhatsApp Business auf +49 1590 8021460 einrichten (Begrüßungs- und Abwesenheitsnachricht).

## Marketing-Bausteine

- **WhatsApp** (`company.whatsapp`): mobile Leiste „Anrufen | WhatsApp“, schwebender Button am Desktop, Hero, Kontaktseite, CTA-Bereiche.
- **Preisrechner** (`pricing`): unverbindlich 30–50 € je 10 m² pro Reinigung. Übergibt die Fläche an Kontaktformular (`/kontakt?flaeche=…`) und WhatsApp-Text.
- **SEO-Seiten** (`seoPages`): `/bueroreinigung-bremen`, `/fensterreinigung-bremen`, `/treppenhausreinigung-bremen`, `/umzugsreinigung-bremen`. Neue Seite = neuer Eintrag in `seoPages` + URL in `public/sitemap.xml`.

## Kontaktformular (Web3Forms)

Das Formular sendet über Web3Forms an `kontakt@allesklar-bremen.de`. Der Zugangsschlüssel steht in `siteContent.js` → `company.web3formsKey`; er ist an die Empfängeradresse gebunden und darf öffentlich sein. Nach dem Absenden landet der Besucher auf `/danke`. (FormSubmit wurde ersetzt, weil dessen Aktivierungs-Mail nie bei Strato ankam.)

## Veröffentlichung (GitHub Pages)

1. Repository auf GitHub anlegen und `main` pushen.
2. Im Repo unter *Settings → Pages* als Quelle **GitHub Actions** wählen. Custom Domain: `allesklar-bremen.de`, „Enforce HTTPS“ aktivieren.
3. Beim Domain-Anbieter in der DNS-Verwaltung eintragen:

| Typ | Name | Wert |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | zarasheikhi.github.io |

**Wichtig:** MX- und sonstige Mail-Einträge (für das Postfach `kontakt@allesklar-bremen.de`) **nicht** ändern oder löschen – nur die A-/CNAME-Einträge für die Website anpassen. Alte A-Einträge des Anbieters für `@` und `www` ersetzen.
