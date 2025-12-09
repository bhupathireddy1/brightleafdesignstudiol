import useScrollReveal from '@/hooks/useScrollReveal';
import heroImage from '@/assets/hero-living-room.jpg';
import bedroomImage from '@/assets/bedroom-design.jpg';
import kitchenImage from '@/assets/kitchen-design.jpg';
import officeImage from '@/assets/office-design.jpg';
import diningImage from '@/assets/dining-design.jpg';
import bathroomImage from '@/assets/bathroom-design.jpg';

const Expertise = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.05 });

  const expertiseAreas = [
    {
      id: 1,
      title: 'Living Room Design',
      subtitle: 'Create Comfort',
      description: 'Transform your living space into a stunning sanctuary of comfort and style.',
      image: heroImage,
    },
    {
      id: 2,
      title: 'Bedroom Interiors',
      subtitle: 'Peaceful Retreats',
      description: 'Design serene bedrooms that promote rest and reflect your personal style.',
      image: bedroomImage,
    },
    {
      id: 3,
      title: 'Kitchen Solutions',
      subtitle: 'Heart of Home',
      description: 'Functional and beautiful kitchens designed for modern living.',
      image: kitchenImage,
    },
    {
      id: 4,
      title: 'Office Spaces',
      subtitle: 'Productive Environments',
      description: 'Inspiring workspaces that boost productivity and creativity.',
      image: officeImage,
    },
    {
      id: 5,
      title: 'Dining Areas',
      subtitle: 'Gather & Celebrate',
      description: 'Elegant dining spaces perfect for memorable gatherings.',
      image: diningImage,
    },
    {
      id: 6,
      title: 'Bathroom Design',
      subtitle: 'Spa Experience',
      description: 'Luxurious bathrooms that feel like a personal spa retreat.',
      image: bathroomImage,
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-6">
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
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal ${gridRevealed ? 'revealed' : ''}`}
        >
          {expertiseAreas.map((area, index) => (
            <div
              key={area.id}
              className="group relative rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={area.image}
                  alt={`${area.title} - Interior design expertise`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  {area.subtitle}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-muted-foreground">
                  {area.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4 text-lg">
            Not sure which service you need?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary font-semibold text-lg hover:underline underline-offset-4"
          >
            Book Free Consultation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Expertise;