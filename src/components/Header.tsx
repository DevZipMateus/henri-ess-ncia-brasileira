import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, CreditCard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import headerLogos from "@/assets/header-logos-combined.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const navItems = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Produtos", href: "/#produtos" },
  { label: "Contato", href: "/#contato" },
  { label: "Universo Olfativo Árabe", href: "/universo-olfativo" },
  { label: "Vitrine", href: "/vitrine" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // If we're on the home page and clicking an anchor link
    if (isHomePage && href.startsWith("/#")) {
      const elementId = href.replace("/#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getHref = (href: string) => {
    // If on home page, convert /#section to #section for smooth scroll
    if (isHomePage && href.startsWith("/#")) {
      return href.replace("/", "");
    }
    return href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-elegant" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logos */}
          <Link to="/" className="flex items-center">
            <img
              src={headerLogos}
              alt="Henri Perfumaria & Henri.Co - Logos"
              className="h-20 w-auto drop-shadow-sm"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) =>
              item.href.startsWith("/#") && isHomePage ? (
                <a
                  key={item.href}
                  href={getHref(item.href)}
                  onClick={() => handleNavClick(item.href)}
                  className="font-body text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all after:duration-300 text-foreground/90 hover:text-foreground after:bg-foreground"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="font-body text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all after:duration-300 text-foreground/90 hover:text-foreground after:bg-foreground"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Payment Methods Button Desktop */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="hidden lg:inline-flex items-center gap-2 px-4 xl:px-6 py-2 xl:py-2.5 border border-foreground/20 text-foreground font-body text-xs xl:text-sm font-medium rounded-sm hover:bg-foreground/5 transition-all duration-300">
                <CreditCard size={16} />
                Formas de Pagamento
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-display">Formas de Pagamento</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pensando em oferecer uma experiência completa, do aroma à finalização da sua compra, disponibilizamos condições especiais para você escolher com tranquilidade:
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">À Vista</h4>
                    <p className="text-sm text-muted-foreground">
                      • 5% de desconto para pagamentos em Pix ou dinheiro.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Cartão de Crédito</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Até 2x sem juros em compras de até R$ 500,00.</li>
                      <li>• Até 3x sem juros em compras acima de R$ 500,00.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* CTA Button Desktop */}
          <a
            href="https://wa.me/5517996596204"
            className="hidden lg:inline-flex items-center gap-2 px-4 xl:px-6 py-2 xl:py-2.5 bg-primary text-primary-foreground font-body text-xs xl:text-sm font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-elegant"
          >
            Fale conosco
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden pb-6 bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col gap-3 sm:gap-4">
              {navItems.map((item) =>
                item.href.startsWith("/#") && isHomePage ? (
                  <a
                    key={item.href}
                    href={getHref(item.href)}
                    onClick={() => handleNavClick(item.href)}
                    className="font-body text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-body text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50"
                  >
                    {item.label}
                  </Link>
                )
              )}
              
              {/* Payment Methods Mobile */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground/20 text-foreground font-body text-sm font-medium rounded-sm">
                    <CreditCard size={16} />
                    Formas de Pagamento
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-display">Formas de Pagamento</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Pensando em oferecer uma experiência completa, do aroma à finalização da sua compra, disponibilizamos condições especiais para você escolher com tranquilidade:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">À Vista</h4>
                        <p className="text-sm text-muted-foreground">
                          • 5% de desconto para pagamentos em Pix ou dinheiro.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Cartão de Crédito</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Até 2x sem juros em compras de até R$ 500,00.</li>
                          <li>• Até 3x sem juros em compras acima de R$ 500,00.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <a
                href="https://wa.me/5517996596204"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm"
              >
                Fale conosco
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
