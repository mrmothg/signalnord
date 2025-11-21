'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type LeadFormProps = {
  formType: 'nis2-checklist' | 'kontakt' | 'fiber' | string
  buttonText: string
  downloadUrl?: string
}

export function LeadForm({ formType, buttonText, downloadUrl }: LeadFormProps) {
  const [loading, setLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      formData.append('formType', formType)

      const res = await fetch('/api/lead', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        throw new Error('Kunne ikke sende skjema')
      }

      setSubmitted(true)

      // Start nedlasting av PDF etter vellykket innsending
      if (downloadUrl) {
        window.location.href = downloadUrl
      }
    } catch (err: any) {
      setError(err.message ?? 'Noe gikk galt')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <Input
          name="name"
          placeholder="Navn"
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="E-post"
          required
        />
      </div>
      <Input
        name="company"
        placeholder="Bedrift (valgfritt)"
      />

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}

      {submitted && (
        <p className="text-xs text-muted-foreground">
          Takk – skjemaet er sendt inn.
          {downloadUrl && (
            <>
              {' '}
              Nedlastingen skal starte automatisk. Hvis ikke, klikk{' '}
              <a href={downloadUrl} className="underline">
                her
              </a>
              .
            </>
          )}
        </p>
      )}

      <Button type="submit" disabled={loading}>
        {loading ? 'Sender…' : buttonText}
      </Button>
    </form>
  )
}
