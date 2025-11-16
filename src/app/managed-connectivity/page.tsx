// src/app/managed-connectivity/page.tsx
import type { Metadata } from 'next'
import { Check, X, Shield, Zap } from 'lucide-react'
import Link from 'next/link'
import { CTASection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Drift og overvåking av nettverk (MSP) | SignalNord',
  description:
    'SignalNord tar daglig drift og overvåking av nettverket ditt. Vi følger med på linjer og utstyr, håndterer feil og hjelper deg med endringer – til fast månedskostnad.',
}

export default function ManagedConnectivityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Drift og overvåking av nettverk (MSP)
          </h1>
          <p className="text-2xl md:text-[1.6rem] text-muted-foreground mb-6">
            Vi tar ansvar for nettverket i hverdagen. Du slipper å sitte alene
            med feilmeldinger, ustabilitet og uklare leverandører, og får ett
            sted å henvende deg når noe skjer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/kontakt">Få forslag på avtale</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#sammenligning">Se forskjellen fra egen drift</Link>
            </Button>
          </div>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Tjenesten passer for bedrifter som har ansvar for mye IT selv, men
            vil slippe å bruke tid på nettverk hele tiden.
          </p>
        </div>
      </section>

      {/* Sammenligning egen drift vs oss */}
      <section id="sammenligning" className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Egen drift eller drift og overvåking fra SignalNord?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Under er en forenklet sammenligning av hvordan hverdagen ofte ser ut
            med egen nettverksdrift, kontra når vi tar ansvar for det operative.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Egen drift</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <X className="mt-1 h-4 w-4 text-destructive" />
                    <span>Flere leverandører som peker på hverandre når noe er nede.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="mt-1 h-4 w-4 text-destructive" />
                    <span>Lite tid til å rydde opp i gamle løsninger og midlertidige fikser.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="mt-1 h-4 w-4 text-destructive" />
                    <span>Dokumentasjon ligger spredt, eller bare i hodet til én person.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="mt-1 h-4 w-4 text-destructive" />
                    <span>Varsling skjer først når brukere klager, ikke når feilen oppstår.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Drift og overvåking fra SignalNord</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 text-primary" />
                    <span>Én partner som både kan linjer, brannmur, VPN og lokal infrastruktur.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 text-primary" />
                    <span>Oppfølging over tid – vi rydder, forenkler og standardiserer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 text-primary" />
                    <span>Dokumentasjon og endringer oppdateres som en del av jobben.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 text-primary" />
                    <span>Overvåking og varsling gjør at vi ofte ser problemer før brukerne.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hva inngår / hva vi faktisk gjør */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hva betyr det i praksis?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Drift og overvåking av nettverk handler i stor grad om å ta tak i
            alle de små tingene som ellers aldri blir prioritert, men som gir
            ustabilitet over tid.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Design og opprydding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Vi ser på det dere har i dag, rydder opp i gamle regler og
                  midlertidige løsninger og legger en enkel struktur som kan
                  bygges videre på.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Overvåking og varsling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Linjer, brannmurer, rutere og aksesspunkter kobles på
                  overvåking. Vi får varsler når noe er unormalt og kan reagere
                  raskere.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Endringer og støtte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Vi hjelper med endringer, nye lokasjoner, nye brukere og
                  tilganger, og er med i dialogen når dere skal bygge om eller
                  utvide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Om pris på MSP */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hvordan prises drift og overvåking?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Prisen avhenger først og fremst av hvor mange lokasjoner dere har,
              hvor stort nettverket er og hvor mye av ansvaret dere ønsker å
              legge over på oss. Vi gir alltid et konkret forslag på forhånd,
              slik at du vet hva du kan forvente per måned.
            </p>
            <p>
              For et typisk kontor med én lokasjon, noen få nettverksenheter og
              moderat krav til oppetid, vil en driftsavtale ofte ligge på nivå
              der det er billigere enn å bruke interne timer på feilretting og
              “brannslukking” gjennom året.
            </p>
            <p>
              Samtidig skal det være enkelt å skalere opp. Får dere flere
              kontorer eller bygger ut WiFi og VPN, justerer vi avtalen, men
              strukturen er den samme: fast beløp i måneden for at vi følger opp
              nettverket deres.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
