import { CheckCircle, Award, Users, Clock, Sparkles, Shield } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

const WhyUs = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.1 });

  const reasons = [
    {
      icon: Award,
      title: 'Award-Winning Design',
      description: 'Recognized for excellence in interior design with multiple industry awards.',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: '12+ years of expertise with a team of skilled designers and craftsmen.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time and ensure projects are completed on schedule.',
    },
    {
      icon: Sparkles,
      title: 'Personalized Approach',
      description: 'Every design is tailored to reflect your unique style and preferences.',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Premium materials and meticulous attention to detail in every project.',
    },
    {
      icon: CheckCircle,
      title: 'End-to-End Service',
      description: 'From concept to completion, we handle everything for a hassle-free experience.',
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${headerRevealed ? 'revealed' : ''}`}
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Why <span className="text-primary">Brightleaf</span> Design Studio?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            We combine creativity, expertise, and dedication to transform your spaces into
            extraordinary environments you'll love.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal ${gridRevealed ? 'revealed' : ''}`}
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
