import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollReveal from '@/hooks/useScrollReveal';

const Footer = () => {
  const { ref, isRevealed } = useScrollReveal();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Residential Design',
    'Commercial Interiors',
    'Kitchen Design',
    'Bedroom Design',
    'Office Spaces',
    'Consultation',
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div ref={ref} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-display text-2xl font-semibold">
                Brightleaf
              </span>
              <span className="block font-serif text-xs tracking-widest uppercase opacity-70 mt-1">
                Design Studio
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Transforming spaces into stunning environments that inspire comfort 
              and reflect your unique style. Based in Hyderabad, serving clients 
              across Telangana.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Social media link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <a
                  href="tel:09885301292"
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  098853 01292
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a
                  href="mailto:Satish@brightleafdesignstudio.com"
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm break-all"
                >
                  Satish@brightleafdesignstudio.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://share.google/pXij1i4bsCurJyyjm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  5th Floor, Plot No 60, Masjid Banda, Hyderabad 500084
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {currentYear} Brightleaf Design Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="text-primary-foreground/60 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-primary-foreground/60 hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
