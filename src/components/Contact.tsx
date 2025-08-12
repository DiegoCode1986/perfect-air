import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 9999-9999",
      description: "Atendimento 24 horas"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contato@acfresh.com.br",
      description: "Resposta em até 2 horas"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "São Paulo, SP",
      description: "Atendemos toda a região metropolitana"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg à Sex: 8h às 18h",
      description: "Emergências 24h"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-fresh">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você! Entre em contato e receba um orçamento 
            personalizado para suas necessidades de climatização.
          </p>
        </div>

        {/* Contact Information - Centered */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-scale-in">
            {contactInfo.map((item, index) => (
              <Card 
                key={item.title} 
                className="group hover:shadow-cool transition-all duration-300 hover:-translate-y-1 border-primary/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-cool rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-cool transition-all mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    {item.info}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Contact - Centered */}
          <div className="max-w-lg mx-auto">
            <Card className="bg-primary text-white border-none shadow-elegant">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Emergência 24 Horas</h3>
                <p className="mb-6 text-primary-light">
                  Problemas com ar-condicionado no meio da madrugada? 
                  Temos plantão 24 horas para emergências.
                </p>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora: (11) 9999-9999
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;