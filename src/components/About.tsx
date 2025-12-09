import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import bedroomImage from '@/assets/bedroom-design.jpg';

const About = () => {
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
    { icon: Users, number: '150+', label: 'Happy Clients' },
    { icon: Clock, number: '45', label: 'Days Avg. Delivery' },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={bedroomImage}
                alt="Elegant bedroom interior design showcasing premium craftsmanship"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl max-w-[200px]">
              <div className="font-display text-4xl font-semibold">10+</div>
              <div className="text-sm opacity-90 mt-1">Years Crafting Beautiful Spaces</div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              About Brightleaf
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
              Where Vision Meets Craftsmanship
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Brightleaf Design Studio, we believe that every space tells a story. 
              Based in the heart of Hyderabad, we have been transforming homes and 
              commercial spaces into stunning environments that reflect our clients' 
              unique personalities and lifestyles.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of experienced designers combines creativity with functionality, 
              ensuring that each project is not only visually captivating but also 
              perfectly tailored to your needs. From concept to completion, we are 
              committed to delivering excellence.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-semibold text-foreground">
                      {stat.number}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
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
