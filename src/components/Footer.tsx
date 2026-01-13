import { Instagram, Phone, Star } from "lucide-react";
import footerBg from "@/assets/footer-bg.jpg";

const Footer = () => {
  return (
    <footer
      className="text-white/90 py-10 sm:py-16 relative"
      style={{
        backgroundColor: '#000000',
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'bottom center',
        backgroundSize: 'auto 80px'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo & Description */}
          <div className="text-center sm:text-left">
            <img src="/logo.png" alt="Henri Perfumaria" className="h-16 sm:h-20 w-auto mb-3 sm:mb-4 brightness-0 invert opacity-90 mx-auto sm:mx-0" />
            <p className="font-body text-xs sm:text-sm text-white/60 leading-relaxed">
              Onde a autenticidade encontra o luxo. Perfumes importados e árabes 100% originais.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-display text-base sm:text-lg text-white mb-3 sm:mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="font-body text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="font-body text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#produtos" className="font-body text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#contato" className="font-body text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="font-display text-base sm:text-lg text-white mb-3 sm:mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-xs sm:text-sm text-white/60 text-left">
                  Atendimento personalizado para mais exclusividade
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="https://wa.me/5517996596204" className="font-body text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                  (17) 99659-6204
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="https://www.instagram.com/perfumaria.henri" target="_blank" rel="noopener noreferrer" className="font-body text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
                  @perfumaria.henri
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;