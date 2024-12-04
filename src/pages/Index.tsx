import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { Newsletter } from "@/components/Newsletter";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Programs />
      <Newsletter />
      <Contact />
    </main>
  );
};

export default Index;