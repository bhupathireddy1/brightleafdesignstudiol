import { Calendar, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useScrollReveal from '@/hooks/useScrollReveal';

const Blog = () => {
  const { ref, isRevealed } = useScrollReveal();

  const blogPosts = [
    {
      id: 1,
      title: 'Luxury 3BHK Apartment Makeover in Kondapur',
      excerpt:
        'See how we transformed a dated 3BHK into a warm, luxurious home with custom furniture, layered lighting, and smart storage.',
      author: 'Satish',
      date: 'Dec 10, 2024',
      category: 'Project Showcase',
      image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Modern Office Interiors that Boost Productivity',
      excerpt:
        'Thoughtfully designed workspaces that balance focus, collaboration, and brand identity for growing businesses.',
      author: 'Satish',
      date: 'Dec 3, 2024',
      category: 'Commercial Design',
      image: 'https://images.unsplash.com/photo-1522204502588-56c0244b0a09?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: '5 Interior Design Mistakes to Avoid in Your New Home',
      excerpt:
        'From wrong furniture sizes to poor lighting, avoid these common mistakes to save time, money, and frustration.',
      author: 'Satish',
      date: 'Nov 25, 2024',
      category: 'Design Tips',
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'How to Choose the Right Wardrobes & Storage Solutions',
      excerpt:
        'Plan your wardrobes smartly with the right materials, hardware, and internal layouts for a clutter-free home.',
      author: 'Satish',
      date: 'Nov 18, 2024',
      category: 'Storage & Planning',
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'Budget-Friendly Interior Design Ideas for 2BHK Homes',
      excerpt:
        'Practical ideas to achieve a premium look on a realistic budget using smart materials and design choices.',
      author: 'Satish',
      date: 'Nov 10, 2024',
      category: 'Budget Design',
      image: 'https://images.unsplash.com/photo-1519710884009-22a691c92f02?w=600&h=400&fit=crop',
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