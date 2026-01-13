import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import footerBg from "@/assets/footer-bg.png";

const Footer = () => {
  return (
    <footer 
      className="text-white/90 py-16 relative"
      style={{
        backgroundColor: '#000000',
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'bottom center',
        backgroundSize: 'auto 80px'
      }}
    >
      {/* CSS filter to make the background image black */}
      <style>{`
        footer::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background-image: url(${footerBg});
          background-repeat: repeat-x;
          background-position: bottom center;
          background-size: auto 80px;
          filter: brightness(0);
          pointer-events: none;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <img
              src="/logo.png"
              alt="Henri Perfumaria"
              className="h-20 w-auto mb-4 brightness-0 invert opacity-90"
            />
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Onde a autenticidade encontra o luxo. Perfumes importados e árabes 100% originais em São José do Rio Preto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#produtos" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#contato" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/60">
                  R. Ida Verdi Amorim, 200 - Vila Redentora, São José do Rio Preto - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="https://wa.me/5517996596204" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  (17) 99659-6204
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:henri.imports11@gmail.com" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  henri.imports11@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="https://www.instagram.com/perfumaria.henri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  @perfumaria.henri
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Henri Perfumaria. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-white/30 mt-2">
            CNPJ: 64.257.026/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
