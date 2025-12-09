import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'We will get back to you within 24 hours.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '098853 01292',
      href: 'tel:09885301292',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'Satish@brightleafdesignstudio.com',
      href: 'mailto:Satish@brightleafdesignstudio.com',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '5th Floor, Plot No 60, opposite ICICI Bank, Masjid Banda, Camelot Layout, Hyderabad 500084',
      href: 'https://share.google/pXij1i4bsCurJyyjm',
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Mon - Sat: 10AM - 7PM',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to transform your space? Contact us for a free consultation 
              and let's discuss how we can bring your vision to life.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {item.title}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.title === 'Office' ? '_blank' : undefined}
                        rel={item.title === 'Office' ? 'noopener noreferrer' : undefined}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Request a Free Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
            <p className="text-center text-sm text-muted-foreground mt-4">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
