
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/albuquerque.guga', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5581996609371?text=Oi%20Guga%2C%20sou%20seu%20f%C3%A3%21', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-amber-50 to-orange-100 opacity-80"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-rose-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-amber-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-orange-200 rounded-full opacity-25 animate-pulse delay-2000"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main image */}
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full opacity-20 scale-110 animate-pulse"></div>
          <img 
            src="/lovable-uploads/1e2adddd-c5df-4be8-9ac6-2a664aa329d9.png" 
            alt="Guga Albuquerque - Cantor Pop Romântico"
            className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Title and tagline */}
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-amber-600 to-orange-600 bg-clip-text text-transparent mb-4 animate-fade-in">
          Guga Albuquerque
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-2 font-medium animate-fade-in delay-300">
          🎵 Pop Romântico Brasileiro 🎵
        </p>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
          "Transformando sentimentos em melodias que tocam o coração"
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
          <Button 
            onClick={handleInstagramClick}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto"
          >
            <Instagram className="w-6 h-6" />
            Seguir no Instagram
          </Button>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            Conversar no WhatsApp
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
