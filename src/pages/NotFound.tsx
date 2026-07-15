import { Button } from '../components/Button'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow text-brass">404</p>
      <h1 className="font-display mt-5 text-4xl font-light tracking-tight text-ink md:text-6xl">
        This page has moved on.
      </h1>
      <p className="mt-5 max-w-md text-lg text-ink-soft">
        The page you’re looking for isn’t here. Let’s get you back on track.
      </p>
      <div className="mt-10">
        <Button to="/">Return home</Button>
      </div>
    </section>
  )
}
