import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://signalnord.no'),
  title: {
    default: 'SignalNord - Fiber og Managed Services for Norske Bedrifter',
    template: '%s | SignalNord'
  },
  description: 'NIS2-compliant fiber, leide linjer, VPN og managed services for norske bedrifter. Lansering 2026. 24/7 norsk support.',
  keywords: 'fiber bedrift norge, managed services norge, bedriftsfiber, leide linjer, vpn bedrift, nis2 compliance norge, msp norge, isp norge',
  authors: [{ name: 'SignalNord AS' }],
  creator: 'SignalNord AS',
  publisher: 'SignalNord AS',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://signalnord.no',
    siteName: 'SignalNord',
    title: 'SignalNord - Norges Neste Store ISP/MSP',
    description: 'Profesjonelle nettverksløsninger for norske bedrifter. Fiber, VPN og managed services.',
    images: [
      {
        url: '/logo-icon.png',
        width: 512,
        height: 512,
        alt: 'SignalNord Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SignalNord - Bedriftsfiber og Managed Services',
    description: 'NIS2-compliant nettverksløsninger for norske bedrifter',
    images: ['/logo-icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb-NO">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
