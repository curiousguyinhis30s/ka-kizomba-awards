import type { Metadata, Viewport } from 'next'
import { inter } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://kizomba-awards.vercel.app'),
  title: 'KA - Kizomba Awards | Southeast Asian Dance Community',
  description: 'Vote for your favorite Kizomba dancers in the Southeast Asian community awards. Celebrating excellence in Kizomba, Urban Kiz, Semba, and Tarraxo across Kuala Lumpur, Singapore, Bangkok and more.',
  keywords: 'kizomba awards, urban kiz, semba, tarraxo, kizomba malaysia, kizomba singapore, kizomba bangkok, southeast asian kizomba, dance awards, kizomba community, social dance awards',
  authors: [{ name: 'KA Community' }],
  openGraph: {
    title: 'KA - Kizomba Awards',
    description: 'Vote for Southeast Asia\'s best Kizomba dancers',
    url: 'https://kizomba-awards.vercel.app',
    siteName: 'KA - Kizomba Awards',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KA - Kizomba Awards',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KA - Kizomba Awards',
    description: 'Vote for Southeast Asia\'s best Kizomba dancers',
    images: ['/og-image.jpg'],
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFD700',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}