import { PageHero } from "../components/Blocks";
import { company, services } from "../content/siteContent";

function LegalPage({ title, eyebrow, children }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <div className="legal container-page mt-12 max-w-3xl">{children}</div>
    </>
  );
}

const Address = () => (
  <p>
    {company.legalName}
    <br />
    Inhaber: {company.owner}
    <br />
    {company.street}
    <br />
    {company.zip} {company.city}
  </p>
);

export function Impressum() {
  return (
    <LegalPage eyebrow="Rechtliche Angaben" title="Impressum">
      <h2 className="!mt-0">Angaben gemäß § 5 DDG</h2>
      <Address />
      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={company.phoneHref}>{company.phone}</a>
        <br />
        E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>
      <h2>Steuerliche Angaben</h2>
      <p>Steuernummer: {company.taxNumber}</p>
      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        {company.owner}, {company.street}, {company.zip} {company.city}
      </p>
      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht jedoch nicht.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
        hiervon unberührt.
      </p>
      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für
        diese fremden Inhalte können wir keine Gewähr übernehmen. Für die Inhalte verlinkter Seiten ist stets der jeweilige
        Anbieter verantwortlich.
      </p>
      <h2>Urheberrecht</h2>
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen
        Urheberrecht. Vervielfältigung, Bearbeitung und Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
        schriftlichen Zustimmung des jeweiligen Rechteinhabers.
      </p>
    </LegalPage>
  );
}

export function Datenschutz() {
  return (
    <LegalPage eyebrow="Rechtliche Angaben" title="Datenschutzerklärung">
      <h2 className="!mt-0">1. Verantwortliche Stelle</h2>
      <Address />
      <p>
        Telefon: {company.phone}
        <br />
        E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>
      <h2>2. Allgemeine Hinweise</h2>
      <p>
        Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften.
        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
      </p>
      <h2>3. Hosting und Server-Protokolle</h2>
      <p>
        Diese Website wird über GitHub Pages (GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA)
        bereitgestellt. Beim Aufruf der Website verarbeitet der Hostinganbieter technisch erforderliche Verbindungsdaten,
        insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Datei, übertragene Datenmenge, Browsertyp und
        Betriebssystem. Die Verarbeitung erfolgt zur sicheren und fehlerfreien Bereitstellung der Website auf Grundlage von
        Art. 6 Abs. 1 lit. f DSGVO. Eine Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework.
        Weitere Informationen:{" "}
        <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">
          Datenschutzerklärung von GitHub
        </a>
        .
      </p>
      <h2>4. Kontaktaufnahme und Anfrageformular</h2>
      <p>
        Wenn Sie uns per E-Mail, Telefon oder über das Anfrageformular kontaktieren, verarbeiten wir Ihre Angaben zur
        Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei
        vorvertraglichen oder vertraglichen Anliegen, ansonsten Art. 6 Abs. 1 lit. f DSGVO.
      </p>
      <p>
        Für die Übermittlung des Formulars nutzen wir den Dienst Web3Forms. Beim Absenden werden die eingegebenen Daten
        an Web3Forms übertragen und anschließend per E-Mail an uns weitergeleitet. Dabei können Daten auch außerhalb der
        EU verarbeitet werden. Weitere Informationen finden Sie unter{" "}
        <a href="https://web3forms.com/privacy" rel="noopener">
          web3forms.com/privacy
        </a>
        . Wenn Sie dies nicht wünschen, kontaktieren Sie uns bitte direkt per Telefon oder E-Mail.
      </p>
      <h2>5. Kontakt per WhatsApp</h2>
      <p>
        Auf dieser Website verlinken wir auf WhatsApp, einen Dienst der WhatsApp Ireland Limited, Merrion Road, Dublin 4,
        Irland (Teil der Meta-Gruppe). Beim bloßen Besuch unserer Website werden keine Daten an WhatsApp übertragen. Erst
        wenn Sie auf einen WhatsApp-Link klicken und uns schreiben, verarbeitet WhatsApp Ihre Telefonnummer, Ihre
        Nachrichten und ggf. Metadaten; dabei kann eine Übermittlung in die USA stattfinden. Wir nutzen Ihre Nachricht
        ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Wenn Sie WhatsApp nicht nutzen möchten,
        erreichen Sie uns per Telefon, E-Mail oder über das Anfrageformular. Weitere Informationen:{" "}
        <a href="https://www.whatsapp.com/legal/privacy-policy-eea" rel="noopener">
          Datenschutzrichtlinie von WhatsApp
        </a>
        .
      </p>
      <h2>6. Cookies und externe Dienste</h2>
      <p>
        Diese Website setzt keine Analyse-, Marketing- oder Tracking-Cookies ein. Schriftarten werden lokal von unserem
        Server geladen; es findet keine Verbindung zu Google Fonts statt. Es werden keine externen Karten-, Video- oder
        Analysedienste eingebunden.
      </p>
      <h2>7. Speicherdauer</h2>
      <p>
        Wir speichern personenbezogene Daten nur so lange, wie dies zur Bearbeitung Ihres Anliegens erforderlich ist oder
        gesetzliche Aufbewahrungspflichten bestehen. Entfällt der Verarbeitungszweck, werden die Daten gelöscht, sofern
        keine gesetzlichen Gründe für eine weitere Speicherung vorliegen.
      </p>
      <h2>8. Ihre Rechte</h2>
      <p>
        Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit und Widerspruch. Erteilte Einwilligungen können Sie jederzeit mit Wirkung
        für die Zukunft widerrufen. Außerdem steht Ihnen ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu.
      </p>
      <h2>9. Zuständige Aufsichtsbehörde</h2>
      <p>
        Die Landesbeauftragte für Datenschutz und Informationsfreiheit der Freien Hansestadt Bremen, Arndtstraße 1, 27570
        Bremerhaven.
      </p>
      <h2>10. Stand</h2>
      <p>Stand: Oktober 2026</p>
    </LegalPage>
  );
}

export function Agb() {
  return (
    <LegalPage eyebrow="Allgemeine Geschäftsbedingungen" title="AGB">
      <p className="!mt-0">Allgemeine Geschäftsbedingungen von {company.legalName}, Inhaber {company.owner}.</p>
      <h2>1. Geltungsbereich</h2>
      <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Dienstleistungen von {company.name}.</p>
      <h2>2. Angebot und Vertrag</h2>
      <p>
        Unsere Angebote sind unverbindlich. Ein Vertrag kommt erst durch die schriftliche oder mündliche
        Auftragsbestätigung zustande.
      </p>
      <h2>3. Leistungen</h2>
      <p>Wir bieten insbesondere folgende Dienstleistungen an:</p>
      <ul>
        {services.map((s) => (
          <li key={s.id}>{s.title}</li>
        ))}
      </ul>
      <p>Weitere Leistungen können individuell vereinbart werden.</p>
      <h2>4. Zahlung</h2>
      <p>
        Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zu bezahlen, sofern nichts anderes vereinbart
        wurde.
      </p>
      <h2>5. Termine</h2>
      <p>
        Vereinbarte Termine sind verbindlich. Sollte ein Termin nicht eingehalten werden können, informieren sich beide
        Vertragsparteien möglichst frühzeitig.
      </p>
      <h2>6. Haftung</h2>
      <p>
        Wir haften für Schäden nur im Rahmen der gesetzlichen Bestimmungen. Offensichtliche Mängel sind uns unverzüglich
        mitzuteilen, damit wir diese beheben können.
      </p>
      <h2>7. Datenschutz</h2>
      <p>Personenbezogene Daten werden ausschließlich im Rahmen der gesetzlichen Datenschutzbestimmungen verarbeitet.</p>
      <h2>8. Schlussbestimmungen</h2>
      <p>Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist, soweit gesetzlich zulässig, Bremen.</p>
    </LegalPage>
  );
}
