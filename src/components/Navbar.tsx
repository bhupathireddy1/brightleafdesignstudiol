import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/brightleaf-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#expertise" },
    { name: "Portfolio", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/98 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Header container with responsive heights: 80px desktop, 72px tablet, 64px mobile */}
      <div className="container flex items-center justify-between h-16 md:h-[72px] lg:h-20 px-4 md:px-6">
        {/* Logo with responsive sizing: 44px desktop, 38px tablet, 34px mobile */}
        <a href="#home" className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="Brightleaf Design Studio logo"
            className="h-[34px] md:h-[38px] lg:h-[44px] w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[16px] font-medium leading-[1.3] tracking-[0.4px] transition-all duration-200 ease-in-out relative group ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white/80"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[1.5px] transition-all duration-200 ease-in-out group-hover:w-full ${
                    isScrolled ? "bg-primary" : "bg-white/70"
                  }`}
                />
              </a>
            ))}
          </div>
          
          {/* CTA Button with premium styling */}
          <Button
            variant="default"
            className="ml-8 text-[15px] font-semibold px-[18px] py-[10px] h-auto rounded-[10px]"
            asChild
          >
            <a href="tel:+919885301292">
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors duration-200 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-lg shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[14px] md:text-[15px] font-medium leading-[1.3] tracking-[0.4px] text-foreground hover:text-primary transition-colors duration-200 py-2 border-b border-border/30"
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="default"
            className="mt-4 text-[15px] font-semibold px-[18px] py-[10px] h-auto rounded-[10px]"
            asChild
          >
            <a href="tel:+919885301292">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;