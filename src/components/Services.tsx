import { Home, Building2, Palette, Lightbulb, Sofa, PenTool } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description:
        'Transform your home into a haven of comfort and style with our comprehensive residential interior design services.',
    },
    {
      icon: Building2,
      title: 'Commercial Spaces',
      description:
        'Create inspiring work environments that boost productivity and leave lasting impressions on clients and visitors.',
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description:
        'Expert color schemes that harmonize with your space, lighting, and personal preferences for a cohesive look.',
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description:
        'Strategic lighting solutions that enhance ambiance, highlight architectural features, and create perfect moods.',
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description:
        'Curated furniture pieces that blend aesthetics with functionality, sourced from premium manufacturers.',
    },
    {
      icon: PenTool,
      title: '3D Visualization',
      description:
        'Photorealistic 3D renderings that let you experience your transformed space before a single element is placed.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
            Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive interior design services tailored to transform your vision into reality, 
            with attention to every detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card hover:bg-primary transition-all duration-500 border-border/50 hover:border-primary hover:shadow-xl cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-secondary group-hover:bg-primary-foreground/20 flex items-center justify-center mb-6 transition-colors duration-500">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed transition-colors duration-500">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Not sure which service you need?
          </p>
          <a
            href="#contact"
            className="text-primary font-medium hover:underline underline-offset-4"
          >
            Schedule a free consultation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
