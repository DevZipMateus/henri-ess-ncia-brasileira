import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Heart, Shield, Star } from "lucide-react";
import mesquitaSunset from "@/assets/mesquita-sunset.jpg";

const values = [
  {
    icon: Shield,
    title: "Autenticidade absoluta",
    description: "Compromisso inegociável com a originalidade e procedência de cada fragrância.",
  },
  {
    icon: Star,
    title: "Excelência em experiência",
    description: "O cliente no centro de tudo, com atendimento exclusivo e atenção aos detalhes.",
  },
  {
    icon: Gem,
    title: "Curadoria premium",
    description: "Seleção criteriosa das fragrâncias mais nobres e desejadas do mercado internacional.",
  },
  {
    icon: Heart,
    title: "Paixão pela alta perfumaria",
    description: "Conhecimento, sensibilidade e dedicação em cada escolha.",
  },
];

const About = () => {
  const ref = useRef(null);
  const parallaxRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="sobre" className="relative" ref={ref}>
      {/* Hero Image Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden" ref={parallaxRef}>
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-125"
          style={{ 
            backgroundImage: `url(${mesquitaSunset})`,
            y 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-background" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 drop-shadow-lg">
              Nossa história
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-24 bg-section-gradient">
        <div className="container mx-auto px-4">
          {/* Story Content */}
          <div className="max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg mx-auto text-center"
            >
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                Nossa história nasce no encontro entre perfume, emoção e identidade. Movidos pela paixão pela alta perfumaria e pelo fascínio das essências orientais, selecionamos fragrâncias intensas e envolventes, que carregam tradição, matérias-primas nobres e histórias milenares.
              </p>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                Acreditamos que o perfume é uma extensão da personalidade, uma assinatura invisível. Por isso, nossa curadoria reúne perfumes importados e árabes 100% originais, capazes de traduzir elegância, autenticidade e sofisticação em cada nota.
              </p>
              <p className="font-body text-primary text-lg leading-relaxed italic">
                Mais do que vender perfumes, criamos experiências. Unimos tradição oriental e luxo contemporâneo para oferecer um atendimento personalizado, seguro e premium.
              </p>
            </motion.div>
          </div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card border-elegant rounded-sm p-8 md:p-12 mb-16 max-w-4xl mx-auto shadow-card"
          >
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 text-center">
              Nossa missão
            </h3>
            <p className="font-body text-muted-foreground text-center leading-relaxed">
              Proporcionar uma experiência olfativa exclusiva e memorável, por meio de perfumes importados e árabes 100% originais, cuidadosamente selecionados para atender aos mais altos padrões de qualidade, autenticidade e sofisticação.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
              Nossos valores
            </h3>
            <div className="w-16 h-px bg-primary mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-card border-elegant rounded-sm p-6 text-center hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-xl text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
