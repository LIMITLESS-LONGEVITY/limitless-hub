import { requireAuth } from '@/lib/auth'
import DashboardHomeClient from './DashboardHomeClient'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  const session = await requireAuth()
  return <DashboardHomeClient email={session.email} tier={session.tier} />
}
