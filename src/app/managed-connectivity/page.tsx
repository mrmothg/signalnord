import Link from 'next/link';
import { Check, X, ArrowRight, Zap, Shield, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LeadForm } from '@/components/lead-form';
import { ROICalculator } from '@/components/roi-calculator';
import { formatPrice } from '@/lib/utils';

const packages = {
  start: {
    name: 'Start',
    description: 'For små kontorer og oppstartsbedrifter',
    monthlyPrice: 4900,
    setupPrice: 9900,
    features: [
      { name: '100 Mbit symmetrisk fiber', included: true },
      { name: 'Site-to-site VPN (1 lokasjon)', included: true },
      { name: 'Basis nettverksovervåking', included: true },
      { name: 'Support 08-17 hverdager', included: true },
      { name: '99.5% SLA', included: true },
      { name: 'Månedlig statusrapport', included: true },
      { name: '5G failover backup', included: false },
      { name: '24/7 vakttelefon', included: false },
      { name: 'Dedikert teknisk kontakt', included: false },
    ],
  },
  pluss: {
    name: 'Pluss',
    description: 'For voksende bedrifter med flere lokasjoner',
    monthlyPrice: 9900,
    setupPrice: 14900,
    popular: true,
    features: [
      { name: '500 Mbit symmetrisk fiber', included: true },
      { name: 'Site-to-site VPN (opptil 3 lokasjoner)', included: true },
      { name: 'Proaktiv 24/7 overvåking', included: true },
      { name: 'Support 08-20 hverdager', included: true },
      { name: '99.9% SLA', included: true },
      { name: 'Ukentlig statusrapport', included: true },
      { name: '5G failover backup', included: true },
      { name: '24/7 vakttelefon', included: false },
      { name: 'Dedikert teknisk kontakt', included: true },
    ],
  },
  pro: {
    name: 'Pro',
    description: 'For bedrifter med kritiske nettverksbehov',
    monthlyPrice: 19900,
    setupPrice: 24900,
    features: [
      { name: '1 Gbit symmetrisk fiber', included: true },
      { name: 'Ubegrenset Site-to-site VPN', included: true },
      { name: 'Proaktiv 24/7 overvåking & drift', included: true },
      { name: '24/7 support med dedikert team', included: true },
      { name: '99.95% SLA med kreditt', included: true },
      { name: 'Daglig statusrapport & KPI', included: true },
      { name: 'Dual 5G failover backup', included: true },
      { name: '24/7 vakttelefon', included: true },
      { name: 'Dedikert teknisk kontakt', included: true },
    ],
  },
};

const addons = [
  {
    name: '5G Failover Backup',
    description: 'Automatisk backup-linje ved fiberbrudd',
    price: '1 490 kr/mnd',
  },
  {
    name: 'Dual Fiber',
    description: 'Redundant fiber fra separat leverandør',
    price: 'Fra 4 900 kr/mnd',
  },
  {
    name: 'EDR Endpoint Security',
    description: 'Avansert endepunktbeskyttelse',
    price: '149 kr/bruker/mnd',
  },
  {
    name: 'Ekstra VPN-lokasjoner',
    description: 'Per ekstra site-to-site lokasjon',
    price: '990 kr/lokasjon/mnd',
  },
  {
    name: 'Managed Firewall',
    description: 'Full administrasjon av brannmur',
    price: 'Fra 2 490 kr/mnd',
  },
];

export default function ManagedConnectivityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Managed Connectivity
            </h1>
            <p className="text-lg text-muted-foreground">
              Alt-i-ett nettverksløsninger med fiber, VPN og overvåking. 
              Skreddersydde pakker for norske bedrifter.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList>
                <TabsTrigger value="monthly">Månedlig</TabsTrigger>
                <TabsTrigger value="yearly">Årlig (spar 10%)</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <div className="grid gap-6 md:grid-cols-3">
                {Object.values(packages).map((pkg) => (
                  <Card
                    key={pkg.name}
                    className={pkg.popular ? 'border-secondary shadow-lg' : ''}
                  >
                    {pkg.popular && (
                      <div className="bg-secondary text-secondary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
                        Mest populære
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{pkg.name}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
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
                          <li key={feature.name} className="flex items-start">
                            {feature.included ? (
                              <Check className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                            ) : (
                              <X className="mr-2 h-4 w-4 text-muted-foreground/50 mt-0.5" />
                            )}
                            <span
                              className={
                                feature.included
                                  ? ''
                                  : 'text-muted-foreground line-through'
                              }
                            >
                              {feature.name}
                            </span>
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
                        <Link href="#tilbud">
                          Velg {pkg.name}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="yearly">
              <div className="grid gap-6 md:grid-cols-3">
                {Object.values(packages).map((pkg) => {
                  const yearlyPrice = Math.round(pkg.monthlyPrice * 12 * 0.9);
                  const monthlyEquivalent = Math.round(yearlyPrice / 12);
                  return (
                    <Card
                      key={pkg.name}
                      className={pkg.popular ? 'border-secondary shadow-lg' : ''}
                    >
                      {pkg.popular && (
                        <div className="bg-secondary text-secondary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
                          Mest populære
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{pkg.name}</CardTitle>
                        <CardDescription>{pkg.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-3xl font-bold">
                            {formatPrice(monthlyEquivalent)}
                          </span>
                          <span className="text-muted-foreground">/mnd</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {formatPrice(yearlyPrice)}/år + {formatPrice(pkg.setupPrice)} oppstart
                        </p>
                        <p className="text-sm text-green-600 font-medium">
                          Spar {formatPrice(pkg.monthlyPrice * 12 - yearlyPrice)}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {pkg.features.map((feature) => (
                            <li key={feature.name} className="flex items-start">
                              {feature.included ? (
                                <Check className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                              ) : (
                                <X className="mr-2 h-4 w-4 text-muted-foreground/50 mt-0.5" />
                              )}
                              <span
                                className={
                                  feature.included
                                    ? ''
                                    : 'text-muted-foreground line-through'
                                }
                              >
                                {feature.name}
                              </span>
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
                          <Link href="#tilbud">
                            Velg {pkg.name}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="bg-muted/50">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Tilleggstjenester
            </h2>
            <div className="space-y-4">
              {addons.map((addon) => (
                <Card key={addon.name}>
                  <CardContent className="flex items-center justify-between p-6">
                    <div>
                      <h3 className="font-semibold">{addon.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {addon.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{addon.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Hvorfor velge Managed Connectivity?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Rask implementering</h3>
              <p className="text-sm text-muted-foreground">
                Fra bestilling til drift på 2-4 uker for de fleste lokasjoner
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Komplett sikkerhet</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end kryptering, MFA og kontinuerlig overvåking
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Skalerbar ytelse</h3>
              <p className="text-sm text-muted-foreground">
                Oppgrader båndbredde og tjenester etter behov
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Beregn din ROI
            </h2>
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="tilbud" className="container section-spacing">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Be om tilbud</CardTitle>
              <CardDescription>
                Få et skreddersydd tilbud basert på dine behov. 
                Vi kontakter deg innen 2 arbeidsdager.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LeadForm formType="quote-request" />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
