import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Phone, Globe, Shuffle, Image } from "lucide-react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import logo from "@/assets/brightleaf-logo.png";
import heroImage from "@/assets/hero-living-room.jpg";
import bedroomImage from "@/assets/bedroom-design.jpg";
import kitchenImage from "@/assets/kitchen-design.jpg";
import diningImage from "@/assets/dining-design.jpg";
import officeImage from "@/assets/office-design.jpg";
import bathroomImage from "@/assets/bathroom-design.jpg";

const allImages = [heroImage, bedroomImage, kitchenImage, diningImage, officeImage, bathroomImage];

const headlines = [
  "Your Flat Can Look Like This Too.",
  "We'll Transform Your Flat Like This.",
  "One Team. One Home. Zero Stress.",
  "Why Should Only This Flat Look Good?",
  "Creators of Model Flat 212",
  "Dream It. Design It. Live It.",
  "From Blueprint to Beautiful.",
  "Your Home, Our Passion.",
  "Interiors That Inspire.",
  "Make Your Flat Stunning.",
  "Design That Speaks Luxury.",
  "Where Dreams Meet Design.",
  "Elegance in Every Corner.",
  "Transform Your Space Today.",
  "Live in Your Dream Home.",
];

const sublines = [
  "Experience luxury living with bespoke interior design",
  "From empty walls to stunning interiors",
  "Your complete interior solution under one roof",
  "Your new flat deserves the same love and attention",
  "The same expertise, now for your home",
  "Premium interiors delivered on time",
  "Crafted with precision, designed with love",
  "Where quality meets affordability",
  "Expert designers at your service",
  "Making homes beautiful since 2015",
];

const ctas = [
  "Book Your Free Consultation",
  "Contact Us Today",
  "Get Started Now",
  "Schedule a Visit",
  "Let's Talk Design",
  "Transform Your Flat",
  "Call Now for Free Quote",
  "Visit Our Studio",
];

// Simple, clean design templates
const designTemplates = [
  // Design 1: Clean White with accent
  { bg: "bg-white", accent: "bg-emerald-600", text: "text-slate-800", accentText: "text-emerald-600" },
  // Design 2: Bold Black
  { bg: "bg-slate-900", accent: "bg-amber-500", text: "text-white", accentText: "text-amber-500" },
  // Design 3: Fresh Green
  { bg: "bg-emerald-50", accent: "bg-emerald-700", text: "text-emerald-900", accentText: "text-emerald-700" },
  // Design 4: Warm Coral
  { bg: "bg-rose-50", accent: "bg-rose-600", text: "text-rose-900", accentText: "text-rose-600" },
  // Design 5: Royal Blue
  { bg: "bg-blue-900", accent: "bg-sky-400", text: "text-white", accentText: "text-sky-400" },
  // Design 6: Elegant Cream
  { bg: "bg-amber-50", accent: "bg-amber-700", text: "text-amber-900", accentText: "text-amber-700" },
  // Design 7: Modern Purple
  { bg: "bg-violet-900", accent: "bg-violet-400", text: "text-white", accentText: "text-violet-300" },
  // Design 8: Clean Navy
  { bg: "bg-slate-800", accent: "bg-teal-500", text: "text-white", accentText: "text-teal-400" },
  // Design 9: Bright Orange
  { bg: "bg-orange-50", accent: "bg-orange-600", text: "text-orange-900", accentText: "text-orange-600" },
  // Design 10: Luxe Gold
  { bg: "bg-slate-950", accent: "bg-yellow-500", text: "text-white", accentText: "text-yellow-400" },
  // Design 11: Fresh Mint
  { bg: "bg-teal-50", accent: "bg-teal-700", text: "text-teal-900", accentText: "text-teal-700" },
  // Design 12: Bold Red
  { bg: "bg-red-900", accent: "bg-red-400", text: "text-white", accentText: "text-red-300" },
  // Design 13: Soft Pink
  { bg: "bg-pink-50", accent: "bg-pink-600", text: "text-pink-900", accentText: "text-pink-600" },
  // Design 14: Classic Brown
  { bg: "bg-amber-900", accent: "bg-amber-300", text: "text-white", accentText: "text-amber-200" },
  // Design 15: Electric Blue
  { bg: "bg-cyan-50", accent: "bg-cyan-700", text: "text-cyan-900", accentText: "text-cyan-700" },
];

interface StandeeData {
  id: number;
  headline: string;
  subline: string;
  cta: string;
  image: string;
  template: typeof designTemplates[0];
}

const generateRandomStandee = (id: number): StandeeData => ({
  id,
  headline: headlines[Math.floor(Math.random() * headlines.length)],
  subline: sublines[Math.floor(Math.random() * sublines.length)],
  cta: ctas[Math.floor(Math.random() * ctas.length)],
  image: allImages[Math.floor(Math.random() * allImages.length)],
  template: designTemplates[Math.floor(Math.random() * designTemplates.length)],
});

const generateInitialStandees = (): StandeeData[] => {
  return Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    headline: headlines[i % headlines.length],
    subline: sublines[i % sublines.length],
    cta: ctas[i % ctas.length],
    image: allImages[i % allImages.length],
    template: designTemplates[i % designTemplates.length],
  }));
};

// Simple, attention-grabbing standee design
const StandeeDesign = ({ data }: { data: StandeeData }) => {
  const { template, headline, subline, cta, image } = data;
  
  return (
    <div className={`w-full h-full ${template.bg} flex flex-col relative overflow-hidden`}>
      {/* Top accent bar */}
      <div className={`${template.accent} h-2`} />
      
      {/* Logo Header */}
      <div className={`px-3 py-2 flex justify-between items-center ${template.accent}`}>
        <img src={logo} alt="Brightleaf" className="h-5 object-contain brightness-0 invert" />
        <div className="text-right">
          <p className="text-[5px] text-white/80">In association with</p>
          <p className="text-[6px] font-bold text-white">Prosperiti Homes</p>
        </div>
      </div>

      {/* Main Image - Large & Prominent */}
      <div className="mx-2 mt-2 relative">
        <img 
          src={image} 
          alt="Interior" 
          className="w-full h-32 object-cover rounded-lg shadow-lg" 
        />
        <div className={`absolute bottom-0 left-0 right-0 ${template.accent} py-1 px-2 rounded-b-lg`}>
          <p className="text-[6px] text-white font-medium text-center">MODEL FLAT SHOWCASE</p>
        </div>
      </div>

      {/* Headline - Big & Bold */}
      <div className="px-3 py-3 flex-1 flex flex-col justify-center text-center">
        <h2 className={`text-sm font-black ${template.text} leading-tight mb-2`}>
          {headline}
        </h2>
        <p className={`text-[7px] ${template.text} opacity-70 mb-3`}>{subline}</p>
        
        {/* Simple Features Row */}
        <div className="flex justify-center gap-2 mb-2">
          {["Premium", "On-Time", "Quality"].map((feat, i) => (
            <div key={i} className={`${template.accent} px-2 py-0.5 rounded-full`}>
              <span className="text-[5px] text-white font-medium">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className={`${template.accent} py-2 px-3`}>
        <p className="text-[7px] text-white text-center font-medium">
          "We will transform your flat like this flat"
        </p>
      </div>

      {/* CTA Button */}
      <div className="px-3 py-2">
        <div className={`${template.bg === "bg-white" || template.bg.includes("-50") ? template.accent : "bg-white"} rounded-full py-2 text-center shadow-md`}>
          <p className={`text-[8px] font-bold ${template.bg === "bg-white" || template.bg.includes("-50") ? "text-white" : template.text}`}>
            {cta}
          </p>
        </div>
      </div>

      {/* Contact Footer */}
      <div className={`${template.accent} py-2 px-3`}>
        <div className="flex items-center justify-center gap-4 text-[6px] text-white">
          <div className="flex items-center gap-1">
            <Phone className="w-2.5 h-2.5" />
            <span>+91 98853 01292</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="w-2.5 h-2.5" />
            <span>brightleaf.design</span>
          </div>
        </div>
      </div>
      
      {/* Bottom accent bar */}
      <div className={`${template.accent} h-2`} />
    </div>
  );
};

const StandeeCard = ({ 
  data, 
  onRegenerate 
}: { 
  data: StandeeData; 
  onRegenerate: (id: number) => void;
}) => {
  const standeeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPNG = async () => {
    if (!standeeRef.current || isDownloading) return;
    setIsDownloading(true);

    try {
      const canvas = await html2canvas(standeeRef.current, {
        scale: 4, // High quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
      });

      const link = document.createElement("a");
      link.download = `Standee-${String(data.id).padStart(2, "0")}.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    } catch (error) {
      console.error("Error generating PNG:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h3 className="text-lg font-semibold text-foreground text-center">
        Design {data.id}
      </h3>
      
      {/* Standee Preview */}
      <div
        ref={standeeRef}
        className="w-[180px] h-[432px] rounded-lg shadow-xl overflow-hidden border border-border"
        style={{ aspectRatio: "2.5/6" }}
      >
        <StandeeDesign data={data} />
      </div>

      <div className="flex gap-2">
        <Button 
          onClick={handleDownloadPNG} 
          size="sm" 
          className="gap-1"
          disabled={isDownloading}
        >
          <Image className="w-3 h-3" />
          PNG
        </Button>
        <Button 
          onClick={() => onRegenerate(data.id)} 
          size="sm" 
          variant="outline"
          className="gap-1"
        >
          <Shuffle className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
};

const StandeeDesigns = () => {
  const [standees, setStandees] = useState<StandeeData[]>(generateInitialStandees);

  const regenerateStandee = (id: number) => {
    setStandees(prev => 
      prev.map(s => s.id === id ? generateRandomStandee(id) : s)
    );
  };

  const regenerateAll = () => {
    setStandees(prev => prev.map(s => generateRandomStandee(s.id)));
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold font-display">
            Standee Designs
          </h1>
          <p className="text-primary-foreground/80 mt-2 text-lg">
            Model Flat Promotion – 15 Unique Entrance Display Designs
          </p>
        </div>
      </div>

      {/* Controls */}
      <section className="py-6 bg-muted/50 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Simple & Attention-Grabbing</h2>
              <p className="text-sm text-muted-foreground">
                Click the shuffle button on any design to regenerate it, or generate all new designs at once.
              </p>
            </div>
            <Button onClick={regenerateAll} size="lg" className="gap-2">
              <Shuffle className="w-4 h-4" />
              Generate All New Designs
            </Button>
          </div>
          
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="bg-background rounded-lg p-3 border">
              <p className="font-medium text-foreground">Size</p>
              <p className="text-muted-foreground">2.5 ft × 6 ft</p>
            </div>
            <div className="bg-background rounded-lg p-3 border">
              <p className="font-medium text-foreground">Format</p>
              <p className="text-muted-foreground">Vertical Roll-up</p>
            </div>
            <div className="bg-background rounded-lg p-3 border">
              <p className="font-medium text-foreground">Quality</p>
              <p className="text-muted-foreground">High-Res PNG</p>
            </div>
            <div className="bg-background rounded-lg p-3 border">
              <p className="font-medium text-foreground">Designs</p>
              <p className="text-muted-foreground">15 Variations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Standee Grid */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {standees.map((data) => (
              <StandeeCard 
                key={data.id} 
                data={data} 
                onRegenerate={regenerateStandee}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-10 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Need Custom Designs?
          </h2>
          <p className="text-muted-foreground mb-5 max-w-xl mx-auto">
            Contact us for customized standee designs tailored to your specific requirements.
          </p>
          <Button size="lg" asChild>
            <Link to="/#contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default StandeeDesigns;
