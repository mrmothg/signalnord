import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield,
  AlertTriangle,
  FileText,
  CheckCircle2,
  Download,
  Info,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LeadForm } from '@/components/lead-form'

export const metadata: Metadata = {
  title: 'NIS2 for norske SMB-bedrifter | SignalNord',
  description:
    'En praktisk innføring i NIS2 for norske SMB-bedrifter. Hva som kreves, hvem som omfattes, og hvordan komme i gang på en strukturert måte – uten å gjøre det mer komplisert enn nødvendig.',
}

const nis2Requirements = [
  {
    category: 'Risikostyring',
    items: [
      'Ha oversikt over kritiske systemer og data',
      'Vurdere og håndtere cybersikkerhetsrisiko',
      'Teste og evaluere tiltak jevnlig',
    ],
  },
  {
    category: 'Hendelseshåndtering',
    items: [
      'Rutiner for å oppdage hendelser',
      'Plan for respons og gjenoppretting',
      'Evne til å rapportere innen 24–72 timer',
    ],
  },
  {
    category: 'Forsyningskjede',
    items: [
      'Vurdere hvor sårbarhetene i leverandørkjeden ligger',
      'Få sikkerhetskrav inn i avtaler',
      'Ha kontroll på tredjepartstilganger',
    ],
  },
  {
    category: 'Tekniske tiltak',
    items: [
      'Tilgangsstyring og kryptering',
      'Multi-faktor-autentisering',
      'Rutiner for patching og oppdateringer',
    ],
  },
]

const checklistItems = [
  { text: 'Kartlagt alle kritiske systemer og data', critical: true },
  { text: 'Implementert MFA for alle brukere', critical: true },
  { text: 'Etablert plan for hendelseshåndtering', critical: true },
  { text: 'Automatisk logging av sikkerhetshendelser', critical: true },
  { text: 'Regelmessig backup med test av gjenoppretting', critical: true },
  { text: 'Dokumenterte sikkerhetsprosedyrer', critical: false },
  { text: 'Gjennomført risikovurdering siste 12 måneder', critical: false },
  { text: 'Avtaler med leverandører inkluderer sikkerhetskrav', critical: false },
  { text: 'Ansatte har fått grunnleggende sikkerhetsopplæring', critical: false },
  { text: 'Plan for videre drift ved større hendelser', critical: false },
]

const timeline = [
  { date: 'Oktober 2024', event: 'NIS2 trer i kraft i EU', status: 'completed' },
  {
    date: 'Q1 2025',
    event: 'Forventet norsk innføring i lovverket',
    status: 'current',
  },
  {
    date: 'Q2 2025',
    event: 'Forventet veiledning fra myndigheter',
    status: 'upcoming',
  },
  {
    date: 'Q3 2025',
    event: 'Mange virksomheter må kunne vise frem arbeidet',
    status: 'upcoming',
  },
]

export default function NIS2SMBPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Nye sikkerhetskrav for mange bedrifter
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              NIS2 for norske SMB-bedrifter
            </h1>
            <p className="mb-3 text-lg text-muted-foreground">
              NIS2 gjør cybersikkerhet til et ledelsesansvar, ikke bare et IT-tema.
            </p>
            <p className="text-lg text-muted-foreground">
              Du trenger ikke å ha alt på plass over natten, men du må kunne vise
              at dere jobber systematisk med risiko, sikkerhet og hendelser – og at
              styre og ledelse faktisk er involvert.
            </p>
          </div>
        </div>
      </section>

      {/* What is NIS2 Section */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Hva er NIS2 – i praksis?</h2>
            <p className="mb-3 text-lg text-muted-foreground">
              NIS2 er EUs oppdaterte regelverk for digital sikkerhet. Det utvider
              hvem som omfattes, og stiller tydeligere krav til hvordan bedrifter
              jobber med cybersikkerhet i hverdagen – ikke bare på papiret.
            </p>
            <p className="text-lg text-muted-foreground">
              Kort sagt: du må vite hvilke verdier dere har, hvilke risikoer dere
              har, og kunne vise hvordan dere håndterer dem – både teknisk og
              organisatorisk. Mye av dette er sunt sikkerhetsarbeid uansett, NIS2
              gjør det bare mer formelt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Shield className="mb-3 h-8 w-8 text-primary" />
                <CardTitle>Hvem kan være omfattet?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Bedrifter med over ca. 50 ansatte</li>
                  <li>• Omsetning over 10 millioner EUR</li>
                  <li>• Aktører innen viktige tjenester og infrastruktur</li>
                  <li>• Leverandører til virksomheter som er omfattet</li>
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">
                  De endelige norske grensene og definisjonene avgjøres i norsk lov,
                  men mange SMB-er vil påvirkes indirekte gjennom krav fra kunder
                  og større samarbeidspartnere.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="mb-3 h-8 w-8 text-primary" />
                <CardTitle>Hva skjer ved brudd?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Betydelige bøter ved alvorlige brudd</li>
                  <li>• Skjerpet ansvar for ledelse og styre</li>
                  <li>• Krav om å rapportere alvorlige hendelser</li>
                  <li>• Risiko for tap av tillit hos kunder og partnere</li>
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">
                  Poenget er ikke å skremme, men å få bedrifter til å ta strukturerte
                  grep før noe skjer – i stedet for å stå uten oversikt midt i en
                  hendelse.
                </p>
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
              Hovedområder NIS2 er opptatt av
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
                          <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-green-600" />
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
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
              <CardTitle>Hvor ligger dere i dag?</CardTitle>
              <CardDescription>
                Bruk listen som en ærlig sjekk på hvor mye som gjenstår. Dette
                er ikke fasit, men et godt startpunkt for intern dialog mellom
                IT, ledelse og eventuelt styret.
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
                      className={`ml-3 text-sm text-muted-foreground ${
                        item.critical ? 'font-medium text-foreground' : ''
                      }`}
                    >
                      {item.text}
                      {item.critical && (
                        <span className="ml-2 text-xs text-red-600">
                          (Viktig å få på plass)
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
                    Mangler dere flere av de kritiske punktene, er det et tydelig
                    signal om at arbeidet med sikkerhet og NIS2 bør struktureres
                    bedre – gjerne som et eget delprosjekt.
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
              Grov tidslinje – hva skjer når?
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
            <p className="mt-8 text-sm text-primary-foreground/80">
              Tidslinjen er forenklet, men budskapet er det samme: det er bedre å
              være litt tidlig ute enn å måtte dokumentere alt på svært kort
              varsel senere.
            </p>
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
                Last ned enkel NIS2-sjekkliste
              </CardTitle>
              <CardDescription>
                Få en kort og konkret PDF med de viktigste punktene du kan ta
                med i møte med daglig leder, IT-ansvarlig eller styret.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LeadForm
                formType="nis2-checklist"
                buttonText="Last ned sjekkliste"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/10">
        <div className="container section-spacing">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold">
              Vanlige spørsmål vi får om NIS2
            </h2>
            <div className="space-y-5 text-sm text-muted-foreground md:text-base">
              <div>
                <h3 className="mb-1 text-base font-semibold text-foreground">
                  Må vi være «helt ferdige» før frister og revisjoner?
                </h3>
                <p>
                  Nei. Myndigheter og kunder forventer ikke at alt er perfekt,
                  men at dere har kontroll på de viktigste risikoene, har tatt
                  noen tydelige grep og kan vise frem en plan for resten. Det
                  er ofte bedre å vise progresjon enn å påstå at alt er på plass.
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-base font-semibold text-foreground">
                  Kan vi starte med bare nettverk og tilgangsstyring?
                </h3>
                <p>
                  Ja. For mange SMB-er er nettverk, VPN, brukertilgang og backup
                  det naturlige stedet å begynne. Det gir konkrete forbedringer
                  uten at hele virksomheten må snus på hodet med en gang.
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-base font-semibold text-foreground">
                  Må vi ha egne sikkerhetsressurser internt?
                </h3>
                <p>
                  Ikke nødvendigvis. Men noen må ha eierskap til arbeidet – ofte
                  kombinerer vi tekniske tiltak fra vår side med en intern
                  kontaktperson som har ansvar for å forankre dette mot ledelse
                  og øvrige ansatte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="container section-spacing">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Slik kan SignalNord bidra
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Enkel kartlegging</h3>
                <p className="text-sm text-muted-foreground">
                  Vi går gjennom dagens situasjon sammen med dere og ser på hvor
                  dere står opp mot de viktigste NIS2-kravene, uten tunge
                  konsulentrapporter.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Praktiske tiltak</h3>
                <p className="text-sm text-muted-foreground">
                  Vi hjelper med konkrete grep på nettverk, tilgangsstyring,
                  logging og overvåking – tiltak som faktisk kan gjennomføres i
                  en travel hverdag.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Oppfølging over tid</h3>
                <p className="text-sm text-muted-foreground">
                  Gjennom faste rapporter og avtalt oppfølging kan vi bidra til
                  at NIS2 og sikkerhet ikke blir engangsprosjekter, men en del
                  av den løpende driften.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/kontakt">
                  Ta en uforpliktende prat om NIS2
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
