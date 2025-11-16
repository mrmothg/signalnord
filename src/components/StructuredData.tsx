export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SignalNord AS",
    "url": "https://signalnord.no",
    "logo": "https://signalnord.no/logo-icon.png",
    "description": "ISP og MSP leverandør for norske bedrifter",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NO",
      "addressRegion": "Oslo"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+47-23-00-00-00",
      "contactType": "sales",
      "availableLanguage": ["Norwegian", "English"]
    },
    "sameAs": [
      "https://linkedin.com/company/signalnord"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
