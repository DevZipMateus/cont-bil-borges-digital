import { Eye, Target, Heart, Shield, Lightbulb, Clock, Award } from "lucide-react";
import valuesImage from "@/assets/values-image.jpg";

const values = [
  {
    icon: Shield,
    title: "Integridade",
    description: "Atuamos com ética absoluta e transparência em todas as relações.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Buscamos a precisão máxima e a melhoria contínua em nossos processos.",
  },
  {
    icon: Heart,
    title: "Parceria",
    description: "O sucesso do nosso cliente é o nosso sucesso; trabalhamos lado a lado.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Utilizamos a tecnologia para gerar agilidade e insights inteligentes.",
  },
  {
    icon: Clock,
    title: "Responsabilidade",
    description: "Rigor com prazos e compromisso total com as normas vigentes.",
  },
];

export const ValuesSection = () => {
  return (
    <section id="valores" className="section-padding bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${valuesImage})` }}
      />
      <div className="container-custom relative z-10">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card border border-border/50 rounded-2xl p-8 relative overflow-hidden group hover:shadow-elegant transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 gold-gradient opacity-10 rounded-bl-full" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-5 shadow-gold">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Nossa missão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Transformar a complexidade da legislação e dos números em soluções claras e seguras, 
                proporcionando tranquilidade aos empreendedores e impulsionando a saúde financeira 
                das empresas através de uma contabilidade consultiva e humana.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 relative overflow-hidden group hover:shadow-elegant transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 gold-gradient opacity-10 rounded-bl-full" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-5 shadow-gold">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Nossa visão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a principal referência em inteligência contábil e consultiva, reconhecida pela 
                excelência técnica e por ser o parceiro indispensável na estratégia de crescimento 
                dos nossos clientes.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            O que nos guia
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Nossos valores
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary border border-border/50 flex items-center justify-center mx-auto mb-4 group-hover:gold-gradient group-hover:shadow-gold transition-all duration-300">
                <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
