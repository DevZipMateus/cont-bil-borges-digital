import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Hagios Borges Contabilidade" className="h-16 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#inicio" className="text-accent-foreground/80 hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-accent-foreground/80 hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-accent-foreground/80 hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#contato" className="text-accent-foreground/80 hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Social */}
          <div className="flex justify-center md:justify-end">
            <a
              href="https://instagram.com/hagiosborges"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:gold-gradient transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-accent-foreground/80 group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 mt-8 pt-8 text-center">
          <p className="text-accent-foreground/60 text-sm">
            © {currentYear} Contábil Borges. Todos os direitos reservados.
          </p>
          <p className="text-accent-foreground/40 text-xs mt-2">
            CNPJ/CPF: 690.341.413-49
          </p>
        </div>
      </div>
    </footer>
  );
};
