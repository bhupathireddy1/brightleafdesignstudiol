import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import bedroomImage from '@/assets/bedroom-design.jpg';
import kitchenImage from '@/assets/kitchen-design.jpg';
import useScrollReveal from '@/hooks/useScrollReveal';

const About = () => {
  const { ref: leftRef, isRevealed: leftRevealed } = useScrollReveal();
  const { ref: rightRef, isRevealed: rightRevealed } = useScrollReveal();

  const features = [
    'Personalized Design Approach',
    'Premium Quality Materials',
    'On-Time Project Delivery',
    'Transparent Pricing',
    'Post-Project Support',
    '3D Visualization Included',
  ];

  const stats = [
    { icon: Award, number: '10+', label: 'Years of Excellence' },
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Clock, number: '45', label: 'Days Avg. Delivery' },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div 
            ref={leftRef}
            className={`relative scroll-reveal-left ${leftRevealed ? 'revealed' : ''}`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={bedroomImage}
                  alt="Elegant bedroom interior design showcasing premium craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Secondary Image */}
              <div className="absolute -bottom-12 -right-12 w-2/3 aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-card hidden md:block">
                <img
                  src={kitchenImage}
                  alt="Modern kitchen interior design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -top-8 -left-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
              <div className="font-display text-5xl font-bold">10+</div>
              <div className="text-sm opacity-90 mt-1 font-medium">Years Crafting Beautiful Spaces</div>
            </div>
          </div>

          {/* Content Column */}
          <div 
            ref={rightRef}
            className={`scroll-reveal-right ${rightRevealed ? 'revealed' : ''}`}
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">
              About Brightleaf
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Crafting Beautiful Spaces{' '}
              <span className="text-primary">Since 2014</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are passionate interior designers committed to creating spaces that inspire, 
              comfort, and reflect your unique personality through innovative design solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Brightleaf Design Studio, we believe that great design has the power to transform 
              not just spaces, but lives. Our team combines creativity with functionality to deliver 
              exceptional results that exceed expectations.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-foreground">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;