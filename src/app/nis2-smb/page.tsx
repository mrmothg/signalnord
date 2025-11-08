import Link from 'next/link';
import { Shield, AlertTriangle, FileText, CheckCircle2, Download, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';

const nis2Requirements = [
  {
    category: 'Risikostyring',
    items: [
      'Identifisere og vurdere cybersikkerhetsrisikoer',
      'Implementere passende sikkerhetstiltak',
      'Regelmessig testing og evaluering',
    ],
  },
  {
    category: 'Hendelseshåndtering',
    items: [
      'Prosedyrer for å oppdage hendelser',
      'Rask respons og gjenoppretting',
      'Rapportering innen 24-72 timer',
    ],
  },
  {
    category: 'Forsyningskjede',
    items: [
      'Vurdering av leverandørers sikkerhet',
      'Kontraktuelle sikkerhetskrav',
      'Overvåking av tredjepartstilganger',
    ],
  },
  {
    category: 'Tekniske tiltak',
    items: [
      'Kryptering og tilgangskontroll',
      'Multi-faktor autentisering',
      'Regelmessig patching og oppdatering',
    ],
  },
];

const checklistItems = [
  { text: 'Kartlagt alle kritiske systemer og data', critical: true },
  { text: 'Implementert MFA for alle brukere', critical: true },
  { text: 'Etablert incident response-plan', critical: true },
  { text: 'Automatisk logging av sikkerhetshendelser', critical: true },
  { text: 'Regelmessig backup med test av gjenoppretting', critical: true },
  { text: 'Dokumenterte sikkerhetsprosedyrer', critical: false },
  { text: 'Gjennomført risikovurdering siste 12 mnd', critical: false },
  { text: 'Avtaler med leverandører inkluderer sikkerhetskrav', critical: false },
  { text: 'Ansatte har gjennomført sikkerhetsopplæring', critical: false },
  { text: 'Business continuity plan på plass', critical: false },
];

const timeline = [
  { date: 'Oktober 2024', event: 'NIS2 trådte i kraft i EU', status: 'completed' },
  { date: 'Q1 2025', event: 'Forventet norsk implementering', status: 'current' },
  { date: 'Q2 2025', event: 'Veiledning fra Nasjonal sikkerhetsmyndighet', status: 'upcoming' },
  { date: 'Q3 2025', event: 'Frist for compliance for mange bedrifter', status: 'upcoming' },
];

export default function NIS2SMBPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Nye sikkerhetskrav fra 2025
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              NIS2 for norske SMB-bedrifter
            </h1>
            <p className="text-lg text-muted-foreground">
              EUs nye cybersikkerhetsdirektiv stiller strengere krav til digital sikkerhet. 
              Er din bedrift forberedt?
            </p>
          </div>
        </div>
      </section>

      {/* What is NIS2 Section */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Hva er NIS2?</h2>
            <p className="text-lg text-muted-foreground">
              NIS2 (Network and Information Security Directive 2) er EUs oppdaterte 
              cybersikkerhetsdirektiv som utvider omfanget og skjerper kravene for 
              digital sikkerhet.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Shield className="mb-3 h-8 w-8 text-primary" />
                <CardTitle>Hvem omfattes?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Bedrifter med over 50 ansatte</li>
                  <li>• Omsetning over 10 millioner EUR</li>
                  <li>• Kritisk infrastruktur og viktige tjenester</li>
                  <li>• Leverandører til omfattede virksomheter</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="mb-3 h-8 w-8 text-primary" />
                <CardTitle>Konsekvenser ved brudd</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Bøter opptil 10 millioner EUR eller 2% av omsetning</li>
                  <li>• Personlig ansvar for ledelsen</li>
                  <li>• Offentliggjøring av brudd</li>
                  <li>• Tap av kundetillit og omdømme</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-muted/50">
        <div className="container section-spacing">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Hovedkrav i NIS2
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {nis2Requirements.map((req) => (
                <Card key={req.category}>
                  <CardHeader>
                    <CardTitle className="text-lg">{req.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {req.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle2 className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Self-Assessment Checklist */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Rask selvvurdering
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Er din bedrift NIS2-klar?</CardTitle>
              <CardDescription>
                Sjekk av punktene din bedrift har på plass
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <input
                      type="checkbox"
                      id={`check-${index}`}
                      className="mt-1 h-4 w-4 rounded border-gray-300"
                    />
                    <label
                      htmlFor={`check-${index}`}
                      className={`ml-3 text-sm ${
                        item.critical ? 'font-medium' : ''
                      }`}
                    >
                      {item.text}
                      {item.critical && (
                        <span className="ml-2 text-xs text-red-600">
                          (Kritisk)
                        </span>
                      )}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-blue-50 p-4">
                <div className="flex">
                  <Info className="h-5 w-5 text-blue-600" />
                  <p className="ml-2 text-sm text-blue-900">
                    Hvis du mangler flere kritiske punkter, bør du starte 
                    NIS2-forberedelsene umiddelbart.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container section-spacing">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Tidslinje for implementering
            </h2>
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.date} className="flex items-start">
                  <div
                    className={`mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                      item.status === 'completed'
                        ? 'bg-green-600'
                        : item.status === 'current'
                        ? 'bg-secondary'
                        : 'bg-white/20'
                    }`}
                  >
                    {item.status === 'completed' && (
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    )}
                    {item.status === 'current' && (
                      <div className="h-3 w-3 rounded-full bg-white" />
                    )}
                    {item.status === 'upcoming' && (
                      <div className="h-2 w-2 rounded-full bg-white/60" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">{item.date}</p>
                    <p className="text-primary-foreground/90">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-2xl">
          <Card className="border-secondary">
            <CardHeader className="text-center">
              <Download className="mx-auto mb-4 h-12 w-12 text-secondary" />
              <CardTitle className="text-2xl">
                Last ned gratis NIS2-sjekkliste
              </CardTitle>
              <CardDescription>
                Få en komplett sjekkliste med 10 kritiske tiltak for NIS2-compliance. 
                Praktisk PDF-guide tilpasset norske SMB-bedrifter.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LeadForm formType="nis2-checklist" buttonText="Last ned sjekkliste" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="container section-spacing">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Slik hjelper SignalNord
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Gap-analyse</h3>
                <p className="text-sm text-muted-foreground">
                  Vi kartlegger din nåværende sikkerhetsstatus og identifiserer 
                  mangler i forhold til NIS2-krav.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Implementering</h3>
                <p className="text-sm text-muted-foreground">
                  Vi implementerer nødvendige tekniske og organisatoriske 
                  tiltak for full compliance.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Vedlikehold</h3>
                <p className="text-sm text-muted-foreground">
                  Kontinuerlig overvåking og oppdatering sikrer at du 
                  forblir compliant over tid.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/managed-connectivity#tilbud">
                  Start NIS2-forberedelse
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
