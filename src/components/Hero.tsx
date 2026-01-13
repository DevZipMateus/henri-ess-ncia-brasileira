import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#E67E22]"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-repeat-x bg-bottom"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'auto 100%',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo animada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10"
          >
            <img
              src="/logo.png"
              alt="Henri Perfumaria"
              className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-lg"
            />
          </motion.div>

          {/* H1 - Nome da empresa */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-wide mb-6 drop-shadow-lg"
          >
            Henri Perfumaria
          </motion.h1>

          {/* H2 - Slogan */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-xl md:text-2xl lg:text-3xl font-light text-white/95 italic mb-4"
          >
            Onde a autenticidade encontra o luxo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-lg md:text-xl text-white/80 italic mb-12"
          >
            E a elegância se transforma em essência.
          </motion.p>

          {/* Linha decorativa */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mb-12"
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#produtos"
              className="px-8 py-3 bg-white text-[#E67E22] font-body text-sm font-medium tracking-wider uppercase hover:bg-white/90 transition-all duration-300 shadow-elegant"
            >
              Conheça nossos produtos
            </a>
            <a
              href="https://wa.me/5517996596204"
              className="px-8 py-3 border border-white/60 text-white font-body text-sm font-medium tracking-wider uppercase hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Fale conosco
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
