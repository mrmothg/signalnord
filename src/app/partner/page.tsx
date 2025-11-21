import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Partner | SignalNord',
  description:
    'Informasjon for leverandører og samarbeidspartnere som ønsker å bygge tjenester sammen med SignalNord.',
}

export default function PartnerPage() {
  return (
    <section className="container section-spacing max-w-4xl">
      <h1 className="mb-6 text-3xl font-bold">Partnerprogram</h1>

      <p className="mb-4 text-muted-foreground">
        SignalNord samarbeider med utvalgte leverandører, konsulenthus og
        tjenestepartnere for å levere stabile nettverks- og driftstjenester til
        norske virksomheter. Målet er enkelt: gjøre det tydelig hvem som har
        ansvar for hva – både for kunden og for oss som leverandører.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">Hvem passer et samarbeid for?</h2>
      <p className="mb-3 text-muted-foreground">
        Vi er særlig interessert i dialog med partnere som:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-muted-foreground">
        <li>leverer IT-drift, sky- eller konsulenttjenester til SMB-markedet</li>
        <li>har egne kunder som trenger mer struktur på nettverk og linjer</li>
        <li>ønsker en faglig sterk, men pragmatisk nettverkspartner</li>
      </ul>

      <h2 className="mt-8 mb-2 text-xl font-semibold">Hva vi kan bidra med</h2>
      <p className="mb-3 text-muted-foreground">
        I et partnerskap kan SignalNord ta ansvar for:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-muted-foreground">
        <li>design og drift av nettverk og fiberlinjer</li>
        <li>VPN-løsninger for ansatte, lokasjoner og datasenter</li>
        <li>overvåking, feilretting og kapasitetsvurderinger</li>
        <li>grunnlag for NIS2-relatert infrastruktur og dokumentasjon</li>
      </ul>

      <h2 className="mt-8 mb-2 text-xl font-semibold">Slik liker vi å jobbe</h2>
      <p className="mb-4 text-muted-foreground">
        Vi foretrekker samarbeid der roller er tydelig definert: hvem eier
        kundedialog, hvem har ansvar for nettverket, og hvordan håndteres saker
        som går på tvers. Det gir mindre friksjon for kunden, og færre
        diskusjoner om “hvem sin feil” noe er.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">Ta kontakt for en prat</h2>
      <p className="mb-4 text-muted-foreground">
        Hvis du ser at kundene dine kunne hatt nytte av en dedikert
        nettverkspartner, tar vi gjerne en uformell prat om hvordan et samarbeid
        kan se ut i praksis.
      </p>

      <Button asChild size="lg">
        <Link href="/kontakt">Kontakt oss om partnerskap</Link>
      </Button>
    </section>
  )
}
