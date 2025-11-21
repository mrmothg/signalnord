import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookies',
  description:
    'Informasjon om bruk av informasjonskapsler (cookies) på signalnord.no.',
}

export default function CookiesPage() {
  return (
    <section className="container section-spacing max-w-3xl">
      <h1 className="mb-6 text-3xl font-bold">Cookies på signalnord.no</h1>

      <p className="mb-4 text-muted-foreground">
        På denne siden forklarer vi hvordan vi bruker informasjonskapsler
        (cookies) på signalnord.no, og hvilke valg du har.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">Hva er cookies?</h2>
      <p className="mb-4 text-muted-foreground">
        Cookies er små tekstfiler som lagres i nettleseren din når du besøker
        et nettsted. De brukes blant annet til å huske innstillinger, forbedre
        brukeropplevelsen og samle inn anonym statistikk.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">Hvilke cookies bruker vi?</h2>
      <p className="mb-2 text-muted-foreground">
        Vi forsøker å holde bruken av cookies enkel og begrenset:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-muted-foreground">
        <li>
          <span className="font-medium">Nødvendige cookies</span> – brukes for
          at nettsiden skal fungere teknisk (for eksempel lastbalansering og
          grunnleggende sikkerhet).
        </li>
        <li>
          <span className="font-medium">Analyse og statistikk</span> – kan
          brukes for anonymisert trafikkmåling, slik at vi forstår hvordan
          nettsiden brukes og kan forbedre innhold og struktur.
        </li>
      </ul>

      <h2 className="mt-8 mb-2 text-xl font-semibold">Ingen unødvendig sporing</h2>
      <p className="mb-4 text-muted-foreground">
        Vi er opptatt av personvern og bruker ikke cookies til å bygge
        profiler, selge data eller drive aggressiv annonsering. Eventuell
        analyse skjer på et aggregert, anonymt nivå.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">Dine valg</h2>
      <p className="mb-4 text-muted-foreground">
        Du kan når som helst endre innstillingene for cookies i nettleseren
        din, for eksempel ved å blokkere eller slette informasjonskapsler.
        Nettstedet vil da fortsatt fungere, men enkelte funksjoner kan bli
        noe begrenset.
      </p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">Endringer i denne erklæringen</h2>
      <p className="mb-2 text-muted-foreground">
        Ved endringer i hvordan vi bruker cookies, oppdaterer vi denne siden.
      </p>
      <p className="text-sm text-muted-foreground">
        Sist oppdatert: {new Date().getFullYear()}
      </p>
    </section>
  )
}
