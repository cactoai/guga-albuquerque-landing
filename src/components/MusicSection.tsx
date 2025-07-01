import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

const MusicSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5581996109787?text=Oi%20Guga%2C%20quero%20solicitar%20um%20orçamento%20para%20minha%20festa%21', '_blank');
  };

  return (
    <section id="music" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-rose-50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sua Festa, Seu Ritmo
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Descubra como Guga Farra transforma qualquer ocasião em uma celebração memorável. Com formatos de shows que se adaptam ao tamanho e estilo do seu evento, você escolhe a vibe, e a gente entrega tudo: voz potente, som de qualidade, iluminação incrível e uma equipe técnica que cuida de cada detalhe.
            <br className="hidden md:block" />
            Dos ambientes mais íntimos aos palcos mais animados — a festa é sua, e o show é do seu jeito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white">
            <div className="relative overflow-hidden">
              <img 
                src="/lovable-uploads/cfcd3c85-3048-47da-be10-952265b218fa.png" 
                alt="Show Compacto - Evento íntimo com Guga Farra"
                className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-2">Show Compacto</h3>
              <p className="text-gray-600 mb-4">Perfeito para eventos íntimos e ambientes menores</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Ideal para até 100 pessoas</span>
              </div>
            </div>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white">
            <div className="relative overflow-hidden">
              <img 
                src="/lovable-uploads/b2d84316-5717-4fa9-a7ac-61083575f1c0.png" 
                alt="Intermediário - Show para médio porte"
                className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-2">Intermediário</h3>
              <p className="text-gray-600 mb-4">Estrutura completa para festas de médio porte</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Ideal para 100 a 500 pessoas</span>
              </div>
            </div>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white md:col-span-2 lg:col-span-1">
            <div className="relative overflow-hidden">
              <img 
                src="/lovable-uploads/3bc3d06b-bd97-4c1f-9bd4-f0d3380eb22e.png" 
                alt="Grande Evento - Show com produção completa"
                className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-2">Grande Evento</h3>
              <p className="text-gray-600 mb-4">Produção completa para grandes celebrações</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Acima de 500 pessoas</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={handleWhatsAppClick}
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
