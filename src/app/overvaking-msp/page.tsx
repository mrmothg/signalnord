import type { Metadata } from 'next'
import {
  Activity,
  Bell,
  Shield,
  Server,
  Network,
  Wrench,
} from 'lucide-react'
import Link from 'next/link'
import { CTASection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Drift og overvåking av nettverk (MSP) | SignalNord',
  description:
    'Vi overvåker og drifter nettverket ditt – linjer, brannmurer, WiFi og VPN. For bedrifter som vil ha én partner som følger med, logger hendelser og tar ansvar når noe stopper opp.',
}

export default function OvervakingMspPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drift og overvåking av nettverk (MSP)
          </h1>
          <p className="mb-6 text-2xl text-muted-foreground md:text-[1.6rem]">
            Vi følger med på linjer, brannmurer, WiFi og VPN – og tar tak når
            noe er galt. Du får ett sted å forholde deg til for nettverk og
            hendelser, i stedet for å jage flere leverandører.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/kontakt">Snakk med oss om drift og overvåking</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#pakker">Se typiske pakker</Link>
            </Button>
          </div>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Passer for bedrifter som vil ha kontroll på nettverket, men som ikke
            har et eget nettverksteam internt.
          </p>
        </div>
      </section>

      {/* Hva mener vi med drift & overvåking? */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Hva innebærer drift og overvåking hos oss?
          </h2>
          <div className="space-y-4 text-base text-muted-foreground md:text-lg">
            <p>
              Mange sitter med nettverk som “bare har vokst frem”: litt eldre
              utstyr, litt nytt, noen midlertidige løsninger som ble permanente
              og dokumentasjon som lever i hodet til én person. Når noe går ned,
              starter jakten på feil – og ansvaret flyter mellom leverandører.
            </p>
            <p>
              Når vi tar ansvar for drift og overvåking, er poenget enkelt:
              noen skal eie nettverkslaget. Vi følger med på linjer og utstyr,
              logger hendelser, sier ifra når vi ser problemer og foreslår
              konkrete tiltak – i stedet for å vente til brukerne klager.
            </p>
            <p>
              Du får overvåkingsverktøy, varsling, faste rutiner og rapporter
              som er skrevet for mennesker, ikke bare for teknikere. Samtidig
              beholder du full kontroll på eierskap til utstyr og løsninger.
            </p>
          </div>
        </div>
      </section>

      {/* Hva inngår typisk */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Hva får du når vi drifter nettverket?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Activity className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Overvåking og varsling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Vi følger med på linjer, brannmurer, switcher og aksesspunkter.
                  Ved nedetid eller unormal last får vi varsel – og tar tak.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Endringer og vedlikehold</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Strukturert endringshåndtering, oppgraderinger, sikkerhetsfixer
                  og rydding. Ikke “hurtigfikser” som skaper nye problemer senere.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Tryggere hverdag</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Vi bygger inn logging, segmentering og tilgangskontroll slik
                  at nettverket ikke bare “virker”, men også tåler revisjon og
                  skjerpede krav som NIS2.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pakker / prisnivå */}
      <section id="pakker" className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Typiske nivåer for drift og overvåking
          </h2>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            Pris avhenger av antall lokasjoner, utstyr, kompleksitet og hvor mye
            ansvar vi skal ta. Under er typiske nivåer som gir en pekepinn.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Grunnpakke – ett kontor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Én lokasjon, moderat antall brukere.</p>
                <p className="font-semibold">Inkluderer</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Overvåking av linje og brannmur</li>
                  <li>Enkle varsler ved nedetid</li>
                  <li>Månedlig status på hendelser</li>
                </ul>
                <p className="font-semibold">Prisnivå</p>
                <p className="text-lg font-bold text-foreground">
                  Fra ca. 2.490 kr/mnd
                </p>
                <p className="text-xs">
                  Passer for mindre bedrifter som vil ha en tryggere hverdag
                  uten å bygge eget nettverksteam.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Flere lokasjoner / kjede</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Kontor + lager / butikker, eller flere kontorer.</p>
                <p className="font-semibold">Inkluderer</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Overvåking av linjer, brannmur og WiFi</li>
                  <li>Varsling ved nedetid og kapasitetsproblemer</li>
                  <li>Strukturert håndtering av endringer</li>
                  <li>Enkle rapporter til IT-ansvarlig / ledelse</li>
                </ul>
                <p className="font-semibold">Prisnivå</p>
                <p className="text-lg font-bold text-foreground">
                  Fra ca. 4.990 kr/mnd
                </p>
                <p className="text-xs">
                  Typisk for bedrifter med flere lokasjoner som vil ha lik
                  standard og sentral kontroll.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Utvidet – krav og revisjoner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>For miljøer med strengere krav til sikkerhet og sporbarhet.</p>
                <p className="font-semibold">Inkluderer</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Detaljert logging og hendelseshistorikk</li>
                  <li>Endringslogg med godkjenning og rutiner</li>
                  <li>Rapportering tilpasset NIS2 / revisjon</li>
                  <li>Tett kobling mot øvrig sikkerhetsarbeid</li>
                </ul>
                <p className="font-semibold">Prisnivå</p>
                <p className="text-lg font-bold text-foreground">
                  Fra ca. 7.990 kr/mnd
                </p>
                <p className="text-xs">
                  Ofte del av en større leveranse der vi også har ansvar for
                  design og videreutvikling av nettverket.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Prisene er eksempler. Vi gir alltid konkret tilbud basert på faktisk
            miljø, krav og ønsket ansvarsdeling.
          </p>
        </div>
      </section>

      {/* Passer / passer ikke */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Passer drift og overvåking fra SignalNord for dere?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Passer godt når</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc space-y-1 pl-5">
                  <li>én person har «alt av IT» som ansvarsområde</li>
                  <li>dere har flere lokasjoner og litt blandet utstyr</li>
                  <li>nedetid gir reelle kostnader eller irritasjon</li>
                  <li>dere ønsker bedre dokumentasjon og oversikt</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Passer kanskje mindre når</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <ul className="list-disc space-y-1 pl-5">
                  <li>dere allerede har eget nettverksteam som vil gjøre alt selv</li>
                  <li>nettverket oppleves som «uansett ikke kritisk»</li>
                  <li>dere kun ønsker en billig linje uten videre oppfølging</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hva overvåker vi konkret? */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Hva følger vi faktisk med på?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Network className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Linjer og nettverk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Oppetid, last, feil og svarstid på internettilkoblinger,
                  leide linjer og interne nettverk mellom lokasjoner.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Server className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Brannmurer og VPN</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Status på brannmurer, VPN-tunneler, lisensiering og
                  kritiske sikkerhetsoppdateringer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Bell className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Varsler og hendelser</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Alarmer ved nedetid, gjentatte feil, fulle porter eller andre
                  signaler på at noe bør tas før brukerne merker det.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prosess */}
      <section className="bg-muted/10 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Slik starter vi et samarbeid
          </h2>
          <div className="space-y-4 text-base text-muted-foreground md:text-lg">
            <p>Normalt går vi frem i tre enkle steg:</p>
            <ul className="list-disc space-y-2 pl-5 text-sm md:text-base">
              <li>
                <span className="font-medium">Kartlegging:</span> vi går gjennom
                dagens nettverk, utstyr, leverandører og ansvarsdeling.
              </li>
              <li>
                <span className="font-medium">Forslag:</span> du får et konkret
                oppsett på overvåking, varsling og drift – med pris og tydelig
                avgrensning.
              </li>
              <li>
                <span className="font-medium">Gjennomføring:</span> vi setter opp
                overvåkingsverktøy, struktur på hendelser og avtaler faste
                rapporteringspunkter.
              </li>
            </ul>
            <p>
              Målet er å gjøre nettverket mindre mystisk, mer forutsigbart og
              enklere å eie – samtidig som du har noen å ringe når det faktisk
              skjer noe.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
