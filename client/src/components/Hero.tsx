import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/rural_village_landsc_06fc9ae3.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 drop-shadow-lg">
            Empowering Artisans & Farmers
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl font-accent">
            Discover authentic Indian craftsmanship and organic produce directly from the makers. 
            Connect with artisans who pour their heritage into every creation.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="backdrop-blur-sm bg-white/20 text-primary-foreground border-primary-foreground/30 hover:bg-white/30 group"
            data-testid="button-explore-products"
            onClick={() => console.log('Navigate to products')}
          >
            Explore Products
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
