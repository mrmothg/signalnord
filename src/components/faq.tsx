import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Hva er forskjellen på leide linjer og standard bredbånd?',
    answer: 'Leide linjer gir deg dedikert, symmetrisk båndbredde med garantert hastighet og SLA, mens standard bredbånd deler kapasitet med andre og har varierende hastighet. Leide linjer er ideelle for bedrifter med kritiske applikasjoner som krever stabil og forutsigbar ytelse.',
  },
  {
    question: 'Hva innebærer NIS2-direktivet for min bedrift?',
    answer: 'NIS2 er EUs nye cybersikkerhetsdirektiv som stiller strengere krav til sikkerhetstiltak, hendelseshåndtering og rapportering for mange norske bedrifter. Vi hjelper deg med å kartlegge kravene som gjelder for din virksomhet og implementere nødvendige tiltak for compliance.',
  },
  {
    question: 'Hvor raskt kan dere levere en ny linje?',
    answer: 'Leveringstid avhenger av lokasjon og eksisterende infrastruktur. For lokasjoner med etablert fiber kan vi typisk levere innen 2-4 uker. For nye etableringer varierer det fra 4-12 uker avhengig av gravearbeider og tillatelser.',
  },
  {
    question: 'Hva er inkludert i MSP-tjenestene deres?',
    answer: 'Våre MSP-tjenester inkluderer 24/7 overvåking, proaktiv vedlikehold, patch management, backup-håndtering, sikkerhetshendelser, brukeradministrasjon og månedlig rapportering. Vi tilpasser pakken etter dine behov og kan også inkludere helpdesk-tjenester.',
  },
  {
    question: 'Tilbyr dere 24/7 support?',
    answer: 'Vi tilbyr norsk kundeservice på telefon mellom 08-20 på hverdager. For kunder med MSP-avtale eller kritisk infrastruktur tilbyr vi 24/7 vaktordning med garantert responstid. Alle kunder har tilgang til vår serviceportal hele døgnet.',
  },
  {
    question: 'Kan vi beholde eksisterende utstyr ved bytte til SignalNord?',
    answer: 'I mange tilfeller kan eksisterende nettverksutstyr gjenbrukes, men vi foretar alltid en teknisk vurdering for å sikre kompatibilitet og optimal ytelse. Ved leide linjer inkluderer vi alltid nødvendig CPE-utstyr i månedsprisen.',
  },
  {
    question: 'Hva skjer hvis vi opplever nedetid?',
    answer: 'Ved nedetid aktiveres vår incident-prosess umiddelbart. Avhengig av din SLA garanterer vi respons innen 15-60 minutter. Vi har 99.9% oppetidsgaranti på leide linjer, og ved brudd på SLA krediteres du automatisk iht. avtalen.',
  },
  {
    question: 'Hvordan fungerer prismodellen deres?',
    answer: 'Vi tilbyr transparente månedspriser uten skjulte kostnader. Leide linjer og VPN faktureres per lokasjon/bruker, mens MSP-tjenester prises basert på antall enheter eller brukere. Oppstartskostnader varierer basert på kompleksitet og eksisterende infrastruktur.',
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
