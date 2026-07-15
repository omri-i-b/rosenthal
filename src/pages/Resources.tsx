import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { ArrowRight } from '../components/Icons'
import { resources, resourcesIntro, whatWeOffer } from '../content/site'

export default function Resources() {
  return (
    <>
      <PageHeader eyebrow="Useful Resources" title="Useful Resources" lede={resourcesIntro} />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-2">
          {resources.map((r, i) => {
            const external = r.href.startsWith('http')
            return (
              <Reveal key={r.title} delay={(i % 2) * 80}>
                <a
                  href={r.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="group flex h-full items-center justify-between gap-6 bg-paper p-10 transition-colors duration-300 hover:bg-ivory"
                >
                  <h2 className="font-display text-2xl font-medium text-ink">{r.title}</h2>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-pine text-ivory transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight />
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {whatWeOffer.newsletter}
          </p>
        </Reveal>
      </section>
    </>
  )
}
