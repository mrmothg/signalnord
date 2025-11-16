import { ArrowRight, Shield, Zap, Users, Clock, CheckCircle, TrendingUp, HeadphonesIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <>
      {/* Hero Section - H1 matcher innhold */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pålitelig nettverksinfrastruktur for norske bedrifter
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              SignalNord leverer fremtidens nettverksløsninger med fiber, leide linjer, 
              VPN og managed services. Vi sikrer at din bedrift får den digitale 
              infrastrukturen som kreves for å konkurrere i dagens marked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/kontakt">
                  Få tilbud <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/managed-connectivity">
                  Se våre pakker
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester Section - Mer innhold */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Komplette nettverksløsninger for moderne bedrifter
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fra høyhastighets fiber til avanserte managed services - vi leverer 
              skreddersydde løsninger som passer din bedrifts unike behov. Alle våre 
              tjenester kommer med 24/7 norsk support og proaktiv overvåking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Bedriftsfiber</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Symmetrisk fiber opptil 10 Gbit/s med garantert oppetid. 
                  Perfekt for bedrifter som krever stabil og rask internettilgang.
                </p>
                <p className="font-bold text-lg mb-2">Fra 2.990 kr/mnd</p>
                <Link href="/fiber" className="text-primary hover:underline">
                  Les mer →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Leide Linjer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Dedikerte punkt-til-punkt forbindelser med garantert båndbredde 
                  og minimal latency for kritiske applikasjoner.
                </p>
                <p className="font-bold text-lg mb-2">Fra 8.990 kr/mnd</p>
                <Link href="/leide-linjer" className="text-primary hover:underline">
                  Les mer →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>VPN-løsninger</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Sikre site-to-site og remote access VPN med enterprise-grade 
                  kryptering. Koble sammen alle lokasjoner trygt.
                </p>
                <p className="font-bold text-lg mb-2">Fra 1.490 kr/mnd</p>
                <Link href="/vpn" className="text-primary hover:underline">
                  Les mer →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-primary">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Managed Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Komplett IT-drift med overvåking, vedlikehold og support. 
                  La oss ta ansvaret for din IT-infrastruktur.
                </p>
                <p className="font-bold text-lg mb-2">Skreddersydd pris</p>
                <Link href="/managed-connectivity" className="text-primary hover:underline">
                  Les mer →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hvorfor SignalNord - Utvidet */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Hvorfor velge SignalNord som din nettverksleverandør?
            </h2>
            
            <div className="prose prose-lg mx-auto">
              <p>
                I en tid hvor digital infrastruktur er kritisk for forretningssuksess, 
                trenger norske bedrifter en partner de kan stole på. SignalNord er bygget 
                fra grunnen av for å møte de unike behovene til det norske bedriftsmarkedet, 
                med fokus på pålitelighet, sikkerhet og lokal ekspertise.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">NIS2-Compliance som standard</h3>
              <p>
                Med nye EU-direktiver og økende sikkerhetskrav, er compliance ikke lenger 
                valgfritt. Alle våre løsninger er designet med NIS2-direktiver i tankene, 
                slik at din bedrift alltid møter regulatoriske krav. Vi implementerer 
                bransjens beste praksis for sikkerhet, inkludert end-to-end kryptering, 
                multi-faktor autentisering og kontinuerlig sikkerhetsovervåking.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Norsk support når du trenger det</h3>
              <p>
                Vårt supportteam består av erfarne nettverksingeniører lokalisert i Norge. 
                Dette betyr at du alltid får hjelp på norsk, fra folk som forstår norske 
                bedrifters behov og utfordringer. Med 24/7 vakttelefon for kritiske 
                hendelser, er vi alltid tilgjengelige når du trenger oss mest.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Skalerbare løsninger som vokser med deg</h3>
              <p>
                Enten du er en oppstartsbedrift med 5 ansatte eller en etablert virksomhet 
                med hundrevis av brukere, har vi løsninger som passer. Våre pakker kan 
                enkelt skaleres opp eller ned basert på dine behov, uten lange bindingstider 
                eller kompliserte prosesser. Start med det du trenger i dag, og utvid når 
                bedriften vokser.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-muted-foreground">Garantert oppetid</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Norsk support</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2-4 uker</div>
                <p className="text-muted-foreground">Leveringstid</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teknologi og partnere */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Bygget på markedsledende teknologi
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Vi samarbeider med de beste teknologileverandørene for å sikre at våre 
              kunder får tilgang til de mest pålitelige og innovative løsningene. 
              Våre partnere inkluderer ledende leverandører innen nettverksutstyr, 
              sikkerhet og skyinfrastruktur.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                'Enterprise routers',
                'Managed switches', 
                'Firewalls',
                'VPN gateways',
                'Load balancers',
                'SD-WAN',
                'SIEM-systemer',
                'Backup-løsninger'
              ].map((tech) => (
                <div key={tech} className="flex items-center justify-center p-4 bg-muted rounded-lg">
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Klar for å oppgradere din bedrifts nettverk?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Bli en av de første kundene når vi lanserer i 2026. 
            Registrer din interesse i dag og få spesialpriser.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/kontakt">
              Registrer interesse <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
