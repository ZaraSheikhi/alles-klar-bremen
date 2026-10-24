// Zentrale Inhalte und Stammdaten. Änderungen an Kontakt, Zeiten oder Leistungen nur hier vornehmen.

export const company = {
  name: "Alles Klar Bremen",
  legalName: "Alles Klar Bremen – Reinigungsfirma",
  owner: "Yacoub Gerges",
  street: "Achterdiek 68D",
  zip: "28359",
  city: "Bremen",
  phone: "+49 176 32043104",
  phoneHref: "tel:+4917632043104",
  email: "kontakt@allesklar-bremen.de",
  whatsapp: "4917632043104",
  taxNumber: "6022202977",
  hours: "Montag bis Samstag, 08:00 – 18:00 Uhr",
  hoursNote: "Sonntag nach Vereinbarung",
  area: "Bremen und Umgebung",
  siteUrl: "https://allesklar-bremen.de",
  logo: "/images/brand/logo.webp",
};

export const navigation = [
  { label: "Start", to: "/" },
  { label: "Leistungen", to: "/leistungen" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Kontakt", to: "/kontakt" },
];

export const services = [
  {
    id: "unterhaltsreinigung",
    keywords: ["Büros", "Praxen", "Treppenhäuser"],
    icon: "building",
    title: "Unterhaltsreinigung",
    short: "Regelmäßig saubere Büros, Praxen und Treppenhäuser – nach festem Plan.",
    text: "Wir übernehmen die laufende Reinigung Ihrer Räume im täglichen, wöchentlichen oder individuellen Rhythmus. Feste Ansprechpartner und gleichbleibende Teams sorgen dafür, dass alles sitzt – ohne dass Sie sich darum kümmern müssen.",
    items: [
      "Büros, Kanzleien und Praxen",
      "Treppenhäuser und Hausflure",
      "Sanitär- und Küchenbereiche",
      "Böden, Oberflächen, Müllentsorgung",
    ],
  },
  {
    id: "glasreinigung",
    keywords: ["Fenster", "Rahmen", "Schaufenster"],
    icon: "window",
    title: "Glas- & Fensterreinigung",
    short: "Streifenfreie Fenster, Rahmen und Glasflächen – innen wie außen.",
    text: "Klare Sicht für Ihr Zuhause oder Geschäft. Wir reinigen Fenster, Rahmen, Falze und Fensterbänke gründlich und streifenfrei – einmalig oder in festen Intervallen.",
    items: [
      "Fenster inkl. Rahmen und Falze",
      "Schaufenster und Glastüren",
      "Wintergärten und Glasfassaden",
      "Fensterbänke innen und außen",
    ],
  },
  {
    id: "grundreinigung",
    keywords: ["Bauendreinigung", "Umzug", "Grundreinigung"],
    icon: "sparkle",
    title: "Grund- & Sonderreinigung",
    short: "Wenn es mehr sein muss: Bauend-, Umzugs- und Grundreinigung.",
    text: "Für alles, was über die normale Reinigung hinausgeht: Nach der Renovierung, vor der Wohnungsübergabe oder einfach für einen kompletten Neustart. Wir packen gründlich an – bis in die Ecken.",
    items: [
      "Bauendreinigung nach Renovierung",
      "Umzugs- und Übergabereinigung",
      "Intensive Grundreinigung",
      "Teppich- und Polsterreinigung auf Anfrage",
    ],
  },
  {
    id: "privathaushalte",
    keywords: ["Wohnung", "Haus", "Frühjahrsputz"],
    icon: "home",
    title: "Privathaushalte",
    short: "Mehr Zeit für Sie – wir kümmern uns um Ihr Zuhause.",
    text: "Ob regelmäßige Haushaltsreinigung oder einmaliger Frühjahrsputz: Wir reinigen Ihre Wohnung oder Ihr Haus zuverlässig, diskret und so, wie Sie es sich wünschen.",
    items: [
      "Wohnungs- und Hausreinigung",
      "Küche und Bad gründlich",
      "Staubwischen, Saugen, Wischen",
      "Frühjahrsputz und Einzeltermine",
    ],
  },
];

// Nur bestätigte Angaben (vom Inhaber bestätigt, Okt. 2026) – nichts ergänzen, was nicht nachweisbar stimmt.
export const trust = [
  {
    icon: "shield",
    title: "Haftpflichtversichert",
    short: "Haftpflichtversichert",
    text: "Unsere Betriebshaftpflicht deckt Schäden ab, die bei der Arbeit entstehen. Sie sind auf der sicheren Seite.",
  },
  {
    icon: "users",
    title: "Festangestellte Mitarbeiter",
    short: "Festangestellte Mitarbeiter",
    text: "Bei Ihnen reinigen unsere eigenen, festangestellten Kräfte – keine wechselnden Subunternehmer.",
  },
  {
    icon: "key",
    title: "Schlüssel sicher verwahrt",
    short: "Schlüssel sicher verwahrt",
    text: "Ihr Schlüssel ist bei uns in guten Händen und wird sicher und vertraulich aufbewahrt.",
  },
];

export const benefits = [
  {
    title: "Zuverlässig",
    text: "Vereinbarte Termine halten wir ein. Und wenn doch einmal etwas ist, melden wir uns rechtzeitig.",
  },
  {
    title: "Feste Ansprechpartner",
    text: "Sie wissen immer, wer bei Ihnen reinigt und wen Sie anrufen können – ohne Hotline.",
  },
  {
    title: "Faire Preise",
    text: "Transparentes Angebot vorab, keine versteckten Kosten. Sie zahlen, was vereinbart ist.",
  },
  {
    title: "Aus Bremen",
    text: "Wir sind in Bremen zu Hause und schnell vor Ort – in der ganzen Stadt und im Umland.",
  },
];

export const steps = [
  {
    title: "Anfrage senden",
    text: "Rufen Sie an oder schreiben Sie uns kurz, was gereinigt werden soll.",
  },
  {
    title: "Angebot erhalten",
    text: "Wir besprechen Ihre Wünsche – bei Bedarf vor Ort – und schicken ein klares Angebot.",
  },
  {
    title: "Zurücklehnen",
    text: "Wir legen los. Alles sauber, alles klar.",
  },
];

export const faqs = [
  {
    q: "Was kostet eine Reinigung?",
    a: "Das hängt von Fläche, Art der Reinigung und Häufigkeit ab. Nach einem kurzen Gespräch oder einer Besichtigung erhalten Sie ein kostenloses und unverbindliches Angebot.",
  },
  {
    q: "Bringen Sie Reinigungsmittel und Geräte mit?",
    a: "Ja. Wir bringen alles mit, was für die vereinbarte Reinigung nötig ist. Wenn Sie bestimmte Mittel bevorzugen, berücksichtigen wir das gern.",
  },
  {
    q: "In welchen Stadtteilen sind Sie unterwegs?",
    a: "In ganz Bremen – von Vegesack bis Hemelingen, von Findorff bis Obervieland – und im direkten Umland.",
  },
  {
    q: "Wie kurzfristig bekomme ich einen Termin?",
    a: "Für einmalige Reinigungen finden wir meist innerhalb weniger Tage einen Termin. Fragen Sie einfach an.",
  },
  {
    q: "Muss ich während der Reinigung zu Hause sein?",
    a: "Nein. Viele Kundinnen und Kunden übergeben uns einen Schlüssel. Den verwahren wir sicher und vertraulich – die Übergabe besprechen wir vorab gemeinsam.",
  },
  {
    q: "Sind Sie versichert?",
    a: "Ja. Wir haben eine Betriebshaftpflichtversicherung. Sollte bei der Arbeit doch einmal etwas zu Bruch gehen, ist der Schaden abgedeckt.",
  },
];

export function whatsappLink(text = "Hallo Alles Klar, ich interessiere mich für eine Reinigung.") {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
}

// Preisrechner: unverbindlicher Richtwert 30–50 € je 10 m² (= 3–5 €/m²) pro Reinigung
export const pricing = {
  minPerSqm: 3,
  maxPerSqm: 5,
  minArea: 20,
  maxArea: 400,
  defaultArea: 80,
};

export function estimatePrice(area) {
  const round5 = (n) => Math.round(n / 5) * 5;
  return { min: round5(area * pricing.minPerSqm), max: round5(area * pricing.maxPerSqm) };
}

// Eigene Landingpages pro Suchbegriff (lokales SEO)
export const seoPages = [
  {
    slug: "bueroreinigung-bremen",
    icon: "building",
    name: "Büroreinigung",
    serviceId: "unterhaltsreinigung",
    title: "Büroreinigung in Bremen",
    metaTitle: "Büroreinigung Bremen – zuverlässig & versichert",
    description:
      "Büroreinigung in Bremen: regelmäßige Reinigung von Büros, Praxen und Kanzleien – mit festen Teams, flexiblen Zeiten und unverbindlichem Angebot.",
    intro:
      "Ein sauberes Büro fällt nicht auf – ein unsauberes schon. Wir reinigen Ihre Büro-, Praxis- oder Kanzleiräume in Bremen regelmäßig und gründlich, gern vor Arbeitsbeginn oder nach Feierabend, damit Ihr Team und Ihre Kunden jeden Tag in gepflegte Räume kommen.",
    items: [
      "Arbeitsplätze, Schreibtische und Oberflächen",
      "Böden saugen und feucht wischen",
      "Küchen, Teeküchen und Sozialräume",
      "Sanitärbereiche inkl. Verbrauchsmaterial auffüllen",
      "Papierkörbe leeren und Müll entsorgen",
      "Türen, Griffe und Lichtschalter desinfizieren",
    ],
    audience: ["Büros und Agenturen", "Arztpraxen und Physiotherapie", "Kanzleien und Steuerbüros", "Ladenlokale und Showrooms"],
    rhythm: "Täglich, mehrmals pro Woche oder wöchentlich – ganz nach Bedarf. Die Reinigung findet zu Zeiten statt, in denen sie Ihren Betrieb nicht stört.",
    faqs: [
      {
        q: "Reinigen Sie auch außerhalb der Geschäftszeiten?",
        a: "Ja. Viele Büros reinigen wir früh morgens oder abends, damit der Betrieb ungestört weiterläuft.",
      },
      {
        q: "Bekommen wir immer dieselben Reinigungskräfte?",
        a: "Wir setzen nach Möglichkeit feste Teams ein, damit die Abläufe in Ihren Räumen sitzen und Sie wissen, wer bei Ihnen ist.",
      },
    ],
  },
  {
    slug: "fensterreinigung-bremen",
    icon: "window",
    name: "Fensterreinigung",
    serviceId: "glasreinigung",
    title: "Fensterreinigung in Bremen",
    metaTitle: "Fensterreinigung Bremen – streifenfrei inkl. Rahmen",
    description:
      "Fensterreinigung in Bremen für Privathaushalte und Gewerbe: Fenster, Rahmen, Falze und Glasflächen streifenfrei sauber – einmalig oder regelmäßig.",
    intro:
      "Gerade in Bremen mit Wind, Regen und Pollen sind Fenster schnell wieder grau. Wir reinigen Ihre Fenster gründlich und streifenfrei – inklusive Rahmen, Falze und Fensterbänke. Für Wohnungen, Häuser, Büros und Schaufenster.",
    items: [
      "Glasflächen innen und außen",
      "Fensterrahmen und Falze",
      "Fensterbänke innen und außen",
      "Schaufenster und Glastüren",
      "Wintergärten und Dachfenster (nach Absprache)",
      "Glasfassaden und Trennwände im Büro",
    ],
    audience: ["Wohnungen und Einfamilienhäuser", "Ladenlokale mit Schaufenstern", "Büros und Praxen", "Hausverwaltungen"],
    rhythm: "Einmalig, zum Frühjahrsputz oder im festen Intervall – zum Beispiel alle drei Monate. Wir erinnern Sie gern an den nächsten Termin.",
    faqs: [
      {
        q: "Reinigen Sie auch bei Regen?",
        a: "Leichter Regen ist meist kein Problem. Bei Starkregen oder Frost verschieben wir den Termin in Absprache mit Ihnen.",
      },
      {
        q: "Wie lange dauert die Fensterreinigung einer Wohnung?",
        a: "Das hängt von Anzahl und Art der Fenster ab. Für eine durchschnittliche Wohnung planen wir meist wenige Stunden ein.",
      },
    ],
  },
  {
    slug: "treppenhausreinigung-bremen",
    icon: "stairs",
    name: "Treppenhausreinigung",
    serviceId: "unterhaltsreinigung",
    title: "Treppenhausreinigung in Bremen",
    metaTitle: "Treppenhausreinigung Bremen – für Hausverwaltungen & Eigentümer",
    description:
      "Treppenhausreinigung in Bremen für Hausverwaltungen, Eigentümergemeinschaften und Vermieter – regelmäßig, zuverlässig und nach festem Plan.",
    intro:
      "Das Treppenhaus ist die Visitenkarte eines Hauses. Wir übernehmen die regelmäßige Reinigung für Hausverwaltungen, Eigentümergemeinschaften und Vermieter in Bremen – nach festem Plan, damit sich niemand mehr um den Putzplan streiten muss.",
    items: [
      "Treppenstufen und Podeste kehren und wischen",
      "Handläufe und Geländer abwischen",
      "Eingangsbereich, Briefkastenanlage und Klingelschilder",
      "Haus- und Wohnungstüren (außen) reinigen",
      "Kellergänge und Dachboden (nach Absprache)",
      "Spinnweben entfernen, Fensterbänke im Treppenhaus",
    ],
    audience: ["Hausverwaltungen", "Eigentümergemeinschaften (WEG)", "Private Vermieter", "Wohn- und Geschäftshäuser"],
    rhythm: "Wöchentlich, 14-tägig oder nach individuellem Plan. Auf Wunsch dokumentieren wir die Reinigung auf einem Reinigungsplan im Haus.",
    faqs: [
      {
        q: "Können die Kosten auf die Mieter umgelegt werden?",
        a: "Die Kosten der Hausreinigung zählen in der Regel zu den umlagefähigen Betriebskosten. Wir stellen Ihnen dafür eine ordentliche Rechnung aus.",
      },
      {
        q: "Betreuen Sie auch mehrere Objekte einer Hausverwaltung?",
        a: "Ja. Sprechen Sie uns an – wir erstellen gern ein Angebot für mehrere Häuser in Bremen.",
      },
    ],
  },
  {
    slug: "umzugsreinigung-bremen",
    icon: "box",
    name: "Umzugsreinigung",
    serviceId: "grundreinigung",
    title: "Umzugsreinigung in Bremen",
    metaTitle: "Umzugsreinigung Bremen – besenrein zur Wohnungsübergabe",
    description:
      "Umzugsreinigung und Endreinigung in Bremen: Wir machen Ihre alte Wohnung übergabefertig – Küche, Bad, Fenster und Böden gründlich sauber.",
    intro:
      "Beim Umzug gibt es genug zu tun. Wir übernehmen die Endreinigung Ihrer alten Wohnung in Bremen, damit die Übergabe an Vermieter oder Nachmieter entspannt läuft – oder reinigen Ihr neues Zuhause, bevor die Kartons kommen.",
    items: [
      "Küche inkl. Schränke innen, Backofen und Kühlschrank",
      "Bad und WC gründlich inkl. Fliesen und Armaturen",
      "Fenster inkl. Rahmen und Fensterbänke",
      "Böden saugen und wischen",
      "Türen, Zargen, Lichtschalter und Heizkörper",
      "Keller oder Abstellraum (nach Absprache)",
    ],
    audience: ["Mieter vor der Wohnungsübergabe", "Vermieter vor der Neuvermietung", "Käufer und Verkäufer von Immobilien", "Nach Renovierung oder Bauarbeiten"],
    rhythm: "Einmaliger Termin – idealerweise nach dem Auszug, wenn die Räume leer sind. Sagen Sie uns Ihren Übergabetermin, wir planen rückwärts.",
    faqs: [
      {
        q: "Wie kurzfristig ist eine Umzugsreinigung möglich?",
        a: "Oft innerhalb weniger Tage. Je früher Sie den Übergabetermin nennen, desto sicherer klappt es.",
      },
      {
        q: "Müssen die Räume leer sein?",
        a: "Am besten ja – dann können wir alle Flächen erreichen. Einzelne Möbelstücke sind nach Absprache kein Problem.",
      },
    ],
  },
];
