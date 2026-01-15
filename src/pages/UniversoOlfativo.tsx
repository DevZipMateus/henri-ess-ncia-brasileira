import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/universo-hero-bg.jpeg";
import spicesBg from "@/assets/universo-spices-bg.jpeg";
import arabicPerfumes from "@/assets/arabic-perfumes-luxury.jpg";
import oudWood from "@/assets/oud-wood-luxury.jpg";

const UniversoOlfativo = () => {
  const fragranceTypes = [
    {
      title: "Contratipo",
      description: "Criado para reproduzir com máxima fidelidade perfumes famosos do mercado. Mantém o mesmo DNA olfativo, oferecendo uma experiência muito próxima à referência, com excelente custo-benefício.",
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
    "Fixação Prolongada",
    "Projeção Sofisticada",
    "Qualidade Superior",
    "Exclusividade",
    "Identidade Olfativa"
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

        {/* Introduction with Image */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Os perfumes árabes não seguem tendências: eles criam presença.
                  Reconhecidos mundialmente pela sua alta concentração, matérias-primas nobres e performance superior, essas fragrâncias são feitas para quem valoriza exclusividade, sofisticação e longa duração.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Enquanto a perfumaria tradicional prioriza suavidade e rápida evaporação, a perfumaria árabe nasce da tradição milenar de óleos essenciais, resinas, especiarias e madeiras preciosas. O resultado? Perfumes que evoluem na pele, fixam por horas e deixam assinatura.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="overflow-hidden rounded-2xl shadow-elegant">
                  <img 
                    src={arabicPerfumes} 
                    alt="Coleção de perfumes árabes de luxo com detalhes dourados" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              </motion.div>
            </div>
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
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/90">Maior concentração de óleos essenciais;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/90">Notas intensas como âmbar, oud, especiarias orientais, almíscar e flores nobres;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-foreground/90">Estrutura olfativa pensada para longa duração e projeção elegante;</span>
                  </li>
                </ul>
                <p className="text-lg text-foreground/90 mt-6 pt-6 border-t border-border">
                  Isso garante fragrâncias que permanecem na pele e na memória, do primeiro spray às notas de fundo.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fragrance Types with Image */}
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

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Oud Image - Left side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="hidden lg:block relative"
              >
                <div className="sticky top-32 overflow-hidden rounded-2xl shadow-elegant">
                  <img 
                    src={oudWood} 
                    alt="Madeira de oud e resinas preciosas - ingredientes nobres da perfumaria árabe" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">
                    Oud e resinas preciosas
                  </p>
                </div>
              </motion.div>

              {/* Fragrance Cards - Right side */}
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                {fragranceTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-background border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Sparkles className="text-primary" size={20} />
                      <h3 className="font-display text-lg text-foreground text-center">{type.title}</h3>
                      <Sparkles className="text-primary" size={20} />
                    </div>
                    <p className="text-foreground/80 leading-relaxed mb-3 text-sm">
                      {type.description}
                    </p>
                    <p className="text-primary font-medium text-xs">
                      {type.ideal}
                    </p>
                  </motion.div>
                ))}
              </div>
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