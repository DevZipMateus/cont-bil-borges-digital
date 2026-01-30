import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const stats = [
  { icon: Award, value: "25+", label: "Anos de experiência" },
  { icon: Users, value: "500+", label: "Clientes atendidos" },
  { icon: TrendingUp, value: "100%", label: "Compromisso" },
];

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/85" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="text-left">
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

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-4 hover:shadow-elegant transition-shadow duration-300"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2" />
                  <div className="text-2xl font-display font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Video - Right Side */}
          <div className="relative animate-fade-in hidden lg:block" style={{ animationDelay: "0.4s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-border/30">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="/Cliente_1_1_1511494030980270.mp4" type="video/mp4" />
              </video>
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
            {/* Decorative border glow */}
            <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
