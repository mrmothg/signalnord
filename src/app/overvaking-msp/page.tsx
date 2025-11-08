import Link from 'next/link';
import { Monitor, Shield, Clock, AlertTriangle, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatPrice } from '@/lib/utils';

const mspServices = [
  {
    icon: Monitor,
    title: '24/7 Nettverksovervåking',
    description: 'Kontinuerlig overvåking av servere, nettverk og applikasjoner med proaktiv feilretting.',
  },
  {
    icon: Shield,
    title: 'Sikkerhetshåndtering',
    description: 'Patch management, sårbarhetsscanning og hendelseshåndtering for optimal sikkerhet.',
  },
  {
    icon: Clock,
    title: 'Backup & Recovery',
    description: 'Automatiserte backup-rutiner med regelmessig testing av gjenoppretting.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Rask respons og løsning av kritiske hendelser med definerte eskaleringsrutiner.',
  },
  {
    icon: TrendingUp,
    title: 'Kapasitetsplanlegging',
    description: 'Proaktiv analyse og planlegging for å sikre optimal ytelse og skalerbarhet.',
  },
  {
    icon: Users,
    title: 'Brukeradministrasjon',
    description: 'Håndtering av brukerkontoer, tilganger og lisenser på tvers av systemer.',
  },
];

const mspPackages = [
  {
    name: 'Essential',
    description: 'Grunnleggende overvåking og vedlikehold',
    pricePerSite: 3900,
    pricePerUser: 149,
    features: [
      'Basis nettverksovervåking',
      'Månedlig patching',
      'Daglig backup',
      'Support 08-17',
      '4 timers responstid',
      'Månedlig rapport',
    ],
  },
  {
    name: 'Professional',
    description: '24/7 overvåking og proaktiv drift',
    pricePerSite: 7900,
    pricePerUser: 249,
    popular: true,
    features: [
      '24/7 overvåking',
      'Ukentlig patching',
      'Kontinuerlig backup',
      'Support 08-20',
      '1 times responstid',
      'Ukentlig rapport',
      'Dedikert teknisk kontakt',
      'Kvartalsvis gjennomgang',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Full MSP-tjeneste med compliance',
    pricePerSite: 14900,
    pricePerUser: 399,
    features: [
      '24/7 SOC-tjenester',
      'Daglig patching',
      'Real-time backup',
      '24/7 support',
      '15 min responstid',
      'Daglig rapport',
      'Dedikert team',
      'NIS2 compliance',
      'Månedlig gjennomgang',
      'Custom dashboards',
    ],
  },
];

const complianceFeatures = [
  'Automatisk logging av sikkerhetshendelser',
  'Månedlige sårbarhetsscanner',
  'Dokumentasjon for revisjoner',
  'Incident response-prosedyrer',
  'Business continuity planning',
  'Regelmessige penetrasjonstester',
];

export default function OvervakingMSPPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Overvåking & MSP-tjenester
            </h1>
            <p className="text-lg text-muted-foreground">
              Full outsourcing av IT-drift med 24/7 overvåking, vedlikehold og support. 
              Fokuser på kjernevirksomheten mens vi tar ansvar for IT.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Hva vi leverer
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mspServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title}>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* MSP Packages */}
      <section className="bg-muted/50">
        <div className="container section-spacing">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold">
              MSP-pakker
            </h2>
            <p className="mb-12 text-center text-muted-foreground">
              Velg pakke basert på dine behov - pris per lokasjon eller per bruker
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {mspPackages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className={pkg.popular ? 'border-secondary shadow-lg' : ''}
                >
                  {pkg.popular && (
                    <div className="bg-secondary text-secondary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
                      Anbefalt
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="mt-4 space-y-2">
                      <div>
                        <span className="text-2xl font-bold">
                          {formatPrice(pkg.pricePerSite)}
                        </span>
                        <span className="text-muted-foreground">/lokasjon/mnd</span>
                      </div>
                      <div>
                        <span className="text-lg font-semibold">
                          {formatPrice(pkg.pricePerUser)}
                        </span>
                        <span className="text-muted-foreground text-sm">/bruker/mnd</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Clock className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-6 w-full"
                      variant={pkg.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <Link href="/managed-connectivity#tilbud">
                        Velg {pkg.name}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NIS2 Compliance Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container section-spacing">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              NIS2-compliance inkludert
            </h2>
            <p className="mb-8 text-center text-lg text-primary-foreground/90">
              Våre MSP-tjenester sikrer at din bedrift møter alle krav i NIS2-direktivet
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {complianceFeatures.map((feature) => (
                <div key={feature} className="flex items-start">
                  <Shield className="mr-3 h-5 w-5 text-secondary mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/nis2-smb">
                  Les mer om NIS2
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Slik kommer vi i gang
          </h2>
          <div className="space-y-8">
            <div className="flex">
              <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                1
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Kartlegging</h3>
                <p className="text-muted-foreground">
                  Vi gjennomfører en grundig analyse av din eksisterende IT-infrastruktur 
                  og identifiserer forbedringsområder.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                2
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Onboarding</h3>
                <p className="text-muted-foreground">
                  Installasjon av overvåkingsagenter, oppsett av backup-rutiner og 
                  etablering av sikkerhetsprosedyrer.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                3
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Optimalisering</h3>
                <p className="text-muted-foreground">
                  Kontinuerlig forbedring av ytelse, sikkerhet og kostnader basert 
                  på data og beste praksis.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                4
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Rapportering</h3>
                <p className="text-muted-foreground">
                  Regelmessige statusmøter og detaljerte rapporter om drift, 
                  sikkerhet og forbedringsforslag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container py-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            La oss ta ansvar for din IT-drift
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Få mer tid til kjernevirksomheten med våre MSP-tjenester
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/managed-connectivity#tilbud">
                Start MSP-samarbeid
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/20 hover:bg-white/20" 
              asChild
            >
              <Link href="#nis2-analyse">
                Få gratis vurdering
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
