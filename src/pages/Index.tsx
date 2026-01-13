import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingParticles from "@/components/FloatingParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
