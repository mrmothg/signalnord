import Link from 'next/link';
import { Shield, Mail, Phone, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container section-spacing">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Personvernerklæring
            </h1>
            <p className="text-lg text-muted-foreground">
              Sist oppdatert: 1. januar 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container section-spacing">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Om denne personvernerklæringen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>
                  SignalNord AS ("vi", "oss", "vår") respekterer ditt personvern og er 
                  forpliktet til å beskytte dine personopplysninger. Denne personvernerklæringen 
                  forklarer hvordan vi samler inn, bruker, deler og beskytter informasjon 
                  i forbindelse med våre tjenester.
                </p>
                <p>
                  Vi behandler personopplysninger i samsvar med EUs personvernforordning 
                  (GDPR) og norsk personopplysningslov.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>1. Behandlingsansvarlig</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">SignalNord AS</p>
                  <p>Organisasjonsnummer: 123 456 789</p>
                  <p>Postadresse: Postboks 1234, 0101 Oslo</p>
                  <p>E-post: privacy@signalnord.no</p>
                  <p>Telefon: +47 21 00 00 00</p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>2. Personopplysninger vi samler inn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <h3 className="font-semibold">2.1 Informasjon du gir oss direkte:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kontaktinformasjon (navn, e-post, telefonnummer, adresse)</li>
                  <li>Bedriftsinformasjon (firmanavn, organisasjonsnummer, rolle)</li>
                  <li>Fakturainformasjon og betalingsdetaljer</li>
                  <li>Kommunikasjon med vår kundeservice</li>
                  <li>Informasjon i skjemaer og søknader</li>
                </ul>

                <h3 className="font-semibold mt-4">2.2 Informasjon vi samler automatisk:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP-adresse og nettleserinformasjon</li>
                  <li>Enhetstype og operativsystem</li>
                  <li>Besøksstatistikk via Plausible Analytics (anonymisert)</li>
                  <li>Tekniske logger for feilsøking og sikkerhet</li>
                </ul>

                <h3 className="font-semibold mt-4">2.3 Informasjon fra tredjeparter:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kredittinformasjon fra kredittbyråer</li>
                  <li>Offentlig tilgjengelig bedriftsinformasjon</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>3. Formål og rettslig grunnlag</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>Vi behandler personopplysninger for følgende formål:</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Oppfyllelse av avtale:</h4>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Levering av våre tjenester</li>
                      <li>Kundeservice og support</li>
                      <li>Fakturering og betalingshåndtering</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Berettiget interesse:</h4>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Forbedring av våre tjenester</li>
                      <li>Markedsføring til eksisterende kunder</li>
                      <li>Sikkerhet og forebygging av svindel</li>
                      <li>Analyse av bruksmønstre (anonymisert)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Rettslig forpliktelse:</h4>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Oppfyllelse av bokføringsloven</li>
                      <li>Rapportering til myndigheter</li>
                      <li>NIS2 compliance-dokumentasjon</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Samtykke:</h4>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Utsendelse av nyhetsbrev</li>
                      <li>Markedsføringsaktiviteter</li>
                      <li>Bruk av cookies for analyse</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>4. Deling av personopplysninger</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>Vi deler kun personopplysninger med:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Databehandlere:</strong> Leverandører som behandler data på våre vegne 
                    (hosting, e-post, CRM-system) under strenge avtaler
                  </li>
                  <li>
                    <strong>Partnere:</strong> Tekniske partnere for levering av tjenester, 
                    kun nødvendig informasjon
                  </li>
                  <li>
                    <strong>Myndigheter:</strong> Ved lovpålagt utlevering eller rettslige krav
                  </li>
                  <li>
                    <strong>Virksomhetsoverdragelse:</strong> Ved eventuelt salg eller fusjon 
                    av selskapet
                  </li>
                </ul>
                <p className="mt-4">
                  Vi selger eller leier aldri ut personopplysninger til tredjeparter.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>5. Lagring og sikkerhet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <h3 className="font-semibold">5.1 Lagringstid:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kundeopplysninger: Så lenge kundeforholdet består + 5 år</li>
                  <li>Regnskapsdata: 5 år iht. bokføringsloven</li>
                  <li>Tekniske logger: 90 dager</li>
                  <li>Markedsføringssamtykke: Til samtykke trekkes tilbake</li>
                </ul>

                <h3 className="font-semibold mt-4">5.2 Sikkerhetstiltak:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kryptering av data i transit og hvile</li>
                  <li>Tilgangskontroll og autentisering</li>
                  <li>Regelmessige sikkerhetsrevisjoner</li>
                  <li>Opplæring av ansatte i datasikkerhet</li>
                  <li>Incident response-prosedyrer</li>
                </ul>

                <h3 className="font-semibold mt-4">5.3 Datalagring:</h3>
                <p>
                  Alle data lagres på servere innenfor EU/EØS. Vi overfører ikke 
                  personopplysninger til land utenfor EU/EØS uten tilstrekkelige garantier.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>6. Dine rettigheter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>Under GDPR har du følgende rettigheter:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Rett til innsyn:</strong> Du kan be om kopi av personopplysninger 
                    vi har om deg
                  </li>
                  <li>
                    <strong>Rett til retting:</strong> Du kan be om å korrigere uriktige 
                    opplysninger
                  </li>
                  <li>
                    <strong>Rett til sletting:</strong> Du kan be om at vi sletter dine 
                    personopplysninger (med visse unntak)
                  </li>
                  <li>
                    <strong>Rett til begrensning:</strong> Du kan be om begrenset behandling 
                    av dine opplysninger
                  </li>
                  <li>
                    <strong>Rett til dataportabilitet:</strong> Du kan be om å få utlevert 
                    dine data i strukturert format
                  </li>
                  <li>
                    <strong>Rett til å protestere:</strong> Du kan protestere mot behandling 
                    basert på berettiget interesse
                  </li>
                  <li>
                    <strong>Rett til å trekke samtykke:</strong> Der behandling er basert på 
                    samtykke, kan dette trekkes tilbake når som helst
                  </li>
                </ul>
                <p className="mt-4">
                  For å utøve dine rettigheter, kontakt oss på privacy@signalnord.no
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>7. Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>Vi bruker følgende typer cookies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Nødvendige cookies:</strong> For grunnleggende funksjonalitet 
                    (sesjonshåndtering, sikkerhet)
                  </li>
                  <li>
                    <strong>Analysecookies:</strong> Plausible Analytics for besøksstatistikk 
                    (krever samtykke)
                  </li>
                </ul>
                <p className="mt-4">
                  Du kan administrere cookie-preferanser via banneret på nettsiden eller 
                  i nettleserinnstillingene.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>8. Endringer i personvernerklæringen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>
                  Vi kan oppdatere denne personvernerklæringen fra tid til annen. 
                  Ved vesentlige endringer vil vi informere deg via e-post eller 
                  varsel på nettsiden.
                </p>
                <p>
                  Siste revisjon: 1. januar 2025
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>9. Kontaktinformasjon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      E-post
                    </h4>
                    <p>privacy@signalnord.no</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      Telefon
                    </h4>
                    <p>+47 21 00 00 00</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Klagerett</h4>
                  <p>
                    Du har rett til å klage til Datatilsynet dersom du mener vi ikke 
                    behandler dine personopplysninger i samsvar med regelverket.
                  </p>
                  <p className="mt-2">
                    <strong>Datatilsynet</strong><br />
                    Postboks 458 Sentrum, 0105 Oslo<br />
                    postkasse@datatilsynet.no<br />
                    Telefon: 22 39 69 00
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
