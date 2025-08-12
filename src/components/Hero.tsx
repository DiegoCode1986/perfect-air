import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-comfort.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-background"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Soluções <span className="text-primary-light">Refrescantes</span><br />
              para Casa & Escritório
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-xl">
              Instalação, manutenção e reparo de ar-condicionado com qualidade profissional. 
              Seu conforto é nossa prioridade.
            </p>
            
            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Instalação profissional",
                "Manutenção preventiva",
                "Técnicos certificados",
                "Garantia de serviço"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-light flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-elegant group"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                <Phone className="w-5 h-5 mr-2" />
                (11) 9999-9999
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Mulher relaxando confortavelmente com ar-condicionado"
                className="rounded-2xl shadow-elegant animate-float w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-elegant animate-fade-in-up">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24°C</div>
                  <div className="text-sm text-muted-foreground">Temperatura Ideal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;