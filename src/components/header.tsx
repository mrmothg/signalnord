'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

const navigation = [
  { name: 'Hjem', href: '/' },
  { name: 'Pakker', href: '/managed-connectivity' },
  { name: 'Leide linjer', href: '/leide-linjer' },
  { name: 'VPN', href: '/vpn' },
  { name: 'Overvåking', href: '/overvaking-msp' },
  { name: 'NIS2', href: '/nis2-smb' },
  { name: 'Status', href: '/status' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500",
      scrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-sm" 
        : "bg-white/80 backdrop-blur-sm"
    )}>
      <nav className="container flex h-20 items-center justify-between" aria-label="Hovednavigasjon">
        <Link href="/" className="flex items-center">
          <Logo className="h-10 w-auto" layout="horizontal" />
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-normal transition-colors duration-200',
                pathname === item.href
                  ? 'text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button className="ml-4 bg-gray-900 hover:bg-gray-800 text-white rounded-sm px-6 py-2 text-sm font-normal">
            <Link href="/managed-connectivity#tilbud">
              Kontakt
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Meny"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-slide-up">
          <div className="container py-6 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block py-3 text-base font-normal transition-colors',
                  pathname === item.href
                    ? 'text-gray-900'
                    : 'text-gray-600'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-sm py-3 font-normal">
                <Link href="/managed-connectivity#tilbud">
                  Kontakt oss
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
