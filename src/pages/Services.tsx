import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'
import { services, whatWeOffer, firm } from '../content/site'

export default function Services() {
  return (
    <>
      <PageHeader eyebrow="What We Offer" title="What We Offer" lede={whatWeOffer.intro} />

      {/* Offerings */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-ink-soft">
            {whatWeOffer.listIntro}
          </p>
        </Reveal>

        <div className="mt-14 space-y-14">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 60}>
              <article className="grid gap-8 border-t border-ink/10 pt-12 md:grid-cols-12">
                <div className="md:col-span-1">
                  <span className="font-display text-2xl font-light text-brass">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h2 className="font-display text-2xl font-medium text-ink">{s.title}</h2>
                </div>
                <div className="md:col-span-7">
                  <p className="text-lg leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Prevention */}
      <section className="border-y border-ink/8 bg-pine text-ivory">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-28">
          <Reveal>
            <h2 className="font-display mx-auto max-w-3xl text-3xl font-light leading-tight tracking-tight md:text-4xl">
              The best cure for tax problems starts with prevention.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75">
              Navigating the complex maze of rules, deadlines and ever-changing legislation can be
              challenging. At {firm.name}, we are committed to help you minimize your tax burden and
              maximize your after-tax income.
            </p>
            <div className="mt-10 flex justify-center">
              <Button to="/contact">Contact us</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Resource pointers, verbatim */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-ink/8 bg-paper p-8">
              <h3 className="font-display text-xl font-medium text-ink">Financial Calculators</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {whatWeOffer.calculators}
              </p>
              <div className="mt-6">
                <Button href={firm.calculatorsUrl} variant="outline">
                  Open calculators
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-ink/8 bg-paper p-8">
              <h3 className="font-display text-xl font-medium text-ink">Tax &amp; Financial News</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {whatWeOffer.newsletter}
              </p>
              <div className="mt-6">
                <Button href={firm.newsletterUrl} variant="outline">
                  Open the newsletter
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
