import Link from 'next/link';
import { Shield, Users, Lock, Globe, Key, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatPrice } from '@/lib/utils';

const vpnSolutions = [
  {
    type: 'Site-to-Site VPN',
    description: 'Sikker forbindelse mellom kontorlokasjoner',
    icon: Globe,
    pricing: {
      perSite: 1490,
      setup: 2900,
    },
    features: [
      'IPSec/IKEv2 kryptering',
      'Automatisk failover',
      'QoS for kritisk trafikk',
      'Sentralisert administrasjon',
      'Split tunneling støtte',
      '24/7 overvåking',
    ],
  },
  {
    type: 'Fjernaksess VPN',
    description: 'Sikker tilgang for ansatte på hjemmekontor',
    icon: Users,
    pricing: {
      perUser: 149,
      setup: 1900,
    },
    features: [
      'SSL/TLS VPN',
      'Multi-faktor autentisering',
      'Rollebasert tilgangskontroll',
      'Automatisk klientkonfigurasjon',
      'Device compliance sjekk',
      'Detaljert aktivitetslogging',
    ],
  },
];

const securityFeatures = [
  {
    icon: Lock,
    title: 'Ende-til-ende kryptering',
    description: 'AES-256 kryptering for all datatrafikk med perfekt forward secrecy.',
  },
  {
    icon: Key,
    title: 'Multi-faktor autentisering',
    description: 'SMS, app-basert eller hardware tokens for ekstra sikkerhet.',
  },
  {
    icon: Shield,
    title: 'Zero Trust arkitektur',
    description: 'Kontinuerlig verifisering av brukere og enheter.',
  },
  {
    icon: Activity,
    title: 'Sentralisert logging',
    description: 'Full oversikt over all VPN-aktivitet for compliance og sikkerhet.',
  },
];

const pricingTiers = [
  {
    name: 'Starter',
    description: 'For små team',
    users: '1-10 brukere',
    monthlyPrice: 1490,
    features: [
      'SSL VPN tilgang',
      'Basis MFA (SMS/App)',
      'Standard support',
      'Månedlig rapport',
    ],
  },
  {
    name: 'Business',
    description: 'For voksende bedrifter',
    users: '11-50 brukere',
    monthlyPrice: 4990,
    features: [
      'SSL & IPSec VPN',
      'Avansert MFA',
      'Prioritert support',
      'Ukentlig rapport',
      'API-tilgang',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For store organisasjoner',
    users: '50+ brukere',
    monthlyPrice: 'Tilpasset',
    features: [
      'Alle VPN-typer',
      'Hardware tokens',
      'Dedikert support',
      'Sanntidsrapporter',
      'Full API & SAML',
      'Custom integrasjoner',
    ],
  },
];

export default function VPNPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Sikre VPN-løsninger
            </h1>
            <p className="text-lg text-muted-foreground">
              Site-to-site og fjernaksess VPN med enterprise-grade sikkerhet. 
              Gi dine ansatte trygg tilgang uansett hvor de jobber fra.
            </p>
          </div>
        </div>
      </section>

      {/* VPN Solutions */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Våre VPN-løsninger
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {vpnSolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Card key={solution.type} className="relative">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{solution.type}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                    <div className="mt-4">
                      <p className="text-2xl font-bold">
                        Fra {formatPrice(solution.pricing.perSite || solution.pricing.perUser)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {solution.pricing.perSite ? '/lokasjon/mnd' : '/bruker/mnd'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Oppsett: {formatPrice(solution.pricing.setup)}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Shield className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="bg-primary text-primary-foreground">
        <div className="container section-spacing">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Sikkerhet i fokus
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {securityFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-primary-foreground/90">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Skalerbare pakker
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <Card key={tier.name}>
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <p className="mt-2 text-sm font-medium">{tier.users}</p>
                  <div className="mt-4">
                    {typeof tier.monthlyPrice === 'number' ? (
                      <>
                        <span className="text-3xl font-bold">
                          {formatPrice(tier.monthlyPrice)}
                        </span>
                        <span className="text-muted-foreground">/mnd</span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold">Tilpasset pris</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Shield className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full" variant="outline" asChild>
                    <Link href="/managed-connectivity#tilbud">
                      Velg {tier.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-muted/50">
        <div className="container section-spacing">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Bruksområder
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">Hjemmekontor</h3>
                  <p className="text-muted-foreground">
                    Gi ansatte sikker tilgang til bedriftens nettverk og applikasjoner 
                    fra hjemmekontor eller på reise. Full tilgang med samme sikkerhet 
                    som på kontoret.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">Multi-site bedrifter</h3>
                  <p className="text-muted-foreground">
                    Koble sammen kontorer, butikker og lagre i ett sikkert nettverk. 
                    Del ressurser og applikasjoner sømløst mellom lokasjoner.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-semibold">Partner-tilgang</h3>
                  <p className="text-muted-foreground">
                    Gi leverandører og partnere begrenset og kontrollert tilgang 
                    til spesifikke ressurser uten å kompromittere sikkerheten.
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
            Sikre din bedrift med VPN
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            La oss hjelpe deg med å implementere en skalerbar og sikker VPN-løsning
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/managed-connectivity#tilbud">
                Start med VPN
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/nis2-smb">
                Les om NIS2-krav
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
