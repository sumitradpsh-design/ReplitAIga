import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  artisan: string;
  price: number;
  category: string;
}

export default function ProductCard({ image, name, artisan, price, category }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          data-testid={`img-product-${name.toLowerCase().replace(/\s+/g, '-')}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Button
            variant="outline"
            className="backdrop-blur-sm bg-white/20 text-primary-foreground border-primary-foreground/30 w-full"
            data-testid={`button-buy-${name.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => console.log(`Buy ${name}`)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy Now
          </Button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-xs text-accent-foreground font-medium mb-2" data-testid={`text-category-${category.toLowerCase()}`}>
          {category}
        </div>
        <h3 className="font-serif text-xl font-semibold mb-2" data-testid={`text-product-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4" data-testid={`text-artisan-${artisan.toLowerCase().replace(/\s+/g, '-')}`}>
          by {artisan}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary" data-testid={`text-price-${price}`}>
            ₹{price}
          </span>
        </div>
      </div>
    </Card>
  );
}
