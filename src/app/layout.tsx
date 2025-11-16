import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SignalNord - Fiber og Managed Services for Norske Bedrifter',
  description: 'NIS2-compliant fiber, leide linjer, VPN og managed services for norske bedrifter. Lansering 2026. 24/7 norsk support.',
  keywords: 'fiber bedrift norge, managed services norge, bedriftsfiber, leide linjer, vpn bedrift',
  openGraph: {
    title: 'SignalNord',
    description: 'Profesjonelle nettverksløsninger for norske bedrifter',
    images: ['/logo-icon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb-NO">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
