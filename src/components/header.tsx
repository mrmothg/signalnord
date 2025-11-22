'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Linkedin } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Bedriftsfiber', href: '/fiber' },
  { label: 'Leide linjer', href: '/leide-linjer' },
  { label: 'VPN', href: '/vpn' },
  { label: 'Drift & overvåking', href: '/managed-connectivity' },
  { label: 'NIS2', href: '/nis2-smb' },
  { label: 'Om oss', href: '/om-oss' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  const toggle = () => setOpen((prev) => !prev)
  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-auto" />
        </Link>

        {/* Desktop-nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  'text-muted-foreground hover:text-foreground',
                  isActive &&
                    'text-foreground underline underline-offset-8 decoration-2'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA + LinkedIn */}
        <div className="hidden items-center gap-3 sm:flex">
          <span className="text-xs text-muted-foreground">
            Nettverk som bare virker
          </span>

          <Link
            href="https://www.linkedin.com/company/signalnord"
            target="_blank"
            rel="noreferrer"
            aria-label="SignalNord på LinkedIn"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary md:inline-flex"
          >
            <Linkedin className="h-4 w-4" />
          </Link>

          <Button
            asChild
            size="sm"
            className="rounded-lg px-4 text-sm font-medium"
          >
            <Link href="/kontakt">Kontakt oss</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border/70 bg-background/80 p-2 text-sm text-foreground md:hidden"
          onClick={toggle}
          aria-label="Åpne meny"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/70 bg-background md:hidden">
          <div className="container py-3">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      'rounded-md px-2 py-2 text-sm font-medium',
                      'text-muted-foreground hover:bg-muted hover:text-foreground',
                      isActive && 'bg-muted text-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}

              <div className="mt-3 flex flex-col gap-2">
                <Button
                  asChild
                  className="h-9 w-full rounded-md text-sm font-medium"
                >
                  <Link href="/kontakt" onClick={closeMenu}>
                    Kontakt oss
                  </Link>
                </Button>

                <Link
                  href="https://www.linkedin.com/company/signalnord"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="SignalNord på LinkedIn"
                  className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-md border border-border text-sm text-muted-foreground transition hover:border-primary hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>Følg oss på LinkedIn</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
