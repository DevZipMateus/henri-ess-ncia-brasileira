import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingParticles from "@/components/FloatingParticles";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

// Brand logos
import afnanLogo from "@/assets/brands/afnan.png";
import armafLogo from "@/assets/brands/armaf.png";
import alWataniahLogo from "@/assets/brands/al-wataniah.jpeg";
import frenchAvenueLogo from "@/assets/brands/french-avenue.png";
import khadlajLogo from "@/assets/brands/khadlaj.webp";
import lattafaLogo from "@/assets/brands/lattafa.jpeg";
import leChameauLogo from "@/assets/brands/le-chameau.jpeg";
import parisCornerLogo from "@/assets/brands/paris-corner.jpeg";
import laFlorentinaLogo from "@/assets/brands/la-florentina.jpeg";
import orienticaLogo from "@/assets/brands/orientica.webp";
import maisonAlhambraLogo from "@/assets/brands/maison-alhambra.webp";
import nusukLogo from "@/assets/brands/nusuk.jpeg";
import brandsHero from "@/assets/brands/brands-hero.webp";

const brands = [
  {
    name: "AFNAN",
    origin: "Emirados Árabes Unidos",
    logo: afnanLogo,
    description: "Fundada nos Emirados Árabes Unidos, a Afnan nasceu com a proposta de unir a tradição da perfumaria oriental às tendências modernas internacionais. A marca conquistou reconhecimento global por suas fragrâncias bem construídas, sofisticadas e versáteis, ideais tanto para o dia a dia quanto para ocasiões especiais.",
    focus: "Perfumes autorais modernos, com alta fixação e sofisticação.",
  },
  {
    name: "ARMAF",
    origin: "Emirados Árabes Unidos",
    logo: armafLogo,
    description: "A Armaf se consolidou como uma das principais marcas de perfumes inspirados do mundo. Seu sucesso vem da capacidade de entregar fragrâncias com alta similaridade olfativa, excelente performance e preços acessíveis.",
    focus: "Perfumes inspirados (contratipos), intensos e com ótimo custo-benefício.",
  },
  {
    name: "AL WATANIAH",
    origin: "Emirados Árabes Unidos",
    logo: alWataniahLogo,
    description: "A Al Wataniah carrega a essência da perfumaria árabe tradicional, valorizando fragrâncias encorpadas, intensas e marcantes, que refletem luxo e identidade cultural.",
    focus: "Perfumes orientais tradicionais, intensos e sofisticados.",
  },
  {
    name: "FRENCH AVENUE",
    origin: "Emirados Árabes Unidos",
    logo: frenchAvenueLogo,
    description: "Criada para unir o charme da perfumaria francesa à potência dos perfumes árabes, a French Avenue aposta em fragrâncias modernas, elegantes e equilibradas.",
    focus: "Perfumes modernos com influência francesa e excelente desempenho.",
  },
  {
    name: "GALAXY CONCEPT",
    origin: "Emirados Árabes Unidos",
    logo: null,
    description: "A Galaxy Concept foi desenvolvida com foco em perfumes inspirados em grandes sucessos da perfumaria mundial. A marca oferece fragrâncias modernas, acessíveis e com ótima performance, sendo uma excelente opção para quem busca aromas conhecidos por um valor competitivo.",
    focus: "Perfumes inspirados (contratipos), modernos e de alta presença.",
  },
  {
    name: "KHADLAJ",
    origin: "Emirados Árabes Unidos",
    logo: khadlajLogo,
    description: "Fundada nos Emirados Árabes Unidos, a Khadlaj é uma marca tradicional da perfumaria árabe, reconhecida por unir herança cultural, sofisticação e modernidade. Suas fragrâncias são desenvolvidas com matérias-primas de qualidade, combinando notas orientais intensas com construções modernas, além de frascos elegantes e bem trabalhados.",
    focus: "Perfumes orientais e modernos, sofisticados, intensos e com excelente apresentação.",
  },
  {
    name: "LATTAFA",
    origin: "Emirados Árabes Unidos",
    logo: lattafaLogo,
    description: "Fundada em 1980, a Lattafa é uma das casas de perfumaria árabe mais tradicionais e reconhecidas mundialmente. A marca possui um portfólio amplo e bem estruturado, dividido em diversas linhas que atendem diferentes perfis de consumidores, como Lattafa Asdaaf, Lattafa Pride, Lattafa Niche, além de outras coleções exclusivas. Cada linha apresenta propostas distintas, que vão desde fragrâncias orientais intensas até perfumes modernos, sofisticados e autorais.",
    focus: "Perfumaria oriental e moderna, com grande variedade de linhas, alta performance e excelente custo-benefício.",
  },
  {
    name: "LE CHAMEAU",
    origin: "Emirados Árabes Unidos",
    logo: leChameauLogo,
    description: "A Le Chameau é conhecida por desenvolver perfumes inspirados em fragrâncias consagradas, priorizando fixação, projeção e preço acessível.",
    focus: "Perfumes inspirados (contratipos) com excelente performance.",
  },
  {
    name: "MAISON ALHAMBRA",
    origin: "Emirados Árabes Unidos",
    logo: maisonAlhambraLogo,
    description: "Linha do grupo Lattafa, a Maison Alhambra foi criada para oferecer perfumes inspirados em fragrâncias de luxo. A marca se destaca pelo alto nível de similaridade olfativa, frascos sofisticados e ótima performance.",
    focus: "Perfumes inspirados premium (contratipos de luxo).",
  },
  {
    name: "ORIENTICA",
    origin: "Emirados Árabes Unidos",
    logo: orienticaLogo,
    description: "A Orientica combina tradição e modernidade, criando fragrâncias intensas, refinadas e com matérias-primas de alta qualidade, além de apresentações luxuosas.",
    focus: "Perfumes orientais de alto padrão e sofisticação.",
  },
  {
    name: "PARIS CORNER",
    origin: "Emirados Árabes Unidos",
    logo: parisCornerLogo,
    description: "A Paris Corner ganhou destaque internacional por suas linhas inspiradas em perfumes nicho e designer, oferecendo criatividade, diversidade e excelente desempenho.",
    focus: "Perfumes inspirados premium, modernos e versáteis.",
  },
  {
    name: "LA FLORENTINA",
    origin: "Itália",
    logo: laFlorentinaLogo,
    description: "Fundada em Florença, a La Florentina é uma marca tradicional italiana conhecida por seus perfumes e cosméticos de inspiração clássica. Seus produtos refletem elegância, suavidade e tradição europeia.",
    focus: "Perfumaria clássica italiana e cosméticos perfumados.",
  },
];

const NossasMarcas = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <FloatingParticles />
        <Header />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative pt-24">
            <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
              <img
                src={brandsHero}
                alt="Coleção de perfumes de luxo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center px-4"
                >
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 drop-shadow-lg">
                    Conheça Nossas Marcas
                  </h1>
                  <div className="w-24 h-1 bg-primary mx-auto" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <p className="font-body text-base sm:text-lg text-foreground/80 leading-relaxed text-justify">
                  Trabalhamos com perfumaria internacional importada, oferecendo fragrâncias originais de grandes casas reconhecidas mundialmente. Nosso portfólio inclui marcas consagradas como Dior, Paco Rabanne, Carolina Herrera, Yves Saint Laurent, Giorgio Armani, Ralph Lauren, Chloé, Dolce & Gabbana, Versace, Prada, Hugo Boss, Calvin Klein, Lancôme, Mont Blanc, Issey Miyake, Joop! e Marina de Bourbon, entre outras referências do mercado internacional.
                </p>
                <p className="font-body text-base sm:text-lg text-foreground/80 leading-relaxed text-justify">
                  Além das grandes grifes, também selecionamos cuidadosamente marcas renomadas da perfumaria árabe e europeia, conhecidas pela alta qualidade, excelente fixação, projeção marcante e ótimo custo-benefício. Cada marca possui uma identidade própria, atendendo diferentes estilos, preferências e experiências olfativas.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Brands Grid */}
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="space-y-12 lg:space-y-16">
                {brands.map((brand, index) => (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 p-6 lg:p-8 shadow-elegant"
                  >
                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-10 items-center`}>
                      {/* Logo */}
                      <div className="flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm">
                        {brand.logo ? (
                          <img
                            src={brand.logo}
                            alt={`Logo ${brand.name}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        ) : (
                          <div className="text-center">
                            <span className="font-display text-2xl text-foreground/60">{brand.name}</span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-left">
                        <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-2">
                          {brand.name}
                        </h2>
                        <p className="font-body text-sm text-primary font-medium mb-4">
                          Origem: {brand.origin}
                        </p>
                        <p className="font-body text-base text-foreground/80 leading-relaxed mb-4 text-justify">
                          {brand.description}
                        </p>
                        <div className="flex items-start gap-2">
                          <span className="font-body text-sm font-semibold text-foreground">Foco:</span>
                          <span className="font-body text-sm text-foreground/80">{brand.focus}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto"
              >
                <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                  Encontre Sua Fragrância Ideal
                </h2>
                <p className="font-body text-base text-foreground/80 mb-8">
                  Visite nossa vitrine ou entre em contato para uma consultoria personalizada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/vitrine"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-elegant"
                  >
                    Ver Vitrine
                  </a>
                  <a
                    href="https://wa.me/5517996596204"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-foreground/20 text-foreground font-body text-sm font-medium rounded-sm hover:bg-foreground/5 transition-all duration-300"
                  >
                    Fale Conosco
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default NossasMarcas;
