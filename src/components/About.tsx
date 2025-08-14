import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Clock, ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "5000+", label: "Clientes Satisfeitos" },
    { icon: Award, number: "15+", label: "Anos de Experiência" },
    { icon: CheckCircle, number: "100%", label: "Garantia de Qualidade" },
    { icon: Clock, number: "24/7", label: "Suporte Disponível" },
  ];

  const benefits = [
    "Técnicos certificados e experientes",
    "Equipamentos de última geração",
    "Peças originais e garantidas",
    "Atendimento personalizado",
    "Preços competitivos e transparentes",
    "Manutenção preventiva incluída"
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre Nossa <span className="text-primary">Empresa</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos especialistas em climatização com mais de 15 anos de experiência no mercado. 
              Nossa missão é proporcionar conforto térmico ideal para residências e empresas, 
              utilizando as melhores tecnologias e práticas sustentáveis.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit} 
                  className="flex items-center space-x-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-cool">
                Conheça Nossa Equipe
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Nossos Certificados
              </Button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="animate-scale-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label} 
                  className="text-center p-6 hover:shadow-cool transition-all duration-300 hover:-translate-y-2 bg-gradient-fresh border-primary/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-cool rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Section */}
            <div className="mt-8 p-8 bg-white rounded-2xl shadow-elegant">
              <h3 className="text-2xl font-bold text-center text-foreground mb-4">
                Confiabilidade é Nossa Principal Característica
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                Trabalhamos com as principais marcas do mercado e oferecemos 
                garantia total em todos os nossos serviços.
              </p>
              
              {/* Brand Logos Placeholder */}
              <div className="flex justify-around items-center gap-6 flex-wrap opacity-60">
                <div className="w-20 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold">CARRIER</span>
                </div>
                <div className="w-20 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold">DAIKIN</span>
                </div>
                <div className="w-20 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold">LG</span>
                </div>
                <div className="w-20 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs font-semibold">SAMSUNG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;