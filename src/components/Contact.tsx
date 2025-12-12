import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, MessageCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import useScrollReveal from '@/hooks/useScrollReveal';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const { toast } = useToast();
  const { ref: leftRef, isRevealed: leftRevealed } = useScrollReveal();
  const { ref: rightRef, isRevealed: rightRevealed } = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: 'Message Sent!',
        description: 'We will get back to you within 24 hours.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or call us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 98853 01292',
      href: 'tel:+919885301292',
      action: 'Click to call',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'Satish@brightleafdesignstudio.com',
      href: 'mailto:Satish@brightleafdesignstudio.com',
      action: 'Send email',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '5th Floor, Plot No 60, opposite ICICI Bank, Camelot Layout, Kondapur, Hyderabad, Telangana 500084',
      href: 'https://share.google/pXij1i4bsCurJyyjm',
      action: 'Get directions',
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Mon - Sat: 10AM - 7PM',
      href: null,
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Let's Create Something{' '}
            <span className="text-primary">Beautiful Together</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Ready to transform your space? Contact us for a free consultation 
            and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <div 
            ref={leftRef}
            className={`max-w-xl mx-auto w-full scroll-reveal-left ${leftRevealed ? 'revealed' : ''}`}
          >
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-5 p-5 rounded-2xl bg-card hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1 font-medium">
                      {item.title}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.title === 'Office' ? '_blank' : undefined}
                        rel={item.title === 'Office' ? 'noopener noreferrer' : undefined}
                        className="text-foreground font-semibold hover:text-primary transition-colors block mb-1"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-semibold block mb-1">
                        {item.value}
                      </span>
                    )}
                    {item.action && (
                      <span className="text-primary text-sm font-medium">{item.action} →</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" className="flex-1 min-w-[200px] font-semibold" asChild>
                <a href="tel:+919885301292">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="flex-1 min-w-[200px] font-semibold border-[hsl(142,70%,45%)] text-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,45%)] hover:text-[hsl(0,0%,100%)]" 
                asChild
              >
                <a href="https://wa.me/919885301292" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={rightRef}
            className={`max-w-xl mx-auto w-full bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border/50 scroll-reveal-right ${rightRevealed ? 'revealed' : ''}`}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Request a Free Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background h-14 text-base px-5"
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
                  className="bg-background h-14 text-base px-5"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="bg-background h-14 text-base px-5"
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
                  className="bg-background resize-none text-base px-5 py-4"
                />
              </div>
              <Button type="submit" size="lg" className="w-full h-14 text-base font-semibold" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
            <p className="text-center text-muted-foreground mt-6 font-medium">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;