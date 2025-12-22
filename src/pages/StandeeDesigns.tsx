import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Download, ArrowLeft, Shuffle, Eye, X, Phone, Globe, MessageCircle, Award, CheckCircle, Users, Star, Shield, Clock, Sparkles, MapPin, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { QRCodeSVG } from "qrcode.react";
import logo from "@/assets/brightleaf-logo.png";
import heroImage from "@/assets/hero-living-room.jpg";

// Bright and colorful standee designs
const standeeConfigs = [
  {
    id: 1,
    type: "premium",
    headline: "Your Flat Can Look Like This Too.",
    subtext: "Complete interior solutions — design to execution.",
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accentColor: "#ffd700",
  },
  {
    id: 2,
    type: "conversion",
    headline: "Why Should Only This Flat Look This Good?",
    subtext: "Get the same premium interiors for your new flat.",
    bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accentColor: "#ffffff",
  },
  {
    id: 3,
    type: "process",
    headline: "All Your Interiors. One Team.",
    subtext: "From concept to completion, we handle everything.",
    bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    accentColor: "#1a1a1a",
  },
  {
    id: 4,
    type: "fun",
    headline: "This Flat Today. Yours Next?",
    subtext: "Same design. Your address. Let's make it happen.",
    bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    accentColor: "#1a1a1a",
  },
  {
    id: 5,
    type: "minimal",
    headline: "Designed. Built. Delivered.",
    subtext: "End-to-end interior solutions for your home.",
    bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    accentColor: "#2d5a3d",
  },
  {
    id: 6,
    type: "trust",
    headline: "500+ Happy Homes Designed",
    subtext: "Join our growing family of satisfied homeowners.",
    bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    accentColor: "#d63384",
    trustBadges: ["500+ Projects", "10+ Years", "4.9★ Rating"],
  },
  {
    id: 7,
    type: "urgency",
    headline: "Limited Time Offer!\nFree 3D Design",
    subtext: "Book your consultation today and get a complimentary 3D visualization.",
    bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    accentColor: "#c41e3a",
    trustBadges: ["Free Consultation", "No Hidden Costs"],
  },
  {
    id: 8,
    type: "guarantee",
    headline: "100% Satisfaction Guaranteed",
    subtext: "We don't stop until you love your space.",
    bg: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    accentColor: "#0d6efd",
    trustBadges: ["Money Back Guarantee", "On-Time Delivery", "Premium Materials"],
  },
  {
    id: 9,
    type: "social",
    headline: "See What Others Are Saying",
    subtext: "\"Best decision we made for our home!\" - Happy Customer",
    bg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    accentColor: "#6f42c1",
    trustBadges: ["4.9/5 Google Rating", "100+ Reviews"],
  },
  {
    id: 10,
    type: "exclusive",
    headline: "Exclusive Model Flat Offer",
    subtext: "Special pricing for Prosperiti Homes residents only.",
    bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    accentColor: "#dc3545",
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

// Contact Info
const contactInfo = {
  phone: "98853 01292",
  website: "brightleaf.co.in",
  address: "Hyderabad, Telangana",
};

// Generate vCard data for "Add to Contacts"
const generateVCard = () => {
  return `BEGIN:VCARD
VERSION:3.0
FN:Brightleaf Design Studio
ORG:Brightleaf Design Studio
TEL;TYPE=WORK,VOICE:+91${contactInfo.phone.replace(/\s/g, '')}
URL:https://${contactInfo.website}
ADR;TYPE=WORK:;;${contactInfo.address};;;India
END:VCARD`;
};

// Process icons for Standee 3
const ProcessStep = ({ label, icon: Icon, isFullscreen }: { label: string; icon: any; isFullscreen: boolean }) => (
  <div className="flex flex-col items-center">
    <div 
      className="rounded-full flex items-center justify-center"
      style={{ 
        backgroundColor: 'rgba(255,255,255,0.9)',
        color: '#1a1a1a',
        width: isFullscreen ? 36 : 18,
        height: isFullscreen ? 36 : 18,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
      }}
    >
      <Icon style={{ width: isFullscreen ? 16 : 8, height: isFullscreen ? 16 : 8 }} />
    </div>
    <p 
      className="mt-1 font-bold text-center" 
      style={{ 
        color: '#1a1a1a',
        fontSize: isFullscreen ? 9 : 4.5,
        textShadow: '0 1px 2px rgba(255,255,255,0.8)'
      }}
    >
      {label}
    </p>
  </div>
);

// Trust Badge Component - Bright style
const TrustBadge = ({ text, accentColor, isFullscreen }: { text: string; accentColor: string; isFullscreen: boolean }) => (
  <div 
    className="flex items-center gap-1 px-2 py-1"
    style={{ 
      backgroundColor: '#ffffff',
      borderRadius: isFullscreen ? 6 : 3,
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
    }}
  >
    <Award style={{ width: isFullscreen ? 12 : 6, height: isFullscreen ? 12 : 6, color: accentColor }} />
    <span 
      className="font-bold"
      style={{ 
        color: '#1a1a1a',
        fontSize: isFullscreen ? 9 : 4.5
      }}
    >
      {text}
    </span>
  </div>
);

// Stats Component
const StatsSection = ({ isFullscreen, accentColor }: { isFullscreen: boolean; accentColor: string }) => (
  <div 
    className="flex justify-center gap-3"
    style={{ marginTop: isFullscreen ? 12 : 6 }}
  >
    {[
      { value: "500+", label: "Projects" },
      { value: "10+", label: "Years" },
      { value: "4.9★", label: "Rating" },
    ].map((stat) => (
      <div key={stat.label} className="text-center">
        <p 
          className="font-black"
          style={{ 
            fontSize: isFullscreen ? 16 : 8,
            color: accentColor
          }}
        >
          {stat.value}
        </p>
        <p 
          className="font-medium"
          style={{ 
            fontSize: isFullscreen ? 7 : 3.5,
            color: '#1a1a1a',
            opacity: 0.8
          }}
        >
          {stat.label}
        </p>
      </div>
    ))}
  </div>
);

// Main Standee Design Component
const StandeeDesign = ({ config, isFullscreen = false }: { config: StandeeConfig; isFullscreen?: boolean }) => {
  const { headline, subtext, bg, accentColor, type, trustBadges } = config;
  const isGradient = bg.includes('gradient');
  const textColor = "#1a1a1a";
  const subtleText = "rgba(0,0,0,0.7)";
  
  const baseHeight = isFullscreen ? "h-[900px]" : "h-[480px]";
  const baseWidth = isFullscreen ? "w-[375px]" : "w-[200px]";

  const hasProcess = type === "process";
  const hasTrustBadges = trustBadges && trustBadges.length > 0;

  // QR Code data - vCard for add to contacts
  const vCardData = generateVCard();
  const websiteUrl = `https://${contactInfo.website}`;

  return (
    <div
      className={`${baseWidth} ${baseHeight} flex flex-col relative`}
      style={{ background: isGradient ? bg : bg }}
    >
      {/* Top accent bar with gradient */}
      <div 
        className="flex-shrink-0" 
        style={{ 
          background: 'linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)',
          height: isFullscreen ? 10 : 5 
        }} 
      />

      {/* Hero Image */}
      <div className="relative flex-shrink-0" style={{ height: isFullscreen ? '32%' : '30%' }}>
        <img
          src={heroImage}
          alt="Model Flat Interior"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
        <div
          className="absolute inset-0"
          style={{
            background: isGradient 
              ? `linear-gradient(to bottom, transparent 30%, rgba(255,255,255,0.95) 100%)`
              : `linear-gradient(to bottom, transparent 30%, ${bg}f5 100%)`,
          }}
        />
        {/* Featured Badge */}
        <div 
          className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1"
          style={{ 
            background: 'linear-gradient(135deg, #ff6b6b, #feca57)',
            borderRadius: isFullscreen ? 6 : 3,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
        >
          <Star style={{ width: isFullscreen ? 14 : 7, height: isFullscreen ? 14 : 7, color: '#ffffff', fill: '#ffffff' }} />
          <span 
            className="font-black text-white"
            style={{ fontSize: isFullscreen ? 11 : 5.5 }}
          >
            FEATURED
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className="flex-1 flex flex-col text-center relative z-10"
        style={{ 
          padding: isFullscreen ? '12px 20px' : '6px 10px',
        }}
      >
        {/* Headline */}
        <h1
          className="font-black leading-tight tracking-tight whitespace-pre-line"
          style={{ 
            color: textColor,
            fontSize: isFullscreen ? 26 : 13,
            marginBottom: isFullscreen ? 8 : 4,
            textShadow: '0 1px 2px rgba(255,255,255,0.5)'
          }}
        >
          {headline}
        </h1>

        {/* Subtext */}
        <p
          className="leading-relaxed max-w-[95%] mx-auto font-medium"
          style={{ 
            color: subtleText,
            fontSize: isFullscreen ? 11 : 5.5
          }}
        >
          {subtext}
        </p>

        {/* Stats Section */}
        <StatsSection isFullscreen={isFullscreen} accentColor={accentColor} />

        {/* Trust Badges */}
        {hasTrustBadges && (
          <div 
            className="flex flex-wrap justify-center gap-1 mx-auto"
            style={{ marginTop: isFullscreen ? 10 : 5 }}
          >
            {trustBadges.map((badge) => (
              <TrustBadge 
                key={badge} 
                text={badge} 
                accentColor={accentColor}
                isFullscreen={isFullscreen}
              />
            ))}
          </div>
        )}

        {/* Process Steps */}
        {hasProcess && (
          <div 
            className="flex justify-center gap-2 mx-auto"
            style={{ marginTop: isFullscreen ? 14 : 7 }}
          >
            {processSteps.map((step) => (
              <ProcessStep 
                key={step.label} 
                label={step.label} 
                icon={step.icon}
                isFullscreen={isFullscreen}
              />
            ))}
          </div>
        )}

        {/* Our Process Section */}
        {!hasProcess && (
          <div 
            className="mx-auto w-full"
            style={{ marginTop: isFullscreen ? 10 : 5 }}
          >
            <p 
              className="font-black mb-1"
              style={{ 
                color: accentColor, 
                fontSize: isFullscreen ? 11 : 5.5,
                textShadow: '0 1px 2px rgba(255,255,255,0.5)'
              }}
            >
              OUR PROCESS
            </p>
            <div className="flex justify-center gap-1 flex-wrap">
              {["Consult", "Design", "Execute", "Deliver"].map((step, i) => (
                <div key={step} className="flex items-center">
                  <span 
                    className="font-bold px-2 py-0.5"
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      borderRadius: isFullscreen ? 4 : 2,
                      color: textColor, 
                      fontSize: isFullscreen ? 9 : 4.5,
                      boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
                    }}
                  >
                    {step}
                  </span>
                  {i < 3 && (
                    <span 
                      style={{ color: accentColor, margin: '0 2px', fontSize: isFullscreen ? 10 : 5, fontWeight: 'bold' }}
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

      {/* QR Code & Contact Section */}
      <div 
        className="flex-shrink-0"
        style={{ 
          backgroundColor: 'rgba(255,255,255,0.95)',
          padding: isFullscreen ? '12px 16px' : '6px 8px',
          margin: isFullscreen ? '0 12px 8px' : '0 6px 4px',
          borderRadius: isFullscreen ? 8 : 4,
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
        }}
      >
        <div className="flex items-center justify-between gap-2">
          {/* QR Code */}
          <div className="flex flex-col items-center">
            <div 
              style={{ 
                padding: isFullscreen ? 4 : 2,
                backgroundColor: '#ffffff',
                borderRadius: isFullscreen ? 4 : 2,
                border: `2px solid ${accentColor}`
              }}
            >
              <QRCodeSVG 
                value={websiteUrl}
                size={isFullscreen ? 60 : 30}
                level="M"
                fgColor="#1a1a1a"
                bgColor="#ffffff"
              />
            </div>
            <p 
              className="font-bold text-center"
              style={{ 
                fontSize: isFullscreen ? 7 : 3.5,
                color: accentColor,
                marginTop: isFullscreen ? 4 : 2
              }}
            >
              SCAN ME
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex-1">
            {/* Phone - Prominent */}
            <div 
              className="flex items-center gap-2 mb-1"
              style={{ 
                backgroundColor: accentColor,
                padding: isFullscreen ? '6px 10px' : '3px 5px',
                borderRadius: isFullscreen ? 6 : 3
              }}
            >
              <Phone style={{ width: isFullscreen ? 16 : 8, height: isFullscreen ? 16 : 8, color: '#ffffff' }} />
              <span 
                className="font-black text-white"
                style={{ fontSize: isFullscreen ? 14 : 7 }}
              >
                {contactInfo.phone}
              </span>
            </div>

            {/* Website */}
            <div className="flex items-center gap-1">
              <Globe style={{ width: isFullscreen ? 12 : 6, height: isFullscreen ? 12 : 6, color: accentColor }} />
              <span 
                className="font-bold"
                style={{ fontSize: isFullscreen ? 11 : 5.5, color: textColor }}
              >
                {contactInfo.website}
              </span>
            </div>

            {/* Address */}
            <div className="flex items-center gap-1">
              <MapPin style={{ width: isFullscreen ? 12 : 6, height: isFullscreen ? 12 : 6, color: accentColor }} />
              <span 
                className="font-medium"
                style={{ fontSize: isFullscreen ? 9 : 4.5, color: subtleText }}
              >
                {contactInfo.address}
              </span>
            </div>

            {/* WhatsApp & Add Contact */}
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <MessageCircle style={{ width: isFullscreen ? 10 : 5, height: isFullscreen ? 10 : 5, color: '#25D366' }} />
                <span 
                  className="font-medium"
                  style={{ fontSize: isFullscreen ? 8 : 4, color: '#25D366' }}
                >
                  WhatsApp
                </span>
              </div>
              <div className="flex items-center gap-1">
                <UserPlus style={{ width: isFullscreen ? 10 : 5, height: isFullscreen ? 10 : 5, color: accentColor }} />
                <span 
                  className="font-medium"
                  style={{ fontSize: isFullscreen ? 8 : 4, color: accentColor }}
                >
                  Save Contact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div style={{ padding: isFullscreen ? '0 12px 8px' : '0 6px 4px' }}>
        <div
          className="text-center flex items-center justify-center gap-2"
          style={{ 
            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
            padding: isFullscreen ? '10px 14px' : '5px 7px',
            borderRadius: isFullscreen ? 8 : 4,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
        >
          <Phone className="text-white" style={{ width: isFullscreen ? 16 : 8, height: isFullscreen ? 16 : 8 }} />
          <p 
            className="font-black text-white tracking-wide"
            style={{ fontSize: isFullscreen ? 13 : 6.5 }}
          >
            BOOK FREE CONSULTATION
          </p>
        </div>
      </div>

      {/* Model Flat Credit */}
      <div 
        className="text-center"
        style={{ 
          padding: isFullscreen ? '6px' : '3px',
          backgroundColor: 'rgba(255,255,255,0.9)'
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
          backgroundColor: 'rgba(255,255,255,0.95)',
          padding: isFullscreen ? '8px 16px' : '4px 8px'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Brightleaf"
              className="object-contain"
              style={{ height: isFullscreen ? 28 : 14 }}
              crossOrigin="anonymous"
            />
            <div>
              <p
                className="font-bold leading-none"
                style={{ color: textColor, fontSize: isFullscreen ? 10 : 5 }}
              >
                Brightleaf Design Studio
              </p>
              <p className="font-medium" style={{ color: subtleText, fontSize: isFullscreen ? 7 : 3.5 }}>
                Interior Design Experts
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium" style={{ color: subtleText, fontSize: isFullscreen ? 7 : 3.5 }}>
              Builder Partner
            </p>
            <p
              className="font-bold"
              style={{ color: textColor, fontSize: isFullscreen ? 10 : 5 }}
            >
              Prosperiti Homes
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent bar with gradient */}
      <div 
        className="flex-shrink-0" 
        style={{ 
          background: 'linear-gradient(90deg, #ff9ff3, #48dbfb, #feca57, #ff6b6b)',
          height: isFullscreen ? 8 : 4 
        }} 
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

        {/* Standee Preview */}
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

  const brightGradients = [
    { bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", accentColor: "#ffd700" },
    { bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", accentColor: "#ffffff" },
    { bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", accentColor: "#1a1a1a" },
    { bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", accentColor: "#1a1a1a" },
    { bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)", accentColor: "#2d5a3d" },
    { bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)", accentColor: "#d63384" },
    { bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", accentColor: "#c41e3a" },
    { bg: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)", accentColor: "#0d6efd" },
    { bg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)", accentColor: "#6f42c1" },
    { bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)", accentColor: "#dc3545" },
    { bg: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)", accentColor: "#ffffff" },
    { bg: "linear-gradient(135deg, #7f7fd5 0%, #86a8e7 50%, #91eae4 100%)", accentColor: "#1a1a1a" },
  ];

  const regenerateStandee = (id: number) => {
    const randomGradient = brightGradients[Math.floor(Math.random() * brightGradients.length)];
    setStandees((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...randomGradient } : s))
    );
  };

  const regenerateAll = () => {
    setStandees((prev) =>
      prev.map((s) => ({
        ...s,
        ...brightGradients[Math.floor(Math.random() * brightGradients.length)],
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
            Bright, colorful designs with QR codes, trust badges, and prominent contact info.
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

          <div className="mt-5 grid grid-cols-2 md:grid-cols-6 gap-3 text-sm">
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="font-semibold text-foreground">Size</p>
              <p className="text-muted-foreground text-xs">2.5 ft × 6 ft</p>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="font-semibold text-foreground">Phone</p>
              <p className="text-muted-foreground text-xs">{contactInfo.phone}</p>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="font-semibold text-foreground">Website</p>
              <p className="text-muted-foreground text-xs">{contactInfo.website}</p>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="font-semibold text-foreground">QR Code</p>
              <p className="text-muted-foreground text-xs">Scan to Visit</p>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="font-semibold text-foreground">Trust Stats</p>
              <p className="text-muted-foreground text-xs">500+ | 10+ Years</p>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border">
              <p className="font-semibold text-foreground">Resolution</p>
              <p className="text-muted-foreground text-xs">300 DPI (6x)</p>
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
