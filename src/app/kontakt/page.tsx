// src/app/kontakt/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Kontakt oss | SignalNord',
  description:
    'Kontakt SignalNord på e-post eller via skjema for spørsmål om bedriftsfiber, leide linjer, VPN og drift av nettverk.',
}

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Kontakt SignalNord
            </h1>
            <p className="mb-3 text-lg text-muted-foreground">
              Har dere spørsmål om bedriftsfiber, leide linjer, VPN eller drift av nettverk?
            </p>
            <p className="text-lg text-muted-foreground">
              Fyll inn skjemaet eller ta kontakt på e-post. Vi svarer skriftlig, og ringer
              bare hvis du ber om det.
            </p>
          </div>
        </div>
      </section>

      {/* Info + skjema */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
            {/* Info-kolonne */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Slik foretrekker vi å jobbe</CardTitle>
                  <CardDescription>Enkelt, konkret og uten mas.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Vi vet at mange er lei av aggressive salgssamtaler. Derfor er
                    utgangspunktet vårt enkelt:
                  </p>
                  <ul className="list-inside list-disc space-y-1">
                    <li>du forklarer kort hva du lurer på eller vurderer</li>
                    <li>vi gir et ærlig svar på hva som er fornuftig å gjøre</li>
                    <li>ingen ringrunder eller mas hvis timingen ikke er riktig</li>
                  </ul>
                  <p>
                    Skjemaet på høyre side er laget for å gi oss nok kontekst til å
                    gi et ordentlig svar på e-post, ikke bare “ring oss så tar vi det der”.
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">E-post</CardTitle>
                      <CardDescription>Direkte kontakt</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {/* Bytt til faktisk adresse */}
                    <p>kontakt@signalnord.no</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Bruk gjerne e-post hvis du ikke liker skjemaer.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Telefon (valgfritt)</CardTitle>
                      <CardDescription>For de som vil ringes</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {/* Sett inn reelt nummer senere */}
                    <p>+47 XX XX XX XX</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Vi ringer kun hvis du ber om det i skjemaet.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Svarfrist</CardTitle>
                      <CardDescription>Hvor raskt får du svar?</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>Vi prøver å svare innen neste virkedag på alle henvendelser.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Hvor vi leverer</CardTitle>
                      <CardDescription>Norske bedrifter</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>
                      Vi retter oss mot norske virksomheter. Fysisk adresse og
                      organisasjonsinfo kan legges inn her når det er klart.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Skjema-kolonne */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send oss en henvendelse</CardTitle>
                  <CardDescription>
                    Fyll inn det som er relevant. Vi svarer normalt på e-post.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Du kan senere koble dette mot /api/contact eller lignende */}
                  <form
                    className="space-y-4"
                    action="/api/contact"
                    method="post"
                  >
                    <div className="space-y-1">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Navn
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      />
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-foreground"
                      >
                        Bedrift (valgfritt)
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      />
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        E-post
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      />
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-foreground"
                      >
                        Hva ønsker dere hjelp med?
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Velg emne
                        </option>
                        <option value="fiber">Bedriftsfiber</option>
                        <option value="leide-linjer">Leide linjer</option>
                        <option value="vpn">VPN</option>
                        <option value="drift">Drift og overvåking</option>
                        <option value="nis2">NIS2 og sikkerhet</option>
                        <option value="annet">Annet</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Beskriv kort hva du ønsker hjelp med
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      />
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="contactPreference"
                        className="text-sm font-medium text-foreground"
                      >
                        Hvordan vil du helst bli kontaktet?
                      </label>
                      <select
                        id="contactPreference"
                        name="contactPreference"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        defaultValue="email"
                      >
                        <option value="email">E-post</option>
                        <option value="phone">Telefon</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full">
                      Send henvendelse
                    </Button>

                    <p className="mt-3 text-xs text-muted-foreground">
                      Vi bruker informasjonen kun til å svare på henvendelsen din.
                      Ingen nyhetsbrev, ingen videresalg av data.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hva skjer etterpå? */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Hva skjer etter at du har sendt inn?
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">1. Vi leser henvendelsen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Vi ser på hva du beskriver, og sjekker om dette er noe vi kan
                  bidra med på en fornuftig måte.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">2. Du får et konkret svar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Vi svarer på e-post med konkrete forslag eller oppklarende
                  spørsmål. Ingen generisk salgsmail.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">3. Du tar det videre</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hvis det virker fornuftig, tar vi dialogen videre. Hvis ikke,
                  har du i det minste fått et ærlig innspill å ta med videre.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/kontakt">
                Tilbake til toppen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
