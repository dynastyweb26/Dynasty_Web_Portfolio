import Nav from "@/components/dynasty/Nav";
import Hero from "@/components/dynasty/Hero";
import Services from "@/components/dynasty/Services";
import Pricing from "@/components/dynasty/Pricing";
import Process from "@/components/dynasty/Process";
import Portfolio from "@/components/dynasty/Portfolio";
import CTA from "@/components/dynasty/CTA";
import Footer from "@/components/dynasty/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Pricing />
      <Process />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
