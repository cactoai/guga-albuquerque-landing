
import { Card } from "@/components/ui/card";
import { Music, Heart, Mic } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 via-amber-400 to-orange-400"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Conheça o Artista
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Guga Albuquerque é uma das vozes mais emocionantes do pop romântico brasileiro atual. 
              Com sua capacidade única de transformar sentimentos em melodias inesquecíveis, 
              ele conquista corações por todo o país.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Sua música é uma ponte entre o tradicional e o contemporâneo, criando um som 
              autêntico que ressoa com pessoas de todas as idades. Cada canção é uma história, 
              cada apresentação é uma experiência única.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full font-medium">
                Pop Romântico
              </span>
              <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium">
                MPB Contemporânea
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">
                Baladas
              </span>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-rose-400">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-100 rounded-full">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Conexão Emocional</h3>
                  <p className="text-gray-600">
                    Cada música é criada para tocar profundamente o coração dos ouvintes
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-amber-400">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Music className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Som Autêntico</h3>
                  <p className="text-gray-600">
                    Uma mistura única entre o clássico e o moderno do pop brasileiro
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-orange-400">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Mic className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Performance Cativante</h3>
                  <p className="text-gray-600">
                    Shows emocionantes que criam momentos inesquecíveis
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
