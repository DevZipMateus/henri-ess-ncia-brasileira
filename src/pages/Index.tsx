import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import InstagramSection from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingParticles from "@/components/FloatingParticles";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <FloatingParticles />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Products />
          <InstagramSection />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default Index;
