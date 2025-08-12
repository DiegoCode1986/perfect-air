import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <Card className="shadow-elegant border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Solicite Seu Orçamento
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Preencha o formulário e entraremos em contato em até 2 horas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome Completo
                    </label>
                    <Input placeholder="Seu nome completo" className="border-primary/20" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input placeholder="(11) 99999-9999" className="border-primary/20" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="seu@email.com" className="border-primary/20" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tipo de Serviço
                  </label>
                  <select className="w-full p-3 border border-primary/20 rounded-md bg-background text-foreground">
                    <option>Selecione o serviço</option>
                    <option>Instalação de Ar-Condicionado</option>
                    <option>Manutenção Preventiva</option>
                    <option>Reparo/Conserto</option>
                    <option>Consultoria Energética</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea 
                    placeholder="Descreva suas necessidades, tipo de ambiente, quantidade de cômodos, etc."
                    rows={4}
                    className="border-primary/20"
                  />
                </div>

                <Button size="lg" className="w-full shadow-cool">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Solicitação
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-scale-in">
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <Card 
                  key={item.title} 
                  className="group hover:shadow-cool transition-all duration-300 hover:-translate-y-1 border-primary/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-cool rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-cool transition-all">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {item.info}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
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