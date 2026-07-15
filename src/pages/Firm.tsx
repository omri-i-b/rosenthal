import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'
import { people, firmProfile, introParagraph, firm } from '../content/site'

export default function Firm() {
  return (
    <>
      <PageHeader eyebrow="Firm Profile" title="Firm Profile" lede={introParagraph} />

      {/* History */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow text-brass">Since {firm.founded}</p>
            </Reveal>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft md:col-span-8">
            <Reveal>
              <p>{firmProfile.history}</p>
            </Reveal>
            <Reveal delay={80}>
              <p>{firmProfile.servicesEasier}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="border-y border-ink/8 bg-ivory-deep/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-light tracking-tight text-ink md:text-4xl">
              {firmProfile.differentIntro}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:grid-cols-3">
            {firmProfile.differentiators.map((label, i) => (
              <Reveal key={label} delay={i * 70} className="bg-paper p-8">
                <span className="font-display text-brass">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display mt-4 text-lg font-medium text-ink">{label}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CPA Profiles */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="eyebrow text-brass">CPA Profiles</p>
        </Reveal>
        <div className="mt-14 space-y-14">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article className="grid gap-8 border-t border-ink/10 pt-12 md:grid-cols-12">
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl font-light text-ink">{p.name}</h3>
                  <p className="mt-2 text-sm text-brass">{p.role}</p>
                  <a
                    href={`mailto:${p.email}`}
                    className="mt-4 inline-block text-sm text-pine underline-offset-4 hover:underline"
                  >
                    {p.email}
                  </a>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg leading-relaxed text-ink-soft">{p.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/8 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-light tracking-tight text-ink md:text-4xl">
              Whether your needs are simple or complex, we can help.
            </h2>
            <div className="mt-8 flex justify-center">
              <Button to="/contact">Contact us</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
