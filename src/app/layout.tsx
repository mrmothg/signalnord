import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { CookieBanner } from '@/components/cookie-banner';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://signalnord.no'),
  title: {
    default: 'SignalNord - Leide linjer, VPN og MSP-tjenester for norske bedrifter',
    template: '%s | SignalNord',
  },
  description: 'NIS2-klar nettverksinfrastruktur med norsk support 08-20 og 99.9% SLA. Leide linjer, VPN-løsninger og 24/7 overvåking for SMB.',
  keywords: ['leide linjer', 'VPN', 'MSP', 'NIS2', 'nettverksovervåking', 'B2B ISP', 'norsk support'],
  authors: [{ name: 'SignalNord' }],
  openGraph: {
    type: 'website',
    locale: 'no_NO',
    url: 'https://signalnord.no',
    title: 'SignalNord - Leide linjer, VPN og MSP-tjenester',
    description: 'NIS2-klar nettverksinfrastruktur med norsk support 08-20 og 99.9% SLA.',
    siteName: 'SignalNord',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SignalNord - Norsk B2B ISP og MSP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SignalNord - Leide linjer, VPN og MSP-tjenester',
    description: 'NIS2-klar nettverksinfrastruktur med norsk support 08-20 og 99.9% SLA.',
    images: ['/og-image.png'],
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#0a2540',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <CookieBanner />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SignalNord',
              url: 'https://signalnord.no',
              logo: 'https://signalnord.no/logo.svg',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+47-21-00-00-00',
                contactType: 'customer service',
                areaServed: 'NO',
                availableLanguage: 'Norwegian',
                contactOption: 'TollFree',
                hoursAvailable: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '20:00',
                },
              },
              sameAs: [],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'NO',
                addressLocality: 'Oslo',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
