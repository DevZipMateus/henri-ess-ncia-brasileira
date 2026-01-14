import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import henriCoLogo from "@/assets/henri-co-logo.png";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Produtos", href: "/#produtos" },
  { label: "Contato", href: "/#contato" },
  { label: "Vitrine", href: "/vitrine" },
];

const getHeaderHeight = () => window.innerWidth < 640 ? 64 : 80;

const Vitrine = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(getHeaderHeight());
  const [iframeHeight, setIframeHeight] = useState(
    window.innerHeight - getHeaderHeight()
  );

  useEffect(() => {
    const handleResize = () => {
      const newHeaderHeight = getHeaderHeight();
      setHeaderHeight(newHeaderHeight);
      setIframeHeight(window.innerHeight - newHeaderHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling on page
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };
  }, []);

  return (
    <PageTransition>
      <div className="fixed inset-0 w-full h-full overflow-hidden" style={{ backgroundColor: '#fcd1c6' }}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-elegant h-16 sm:h-20">
          <div className="container mx-auto px-3 sm:px-4 h-full">
            <div className="flex items-center justify-between h-full">
              {/* Logos */}
              <Link to="/" className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <img
                  src="/logo-dark.png"
                  alt="Henri Perfumaria - Logo"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto drop-shadow-sm"
                />
                <div className="w-px h-5 sm:h-6 md:h-8 bg-foreground/20" />
                <img
                  src={henriCoLogo}
                  alt="Henri.Co - Logo"
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto drop-shadow-sm"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                {navItems.map((item) => (
                  item.href.startsWith("/#") || item.href === "/" ? (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="font-body text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all after:duration-300 text-foreground/90 hover:text-foreground after:bg-foreground"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="font-body text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all after:duration-300 text-foreground/90 hover:text-foreground after:bg-foreground"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </nav>

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
                className="lg:hidden pb-6 bg-background/95 backdrop-blur-md absolute top-full left-0 right-0 px-4"
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-body text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50"
                    >
                      {item.label}
                    </Link>
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

        {/* Iframe - Remaining space */}
        <main 
          className="w-full overflow-hidden"
          style={{ 
            marginTop: `${headerHeight}px`,
            height: `${iframeHeight}px`
          }}
        >
          <iframe
            src="https://perfumariahenri.egestor.com.br/vitrine/"
            title="Demonstração de Vitrine"
            className="w-full h-full"
            style={{ border: "none" }}
            scrolling="no"
          />
        </main>
      </div>
    </PageTransition>
  );
};

export default Vitrine;
