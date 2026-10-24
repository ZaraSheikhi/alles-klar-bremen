// Dekorative Markenelemente aus dem Logo: Sterne, Wischschwung, Bremen-Skyline.

export function Sparkle({ className = "", style }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style}>
      <path
        d="M12 0c.9 6.6 2.9 9.6 12 12-9.1 2.4-11.1 5.4-12 12-.9-6.6-2.9-9.6-12-12C9.1 9.6 11.1 6.6 12 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Swoosh({ className = "" }) {
  return (
    <svg viewBox="0 0 800 160" preserveAspectRatio="none" aria-hidden="true" className={className}>
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path d="M10 120 C 200 160, 420 60, 790 70" strokeWidth="14" />
        <path d="M40 140 C 240 170, 460 90, 760 92" strokeWidth="6" opacity="0.7" />
        <path d="M80 100 C 260 120, 470 40, 700 50" strokeWidth="4" opacity="0.55" />
        <path d="M120 152 C 300 168, 520 110, 720 112" strokeWidth="3" opacity="0.45" />
      </g>
    </svg>
  );
}

export function Skyline({ className = "" }) {
  // Vereinfachte Bremer Silhouette: Kran, Schiff, Fernmeldeturm, Rathaus, Dom, Windmühle
  return (
    <svg viewBox="0 0 1200 140" preserveAspectRatio="xMidYMax meet" aria-hidden="true" className={className}>
      <g fill="currentColor">
        <rect x="0" y="132" width="1200" height="8" />
        {/* Hafenkran */}
        <rect x="60" y="60" width="8" height="72" />
        <polygon points="40,60 150,60 150,66 40,66" />
        <rect x="140" y="66" width="2" height="34" />
        {/* Schiff */}
        <polygon points="110,118 250,118 236,132 124,132" />
        <rect x="150" y="104" width="50" height="14" />
        <rect x="186" y="92" width="8" height="12" />
        {/* Fernmeldeturm */}
        <rect x="330" y="10" width="4" height="40" />
        <rect x="326" y="48" width="12" height="84" />
        <rect x="318" y="62" width="28" height="10" rx="3" />
        <rect x="320" y="76" width="24" height="5" rx="2" />
        {/* Häuserzeile */}
        <polygon points="380,132 380,100 395,86 410,100 410,132" />
        <polygon points="412,132 412,94 428,78 444,94 444,132" />
        <polygon points="446,132 446,104 460,92 474,104 474,132" />
        {/* Rathaus */}
        <rect x="500" y="88" width="150" height="44" />
        <polygon points="500,88 520,70 540,88" />
        <polygon points="555,88 575,64 595,88" />
        <polygon points="610,88 630,70 650,88" />
        {/* Dom St. Petri */}
        <rect x="680" y="76" width="90" height="56" />
        <rect x="684" y="40" width="22" height="40" />
        <rect x="744" y="40" width="22" height="40" />
        <polygon points="684,40 695,4 706,40" />
        <polygon points="744,40 755,4 766,40" />
        {/* Böttcherstraße-Giebel */}
        <polygon points="800,132 800,96 816,80 832,96 832,132" />
        <polygon points="834,132 834,104 846,94 858,104 858,132" />
        {/* Windmühle am Wall */}
        <polygon points="930,132 940,86 960,86 970,132" />
        <polygon points="934,90 950,70 966,90" />
        <g transform="translate(950 80)">
          <rect x="-2" y="-42" width="4" height="84" transform="rotate(35)" />
          <rect x="-2" y="-42" width="4" height="84" transform="rotate(-55)" />
        </g>
        {/* Weserstadion-Andeutung + Kran */}
        <path d="M1010 132 Q1060 104 1110 132 Z" />
        <rect x="1140" y="70" width="6" height="62" />
        <polygon points="1100,70 1190,70 1190,75 1100,75" />
      </g>
    </svg>
  );
}
