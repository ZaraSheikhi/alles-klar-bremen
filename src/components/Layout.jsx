import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { company, navigation, seoPages, whatsappLink } from "../content/siteContent";
import { usePageMeta } from "./Blocks";
import { Skyline, Sparkle } from "./Decor";
import Icon from "./Icons";
import Logo from "./Logo";

export default function Layout() {
  const { pathname, hash } = useLocation();

  usePageMeta(pathname);

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Zum Inhalt springen
      </a>
      <Header />
      <main id="inhalt" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Mobil: feste Leiste mit Anrufen + WhatsApp */}
      <div className="fixed inset-x-4 bottom-4 z-40 grid grid-cols-2 gap-2 md:hidden">
        <a href={company.phoneHref} className="btn-primary !px-4 shadow-xl" aria-label={`Anrufen: ${company.phone}`}>
          <Icon name="phone" className="h-5 w-5" /> Anrufen
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-whatsapp !px-4 shadow-xl">
          <Icon name="whatsapp" className="h-5 w-5" /> WhatsApp
        </a>
      </div>
      {/* Desktop: schwebender WhatsApp-Button */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener"
        aria-label="Per WhatsApp schreiben"
        className="group fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full bg-whatsapp p-4 text-[#05341b] shadow-[0_15px_40px_-10px_rgba(7,80,40,0.55)] transition hover:-translate-y-0.5 md:flex"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-display font-semibold transition-all duration-300 group-hover:max-w-40 group-hover:pl-1">
          Per WhatsApp schreiben
        </span>
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const isServicePage = seoPages.some((p) => pathname === `/${p.slug}`);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-colors duration-300 ${
        scrolled || open ? "bg-white/95 shadow-[0_1px_0_rgba(11,45,135,0.08)] backdrop-blur" : "bg-white"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
        <Link to="/" aria-label="Alles Klar Bremen – Startseite">
          <Logo />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive: active }) => {
                const isActive = active || (item.to === "/leistungen" && isServicePage);
                return (
                `whitespace-nowrap rounded-full px-4 py-2 font-display font-medium transition ${
                  isActive ? "bg-sky-soft text-navy" : "text-slate hover:text-navy"
                }`
                );
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={company.phoneHref} className="font-display hidden font-semibold text-navy hover:text-sky xl:block">
            {company.phone}
          </a>
          <Link to="/kontakt" className="btn-primary !py-2.5">
            Angebot anfragen
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full text-navy ring-1 ring-navy/15 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile Navigation" className="border-t border-navy/10 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive: active }) => {
                const isActive = active || (item.to === "/leistungen" && isServicePage);
                return (
                  `rounded-2xl px-4 py-3 font-display text-lg font-medium ${
                    isActive ? "bg-sky-soft text-navy" : "text-slate"
                  }`
                  );
                }}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/kontakt" className="btn-primary mt-3">
              Kostenloses Angebot anfragen
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative mt-24 bg-navy text-white/80">
      <div className="pointer-events-none absolute inset-x-0 bottom-full text-navy">
        <Skyline className="mx-auto h-16 w-full max-w-6xl sm:h-24" />
      </div>
      <div className="container-page grid gap-12 py-16 pb-24 sm:grid-cols-2 md:pb-16 lg:grid-cols-[1.2fr_0.7fr_1fr_1.4fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs leading-relaxed">
            Ihre Reinigungsfirma für Büros, Praxen, Treppenhäuser und Privathaushalte in {company.area}.
          </p>
        </div>

        <FooterCol title="Seiten">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-sky">
              {item.label}
            </Link>
          ))}
        </FooterCol>

        <FooterCol title="Leistungen">
          {seoPages.map((p) => (
            <Link key={p.slug} to={`/${p.slug}`} className="hover:text-sky">
              {p.name} Bremen
            </Link>
          ))}
          <Link to="/leistungen" className="hover:text-sky">
            Alle Leistungen
          </Link>
        </FooterCol>

        <FooterCol title="Kontakt">
          <a href={company.phoneHref} className="hover:text-sky">
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="[overflow-wrap:anywhere] hover:text-sky">
            {company.email}
          </a>
          <span>
            {company.street}, {company.zip} {company.city}
          </span>
          <span>Mo–Sa 08–18 Uhr</span>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 pb-24 text-sm sm:flex-row sm:items-center sm:justify-between md:pb-6">
          <span className="flex items-center gap-2">
            <Sparkle className="h-3 w-3 text-sky" />© {new Date().getFullYear()} {company.name}
          </span>
          <div className="flex gap-5">
            <Link to="/impressum" className="hover:text-sky">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-sky">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-sky">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-white">{title}</h2>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}
