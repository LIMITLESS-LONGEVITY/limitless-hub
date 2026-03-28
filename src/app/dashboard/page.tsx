import type { Metadata } from 'next'
import Link from 'next/link'
import { requireAuth } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export const dynamic = 'force-dynamic'

const quickActions = [
  {
    href: '/dashboard/membership',
    label: 'Membership',
    description: 'View your plan, upgrade, or manage billing.',
    icon: StarIcon,
  },
  {
    href: '/diagnostics',
    label: 'Book Diagnostics',
    description: 'Schedule your next health assessment.',
    icon: FlaskIcon,
  },
  {
    href: '/stays',
    label: 'Book a Stay',
    description: 'Reserve a longevity-integrated hotel stay.',
    icon: HotelIcon,
  },
  {
    href: '/telemedicine',
    label: 'Telemedicine',
    description: 'Connect with a specialist online.',
    icon: VideoIcon,
  },
]

export default async function DashboardPage() {
  const session = await requireAuth()
  const firstName = session.email.split('@')[0]

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="font-display text-3xl text-brand-gold sm:text-4xl">
          Welcome back
        </h1>
        <p className="mt-2 text-brand-silver">
          Hello, {firstName}. Manage your longevity programme from here.
        </p>
      </div>

      {/* Quick actions */}
      <div className="grid gap-4 sm:grid-cols-2">
        {quickActions.map((action) => {
          const Icon = action.icon
          return (
            <Link
              key={action.href}
              href={action.href}
              className="group flex items-start gap-4 rounded-xl border border-brand-glass-border bg-brand-glass-bg p-6 backdrop-blur-sm transition-all hover:border-brand-gold/20 hover:bg-brand-glass-bg-hover"
              style={{ WebkitBackdropFilter: 'blur(12px)' }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold transition-colors group-hover:bg-brand-gold/20">
                <Icon />
              </div>
              <div>
                <h3 className="font-medium text-brand-light">{action.label}</h3>
                <p className="mt-1 text-sm text-brand-silver">{action.description}</p>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Status overview placeholder */}
      <div
        className="rounded-xl border border-brand-glass-border bg-brand-glass-bg p-8 text-center backdrop-blur-sm"
        style={{ WebkitBackdropFilter: 'blur(12px)' }}
      >
        <p className="text-sm text-brand-silver">
          Upcoming appointments and health insights will appear here.
        </p>
      </div>
    </div>
  )
}

/* ── Inline SVG icons ── */

function StarIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )
}

function FlaskIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  )
}

function HotelIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M15.75 21H8.25m6.75-18.045V6m0-2.455a2.25 2.25 0 00-1.883-2.22A23.456 23.456 0 0012 1.125c-.352 0-.7.015-1.044.044a2.25 2.25 0 00-1.883 2.22" />
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  )
}
