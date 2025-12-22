import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Download, ArrowLeft, Shuffle, Eye, X, Phone, Globe, MessageCircle, Award, CheckCircle, Users, Star, Shield, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logo from "@/assets/brightleaf-logo.png";
import heroImage from "@/assets/hero-living-room.jpg";

// 10 standee designs - 5 original + 5 new attention-grabbing with trust badges
const standeeConfigs = [
  {
    id: 1,
    type: "premium",
    headline: "Your Flat Can Look Like This Too.",
    subtext: "Complete interior solutions — design to execution.",
    bg: "#1a1a1a",
    accentColor: "#d4af37",
  },
  {
    id: 2,
    type: "conversion",
    headline: "Why Should Only This Flat Look This Good?",
    subtext: "Get the same premium interiors for your new flat.",
    bg: "#0a2540",
    accentColor: "#00c2ff",
  },
  {
    id: 3,
    type: "process",
    headline: "All Your Interiors. One Team.",
    subtext: "From concept to completion, we handle everything.",
    bg: "#ffffff",
    accentColor: "#2d5a3d",
  },
  {
    id: 4,
    type: "fun",
    headline: "This Flat Today. Yours Next?",
    subtext: "Same design. Your address. Let's make it happen.",
    bg: "#fffbeb",
    accentColor: "#b45309",
  },
  {
    id: 5,
    type: "minimal",
    headline: "Designed. Built. Delivered.",
    subtext: "End-to-end interior solutions for your home.",
    bg: "#18181b",
    accentColor: "#22c55e",
  },
  // NEW 5 attention-grabbing designs with trust badges
  {
    id: 6,
    type: "trust",
    headline: "500+ Happy Homes Designed",
    subtext: "Join our growing family of satisfied homeowners.",
    bg: "#0f172a",
    accentColor: "#f59e0b",
    trustBadges: ["500+ Projects", "10+ Years", "4.9★ Rating"],
  },
  {
    id: 7,
    type: "urgency",
    headline: "Limited Time Offer!\nFree 3D Design",
    subtext: "Book your consultation today and get a complimentary 3D visualization.",
    bg: "#7c2d12",
    accentColor: "#fbbf24",
    trustBadges: ["Free Consultation", "No Hidden Costs"],
  },
  {
    id: 8,
    type: "guarantee",
    headline: "100% Satisfaction Guaranteed",
    subtext: "We don't stop until you love your space.",
    bg: "#1e293b",
    accentColor: "#10b981",
    trustBadges: ["Money Back Guarantee", "On-Time Delivery", "Premium Materials"],
  },
  {
    id: 9,
    type: "social",
    headline: "See What Others Are Saying",
    subtext: "\"Best decision we made for our home!\" - Happy Customer",
    bg: "#fef3c7",
    accentColor: "#dc2626",
    trustBadges: ["4.9/5 Google Rating", "100+ Reviews"],
  },
  {
    id: 10,
    type: "exclusive",
    headline: "Exclusive Model Flat Offer",
    subtext: "Special pricing for Prosperiti Homes residents only.",
    bg: "#1a1a1a",
    accentColor: "#a855f7",
    trustBadges: ["Exclusive Deal", "Limited Slots", "VIP Service"],
  },
];

interface StandeeConfig {
  id: number;
  type: string;
  headline: string;
  subtext: string;
  bg: string;
  accentColor: string;
  trustBadges?: string[];
}

// Process steps with icons
const processSteps = [
  { label: "Meet", icon: Users },
  { label: "Design", icon: Sparkles },
  { label: "Approve", icon: CheckCircle },
  { label: "Build", icon: Shield },
  { label: "Install", icon: Clock },
  { label: "Enjoy", icon: Star },
];

// Process icons for Standee 3
const ProcessStep = ({ label, icon: Icon, isDark, isFullscreen }: { label: string; icon: any; isDark: boolean; isFullscreen: boolean }) => (
  <div className="flex flex-col items-center">
    <div 
      className="rounded-full flex items-center justify-center"
      style={{ 
        backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
        color: isDark ? '#ffffff' : '#1a1a1a',
        width: isFullscreen ? 32 : 16,
        height: isFullscreen ? 32 : 16,
      }}
    >
      <Icon style={{ width: isFullscreen ? 14 : 7, height: isFullscreen ? 14 : 7 }} />
    </div>
    <p 
      className="mt-1 font-medium text-center" 
      style={{ 
        color: isDark ? '#ffffff' : '#1a1a1a',
        fontSize: isFullscreen ? 8 : 4
      }}
    >
      {label}
    </p>
  </div>
);

// Trust Badge Component
const TrustBadge = ({ text, isDark, accentColor, isFullscreen }: { text: string; isDark: boolean; accentColor: string; isFullscreen: boolean }) => (
  <div 
    className="flex items-center gap-1 px-2 py-1 rounded-full"
    style={{ 
      backgroundColor: accentColor + '20',
      border: `1px solid ${accentColor}40`,
    }}
  >
    <Award style={{ width: isFullscreen ? 10 : 5, height: isFullscreen ? 10 : 5, color: accentColor }} />
    <span 
      className="font-semibold"
      style={{ 
        color: isDark ? '#ffffff' : '#1a1a1a',
        fontSize: isFullscreen ? 8 : 4
      }}
    >
      {text}
    </span>
  </div>
);

// Main Standee Design Component - NO rounded corners for clean export
const StandeeDesign = ({ config, isFullscreen = false }: { config: StandeeConfig; isFullscreen?: boolean }) => {
  const { headline, subtext, bg, accentColor, type, trustBadges } = config;
  const isDark = bg === "#1a1a1a" || bg === "#0a2540" || bg === "#18181b" || bg === "#0f172a" || bg === "#7c2d12" || bg === "#1e293b";
  const textColor = isDark ? "#ffffff" : "#1a1a1a";
  const subtleText = isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)";
  
  const baseHeight = isFullscreen ? "h-[900px]" : "h-[480px]";
  const baseWidth = isFullscreen ? "w-[375px]" : "w-[200px]";

  const hasProcess = type === "process";
  const hasTrustBadges = trustBadges && trustBadges.length > 0;

  return (
    <div
      className={`${baseWidth} ${baseHeight} flex flex-col relative`}
      style={{ backgroundColor: bg }}
    >
      {/* Top accent bar */}
      <div 
        className="flex-shrink-0" 
        style={{ backgroundColor: accentColor, height: isFullscreen ? 8 : 4 }} 
      />

      {/* Hero Image */}
      <div className="relative flex-shrink-0" style={{ height: isFullscreen ? '40%' : '38%' }}>
        <img
          src={heroImage}
          alt="Model Flat Interior"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, ${bg} 100%)`,
          }}
        />
        {/* Floating Trust Badge on Image */}
        {hasTrustBadges && (
          <div 
            className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1"
            style={{ 
              backgroundColor: accentColor,
              borderRadius: isFullscreen ? 4 : 2
            }}
          >
            <Star style={{ width: isFullscreen ? 12 : 6, height: isFullscreen ? 12 : 6, color: '#ffffff', fill: '#ffffff' }} />
            <span 
              className="font-bold text-white"
              style={{ fontSize: isFullscreen ? 10 : 5 }}
            >
              FEATURED
            </span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div 
        className="flex-1 flex flex-col justify-center text-center relative z-10"
        style={{ 
          padding: isFullscreen ? '0 24px' : '0 12px',
          marginTop: isFullscreen ? -30 : -15 
        }}
      >
        {/* Headline */}
        <h1
          className="font-black leading-tight tracking-tight whitespace-pre-line"
          style={{ 
            color: textColor,
            fontSize: isFullscreen ? 28 : 14,
            marginBottom: isFullscreen ? 12 : 6
          }}
        >
          {headline}
        </h1>

        {/* Subtext */}
        <p
          className="leading-relaxed max-w-[90%] mx-auto"
          style={{ 
            color: subtleText,
            fontSize: isFullscreen ? 12 : 6
          }}
        >
          {subtext}
        </p>

        {/* Trust Badges */}
        {hasTrustBadges && (
          <div 
            className="flex flex-wrap justify-center gap-1 mx-auto"
            style={{ marginTop: isFullscreen ? 16 : 8 }}
          >
            {trustBadges.map((badge) => (
              <TrustBadge 
                key={badge} 
                text={badge} 
                isDark={isDark} 
                accentColor={accentColor}
                isFullscreen={isFullscreen}
              />
            ))}
          </div>
        )}

        {/* Process Steps for Standee 3 */}
        {hasProcess && (
          <div 
            className="flex justify-center gap-2 mx-auto"
            style={{ marginTop: isFullscreen ? 20 : 10 }}
          >
            {processSteps.map((step) => (
              <ProcessStep 
                key={step.label} 
                label={step.label} 
                icon={step.icon}
                isDark={isDark} 
                isFullscreen={isFullscreen}
              />
            ))}
          </div>
        )}

        {/* Our Process Section - for new designs */}
        {!hasProcess && (
          <div 
            className="mx-auto w-full"
            style={{ marginTop: isFullscreen ? 16 : 8 }}
          >
            <p 
              className="font-semibold mb-2"
              style={{ color: accentColor, fontSize: isFullscreen ? 10 : 5 }}
            >
              OUR PROCESS
            </p>
            <div className="flex justify-center gap-1">
              {["Consult", "Design", "Execute", "Deliver"].map((step, i) => (
                <div key={step} className="flex items-center">
                  <span 
                    className="font-medium"
                    style={{ color: textColor, fontSize: isFullscreen ? 8 : 4 }}
                  >
                    {step}
                  </span>
                  {i < 3 && (
                    <span 
                      style={{ color: accentColor, margin: '0 2px', fontSize: isFullscreen ? 8 : 4 }}
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div style={{ padding: isFullscreen ? '0 24px 12px' : '0 12px 6px' }}>
        <div
          className="text-center flex items-center justify-center gap-2"
          style={{ 
            backgroundColor: accentColor,
            padding: isFullscreen ? '10px 14px' : '5px 7px',
            borderRadius: isFullscreen ? 6 : 3
          }}
        >
          <Phone className="text-white" style={{ width: isFullscreen ? 14 : 7, height: isFullscreen ? 14 : 7 }} />
          <p 
            className="font-semibold text-white tracking-wide"
            style={{ fontSize: isFullscreen ? 12 : 6 }}
          >
            Talk to Our Designer
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div 
        className="flex justify-center gap-3 items-center"
        style={{ 
          padding: isFullscreen ? '6px 24px' : '3px 12px',
          backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'
        }}
      >
        <div className="flex items-center gap-1">
          <Globe style={{ width: isFullscreen ? 10 : 5, height: isFullscreen ? 10 : 5, color: subtleText }} />
          <span style={{ fontSize: isFullscreen ? 9 : 4.5, color: subtleText, fontWeight: 600 }}>brightleaf.co.in</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle style={{ width: isFullscreen ? 10 : 5, height: isFullscreen ? 10 : 5, color: '#25D366' }} />
          <span style={{ fontSize: isFullscreen ? 9 : 4.5, color: subtleText }}>+91 9876543210</span>
        </div>
      </div>

      {/* Model Flat Credit */}
      <div 
        className="text-center"
        style={{ 
          padding: isFullscreen ? '6px' : '3px',
          backgroundColor: accentColor + '15'
        }}
      >
        <p style={{ fontSize: isFullscreen ? 8 : 4, color: textColor }}>
          <span style={{ opacity: 0.7 }}>Model Flat Designed by</span>{' '}
          <span className="font-bold">Brightleaf Design Studio</span>{' '}
          <span style={{ opacity: 0.7 }}>for</span>{' '}
          <span className="font-bold">Prosperiti Homes</span>
        </p>
      </div>

      {/* Branding Footer */}
      <div
        className="flex-shrink-0"
        style={{ 
          backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
          padding: isFullscreen ? '10px 24px' : '5px 12px'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Brightleaf"
              className="object-contain"
              style={{ 
                height: isFullscreen ? 28 : 14,
                filter: isDark ? "brightness(0) invert(1)" : "none" 
              }}
              crossOrigin="anonymous"
            />
            <div>
              <p
                className="font-semibold leading-none"
                style={{ color: textColor, fontSize: isFullscreen ? 9 : 4.5 }}
              >
                Brightleaf Design Studio
              </p>
              <p style={{ color: subtleText, fontSize: isFullscreen ? 7 : 3.5 }}>
                Interior Design Experts
              </p>
            </div>
          </div>
          <div className="text-right">
            <p style={{ color: subtleText, fontSize: isFullscreen ? 7 : 3.5 }}>
              Builder Partner
            </p>
            <p
              className="font-semibold"
              style={{ color: textColor, fontSize: isFullscreen ? 9 : 4.5 }}
            >
              Prosperiti Homes
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div 
        className="flex-shrink-0" 
        style={{ backgroundColor: accentColor, height: isFullscreen ? 6 : 3 }} 
      />
    </div>
  );
};

const StandeeCard = ({
  config,
  onRegenerate,
}: {
  config: StandeeConfig;
  onRegenerate: (id: number) => void;
}) => {
  const standeeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const typeLabels: Record<string, string> = {
    premium: "Premium Luxury",
    conversion: "Conversion-Focused",
    process: "One-Stop Solution",
    fun: "Fun & Catchy",
    minimal: "Minimal & Corporate",
    trust: "Trust Badges",
    urgency: "Urgency & Offer",
    guarantee: "Guarantee Focus",
    social: "Social Proof",
    exclusive: "Exclusive Deal",
  };

  const handleDownloadPNG = async () => {
    if (!standeeRef.current || isDownloading) return;
    setIsDownloading(true);

    try {
      const canvas = await html2canvas(standeeRef.current, {
        scale: 6,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
      });

      const link = document.createElement("a");
      link.download = `Standee-${String(config.id).padStart(2, "0")}-${config.type}-PrintReady.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    } catch (error) {
      console.error("Error generating PNG:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!standeeRef.current || isDownloading) return;
    setIsDownloading(true);

    try {
      const canvas = await html2canvas(standeeRef.current, {
        scale: 6,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
      });

      // 2.5ft x 6ft in inches = 30 x 72 inches
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: [30, 72]
      });

      const imgData = canvas.toDataURL("image/png", 1.0);
      pdf.addImage(imgData, "PNG", 0, 0, 30, 72);
      pdf.save(`Standee-${String(config.id).padStart(2, "0")}-${config.type}-PrintReady.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <span 
            className="inline-block px-2 py-1 rounded text-[10px] font-medium mb-2"
            style={{ backgroundColor: config.accentColor + '20', color: config.accentColor }}
          >
            {typeLabels[config.type]}
          </span>
          <h3 className="text-lg font-bold text-foreground">Design {config.id}</h3>
        </div>

        {/* Standee Preview - Sharp edges for clean export */}
        <div
          ref={standeeRef}
          className="shadow-2xl border-2 border-border overflow-hidden"
          style={{ width: 200, height: 480 }}
        >
          <StandeeDesign config={config} />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Button
            onClick={() => setIsFullscreen(true)}
            size="sm"
            variant="outline"
            className="w-full gap-2"
          >
            <Eye className="w-4 h-4" />
            View Full Size
          </Button>
          <div className="flex gap-2">
            <Button
              onClick={handleDownloadPNG}
              size="sm"
              className="flex-1 gap-1"
              disabled={isDownloading}
            >
              <Download className="w-3 h-3" />
              PNG
            </Button>
            <Button
              onClick={handleDownloadPDF}
              size="sm"
              variant="secondary"
              className="flex-1 gap-1"
              disabled={isDownloading}
            >
              <Download className="w-3 h-3" />
              PDF
            </Button>
            <Button
              onClick={() => onRegenerate(config.id)}
              size="sm"
              variant="outline"
              className="gap-1"
            >
              <Shuffle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Fullscreen Dialog */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-fit p-0 bg-transparent border-0">
          <DialogTitle className="sr-only">Standee Design {config.id} Full View</DialogTitle>
          <div className="relative">
            <Button
              variant="secondary"
              size="icon"
              className="absolute -top-10 right-0 rounded-full"
              onClick={() => setIsFullscreen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
            <div className="shadow-2xl overflow-hidden">
              <StandeeDesign config={config} isFullscreen />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const StandeeDesigns = () => {
  const [standees, setStandees] = useState<StandeeConfig[]>(standeeConfigs);

  const regenerateStandee = (id: number) => {
    const colors = [
      { bg: "#1a1a1a", accentColor: "#d4af37" },
      { bg: "#ffffff", accentColor: "#2d5a3d" },
      { bg: "#0a2540", accentColor: "#00c2ff" },
      { bg: "#f5f0e8", accentColor: "#8b4513" },
      { bg: "#1e1e1e", accentColor: "#e8c547" },
      { bg: "#2c2c2c", accentColor: "#ff6b35" },
      { bg: "#fafafa", accentColor: "#6b21a8" },
      { bg: "#0f172a", accentColor: "#38bdf8" },
      { bg: "#fffbeb", accentColor: "#b45309" },
      { bg: "#18181b", accentColor: "#22c55e" },
      { bg: "#7c2d12", accentColor: "#fbbf24" },
      { bg: "#1e293b", accentColor: "#10b981" },
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setStandees((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...randomColor } : s))
    );
  };

  const regenerateAll = () => {
    const colors = [
      { bg: "#1a1a1a", accentColor: "#d4af37" },
      { bg: "#ffffff", accentColor: "#2d5a3d" },
      { bg: "#0a2540", accentColor: "#00c2ff" },
      { bg: "#f5f0e8", accentColor: "#8b4513" },
      { bg: "#1e1e1e", accentColor: "#e8c547" },
      { bg: "#2c2c2c", accentColor: "#ff6b35" },
      { bg: "#fafafa", accentColor: "#6b21a8" },
      { bg: "#0f172a", accentColor: "#38bdf8" },
      { bg: "#fffbeb", accentColor: "#b45309" },
      { bg: "#18181b", accentColor: "#22c55e" },
    ];

    setStandees((prev) =>
      prev.map((s) => ({
        ...s,
        ...colors[Math.floor(Math.random() * colors.length)],
      }))
    );
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold font-display">
            Model Flat Standee Designs
          </h1>
          <p className="text-primary-foreground/80 mt-2 text-lg max-w-2xl">
            Premium, bold designs with trust badges to stop visitors and inspire them to transform their flats.
          </p>
        </div>
      </div>

      {/* Controls */}
      <section className="py-6 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                10 Unique Print-Ready Designs
              </h2>
              <p className="text-sm text-muted-foreground">
                Roll-up standee: 2.5 × 6 feet | CMYK-friendly | 300 DPI ready
              </p>
            </div>
            <Button onClick={regenerateAll} size="lg" className="gap-2">
              <Shuffle className="w-4 h-4" />
              Regenerate All Colors
            </Button>
          </div>

          <div className="mt-5 grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="font-semibold text-foreground">Size</p>
              <p className="text-muted-foreground text-xs">2.5 ft × 6 ft</p>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="font-semibold text-foreground">Format</p>
              <p className="text-muted-foreground text-xs">PDF & PNG</p>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="font-semibold text-foreground">Resolution</p>
              <p className="text-muted-foreground text-xs">300 DPI (6x scale)</p>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="font-semibold text-foreground">Color Mode</p>
              <p className="text-muted-foreground text-xs">CMYK Ready</p>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="font-semibold text-foreground">Website</p>
              <p className="text-muted-foreground text-xs">brightleaf.co.in</p>
            </div>
          </div>
        </div>
      </section>

      {/* Standee Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
            {standees.map((config) => (
              <StandeeCard
                key={config.id}
                config={config}
                onRegenerate={regenerateStandee}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Design Types Explanation */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Design Variations Explained
          </h2>
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            <div className="bg-background p-4 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2 text-sm">1. Premium Luxury</h3>
              <p className="text-xs text-muted-foreground">
                Elegant typography with minimal text and large hero image.
              </p>
            </div>
            <div className="bg-background p-4 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2 text-sm">2. Conversion-Focused</h3>
              <p className="text-xs text-muted-foreground">
                Bold question-based headline designed to drive action.
              </p>
            </div>
            <div className="bg-background p-4 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2 text-sm">3. One-Stop Solution</h3>
              <p className="text-xs text-muted-foreground">
                Process icons showing the complete journey.
              </p>
            </div>
            <div className="bg-background p-4 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2 text-sm">4. Fun & Catchy</h3>
              <p className="text-xs text-muted-foreground">
                Light playful tone with short punchy copy.
              </p>
            </div>
            <div className="bg-background p-4 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2 text-sm">5. Minimal & Corporate</h3>
              <p className="text-xs text-muted-foreground">
                Clean layout with strong brand presence.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-background p-4 rounded-lg border border-border border-l-4 border-l-amber-500">
              <h3 className="font-semibold text-foreground mb-2 text-sm">6. Trust Badges</h3>
              <p className="text-xs text-muted-foreground">
                Showcases credibility with project count & ratings.
              </p>
            </div>
            <div className="bg-background p-4 rounded-lg border border-border border-l-4 border-l-yellow-500">
              <h3 className="font-semibold text-foreground mb-2 text-sm">7. Urgency & Offer</h3>
              <p className="text-xs text-muted-foreground">
                Creates urgency with limited-time free 3D design offer.
              </p>
            </div>
            <div className="bg-background p-4 rounded-lg border border-border border-l-4 border-l-emerald-500">
              <h3 className="font-semibold text-foreground mb-2 text-sm">8. Guarantee Focus</h3>
              <p className="text-xs text-muted-foreground">
                Builds trust with satisfaction guarantee messaging.
              </p>
            </div>
            <div className="bg-background p-4 rounded-lg border border-border border-l-4 border-l-red-500">
              <h3 className="font-semibold text-foreground mb-2 text-sm">9. Social Proof</h3>
              <p className="text-xs text-muted-foreground">
                Features customer testimonials and Google ratings.
              </p>
            </div>
            <div className="bg-background p-4 rounded-lg border border-border border-l-4 border-l-purple-500">
              <h3 className="font-semibold text-foreground mb-2 text-sm">10. Exclusive Deal</h3>
              <p className="text-xs text-muted-foreground">
                VIP exclusivity for Prosperiti Homes residents.
              </p>
            </div>
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
            Contact us for customized standee designs tailored to your specific project requirements.
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
