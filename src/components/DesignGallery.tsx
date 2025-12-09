import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

// Gallery images
import residential1 from '@/assets/gallery/residential-1.jpg';
import residential2 from '@/assets/gallery/residential-2.jpg';
import residential3 from '@/assets/gallery/residential-3.jpg';
import residential4 from '@/assets/gallery/residential-4.jpg';
import commercial1 from '@/assets/gallery/commercial-1.jpg';
import commercial2 from '@/assets/gallery/commercial-2.jpg';
import commercial3 from '@/assets/gallery/commercial-3.jpg';
import heroImage from '@/assets/hero-living-room.jpg';
import kitchenImage from '@/assets/kitchen-design.jpg';
import bedroomImage from '@/assets/bedroom-design.jpg';

const DesignGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.05 });

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'residential', label: 'Residential Design' },
    { id: 'commercial', label: 'Commercial Spaces' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Living Space',
      category: 'residential',
      image: residential1,
      description: 'Contemporary living room with warm wooden accents',
    },
    {
      id: 2,
      title: 'Elegant Bedroom Suite',
      category: 'residential',
      image: residential2,
      description: 'Sophisticated bedroom with panoramic city views',
    },
    {
      id: 3,
      title: 'Premium Kitchen Design',
      category: 'residential',
      image: residential3,
      description: 'Marble countertops with modern appliances',
    },
    {
      id: 4,
      title: 'Corporate Office Space',
      category: 'commercial',
      image: commercial1,
      description: 'Open floor plan with ergonomic furniture',
    },
    {
      id: 5,
      title: 'Luxury Retail Store',
      category: 'commercial',
      image: commercial2,
      description: 'Premium retail interior with elegant displays',
    },
    {
      id: 6,
      title: 'Fine Dining Restaurant',
      category: 'commercial',
      image: commercial3,
      description: 'Warm ambiance with decorative lighting',
    },
    {
      id: 7,
      title: 'Executive Dining Room',
      category: 'residential',
      image: residential4,
      description: 'Chandelier lighting with wooden elements',
    },
    {
      id: 8,
      title: 'Luxury Living Room',
      category: 'residential',
      image: heroImage,
      description: 'Premium finishes with natural lighting',
    },
    {
      id: 9,
      title: 'Designer Kitchen',
      category: 'residential',
      image: kitchenImage,
      description: 'Modern kitchen with premium finishes',
    },
    {
      id: 10,
      title: 'Master Bedroom',
      category: 'residential',
      image: bedroomImage,
      description: 'Elegant bedroom with luxury bedding',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${headerRevealed ? 'revealed' : ''}`}
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Our Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Stunning Design Gallery{' '}
            <span className="text-primary">That Inspires</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Explore our collection of award-winning interior design projects that showcase our creativity, 
            attention to detail, and commitment to excellence.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-card text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal ${gridRevealed ? 'revealed' : ''}`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={project.image}
                alt={`${project.title} - Interior design project`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-4 py-1.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                {project.category === 'residential' ? 'Residential' : 'Commercial'}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-xl font-bold text-[hsl(0,0%,100%)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[hsl(0,0%,100%)]/80 text-sm">
                  {project.description}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;