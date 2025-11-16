// src/app/fiber/page.tsx
import type { Metadata } from 'next'
import { Zap, Shield, Clock, Users } from 'lucide-react'
import Link from 'next/link'
import { CTASection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Bedriftsfiber – Stabilt internett for norske virksomheter | SignalNord',
  description:
    'Bedriftsfiber fra 100 Mbit/s til 2 Gbit/s med norsk oppfølging og overvåking. For bedrifter som er avhengige av stabil og rask linje mot internett og skytjenester.',
}

export default function FiberPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bedriftsfiber som bare virker
          </h1>
          <p className="text-2xl md:text-[1.6rem] text-muted-foreground mb-6">
            Bedriftsfiber er grunnmuren i den digitale hverdagen. Vi leverer
            stabilt internett med hastighet og oppsett tilpasset bedriften,
            slik at ansatte kan jobbe uten å tenke på linjen i det hele tatt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/kontakt">Be om tilbud på bedriftsfiber</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#priser">Se priseksempler</Link>
            </Button>
          </div>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Passer for små og mellomstore virksomheter som er avhengige av at
            internett fungerer hver eneste arbeidsdag.
          </p>
        </div>
      </section>

      {/* Hva skiller bedriftsfiber fra “vanlig” fiber? */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hva skiller bedriftsfiber fra “vanlig” fiber?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Mange starter med en privatlinje eller en enkel fiberavtale. Det
              fungerer så lenge man bare surfer litt og sender e-post, men
              etter hvert som flere systemer flyttes til skyen, merker man
              begrensningene: hakking i møter, ustabil ytelse og support som
              sier at “alt ser fint ut herfra”.
            </p>
            <p>
              Bedriftsfiber er laget for virksomheter som er avhengige av nettet
              for å få gjort jobben sin. Kapasiteten er symmetrisk, så
              opplasting går like raskt som nedlasting. Det er viktig når dere
              bruker skyløsninger, kjører backup, jobber i felles dokumenter og
              har mange videomøter.
            </p>
            <p>
              I tillegg ser vi på linjen og nettverket som én helhet. Vi
              tilpasser router/brannmur, WiFi og eventuelle VPN-løsninger, slik
              at dere slipper å feilsøke alt selv når noe oppfører seg rart.
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
              <CardTitle>Riktig kapasitet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Fra 100 Mbit/s til 2 Gbit/s. Vi anbefaler hastighet basert på
                antall ansatte og hvordan dere faktisk jobber, ikke bare et
                tilfeldig tall.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Bygget for bedrift</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Linjen settes opp sammen med brannmur, VPN og eventuelle
                flere kontorer, slik at helheten fungerer – ikke bare kabelen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Forutsigbar hverdag</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Målet er at internett blir like kjedelig og stabilt som strøm:
                alltid der, uten diskusjon, og uten at du må jage leverandører.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Priser */}
      <section id="priser" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Priseksempler på bedriftsfiber
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Pris avhenger blant annet av adresse, bygning og hvilken kapasitet
            dere trenger. Under er typiske nivåer vi ofte ender på i praksis.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Liten bedrift</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">
                  Opp til ca. 15–20 ansatte på samme kontor.
                </p>
                <p className="font-semibold mb-1">Typisk hastighet</p>
                <p className="text-base text-muted-foreground mb-3">
                  300/300 Mbit/s eller 500/500 Mbit/s
                </p>
                <p className="font-semibold mb-1">Prisnivå</p>
                <p className="text-lg font-bold mb-1">Fra ca. 2.990 kr/mnd</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Eksakt pris avhenger av adresse og eventuell etablering.
                </p>
                <p className="text-sm text-muted-foreground">
                  For kontorer som bruker skyløsninger, felles dokumenter og
                  daglige videomøter, men ikke kjører tunge datajobber.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mellomstor bedrift</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">
                  Rundt 20–60 ansatte på samme lokasjon.
                </p>
                <p className="font-semibold mb-1">Typisk hastighet</p>
                <p className="text-base text-muted-foreground mb-3">
                  1/1 Gbit/s
                </p>
                <p className="font-semibold mb-1">Prisnivå</p>
                <p className="text-lg font-bold mb-1">Fra ca. 3.990 kr/mnd</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Avhenger av lokasjon, bygning og krav til utstyr.
                </p>
                <p className="text-sm text-muted-foreground">
                  For virksomheter som er tungt avhengige av sky, integrasjoner
                  mot andre systemer og hyppig samarbeid på tvers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Større miljø / hovedkontor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">
                  Mer enn 60 ansatte, eller mye trafikk mot sky og andre lokasjoner.
                </p>
                <p className="font-semibold mb-1">Typisk hastighet</p>
                <p className="text-base text-muted-foreground mb-3">
                  1–2 Gbit/s
                </p>
                <p className="font-semibold mb-1">Prisnivå</p>
                <p className="text-lg font-bold mb-1">Fra ca. 5.990 kr/mnd</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Krever ofte mer tilpasning, vi gir konkret tilbud.
                </p>
                <p className="text-sm text-muted-foreground">
                  For hovedkontor, datasenternære løsninger eller bedrifter med
                  mange tunge brukere og høy krav til oppetid.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Prisene over er kun eksempler. Vi innhenter alltid konkret pris mot
            lokasjon før tilbud, og avtaler tydelig hva som inngår.
          </p>
        </div>
      </section>

      {/* Hvem passer det for? */}
      <section id="typiske-bruksomrader" className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Typiske kunder som velger bedriftsfiber fra SignalNord
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Kontorbedrift</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Konsulenter, regnskap, byrå, advokat eller lignende, hvor
                  arbeidsdagen stopper når nettet stopper.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Butikk / kjede</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Butikker eller kjedekonsepter der betalingsterminaler,
                  kassesystemer og lager står og faller på stabil linje.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Produksjon og lager</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Lager og produksjonsmiljøer med integrasjoner mot ERP,
                  sensorer, maskiner og dashboards som alltid må være på.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prosess og forventninger */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hvordan ser prosessen ut?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Vi starter alltid med en kort prat om dagens løsning og hva dere
              opplever som utfordringer. Noen ganger holder det med å justere
              oppsettet rundt linjen. Andre ganger er det åpenbart at dere
              trenger mer kapasitet eller en annen type løsning.
            </p>
            <p>
              Når vi har forstått behovet, henter vi inn konkrete priser mot
              adressen deres og setter opp et enkelt forslag som beskriver:
            </p>
            <ul>
              <li>foreslått kapasitet og pris per måned</li>
              <li>eventuell etableringskostnad</li>
              <li>hvilket utstyr og oppsett vi anbefaler hos dere</li>
              <li>hvordan dette kan kombineres med VPN og videre drift</li>
            </ul>
            <p>
              Målet er at du skal kunne lese gjennom tilbudet og umiddelbart se
              om det gir mening, uten å måtte oversette alt til “vanlig norsk”
              før du tar det videre internt.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
