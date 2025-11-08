import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    content: 'SignalNord har vært instrumentale i vår digitale transformasjon. Deres proaktive overvåking og raske responstid har redusert nedetiden vår med 90%.',
    author: 'Lars Andersen',
    role: 'IT-sjef',
    company: 'TechCorp Norge AS',
    rating: 5,
  },
  {
    id: 2,
    content: 'Overgangen til SignalNords managed services har frigjort vårt IT-team til å fokusere på strategiske prosjekter. Profesjonell support og pålitelige løsninger.',
    author: 'Maria Olsen',
    role: 'CTO',
    company: 'Innovasjon AS',
    rating: 5,
  },
  {
    id: 3,
    content: 'Med SignalNords NIS2-kompetanse føler vi oss trygge på at vi møter alle regulatoriske krav. Deres ekspertise har vært uvurderlig for vår compliance.',
    author: 'Erik Johansen',
    role: 'Administrerende direktør',
    company: 'Finans Gruppen',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="relative">
          <CardContent className="pt-6">
            <div className="mb-4 flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <blockquote className="mb-4 text-sm leading-relaxed">
              "{testimonial.content}"
            </blockquote>
            <footer>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">
                {testimonial.role}, {testimonial.company}
              </div>
            </footer>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
