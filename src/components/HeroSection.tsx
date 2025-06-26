
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/albuquerque.guga', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5581996609371?text=Oi%20Guga%2C%20quero%20contratar%20sua%20festa%21', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-rose-900 to-orange-900">
        <div className="absolute inset-0 opacity-20 animate-pulse">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main image */}
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full opacity-30 scale-110 animate-pulse"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full opacity-20 blur-lg animate-pulse delay-500"></div>
          <img 
            src="/lovable-uploads/1e2adddd-c5df-4be8-9ac6-2a664aa329d9.png" 
            alt="Guga Albuquerque - O Rei da Farra"
            className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-3 animate-bounce">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Title and tagline */}
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-4 animate-fade-in tracking-tight">
          GUGA FARRA
        </h1>
        
        <p className="text-2xl md:text-4xl text-white/90 mb-2 font-bold animate-fade-in delay-300 tracking-wide">
          🎉 A SUA FESTA DO SEU JEITO 🎉
        </p>
        
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
          "Transformo qualquer evento numa festa inesquecível! Pop, sertanejo, piseiro... 
          <br className="hidden md:block" />
          Sua festa, seu estilo, sua diversão garantida!"
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-700 mb-12">
          <Button 
            onClick={handleInstagramClick}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 text-white px-10 py-8 text-xl rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-110 flex items-center gap-4 w-full sm:w-auto border-2 border-white/20"
          >
            <Instagram className="w-7 h-7" />
            Seguir no Instagram
          </Button>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-8 text-xl rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 flex items-center gap-4 w-full sm:w-auto border-2 border-white/20"
          >
            <MessageCircle className="w-7 h-7" />
            Contratar Festa
          </Button>
        </div>

        {/* Music genres */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-1000">
          {['Pop Nacional', 'Sertanejo', 'Piseiro', 'Forró', 'Axé'].map((genre) => (
            <span 
              key={genre}
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
