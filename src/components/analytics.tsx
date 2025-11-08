'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    plausible: any;
  }
}

export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  useEffect(() => {
    // Check if analytics consent is given
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      const parsed = JSON.parse(consent);
      if (!parsed.analytics && window.plausible) {
        // Disable Plausible if no consent
        window.plausible = () => {};
      }
    }
  }, []);

  if (!domain) return null;

  return (
    <>
      <Script
        defer
        data-domain={domain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Check consent on script load
          const consent = localStorage.getItem('cookie-consent');
          if (consent) {
            const parsed = JSON.parse(consent);
            if (!parsed.analytics) {
              // Disable tracking if no consent
              if (window.plausible) {
                const originalPlausible = window.plausible;
                window.plausible = function(...args: any[]) {
                  // Only track if consent is given
                  const currentConsent = localStorage.getItem('cookie-consent');
                  if (currentConsent) {
                    const parsed = JSON.parse(currentConsent);
                    if (parsed.analytics) {
                      return originalPlausible(...args);
                    }
                  }
                };
              }
            }
          }
        }}
      />
    </>
  );
}
