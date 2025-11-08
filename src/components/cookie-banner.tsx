'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
    // Enable Plausible analytics
    if (window.plausible) {
      window.plausible('enable');
    }
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg"
      role="dialog"
      aria-label="Cookie-samtykke"
      aria-live="polite"
    >
      <div className="container py-6">
        <div className="flex items-start justify-between">
          <div className="flex-1 pr-8">
            <h2 className="text-lg font-semibold mb-2">Vi bruker cookies</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Vi bruker cookies for å gi deg den beste opplevelsen på nettsiden vår. 
              Nødvendige cookies sikrer grunnleggende funksjonalitet, mens analysecookies 
              hjelper oss å forbedre tjenestene våre.
            </p>

            {showDetails && (
              <div className="mb-4 space-y-3 border-t pt-4">
                <div>
                  <h3 className="font-medium text-sm mb-1">Nødvendige cookies</h3>
                  <p className="text-xs text-muted-foreground">
                    Disse cookies er essensielle for at nettsiden skal fungere korrekt. 
                    De kan ikke slås av.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-sm mb-1">Analyse cookies (Plausible)</h3>
                  <p className="text-xs text-muted-foreground">
                    Vi bruker Plausible Analytics for personvernvennlig analyse. 
                    Ingen persondata lagres, og dataene deles aldri med tredjeparter.
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-primary hover:underline mb-4"
            >
              {showDetails ? 'Skjul detaljer' : 'Vis detaljer'}
            </button>

            <div className="flex flex-wrap gap-2">
              <Button onClick={handleAcceptAll}>
                Godta alle
              </Button>
              <Button variant="outline" onClick={handleAcceptNecessary}>
                Kun nødvendige
              </Button>
              <Button variant="ghost" onClick={handleRejectAll}>
                Avvis alle
              </Button>
            </div>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-accent rounded-md"
            aria-label="Lukk cookie-banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Cookie preferences modal for footer link
export function CookiePreferences() {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) {
      const parsed = JSON.parse(consent);
      setPreferences({
        necessary: true,
        analytics: parsed.analytics || false,
      });
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString(),
    }));
    
    if (preferences.analytics && window.plausible) {
      window.plausible('enable');
    } else if (!preferences.analytics && window.plausible) {
      window.plausible('disable');
    }
    
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg p-6 max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">Cookie-innstillinger</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Nødvendige cookies</h3>
              <p className="text-sm text-muted-foreground">
                Alltid aktivert
              </p>
            </div>
            <input
              type="checkbox"
              checked={true}
              disabled
              className="h-4 w-4"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Analyse cookies</h3>
              <p className="text-sm text-muted-foreground">
                Plausible Analytics
              </p>
            </div>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={(e) => setPreferences({
                ...preferences,
                analytics: e.target.checked,
              })}
              className="h-4 w-4"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button onClick={handleSave}>
            Lagre innstillinger
          </Button>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Avbryt
          </Button>
        </div>
      </div>
    </div>
  );
}
