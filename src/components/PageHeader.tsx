import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

/** Consistent interior-page masthead used across scaffolded pages. */
export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: ReactNode
  lede?: string
}) {
  return (
    <header className="relative border-b border-ink/8 bg-paper pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow text-brass">{eyebrow}</p>
          <h1 className="font-display mt-5 max-w-4xl text-4xl font-light leading-[1.05] tracking-tight text-ink md:text-6xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">{lede}</p>
          )}
        </Reveal>
      </div>
    </header>
  )
}
