// src/app/om-oss/page.tsx
import type { Metadata } from 'next'
import { Shield, Globe2, Users, Network, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { CTASection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Om oss – SignalNord | Nettverk og drift for norske bedrifter',
  description:
    'SignalNord er et norsk selskap som leverer bedriftsfiber, leide linjer, VPN og drift av nettverk for små og mellomstore virksomheter. Én leverandør som tar ansvar for helheten.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container section-spacing">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Om SignalNord
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Nettverk som bare skal fungere
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              SignalNord er et norsk teknologiselskap som leverer bedriftsfiber,
              leide linjer, VPN og drift av nettverk for små og mellomstore
              virksomheter. Målet vårt er å gi bedrifter et stabilt og
              forutsigbart digitalt fundament – slik at ansatte kan jobbe uten
              å tenke på nettet.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/kontakt">Ta kontakt med oss</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/managed-connectivity">
                  Se hvordan vi jobber med drift
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem og hvorfor vi finnes */}
      <section className="bg-muted/40">
        <div className="container section-spacing">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[3fr,2fr] md:items-start">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Hvorfor startet vi SignalNord?
              </h2>
              <div className="space-y-4 text-base text-muted-foreground md:text-lg">
                <p>
                  I mange virksomheter er internett like kritisk som strøm.
                  Likevel er det vanlig at fiber, brannmur, trådløst og drift
                  leveres av ulike aktører. Når noe svikter, blir feilsøking
                  langtekkelig og ansvaret uklart.
                </p>
                <p>
                  Én leverandør peker på linja, en annen på brannmuren, en tredje
                  på «skyen». IT-ansvarlig står i midten og må holde trådene
                  samlet, ofte uten full innsikt eller tid til å følge opp alt.
                </p>
                <p>
                  SignalNord ble etablert for å løse nettopp dette: vi skal være
                  en partner som tar helhetsansvar for linje, nettverk og drift –
                  ikke bare en som selger en boks eller en kabel.
                </p>
              </div>
            </div>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Hva vi faktisk gjør annerledes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>Vi kombinerer:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-[2px] h-4 w-4 text-primary" />
                    <span>Linje (bedriftsfiber og leide linjer)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-[2px] h-4 w-4 text-primary" />
                    <span>Nettverk (brannmur, WiFi, segmentering, VPN)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-[2px] h-4 w-4 text-primary" />
                    <span>Drift og overvåking med tydelig eierskap</span>
                  </li>
                </ul>
                <p className="pt-2">
                  Resultatet er færre avbrudd, raskere håndtering når noe skjer
                  og én part som faktisk har ansvar for helheten.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Norsk selskap / verdier */}
      <section>
        <div className="container section-spacing">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Globe2 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Norsk selskap, norsk support</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Vi er et norsk selskap med kunder i Norge og løsninger
                  tilpasset norske forhold. Du får snakke med fagpersoner som
                  kjenner infrastrukturen, teknologien og språket – ikke et
                  generisk callsenter.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Network className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Designet for moderne arbeidshverdag</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Ansatte jobber fra kontor, hjemmekontor, lager og på farten.
                  Vi bygger nettverk som tåler denne virkeligheten – med god
                  kapasitet, trygg fjernaksess og løsninger som kan vokse med
                  virksomheten.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Sikkerhet og NIS2 i praksis</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Vi hjelper bedrifter med å styrke nettverkssikkerhet, tilgang,
                  logging og hendelseshåndtering. Mye av grunnarbeidet rundt NIS2
                  starter nettopp i infrastrukturen – der har vi tyngden.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofi / prinsipper */}
      <section className="bg-muted/40">
        <div className="container section-spacing">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Filosofien bak løsningene våre
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="mb-2 text-base font-semibold">
                  1. Stabilitet skaper verdi
                </h3>
                <p className="text-sm text-muted-foreground">
                  Når nettet fungerer, fungerer arbeidsdagen. Vi prioriterer
                  stabilitet, forutsigbarhet og tydelig design foran unødvendig
                  kompleksitet.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold">
                  2. Tydelig ansvar reduserer risiko
                </h3>
                <p className="text-sm text-muted-foreground">
                  Esset i ermet vårt er helhetsansvar. Når vi både leverer linje
                  og drifter nettverket, slipper du ansvarsfraskrivelse og
                  tidkrevende feilsøking mellom flere leverandører.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold">
                  3. Enkelt er bedre enn unødvendig komplisert
                </h3>
                <p className="text-sm text-muted-foreground">
                  Kompleksitet er en fiende av både sikkerhet og drift. Vi
                  dokumenterer, forenkler og bygger løsninger som er til å leve
                  med – ikke bare imponerende på papiret.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hvem vi passer for */}
      <section>
        <div className="container section-spacing">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Hvem passer SignalNord best for?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Users className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>SMB med én IT-ansvarlig</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Virksomheter der én person har ansvar for «alt som har med IT
                  å gjøre», og trenger en partner som tar eierskap til nettverk
                  og drift – uten å gjøre alt mer komplisert.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Globe2 className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Flere lokasjoner og skyavhengighet</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Bedrifter med flere kontorer, lager eller butikker, hvor
                  systemene er flyttet til skyen og stabil tilgang er
                  forretningskritisk.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>Virksomheter med sikkerhetskrav</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Bedrifter som må ta høyde for NIS2, kundekrav eller strengere
                  sikkerhet rundt infrastruktur, tilgang og drift – uten å
                  bygge en stor intern sikkerhetsavdeling.
                </CardContent>
              </Card>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Har dere allerede et stort internt nettverksteam som ønsker å gjøre
              alt selv, er vi kanskje mindre relevante. For alle andre som
              ønsker en partner som tar ansvar – der passer vi godt inn.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
