import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white' | 'dark';
  layout?: 'horizontal' | 'vertical' | 'icon';
}

export function Logo({ className, variant = 'default', layout = 'horizontal' }: LogoProps) {
  // Use the same S logo for all layouts
  const logoSrc = '/logo.png'; // The S logo you uploaded
  
  // Apply filters for different variants
  const filterClass = variant === 'white' ? 'brightness-0 invert' : '';
  const textColor = variant === 'white' ? 'text-white' : 'text-[#1a3a52]';

  // Icon only - just the S logo
  if (layout === 'icon') {
    return (
      <Image
        src={logoSrc}
        alt="SignalNord"
        width={40}
        height={40}
        className={cn('h-10 w-10 object-contain', filterClass, className)}
        priority
      />
    );
  }

  // Vertical layout - S logo with text below
  if (layout === 'vertical') {
    return (
      <div className={cn('flex flex-col items-center gap-2', className)}>
        <Image
          src={logoSrc}
          alt="SignalNord"
          width={60}
          height={60}
          className={cn('h-14 w-14 object-contain', filterClass)}
          priority
        />
        <span className={cn('text-2xl font-semibold tracking-tight', textColor)}>
          SignalNord
        </span>
      </div>
    );
  }

  // Horizontal layout - S logo with text to the right
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Image
        src={logoSrc}
        alt="SignalNord"
        width={40}
        height={40}
        className={cn('h-10 w-10 object-contain', filterClass)}
        priority
      />
      <span className={cn('text-xl font-semibold tracking-tight', textColor)}>
        SignalNord
      </span>
    </div>
  );
}

export function LogoMark({ className, variant = 'default' }: LogoProps) {
  return <Logo className={className} variant={variant} layout="icon" />;
}
