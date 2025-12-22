import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Shuffle } from "lucide-react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import logo from "@/assets/brightleaf-logo.png";
import heroImage from "@/assets/hero-living-room.jpg";

// 5 specific headlines as requested
const standeeConfigs = [
  {
    id: 1,
    headline: "Your Flat Can Look Like This Too.",
    bg: "#1a1a1a",
    accentColor: "#d4af37",
  },
  {
    id: 2,
    headline: "This Flat Today. Yours Next.",
    bg: "#ffffff",
    accentColor: "#2d5a3d",
  },
  {
    id: 3,
    headline: "Why Should Only This Flat Look This Good?",
    bg: "#0a2540",
    accentColor: "#00c2ff",
  },
  {
    id: 4,
    headline: "We'll Transform Your Flat Like This.",
    bg: "#f5f0e8",
    accentColor: "#8b4513",
  },
  {
    id: 5,
    headline: "See This Flat? Imagine Yours.",
    bg: "#1e1e1e",
    accentColor: "#e8c547",
  },
];

interface StandeeConfig {
  id: number;
  headline: string;
  bg: string;
  accentColor: string;
}

// Minimal, bold standee design
const StandeeDesign = ({ config }: { config: StandeeConfig }) => {
  const { headline, bg, accentColor } = config;
  const isDark = bg === "#1a1a1a" || bg === "#0a2540" || bg === "#1e1e1e";
  const textColor = isDark ? "#ffffff" : "#1a1a1a";
  const subtleText = isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)";

  return (
    <div
      className="w-full h-full flex flex-col relative overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      {/* Top accent line */}
      <div className="h-1.5" style={{ backgroundColor: accentColor }} />

      {/* Main Image - Hero shot taking prominent space */}
      <div className="relative flex-shrink-0">
        <img
          src={heroImage}
          alt="Model Flat Interior"
          className="w-full h-44 object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, ${bg} 100%)`,
          }}
        />
      </div>

      {/* Main Content - Minimal & Bold */}
      <div className="flex-1 flex flex-col justify-center px-4 py-3 text-center -mt-6 relative z-10">
        {/* Big Bold Headline */}
        <h1
          className="text-base font-black leading-tight tracking-tight mb-2"
          style={{ color: textColor }}
        >
          {headline}
        </h1>

        {/* Subtle subline */}
        <p
          className="text-[7px] leading-relaxed max-w-[90%] mx-auto"
          style={{ color: subtleText }}
        >
          Complete interior solutions — design to execution.
        </p>
      </div>

      {/* CTA - Small & Clean */}
      <div className="px-4 pb-3">
        <div
          className="py-1.5 rounded text-center"
          style={{ backgroundColor: accentColor }}
        >
          <p className="text-[8px] font-semibold text-white tracking-wide">
            Talk to Our Designer
          </p>
        </div>
      </div>

      {/* Branding Footer - Small & Clean */}
      <div
        className="py-2 px-3"
        style={{ backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <img
              src={logo}
              alt="Brightleaf"
              className="h-4 object-contain"
              style={{ filter: isDark ? "brightness(0) invert(1)" : "none" }}
            />
            <div>
              <p
                className="text-[5px] font-medium leading-none"
                style={{ color: textColor }}
              >
                Brightleaf Design Studio
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[4px]" style={{ color: subtleText }}>
              Project By
            </p>
            <p
              className="text-[5px] font-medium"
              style={{ color: textColor }}
            >
              Prosperiti Homes
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1" style={{ backgroundColor: accentColor }} />
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

  const handleDownloadPNG = async () => {
    if (!standeeRef.current || isDownloading) return;
    setIsDownloading(true);

    try {
      const canvas = await html2canvas(standeeRef.current, {
        scale: 6, // Very high quality for print
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
      });

      const link = document.createElement("a");
      link.download = `Standee-${String(config.id).padStart(2, "0")}-PrintReady.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    } catch (error) {
      console.error("Error generating PNG:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <h3 className="text-lg font-bold text-foreground">Design {config.id}</h3>
        <p className="text-xs text-muted-foreground mt-1 max-w-[200px]">
          "{config.headline.substring(0, 30)}..."
        </p>
      </div>

      {/* Standee Preview - 2.5:6 ratio */}
      <div
        ref={standeeRef}
        className="w-[200px] h-[480px] rounded-lg shadow-2xl overflow-hidden border-2 border-border"
      >
        <StandeeDesign config={config} />
      </div>

      <div className="flex gap-2">
        <Button
          onClick={handleDownloadPNG}
          size="sm"
          className="gap-2"
          disabled={isDownloading}
        >
          <Download className="w-4 h-4" />
          {isDownloading ? "Generating..." : "Download PNG"}
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
  );
};

const StandeeDesigns = () => {
  const [standees, setStandees] = useState<StandeeConfig[]>(standeeConfigs);

  // Shuffle colors for a standee while keeping headline
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
      prev.map((s) =>
        s.id === id ? { ...s, ...randomColor } : s
      )
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
            Bold, minimal designs to stop visitors at the entrance and make them think:
            "I want my flat to look like this."
          </p>
        </div>
      </div>

      {/* Controls */}
      <section className="py-6 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                5 Unique Attention-Grabbing Designs
              </h2>
              <p className="text-sm text-muted-foreground">
                Roll-up standee size: 2.5 × 6 feet | Print-ready PNG downloads
              </p>
            </div>
            <Button onClick={regenerateAll} size="lg" className="gap-2">
              <Shuffle className="w-4 h-4" />
              Generate New Color Schemes
            </Button>
          </div>

          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-background rounded-lg p-4 border border-border">
              <p className="font-semibold text-foreground">Size</p>
              <p className="text-muted-foreground">2.5 ft × 6 ft</p>
            </div>
            <div className="bg-background rounded-lg p-4 border border-border">
              <p className="font-semibold text-foreground">Format</p>
              <p className="text-muted-foreground">Vertical Roll-up</p>
            </div>
            <div className="bg-background rounded-lg p-4 border border-border">
              <p className="font-semibold text-foreground">Quality</p>
              <p className="text-muted-foreground">6x Scale Print-Ready</p>
            </div>
            <div className="bg-background rounded-lg p-4 border border-border">
              <p className="font-semibold text-foreground">Style</p>
              <p className="text-muted-foreground">Minimal & Bold</p>
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

      {/* Design Philosophy */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Design Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-background p-5 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Minimal Layout</h3>
              <p className="text-sm text-muted-foreground">
                Clean design with no clutter. One strong image, one bold headline.
              </p>
            </div>
            <div className="bg-background p-5 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">2-Second Read</h3>
              <p className="text-sm text-muted-foreground">
                Headlines designed to be read instantly from a distance.
              </p>
            </div>
            <div className="bg-background p-5 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">High Contrast</h3>
              <p className="text-sm text-muted-foreground">
                CMYK-friendly colors optimized for print clarity.
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
