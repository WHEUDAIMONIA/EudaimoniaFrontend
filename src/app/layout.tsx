import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './globals.css'

const space_grotesk = Space_Grotesk({
  subsets: ['latin']
})

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
      <body className={space_grotesk.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
