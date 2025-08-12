import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Wrench, Headphones, Leaf } from "lucide-react";
import installationImage from "@/assets/service-installation.jpg";
import maintenanceImage from "@/assets/service-maintenance.jpg";
import supportImage from "@/assets/service-support.jpg";
import efficiencyImage from "@/assets/service-efficiency.jpg";

const Services = () => {
  const services = [
    {
      icon: Settings,
      image: installationImage,
      title: "Instalação",
      description: "Instalação profissional de sistemas de ar-condicionado para todos os tipos de ambiente",
      features: [
        "Avaliação técnica completa",
        "Instalação certificada",
        "Teste de funcionamento",
        "Garantia de 2 anos"
      ]
    },
    {
      icon: Wrench,
      image: maintenanceImage,
      title: "Manutenção",
      description: "Serviços preventivos e corretivos para manter seu equipamento sempre funcionando",
      features: [
        "Limpeza completa",
        "Verificação de gás",
        "Troca de filtros",
        "Relatório técnico"
      ]
    },
    {
      icon: Headphones,
      image: supportImage,
      title: "Suporte 24/7",
      description: "Atendimento especializado sempre que você precisar, em emergências ou dúvidas",
      features: [
        "Atendimento 24 horas",
        "Técnicos certificados",
        "Peças originais",
        "Diagnóstico gratuito"
      ]
    },
    {
      icon: Leaf,
      image: efficiencyImage,
      title: "Eficiência Energética",
      description: "Soluções sustentáveis que reduzem o consumo de energia e preservam o meio ambiente",
      features: [
        "Equipamentos A+++",
        "Economia até 60%",
        "Tecnologia inverter",
        "Consultoria energética"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-fresh">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em climatização com a mais alta qualidade 
            e tecnologia avançada para seu conforto total.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-cool transition-all duration-500 hover:-translate-y-2 bg-background/50 backdrop-blur-sm border-primary/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4 mx-auto">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-20 h-20 mx-auto rounded-2xl shadow-soft group-hover:shadow-cool transition-all duration-300"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-cool rounded-full flex items-center justify-center shadow-soft">
                    <service.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Precisa de um Orçamento Personalizado?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Entre em contato conosco e receba uma avaliação gratuita para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-cool">
                Solicitar Orçamento Grátis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;