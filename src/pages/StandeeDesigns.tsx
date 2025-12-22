import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Phone, Globe, Star, CheckCircle, Award, Clock, Sparkles } from "lucide-react";
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
  },
  {
    id: 2,
    title: "Bold & Conversion-Focused",
    headline: "We'll Transform Your Flat Like This.",
    subline: "From empty walls to stunning interiors – your dream home awaits",
    cta: "Want This Look For Your Flat?",
    image: bedroomImage,
  },
  {
    id: 3,
    title: "Process-Driven",
    headline: "One Team. One Home. Zero Stress.",
    subline: "Your complete interior solution under one roof",
    cta: "Start Your Journey Today",
    image: kitchenImage,
  },
  {
    id: 4,
    title: "Fun & Relatable",
    headline: "Why Should Only This Flat Look Good?",
    subline: "Your new flat deserves the same love and attention",
    cta: "Let's Make Your Flat Stunning!",
    image: diningImage,
  },
  {
    id: 5,
    title: "Trust & Authority",
    headline: "Creators of Model Flat 212",
    subline: "The same expertise, now for your home",
    cta: "Trust the Experts – Contact Us",
    image: officeImage,
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

// Design 1: Minimal Premium - Gold & White elegant
const StandeeDesign1 = ({ design }: { design: typeof standeeDesigns[0] }) => (
  <div className="w-full h-full bg-gradient-to-b from-amber-50 via-white to-amber-50 flex flex-col relative overflow-hidden">
    {/* Decorative corner elements */}
    <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-amber-500" />
    <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-amber-500" />
    <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-amber-500" />
    <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-amber-500" />
    
    {/* Logo Section */}
    <div className="p-3 flex justify-between items-center bg-gradient-to-r from-amber-600 to-amber-500">
      <img src={logo} alt="Brightleaf" className="h-6 object-contain brightness-0 invert" />
      <div className="text-right">
        <p className="text-[5px] text-amber-100">In association with</p>
        <p className="text-[7px] font-bold text-white">Prosperiti Homes</p>
      </div>
    </div>

    {/* Main Image with overlay */}
    <div className="relative mx-3 mt-2">
      <img src={design.image} alt="Interior" className="w-full h-28 object-cover rounded shadow-lg" />
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent rounded" />
      <div className="absolute bottom-2 left-2 right-2">
        <p className="text-[6px] text-amber-200 font-medium">MODEL FLAT SHOWCASE</p>
      </div>
    </div>

    {/* Headline */}
    <div className="px-3 py-3 text-center flex-1 flex flex-col justify-center">
      <h2 className="text-sm font-bold text-amber-900 leading-tight mb-2">
        {design.headline}
      </h2>
      <p className="text-[7px] text-amber-700 mb-3">{design.subline}</p>
      
      {/* Features */}
      <div className="grid grid-cols-2 gap-1 mb-3">
        {["Premium Materials", "Expert Design", "On-Time Delivery", "Full Warranty"].map((feat, i) => (
          <div key={i} className="flex items-center gap-1 bg-amber-100 rounded px-1 py-0.5">
            <Star className="w-2 h-2 text-amber-600" />
            <span className="text-[5px] text-amber-800">{feat}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Theme Quote */}
    <div className="bg-amber-900 py-2 px-3">
      <p className="text-[7px] text-amber-100 text-center italic">
        "We will transform your flat like this flat"
      </p>
    </div>

    {/* CTA */}
    <div className="px-3 py-2">
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-full py-2 px-3 text-center shadow-lg">
        <p className="text-[7px] font-bold text-white">{design.cta}</p>
      </div>
    </div>

    {/* Contact */}
    <div className="bg-amber-900 py-2 px-3">
      <div className="flex items-center justify-center gap-3 text-[6px] text-amber-100">
        <div className="flex items-center gap-1">
          <Phone className="w-2 h-2" />
          <span>+91 98853 01292</span>
        </div>
        <div className="flex items-center gap-1">
          <Globe className="w-2 h-2" />
          <span>brightleaf.design</span>
        </div>
      </div>
    </div>
  </div>
);

// Design 2: Bold Purple & Orange - High Energy
const StandeeDesign2 = ({ design }: { design: typeof standeeDesigns[0] }) => (
  <div className="w-full h-full bg-gradient-to-b from-purple-900 via-purple-800 to-orange-600 flex flex-col relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/30 rounded-full" />
    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/30 rounded-full" />
    
    {/* Header */}
    <div className="p-3 flex justify-between items-center relative z-10">
      <img src={logo} alt="Brightleaf" className="h-6 object-contain brightness-0 invert" />
      <div className="bg-orange-500 px-2 py-0.5 rounded">
        <p className="text-[6px] font-bold text-white">TRANSFORM NOW</p>
      </div>
    </div>

    {/* Big Headline at top */}
    <div className="px-3 py-2 text-center relative z-10">
      <h2 className="text-base font-black text-white leading-tight uppercase tracking-tight">
        {design.headline}
      </h2>
    </div>

    {/* Main Image */}
    <div className="relative mx-3 flex-1">
      <img src={design.image} alt="Interior" className="w-full h-full object-cover rounded-lg shadow-2xl" style={{ minHeight: "100px" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent rounded-lg" />
      
      {/* Floating badge */}
      <div className="absolute top-2 right-2 bg-orange-500 rounded-full p-1.5 shadow-lg">
        <Sparkles className="w-3 h-3 text-white" />
      </div>
    </div>

    {/* Stats Row */}
    <div className="grid grid-cols-3 gap-1 px-3 py-2 relative z-10">
      {[
        { num: "950+", label: "Projects" },
        { num: "100%", label: "Satisfaction" },
        { num: "10+", label: "Years" },
      ].map((stat, i) => (
        <div key={i} className="text-center bg-white/10 rounded py-1">
          <p className="text-[10px] font-black text-orange-400">{stat.num}</p>
          <p className="text-[5px] text-purple-200">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* Subline */}
    <div className="px-3 py-1 text-center relative z-10">
      <p className="text-[7px] text-purple-200">{design.subline}</p>
    </div>

    {/* Theme */}
    <div className="bg-white/10 py-2 mx-3 rounded relative z-10">
      <p className="text-[7px] text-orange-300 text-center italic font-medium">
        "We will transform your flat like this flat"
      </p>
    </div>

    {/* CTA */}
    <div className="px-3 py-2 relative z-10">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full py-2 text-center shadow-lg">
        <p className="text-[8px] font-bold text-white uppercase tracking-wide">{design.cta}</p>
      </div>
    </div>

    {/* Contact */}
    <div className="bg-purple-950 py-2 px-3">
      <div className="flex items-center justify-between text-[6px] text-purple-200">
        <span>Brightleaf × Prosperiti Homes</span>
        <div className="flex items-center gap-1">
          <Phone className="w-2 h-2" />
          <span>+91 98853 01292</span>
        </div>
      </div>
    </div>
  </div>
);

// Design 3: Process-Driven - Teal & Modern
const StandeeDesign3 = ({ design }: { design: typeof standeeDesigns[0] }) => (
  <div className="w-full h-full bg-gradient-to-b from-teal-900 via-teal-800 to-slate-900 flex flex-col relative overflow-hidden">
    {/* Header */}
    <div className="p-3 flex justify-between items-center bg-teal-950/50">
      <img src={logo} alt="Brightleaf" className="h-6 object-contain brightness-0 invert" />
      <div className="text-right">
        <p className="text-[5px] text-teal-300">In association with</p>
        <p className="text-[7px] font-bold text-white">Prosperiti Homes</p>
      </div>
    </div>

    {/* Main Image */}
    <div className="relative mx-3 mt-2">
      <img src={design.image} alt="Interior" className="w-full h-24 object-cover rounded-lg shadow-lg" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-transparent rounded-lg" />
      <div className="absolute top-2 left-2">
        <p className="text-[6px] text-teal-200 font-medium">MODEL FLAT 212</p>
      </div>
    </div>

    {/* Headline */}
    <div className="px-3 py-2 text-center">
      <h2 className="text-sm font-bold text-white leading-tight mb-1">
        {design.headline}
      </h2>
      <p className="text-[7px] text-teal-300">{design.subline}</p>
    </div>

    {/* Process Steps */}
    <div className="px-2 py-2 flex-1">
      <p className="text-[6px] text-teal-400 text-center mb-2 font-medium">YOUR JOURNEY WITH US</p>
      <div className="grid grid-cols-3 gap-1">
        {processSteps.map((step, i) => (
          <div key={i} className="bg-teal-700/50 rounded p-1.5 text-center border border-teal-500/30">
            <span className="text-sm">{step.icon}</span>
            <p className="text-[6px] text-teal-200 mt-0.5">{step.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Features */}
    <div className="px-3 py-2">
      <div className="grid grid-cols-2 gap-1">
        {[
          { icon: CheckCircle, text: "End-to-End Solutions" },
          { icon: Clock, text: "On-Time Delivery" },
          { icon: Award, text: "Quality Assured" },
          { icon: Star, text: "Transparent Pricing" },
        ].map((feat, i) => (
          <div key={i} className="flex items-center gap-1 bg-teal-600/30 rounded px-1.5 py-1">
            <feat.icon className="w-2.5 h-2.5 text-teal-400" />
            <span className="text-[5px] text-teal-100">{feat.text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Quote */}
    <div className="bg-gradient-to-r from-teal-600 to-teal-500 py-2 px-3">
      <p className="text-[7px] text-white text-center italic">
        "We will transform your flat like this flat"
      </p>
    </div>

    {/* CTA */}
    <div className="px-3 py-2">
      <div className="bg-white rounded-full py-2 text-center shadow-lg">
        <p className="text-[7px] font-bold text-teal-800">{design.cta}</p>
      </div>
    </div>

    {/* Contact */}
    <div className="bg-slate-900 py-2 px-3">
      <div className="flex items-center justify-center gap-3 text-[6px] text-teal-300">
        <div className="flex items-center gap-1">
          <Phone className="w-2 h-2" />
          <span>+91 98853 01292</span>
        </div>
        <div className="flex items-center gap-1">
          <Globe className="w-2 h-2" />
          <span>brightleaf.design</span>
        </div>
      </div>
    </div>
  </div>
);

// Design 4: Fun & Relatable - Pink & Playful
const StandeeDesign4 = ({ design }: { design: typeof standeeDesigns[0] }) => (
  <div className="w-full h-full bg-gradient-to-b from-pink-500 via-rose-400 to-orange-400 flex flex-col relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-10 right-2 w-8 h-8 bg-yellow-300 rounded-full opacity-60" />
    <div className="absolute top-20 left-2 w-6 h-6 bg-white rounded-full opacity-40" />
    <div className="absolute bottom-20 right-3 w-10 h-10 bg-pink-300 rounded-full opacity-50" />
    
    {/* Header */}
    <div className="p-3 flex justify-between items-center relative z-10">
      <img src={logo} alt="Brightleaf" className="h-6 object-contain brightness-0 invert" />
      <div className="bg-yellow-400 px-2 py-0.5 rounded-full">
        <p className="text-[6px] font-bold text-pink-800">NEW HOME? 🏠</p>
      </div>
    </div>

    {/* Fun Headline */}
    <div className="px-3 py-2 text-center relative z-10">
      <h2 className="text-base font-black text-white leading-tight drop-shadow-lg">
        {design.headline}
      </h2>
      <p className="text-[7px] text-pink-100 mt-1">{design.subline}</p>
    </div>

    {/* Main Image with fun frame */}
    <div className="relative mx-3 flex-1 min-h-0">
      <div className="absolute inset-0 bg-white rounded-xl p-1">
        <img src={design.image} alt="Interior" className="w-full h-full object-cover rounded-lg" />
      </div>
      {/* Corner decorations */}
      <div className="absolute -top-1 -left-1 w-4 h-4 bg-yellow-400 rounded-full" />
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-pink-300 rounded-full" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-rose-300 rounded-full" />
    </div>

    {/* Fun Features */}
    <div className="px-3 py-2 relative z-10">
      <div className="bg-white/90 rounded-lg p-2">
        <div className="flex justify-around text-center">
          {[
            { emoji: "✨", text: "Premium" },
            { emoji: "⏰", text: "On-Time" },
            { emoji: "💰", text: "Fair Price" },
            { emoji: "❤️", text: "With Love" },
          ].map((item, i) => (
            <div key={i}>
              <span className="text-sm">{item.emoji}</span>
              <p className="text-[5px] text-pink-800 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Quote */}
    <div className="bg-pink-800/80 py-2 px-3 mx-3 rounded-lg relative z-10">
      <p className="text-[7px] text-pink-100 text-center italic">
        "We will transform your flat like this flat"
      </p>
    </div>

    {/* CTA */}
    <div className="px-3 py-2 relative z-10">
      <div className="bg-yellow-400 rounded-full py-2 text-center shadow-lg">
        <p className="text-[8px] font-bold text-pink-800">{design.cta} 🎨</p>
      </div>
    </div>

    {/* Contact */}
    <div className="bg-pink-900 py-2 px-3 relative z-10">
      <div className="flex items-center justify-between text-[6px] text-pink-200">
        <span>Brightleaf × Prosperiti</span>
        <div className="flex items-center gap-1">
          <Phone className="w-2 h-2" />
          <span>+91 98853 01292</span>
        </div>
      </div>
    </div>
  </div>
);

// Design 5: Trust & Authority - Navy & Gold Professional
const StandeeDesign5 = ({ design }: { design: typeof standeeDesigns[0] }) => (
  <div className="w-full h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col relative overflow-hidden">
    {/* Gold accent lines */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
    
    {/* Header */}
    <div className="p-3 flex justify-between items-center border-b border-amber-500/30">
      <img src={logo} alt="Brightleaf" className="h-6 object-contain brightness-0 invert" />
      <div className="flex items-center gap-1">
        <Award className="w-3 h-3 text-amber-500" />
        <p className="text-[6px] text-amber-400 font-medium">OFFICIAL DESIGNER</p>
      </div>
    </div>

    {/* Trust Badge */}
    <div className="px-3 py-2 text-center">
      <div className="inline-block bg-amber-500/20 border border-amber-500/50 rounded-full px-3 py-1">
        <p className="text-[6px] text-amber-400 font-medium">TRUSTED BY PROSPERITI HOMES</p>
      </div>
    </div>

    {/* Headline */}
    <div className="px-3 py-1 text-center">
      <h2 className="text-sm font-bold text-white leading-tight">
        {design.headline}
      </h2>
      <p className="text-[7px] text-slate-400 mt-1">{design.subline}</p>
    </div>

    {/* Main Image */}
    <div className="relative mx-3 mt-2 flex-1 min-h-0">
      <div className="absolute inset-0 border-2 border-amber-500/50 rounded-lg">
        <img src={design.image} alt="Interior" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-lg" />
      </div>
      {/* "As seen" badge */}
      <div className="absolute bottom-2 left-2 right-2 bg-slate-900/90 rounded px-2 py-1 border border-amber-500/30">
        <p className="text-[6px] text-amber-400 text-center">✓ Same design team that created Model Flat 212</p>
      </div>
    </div>

    {/* Credentials */}
    <div className="px-3 py-2">
      <div className="grid grid-cols-2 gap-1">
        {[
          { num: "950+", text: "Completed Projects" },
          { num: "10+", text: "Years of Excellence" },
          { num: "100%", text: "Client Satisfaction" },
          { num: "50+", text: "Happy Families" },
        ].map((item, i) => (
          <div key={i} className="bg-slate-700/50 rounded p-1.5 text-center border border-slate-600">
            <p className="text-[9px] font-bold text-amber-400">{item.num}</p>
            <p className="text-[5px] text-slate-400">{item.text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Quote */}
    <div className="bg-amber-500/10 border-y border-amber-500/30 py-2 px-3">
      <p className="text-[7px] text-amber-300 text-center italic">
        "We will transform your flat like this flat"
      </p>
    </div>

    {/* CTA */}
    <div className="px-3 py-2">
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded py-2 text-center shadow-lg">
        <p className="text-[7px] font-bold text-slate-900">{design.cta}</p>
      </div>
    </div>

    {/* Contact */}
    <div className="bg-slate-950 py-2 px-3">
      <div className="flex items-center justify-center gap-3 text-[6px] text-slate-400">
        <div className="flex items-center gap-1">
          <Phone className="w-2 h-2 text-amber-500" />
          <span>+91 98853 01292</span>
        </div>
        <div className="flex items-center gap-1">
          <Globe className="w-2 h-2 text-amber-500" />
          <span>brightleaf.design</span>
        </div>
      </div>
    </div>
  </div>
);

const StandeeCard = ({ design, index }: { design: typeof standeeDesigns[0]; index: number }) => {
  const standeeRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!standeeRef.current) return;

    try {
      const canvas = await html2canvas(standeeRef.current, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
      });

      const imgData = canvas.toDataURL("image/png");
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

  const renderDesign = () => {
    switch (design.id) {
      case 1: return <StandeeDesign1 design={design} />;
      case 2: return <StandeeDesign2 design={design} />;
      case 3: return <StandeeDesign3 design={design} />;
      case 4: return <StandeeDesign4 design={design} />;
      case 5: return <StandeeDesign5 design={design} />;
      default: return <StandeeDesign1 design={design} />;
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-xl font-semibold text-foreground text-center">
        Design {design.id}<br />
        <span className="text-sm text-muted-foreground font-normal">{design.title}</span>
      </h3>
      
      {/* Standee Preview - 2.5:6 aspect ratio */}
      <div
        ref={standeeRef}
        className="w-[200px] h-[480px] rounded-lg shadow-2xl overflow-hidden"
        style={{ aspectRatio: "2.5/6" }}
      >
        {renderDesign()}
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
            Model Flat Promotion – Entrance Display Designs
          </p>
        </div>
      </div>

      {/* Description */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-foreground mb-3">Attention-Grabbing Entrance Standees</h2>
            <p className="text-muted-foreground">
              5 unique, colorful standee designs crafted to catch attention at the model flat entrance. 
              Each design uses vibrant colors and compelling messaging to convert visitors into clients.
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
