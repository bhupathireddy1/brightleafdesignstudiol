import { Calendar, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useScrollReveal from '@/hooks/useScrollReveal';

const Blog = () => {
  const { ref, isRevealed } = useScrollReveal();

  const blogPosts = [
    {
      id: 1,
      title: '10 Living Room Design Trends for 2024',
      excerpt: 'Discover the latest trends shaping modern living spaces, from biophilic design to sustainable materials that are transforming homes.',
      author: 'Satish',
      date: 'Dec 5, 2024',
      category: 'Design Trends',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Color Palette for Your Home',
      excerpt: 'A comprehensive guide to selecting colors that create harmony and reflect your personality in every room of your house.',
      author: 'Satish',
      date: 'Nov 28, 2024',
      category: 'Tips & Guides',
      image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Small Space, Big Impact: Maximizing Your Apartment',
      excerpt: 'Smart solutions and clever design tricks to make the most of compact living spaces without compromising on style.',
      author: 'Satish',
      date: 'Nov 20, 2024',
      category: 'Small Spaces',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Our Blog
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Interior Design{' '}
            <span className="text-primary">Tips & Inspiration</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Stay updated with the latest trends, design tips, and inspiration 
            to transform your living spaces.
          </p>
        </div>

        {/* Blog Grid */}
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
        >
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto font-semibold text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                >
                  Read More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="font-semibold">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;