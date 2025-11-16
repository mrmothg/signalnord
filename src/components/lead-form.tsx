'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type LeadFormProps = {
  formType: string
  buttonText?: string
}

export function LeadForm({ formType, buttonText = 'Send inn' }: LeadFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
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
          formType,
          name,
          email,
          company,
          subject: 'NIS2-sjekkliste',
          message:
            message ||
            'Brukeren har bedt om NIS2-sjekkliste. Følg opp med PDF / videre dialog.',
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Kunne ikke sende inn skjema.')
      }

      setSuccess('Takk! Vi tar kontakt og sender deg NIS2-sjekklisten.')
      setName('')
      setEmail('')
      setCompany('')
      setMessage('')
    } catch (err: any) {
      setError(err.message || 'Noe gikk galt. Prøv igjen.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="lead-name">Navn (valgfritt)</Label>
        <Input
          id="lead-name"
          placeholder="Ditt navn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-email">E-post</Label>
        <Input
          id="lead-email"
          type="email"
          required
          placeholder="din.epost@firma.no"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-company">Bedrift (valgfritt)</Label>
        <Input
          id="lead-company"
          placeholder="Firmanavn"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-message">Kommentar (valgfritt)</Label>
        <textarea
          id="lead-message"
          rows={3}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="F.eks. størrelse på bedriften, bransje eller konkrete spørsmål."
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

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Sender...' : buttonText}
      </Button>
    </form>
  )
}
