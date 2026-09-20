import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img
          src={heroImage}
          alt="Fashion Collection"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Elevate Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Style
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Discover premium fashion pieces that define your unique style. 
            Quality meets elegance in every thread.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-surface">
              Explore Trends
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}