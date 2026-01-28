import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Award, value: "25+", label: "Anos de experiência" },
  { icon: Users, value: "500+", label: "Clientes atendidos" },
  { icon: TrendingUp, value: "100%", label: "Compromisso" },
];

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-24 pb-16 gold-gradient-light relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Hagios Borges Contabilidade
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Contábil Borges
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-slide-up font-sans font-light" style={{ animationDelay: "0.1s" }}>
            Experiência de décadas, preparada para a contabilidade de 2026. 
            Transformamos números em estratégias para o crescimento do seu negócio.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button
              asChild
              size="lg"
              className="gold-gradient text-primary-foreground hover:opacity-90 transition-opacity shadow-gold text-base px-8"
            >
              <a href="https://wa.me/5598982300929" target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all text-base px-8"
            >
              <a href="#servicos">
                Conheça nossos serviços
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-elegant transition-shadow duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
