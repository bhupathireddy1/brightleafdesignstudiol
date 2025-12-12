import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-living-room.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxurious modern living room interior design by Brightleaf Design Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-4xl">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold tracking-widest uppercase rounded-full mb-8">
              Premium Interior Design
            </span>
          </div>

          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[hsl(0,0%,100%)] leading-[1.1] mb-8 animate-fade-up uppercase tracking-tight"
            style={{ animationDelay: "0.2s" }}
          >
            We Create, Design,
            <br />
            <span className="text-primary">And Transform</span>
            <br />
            Spaces
          </h1>

          <p
            className="text-lg md:text-xl lg:text-2xl text-[hsl(0,0%,100%)]/90 max-w-2xl mb-12 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            We craft bespoke interiors that blend timeless elegance with modern functionality, creating spaces that
            inspire and comfort.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="group text-base font-semibold px-8 py-6" asChild>
              <a href="#contact">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-[hsl(0,0%,100%)]/40 text-[hsl(0,0%,100%)] hover:bg-[hsl(0,0%,100%)]/10 hover:text-[hsl(0,0%,100%)] text-base font-semibold px-8 py-6"
              asChild
            >
              <a href="tel:+919885301292">
                <Phone className="mr-2 w-5 h-5" />
                +91 98853 01292
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 md:gap-16 mt-20 pt-10 border-t border-[hsl(0,0%,100%)]/20 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { number: "950+", label: "Projects Done" },
              { number: "100%", label: "Satisfaction" },
              { number: "10+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-[hsl(0,0%,100%)]/70 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile to avoid overlapping stats */}
      <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 rounded-full border-2 border-[hsl(0,0%,100%)]/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[hsl(0,0%,100%)]/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
