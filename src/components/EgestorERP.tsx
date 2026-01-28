import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const EgestorERP = () => {
  const egestorLink = "https://www.egestor.com.br/afl/9293";

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-elegant overflow-hidden text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Parceiro recomendado
          </span>
          
          <a 
            href={egestorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
              Sistema de gestão empresarial
            </h2>
          </a>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Dobre seus lucros otimizando sua gestão
          </p>

          <Button
            asChild
            size="lg"
            className="gold-gradient text-primary-foreground hover:opacity-90 transition-opacity shadow-gold text-base px-8"
          >
            <a 
              href={egestorLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Teste grátis
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EgestorERP;
