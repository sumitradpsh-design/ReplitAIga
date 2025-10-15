import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import AIChat from "@/components/AIChat";
import { Card } from "@/components/ui/card";
import { Heart, Users, Leaf, Shield } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Empowering Artisans",
      description: "We provide a platform for talented artisans to showcase and sell their crafts directly to customers, ensuring fair compensation for their skills."
    },
    {
      icon: Users,
      title: "Building Community",
      description: "Connecting art enthusiasts with makers and fostering a community that appreciates traditional Indian craftsmanship."
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Supporting organic farming and eco-friendly production methods that protect our environment for future generations."
    },
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "Every product is verified for authenticity, ensuring you receive genuine handmade crafts and organic produce."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-4 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-4" data-testid="text-page-title">
              About BharatRoots
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bridging the gap between traditional Indian artisans and modern consumers
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-4xl font-bold text-center mb-8" data-testid="text-section-mission">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              BharatRoots was founded with a simple yet powerful vision: to preserve and promote India's rich cultural heritage 
              by empowering the artisans and farmers who are its custodians. We believe that every handcrafted product tells a 
              story of tradition, skill, and dedication passed down through generations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By providing a direct marketplace, we eliminate middlemen and ensure that artisans receive fair compensation for 
              their work. Simultaneously, we connect conscious consumers with authentic, sustainable products that carry the 
              essence of Indian craftsmanship.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-4xl font-bold text-center mb-12" data-testid="text-section-values">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover-elevate active-elevate-2 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3" data-testid={`text-value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-4xl font-bold text-center mb-12" data-testid="text-section-impact">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2" data-testid="text-stat-artisans">
                  500+
                </div>
                <p className="text-lg text-muted-foreground">Artisans Empowered</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2" data-testid="text-stat-products">
                  2,000+
                </div>
                <p className="text-lg text-muted-foreground">Products Listed</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2" data-testid="text-stat-customers">
                  10,000+
                </div>
                <p className="text-lg text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <AIChat />
    </div>
  );
}
