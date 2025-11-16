'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'kontakt',
          name,
          company,
          email,
          subject: subject || 'Generell henvendelse',
          message,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Kunne ikke sende inn skjema.')
      }

      setSuccess('Takk for meldingen! Vi svarer deg så snart vi kan.')
      setName('')
      setCompany('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (err: any) {
      setError(err.message || 'Noe gikk galt. Prøv igjen.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Navn</Label>
          <Input
            id="contact-name"
            placeholder="Ditt navn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-company">Bedrift (valgfritt)</Label>
          <Input
            id="contact-company"
            placeholder="Firmanavn"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email">E-post</Label>
        <Input
          id="contact-email"
          type="email"
          placeholder="din.epost@firma.no"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-subject">Hva gjelder det?</Label>
        <select
          id="contact-subject"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Velg emne</option>
          <option value="bedriftsfiber">Bedriftsfiber</option>
          <option value="leide-linjer">Leide linjer</option>
          <option value="vpn">VPN for ansatte</option>
          <option value="msp">Drift &amp; overvåking (MSP)</option>
          <option value="nis2">NIS2 / sikkerhet</option>
          <option value="annet">Annet</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Kort beskrivelse</Label>
        <textarea
          id="contact-message"
          required
          rows={5}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="Beskriv kort dagens situasjon og hva dere ønsker hjelp med."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {error && (
        <p className="text-sm text-destructive">
          {error}
        </p>
      )}
      {success && (
        <p className="text-sm text-emerald-600">
          {success}
        </p>
      )}

      <Button type="submit" disabled={loading}>
        {loading ? 'Sender...' : 'Send melding'}
      </Button>
    </form>
  )
}
