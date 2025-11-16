import { Check, Zap, Shield, Clock } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FiberPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Bedriftsfiber</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Høyhastighets symmetrisk fiber for moderne bedrifter. 
          Fra 100 Mbit/s til 10 Gbit/s med garantert oppetid.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">2.990,-</p>
              <p className="text-muted-foreground mb-4">per måned</p>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-600" /> 100/100 Mbit/s</li>
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-600" /> 99.5% SLA</li>
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-600" /> Support 08-17</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <CardTitle>Bedrift</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">5.990,-</p>
              <p className="text-muted-foreground mb-4">per måned</p>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-600" /> 500/500 Mbit/s</li>
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-600" /> 99.9% SLA</li>
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-600" /> Support 24/7</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">12.990,-</p>
              <p className="text-muted-foreground mb-4">per måned</p>
              <ul className="space-y-2">
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-600" /> 1-10 Gbit/s</li>
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-600" /> 99.95% SLA</li>
                <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-600" /> Dedikert team</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Hvorfor velge vår fiber?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Symmetrisk hastighet</p>
                  <p className="text-muted-foreground">Like rask opp- og nedlasting</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Garantert oppetid</p>
                  <p className="text-muted-foreground">SLA med kreditt ved brudd</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Rask installasjon</p>
                  <p className="text-muted-foreground">2-4 uker leveringstid</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Ingen bindingstid</p>
                  <p className="text-muted-foreground">Fleksible avtaler</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/kontakt">Be om tilbud</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
