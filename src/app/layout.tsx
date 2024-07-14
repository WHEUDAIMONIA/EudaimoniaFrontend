import type { Metadata } from 'next'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'W&H',
  description: 'Mental Health Made Easy'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='flex min-h-screen flex-col'>
          <Header />
          <main className='mx-4 flex-grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
