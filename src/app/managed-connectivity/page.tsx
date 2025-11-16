import Link from 'next/link';
import { Check, X, ArrowRight, Zap, Shield, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

function formatPrice(price: number) {
  return new Intl.NumberFormat('nb-NO', {
    style: 'currency',
    currency: 'NOK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ManagedConnectivityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Managed Connectivity Pakker
            </h1>
            <p className="text-lg text-muted-foreground">
              Alt-i-ett nettverksløsninger med fiber, VPN og overvåking. 
              Skreddersydde pakker for norske bedrifter.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="container mx-auto px-4 py-20">
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
                {Object.values(packages).map((pkg) => {
                  const isPopular = 'popular' in pkg && pkg.popular;
                  return (
                    <Card key={pkg.name} className={isPopular ? 'border-primary shadow-lg' : ''}>
                      {isPopular && (
                        <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
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
                              <span className={feature.included ? '' : 'text-muted-foreground line-through'}>
                                {feature.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full"
                          variant={isPopular ? 'default' : 'outline'}
                          asChild
                        >
                          <Link href="/kontakt">
                            Velg {pkg.name}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="yearly">
              <div className="grid gap-6 md:grid-cols-3">
                {Object.values(packages).map((pkg) => {
                  const yearlyPrice = Math.round(pkg.monthlyPrice * 12 * 0.9);
                  const monthlyEquivalent = Math.round(yearlyPrice / 12);
                  const isPopular = 'popular' in pkg && pkg.popular;

                  return (
                    <Card key={pkg.name} className={isPopular ? 'border-primary shadow-lg' : ''}>
                      {isPopular && (
                        <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
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
                              <span className={feature.included ? '' : 'text-muted-foreground line-through'}>
                                {feature.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full"
                          variant={isPopular ? 'default' : 'outline'}
                          asChild
                        >
                          <Link href="/kontakt">
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

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Klar for bedre nettverk?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            La oss hjelpe deg finne den perfekte løsningen for din bedrift.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/kontakt">
              Få tilpasset tilbud <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
