import Nav from "@/components/dynasty/Nav";
import Hero from "@/components/dynasty/Hero";
import Services from "@/components/dynasty/Services";
import Portfolio from "@/components/dynasty/Portfolio";
import CTA from "@/components/dynasty/CTA";
import Footer from "@/components/dynasty/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
