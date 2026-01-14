import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ShoppingBag, Sparkles } from "lucide-react";
import perfumesArabes from "@/assets/perfumes-arabes.jpg";
import perfumesOrientais from "@/assets/perfumes-orientais.png";
import linhaHome from "@/assets/linha-home.jpg";
import henriCo from "@/assets/henri-co.jpg";

const products = [
  {
    title: "Perfumes árabes",
    description: "Fragrâncias intensas e envolventes do Oriente Médio, com notas amadeiradas, almiscaradas e especiarias nobres.",
    image: perfumesArabes,
  },
  {
    title: "Perfumes importados",
    description: "Seleção premium das melhores casas de perfumaria internacional, 100% originais com garantia de procedência.",
    image: perfumesOrientais,
  },
  {
    title: "Linha home",
    description: "Aromatizadores e difusores para transformar seu ambiente em uma experiência sensorial única.",
    image: linhaHome,
  },
  {
    title: "Henri.Co",
    description: "Nossa marca própria de acessórios, linha home e cosméticos exclusivos desenvolvidos com excelência.",
    image: henriCo,
  },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="produtos" className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements - hidden on mobile */}
      <div className="hidden sm:block absolute top-20 left-4 md:left-10 w-32 md:w-64 h-32 md:h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-20 right-4 md:right-10 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-gold" />
            <span className="font-body text-xs sm:text-sm tracking-widest uppercase text-gold">Coleção Exclusiva</span>
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-gold" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 sm:mb-6 text-glow">
            Nossos produtos
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-divider mx-auto mb-6 sm:mb-8 rounded-full" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Descubra nossa curadoria exclusiva de fragrâncias e produtos selecionados das melhores casas internacionais e do Oriente Médio.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-sm border-gold hover-glow transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-white mb-1 sm:mb-2 group-hover:text-gold transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vitrine Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-16"
        >
          <a
            href="/vitrine"
            className="group relative block overflow-hidden rounded-sm glass-card border-gold hover-glow transition-all duration-500"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer" />
            
            <div className="relative p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              {/* Left Content */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground group-hover:text-gold transition-colors duration-300">
                    Nossa Vitrine
                  </h3>
                </div>
                <p className="font-body text-muted-foreground max-w-xl leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  Explore nossa coleção completa de perfumes importados e árabes. 
                  Navegue por todas as fragrâncias disponíveis e encontre a essência perfeita para você.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gold font-body font-medium text-sm sm:text-base">
                  <span>Clique para explorar</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Right - Visual Element */}
              <div className="flex-shrink-0 hidden sm:block">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-gold/30 to-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 glow-gold">
                  <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-gold" />
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href="/vitrine"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 gradient-gold text-black font-body text-xs sm:text-sm font-semibold tracking-wider uppercase hover:scale-105 transition-all duration-300 glow-gold rounded-sm"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            Ver vitrine
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
