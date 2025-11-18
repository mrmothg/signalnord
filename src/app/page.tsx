// src/app/page.tsx
import type { Metadata } from 'next'
import { ArrowRight, Shield, Zap, Users, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CTASection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bedriftsnett og fiber for norske virksomheter | SignalNord',
  description:
    'Stabilt internett, bedriftsfiber, VPN og drift av nettverk – alt levert og overvåket av ett norsk team.',
}


export default function HomePage() {
  return (
    <>
      {/* Hero Section med bilde */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-stretch">
            {/* Tekst */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Stabilt internett og nettverk for norske bedrifter
              </h1>
              <p className="mb-8 text-2xl text-muted-foreground md:text-[1.6rem]">
                Vi hjelper bedrifter som er lei av ustabilt nett, uklart ansvar
                og evig feilsøking. Med SignalNord får du både linje og nettverk
                fulgt opp av samme team.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/kontakt">
                    Få et forslag på løsning <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/managed-connectivity">Se hvordan vi jobber</Link>
                </Button>
              </div>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                For små og mellomstore virksomheter der nettet bare må fungere.
              </p>
            </div>

            {/* Bilde */}
            <div className="w-full flex-1">
              <div className="relative mx-auto h-64 max-w-md overflow-hidden rounded-2xl border bg-muted md:h-80 lg:h-full">
                <Image
                  src="/hero-network.png"
                  alt="Abstrakt nettverksillustrasjon"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester – kort og konkret */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Vi tar ansvar for hele bedriftsnettet ditt
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              Mange har én leverandør på linje, én på brannmur og én konsulent på toppen.
              Da blir det fort uklart hvem som faktisk har ansvaret når noe stopper opp.
              Vi samler alt i én løsning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <Zap className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Bedriftsfiber</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-base text-muted-foreground">
                  Stabil linje inn til kontoret med symmetrisk hastighet og
                  oppsett tilpasset bedriften.
                </p>
                <p className="text-lg font-bold">Fra 2.990 kr/mnd</p>
                <Link
                  href="/fiber"
                  className="text-sm text-primary hover:underline"
                >
                  Les mer om bedriftsfiber
                </Link>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <Shield className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Leide linjer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-base text-muted-foreground">
                  Dedikert forbindelse mellom lokasjoner eller mot datasenter
                  der stopp ikke er akseptabelt.
                </p>
                <p className="text-lg font-bold">Fra 8.990 kr/mnd</p>
                <Link
                  href="/leide-linjer"
                  className="text-sm text-primary hover:underline"
                >
                  Les mer om leide linjer
                </Link>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <Users className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>VPN for ansatte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-base text-muted-foreground">
                  Trygg tilgang for kontor, lager og hjemmekontor. Vi sørger for at
                  riktig person kommer inn på riktig måte.
                </p>
                <p className="text-lg font-bold">Fra 1.490 kr/mnd</p>
                <Link
                  href="/vpn"
                  className="text-sm text-primary hover:underline"
                >
                  Les mer om VPN
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary transition-shadow hover:shadow-lg">
              <CardHeader>
                <TrendingUp className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Drift & overvåking (MSP)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-base text-muted-foreground">
                  Vi tar daglig drift av nettverket, følger med på linjer og utstyr
                  og hjelper deg når noe stopper opp.
                </p>
                <p className="text-lg font-bold">Skreddersydd pris</p>
                <Link
                  href="/managed-connectivity"
                  className="text-sm text-primary hover:underline"
                >
                  Les mer om drift & overvåking
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Om SignalNord – hvem vi er */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
              Hvem er SignalNord?
            </h2>
            <div className="space-y-4 text-base text-muted-foreground md:text-lg">
              <p>
                SignalNord er startet av folk som har sittet på innsiden av IT-avdelinger
                og dratt kabel selv. Vi vet hvordan det føles når nettet faller ned
                midt i en viktig arbeidsdag, mens alle peker på hverandre:
                “det er sikkert skyen”, “det er brannmuren”, “leverandøren sier at linjen er fin”.
              </p>
              <p>
                Vi bygger tjenestene våre rundt én tanke: noen må ta helhetsansvaret.
                For deg betyr det at du slipper å være koordinator mellom flere
                leverandører når noe skjer. Du får et konkret navn og nummer
                å forholde deg til.
              </p>
              <p>
                Vi er norske, vi kjenner regelverket og vi vet at mange bedrifter har
                én person som håndterer alt fra printere til sikkerhet. Løsningene våre
                er derfor laget for å være forståelige, ikke bare for de som lever og
                ånder for nettverk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Passer vi for dere? */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
            Passer SignalNord for din bedrift?
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-muted-foreground md:text-xl">
            Vi passer best for bedrifter som ser på nettet som en del av selve
            arbeidsplassen, ikke bare en kostnadspost.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Én IT-ansvarlig</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground md:text-lg">
                  Du har ansvaret for “alt som har med IT å gjøre” og trenger en
                  partner som kan ta seg av nettverket uten å gjøre alt komplisert.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Flere lokasjoner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground md:text-lg">
                  Dere har kontor, lager eller butikker flere steder, og ansatte
                  forventer at ting fungerer likt overalt.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avhengig av sky og internett</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground md:text-lg">
                  Fagsystemer, økonomi og dokumenter ligger på nett. Når linjen
                  faller ned, stopper arbeidsdagen. Det er ikke greit.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center text-base text-muted-foreground md:text-lg">
            <p className="mb-1 font-medium">Kanskje mindre aktuelt hvis</p>
            <p>
              dere kun trenger en enkel linje uten krav til oppetid,
              eller allerede har et eget nettverksteam som vil gjøre alt selv.
            </p>
          </div>
        </div>
      </section>

      {/* Slik jobber vi */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Slik ser et samarbeid typisk ut
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Kartlegging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground md:text-lg">
                  Vi går gjennom dagens linjer og utstyr sammen med deg, og ser
                  på hvor det pleier å stoppe opp.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Forslag du kan bruke internt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground md:text-lg">
                  Du får et konkret forslag på løsning og pris, skrevet så det kan
                  legges rett i en e-post til ledelsen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gjennomføring og oppfølging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground md:text-lg">
                  Vi setter opp, dokumenterer og kobler på overvåking. Etterpå
                  har du én partner å snakke med om nettverket.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Typiske problemer vi rydder opp i */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
            Ting kundene våre er lei av
          </h2>
          <div className="space-y-4 text-base text-muted-foreground md:text-lg">
            <p>
              Når vi snakker med nye kunder, går mye igjen. Det handler sjelden
              om avansert teknologi, men om helt vanlige ting som bare aldri
              har blitt løst skikkelig.
            </p>
            <p>
              Vi møter ofte bedrifter som har hatt ustabilt nett i årevis, uten at
              noen har tatt seg tid til å finne den egentlige årsaken. Det kan være
              feil kapasitet, gammelt utstyr, feil plasserte aksesspunkter eller
              helt enkelt manglende eierskap.
            </p>
            <p>
              Vi ser også ofte at ingen helt vet hvem som har ansvar for hva.
              Linjeleverandør skylder på brannmuren, driftsleverandør skylder på
              linja, og IT-ansvarlig sitter i midten og blir bedt om å “sjekke litt til”.
            </p>
            <p>
              Her ønsker vi å være tydelige: vår rolle er å faktisk ta tak i disse
              tingene, rydde opp og stå i det sammen med deg. Ikke bare selge
              enda en boks.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
