// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // bedre font-loading (Core Web Vitals)
})

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SignalNord',
  url: 'https://www.signalnord.no',
  logo: 'https://www.signalnord.no/logo-icon.png',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NO',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'post@signalnord.no',
    availableLanguage: ['no', 'en'],
  },
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.signalnord.no'),
  title: {
    default: 'SignalNord – Bedriftsfiber og Managed Services i Norge',
    template: '%s | SignalNord',
  },
  description:
    'NIS2-orientert bedriftsfiber, leide linjer, VPN og managed connectivity for norske virksomheter. Stabilt nettverk, 24/7 norsk support og rådgivning fra nettverksspesialister.',
  keywords: [
    'bedriftsfiber Norge',
    'fiber bedrift',
    'managed services Norge',
    'MSP Norge',
    'ISP Norge',
    'NIS2 compliance',
    'bedriftsnettverk',
    'SignalNord',
  ],
  authors: [{ name: 'SignalNord AS' }],
  icons: {
    icon: '/logo-icon.png',
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SignalNord – Bedriftsfiber og Managed Services i Norge',
    description:
      'Profesjonelle nettverksløsninger for norske bedrifter – fiber, leide linjer, VPN og managed services med fokus på sikkerhet og NIS2.',
    url: '/',
    siteName: 'SignalNord',
    type: 'website',
    locale: 'nb_NO',
    images: [
      {
        url: '/logo-icon.png',
        width: 512,
        height: 512,
        alt: 'SignalNord logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SignalNord – Bedriftsfiber og Managed Services',
    description:
      'Nettverksinfrastruktur og managed tjenester for norske virksomheter.',
    images: ['/logo-icon.png'],
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
        {/* JSON-LD for Organization (strukturerte data) */}
        <Script
          id="signalnord-org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
