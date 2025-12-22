import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logo from "@/assets/brightleaf-logo.png";
import heroImage from "@/assets/hero-living-room.jpg";
import bedroomImage from "@/assets/bedroom-design.jpg";
import kitchenImage from "@/assets/kitchen-design.jpg";
import diningImage from "@/assets/dining-design.jpg";
import officeImage from "@/assets/office-design.jpg";

const standeeDesigns = [
  {
    id: 1,
    title: "Minimal Premium",
    headline: "Your Flat Can Look Like This Too.",
    subline: "Experience luxury living with bespoke interior design",
    cta: "Book Your Free Consultation Today",
    image: heroImage,
    bgColor: "bg-gradient-to-b from-stone-50 to-stone-100",
    textColor: "text-stone-900",
    accentColor: "text-primary",
  },
  {
    id: 2,
    title: "Bold & Conversion-Focused",
    headline: "We'll Transform Your Flat Like This.",
    subline: "From empty walls to stunning interiors – your dream home awaits",
    cta: "Want This Look For Your Flat?",
    image: bedroomImage,
    bgColor: "bg-gradient-to-b from-primary to-primary/90",
    textColor: "text-primary-foreground",
    accentColor: "text-primary-foreground",
  },
  {
    id: 3,
    title: "Process-Driven",
    headline: "One Team. One Home. Zero Stress.",
    subline: "Your complete interior solution under one roof",
    cta: "Start Your Journey Today",
    image: kitchenImage,
    bgColor: "bg-gradient-to-b from-slate-900 to-slate-800",
    textColor: "text-slate-50",
    accentColor: "text-primary",
    showProcess: true,
  },
  {
    id: 4,
    title: "Fun & Relatable",
    headline: "Why Should Only This Flat Look Good?",
    subline: "Your new flat deserves the same love and attention",
    cta: "Let's Make Your Flat Stunning!",
    image: diningImage,
    bgColor: "bg-gradient-to-b from-amber-50 to-orange-50",
    textColor: "text-amber-900",
    accentColor: "text-primary",
  },
  {
    id: 5,
    title: "Trust & Authority",
    headline: "Creators of Model Flat 212",
    subline: "The same expertise, now for your home",
    cta: "Trust the Experts – Contact Us",
    image: officeImage,
    bgColor: "bg-gradient-to-b from-zinc-100 to-zinc-200",
    textColor: "text-zinc-900",
    accentColor: "text-primary",
  },
];

const processSteps = [
  { icon: "👋", label: "Meet" },
  { icon: "✏️", label: "Design" },
  { icon: "✓", label: "Approve" },
  { icon: "🔨", label: "Build" },
  { icon: "📦", label: "Install" },
  { icon: "😊", label: "Enjoy" },
];

const StandeeCard = ({ design, index }: { design: typeof standeeDesigns[0]; index: number }) => {
  const standeeRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!standeeRef.current) return;

    try {
      const canvas = await html2canvas(standeeRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
      });

      const imgData = canvas.toDataURL("image/png");
      
      // Create PDF with standee dimensions (2.5ft x 6ft aspect ratio)
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: [2.5, 6],
      });

      pdf.addImage(imgData, "PNG", 0, 0, 2.5, 6);
      pdf.save(`Standee-0${design.id}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-xl font-semibold text-foreground">
        Design {design.id} – {design.title}
      </h3>
      
      {/* Standee Preview - 2.5:6 aspect ratio */}
      <div
        ref={standeeRef}
        className={`w-[200px] h-[480px] ${design.bgColor} rounded-lg shadow-2xl overflow-hidden flex flex-col`}
        style={{ aspectRatio: "2.5/6" }}
      >
        {/* Top Section with Logo */}
        <div className="p-3 flex justify-between items-start">
          <img src={logo} alt="Brightleaf Design Studio" className="h-8 object-contain" />
          <div className="text-right">
            <p className={`text-[6px] ${design.textColor} opacity-70`}>In association with</p>
            <p className={`text-[8px] font-semibold ${design.textColor}`}>Prosperiti Homes</p>
          </div>
        </div>

        {/* Main Image */}
        <div className="flex-1 px-3">
          <img
            src={design.image}
            alt="Model Flat Interior"
            className="w-full h-32 object-cover rounded-md shadow-md"
          />
        </div>

        {/* Headline */}
        <div className="px-3 py-2 text-center">
          <h2 className={`text-sm font-bold leading-tight ${design.textColor}`}>
            {design.headline}
          </h2>
          <p className={`text-[7px] mt-1 ${design.textColor} opacity-80`}>
            {design.subline}
          </p>
        </div>

        {/* Process Steps (only for design 3) */}
        {design.showProcess && (
          <div className="px-2 py-2">
            <div className="flex justify-center gap-1 flex-wrap">
              {processSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-xs">{step.icon}</span>
                  <span className={`text-[5px] ${design.textColor}`}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Theme Text */}
        <div className="px-3 py-2 text-center">
          <p className={`text-[8px] font-medium italic ${design.accentColor}`}>
            "We will transform your flat like this flat"
          </p>
        </div>

        {/* CTA */}
        <div className="px-3 py-2">
          <div className={`${design.id === 2 ? 'bg-primary-foreground text-primary' : 'bg-primary text-primary-foreground'} rounded py-1 px-2 text-center`}>
            <p className="text-[7px] font-bold">{design.cta}</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className={`px-3 py-2 ${design.textColor}`}>
          <div className="flex items-center justify-center gap-2 text-[6px]">
            <div className="flex items-center gap-0.5">
              <Phone className="w-2 h-2" />
              <span>+91 98853 01292</span>
            </div>
            <div className="flex items-center gap-0.5">
              <Globe className="w-2 h-2" />
              <span>brightleaf.design</span>
            </div>
          </div>
        </div>

        {/* Bottom Brand Bar */}
        <div className="bg-foreground/10 py-1 text-center">
          <p className={`text-[5px] ${design.textColor} opacity-60`}>
            Brightleaf Design Studio × Prosperiti Homes
          </p>
        </div>
      </div>

      <Button onClick={handleDownload} className="gap-2">
        <Download className="w-4 h-4" />
        Download PDF
      </Button>
    </div>
  );
};

const StandeeDesigns = () => {
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
            Model Flat Promotion – Print-Ready Designs
          </p>
        </div>
      </div>

      {/* Description */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-foreground mb-3">About These Designs</h2>
            <p className="text-muted-foreground">
              These 5 unique vertical standee designs are created for promoting model flats. 
              Each design follows a different approach to attract new flat owners and encourage them 
              to opt for interior design services. Download the PDF versions for print-ready files.
            </p>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-background rounded-lg p-3 border">
                <p className="font-medium text-foreground">Size</p>
                <p className="text-muted-foreground">2.5 ft × 6 ft</p>
              </div>
              <div className="bg-background rounded-lg p-3 border">
                <p className="font-medium text-foreground">Format</p>
                <p className="text-muted-foreground">Vertical Roll-up</p>
              </div>
              <div className="bg-background rounded-lg p-3 border">
                <p className="font-medium text-foreground">Resolution</p>
                <p className="text-muted-foreground">Print-Ready</p>
              </div>
              <div className="bg-background rounded-lg p-3 border">
                <p className="font-medium text-foreground">Export</p>
                <p className="text-muted-foreground">PDF Download</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standee Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
            {standeeDesigns.map((design, index) => (
              <StandeeCard key={design.id} design={design} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need Custom Designs?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact us for customized standee designs tailored to your specific requirements and branding.
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
