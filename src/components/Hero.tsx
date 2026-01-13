import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          y 
        }}
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl float" style={{ animationDelay: '3s' }} />

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo animada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-10 float"
          >
            <img
              src="/logo.png"
              alt="Henri Perfumaria"
              className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-lg brightness-110"
            />
          </motion.div>

          {/* H1 - Nome da empresa */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-wide mb-6 drop-shadow-lg text-glow"
          >
            Henri Perfumaria
          </motion.h1>

          {/* H2 - Slogan */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-xl md:text-2xl lg:text-3xl font-light text-white/90 italic mb-4"
          >
            Onde a autenticidade encontra o luxo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-lg md:text-xl text-gold italic mb-12 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            E a elegância se transforma em essência.
            <Sparkles className="w-5 h-5" />
          </motion.p>

          {/* Linha decorativa animada */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-32 h-0.5 gradient-gold mb-12 glow-gold"
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/vitrine"
              className="group px-8 py-3 gradient-gold text-black font-body text-sm font-semibold tracking-wider uppercase transition-all duration-300 glow-gold hover:scale-105 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Ver nossa vitrine
              <Sparkles className="w-4 h-4 group-hover:-rotate-12 transition-transform" />
            </a>
            <a
              href="#produtos"
              className="px-8 py-3 border border-white/40 text-white font-body text-sm font-medium tracking-wider uppercase hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              Conheça nossos produtos
            </a>
            <a
              href="https://wa.me/5517996596204"
              className="px-8 py-3 border border-gold/60 text-gold font-body text-sm font-medium tracking-wider uppercase hover:bg-gold/10 hover:border-gold transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              Fale conosco
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2"
            >
              <motion.div
                animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-gold rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
