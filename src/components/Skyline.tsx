/**
 * Self-contained cinematic hero backdrop: a golden-hour sky over a recognizable
 * silhouette of the Houston skyline — the firm's home city. Rendered as SVG/CSS
 * so it always paints crisply without external image dependencies.
 *
 * Iconic profiles, left→right through the central cluster:
 *   Bank of America Center (Gothic stepped gables) · Pennzoil Place (twin 45° tops)
 *   JPMorgan Chase Tower (tallest, sloped crown) · Wells Fargo Plaza (twin glass slabs)
 *   Heritage Plaza (stepped crown) · Williams Tower (obelisk + spire)
 */
export function Skyline({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #12241d 0%, #1b3529 32%, #274a38 58%, #3f5f43 80%, #7c7a4e 100%)',
        }}
      />
      {/* Warm golden-hour glow, low on the horizon behind the towers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 72% at 60% 96%, rgba(222,180,98,0.58) 0%, rgba(176,141,73,0.24) 30%, rgba(30,58,47,0) 62%)',
        }}
      />
      {/* Skyline silhouette pinned to the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bldg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0f1f18" />
            <stop offset="1" stopColor="#070f0b" />
          </linearGradient>
        </defs>

        <g fill="url(#bldg)">
          {/* ---- far-left filler ---- */}
          <rect x="-10" y="250" width="70" height="150" />
          <rect x="52" y="205" width="52" height="195" />
          <rect x="96" y="255" width="60" height="145" />
          <rect x="150" y="220" width="46" height="180" />
          <rect x="188" y="270" width="66" height="130" />
          <rect x="248" y="200" width="44" height="200" />
          <rect x="286" y="248" width="58" height="152" />
          <rect x="340" y="228" width="40" height="172" />

          {/* ---- Bank of America Center — Gothic stepped gables ---- */}
          <rect x="378" y="184" width="74" height="216" />
          <polygon points="378,184 378,162 392,162 392,144 406,144 406,124 415,124 415,108 430,92 445,108 445,124 454,124 454,144 468,144 468,162 452,162 452,184" />

          {/* ---- Pennzoil Place — twin towers, 45° tops toward the slot ---- */}
          <polygon points="470,400 470,138 512,158 512,400" />
          <polygon points="520,400 520,158 562,138 562,400" />

          {/* ---- a mid slab ---- */}
          <rect x="572" y="196" width="40" height="204" />

          {/* ---- JPMorgan Chase Tower — tallest, distinctive sloped crown ---- */}
          <polygon points="618,400 618,86 620,82 676,58 682,64 682,400" />
          <rect x="646" y="40" width="3" height="20" />{/* mast */}

          {/* ---- Wells Fargo Plaza — twin offset glass slabs ---- */}
          <rect x="694" y="120" width="34" height="280" />
          <rect x="730" y="100" width="36" height="300" />

          {/* ---- Enterprise-style filler ---- */}
          <rect x="770" y="176" width="34" height="224" />

          {/* ---- Heritage Plaza — stepped crown ---- */}
          <rect x="808" y="150" width="58" height="250" />
          <rect x="816" y="132" width="42" height="20" />
          <rect x="824" y="116" width="26" height="18" />
          <rect x="831" y="98" width="12" height="20" />

          {/* ---- Williams Tower — slender obelisk + spire ---- */}
          <rect x="880" y="96" width="48" height="304" />
          <rect x="889" y="82" width="30" height="16" />
          <rect x="902" y="58" width="4" height="26" />
          <rect x="903" y="40" width="2" height="18" />{/* spire */}

          {/* ---- right-of-center cluster ---- */}
          <rect x="936" y="205" width="60" height="195" />
          <polygon points="1000,400 1000,150 1030,132 1060,150 1060,400" />{/* pitched top */}
          <rect x="1066" y="230" width="70" height="170" />
          <rect x="1120" y="180" width="46" height="220" />
          <rect x="1120" y="150" width="4" height="30" />{/* antenna */}

          {/* ---- far-right filler ---- */}
          <rect x="1160" y="252" width="64" height="148" />
          <rect x="1220" y="212" width="48" height="188" />
          <rect x="1262" y="258" width="70" height="142" />
          <rect x="1330" y="224" width="46" height="176" />
          <rect x="1372" y="264" width="78" height="136" />
        </g>
      </svg>

      {/* Vignette + fade into the page below */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,20,15,0.55) 0%, rgba(10,20,15,0) 26%, rgba(10,20,15,0) 60%, rgba(15,25,20,0.30) 100%)',
        }}
      />
    </div>
  )
}
