'use client'

import { useState } from 'react'

type LeadFormProps = {
  formType: 'nis2-checklist' | 'kontakt' | 'fiber' | 'vpn' // tilpass
  buttonText?: string
}

export function LeadForm({ formType, buttonText }: LeadFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const company = String(formData.get('company') || '')

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          formType,
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error || 'Kunne ikke sende skjema')
      }

      setSuccess(true)

      // For NIS2-sjekklisten sender vi bruker til PDF etterpå
      if (formType === 'nis2-checklist') {
        window.location.href =
          '/docs/signalnord-nis2-sjekkliste.pdf'
      }
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'Noe gikk galt ved innsending')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm mb-1" htmlFor="name">
          Navn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm mb-1" htmlFor="email">
          E-post
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-sm mb-1" htmlFor="company">
          Bedrift
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full rounded-md border px-3 py-2 text-sm"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {success && formType !== 'nis2-checklist' && (
        <p className="text-sm text-green-600">
          Takk, vi tar kontakt så snart vi har sett på henvendelsen.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
      >
        {loading ? 'Sender...' : buttonText ?? 'Send inn'}
      </button>
    </form>
  )
}
