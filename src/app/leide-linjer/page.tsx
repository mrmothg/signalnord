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
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Leide linjer mellom kontor og datasenter
          </h1>
          <p className="text-2xl md:text-[1.6rem] text-muted-foreground mb-6">
            Leide linjer brukes når forbindelsen mellom to steder er så viktig
            at den ikke kan være “best effort”. Du får fast kapasitet mellom
            lokasjoner, lav forsinkelse og en linje som ikke er delt med alle andre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/kontakt">Diskuter behov for leide linjer</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#priser">Se priseksempler</Link>
            </Button>
          </div>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Passer for virksomheter der stopp i kommunikasjon mellom steder
            betyr stopp i drift eller tapte inntekter.
          </p>
        </div>
      </section>

      {/* Hva er leide linjer, egentlig? */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hva er forskjellen på leide linjer og bedriftsfiber?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              En bedriftsfiberlinje er internettforbindelsen inn til kontoret.
              En leid linje er noe annet. Det er en fast forbindelse mellom to
              bestemte steder, for eksempel mellom hovedkontor og datasenter,
              eller mellom to kontorer.
            </p>
            <p>
              Med leide linjer reserveres kapasiteten mellom endepunktene.
              Trafikken går ikke “ut på internett” på samme måte, men følger en
              fast rute mellom lokasjonene. Det gir mer forutsigbar
              forsinkelse og kontroll, og er nyttig når dere har kritiske
              interne systemer som må snakke sammen hele tiden.
            </p>
            <p>
              Løsningen kan brukes både alene, og sammen med vanlig
              bedriftsinternett og VPN. Ofte kombinerer vi leide linjer med
              vanlig fiber og ruting som automatisk tar over hvis en av
              forbindelsene faller ned.
            </p>
          </div>
        </div>
      </section>

      {/* Fordeler */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Fast kapasitet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Kapasitet reservert mellom to steder. Ingen deling med ukjente
                andre og mer forutsigbar oppførsel.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Lav og stabil forsinkelse</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Viktig for replikeringsløsninger, databaser, sanntidsdata og
                applikasjoner som ikke tåler hakk og spikes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Mer kontroll på trafikken</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Trafikken går i en definert løype mellom lokasjoner. Vi kan
                kombinere med kryptering, segmentering og klare regler for hva
                som får lov å gå hvor.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Priser */}
      <section id="priser" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Priseksempler på leide linjer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Pris avhenger av avstand, kapasitet, teknologi og hvor linjene skal
            terminere. Under er typiske nivåer vi ofte ser i praksis.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Kontor ↔ kontor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">
                  To kontorer i samme by eller region.
                </p>
                <p className="font-semibold mb-1">Typisk kapasitet</p>
                <p className="text-base text-muted-foreground mb-3">
                  100–500 Mbit/s
                </p>
                <p className="font-semibold mb-1">Prisnivå</p>
                <p className="text-lg font-bold mb-1">Fra ca. 8.990 kr/mnd</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Faktisk pris styres av avstand og tilgjengelig infrastruktur.
                </p>
                <p className="text-sm text-muted-foreground">
                  Brukes ofte for å samle to kontorer i ett felles nettverk
                  med felles tjenester og sikkerhet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kontor ↔ datasenter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">
                  For virksomheter med sentrale systemer i datasenter.
                </p>
                <p className="font-semibold mb-1">Typisk kapasitet</p>
                <p className="text-base text-muted-foreground mb-3">
                  500 Mbit/s – 1 Gbit/s
                </p>
                <p className="font-semibold mb-1">Prisnivå</p>
                <p className="text-lg font-bold mb-1">Fra ca. 12.990 kr/mnd</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Avhenger av datasenterlokasjon og tekniske krav.
                </p>
                <p className="text-sm text-muted-foreground">
                  Typisk når ERP, databaser eller kritiske systemer står
                  sentralt og ansatte må ha jevn og rask tilgang.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Redundant og kritisk samband</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">
                  For virksomheter der nedetid ikke er akseptabelt.
                </p>
                <p className="font-semibold mb-1">Typisk kapasitet</p>
                <p className="text-base text-muted-foreground mb-3">
                  1 Gbit/s og oppover, ofte med flere føringer.
                </p>
                <p className="font-semibold mb-1">Prisnivå</p>
                <p className="text-lg font-bold mb-1">Fra ca. 17.990 kr/mnd</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Normalt basert på skreddersydd design og krav til redundans.
                </p>
                <p className="text-sm text-muted-foreground">
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
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Når gir leide linjer mest mening?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Server className="h-8 w-8 text-primary mb-2" />
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
                <Building2 className="h-8 w-8 text-primary mb-2" />
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
                <Factory className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Kritiske produksjonsmiljøer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Når produksjon, logistikk eller andre systemer må ha stabil
                  forbindelse til styringssystemer sentralt, uten rom for “litt tregt”.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Prosess */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hvordan går vi frem i praksis?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Leide linjer henger tett sammen med resten av nettverket deres.
              Derfor starter vi ikke med å kaste hastigheter og priser, men med
              å forstå hvordan lokasjonene henger sammen i dag, og hva som er
              viktigst å få til.
            </p>
            <p>Typisk gjør vi dette i tre steg:</p>
            <ul>
              <li>kartlegger dagens oppsett og trafikk mellom lokasjoner</li>
              <li>foreslår kapasitet, design og eventuell redundans</li>
              <li>innhenter faktiske linjepriser og setter opp et konkret tilbud</li>
            </ul>
            <p>
              Du skal sitte igjen med en løsning som er forståelig, og hvor det
              er tydelig hvem som har ansvar når noe ikke virker som det skal.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
