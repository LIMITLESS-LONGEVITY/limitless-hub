import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
        <Header />
        <div className="pt-[73px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
