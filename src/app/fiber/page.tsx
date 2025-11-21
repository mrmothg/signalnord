// src/app/fiber/page.tsx
import type { Metadata } from 'next'
import { Zap, Shield, Clock } from 'lucide-react'
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
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Bedriftsfiber som bare virker
          </h1>
          <p className="mb-6 text-2xl text-muted-foreground md:text-[1.6rem]">
            Bedriftsfiber er grunnmuren i den digitale hverdagen. Vi leverer
            stabilt internett med hastighet og oppsett tilpasset bedriften,
            slik at ansatte kan jobbe uten å tenke på linjen i det hele tatt.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/kontakt">Be om tilbud på bedriftsfiber</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#priser">Se priseksempler</Link>
            </Button>
          </div>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Passer for små og mellomstore virksomheter som er avhengige av at
            internett fungerer hver eneste arbeidsdag.
          </p>
        </div>
      </section>

      {/* Hvorfor bedriftsfiber */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Hvorfor bedriftsfiber – ikke bare “vanlig” fiber?
          </h2>
          <div className="space-y-4 text-base text-muted-foreground md:text-lg">
            <p>
              Mange starter med en privatlinje eller en enkel fiberavtale. Det
              fungerer så lenge man mest surfer og sender e-post, men etter hvert
              som flere systemer flyttes til skyen, merker man begrensningene:
              hakking i møter, ustabil ytelse og support som sier at «alt ser fint
              ut herfra».
            </p>
            <p>
              Bedriftsfiber er laget for virksomheter som er avhengige av nettet
              for å få gjort jobben sin. Kapasiteten er symmetrisk, så opplasting
              går like raskt som nedlasting. Det er viktig når dere bruker
              skyløsninger, kjører backup, jobber i felles dokumenter og har mange
              videomøter i løpet av dagen.
            </p>
            <p>
              I tillegg ser vi på linjen og nettverket som én helhet. Vi tilpasser
              brannmur, rutere, WiFi og eventuelle VPN-løsninger, slik at dere
              slipper å være koordinator mellom flere leverandører når noe
              oppfører seg rart.
            </p>
          </div>
        </div>
      </section>

      {/* Pain → løsning → resultat */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Fra ustabilt nett til forutsigbar arbeidsdag
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Utfordringen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Typiske problemer vi møter hos nye kunder:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>hakking i Teams og videomøter</li>
                  <li>treg tilgang til skybaserte systemer</li>
                  <li>ustabilt nett og diffuse feil</li>
                  <li>ingen tydelig ansvarlig når noe faller ned</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Løsningen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Profesjonell bedriftsfiber med:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>symmetrisk kapasitet fra 100 Mbit/s til 2 Gbit/s</li>
                  <li>ingen overbooking – linjen er reservert dere</li>
                  <li>oppsett tilpasset nettverk, VPN og WiFi</li>
                  <li>overvåking av linjen og utstyret rundt</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Resultatet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Hverdagen etter overgang til bedriftsfiber:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>møter og telefoni som bare fungerer</li>
                  <li>raskere systemer og mindre venting</li>
                  <li>færre avbrytelser i arbeidshverdagen</li>
                  <li>én partner som tar ansvar når noe skjer</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hva får du */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Hva får du med bedriftsfiber fra SignalNord?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-base text-muted-foreground">
              <p>
                Vi leverer ikke bare en linje, men en helhetlig løsning som
                skal vare over tid. Det betyr at vi ser på arbeidsflyt, antall
                brukere, skybruk og krav til oppetid før vi anbefaler noe som
                helst.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium">
                    Symmetrisk hastighet fra 100 Mbit/s til 2 Gbit/s
                  </span>{' '}
                  – like rask opplasting som nedlasting.
                </li>
                <li>
                  <span className="font-medium">Norsk support</span> – du får
                  folk som faktisk kan nettverk og forstår hverdagen din.
                </li>
                <li>
                  <span className="font-medium">SLA på oppetid og feilretting</span>{' '}
                  – forutsigbare rammer når noe først skjer.
                </li>
                <li>
                  <span className="font-medium">Proaktiv overvåking</span> – vi
                  følger med på linjen og varsler hvis noe ikke ser bra ut.
                </li>
                <li>
                  <span className="font-medium">Mulighet for redundans</span> –
                  to linjer eller ulike føringsveier der stopp ikke er akseptabelt.
                </li>
              </ul>
            </div>
            <div className="space-y-3 rounded-xl bg-muted/50 p-6 text-sm text-muted-foreground">
              <h3 className="text-lg font-semibold text-foreground">
                Eksempel på situasjoner vi designer for
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>kontor med mange samtidige Teams-møter</li>
                <li>bedrifter som kjører tunge skyløsninger og integrasjoner</li>
                <li>flere lokasjoner som synkroniserer data mot et hovedkontor</li>
                <li>lager og produksjon med systemer som alltid må være på</li>
              </ul>
              <p>
                Poenget er enkelt: linjen skal ikke være flaskehalsen. Når vi er
                ferdige, skal nettet være den kjedelige delen av infrastrukturen –
                det som bare virker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Priser */}
      <section id="priser" className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Priseksempler på bedriftsfiber
          </h2>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Pris avhenger blant annet av adresse, bygning og hvilken kapasitet
            dere trenger. Under ser du typiske nivåer vi ofte ender på i praksis.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Liten bedrift</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Opp til ca. 15–20 ansatte på samme kontor.</p>
                <p className="font-semibold">Typisk hastighet</p>
                <p>300/300 Mbit/s eller 500/500 Mbit/s</p>
                <p className="font-semibold">Prisnivå</p>
                <p className="text-lg font-bold text-foreground">
                  Fra ca. 2.990 kr/mnd
                </p>
                <p className="text-xs">
                  Eksakt pris avhenger av adresse og eventuell etablering.
                </p>
                <p>
                  For kontorer som bruker skyløsninger, felles dokumenter og
                  daglige videomøter, men ikke kjører tunge datajobber.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mellomstor bedrift</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Rundt 20–60 ansatte på samme lokasjon.</p>
                <p className="font-semibold">Typisk hastighet</p>
                <p>1/1 Gbit/s</p>
                <p className="font-semibold">Prisnivå</p>
                <p className="text-lg font-bold text-foreground">
                  Fra ca. 3.990 kr/mnd
                </p>
                <p className="text-xs">
                  Avhenger av lokasjon, bygning og krav til utstyr.
                </p>
                <p>
                  For virksomheter som er tungt avhengige av sky, integrasjoner
                  mot andre systemer og hyppig samarbeid på tvers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Større miljø / hovedkontor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Mer enn 60 ansatte, eller mye trafikk mot sky og andre lokasjoner.
                </p>
                <p className="font-semibold">Typisk hastighet</p>
                <p>1–2 Gbit/s</p>
                <p className="font-semibold">Prisnivå</p>
                <p className="text-lg font-bold text-foreground">
                  Fra ca. 5.990 kr/mnd
                </p>
                <p className="text-xs">
                  Krever ofte mer tilpasning – vi gir konkret tilbud.
                </p>
                <p>
                  For hovedkontor, datasenternære løsninger eller bedrifter med
                  mange tunge brukere og høye krav til oppetid.
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

      {/* Passer for / mindre aktuelt */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Passer bedriftsfiber for din bedrift?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Passer spesielt godt når</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>dere er avhengige av skybaserte systemer hver dag</li>
                  <li>ansatte har hyppige Teams- eller videomøter</li>
                  <li>dere samarbeider mye i felles dokumenter</li>
                  <li>flere lokasjoner synkroniserer data mot et hovedkontor</li>
                  <li>ustabilt nett har skapt frustrasjon over tid</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mindre aktuelt når</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>
                    dere kun trenger en enkel linje til lett bruk uten krav til
                    oppetid
                  </li>
                  <li>internett ikke er kritisk for drift eller inntekter</li>
                  <li>
                    dere allerede har et stort nettverksteam som vil gjøre alt selv
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ + prosess */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Vanlige spørsmål og hvordan vi jobber
          </h2>

          <div className="space-y-8 text-sm text-muted-foreground md:text-base">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Hva er egentlig bedriftsfiber?
              </h3>
              <p>
                Bedriftsfiber er en profesjonell fiberlinje med symmetrisk
                hastighet, SLA og stabilitet beregnet for virksomheter som er
                avhengige av internett i arbeidstiden – ikke bare til privat bruk.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Hvordan ser prosessen ut fra første kontakt?
              </h3>
              <p>
                Vi starter med en kort prat om dagens løsning og hvilke problemer
                dere opplever. Deretter innhenter vi konkrete priser mot adressen
                deres og setter opp et forslag som beskriver kapasitet, månedskost,
                eventuell etablering og anbefalt oppsett hos dere.
              </p>
              <p className="mt-2">
                Målet er at du skal kunne lese gjennom tilbudet og raskt se om det
                gir mening – uten å måtte oversette alt til “vanlig norsk” før du
                tar det videre internt.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Hvor raskt kan dere levere?
              </h3>
              <p>
                Typisk leveringstid er 2–6 uker, avhengig av bygning, føringsvei og
                lokale forhold. Vi avklarer forventet tidlig i prosessen.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Hva hvis vi senere trenger mer kapasitet?
              </h3>
              <p>
                De fleste løsninger kan skaleres opp uten nye føringer. Vi gjør en
                vurdering sammen med deg og justerer kapasiteten etter behov.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
