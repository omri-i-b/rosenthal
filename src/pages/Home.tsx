import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { Skyline } from '../components/Skyline'
import { ArrowRight } from '../components/Icons'
import {
  services,
  people,
  firm,
  introParagraph,
  whatWeOfferBlurb,
  firmProfile,
} from '../content/site'

// Factual figures drawn directly from the firm's site — no invented numbers.
const facts = [
  { value: 'Est. 1987', label: 'Serving Houston since our founding' },
  { value: '1989', label: 'Certified Women Business Enterprise' },
  { value: '30+ yrs', label: 'Louise S. Rosenthal, CPA, PFS' },
  { value: '25+ yrs', label: 'Leah A. Magee, CPA' },
]

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <Skyline />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32">
          <Reveal>
            <p className="eyebrow text-ivory/70">Houston, Texas · Est. {firm.founded}</p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="font-display mt-6 max-w-4xl text-5xl font-light leading-[1.02] tracking-tight text-ivory md:text-7xl">
              Our goal is to make life{' '}
              <span className="italic text-brass-soft">less taxing.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/80">
              {introParagraph}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to="/contact">Contact us</Button>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.95rem] font-medium text-ivory ring-1 ring-ivory/25 transition-all duration-300 hover:bg-ivory/10"
              >
                What we offer
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FACTS STRIP                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-ink/8 bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 md:grid-cols-4">
          {facts.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="py-10 md:py-12 md:pr-8">
              <div className="font-display text-3xl font-light text-pine md:text-4xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm leading-snug text-ink-soft">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* EDITORIAL STATEMENT (What We Offer blurb, verbatim)              */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow text-brass">What we offer</p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={80}>
              <p className="font-display text-2xl font-light leading-[1.35] tracking-tight text-ink md:text-[2.1rem]">
                {whatWeOfferBlurb}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-10">
                <Button to="/firm" variant="outline">
                  Firm profile
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* SERVICES (six offerings, verbatim)                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-ink/8 bg-ivory-deep/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <p className="eyebrow text-brass">Highly experienced CPAs offering</p>
              <h2 className="font-display mt-5 max-w-2xl text-4xl font-light leading-tight tracking-tight text-ink md:text-5xl">
                A well established firm, at your service.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Button to="/services" variant="outline">
                All services
              </Button>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 80}>
                <Link
                  to="/services"
                  className="group flex h-full flex-col bg-paper p-8 transition-colors duration-300 hover:bg-ivory"
                >
                  <span className="font-display text-sm text-brass">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display mt-4 text-xl font-medium text-ink">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-pine transition-transform duration-300 group-hover:translate-x-1">
                    Learn more <ArrowRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* DIFFERENTIATORS (verbatim labels)                                */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow text-brass">What makes us different</p>
              <h2 className="font-display mt-5 text-4xl font-light leading-tight tracking-tight text-ink md:text-5xl">
                {firmProfile.differentIntro}
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                {firmProfile.servicesEasier}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-2">
              {firmProfile.differentiators.map((label, i) => (
                <Reveal key={label} delay={i * 70} className="bg-paper p-8">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-brass">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-lg font-medium text-ink">{label}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* PEOPLE PREVIEW                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-ink/8 bg-pine text-ivory">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow text-brass-soft">CPA profiles</p>
            <h2 className="font-display mt-5 max-w-2xl text-4xl font-light leading-tight tracking-tight md:text-5xl">
              Senior professionals, personally involved in your work.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-ivory/10 md:grid-cols-2">
            {people.map((p, i) => (
              <Reveal key={p.name} delay={i * 100} className="bg-pine-700 p-9 md:p-10">
                <p className="text-sm text-brass-soft">{p.role}</p>
                <h3 className="font-display mt-2 text-2xl font-light">{p.name}</h3>
                <p className="mt-5 line-clamp-4 text-[0.95rem] leading-relaxed text-ivory/75">
                  {p.bio}
                </p>
                <Link
                  to="/firm"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ivory transition-transform duration-300 hover:translate-x-1"
                >
                  Read full profile <ArrowRight />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA BAND (prevention copy, verbatim)                            */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <Reveal className="text-center">
          <p className="eyebrow text-brass">Our commitment</p>
          <h2 className="font-display mx-auto mt-6 max-w-3xl text-3xl font-light leading-[1.12] tracking-tight text-ink md:text-5xl">
            The best cure for tax problems starts with{' '}
            <span className="italic text-pine">prevention.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Navigating the complex maze of rules, deadlines and ever-changing legislation can be
            challenging. At {firm.name}, we are committed to help you minimize your tax burden and
            maximize your after-tax income.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/contact">Contact us</Button>
            <Button href={`tel:${firm.phone.replace(/[^\d]/g, '')}`} variant="ghost">
              {firm.phone}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
