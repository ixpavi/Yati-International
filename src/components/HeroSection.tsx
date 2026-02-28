import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-[140px] pb-[100px]">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-primary font-semibold text-sm mb-6 tracking-wide border-l-4 border-accent">
              AUTHORIZED PARKER HANNIFIN DISTRIBUTOR
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[42px] font-bold text-foreground mb-4 animate-slide-up leading-tight">
            <span className="sr-only">Yati International Inc. - </span>
            Engineering Excellence,{" "}
            <span className="text-primary">Delivered</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-[600px] animate-slide-up" style={{ animationDelay: "0.15s" }}>
            Your trusted partner for premium industrial components. Hydraulics, pneumatics,
            filtration systems, and more from the world's leading manufacturers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="accent" size="xl" className="hover:bg-primary hover:text-primary-foreground active:scale-[0.96] transition-all" asChild>
              <a href="#products">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-foreground/20 hover:bg-primary hover:text-primary-foreground hover:border-primary" asChild>
              <a href="#contact">Contact Sales</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border animate-fade-in" style={{ animationDelay: "0.45s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground text-sm">Brand Partners</div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
