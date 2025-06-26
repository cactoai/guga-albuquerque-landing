
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Music } from "lucide-react";

const MusicSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-rose-50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Música que Emociona
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore o universo musical de Guga Albuquerque através de suas composições mais marcantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white">
            <div className="relative overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Music className="w-16 h-16 text-rose-600 opacity-80" />
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button size="lg" className="rounded-full bg-white/90 text-gray-800 hover:bg-white">
                  <Play className="w-5 h-5 mr-2" />
                  Ouvir
                </Button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-2">Coração em Chamas</h3>
              <p className="text-gray-600 mb-4">Uma balada apaixonada sobre o amor verdadeiro</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Pop Romântico • 2024</span>
              </div>
            </div>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white">
            <div className="relative overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Music className="w-16 h-16 text-amber-600 opacity-80" />
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button size="lg" className="rounded-full bg-white/90 text-gray-800 hover:bg-white">
                  <Play className="w-5 h-5 mr-2" />
                  Ouvir
                </Button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-2">Nostalgia</h3>
              <p className="text-gray-600 mb-4">Memórias que se transformam em melodia</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>MPB Contemporânea • 2024</span>
              </div>
            </div>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white md:col-span-2 lg:col-span-1">
            <div className="relative overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-200 to-rose-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Music className="w-16 h-16 text-purple-600 opacity-80" />
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button size="lg" className="rounded-full bg-white/90 text-gray-800 hover:bg-white">
                  <Play className="w-5 h-5 mr-2" />
                  Ouvir
                </Button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-2">Eternidade</h3>
              <p className="text-gray-600 mb-4">Um hino ao amor que transcende o tempo</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Balada • 2024</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Ouvir Todas as Músicas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
