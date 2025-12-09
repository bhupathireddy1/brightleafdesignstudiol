import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import kitchenImage from '@/assets/kitchen-design.jpg';
import diningImage from '@/assets/dining-design.jpg';
import bathroomImage from '@/assets/bathroom-design.jpg';
import officeImage from '@/assets/office-design.jpg';
import bedroomImage from '@/assets/bedroom-design.jpg';
import heroImage from '@/assets/hero-living-room.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'living', 'kitchen', 'bedroom', 'office'];

  const projects = [
    {
      id: 1,
      title: 'Modern Living Space',
      category: 'living',
      image: heroImage,
      location: 'Jubilee Hills, Hyderabad',
    },
    {
      id: 2,
      title: 'Luxury Kitchen Design',
      category: 'kitchen',
      image: kitchenImage,
      location: 'Banjara Hills, Hyderabad',
    },
    {
      id: 3,
      title: 'Contemporary Bedroom',
      category: 'bedroom',
      image: bedroomImage,
      location: 'Gachibowli, Hyderabad',
    },
    {
      id: 4,
      title: 'Elegant Dining Room',
      category: 'living',
      image: diningImage,
      location: 'Madhapur, Hyderabad',
    },
    {
      id: 5,
      title: 'Spa Bathroom',
      category: 'bedroom',
      image: bathroomImage,
      location: 'Kondapur, Hyderabad',
    },
    {
      id: 6,
      title: 'Executive Home Office',
      category: 'office',
      image: officeImage,
      location: 'HITEC City, Hyderabad',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of stunning interior transformations across Hyderabad.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={`${project.title} - Interior design project in ${project.location}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {project.location}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
