/**
 * Self-contained cinematic hero backdrop: a golden-hour sky over a silhouette of
 * the Houston skyline — the firm's home city. The skyline is ONE continuous closed
 * path (so there are never gaps or slivers between buildings) with a dense, high
 * roofline and the tall towers poking up. Depth comes from a subtle vertical
 * gradient on the silhouette rather than a second layer.
 *
 * Characterful Houston crowns, left→right through the center: a gabled top
 * (Bank of America Center), twin flats (Pennzoil Place), a sloped crown (JPMorgan
 * Chase Tower), twin slabs (Wells Fargo Plaza), a stepped top (Heritage Plaza),
 * a slender spire (Williams Tower), and a pitched roof.
 */
export function Skyline({ className = '' }: { className?: string }) {
  const skyline =
    '0,400 0,250 60,250 60,224 120,224 120,246 185,246 185,228 245,228 245,248 300,248 300,230 360,230 360,246 420,246 ' +
    '420,158 432,158 432,140 440,140 440,124 452,110 464,124 464,140 472,140 472,158 484,158 ' + // Bank of America Center gable
    '484,152 540,152 540,146 560,146 ' + // Pennzoil Place twin flats
    '560,102 620,92 650,92 ' + // JPMorgan Chase Tower sloped crown
    '650,128 694,128 694,114 736,114 ' + // Wells Fargo Plaza twin slabs
    '736,158 750,158 750,140 762,140 762,124 780,124 780,140 792,140 792,158 806,158 ' + // Heritage Plaza stepped crown
    '806,118 824,118 824,102 832,102 832,74 836,74 836,102 852,102 852,118 868,118 ' + // Williams Tower + spire
    '868,208 928,208 ' +
    '928,238 958,200 988,238 ' + // pitched roof
    '988,240 1050,240 1050,214 1110,214 1110,240 1170,240 1170,222 1230,222 1230,244 1300,244 1300,226 1370,226 1370,246 1440,246 ' +
    '1440,400'

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #12241d 0%, #1b3529 32%, #274a38 58%, #3f5f43 80%, #6f7048 100%)',
        }}
      />
      {/* Warm golden-hour glow, low on the horizon behind the towers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(115% 68% at 60% 98%, rgba(222,180,98,0.50) 0%, rgba(176,141,73,0.20) 32%, rgba(30,58,47,0) 62%)',
        }}
      />
      {/* Skyline silhouette pinned to the bottom — one continuous shape, no gaps */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="skyline-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2a4a37" />
            <stop offset="0.5" stopColor="#14291e" />
            <stop offset="1" stopColor="#0a130e" />
          </linearGradient>
        </defs>
        <polygon points={skyline} fill="url(#skyline-fill)" />
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
