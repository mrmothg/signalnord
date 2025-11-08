import Link from 'next/link';
import { ArrowRight, Shield, Clock, Globe, CheckCircle, Star, Zap, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import { TrustLogos } from '@/components/trust-logos';
import { FAQ } from '@/components/faq';
import { formatPrice } from '@/lib/utils';

export default function OnePageLanding() {
  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">SignalNord</div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#tjenester" className="text-sm hover:text-primary">Tjenester</a>
            <a href="#priser" className="text-sm hover:text-primary">Priser</a>
            <a href="#hvorfor" className="text-sm hover:text-primary">Hvorfor oss</a>
            <a href="#faq" className="text-sm hover:text-primary">FAQ</a>
            <Button size="sm" asChild>
              <a href="#kontakt">Be om tilbud</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                ✓ NIS2-klar
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                ✓ 99.9% SLA
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                ✓ Norsk support
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Nettverksinfrastruktur for{' '}
              <span className="text-secondary">norske bedrifter</span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Leide linjer, VPN og managed services. Fra 4.900 kr/mnd.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <a href="#kontakt">
                  Få gratis analyse
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#priser">Se priser</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="border-y bg-muted/50 py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm">Oppetid SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">&lt;15 min</div>
              <div className="text-sm">Responstid</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">12+</div>
              <div className="text-sm">Lokasjoner</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">08-20</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Våre tjenester</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Globe className="mb-3 h-8 w-8 text-primary" />
                <CardTitle>Leide linjer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Dedikerte fiberforbindelser med garantert båndbredde fra 100 Mbit til 1 Gbit.
                </p>
                <p className="text-2xl font-bold">Fra 3.900,-</p>
                <p className="text-sm text-muted-foreground">/måned</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="mb-3 h-8 w-8 text-primary" />
                <CardTitle>VPN-løsninger</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Sikre site-to-site og fjernaksess VPN med MFA og sentralisert styring.
                </p>
                <p className="text-2xl font-bold">Fra 1.490,-</p>
                <p className="text-sm text-muted-foreground">/lokasjon/mnd</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="mb-3 h-8 w-8 text-primary" />
                <CardTitle>MSP & Overvåking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  24/7 overvåking, drift og vedlikehold av din IT-infrastruktur.
                </p>
                <p className="text-2xl font-bold">Fra 3.900,-</p>
                <p className="text-sm text-muted-foreground">/lokasjon/mnd</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="priser" className="bg-muted/50 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Pakkeløsninger</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Start</CardTitle>
                <CardDescription>For små kontorer</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">4.900,-</span>
                  <span className="text-muted-foreground">/mnd</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    100 Mbit fiber
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    Site-to-site VPN
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    Basis overvåking
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    99.5% SLA
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-secondary shadow-lg">
              <div className="bg-secondary text-secondary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
                Mest populære
              </div>
              <CardHeader>
                <CardTitle>Pluss</CardTitle>
                <CardDescription>For voksende bedrifter</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">9.900,-</span>
                  <span className="text-muted-foreground">/mnd</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    500 Mbit fiber
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    3 VPN-lokasjoner
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    24/7 overvåking
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    99.9% SLA
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    5G failover
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For kritiske behov</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">19.900,-</span>
                  <span className="text-muted-foreground">/mnd</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    1 Gbit fiber
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    Ubegrenset VPN
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    24/7 SOC
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    99.95% SLA
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                    Dual 5G failover
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="hvorfor" className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Hvorfor SignalNord?</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Rask implementering</h3>
              <p className="text-sm text-muted-foreground">
                Fra bestilling til drift på 2-4 uker
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">NIS2-compliant</h3>
              <p className="text-sm text-muted-foreground">
                Vi sikrer at du møter alle sikkerhetskrav
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Skalerbart</h3>
              <p className="text-sm text-muted-foreground">
                Vokser med din bedrift
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-12 border-y">
        <div className="container">
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
            STOLTE PARTNERE
          </p>
          <TrustLogos />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Ofte stilte spørsmål</h2>
            <FAQ />
          </div>
        </div>
      </section>

      {/* Contact/Lead Form */}
      <section id="kontakt" className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <Card className="bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">
                  Få gratis NIS2-analyse
                </CardTitle>
                <CardDescription>
                  La oss kartlegge din infrastruktur og gi deg et tilbud
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LeadForm formType="nis2-analysis" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 SignalNord AS | Org.nr: 123 456 789
            </div>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Personvern
              </Link>
              <Link href="/status" className="text-sm text-muted-foreground hover:text-primary">
                Status
              </Link>
              <a href="tel:+4721000000" className="text-sm text-muted-foreground hover:text-primary">
                21 00 00 00
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
