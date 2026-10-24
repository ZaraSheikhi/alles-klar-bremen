import { Link } from "react-router-dom";
import { PageHero } from "../components/Blocks";
import { company } from "../content/siteContent";

export function Danke() {
  return (
    <PageHero eyebrow="Anfrage gesendet" title="Danke! Wir melden uns – alles klar.">
      <p>
        Ihre Anfrage ist bei uns angekommen. Wir melden uns in der Regel innerhalb eines Werktags. Eilig? Rufen Sie uns an
        unter{" "}
        <a href={company.phoneHref} className="font-semibold text-navy">
          {company.phone}
        </a>
        .
      </p>
      <Link to="/" className="btn-primary mt-8">
        Zur Startseite
      </Link>
    </PageHero>
  );
}

export function NotFound() {
  return (
    <PageHero eyebrow="Fehler 404" title="Hier ist leider nichts – nicht mal Staub.">
      <p>Die Seite existiert nicht (mehr). Vielleicht hilft Ihnen einer dieser Links weiter.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="btn-primary">
          Startseite
        </Link>
        <Link to="/kontakt" className="btn-light">
          Kontakt
        </Link>
      </div>
    </PageHero>
  );
}
