
import { Instagram, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleInstagramClick = () => {
    window.open('https://instagram.com/albuquerque.guga', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5581996609371', '_blank');
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent mb-4">
            Guga Albuquerque
          </h3>
          <p className="text-gray-300 max-w-md mx-auto">
            Transformando sentimentos em melodias que tocam o coração
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <button 
            onClick={handleInstagramClick}
            className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:scale-110 transition-transform duration-300 group"
          >
            <Instagram className="w-6 h-6 group-hover:animate-pulse" />
          </button>
          <button 
            onClick={handleWhatsAppClick}
            className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full hover:scale-110 transition-transform duration-300 group"
          >
            <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
          </button>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Guga Albuquerque. Feito com 
            <Heart className="w-4 h-4 text-rose-400 animate-pulse" /> 
            para os fãs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
