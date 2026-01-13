import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import perfumesArabes from "@/assets/perfumes-arabes.jpg";
import perfumesOrientais from "@/assets/perfumes-orientais.png";

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
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=800",
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
    <section id="produtos" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            Nossos produtos
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
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
              className="group relative overflow-hidden rounded-sm shadow-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                  {product.title}
                </h3>
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5517996596204?text=Olá! Gostaria de conhecer os produtos da Henri Perfumaria."
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-all duration-300 shadow-elegant"
          >
            Solicite nosso catálogo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
