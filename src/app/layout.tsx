import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'HUB | LIMITLESS Longevity',
    template: '%s | HUB by LIMITLESS',
  },
  description: 'Clinical & hospitality booking platform — memberships, diagnostics, hotel stays, telemedicine.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="min-h-screen bg-brand-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}
