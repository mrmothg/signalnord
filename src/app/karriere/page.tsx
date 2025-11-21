import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, Users, Network, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Karriere',
  description:
    'Jobbmuligheter og karriere hos SignalNord. For deg som vil jobbe med nettverk, drift og sikkerhet for norske bedrifter.',
}

export default function KarrierePage() {
  return (
    <section className="container section-spacing max-w-4xl">
      <h1 className="mb-6 text-3xl font-bold">Karriere i SignalNord</h1>

      <p className="mb-4 text-muted-foreground">
        SignalNord bygger tjenester for bedrifter som vil ha bedre kontroll på nettverk,
        fiber, VPN og drift. Vi er små, faglige og tett på kundene våre – og ser etter folk
        som liker å kombinere teknisk arbeid med konkret ansvar.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Briefcase className="mb-2 h-8 w-8 text-primary" />
            <CardTitle className="text-base">Faglig hverdag</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Arbeid med nettverk, infrastruktur, drift og sikkerhet – ikke bare “brukerstøtte”.
              Færre saker, mer ansvar per kunde.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Network className="mb-2 h-8 w-8 text-primary" />
            <CardTitle className="text-base">Reelle miljøer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Du jobber med faktiske kundeinstallasjoner, overvåking, endringer og forbedringer –
              ikke bare labmiljøer.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="mb-2 h-8 w-8 text-primary" />
            <CardTitle className="text-base">Tett på kundene</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Direkte dialog med IT-ansvarlige hos kundene. Kort vei fra idé til endring i produksjon.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="mt-10 mb-3 text-2xl font-semibold">Ledige stillinger</h2>
      <p className="mb-4 text-muted-foreground">
        Vi har for øyeblikket ingen utlyste stillinger, men er alltid interessert i å høre fra deg
        hvis du har erfaring med:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-muted-foreground text-sm">
        <li>nettverk og infrastruktur (routing, switching, VPN, WiFi)</li>
        <li>drift og overvåking av produksjonsmiljøer</li>
        <li>sikkerhet og NIS2-relaterte tekniske tiltak</li>
        <li>IT-drift for små og mellomstore virksomheter</li>
      </ul>

      <h2 className="mt-8 mb-3 text-2xl font-semibold">Åpen søknad</h2>
      <p className="mb-4 text-muted-foreground">
        Hvis du mener du kan bidra faglig og liker tanken på tydelig ansvar,
        kan du sende en kort beskrivelse av bakgrunn, hva du trives med å jobbe med
        og hva du ser etter i en arbeidshverdag.
      </p>

      <div className="mb-2 flex flex-wrap items-center gap-3">
        <Button asChild size="lg">
          <Link href="/kontakt">Kontakt oss om muligheter</Link>
        </Button>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span>Merk henvendelsen med «Karriere»</span>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Vi lover ikke raske prosesser eller masse HR-prat – men vi leser alt som kommer inn,
        og svarer ærlig på om vi ser en mulig match.
      </p>
    </section>
  )
}
