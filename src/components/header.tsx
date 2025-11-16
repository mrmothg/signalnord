// src/components/header.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/fiber', label: 'Bedriftsfiber' },
  { href: '/leide-linjer', label: 'Leide linjer' },
  { href: '/vpn', label: 'VPN' },
  { href: '/managed-connectivity', label: 'Drift & overvåking' },
  { href: '/nis2-smb', label: 'NIS2' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo / brand */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-icon.png"
              alt="SignalNord"
              className="h-9 w-9"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold">SignalNord</span>
              <span className="text-xs text-muted-foreground">
                Bedriftsnett og fiber
              </span>
            </div>
          </Link>

          {/* Desktop-nav */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    'text-sm md:text-[0.95rem] transition-colors ' +
                    (isActive(link.href)
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground')
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Button size="sm" asChild>
              <Link href="/kontakt">Kontakt oss</Link>
            </Button>
          </div>

          {/* Mobil: meny-knapp */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Åpne meny"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobil-meny */}
        {isMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    'text-base ' +
                    (isActive(link.href)
                      ? 'text-primary font-medium'
                      : 'text-foreground')
                  }
                >
                  {link.label}
                </Link>
              ))}

              <Button
                className="mt-2 w-full"
                asChild
                size="sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/kontakt">Kontakt oss</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
