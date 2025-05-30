import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming a similar button style or a link styled as button

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Empire Asphalt did an amazing job on our driveway. Professional, punctual, and the quality is outstanding. Highly recommended!",
    name: "Sarah Johnson",
    location: "Surrey, BC",
    stars: 5,
  },
  {
    quote: "We needed our parking lot repaved quickly for our business. Empire delivered on time and on budget. Excellent work!",
    name: "Mike Chen",
    location: "Vancouver, BC",
    stars: 5,
  },
  {
    quote: "From quote to completion, the entire process was smooth. The crew was courteous and cleaned up perfectly. Will use again!",
    name: "Jennifer Smith",
    location: "Langley, BC",
    stars: 5,
  },
];

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, location, stars }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
    <div className="flex mb-2">
      {Array(stars)
        .fill(0)
        .map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        ))}
    </div>
    <p className="text-slate-700 italic mb-4 flex-grow">"{quote}"</p>
    <div>
      <p className="font-semibold text-primary">{name}</p>
      <p className="text-sm text-slate-500">{location}</p>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="text-center">
          {/* Using a button for now, can be changed to a Link component from Next.js later */}
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-yellow-400 hover:text-black">
            Read More Reviews &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;