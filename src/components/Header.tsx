import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const navLinks = [{
  href: "#inicio",
  label: "Início"
}, {
  href: "#sobre",
  label: "Sobre"
}, {
  href: "#servicos",
  label: "Serviços"
}, {
  href: "#valores",
  label: "Valores"
}, {
  href: "#contato",
  label: "Contato"
}];
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-elegant py-3" : "bg-background/80 backdrop-blur-sm py-5"}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Hagios Borges Contabilidade" className="h-20 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium">
              {link.label}
            </a>)}
          <Button asChild className="gold-gradient text-primary-foreground hover:opacity-90 transition-opacity">
            <a href="https://wa.me/5598982300929" target="_blank" rel="noopener noreferrer">
              Fale conosco
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <nav className="md:hidden bg-card/98 backdrop-blur-md border-t border-border mt-3 py-4">
          <div className="container-custom flex flex-col gap-4">
            {navLinks.map(link => <a key={link.href} href={link.href} onClick={handleNavClick} className="text-foreground hover:text-primary transition-colors duration-200 py-2 text-base font-medium">
                {link.label}
              </a>)}
            <Button asChild className="gold-gradient text-primary-foreground hover:opacity-90 transition-opacity w-full mt-2">
              <a href="https://wa.me/5598982300929" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </div>
        </nav>}
    </header>;
};