# SignalNord - B2B ISP/MSP Nettside

Komplett Next.js 14-basert nettside for SignalNord, en norsk B2B ISP/MSP-leverandør. Bygget med TypeScript, Tailwind CSS og shadcn/ui.

## 🚀 Rask start

```bash
# Installer dependencies
npm install

# Start utviklingsserver
npm run dev

# Åpne http://localhost:3000
```

## 📋 Forutsetninger

- Node.js 18.17 eller høyere
- npm eller yarn
- Git

## 🛠 Teknisk stack

- **Framework:** Next.js 14 (App Router)
- **Språk:** TypeScript
- **Styling:** Tailwind CSS
- **Komponenter:** shadcn/ui
- **Ikoner:** Lucide React
- **SEO:** next-seo
- **Analytics:** Plausible (GDPR-compliant)
- **Deployment:** Optimalisert for Vercel

## 📁 Prosjektstruktur

```
signalnord/
├── src/
│   ├── app/                  # Next.js App Router sider
│   │   ├── api/              # API routes
│   │   ├── managed-connectivity/
│   │   ├── leide-linjer/
│   │   ├── vpn/
│   │   ├── overvaking-msp/
│   │   ├── nis2-smb/
│   │   ├── status/
│   │   ├── privacy/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Hjemmeside
│   │   └── globals.css       # Global CSS
│   ├── components/           # React komponenter
│   │   ├── ui/              # shadcn/ui komponenter
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── lead-form.tsx
│   │   └── ...
│   └── lib/                 # Utility funksjoner
├── public/                  # Statiske filer
├── .env.example            # Miljøvariabler eksempel
└── package.json
```

## 🔧 Konfigurasjon

1. Kopier `.env.example` til `.env.local`:

```bash
cp .env.example .env.local
```

2. Oppdater miljøvariabler:

```env
# Site Configuration
SITE_URL=https://signalnord.no
NEXT_PUBLIC_SITE_URL=https://signalnord.no

# Analytics (Plausible)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=signalnord.no

# Email Service (valgfritt)
EMAIL_SERVICE_API_KEY=your_api_key
EMAIL_SERVICE_ENDPOINT=https://api.your-service.com
```

## 🎨 Design-system

### Farger

- **Primær:** #0a2540 (Mørk blå)
- **Sekundær:** #1e90ff (Lys blå)
- **Grå-skala:** Tailwind standard

### Typografi

- **Font:** Inter
- **Overskrifter:** Font-weight 600-700
- **Body:** Font-weight 400

### Spacing

Tre varianter tilgjengelig via CSS-variabler:
- Normal (standard)
- Tight (--spacing-multiplier: 0.875)
- Loose (--spacing-multiplier: 1.125)

## 📝 Innholdssider

1. **/** - Hjemmeside med hero, KPI, tjenester
2. **/managed-connectivity** - Pakker og priser
3. **/leide-linjer** - Dedikerte fiberforbindelser
4. **/vpn** - VPN-løsninger
5. **/overvaking-msp** - MSP-tjenester
6. **/nis2-smb** - NIS2 informasjon og sjekkliste
7. **/status** - Systemstatus og oppetid
8. **/privacy** - Personvernerklæring

## 🚀 NPM Scripts

```bash
# Utvikling
npm run dev           # Start utviklingsserver

# Bygging
npm run build         # Bygg for produksjon
npm run start         # Start produksjonsserver

# Kvalitet
npm run lint          # Kjør ESLint
npm run format        # Formater kode med Prettier
npm run typecheck     # TypeScript typesjekking
```

## 📊 Ytelse & SEO

### Lighthouse Score Mål
- Performance: ≥ 95
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

### Implementerte optimalisering
- Lazy loading av bilder
- Optimaliserte fonter
- Prefetch for interne lenker
- Strukturerte data (Schema.org)
- Dynamisk sitemap
- OpenGraph metadata

## 🔒 Sikkerhet

- GDPR-compliant cookie banner
- Content Security Policy headers
- XSS beskyttelse
- CSRF tokens for skjemaer
- Sikker håndtering av miljøvariabler

## 📱 Responsivt design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px (max 1200px container)

## 🚢 Deployment

### Vercel (Anbefalt)

1. Push til GitHub
2. Koble til Vercel
3. Automatisk deployment ved push

```bash
# Manuell deployment
npm i -g vercel
vercel
```

### Nginx

```nginx
server {
    listen 80;
    server_name signalnord.no;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing Sjekkliste

### Funksjonell testing
- [ ] Alle sider lastes korrekt
- [ ] Navigasjon fungerer
- [ ] Skjemaer sender data
- [ ] Cookie banner fungerer
- [ ] Responsivt på alle enheter

### Teknisk testing
- [ ] Ingen console errors
- [ ] Lighthouse score ≥ 95
- [ ] WCAG 2.1 AA compliance
- [ ] Cross-browser kompatibilitet
- [ ] Ytelse på 3G nettverk

### SEO testing
- [ ] Meta tags på plass
- [ ] Strukturerte data validerer
- [ ] Sitemap genereres
- [ ] Robots.txt fungerer

## 📈 Analytikk

Plausible Analytics er integrert med:
- Personvernvennlig tracking
- Ingen cookies uten samtykke
- GDPR-compliant
- Sanntids dashboard

## 🔄 Vedlikehold

### Regelmessige oppgaver
- Oppdater dependencies månedlig
- Sjekk for sikkerhetssårbarheter
- Gjennomgå og oppdater innhold
- Test alle skjemaer og integrasjoner

### Kommandoer
```bash
# Sjekk for oppdateringer
npm outdated

# Oppdater dependencies
npm update

# Sikkerhetsscan
npm audit
npm audit fix
```

## 🤝 Bidra

1. Fork prosjektet
2. Lag en feature branch (`git checkout -b feature/MinFeature`)
3. Commit endringer (`git commit -m 'Legg til MinFeature'`)
4. Push til branch (`git push origin feature/MinFeature`)
5. Åpne en Pull Request

## 📞 Support

For teknisk support eller spørsmål:
- E-post: dev@signalnord.no
- Telefon: +47 21 00 00 00

## 📄 Lisens

© 2025 SignalNord AS. Alle rettigheter forbeholdt.

---

**Utviklet med ❤️ for norske bedrifter**
