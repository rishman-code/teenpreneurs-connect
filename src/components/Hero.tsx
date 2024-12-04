import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/90 to-secondary/90 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="container mx-auto px-4 py-16 relative z-10 animate-fade-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          Launch Your Entrepreneurial Journey Today
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl mx-auto">
          Empowering teenagers with the skills, knowledge, and network to build successful businesses
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};