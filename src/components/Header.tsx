import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import headerLogos from "@/assets/header-logos-combined.png";
const navItems = [{
  label: "Início",
  href: "#inicio"
}, {
  label: "Sobre",
  href: "#sobre"
}, {
  label: "Produtos",
  href: "#produtos"
}, {
  label: "Contato",
  href: "#contato"
}, {
  label: "Vitrine",
  href: "/vitrine"
}];
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
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background shadow-elegant" : "bg-background"}`}>
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logos */}
          <a href="#inicio" className="flex items-center">
            <img src={headerLogos} alt="Henri Perfumaria & Henri.Co - Logos" className="h-20 w-auto drop-shadow-sm" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map(item => <a key={item.href} href={item.href} className="font-body text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all after:duration-300 text-foreground/90 hover:text-foreground after:bg-foreground">
                {item.label}
              </a>)}
          </nav>

          {/* CTA Button Desktop */}
          <a href="https://wa.me/5517996596204" className="hidden lg:inline-flex items-center gap-2 px-4 xl:px-6 py-2 xl:py-2.5 bg-primary text-primary-foreground font-body text-xs xl:text-sm font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-elegant">
            Fale conosco
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <motion.nav initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="lg:hidden pb-6 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-3 sm:gap-4">
              {navItems.map(item => <a key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="font-body text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50">
                  {item.label}
                </a>)}
              <a href="https://wa.me/5517996596204" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm mt-2">
                Fale conosco
              </a>
            </div>
          </motion.nav>}
      </div>
    </header>;
};
export default Header;