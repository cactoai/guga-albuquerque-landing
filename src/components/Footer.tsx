
import { Instagram, MessageCircle, Heart, Music, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleInstagramClick = () => {
    window.open('https://instagram.com/albuquerque.guga', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5581996609371', '_blank');
  };

  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
            <h3 className="text-4xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              GUGA FARRA
            </h3>
            <Music className="w-8 h-8 text-orange-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            A sua festa do seu jeito! 🎉
            <br />
            Transformando momentos em memórias inesquecíveis
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <button 
            onClick={handleInstagramClick}
            className="group relative p-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
          >
            <Instagram className="w-8 h-8 group-hover:animate-pulse relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button 
            onClick={handleWhatsAppClick}
            className="group relative p-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
          >
            <MessageCircle className="w-8 h-8 group-hover:animate-pulse relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
            <h4 className="text-pink-400 font-bold text-lg mb-2">Shows & Eventos</h4>
            <p className="text-gray-300">Casamentos, aniversários, festas corporativas</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
            <h4 className="text-purple-400 font-bold text-lg mb-2">Repertório</h4>
            <p className="text-gray-300">Pop, sertanejo, piseiro, forró e muito mais</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
            <h4 className="text-orange-400 font-bold text-lg mb-2">Contato</h4>
            <p className="text-gray-300">WhatsApp: (81) 99660-9371</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 text-lg">
            © {currentYear} Guga Farra. Feito com 
            <Heart className="w-5 h-5 text-rose-400 animate-pulse" /> 
            para animar suas festas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
