import { company } from "../content/siteContent";
import { Sparkle } from "./Decor";

// Nutzt die Original-Logodatei, sobald company.logo gesetzt ist – bis dahin eine Wortmarke im Logo-Stil.
export default function Logo({ inverted = false, className = "" }) {
  if (company.logo) {
    const img = (
      <img src={company.logo} alt={company.name} width="640" height="448" className="h-14 w-auto sm:h-16" />
    );
    // Logo hat navyfarbene Schrift – auf dunklem Grund daher auf weißer Fläche
    return inverted ? (
      <span className={`inline-block rounded-2xl bg-white px-3 py-2 ${className}`}>{img}</span>
    ) : (
      <span className={`inline-block ${className}`}>{img}</span>
    );
  }

  const text = inverted ? "text-white" : "text-navy";
  return (
    <span className={`relative inline-flex items-end gap-2 leading-none ${className}`} aria-label={company.name}>
      <BucketMark className={`h-9 w-9 shrink-0 ${text}`} />
      <span className="relative">
        <span className={`block whitespace-nowrap font-display text-[1.6rem] font-bold tracking-tight ${text}`}>Alles Klar</span>
        <span className="block font-display text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-sky">
          Bremen
        </span>
        <Sparkle className="twinkle absolute -right-4 -top-2 h-3.5 w-3.5 text-sky" />
      </span>
    </span>
  );
}

function BucketMark({ className }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <g fill="currentColor">
        <rect x="3" y="2" width="3" height="26" rx="1.5" transform="rotate(-12 4.5 15)" />
        <path d="M2 27c2-2 6-2 8 0l1 7c-1 1-2 1-3 0l-1-4-1 5c-1 1-2 1-3 0l1-5-3 3c-1 0-2-1-1-2z" />
        <path d="M14 14h22l-3 20c0 2-2 4-4 4h-8c-2 0-4-2-4-4z" />
        <path
          d="M15 14c0-6 4-10 10-10s10 4 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </g>
      <rect x="16" y="18" width="18" height="2.4" rx="1.2" fill="#5ab3e5" />
    </svg>
  );
}
