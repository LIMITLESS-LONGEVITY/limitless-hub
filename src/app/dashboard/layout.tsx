import { requireAuth } from '@/lib/auth'
import { DashboardSidebar } from './DashboardSidebar'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAuth()

  return (
    <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl flex-col gap-0 px-4 py-8 md:flex-row md:gap-8 md:px-6">
      {/* Sidebar */}
      <DashboardSidebar email={session.email} />

      {/* Main content */}
      <main className="flex-1 py-2 md:py-0">{children}</main>
    </div>
  )
}
