import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://signalnord.no'
  
  const routes = [
    '',
    '/fiber',
    '/leide-linjer',
    '/vpn',
    '/managed-connectivity',
    '/overvaking-msp',
    '/backup',
    '/nis2-smb',
    '/kontakt',
    '/om-oss',
    '/status',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
