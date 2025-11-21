// src/app/api/lead/route.ts
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import fs from 'fs'
import path from 'path'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, company, phone, formType } = body

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Mangler e-postadresse' },
        { status: 400 },
      )
    }

    // Prøv å lese PDF, men ikke krasj hvis den mangler
    let attachments: {
      filename: string
      content: string
      contentType: string
    }[] = []

    if (formType === 'nis2-checklist') {
      try {
        const pdfPath = path.join(
          process.cwd(),
          'public',
          'docs',
          'signalnord-nis2-sjekkliste.pdf',
        )
        const pdfBuffer = fs.readFileSync(pdfPath)
        const pdfBase64 = pdfBuffer.toString('base64')

        attachments.push({
          filename: 'SignalNord-NIS2-sjekkliste.pdf',
          content: pdfBase64,
          contentType: 'application/pdf',
        })
      } catch (err) {
        console.error('Klarte ikke å lese PDF-filen:', err)
        // Vi sender fortsatt e-posten, bare uten vedlegg
      }
    }

    const subject =
      formType === 'nis2-checklist'
        ? 'NIS2-sjekkliste fra SignalNord'
        : 'Henvendelse fra SignalNord'

    const htmlBody =
      formType === 'nis2-checklist'
        ? `
          <p>Hei ${name || ''},</p>
          <p>Takk for interessen for NIS2-sjekklisten vår.</p>
          <p>Vedlagt finner du en kort og konkret sjekkliste du kan bruke i dialog med ledelse, IT-ansvarlig eller styret.</p>
          <p>Gi gjerne beskjed hvis dere ønsker hjelp til å prioritere tiltak eller se nærmere på nettverk, tilgangsstyring og overvåking.</p>
          <p>Hilsen<br/>SignalNord</p>
        `
        : `
          <p>Ny henvendelse fra nettsiden:</p>
          <ul>
            <li>Navn: ${name || '-'}</li>
            <li>E-post: ${email || '-'}</li>
            <li>Bedrift: ${company || '-'}</li>
            <li>Telefon: ${phone || '-'}</li>
            <li>Skjema: ${formType || '-'}</li>
          </ul>
        `

    await resend.emails.send({
      from: 'SignalNord <no-reply@mail.signalnord.no>',
      to: email, // send PDF til brukeren
      bcc: 'post@signalnord.no', // kopi til deg
      subject,
      html: htmlBody,
      attachments: attachments.length ? attachments : undefined,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Feil i /api/lead:', err)
    return NextResponse.json(
      { success: false, error: 'Serverfeil' },
      { status: 500 },
    )
  }
}
