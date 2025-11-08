import Link from 'next/link';
import { ArrowRight, Shield, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Hero Variant 1: Original (default)
export function HeroOriginal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container section-spacing">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              ✓ NIS2-klar
            </span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              ✓ Norsk support 08-20
            </span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              ✓ 99.9% SLA
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Pålitelig nettverksinfrastruktur for{' '}
            <span className="text-secondary">norske bedrifter</span>
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Leide linjer, VPN og managed services med fokus på sikkerhet, 
            stabilitet og NIS2-compliance. Vi sikrer at din bedrift alltid er online.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="#nis2-analyse">
                Få gratis NIS2-analyse
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/managed-connectivity">
                Se pakker og priser
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hero Variant 2: Side-by-side layout
export function HeroSideBySide() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background">
      <div className="container section-spacing">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Sikker nettverks&shy;infrastruktur{' '}
              <span className="text-secondary">som skalerer</span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground">
              Fra fiber til firewall - vi leverer komplette nettverksløsninger 
              med garantert oppetid og norsk support når du trenger det.
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex items-center">
                <Shield className="mr-3 h-5 w-5 text-primary" />
                <span>NIS2-compliant infrastruktur</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-3 h-5 w-5 text-primary" />
                <span>24/7 overvåking og support</span>
              </div>
              <div className="flex items-center">
                <Globe className="mr-3 h-5 w-5 text-primary" />
                <span>12+ lokasjoner i Norge</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/managed-connectivity#tilbud">
                  Start i dag
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#demo">
                  Book demo
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
              <div className="flex h-full flex-col justify-center space-y-6">
                <div className="rounded-lg bg-white/90 p-4 shadow-lg">
                  <p className="text-3xl font-bold text-primary">99.9%</p>
                  <p className="text-sm text-muted-foreground">Garantert oppetid</p>
                </div>
                <div className="rounded-lg bg-white/90 p-4 shadow-lg">
                  <p className="text-3xl font-bold text-primary">&lt;15 min</p>
                  <p className="text-sm text-muted-foreground">Responstid</p>
                </div>
                <div className="rounded-lg bg-white/90 p-4 shadow-lg">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Fornøyde kunder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hero Variant 3: Minimal with strong CTA
export function HeroMinimal() {
  return (
    <section className="relative bg-primary text-primary-foreground">
      <div className="container section-spacing">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Nettverk som aldri svikter
          </h1>
          
          <p className="mb-8 text-xl text-primary-foreground/90">
            Garantert 99.9% oppetid. Norsk support. NIS2-klar.
          </p>

          <Button size="lg" variant="secondary" asChild>
            <Link href="/managed-connectivity">
              Se våre løsninger
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
            <div>
              <p className="text-2xl font-bold">100-1000</p>
              <p className="text-sm text-primary-foreground/80">Mbit hastighet</p>
            </div>
            <div>
              <p className="text-2xl font-bold">08-20</p>
              <p className="text-sm text-primary-foreground/80">Norsk support</p>
            </div>
            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm text-primary-foreground/80">Overvåking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Color accent variants
export const accentColors = {
  blue: {
    primary: '#0a2540',
    secondary: '#1e90ff',
  },
  green: {
    primary: '#0a2540',
    secondary: '#10b981',
  },
  purple: {
    primary: '#0a2540',
    secondary: '#8b5cf6',
  },
};

// Spacing variants (CSS variables)
export const spacingVariants = {
  tight: {
    '--spacing-multiplier': '0.875',
  },
  normal: {
    '--spacing-multiplier': '1',
  },
  loose: {
    '--spacing-multiplier': '1.125',
  },
};
