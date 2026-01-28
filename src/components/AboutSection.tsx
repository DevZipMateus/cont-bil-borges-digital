import { Quote } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

export const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative border border-border/50 shadow-elegant">
              <img 
                src={aboutImage} 
                alt="Contador profissional analisando documentos financeiros" 
                className="w-full h-full object-cover"
              />
              {/* Overlay with quote */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-foreground font-display text-lg italic">
                    "O sucesso do nosso cliente é o nosso sucesso"
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary/20 rounded-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Nossa história
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Da oficina ao próprio escritório
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Minha trajetória no mundo do trabalho começou cedo, aos 14 anos, em uma oficina. 
                Foi ali que aprendi o valor da disciplina e do esforço. No entanto, o destino me 
                reservava um caminho entre números e estratégias: fui trabalhar com meu irmão em 
                seu escritório de contabilidade em São Luís, Maranhão.
              </p>
              <p>
                Foram 25 anos de parceria e aprendizado contínuo ao lado dele, onde absorvi cada 
                detalhe da rotina contábil e as necessidades reais das empresas maranhenses. Após 
                esse longo período, expandi meus horizontes atuando em diversas empresas privadas, 
                o que me deu uma visão interna do mundo corporativo e dos desafios que os gestores 
                enfrentam diariamente.
              </p>
              <p>
                Hoje, trago toda essa bagagem para o meu próprio escritório. Unindo a experiência 
                prática de décadas com a visão estratégica de quem conhece o mercado de perto, 
                ofereço uma contabilidade que vai além dos impostos: ofereço parceria, segurança 
                e o conhecimento de quem sabe o que é construir um negócio do zero.
              </p>
            </div>

            <div className="mt-8 p-6 bg-secondary/50 rounded-2xl border border-border/50">
              <Quote className="w-8 h-8 text-primary/40 mb-3" />
              <p className="text-foreground font-display text-lg italic">
                "Experiência de décadas, preparada para a contabilidade de 2026."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
