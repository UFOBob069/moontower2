import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const display = Barlow_Condensed({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-display', display: 'swap' })
export const metadata: Metadata = {
  metadataBase: new URL('https://www.moontowerbusiness.com'),
  title: 'Moontower Business Podcast | Austin Entrepreneurs & Business Leaders',
  description: 'An Austin business podcast with entrepreneurs, executives, investors, and community leaders. Hosted by Joseph O’Bell. Conversations since 2020.',
  openGraph: { siteName: 'Moontower Business Podcast', type: 'website', locale: 'en_US', images: [{ url: '/images/moontower-tomorrow-summit.png', alt: 'The Moontower Business team at TomorrowX Summit' }] },
  twitter: { card: 'summary_large_image' },
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.variable + ' ' + display.variable}>{children}</body></html>
}