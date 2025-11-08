import Link from 'next/link';
import { ArrowRight, Shield, Clock, Globe, CheckCircle, Waves, Mountain, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import { TrustLogos } from '@/components/trust-logos';
import { FAQ } from '@/components/faq';

const kpis = [
  { label: 'Oppetid', value: '99.9%', description: 'SLA garanti' },
  { label: 'Responstid', value: '<15', description: 'minutter' },
  { label: 'Lokasjoner', value: '12', description: 'i Norge' },
  { label: 'Support', value: '08-20', description: 'alle hverdager' },
];

const services = [
  {
    title: 'Leide linjer',
    description: 'Dedikerte fiberforbindelser med garantert båndbredde.',
    icon: Globe,
    href: '/leide-linjer',
    features: ['100-1000 Mbit', 'Inkludert CPE', '99.9% SLA'],
  },
  {
    title: 'VPN-løsninger',
    description: 'Sikre forbindelser for moderne arbeidsplasser.',
    icon: Shield,
    href: '/vpn',
    features: ['Site-to-site', 'Fjernaksess', 'Multi-faktor'],
  },
  {
    title: 'Overvåking',
    description: '24/7 drift og vedlikehold av infrastruktur.',
    icon: Clock,
    href: '/overvaking-msp',
    features: ['24/7 overvåking', 'Proaktiv drift', 'NIS2 compliance'],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Nordic Hero Section - Clean and minimal */}
      <section className="relative bg-nordic-gradient">
        <div className="container section-spacing">
          <div className="mx-auto max-w-4xl">
            {/* Simple, centered content */}
            <div className="text-center space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-gray-900 animate-fade-in">
                Pålitelig nettverks&shy;infrastruktur
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-gray-600">
                  for norske bedrifter
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Vi leverer stabile nettverksløsninger med fokus på sikkerhet og oppetid. 
                Enkel drift, norsk support.
              </p>

              {/* Simple CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white rounded-sm px-8 py-6 text-base font-normal transition-colors">
                  <Link href="#kontakt" className="flex items-center">
                    Kom i gang
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 rounded-sm px-8 py-6 text-base font-normal">
                  <Link href="/managed-connectivity">
                    Se priser
                  </Link>
                </Button>
              </div>
            </div>

            {/* Nordic badges - simple and clean */}
            <div className="flex flex-wrap justify-center gap-6 mt-16 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                NIS2-klar
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Norsk support
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                99.9% oppetid
              </span>
            </div>
          </div>
        </div>

        {/* Subtle Nordic decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </section>

      {/* Nordic KPI Section - Clean data presentation */}
      <section className="bg-white">
        <div className="container py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {kpis.map((kpi, index) => (
              <div key={kpi.label} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-light text-gray-900 mb-1">{kpi.value}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{kpi.label}</div>
                <div className="text-xs text-gray-500">{kpi.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nordic Services Section - Minimal cards */}
      <section className="bg-gray-50/50">
        <div className="container section-spacing">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Våre tjenester
            </h2>
            <p className="text-lg text-gray-600">
              Enkle, pålitelige løsninger tilpasset din bedrift
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="nordic-card nordic-hover border-0 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="pb-4">
                    <Icon className="h-8 w-8 text-gray-700 mb-4" strokeWidth={1.5} />
                    <CardTitle className="text-xl font-normal">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-sm mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <div className="w-1 h-1 bg-gray-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={service.href} 
                      className="text-sm text-gray-700 hover:text-gray-900 transition-colors inline-flex items-center"
                    >
                      Les mer
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nordic Value Section - Clean layout */}
      <section className="bg-white">
        <div className="container section-spacing">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Hvorfor SignalNord
              </h2>
              <p className="text-lg text-gray-600">
                Vi kombinerer norsk ekspertise med moderne teknologi
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-xl font-normal text-gray-900 mb-6 flex items-center">
                  <Mountain className="h-5 w-5 mr-3 text-gray-600" />
                  Lokal forankring
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Med over 10 års erfaring i det norske markedet forstår vi dine behov. 
                  Vårt team snakker ditt språk og kjenner dine utfordringer.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-3 mt-0.5 text-gray-400" />
                    Norsk support på telefon 08-20
                  </li>
                  <li className="flex items-start text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-3 mt-0.5 text-gray-400" />
                    Dedikert kundeansvarlig
                  </li>
                  <li className="flex items-start text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-3 mt-0.5 text-gray-400" />
                    Proaktiv overvåking
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-normal text-gray-900 mb-6 flex items-center">
                  <Shield className="h-5 w-5 mr-3 text-gray-600" />
                  Sikkerhet først
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Vi hjelper din bedrift med å møte nye sikkerhetskrav. 
                  Våre løsninger er bygget med NIS2-direktivet i tankene.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-3 mt-0.5 text-gray-400" />
                    Automatisert sikkerhetslogging
                  </li>
                  <li className="flex items-start text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-3 mt-0.5 text-gray-400" />
                    Hendelseshåndtering
                  </li>
                  <li className="flex items-start text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-3 mt-0.5 text-gray-400" />
                    Regelmessige revisjoner
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50 rounded-sm px-6 py-3 font-normal">
                <Link href="/nis2-smb">
                  Last ned NIS2-guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nordic Trust Section */}
      <section className="bg-gray-50/50 border-y border-gray-100">
        <div className="container py-12">
          <p className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider mb-8">
            Vi samarbeider med
          </p>
          <TrustLogos />
        </div>
      </section>

      {/* Nordic FAQ Section */}
      <section className="bg-white">
        <div className="container section-spacing">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-12">
              Vanlige spørsmål
            </h2>
            <div className="bg-gray-50 rounded-sm p-8">
              <FAQ />
            </div>
          </div>
        </div>
      </section>

      {/* Nordic Contact Section */}
      <section id="kontakt" className="bg-gray-50/50">
        <div className="container section-spacing">
          <div className="max-w-2xl mx-auto">
            <Card className="nordic-card border-0 shadow-nordic-lg">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-light text-gray-900">
                  Start samtalen
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  La oss kartlegge dine behov og finne riktig løsning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LeadForm formType="nis2-analysis" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nordic CTA Section - Simple and clean */}
      <section className="bg-gray-900 text-white">
        <div className="container py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Klar for stabile nettverksløsninger?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Vi hjelper deg med overgangen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-sm px-8 py-3 font-normal">
              <Link href="/managed-connectivity#tilbud" className="flex items-center">
                Se tilbud
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-sm px-8 py-3 font-normal">
              <Link href="tel:+4721000000">
                Ring: 21 00 00 00
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
