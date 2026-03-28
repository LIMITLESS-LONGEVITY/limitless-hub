export default function Footer() {
  return (
    <footer className="border-t border-brand-glass-border bg-brand-dark px-6 py-10">
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-display text-lg tracking-[0.25em] text-brand-gold">
          LIMITLESS
        </p>
        <p className="mt-2 text-sm text-brand-silver">
          Limitless Longevity Consultancy &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
