// src/app/kontakt/page.tsx
import type { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from './contact-form'

export const metadata: Metadata = {
  title: 'Kontakt oss',
  description:
    'Ta kontakt med SignalNord for forslag til løsning på bedriftsnett, fiber, VPN og drift. Uformell dialog, ingen salgspress.',
}

export default function KontaktPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-10 grid gap-10 md:grid-cols-[2fr,1fr]">
          <div>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              Kontakt oss
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Fortell kort hva dere ønsker hjelp med, så kommer vi tilbake med
              et konkret forslag eller noen ærlige vurderinger av hva vi ville gjort.
              E-post går helt fint - du blir ikke oppringt uten at du ber om det.
            </p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>post@signalnord.no</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Oslo, Norge</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-xl font-semibold">
            Send oss en uformell forespørsel
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

//
