'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/memberships', label: 'Memberships' },
  { href: '/diagnostics', label: 'Diagnostics' },
  { href: '/stays', label: 'Stays' },
  { href: '/telemedicine', label: 'Telemedicine' },
  { href: '/contact-sales', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-brand-glass-border bg-brand-dark/80 backdrop-blur-lg"
      style={{ WebkitBackdropFilter: 'blur(16px)' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- cross-app nav to OS Dashboard */}
        <a href="/" className="font-display text-2xl tracking-[0.25em] text-brand-gold hover:text-brand-gold/80 transition-colors">
          LIMITLESS
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors hover:text-brand-gold ${
                pathname === link.href ? 'text-brand-gold' : 'text-brand-silver'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block h-0.5 w-6 bg-brand-gold transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-brand-gold transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-brand-gold transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-brand-glass-border bg-brand-dark/95 px-6 py-6 md:hidden"
          style={{ WebkitBackdropFilter: 'blur(16px)' }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base tracking-wide transition-colors hover:text-brand-gold ${
                  pathname === link.href ? 'text-brand-gold' : 'text-brand-silver'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
