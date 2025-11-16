import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SignalNord - Bedriftsfiber og Managed Services Norge',
  description: 'NIS2-compliant fiber, leide linjer, VPN og managed services for norske bedrifter. Fra 2.990 kr/mnd. 24/7 norsk support. Lansering 2026.',
  keywords: 'fiber bedrift norge, managed services norge, bedriftsfiber, leide linjer, vpn bedrift, nis2 compliance norge, msp norge, isp norge, signalnord',
  authors: [{ name: 'SignalNord AS' }],
  icons: {
    icon: '/logo-icon.png',
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'SignalNord - Norges Neste Store ISP/MSP Leverandør',
    description: 'Profesjonelle nettverksløsninger for norske bedrifter. Fiber, VPN og managed services.',
    url: 'https://signalnord.no',
    siteName: 'SignalNord',
    images: [
      {
        url: '/logo-icon.png',
        width: 512,
        height: 512,
        alt: 'SignalNord Logo',
      }
    ],
    locale: 'nb_NO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#003E6B',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb-NO">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
