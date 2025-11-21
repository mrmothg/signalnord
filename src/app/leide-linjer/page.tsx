// src/app/leide-linjer/page.tsx
import type { Metadata } from 'next'
import { Shield, Zap, Clock, Server, Building2, Factory } from 'lucide-react'
import Link from 'next/link'
import { CTASection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Leide linjer – Faste forbindelser mellom lokasjoner | SignalNord',
  description:
    'Leide linjer for sikre og forutsigbare forbindelser mellom kontorer, datasenter og andre lokasjoner. Fast kapasitet, lav forsinkelse og norsk oppfølging.',
}

export default function LeideLinjerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Leide linjer mellom kontor og datasenter
          </h1>
          <p className="mb-6 text-2xl text-muted-foreground md:text-[1.6rem]">
            Leide linjer brukes når forbindelsen mellom to steder er så viktig
            at den ikke kan være «best effort». Du får fast kapasitet mellom
            lokasjoner, lav forsinkelse og en linje som ikke er delt med alle andre.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/kontakt">Diskuter behov for leide linjer</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#priser">Se priseksempler</Link>
            </Button>
          </div>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Passer for virksomheter der stopp i kommunikasjon mellom steder
            betyr stopp i drift eller tapte inntekter.
          </p>
        </div>
      </section>

      {/* Hva er leide linjer */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Hva er forskjellen på leide linjer og bedriftsfiber?
          </h2>
          <div className="space-y-4 text-base text-muted-foreground md:text-lg">
            <p>
              En bedriftsfiberlinje er internettforbindelsen inn til kontoret.
              En leid linje er noe annet. Det er en fast forbindelse mellom to
              bestemte steder, for eksempel mellom hovedkontor og datasenter,
              eller mellom to kontorer i samme kjede.
            </p>
            <p>
              Med leide linjer reserveres kapasiteten mellom endepunktene.
              Trafikken går ikke «ut på internett» på samme måte, men følger en
              fast rute mellom lokasjonene. Det gir mer forutsigbar forsinkelse
              og kontroll, og er nyttig når dere har kritiske interne systemer
              som må snakke sammen hele tiden.
            </p>
            <p>
              Løsningen kan brukes både alene og sammen med vanlig
              bedriftsinternett og VPN. Ofte kombinerer vi leide linjer med
              ordinær fiber og ruting som automatisk tar over hvis en av
              forbindelsene faller ned.
            </p>
          </div>
        </div>
      </section>

      {/* Fordeler */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Hva får du med leide linjer fra SignalNord?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Zap className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Fast kapasitet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Kapasitet reservert mellom to steder. Ingen deling med ukjente
                  andre og mer forutsigbar oppførsel, uansett tidspunkt på døgnet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Lav og stabil forsinkelse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Viktig for replikeringsløsninger, databaser, sanntidsdata og
                  applikasjoner som ikke tåler hakk, jitter og spikes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Mer kontroll på trafikken</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Trafikken går i en definert løype mellom lokasjoner. Vi kan
                  kombinere med kryptering, segmentering og klare regler for hva
                  som får lov til å gå hvor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Priser */}
      <section id="priser" className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Priseksempler på leide linjer
          </h2>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Pris avhenger av avstand, kapasitet, teknologi og hvor linjene skal
            terminere. Under er typiske nivåer vi ofte ser i praksis.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Kontor ↔ kontor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>To kontorer i samme by eller region.</p>
                <p className="font-semibold">Typisk kapasitet</p>
                <p>100–500 Mbit/s</p>
                <p className="font-semibold">Prisnivå</p>
                <p className="text-lg font-bold text-foreground">
                  Fra ca. 8.990 kr/mnd
                </p>
                <p className="text-xs">
                  Faktisk pris styres av avstand og tilgjengelig infrastruktur.
                </p>
                <p>
                  Brukes ofte for å samle to kontorer i ett felles nettverk med
                  felles tjenester og sikkerhet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kontor ↔ datasenter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>For virksomheter med sentrale systemer i datasenter.</p>
                <p className="font-semibold">Typisk kapasitet</p>
                <p>500 Mbit/s – 1 Gbit/s</p>
                <p className="font-semibold">Prisnivå</p>
                <p className="text-lg font-bold text-foreground">
                  Fra ca. 12.990 kr/mnd
                </p>
                <p className="text-xs">
                  Avhenger av datasenterlokasjon og tekniske krav.
                </p>
                <p>
                  Typisk når ERP, databaser eller kritiske systemer står
                  sentralt og ansatte må ha jevn og rask tilgang.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Redundant og kritisk samband</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>For virksomheter der nedetid ikke er akseptabelt.</p>
                <p className="font-semibold">Typisk kapasitet</p>
                <p>1 Gbit/s og oppover, ofte med flere føringer.</p>
                <p className="font-semibold">Prisnivå</p>
                <p className="text-lg font-bold text-foreground">
                  Fra ca. 17.990 kr/mnd
                </p>
                <p className="text-xs">
                  Normalt basert på skreddersydd design og krav til redundans.
                </p>
                <p>
                  For kritiske miljøer der både kapasitet og tilgjengelighet må
                  være på plass, ofte kombinert med vanlig bedriftsfiber.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Prisene er kun eksempler. Vi henter alltid konkrete priser mot
            lokasjonene deres før tilbud, og beskriver tydelig hva som inngår.
          </p>
        </div>
      </section>

      {/* Typiske bruksområder */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Når gir leide linjer mest mening?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Server className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Sentral drift i datasenter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Når applikasjoner og databaser står i datasenter, og ansatte
                  må ha rask og stabil tilgang fra kontorene sine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Hovedkontor med filialer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Når dere vil samle flere kontorer i ett sammenhengende
                  nettverk, med felles tjenester og sentrale sikkerhetsløsninger.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Factory className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Kritiske produksjonsmiljøer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Når produksjon, logistikk eller andre systemer må ha stabil
                  forbindelse til styringssystemer sentralt, uten rom for «litt tregt».
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prosess */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Hvordan går vi frem i praksis?
          </h2>
          <div className="space-y-4 text-base text-muted-foreground md:text-lg">
            <p>
              Leide linjer henger tett sammen med resten av nettverket deres.
              Derfor starter vi ikke med å kaste hastigheter og priser, men med
              å forstå hvordan lokasjonene henger sammen i dag, og hva som er
              viktigst å få til.
            </p>
            <p>Typisk gjennomfører vi dette i tre steg:</p>
            <ul className="list-disc space-y-2 pl-5 text-sm md:text-base">
              <li>
                vi kartlegger dagens oppsett og trafikk mellom lokasjoner,
                inkludert eksisterende linjer og ruting
              </li>
              <li>
                vi foreslår kapasitet, design og eventuell redundans, basert på
                risiko, behov og budsjett
              </li>
              <li>
                vi innhenter faktiske linjepriser og setter opp et konkret
                tilbud med tydelig ansvarsdeling
              </li>
            </ul>
            <p>
              Målet er at du skal sitte igjen med en løsning som er forståelig,
              og hvor det er tydelig hvem som har ansvar når noe ikke virker som
              det skal.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
