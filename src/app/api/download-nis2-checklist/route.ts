import { NextResponse } from 'next/server';

export async function GET() {
  // In production, this would generate or fetch a PDF
  // For now, we'll return a placeholder response
  
  const pdfContent = `
# NIS2 Sjekkliste for SMB

## 10 Kritiske tiltak for NIS2-compliance

### 1. Tilgangskontroll og MFA
☐ Implementer multi-faktor autentisering for alle brukere
☐ Etabler rollebasert tilgangskontroll (RBAC)
☐ Regelmessig gjennomgang av tilgangsrettigheter

### 2. Logging og overvåking
☐ Automatisk logging av alle sikkerhetshendelser
☐ Sentralisert logglagring med backup
☐ Sanntids varslinger for kritiske hendelser

### 3. Hendelseshåndtering
☐ Dokumentert incident response-plan
☐ Definerte eskaleringsrutiner
☐ Rapporteringsrutiner (24-72 timer)

### 4. Backup og gjenoppretting
☐ Automatiserte backup-rutiner
☐ Regelmessig test av gjenoppretting
☐ Offline/offsite backup-kopier

### 5. Patch management
☐ Automatisert oppdatering av kritiske systemer
☐ Månedlig patchsyklus for alle systemer
☐ Dokumentasjon av unntak og risikovurdering

### 6. Leverandørstyring
☐ Sikkerhetsvurdering av alle leverandører
☐ Kontraktuelle sikkerhetskrav
☐ Regelmessig revisjon av tredjepartstilganger

### 7. Nettverkssegmentering
☐ Separasjon av kritiske systemer
☐ DMZ for eksterne tjenester
☐ Mikrosegmentering for sensitive data

### 8. Kryptering
☐ Ende-til-ende kryptering for data i transit
☐ Kryptering av sensitive data at rest
☐ Sikker nøkkelhåndtering

### 9. Sikkerhetsopplæring
☐ Årlig sikkerhetsopplæring for alle ansatte
☐ Phishing-simuleringer kvartalsvis
☐ Oppdaterte sikkerhetsprosedyrer

### 10. Compliance-dokumentasjon
☐ Oppdatert risikomatrise
☐ Business continuity plan
☐ Årlig sikkerhetsrevisjon

---
SignalNord AS | signalnord.no | post@signalnord.no | +47 21 00 00 00
`;

  // Convert to PDF (placeholder - in production use a PDF library)
  const pdfBuffer = Buffer.from(pdfContent, 'utf-8');

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="SignalNord-NIS2-Sjekkliste.pdf"',
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In production, this would:
    // 1. Validate the input
    // 2. Store the lead in a database
    // 3. Send an email with the PDF attachment
    // 4. Trigger any CRM integrations
    
    console.log('New NIS2 checklist request:', body);
    
    // Simulate sending email
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({
      success: true,
      message: 'NIS2-sjekkliste sendt til din e-post',
    });
  } catch (error) {
    console.error('Error processing NIS2 checklist request:', error);
    return NextResponse.json(
      { success: false, message: 'En feil oppstod. Vennligst prøv igjen.' },
      { status: 500 }
    );
  }
}
