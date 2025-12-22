import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Download, ArrowLeft, Shuffle, Eye, X, Phone, Globe, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logo from "@/assets/brightleaf-logo.png";
import heroImage from "@/assets/hero-living-room.jpg";

// 5 specific standee designs as requested
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
];

interface StandeeConfig {
  id: number;
  type: string;
  headline: string;
  subtext: string;
  bg: string;
  accentColor: string;
}

// Process icons for Standee 3
const ProcessStep = ({ label, isDark }: { label: string; isDark: boolean }) => (
  <div className="flex flex-col items-center">
    <div 
      className="w-8 h-8 rounded-full flex items-center justify-center text-[8px] font-bold"
      style={{ 
        backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
        color: isDark ? '#ffffff' : '#1a1a1a'
      }}
    >
      {label.charAt(0)}
    </div>
    <p className="text-[6px] mt-1 font-medium" style={{ color: isDark ? '#ffffff' : '#1a1a1a' }}>
      {label}
    </p>
  </div>
);

// Main Standee Design Component - NO rounded corners for clean export
const StandeeDesign = ({ config, isFullscreen = false }: { config: StandeeConfig; isFullscreen?: boolean }) => {
  const { headline, subtext, bg, accentColor, type } = config;
  const isDark = bg === "#1a1a1a" || bg === "#0a2540" || bg === "#18181b";
  const textColor = isDark ? "#ffffff" : "#1a1a1a";
  const subtleText = isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)";
  
  const scale = isFullscreen ? 2 : 1;
  const baseHeight = isFullscreen ? "h-[900px]" : "h-[480px]";
  const baseWidth = isFullscreen ? "w-[375px]" : "w-[200px]";

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
      <div className="relative flex-shrink-0" style={{ height: isFullscreen ? '45%' : '42%' }}>
        <img
          src={heroImage}
          alt="Model Flat Interior"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 50%, ${bg} 100%)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div 
        className="flex-1 flex flex-col justify-center text-center relative z-10"
        style={{ 
          padding: isFullscreen ? '0 24px' : '0 12px',
          marginTop: isFullscreen ? -40 : -20 
        }}
      >
        {/* Headline */}
        <h1
          className="font-black leading-tight tracking-tight"
          style={{ 
            color: textColor,
            fontSize: isFullscreen ? 32 : 16,
            marginBottom: isFullscreen ? 16 : 8
          }}
        >
          {headline}
        </h1>

        {/* Subtext */}
        <p
          className="leading-relaxed max-w-[90%] mx-auto"
          style={{ 
            color: subtleText,
            fontSize: isFullscreen ? 14 : 7
          }}
        >
          {subtext}
        </p>

        {/* Process Steps for Standee 3 */}
        {type === "process" && (
          <div 
            className="flex justify-center gap-2 mx-auto"
            style={{ marginTop: isFullscreen ? 24 : 12 }}
          >
            {["Meet", "Design", "Approve", "Build", "Install", "Enjoy"].map((step) => (
              <ProcessStep key={step} label={step} isDark={isDark} />
            ))}
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div style={{ padding: isFullscreen ? '0 24px 16px' : '0 12px 8px' }}>
        <div
          className="text-center flex items-center justify-center gap-2"
          style={{ 
            backgroundColor: accentColor,
            padding: isFullscreen ? '12px 16px' : '6px 8px',
            borderRadius: isFullscreen ? 6 : 3
          }}
        >
          <Phone className="text-white" style={{ width: isFullscreen ? 16 : 8, height: isFullscreen ? 16 : 8 }} />
          <p 
            className="font-semibold text-white tracking-wide"
            style={{ fontSize: isFullscreen ? 14 : 7 }}
          >
            Talk to Our Designer
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div 
        className="flex justify-center gap-4 items-center"
        style={{ 
          padding: isFullscreen ? '8px 24px' : '4px 12px',
          backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'
        }}
      >
        <div className="flex items-center gap-1">
          <Globe style={{ width: isFullscreen ? 12 : 6, height: isFullscreen ? 12 : 6, color: subtleText }} />
          <span style={{ fontSize: isFullscreen ? 10 : 5, color: subtleText }}>brightleaf.in</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle style={{ width: isFullscreen ? 12 : 6, height: isFullscreen ? 12 : 6, color: '#25D366' }} />
          <span style={{ fontSize: isFullscreen ? 10 : 5, color: subtleText }}>+91 9876543210</span>
        </div>
      </div>

      {/* Branding Footer */}
      <div
        className="flex-shrink-0"
        style={{ 
          backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
          padding: isFullscreen ? '12px 24px' : '6px 12px'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Brightleaf"
              className="object-contain"
              style={{ 
                height: isFullscreen ? 32 : 16,
                filter: isDark ? "brightness(0) invert(1)" : "none" 
              }}
              crossOrigin="anonymous"
            />
            <div>
              <p
                className="font-semibold leading-none"
                style={{ color: textColor, fontSize: isFullscreen ? 10 : 5 }}
              >
                Brightleaf Design Studio
              </p>
              <p style={{ color: subtleText, fontSize: isFullscreen ? 8 : 4 }}>
                Interior Design
              </p>
            </div>
          </div>
          <div className="text-right">
            <p style={{ color: subtleText, fontSize: isFullscreen ? 8 : 4 }}>
              Model Flat By
            </p>
            <p
              className="font-semibold"
              style={{ color: textColor, fontSize: isFullscreen ? 10 : 5 }}
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
      // At 300 DPI that's 9000 x 21600 pixels
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
            Premium, bold designs to stop visitors at the entrance and inspire them to transform their flats.
          </p>
        </div>
      </div>

      {/* Controls */}
      <section className="py-6 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                5 Unique Print-Ready Designs
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
              <p className="font-semibold text-foreground">Style</p>
              <p className="text-muted-foreground text-xs">Minimal & Bold</p>
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
          <div className="grid md:grid-cols-5 gap-4">
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
