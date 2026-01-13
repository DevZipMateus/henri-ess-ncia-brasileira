import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import dubaiNight from "@/assets/dubai-night.jpg";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="relative" ref={ref}>
      {/* Background Image Banner */}
      <div className="relative h-[30vh] min-h-[250px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${dubaiNight})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-background" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4 drop-shadow-lg">
              Contato
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-body text-muted-foreground max-w-2xl mx-auto text-center mb-16"
          >
            Visite nossa loja ou entre em contato para uma experiência olfativa única e personalizada.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">Endereço</h3>
                  <p className="font-body text-muted-foreground">
                    R. Ida Verdi Amorim, 200<br />
                    Vila Redentora, São José do Rio Preto - SP
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">Telefone</h3>
                  <a
                    href="https://wa.me/5517996596204"
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    (17) 99659-6204
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">E-mail</h3>
                  <a
                    href="mailto:henri.imports11@gmail.com"
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    henri.imports11@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">Horário de funcionamento</h3>
                  <p className="font-body text-muted-foreground">
                    Segunda a Sábado: 09:00 às 20:00<br />
                    Domingo: 11:00 às 17:00
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">Instagram</h3>
                  <a
                    href="https://www.instagram.com/perfumaria.henri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    @perfumaria.henri
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card border-elegant rounded-sm p-8 md:p-10 shadow-elegant flex flex-col justify-center"
            >
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 text-center">
                Agende sua visita
              </h3>
              <p className="font-body text-muted-foreground text-center mb-8 leading-relaxed">
                Venha conhecer nossa curadoria exclusiva de perfumes importados e árabes. Oferecemos um atendimento personalizado para ajudá-lo a encontrar a fragrância perfeita.
              </p>
              <a
                href="https://wa.me/5517996596204?text=Olá! Gostaria de agendar uma visita à Henri Perfumaria."
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-all duration-300 shadow-elegant mx-auto"
              >
                Fale conosco no WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
