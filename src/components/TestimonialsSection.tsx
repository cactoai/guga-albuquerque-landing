
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marina Silva",
      location: "São Paulo, SP",
      text: "A voz do Guga é simplesmente mágica! Cada música dele toca minha alma de uma forma única. É impossível não se emocionar.",
      stars: 5
    },
    {
      name: "Carlos Eduardo",
      location: "Rio de Janeiro, RJ",
      text: "Descobri o Guga através de um amigo e me apaixonei imediatamente. Suas músicas são trilha sonora da minha vida!",
      stars: 5
    },
    {
      name: "Ana Beatriz",
      location: "Recife, PE",
      text: "Sou fã há anos! O Guga tem o dom de transformar sentimentos em música. Cada show é uma experiência inesquecível.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O Que Dizem os Fãs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Histórias reais de pessoas que foram tocadas pela música de Guga Albuquerque
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-50 to-rose-50 relative overflow-hidden group">
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-rose-400" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Quer compartilhar sua experiência também?
          </p>
          <div className="flex items-center justify-center gap-2 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
            <span className="ml-2 text-gray-700 font-medium">Avaliação média dos fãs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
