import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '919885301292';
  const message = encodeURIComponent('Hello! I am interested in your interior design services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
      style={{
        animation: 'pulse-glow 2s infinite',
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-[hsl(0,0%,100%)] fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;