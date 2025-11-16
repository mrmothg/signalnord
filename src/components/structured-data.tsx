export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SignalNord AS",
    "url": "https://signalnord.no",
    "logo": "https://signalnord.no/logo-icon.png",
    "description": "ISP og MSP leverandør for norske bedrifter. Fiber, leide linjer, VPN og managed services.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Oslo",
      "addressCountry": "NO"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+47-23-00-00-00",
      "contactType": "sales",
      "areaServed": "NO",
      "availableLanguage": ["Norwegian", "English"]
    },
    "sameAs": [
      "https://linkedin.com/company/signalnord",
      "https://facebook.com/signalnord"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "NOK",
      "lowPrice": "1490",
      "offerCount": "4"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
