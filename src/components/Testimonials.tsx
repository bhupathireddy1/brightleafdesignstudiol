import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Homeowner, Jubilee Hills',
      content:
        'Brightleaf transformed our 3BHK into a stunning modern home. Their attention to detail and understanding of our needs was exceptional. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'CEO, Tech Solutions',
      content:
        'Our office space now reflects our company culture perfectly. The team delivered on time and within budget. Outstanding professionalism throughout.',
      rating: 5,
    },
    {
      name: 'Ananya Reddy',
      role: 'Homeowner, Gachibowli',
      content:
        'From the initial consultation to the final reveal, the experience was seamless. They truly listened to our vision and exceeded our expectations.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real experiences from homeowners and businesses who trusted us with their spaces.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-card border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display text-lg font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
