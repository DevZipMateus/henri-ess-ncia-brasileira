import { Instagram as InstagramIcon } from "lucide-react";
import { motion } from "framer-motion";

const InstagramSection = () => {
  const instagramUrl = "https://www.instagram.com/perfumaria.henri?igsh=MWpxaWVtZXMyeWZpOQ%3D%3D&utm_source=qr";

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <InstagramIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
          </motion.div>

          {/* Title */}
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground mb-3 sm:mb-4">
            Siga-nos no <span className="text-primary">Instagram</span>
          </h2>

          {/* Description */}
          <p className="font-body text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4">
            Acompanhe as novidades, lançamentos exclusivos e mergulhe no universo aromático da Henri Perfumaria.
          </p>

          {/* Instagram Handle */}
          <motion.a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/40 rounded-full hover:border-primary hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 group"
          >
            <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="font-display text-base sm:text-lg text-foreground group-hover:text-primary transition-colors duration-300">
              @perfumaria.henri
            </span>
          </motion.a>

          {/* Decorative line */}
          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4">
            <div className="w-12 sm:w-20 h-1 bg-divider rounded-full" />
            <div className="w-2 h-2 rounded-full bg-divider" />
            <div className="w-12 sm:w-20 h-1 bg-divider rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
