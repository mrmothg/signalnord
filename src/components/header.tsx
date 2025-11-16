'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo-icon.png" alt="SignalNord" className="h-8 w-8" />
            <span className="font-bold text-xl">SignalNord</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/fiber" className="hover:text-primary">Fiber</Link>
            <Link href="/leide-linjer" className="hover:text-primary">Leide linjer</Link>
            <Link href="/vpn" className="hover:text-primary">VPN</Link>
            <Link href="/managed-connectivity" className="hover:text-primary">Pakker</Link>
            <Link href="/kontakt" className="btn btn-primary">Kontakt</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link href="/fiber" onClick={() => setIsMenuOpen(false)}>Fiber</Link>
              <Link href="/leide-linjer" onClick={() => setIsMenuOpen(false)}>Leide linjer</Link>
              <Link href="/vpn" onClick={() => setIsMenuOpen(false)}>VPN</Link>
              <Link href="/managed-connectivity" onClick={() => setIsMenuOpen(false)}>Pakker</Link>
              <Link href="/kontakt" onClick={() => setIsMenuOpen(false)}>Kontakt</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
