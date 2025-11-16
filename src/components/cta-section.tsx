// src/components/cta-section.tsx
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Klar for et mer stabilt bedriftsnett?
        </h2>
        <p className="mb-8 text-lg text-primary-foreground/90">
          Fortell kort om bedriften din, så kommer vi tilbake med et konkret
          forslag på løsning og pris – uten forpliktelser.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/kontakt">
              Be om tilbud <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            asChild
          >
            <Link href="/nis2-smb">
              Se NIS2-krav for SMB
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
