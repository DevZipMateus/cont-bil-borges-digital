import { Building2, Church, Rocket, User, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Simples Nacional",
    subtitle: "Pequenas e médias empresas",
    description:
      "O Simples mudou com a Reforma, e nós somos especialistas em gerir essa transição. Ajudamos sua empresa a aproveitar os benefícios fiscais e a manter a conformidade, evitando bitributação e multas desnecessárias.",
  },
  {
    icon: Church,
    title: "Igrejas e instituições religiosas",
    subtitle: "Imunidade tributária",
    description:
      "A contabilidade para igrejas requer um zelo ético e técnico diferenciado. Atuamos na manutenção da imunidade tributária, prestação de contas estatutárias e regularização perante a Receita Federal.",
  },
  {
    icon: Rocket,
    title: "MEI",
    subtitle: "Microempreendedor Individual",
    description:
      "Sair da informalidade é o primeiro passo para o sucesso. Oferecemos suporte completo para o MEI: desde a abertura, declaração anual (DASN-SIMEI), até o planejamento para o momento de desenquadrar e crescer.",
  },
  {
    icon: User,
    title: "Autônomos e profissionais liberais",
    subtitle: "Pessoa física e jurídica",
    description:
      "Para quem trabalha por conta própria, a organização entre pessoa física e jurídica é vital. Auxiliamos médicos, dentistas, representantes comerciais a pagarem o menor imposto legal possível.",
  },
  {
    icon: BarChart3,
    title: "Consultoria e assessoria contábil",
    subtitle: "Análise estratégica",
    description:
      "Não somos apenas 'entregadores de guias'. Nossa consultoria analisa a saúde do seu negócio, identificando gargalos financeiros e oportunidades de economia tributária neste novo cenário de 2026.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding gold-gradient-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Nossos serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mercado de atuação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções contábeis especializadas para diferentes perfis de negócios,
            sempre com foco na economia tributária e conformidade legal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border/50 rounded-2xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5 shadow-gold group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {service.title}
              </h3>
              <span className="text-sm text-primary font-medium mb-3 block">
                {service.subtitle}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-accent text-accent-foreground rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold mb-3">
                Precisa de um serviço personalizado?
              </h3>
              <p className="text-accent-foreground/80 text-sm leading-relaxed mb-6">
                Entre em contato conosco e descubra como podemos ajudar o seu negócio a crescer
                com segurança e planejamento.
              </p>
            </div>
            <Button
              asChild
              className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 w-full"
            >
              <a href="https://wa.me/5598982300929" target="_blank" rel="noopener noreferrer">
                Falar com especialista
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
