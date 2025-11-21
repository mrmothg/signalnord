import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vilkår for bruk',
  description:
    'Oversikt over generelle vilkår for bruk av signalnord.no og informasjon om våre tjenester.',
}

export default function VilkarPage() {
  return (
    <section className="container section-spacing max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold">Vilkår for bruk</h1>

      <p className="mb-4 text-muted-foreground">
        Disse vilkårene beskriver rammene for bruk av signalnord.no og
        innholdet vi publiserer. For konkrete avtaler om leveranse av tjenester
        gjelder egne kontrakter og tjenesteavtaler (SLA) mellom SignalNord og
        den enkelte kunde.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">1. Informasjon på nettsiden</h2>
      <p className="mb-4 text-muted-foreground">
        Innholdet på signalnord.no er ment som generell informasjon om våre
        tjenester innen nettverk, fiber, VPN, drift og sikkerhet. Vi tilstreber
        at informasjonen er korrekt og oppdatert, men det kan forekomme
        endringer i priser, tekniske løsninger eller betingelser som ikke
        umiddelbart gjenspeiles på nettsiden.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">2. Ikke-bindende forespørsler</h2>
      <p className="mb-4 text-muted-foreground">
        Skjemaer for kontakt, tilbud eller NIS2-sjekklister på nettsiden
        innebærer ikke noen forpliktelse til å inngå avtale. En endelig
        avtale inngås først når eget tilbud er akseptert skriftlig av begge
        parter.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">3. Ansvarsbegrensning</h2>
      <p className="mb-4 text-muted-foreground">
        SignalNord er ikke ansvarlig for tap eller skade som direkte eller
        indirekte oppstår som følge av bruk av informasjon på nettsiden.
        Konkrete vurderinger må alltid gjøres i dialog med oss og formaliseres
        i avtaler, spesielt når det gjelder løsninger for oppetid, sikkerhet
        og beredskap.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">4. Immaterielle rettigheter</h2>
      <p className="mb-4 text-muted-foreground">
        Alt innhold på signalnord.no – herunder tekst, grafikk, logoer og
        visuelle uttrykk – tilhører SignalNord eller våre samarbeidspartnere,
        med mindre annet er angitt. Innholdet kan ikke kopieres eller brukes
        kommersielt uten skriftlig samtykke.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">5. Personvern og data</h2>
      <p className="mb-4 text-muted-foreground">
        Behandling av personopplysninger reguleres av vår egen
        personvernerklæring. Ved å sende inn skjemaer på nettsiden samtykker du
        til at vi kan lagre og bruke opplysningene for å følge opp henvendelsen
        din.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">6. Endringer i vilkår</h2>
      <p className="mb-2 text-muted-foreground">
        Vi kan oppdatere disse vilkårene ved behov. Oppdatert versjon publiseres
        alltid på denne siden.
      </p>
      <p className="text-sm text-muted-foreground">
        Sist oppdatert: {new Date().getFullYear()}
      </p>
    </section>
  )
}
