
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Sparkles } from "lucide-react";

const HeroSection = () => {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/albuquerque.guga', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5581996109787?text=Oi%20Guga%2C%20quero%20contratar%20sua%20festa%21', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
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

      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Left Side */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Title and tagline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-4 animate-fade-in tracking-tight">
              GUGA FARRA
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 font-bold animate-fade-in delay-300 tracking-wide">
              🎉 A SUA FESTA DO SEU JEITO 🎉
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-8 leading-relaxed animate-fade-in delay-500">
              "Transformo qualquer evento numa festa inesquecível! Pop, sertanejo, piseiro... 
              <br className="hidden md:block" />
              Sua festa, seu estilo, sua diversão garantida!"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-fade-in delay-700 mb-8">
              <Button 
                onClick={handleInstagramClick}
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-110 flex items-center gap-3 w-full sm:w-auto border-2 border-white/20"
              >
                <Instagram className="w-6 h-6" />
                Seguir no Instagram
              </Button>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 flex items-center gap-3 w-full sm:w-auto border-2 border-white/20"
              >
                <MessageCircle className="w-6 h-6" />
                Contratar Festa
              </Button>
            </div>

            {/* Music genres */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in delay-1000">
              {['Pop Nacional', 'Sertanejo', 'Piseiro', 'Forró', 'Axé'].map((genre) => (
                <span 
                  key={genre}
                  className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          {/* Image Right Side */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full opacity-30 scale-110 animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full opacity-20 blur-lg animate-pulse delay-500"></div>
              <img 
                src="/lovable-uploads/1e2adddd-c5df-4be8-9ac6-2a664aa329d9.png" 
                alt="Guga Albuquerque - O Rei da Farra"
                className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-cover rounded-full border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-3 animate-bounce">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
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
