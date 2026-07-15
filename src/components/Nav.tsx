import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { firm, nav } from '../content/site'
import { Monogram, ArrowRight } from './Icons'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Only the homepage has the dark cinematic hero to sit over.
  const overHero = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const solid = scrolled || !overHero || open
  const link = solid ? 'text-ink/70 hover:text-ink' : 'text-ivory/80 hover:text-ivory'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? 'bg-ivory/85 backdrop-blur-md border-b border-ink/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <Monogram
            className={`h-8 w-8 ${solid ? 'text-pine' : 'text-ivory'}`}
            letterColor={solid ? '#f4efe6' : '#1e3a2f'}
          />
          <span
            className={`font-display text-lg leading-none tracking-tight ${
              solid ? 'text-ink' : 'text-ivory'
            }`}
          >
            Rosenthal &amp; Co.
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-[0.92rem] font-medium transition-colors duration-300 ${link} ${
                  isActive ? (solid ? '!text-pine' : '!text-ivory') : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={firm.sharefileUrl}
            target="_blank"
            rel="noreferrer"
            className={`group inline-flex items-center gap-2 rounded-full pl-5 pr-2 py-2 text-[0.9rem] font-medium transition-all duration-300 ${
              solid
                ? 'bg-pine text-ivory hover:bg-pine-700'
                : 'bg-ivory/10 text-ivory ring-1 ring-ivory/25 hover:bg-ivory/20'
            }`}
          >
            Client Login
            <span className="grid h-7 w-7 place-items-center rounded-full bg-ivory/15 transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight />
            </span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex h-6 w-7 flex-col justify-center gap-[5px]">
            <span
              className={`h-[1.5px] w-full origin-center transition-all duration-300 ${
                solid ? 'bg-ink' : 'bg-ivory'
              } ${open ? 'translate-y-[6.5px] rotate-45' : ''}`}
            />
            <span
              className={`h-[1.5px] w-full transition-all duration-300 ${
                solid ? 'bg-ink' : 'bg-ivory'
              } ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-[1.5px] w-full origin-center transition-all duration-300 ${
                solid ? 'bg-ink' : 'bg-ivory'
              } ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink/5 bg-ivory md:hidden transition-[max-height] duration-500 ease-[var(--ease-out-soft)] ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="rounded-lg px-2 py-2.5 text-ink/80 hover:bg-ink/[0.04]"
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={firm.sharefileUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-pine px-5 py-3 font-medium text-ivory"
          >
            Client Login <ArrowRight />
          </a>
        </div>
      </div>
    </header>
  )
}
