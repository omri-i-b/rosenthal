import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'
import { whatWeOffer, firm } from '../content/site'

export default function News() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="Tax & Financial News"
        lede={whatWeOffer.newsletter}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-ivory-deep/50 px-8 py-16 text-center md:py-20">
            <h2 className="font-display max-w-xl text-2xl font-light leading-snug tracking-tight text-ink md:text-3xl">
              View the latest Tax and Financial News article in our Newsletter.
            </h2>
            <Button href={firm.newsletterUrl} variant="outline">
              Open the newsletter
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
