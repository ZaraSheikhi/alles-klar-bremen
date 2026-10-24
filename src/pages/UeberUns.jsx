import { CtaBand, PageHero, SectionHead, TrustStrip } from "../components/Blocks";
import { Sparkle } from "../components/Decor";
import Icon from "../components/Icons";
import { benefits, company } from "../content/siteContent";

const districts = [
  "Mitte",
  "Schwachhausen",
  "Horn-Lehe",
  "Oberneuland",
  "Findorff",
  "Neustadt",
  "Vahr",
  "Hemelingen",
  "Osterholz",
  "Walle",
  "Gröpelingen",
  "Vegesack",
  "Obervieland",
  "Huchting",
  "Borgfeld",
  "Lilienthal",
];

export default function UeberUns() {

  return (
    <>
      <PageHero eyebrow="Über uns" title="Ein Bremer Team, das anpackt">
        Hinter Alles Klar steht {company.owner} – mit dem Anspruch, dass Sie sich um Sauberkeit nie wieder Gedanken
        machen müssen.
      </PageHero>

      <section className="container-page mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHead eyebrow="Unser Anspruch" title="Ehrlich, gründlich, pünktlich." />
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            <p>
              Eine gute Reinigung merkt man daran, dass man nichts merkt – außer, dass alles stimmt. Genau darauf
              arbeiten wir hin: klare Absprachen, gleichbleibende Teams und ein Inhaber, der selbst ans Telefon geht.
            </p>
            <p>
              Wir reinigen für Büros, Praxen, Hausverwaltungen und Privathaushalte in ganz Bremen. Ob wöchentliche
              Unterhaltsreinigung oder einmalige Grundreinigung – wir nehmen uns Zeit, Ihre Wünsche zu verstehen.
            </p>
          </div>
        </div>
        <div className="relative rounded-[2rem] bg-navy p-8 text-white/80 sm:p-10">
          <Sparkle className="twinkle absolute right-8 top-8 h-8 w-8 text-sky" />
          <span className="eyebrow">Ihr Ansprechpartner</span>
          <p className="mt-4 font-display text-3xl font-semibold text-white">{company.owner}</p>
          <p className="mt-1">Inhaber</p>
          <div className="mt-8 space-y-3">
            <a href={company.phoneHref} className="flex items-center gap-3 hover:text-sky">
              <Icon name="phone" className="h-5 w-5 text-sky" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 break-all hover:text-sky">
              <Icon name="mail" className="h-5 w-5 shrink-0 text-sky" /> {company.email}
            </a>
            <p className="flex items-center gap-3">
              <Icon name="pin" className="h-5 w-5 text-sky" /> {company.street}, {company.zip} {company.city}
            </p>
          </div>
        </div>
      </section>

      <section className="container-page mt-24">
        <SectionHead eyebrow="Werte" title="Darauf können Sie sich verlassen" />
        <TrustStrip className="mt-10" />
        <dl className="mt-12">
          {benefits.map((b) => (
            <div key={b.title} className="grid gap-2 border-b border-navy/15 py-7 sm:grid-cols-[0.8fr_1.4fr] sm:gap-10">
              <dt className="font-display text-2xl font-semibold text-navy sm:text-3xl">{b.title}</dt>
              <dd className="text-lg leading-relaxed">{b.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-page mt-24">
        <SectionHead eyebrow="Einsatzgebiet" title="In ganz Bremen für Sie unterwegs">
          Und darüber hinaus im direkten Umland. Ihr Stadtteil fehlt? Fragen Sie einfach.
        </SectionHead>
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {districts.map((d) => (
            <li key={d} className="rounded-full bg-sky-soft px-4 py-2 font-display font-medium text-navy">
              {d}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
