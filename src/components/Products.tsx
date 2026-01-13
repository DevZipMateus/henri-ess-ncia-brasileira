import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ShoppingBag, Sparkles } from "lucide-react";
import perfumesArabes from "@/assets/perfumes-arabes.jpg";
import perfumesOrientais from "@/assets/perfumes-orientais.png";
import linhaHome from "@/assets/linha-home.jpg";

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
    image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?q=80&w=800",
  },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="produtos" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-gold" />
            <span className="font-body text-sm tracking-widest uppercase text-gold">Coleção Exclusiva</span>
            <Sparkles className="w-6 h-6 text-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 text-glow">
            Nossos produtos
          </h2>
          <div className="w-24 h-px gradient-gold mx-auto mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Descubra nossa curadoria exclusiva de fragrâncias e produtos selecionados das melhores casas internacionais e do Oriente Médio.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative overflow-hidden rounded-sm border-gold hover-glow transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                {/* Shimmer overlay */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="font-body text-sm text-white/80 leading-relaxed">
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
          className="mt-16"
        >
          <a
            href="/vitrine"
            className="group relative block overflow-hidden rounded-sm glass-card border-gold hover-glow transition-all duration-500"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer" />
            
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-gold" />
                  <ShoppingBag className="w-8 h-8 text-primary" />
                  <h3 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-gold transition-colors duration-300">
                    Nossa Vitrine
                  </h3>
                </div>
                <p className="font-body text-muted-foreground max-w-xl leading-relaxed mb-4">
                  Explore nossa coleção completa de perfumes importados e árabes. 
                  Navegue por todas as fragrâncias disponíveis e encontre a essência perfeita para você.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gold font-body font-medium">
                  <span>Clique para explorar</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Right - Visual Element */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-gold/30 to-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 glow-gold">
                  <ShoppingBag className="w-16 h-16 md:w-20 md:h-20 text-gold" />
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
          className="text-center mt-12"
        >
          <a
            href="/vitrine"
            className="inline-flex items-center gap-3 px-10 py-4 gradient-gold text-black font-body text-sm font-semibold tracking-wider uppercase hover:scale-105 transition-all duration-300 glow-gold rounded-sm"
          >
            <Sparkles className="w-5 h-5" />
            Ver vitrine
            <Sparkles className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
