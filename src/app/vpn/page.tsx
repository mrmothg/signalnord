// src/app/vpn/page.tsx
import type { Metadata } from 'next'
import {
  Shield,
  Users,
  Globe2,
  Home,
  Building2,
  Lock,
} from 'lucide-react'
import Link from 'next/link'
import { CTASection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title:
    'VPN for bedrifter – sikre forbindelser mellom folk og systemer | SignalNord',
  description:
    'VPN-løsninger for sikre forbindelser mellom kontorer, hjemmekontor, lager og skytjenester. Vi designer, setter opp og drifter VPN for norske virksomheter.',
}

export default function VpnPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            VPN for bedrifter som vil ha trygg tilgang
          </h1>
          <p className="text-2xl md:text-[1.6rem] text-muted-foreground mb-4">
            VPN handler ikke bare om hjemmekontor. Det handler om å gi riktige
            folk riktig tilgang til systemene deres, uansett hvor de sitter.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Samtidig slipper dere å åpne mer av miljøet mot internett enn
            nødvendig, og dere får bedre kontroll på hvem som er inne når.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/kontakt">Snakk med oss om VPN</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#priser">Se priseksempler</Link>
            </Button>
          </div>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Vi hjelper med både site-to-site VPN mellom lokasjoner og
            fjernaksess for ansatte og leverandører.
          </p>
        </div>
      </section>

      {/* Hva er VPN i praksis? */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hva betyr VPN i en norsk bedrifts­hverdag?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              I praksis betyr VPN at dere kan koble kontorer, lager,
              hjemmekontor og skytjenester sammen på en trygg måte. Ansatte får
              tilgang til det de trenger, men ikke mer enn det, og trafikken er
              kryptert hele veien.
            </p>
            <br>
            </br>
            <p>
              For mange starter det med at noen trenger tilgang fra hjemmekontor.
              Etter hvert dukker det opp midlertidige løsninger, åpne porter og
              brukere som har mer tilgang enn de egentlig skulle hatt. Til slutt
              er det ingen som helt har oversikt.
            </p>
            <br>
            </br>
            <p>
              Da er det på tide å gjøre det skikkelig. Vi legger VPN som en del
              av hele nettverksdesignet, ikke som noe som er “skrudd på” i
              etterkant. Det gjør det enklere å styre tilganger, logge hva som
              skjer og forklare oppsettet både til IT-ansvarlig og ledelse.
            </p>
          </div>
        </div>
      </section>

      {/* Typer VPN vi hjelper med */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Building2 className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Site-to-site VPN</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Faste forbindelser mellom kontorer, lager og datasenter. For
                brukerne føles det som om alle sitter på samme nett, selv om
                lokasjonene er fordelt.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Home className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Fjernaksess for ansatte</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                Trygg tilgang fra hjemmekontor, reise eller kundelokasjon.
                Brukeren logger inn og får tilgang til det som hører til rollen
                – ikke hele miljøet.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe2 className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Hybrid og sky</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">
                VPN satt opp mot skyleverandører eller tredjepartssystemer, slik
                at trafikken mellom dere og dem er kontrollert, kryptert og
                loggbar.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Priser */}
      <section id="priser" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Priseksempler på VPN-løsninger
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Pris avhenger av antall brukere, lokasjoner, utstyr og om vi også
            skal ta drift og overvåking. Under er noen typiske nivåer som gir en
            pekepinn.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Enkel fjernaksess</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">
                  For én lokasjon og et mindre antall brukere.
                </p>
                <p className="font-semibold mb-1">Typisk omfang</p>
                <p className="text-base text-muted-foreground mb-3">
                  VPN for 10–25 ansatte, én brannmur og grunnleggende
                  tilgangsstyring.
                </p>
                <p className="font-semibold mb-1">Prisnivå</p>
                <p className="text-lg font-bold mb-1">Fra ca. 1.490 kr/mnd</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Forutsetter støttet brannmur fra før. Hvis ikke, kommer
                  utstyr i tillegg.
                </p>
                <p className="text-sm text-muted-foreground">
                  Passer for klassisk kontorbedrift med behov for trygg, enkel
                  tilgang til interne systemer og fellesområder.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Flere kontorer og lager</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">
                  Når flere fysiske lokasjoner skal henge sammen.
                </p>
                <p className="font-semibold mb-1">Typisk omfang</p>
                <p className="text-base text-muted-foreground mb-3">
                  Site-to-site VPN mellom 2–5 lokasjoner, fjernaksess for
                  20–50 brukere og enkel segmentering mellom ulike miljøer.
                </p>
                <p className="font-semibold mb-1">Prisnivå</p>
                <p className="text-lg font-bold mb-1">Fra ca. 3.990 kr/mnd</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Avhenger av antall lokasjoner, krav til oppetid og utstyr.
                </p>
                <p className="text-sm text-muted-foreground">
                  Typisk for kjeder, lager og bedrifter med hovedkontor og
                  avdelinger som skal oppføre seg som ett nett.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Utvidet sikkerhet og logging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">
                  Når VPN også må tåle revisjon og sikkerhetskrav.
                </p>
                <p className="font-semibold mb-1">Typisk omfang</p>
                <p className="text-base text-muted-foreground mb-3">
                  Rollebasert tilgang, integrasjon mot AD/Entra, sentral
                  logging og tydelig skille mellom brukere og leverandører.
                </p>
                <p className="font-semibold mb-1">Prisnivå</p>
                <p className="text-lg font-bold mb-1">Fra ca. 5.990 kr/mnd</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Krever mer designarbeid og kartlegging i forkant.
                </p>
                <p className="text-sm text-muted-foreground">
                  Passer for virksomheter med tydelige krav fra ledelse, styre
                  eller kunder, der feil tilganger kan få større konsekvenser.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Prisene er eksempler. Vi avklarer alltid faktisk omfang og innhenter
            konkrete priser før vi gir tilbud.
          </p>
        </div>
      </section>

      {/* Hvem passer VPN-løsningene for? */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Når bør dere ta VPN på alvor?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Mye hjemmekontor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Når mange jobber hjemmefra og dere vil bort fra tilfeldige
                  løsninger, åpne porter og “midlertidige” oppsett som aldri
                  ble ryddet opp i.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Krav til tilgangskontroll</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Når det faktisk har betydning hvem som kommer inn hvor, og
                  dere må kunne vise hvordan tilganger er satt opp, for eksempel
                  overfor ledelse eller revisjon.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Leverandører og eksterne</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Når eksterne konsulenter, leverandører eller partnere skal inn
                  i miljøet deres, men dere ikke vil åpne mer enn nødvendig
                  mot internett.
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
            Slik jobber vi med VPN-prosjekter
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Mye trøbbel med VPN kommer av at det aldri har vært ordentlig
              designet. Løsningen har blitt bygget bit for bit, ofte under tidspress,
              og ingen har tatt seg tid til å se helheten.
            </p>
            <br>
            </br>
            <p>Derfor starter vi med å rydde i kartet før vi tegner noe nytt.</p>
            <br>
            </br>
            <p>Typisk går vi gjennom tre steg:</p>
            <ul>
              <li>- kartlegger hvem som trenger tilgang til hva, og fra hvor</li>
              <li>- lager et enkelt og forståelig design med tydelige soner</li>
              <li>- implementerer, tester og dokumenterer oppsettet</li>
            </ul>
            <br>
            </br>
            <p>
              Etterpå kan vi enten overlate daglig drift til dere, eller ta det
              inn i en driftsavtale der vi følger med på løsningene, hjelper med
              nye brukere og justerer ved behov.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
