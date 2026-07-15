export function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Monogram({
  className = '',
  letterColor = '#f4efe6',
}: {
  className?: string
  /** Color of the "R" — should contrast with the plate (driven by currentColor). */
  letterColor?: string
}) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="9" fill="currentColor" />
      <text
        x="20"
        y="27.5"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="23"
        fontWeight="600"
        fill={letterColor}
        textAnchor="middle"
      >
        R
      </text>
    </svg>
  )
}
