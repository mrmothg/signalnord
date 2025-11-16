'use client'

import { useState } from 'react'
import { Send, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    bedrift: '',
    navn: '',
    epost: '',
    telefon: '',
    melding: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Takk for din henvendelse! Vi kontakter deg innen 24 timer.')
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Kontakt oss</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send oss en melding</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Bedrift</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={formData.bedrift}
                    onChange={(e) => setFormData({...formData, bedrift: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Navn</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={formData.navn}
                    onChange={(e) => setFormData({...formData, navn: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">E-post</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded"
                    value={formData.epost}
                    onChange={(e) => setFormData({...formData, epost: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Telefon</label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded"
                    value={formData.telefon}
                    onChange={(e) => setFormData({...formData, telefon: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Melding</label>
                  <textarea
                    className="w-full p-2 border rounded"
                    rows={4}
                    value={formData.melding}
                    onChange={(e) => setFormData({...formData, melding: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Send melding
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-muted-foreground">+47 23 00 00 00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">E-post</p>
                    <p className="text-muted-foreground">post@signalnord.no</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-muted-foreground">Oslo, Norge</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <p className="font-medium mb-2">Support</p>
                <p>Åpent mandag-fredag</p>
                <p>08:00 - 16:00</p>
                <p className="mt-2">24/7 for Pro-kunder</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
