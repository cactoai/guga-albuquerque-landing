
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

const MusicSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-rose-50 relative">
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
              <div className="h-48 bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Music className="w-16 h-16 text-rose-600 opacity-80" />
              </div>
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
              <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Music className="w-16 h-16 text-amber-600 opacity-80" />
              </div>
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
              <div className="h-48 bg-gradient-to-br from-purple-200 to-rose-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Music className="w-16 h-16 text-purple-600 opacity-80" />
              </div>
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
