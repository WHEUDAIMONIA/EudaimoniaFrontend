import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className='flex min-h-screen flex-col'>
        <Header />
        <main className='mx-4 flex-grow'>{children}</main>
        <Footer />
      </div>
    </section>
  )
}
