// src/app/api/lead/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type LeadBody = {
  name?: string
  email?: string
  company?: string
  phone?: string
  formType?: string
  message?: string
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadBody
    const { name, email, company, phone, formType, message } = body

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Mangler e-postadresse' },
        { status: 400 },
      )
    }

    const isNis2 = formType === 'nis2-checklist'
    const nis2Link =
      'https://signalnord.no/docs/signalnord-nis2-sjekkliste.pdf'

    // E-post til brukeren
    const userSubject = isNis2
      ? 'NIS2-sjekkliste fra SignalNord'
      : 'Takk for henvendelsen til SignalNord'

    const userHtml = isNis2
      ? `
        <p>Hei${name ? ` ${name}` : ''},</p>
        <p>Takk for interessen for NIS2-sjekklisten vår.</p>
        <p>Du kan laste den ned her:</p>
        <p><a href="${nis2Link}" target="_blank" rel="noopener noreferrer">
          Last ned NIS2-sjekklisten (PDF)
        </a></p>
        <p>Sjekklisten er laget for å gi deg et raskt bilde av hvor dere står på
        de viktigste punktene – og som utgangspunkt for dialog internt.</p>
        <p>Gi gjerne beskjed hvis dere ønsker hjelp til å prioritere tiltak eller
        se nærmere på nettverk, tilgangsstyring og overvåking.</p>
        <p>Hilsen<br/>SignalNord</p>
      `
      : `
        <p>Hei${name ? ` ${name}` : ''},</p>
        <p>Takk for at du tok kontakt med SignalNord.</p>
        <p>Vi går gjennom henvendelsen din og kommer tilbake til deg så snart som mulig.</p>
        <p>Hilsen<br/>SignalNord</p>
      `

    await resend.emails.send({
      from: 'SignalNord <no-reply@mail.signalnord.no>',
      to: email,
      subject: userSubject,
      html: userHtml,
    })

    // E-post til deg/intern varsling
    await resend.emails.send({
      from: 'SignalNord <no-reply@mail.signalnord.no>',
      to: 'post@signalnord.no',
      subject: `[SignalNord lead] ${formType || 'skjema'}`,
      html: `
        <p>Ny henvendelse fra nettsiden:</p>
        <ul>
          <li><strong>Navn:</strong> ${name || '-'}</li>
          <li><strong>E-post:</strong> ${email || '-'}</li>
          <li><strong>Bedrift:</strong> ${company || '-'}</li>
          <li><strong>Telefon:</strong> ${phone || '-'}</li>
          <li><strong>Skjema:</strong> ${formType || '-'}</li>
        </ul>
        ${message ? `<p><strong>Melding:</strong><br/>${message}</p>` : ''}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Feil i /api/lead:', error)
    return NextResponse.json(
      { success: false, error: 'Serverfeil i lead-endepunktet' },
      { status: 500 },
    )
  }
}
