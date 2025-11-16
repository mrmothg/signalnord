import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Her kan du senere integrere med e-posttjeneste
  // For nå logger vi bare
  console.log('Kontaktskjema:', data)
  
  // Send e-post via tjeneste som Resend, SendGrid, etc.
  // Eksempel med Resend (må installeres og konfigureres)
  
  return NextResponse.json({ 
    success: true, 
    message: 'Takk for din henvendelse! Vi kontakter deg snart.' 
  })
}
