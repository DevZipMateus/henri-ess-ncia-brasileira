import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/universo-hero-bg.jpeg";
import spicesBg from "@/assets/universo-spices-bg.jpeg";
import arabicPerfumes from "@/assets/arabic-perfumes-luxury.jpg";
import arabicIncense from "@/assets/arabic-incense-luxury.jpg";
import oudWood from "@/assets/oud-wood-luxury.jpg";

const UniversoOlfativo = () => {
  const fragranceTypes = [
    {
      title: "Contratipo",
      description: "Criado para reproduzir com máxima fidelidade perfumes famosos do mercado. Mantém o mesmo DNA olfativo, oferecendo uma experiência muito próxima ao original, com excelente custo-benefício.",
      ideal: "Ideal para quem busca semelhança e performance."
    },
    {
      title: "Inspiração Olfativa",
      description: "Baseada em fragrâncias consagradas, mas com ajustes sutis que trazem identidade própria. Preserva o estilo e a elegância do perfume de referência, adicionando um toque exclusivo.",
      ideal: "Ideal para quem gosta do clássico, com personalidade."
    },
    {
      title: "Inspiração Olfativa Híbrida",
      description: "Uma combinação criativa de duas ou mais inspirações olfativas. Resulta em perfumes modernos, envolventes e únicos, equilibrando referências conhecidas com originalidade.",
      ideal: "Ideal para quem busca exclusividade com sofisticação."
    },
    {
      title: "Fragrância Autoral",
      description: "Criada do zero, sem referências diretas. Cada nota é pensada para construir uma identidade única, transformando o perfume em uma verdadeira assinatura pessoal.",
      ideal: "Ideal para quem não quer se parecer com ninguém."
    }
  ];

  const benefits = [
    "Fixação prolongada",
    "Projeção sofisticada",
    "Qualidade superior",
    "Exclusividade",
    "Identidade olfativa"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-32 lg:py-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-lg">
                Perfumes Árabes
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow-md">
                Onde intensidade, qualidade e identidade se encontram
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-lg text-foreground/90 leading-relaxed"
              >
                Os perfumes árabes não seguem tendências: eles criam presença.
                Reconhecidos mundialmente pela sua alta concentração, matérias-primas nobres e performance superior, essas fragrâncias são feitas para quem valoriza exclusividade, sofisticação e longa duração.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-foreground/90 leading-relaxed"
              >
                Enquanto a perfumaria tradicional prioriza suavidade e rápida evaporação, a perfumaria árabe nasce da tradição milenar de óleos essenciais, resinas, especiarias e madeiras preciosas. O resultado? Perfumes que evoluem na pele, fixam por horas e deixam assinatura.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Luxury Gallery */}
        <section className="py-16 lg:py-24 bg-foreground/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <img 
                  src={arabicPerfumes} 
                  alt="Coleção de perfumes árabes de luxo com detalhes dourados" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 right-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                  Frascos com acabamento premium
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <img 
                  src={arabicIncense} 
                  alt="Incensário árabe dourado com bakhoor queimando" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 right-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                  Tradição milenar em incensos
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <img 
                  src={oudWood} 
                  alt="Madeira de oud e resinas preciosas em bandeja dourada" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 right-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                  Oud e resinas preciosas
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Arab Perfumes Last Longer */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${spicesBg})` }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-8">
                Por que os perfumes árabes fixam mais?
              </h2>
              <p className="text-xl text-center text-primary font-medium mb-10">
                A diferença está na essência.
              </p>
              
              <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
                <p className="text-lg text-foreground/90 mb-6">Os perfumes árabes possuem:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/90">Maior concentração de óleos essenciais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/90">Notas intensas como âmbar, oud, especiarias orientais, almíscar e flores nobres</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/90">Estrutura olfativa pensada para longa duração e projeção elegante</span>
                  </li>
                </ul>
                <p className="text-lg text-foreground/90 mt-6 pt-6 border-t border-border">
                  Isso garante fragrâncias que permanecem na pele e na memória, do primeiro spray às notas de fundo.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fragrance Types */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-4xl text-foreground text-center mb-16"
            >
              Entenda os Tipos de Fragrâncias
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {fragranceTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background border-2 border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="text-primary" size={24} />
                    <h3 className="font-display text-xl text-foreground">{type.title}</h3>
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {type.description}
                  </p>
                  <p className="text-primary font-medium text-sm">
                    {type.ideal}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-24 bg-foreground/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                Mais do que perfumes. Uma experiência.
              </h2>
              <p className="text-lg text-foreground/90 mb-10">
                Escolher um perfume árabe é investir em:
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.span
                    key={benefit}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="px-6 py-3 bg-primary/10 text-foreground rounded-full text-sm font-medium border border-primary/20"
                  >
                    {benefit}
                  </motion.span>
                ))}
              </div>

              <p className="text-2xl md:text-3xl font-display text-primary">
                Porque luxo não é apenas sentir: é ser lembrado!
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default UniversoOlfativo;