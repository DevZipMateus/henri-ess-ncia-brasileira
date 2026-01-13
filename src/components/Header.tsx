import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-dark shadow-elegant"
          : "bg-black/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Henri Perfumaria - Logo"
              className="h-16 w-auto drop-shadow-sm"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all after:duration-300 text-white/90 hover:text-white after:bg-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <a
            href="https://wa.me/5517996596204"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-elegant"
          >
            Fale conosco
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-6 bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-base text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5517996596204"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm mt-2"
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
