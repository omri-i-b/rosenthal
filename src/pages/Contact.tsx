import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { ArrowRight } from '../components/Icons'
import { firm } from '../content/site'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const { address } = firm

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Contact Us"
        lede="Whether your needs are simple or complex, we can help."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          {/* Details */}
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display text-2xl font-light text-ink">{firm.name}</h2>
              <div className="mt-8 space-y-8 text-ink-soft">
                <div>
                  <p className="eyebrow text-brass">Office</p>
                  <p className="mt-3 text-lg leading-relaxed text-ink">
                    {address.line1}, {address.line2}
                    <br />
                    {address.city}, {address.state} {address.zip}
                  </p>
                  <a
                    href={firm.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-pine hover:underline"
                  >
                    Get directions <ArrowRight />
                  </a>
                </div>
                <div>
                  <p className="eyebrow text-brass">Phone</p>
                  <p className="mt-3 text-lg text-ink">
                    <a href={`tel:${firm.phone.replace(/[^\d]/g, '')}`} className="hover:text-pine">
                      {firm.phone}
                    </a>
                  </p>
                  <p className="text-sm text-ink-soft">Fax {firm.fax}</p>
                </div>
                <div>
                  <p className="eyebrow text-brass">Email</p>
                  <p className="mt-3 text-lg text-ink">
                    <a href={`mailto:${firm.email}`} className="hover:text-pine">
                      {firm.email}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-brass">Existing clients</p>
                  <a
                    href={firm.sharefileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-pine px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-pine-700"
                  >
                    Log in to ShareFile <ArrowRight />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <Reveal delay={80}>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
                className="rounded-2xl border border-ink/8 bg-paper p-8 md:p-10"
              >
                {sent ? (
                  <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-pine text-ivory">
                      <ArrowRight />
                    </div>
                    <h3 className="font-display mt-6 text-2xl font-light text-ink">Thank you.</h3>
                    <p className="mt-2 max-w-sm text-ink-soft">
                      Your message has been noted. This demo form doesn’t send email yet — we’ll
                      wire it up to your inbox next.
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-5">
                    <Field label="Name" name="name" />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Email" name="email" type="email" />
                      <Field label="Phone" name="phone" type="tel" required={false} />
                    </div>
                    <Field label="How can we help?" name="message" textarea />
                    <button
                      type="submit"
                      className="group mt-2 inline-flex w-fit items-center gap-2.5 rounded-full bg-pine pl-6 pr-2.5 py-2.5 font-medium text-ivory transition-colors hover:bg-pine-700"
                    >
                      Send message
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-ivory/15 transition-transform duration-300 group-hover:translate-x-0.5">
                        <ArrowRight />
                      </span>
                    </button>
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  textarea = false,
  required = true,
}: {
  label: string
  name: string
  type?: string
  textarea?: boolean
  required?: boolean
}) {
  const cls =
    'mt-2 w-full rounded-xl border border-ink/15 bg-ivory/50 px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-pine focus:bg-ivory'
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-brass"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  )
}
