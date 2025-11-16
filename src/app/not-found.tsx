import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl mb-4">Siden finnes ikke</h2>
        <p className="text-muted-foreground mb-8">
          Beklager, vi finner ikke siden du leter etter.
        </p>
        <Link href="/" className="btn btn-primary">
          Tilbake til forsiden
        </Link>
      </div>
    </div>
  )
}
