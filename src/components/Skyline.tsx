/**
 * Self-contained cinematic hero backdrop: a golden-hour sky over a silhouette of
 * the Houston skyline — the firm's home city. Rendered as two *continuous* layered
 * ridges (back + foreground) so there are no sky slivers or gaps between buildings,
 * with characterful Houston crowns: a gabled top (Bank of America Center), a sloped
 * crown (JPMorgan Chase Tower), twin slabs (Wells Fargo Plaza), a stepped top
 * (Heritage Plaza), and a slender spire (Williams Tower).
 */
export function Skyline({ className = '' }: { className?: string }) {
  // Back ridge — one closed path, edge-to-edge buildings (no gaps), flat bottom.
  const back =
    '0,400 0,258 72,258 72,214 150,214 150,262 228,262 228,236 300,236 300,256 ' +
    '372,256 372,156 384,156 384,140 392,140 392,124 408,110 424,124 424,140 432,140 432,156 452,156 ' + // Bank of America Center gable
    '452,150 505,150 505,144 556,144 ' + // Pennzoil Place twin flats
    '556,100 620,90 648,90 ' + // JPMorgan Chase Tower sloped crown
    '648,128 690,128 690,112 736,112 ' + // Wells Fargo Plaza twin slabs
    '736,156 750,156 750,138 762,138 762,122 778,122 778,138 790,138 790,156 802,156 ' + // Heritage Plaza stepped crown
    '802,116 820,116 820,100 830,100 830,70 834,70 834,100 852,100 852,116 872,116 ' + // Williams Tower + spire
    '872,214 952,214 952,236 994,196 1036,236 ' + // pitched-roof tower
    '1036,240 1112,240 1112,202 1140,202 1140,178 1146,178 1146,202 1184,202 ' + // antenna tower
    '1184,252 1262,252 1262,224 1342,224 1342,262 1440,262 1440,400'

  // Foreground ridge — nearer, shorter buildings; offset boundaries add depth.
  const front =
    '0,400 0,340 120,340 120,318 210,318 210,348 320,348 320,322 430,322 430,350 ' +
    '540,350 540,326 650,326 650,346 770,346 770,320 880,320 880,344 1000,344 1000,322 ' +
    '1120,322 1120,348 1240,348 1240,328 1360,328 1360,346 1440,346 1440,400'

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
            'radial-gradient(115% 68% at 60% 98%, rgba(222,180,98,0.52) 0%, rgba(176,141,73,0.20) 32%, rgba(30,58,47,0) 62%)',
        }}
      />
      {/* Skyline silhouette pinned to the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <polygon points={back} fill="#1d3428" />
        <polygon points={front} fill="#0a130e" />
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
