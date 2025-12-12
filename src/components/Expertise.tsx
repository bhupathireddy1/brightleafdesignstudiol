import { Home, Building2, Grid3X3, MessageSquare, Hammer, Crown, Star, ArrowRight } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';

const Expertise = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.05 });

  const expertiseAreas = [
    {
      id: 1,
      title: 'Complete Home Design',
      description: 'End-to-end home interior design from living rooms to bedrooms, creating cohesive and comfortable living spaces.',
      icon: Home,
      features: ['3D Visualization', 'Space Planning', 'Furniture Selection', 'Color Consultation'],
      popular: false,
    },
    {
      id: 2,
      title: 'Commercial Interiors',
      description: 'Professional retail space design that enhances productivity and brand image.',
      icon: Building2,
      features: ['Retail Spaces', 'Brand Integration', 'Ergonomic Design', 'Custom Solutions'],
      popular: true,
    },
    {
      id: 3,
      title: 'Modular Solutions',
      description: 'Smart modular furniture and storage solutions for modern homes and offices.',
      icon: Grid3X3,
      features: ['Custom Wardrobes', 'Kitchen Modules', 'Storage Solutions', 'Space Optimization'],
      popular: false,
    },
    {
      id: 4,
      title: 'Design Consultation',
      description: 'Expert design advice and guidance for DIY enthusiasts and budget-conscious clients.',
      icon: MessageSquare,
      features: ['Design Plans', 'Material Selection', 'Color Schemes', 'Style Guidance'],
      popular: false,
    },
    {
      id: 5,
      title: 'Renovation Services',
      description: 'Complete renovation management from planning to execution, transforming existing spaces.',
      icon: Hammer,
      features: ['Project Management', 'Contractor Coordination', 'Timeline Planning', 'Quality Control'],
      popular: false,
    },
    {
      id: 6,
      title: 'Luxury Design',
      description: 'Premium luxury interior design services for high-end residential and commercial projects.',
      icon: Crown,
      features: ['Luxury Materials', 'Bespoke Furniture', 'Premium Finishes', 'Exclusive Design'],
      popular: false,
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${headerRevealed ? 'revealed' : ''}`}
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Our <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            From complete home makeovers to commercial spaces, we offer comprehensive interior design 
            services tailored to your vision and budget.
          </p>
        </div>

        {/* Expertise Grid */}
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 scroll-reveal ${gridRevealed ? 'revealed' : ''}`}
        >
          {expertiseAreas.map((area, index) => (
            <div
              key={area.id}
              className={`group relative rounded-2xl bg-card p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border ${
                area.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border/50'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {area.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                area.popular ? 'bg-primary/20 text-primary' : 'bg-muted text-primary'
              }`}>
                <area.icon className="w-6 h-6" />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-6">
                {area.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {area.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border-t border-border/50 pt-6 mt-auto">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[hsl(45,93%,58%)] text-[hsl(45,93%,58%)]" />
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full font-semibold ${
                    area.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                  asChild
                >
                  <a href="#contact">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
