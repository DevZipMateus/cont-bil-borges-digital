import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(98) 98230-0929",
    href: "tel:+5598982300929",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contabilborges@yahoo.com.br",
    href: "mailto:contabilborges@yahoo.com.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Alameda Paço Lumiar, 29",
    href: null,
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg a Sex: 8h-12h / 14h-17h | Sáb: 8h-12h",
    href: null,
  },
];

export const ContactSection = () => {
  return (
    <section id="contato" className="section-padding gold-gradient-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Entre em contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fale conosco
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar você e sua empresa a alcançarem o próximo nível.
            Entre em contato e agende uma consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card border border-border/50 rounded-xl p-5 hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 shadow-gold">
                  <info.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block mb-1">
                    {info.label}
                  </span>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-foreground font-medium">{info.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-muted-foreground text-sm">Siga-nos:</span>
              <a
                href="https://instagram.com/hagiosborges"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary border border-border/50 flex items-center justify-center hover:gold-gradient hover:shadow-gold hover:border-transparent transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-accent text-accent-foreground rounded-2xl p-8 lg:p-10 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Pronto para transformar sua contabilidade?
            </h3>
            <p className="text-accent-foreground/80 mb-8 leading-relaxed">
              Agende uma consulta gratuita e descubra como podemos ajudar sua empresa
              a crescer com segurança, economia e planejamento estratégico.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto shadow-gold"
            >
              <a href="https://wa.me/5598982300929" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
