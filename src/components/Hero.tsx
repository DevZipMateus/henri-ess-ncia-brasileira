import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
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
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 overflow-hidden"
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
      
      {/* Decorative circles - hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-1/4 left-4 md:left-10 w-32 md:w-64 h-32 md:h-64 bg-gold/5 rounded-full blur-3xl float" />
      <div className="hidden sm:block absolute bottom-1/4 right-4 md:right-10 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl float" style={{ animationDelay: '3s' }} />

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-2 sm:px-4 relative z-10"
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo animada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 sm:mb-10 float"
          >
            <img
              src="/logo.png"
              alt="Henri Perfumaria"
              className="w-40 sm:w-64 md:w-80 lg:w-96 h-auto drop-shadow-lg brightness-110"
            />
          </motion.div>

          {/* H1 - Nome da empresa (sr-only para SEO) */}
          <h1 className="sr-only">Henri Perfumaria</h1>

          {/* H2 - Slogan */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-base sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 italic mb-3 sm:mb-4 px-2"
          >
            Onde a autenticidade encontra o luxo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-sm sm:text-lg md:text-xl text-gold italic mb-8 sm:mb-12 flex items-center gap-2 px-2"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span>E a elegância se transforma em essência.</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          </motion.p>

          {/* Linha decorativa animada */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-24 sm:w-32 h-1 bg-divider mb-8 sm:mb-12 rounded-full"
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0"
          >
            <Link
              to="/vitrine"
              className="group px-6 sm:px-8 py-3 gradient-gold text-black font-body text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 glow-gold hover:scale-105 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform" />
              Ver nossa vitrine
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-rotate-12 transition-transform" />
            </Link>
            <a
              href="https://wa.me/5517996596204"
              className="px-6 sm:px-8 py-3 bg-charcoal/80 backdrop-blur-sm border border-gold/60 text-gold font-body text-xs sm:text-sm font-medium tracking-wider uppercase hover:bg-charcoal hover:border-gold transition-all duration-300 hover:scale-105 text-center"
            >
              Fale conosco
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
