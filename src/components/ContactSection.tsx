
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/albuquerque.guga', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5581996109787?text=Oi%20Guga%2C%20gostaria%20de%20conversar%20sobre%20sua%20m%C3%BAsica%21', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-rose-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-amber-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Vamos Conversar?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entre em contato comigo! Adoro conversar com meus fãs e saber como minhas músicas tocam vocês.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Instagram</h3>
            <p className="text-gray-600 mb-6">
              Siga-me no Instagram para ver bastidores, novidades e muito mais!
            </p>
            <Button 
              onClick={handleInstagramClick}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
            >
              @albuquerque.guga
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">WhatsApp</h3>
            <p className="text-gray-600 mb-6">
              Quer conversar diretamente comigo? Mande uma mensagem!
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
            >
              (81) 99610-9787
            </Button>
          </Card>
        </div>

        <Card className="p-8 text-center bg-white/60 backdrop-blur-sm border-0">
          <div className="flex items-center justify-center gap-4 mb-6">
            <MapPin className="w-6 h-6 text-rose-500" />
            <span className="text-lg font-medium text-gray-700">Pernambuco, Brasil</span>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            Nascido e criado em Pernambuco, levando a música brasileira para corações em todo o país.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
