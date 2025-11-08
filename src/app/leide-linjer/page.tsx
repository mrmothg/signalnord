import Link from 'next/link';
import { Check, Gauge, Shield, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { formatPrice } from '@/lib/utils';

const linePackages = [
  {
    speed: '100 Mbit',
    monthlyPrice: 3900,
    setupPrice: 7900,
    features: [
      'Symmetrisk hastighet (100/100)',
      'Inkludert Cisco CPE-utstyr',
      '99.5% SLA garanti',
      'Proaktiv linjeovervåking',
      '4 timers responstid',
      'Ubegrenset datatrafikk',
    ],
  },
  {
    speed: '500 Mbit',
    monthlyPrice: 7900,
    setupPrice: 9900,
    popular: true,
    features: [
      'Symmetrisk hastighet (500/500)',
      'Inkludert Cisco CPE-utstyr',
      '99.9% SLA garanti',
      'Proaktiv linjeovervåking',
      '2 timers responstid',
      'Ubegrenset datatrafikk',
    ],
  },
  {
    speed: '1 Gbit',
    monthlyPrice: 12900,
    setupPrice: 14900,
    features: [
      'Symmetrisk hastighet (1000/1000)',
      'Inkludert Cisco CPE-utstyr',
      '99.95% SLA garanti',
      'Proaktiv linjeovervåking',
      '1 times responstid',
      'Ubegrenset datatrafikk',
    ],
  },
];

const benefits = [
  {
    icon: Gauge,
    title: 'Garantert båndbredde',
    description: 'Dedikert kapasitet som ikke deles med andre. Alltid full hastighet.',
  },
  {
    icon: Shield,
    title: 'Høy sikkerhet',
    description: 'Privat forbindelse med ende-til-ende kryptering og dedikert VLAN.',
  },
  {
    icon: Clock,
    title: 'Garantert oppetid',
    description: 'SLA med automatisk kreditt ved nedetid. 99.9% garanti som standard.',
  },
  {
    icon: Zap,
    title: 'Lav latency',
    description: 'Optimal for sanntidsapplikasjoner som VoIP, video og skyløsninger.',
  },
];

const technicalSpecs = [
  { label: 'Teknologi', value: 'Dedikert fiber (punkt-til-punkt)' },
  { label: 'Interface', value: 'Ethernet 1/10 GbE' },
  { label: 'IP-adresser', value: '/29 subnet (5 brukbare)' },
  { label: 'Routing', value: 'BGP eller statisk' },
  { label: 'QoS', value: 'DSCP marking, traffic shaping' },
  { label: 'Overvåking', value: '24/7 NOC med SNMP' },
  { label: 'Support', value: 'Norsk teknisk support 08-20' },
  { label: 'Leveringstid', value: '2-12 uker avhengig av lokasjon' },
];

export default function LeideLinjerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Leide linjer for bedrifter
            </h1>
            <p className="text-lg text-muted-foreground">
              Dedikerte fiberforbindelser med garantert båndbredde og oppetid. 
              Perfekt for bedrifter med kritiske nettverksbehov.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Velg hastighet</h2>
            <p className="text-muted-foreground">
              Alle priser er veiledende og inkluderer CPE-utstyr og overvåking
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {linePackages.map((pkg) => (
              <Card
                key={pkg.speed}
                className={pkg.popular ? 'border-secondary shadow-lg' : ''}
              >
                {pkg.popular && (
                  <div className="bg-secondary text-secondary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
                    Mest populære
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.speed}</CardTitle>
                  <CardDescription>Symmetrisk fiber</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">
                      {formatPrice(pkg.monthlyPrice)}
                    </span>
                    <span className="text-muted-foreground">/mnd</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    + {formatPrice(pkg.setupPrice)} oppstart
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={pkg.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href="/managed-connectivity#tilbud">
                      Velg {pkg.speed}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Trenger du høyere hastighet eller spesialtilpasning?
            </p>
            <Button variant="outline" asChild>
              <Link href="/managed-connectivity#tilbud">
                Kontakt oss for entrepriseløsninger
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/50">
        <div className="container section-spacing">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Hvorfor leide linjer?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Tekniske spesifikasjoner
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {technicalSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between border-b pb-2 last:border-0"
                  >
                    <span className="font-medium">{spec.label}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container section-spacing">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Perfekt for
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Hovedkontor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90">
                    Sikre, raske forbindelser for kritiske forretningsapplikasjoner, 
                    skyløsninger og store datamengder.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Filialer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90">
                    Stabile site-to-site forbindelser med garantert båndbredde 
                    for sømløs tilgang til sentrale systemer.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Datasenter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90">
                    Høyhastighets forbindelser for backup, replikering og 
                    disaster recovery mellom lokasjoner.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Produksjon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-foreground/90">
                    Pålitelige linjer for IoT, SCADA-systemer og sanntids 
                    produksjonsovervåking.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Klar for raskere og sikrere nettverk?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            La oss hjelpe deg med å finne den perfekte løsningen for din bedrift
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/managed-connectivity#tilbud">
                Be om tilbud
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/status">
                Sjekk dekning
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
