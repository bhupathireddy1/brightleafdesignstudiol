import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-living-room.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxurious modern living room interior design by Brightleaf Design Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-3xl">
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium tracking-widest uppercase rounded-full mb-6">
              Premium Interior Design
            </span>
          </div>
          
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Transform Your Space Into a
            <span className="block text-primary mt-2">Masterpiece</span>
          </h1>
          
          <p
            className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            We craft bespoke interiors that blend timeless elegance with modern functionality, 
            creating spaces that inspire and comfort.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button size="lg" className="group" asChild>
              <a href="#contact">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <a href="#portfolio">
                <Play className="mr-2 w-5 h-5" />
                View Our Work
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '10+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-display text-3xl md:text-4xl font-semibold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
