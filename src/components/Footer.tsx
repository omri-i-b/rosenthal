import { Link } from 'react-router-dom'
import { firm, nav } from '../content/site'
import { Monogram } from './Icons'

export function Footer() {
  const { address } = firm
  return (
    <footer className="bg-pine text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Monogram className="h-9 w-9 text-ivory" letterColor="#1e3a2f" />
              <span className="font-display text-xl">Rosenthal &amp; Co., P.C.</span>
            </div>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ivory/70">
              We work to develop long-term relationships. Whether your needs are simple or
              complex, we can help.
            </p>
            <p className="mt-6 text-[0.8rem] uppercase tracking-[0.18em] text-moss">
              Certified Women Business Enterprise · Est. {firm.founded}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="eyebrow text-moss">Explore</h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-ivory/80 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow text-moss">Visit</h4>
            <address className="mt-5 space-y-3 not-italic text-ivory/80">
              <p>
                {address.line1}, {address.line2}
                <br />
                {address.city}, {address.state} {address.zip}
              </p>
              <p>
                <a className="hover:text-ivory" href={`tel:${firm.phone.replace(/[^\d]/g, '')}`}>
                  {firm.phone}
                </a>
                <br />
                <span className="text-ivory/50">Fax {firm.fax}</span>
              </p>
              <p>
                <a className="hover:text-ivory" href={`mailto:${firm.email}`}>
                  {firm.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/15 pt-8 text-[0.8rem] text-ivory/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {firm.name}. All rights reserved.
          </p>
          <p>Houston, Texas · Trusted advisors since {firm.founded}</p>
        </div>
      </div>
    </footer>
  )
}
