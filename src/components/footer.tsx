import Link from 'next/link'
import { LogoMark } from '@/components/logo'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const footerLinks = {
  tjenester: [
    { name: 'Bedriftsfiber', href: '/fiber' },
    { name: 'Leide linjer', href: '/leide-linjer' },
    { name: 'VPN', href: '/vpn' },
    { name: 'Drift & overvåking', href: '/managed-connectivity' },
  ],
  ressurser: [
    { name: 'NIS2 for SMB', href: '/nis2-smb' },
    { name: 'Status', href: '/status' },
    { name: 'Personvern', href: '/privacy' },
    { name: 'Kontakt oss', href: '/kontakt' },
  ],
  selskap: [
    { name: 'Om oss', href: '/om-oss' }, // /om-oss når du lager siden
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Karriere', href: '#' },
    { name: 'Partner', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10 md:py-12">
        {/* Øvre del */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Firma */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <LogoMark className="h-8 w-8" />
            </Link>
            <p className="mt-3 text-base font-semibold text-foreground">
              SignalNord
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Nettverk og driftstjenester for norske bedrifter, med fokus på
              stabilitet, sikkerhet og norsk support.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Oslo, Norge</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+47 21 00 00 00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href="mailto:post@signalnord.no"
                  className="hover:text-primary"
                >
                  post@signalnord.no
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Support: Man–fre 08:00–20:00</span>
              </div>
            </div>
          </div>

          {/* Tjenester + ressurser */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Tjenester
              </h3>
              <ul className="space-y-2">
                {footerLinks.tjenester.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Ressurser
              </h3>
              <ul className="space-y-2">
                {footerLinks.ressurser.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Selskap */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Selskap
            </h3>
            <ul className="space-y-2">
              {footerLinks.selskap.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nedre del */}
        <div className="mt-8 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-muted-foreground md:flex-row md:text-left">
            <p>© {new Date().getFullYear()} SignalNord AS. Alle rettigheter forbeholdt.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy" className="hover:text-primary">
                Personvern
              </Link>
              <Link href="#" className="hover:text-primary">
                Vilkår
              </Link>
              <Link href="#" className="hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
