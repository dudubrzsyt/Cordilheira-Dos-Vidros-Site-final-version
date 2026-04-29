import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511977016309"; // Número do Luan

const WhatsAppFloat = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de mais informações sobre os serviços da Cordilheira dos Vidros.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="
        fixed bottom-6 right-6 
        flex items-center gap-2 
        bg-green-500 text-white 
        px-4 py-3 rounded-full shadow-lg 
        hover:bg-green-600 hover:scale-110 
        transition-transform duration-300 ease-in-out 
        animate-bounce
      "
    >
      <MessageCircle size={28} className="text-white" />
      <span className="hidden sm:inline font-semibold">Fale conosco</span>
    </a>
  );
};

export default WhatsAppFloat;