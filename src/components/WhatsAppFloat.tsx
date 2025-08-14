import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phoneNumber = "5511999999999";
  const message = "Olá! Gostaria de solicitar um orçamento para serviços de ar-condicionado.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 active:bg-green-700 active:scale-95 text-white shadow-elegant hover:shadow-cool transition-all duration-200 group flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition-transform duration-200" />
      </a>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping -z-10"></div>
    </div>
  );
};

export default WhatsAppFloat;