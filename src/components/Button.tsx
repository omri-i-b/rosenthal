import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { ArrowRight } from './Icons'

type Variant = 'solid' | 'outline' | 'ghost'

const base =
  'group inline-flex items-center gap-2.5 rounded-full text-[0.95rem] font-medium ' +
  'transition-all duration-300 ease-[var(--ease-out-soft)] select-none'

const variants: Record<Variant, string> = {
  solid:
    'bg-pine text-ivory pl-6 pr-2.5 py-2.5 hover:bg-pine-700 hover:shadow-[0_10px_30px_-12px_rgba(30,58,47,0.6)]',
  outline:
    'border border-ink/20 text-ink pl-6 pr-2.5 py-2.5 hover:border-ink/50 hover:bg-ink/[0.03]',
  ghost:
    'text-ink pl-1 pr-2.5 py-2 hover:text-pine',
}

function Chip({ variant }: { variant: Variant }) {
  const chip =
    variant === 'solid'
      ? 'bg-ivory/15 text-ivory'
      : 'bg-pine text-ivory'
  return (
    <span
      className={`grid h-8 w-8 place-items-center rounded-full ${chip} transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5`}
    >
      <ArrowRight />
    </span>
  )
}

type CommonProps = {
  children: ReactNode
  variant?: Variant
  withArrow?: boolean
  className?: string
}

export function Button({
  children,
  variant = 'solid',
  withArrow = true,
  to,
  href,
  className = '',
}: CommonProps & { to?: string; href?: string }) {
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <Chip variant={variant} />}
    </>
  )
  const cls = `${base} ${variants[variant]} ${!withArrow ? 'pr-6' : ''} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    )
  }
  return (
    <a href={href} className={cls} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {content}
    </a>
  )
}
