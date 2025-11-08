'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LeadFormProps {
  formType: 'nis2-analysis' | 'quote-request' | 'nis2-checklist';
  buttonText?: string;
}

export function LeadForm({ formType, buttonText }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In production, this would send to your backend
    console.log('Form submitted:', { ...formData, formType });

    // For NIS2 checklist, trigger PDF download
    if (formType === 'nis2-checklist') {
      // This would normally be handled by the backend
      const link = document.createElement('a');
      link.href = '/api/download-nis2-checklist';
      link.download = 'SignalNord-NIS2-Sjekkliste.pdf';
      // link.click();
    }

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mb-4 text-green-600">
          <svg
            className="mx-auto h-12 w-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Takk for din henvendelse!</h3>
        <p className="text-muted-foreground">
          {formType === 'nis2-analysis' && 'Vi kontakter deg innen 1 arbeidsdag for å avtale NIS2-analyse.'}
          {formType === 'quote-request' && 'Du vil motta et tilbud på e-post innen 2 arbeidsdager.'}
          {formType === 'nis2-checklist' && 'NIS2-sjekklisten er sendt til din e-post.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Navn *</Label>
          <Input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Ola Nordmann"
          />
        </div>
        <div>
          <Label htmlFor="company">Bedrift *</Label>
          <Input
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Bedrift AS"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="email">E-post *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="ola@bedrift.no"
          />
        </div>
        <div>
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+47 900 00 000"
          />
        </div>
      </div>

      {formType === 'quote-request' && (
        <div>
          <Label htmlFor="message">Beskrivelse av behov</Label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={formData.message}
            onChange={handleChange}
            placeholder="Fortell oss om dine behov for nettverksløsninger..."
          />
        </div>
      )}

      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="consent"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300"
        />
        <Label htmlFor="consent" className="text-sm text-muted-foreground">
          Jeg samtykker til at SignalNord kan kontakte meg angående denne henvendelsen. 
          Les vår <a href="/privacy" className="underline">personvernerklæring</a>.
        </Label>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {buttonText || 
          (formType === 'nis2-analysis' && 'Book gratis analyse') ||
          (formType === 'quote-request' && 'Send forespørsel') ||
          (formType === 'nis2-checklist' && 'Last ned sjekkliste')
        }
      </Button>
    </form>
  );
}
