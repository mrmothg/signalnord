// src/app/api/lead/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      name,
      email,
      company,
      phone,
      subject,
      message,
      formType,
    } = body

    if (!email || !message) {
      return NextResponse.json(
        { error: 'E-post og melding er obligatorisk.' },
        { status: 400 }
      )
    }

    const to = process.env.LEAD_RECEIVER_EMAIL
    const from = process.env.LEAD_FROM_EMAIL || 'no-reply@signalnord.no'

    if (!to) {
      console.error('Mangler LEAD_RECEIVER_EMAIL env-var')
      return NextResponse.json(
        { error: 'Server er feilkonfigurert (mangler mottakeradresse).' },
        { status: 500 }
      )
    }

    const safeFormType = formType || 'ukjent'
    const safeSubject = subject || 'Ny henvendelse fra nettsiden'

    const plainText = `
Ny lead fra signalnord.no

Type: ${safeFormType}
Navn: ${name || '-'}
E-post: ${email}
Bedrift: ${company || '-'}
Telefon: ${phone || '-'}

Emne: ${safeSubject}

Melding:
${message}
`.trim()

    const html = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.5; font-size: 14px;">
        <h2>Ny lead fra signalnord.no</h2>
        <p><strong>Type:</strong> ${safeFormType}</p>
        <p><strong>Navn:</strong> ${name || '-'}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Bedrift:</strong> ${company || '-'}</p>
        <p><strong>Telefon:</strong> ${phone || '-'}</p>
        <p><strong>Emne:</strong> ${safeSubject}</p>
        <h3>Melding</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `.trim()

    const { error } = await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject: `[SignalNord lead] ${safeSubject}`,
      text: plainText,
      html,
    })

    if (error) {
      console.error('Resend-feil:', error)
      return NextResponse.json(
        { error: 'Klarte ikke å sende e-post. Prøv igjen senere.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Feil i /api/lead:', error)
    return NextResponse.json(
      { error: 'Noe gikk galt ved innsending av skjema.' },
      { status: 500 }
    )
  }
}
