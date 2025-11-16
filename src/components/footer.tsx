import Link from 'next/link'
import { Logo } from '@/components/logo'
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
    { name: 'Om oss', href: '#' },       // endre til /om-oss når siden finnes
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Karriere', href: '#' },
    { name: 'Partner', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Logo className="h-20 w-auto" layout="vertical" />
            </Link>
            <p className="mt-6 text-sm text-muted-foreground">
              Nettverk og driftstjenester for norske bedrifter. Fokus på stabilitet,
              sikkerhet og norsk support.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Oslo, Norge</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+47 21 00 00 00</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href="mailto:post@signalnord.no"
                  className="hover:text-primary"
                >
                  post@signalnord.no
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Support: Man–fre 08:00–20:00</span>
              </div>
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Tjenester</h3>
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
            <h3 className="mb-4 text-sm font-semibold">Ressurser</h3>
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

          <div>
            <h3 className="mb-4 text-sm font-semibold">Selskap</h3>
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

        {/* Bottom section */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} SignalNord AS. Alle rettigheter forbeholdt.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Personvern
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Vilkår
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
