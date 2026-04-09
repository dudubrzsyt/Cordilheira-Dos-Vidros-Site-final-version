import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+5511914973669"; // Replace with Luan's number

const WhatsAppFloat = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de mais informações sobre os serviços da Cordilheira dos Vidros.`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float animate-pulse-glow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="hidden sm:inline text-sm">Fale conosco</span>
    </a>
  );
};

export default WhatsAppFloat;
