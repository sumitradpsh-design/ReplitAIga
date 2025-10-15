import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunityCard from "@/components/CommunityCard";
import ThemeToggle from "@/components/ThemeToggle";
import AIChat from "@/components/AIChat";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Import images
import artisan1 from "@assets/stock_images/woman_artisan_crafts_a2bbf57e.jpg";
import artisan2 from "@assets/stock_images/woman_artisan_crafts_30d87004.jpg";
import artisan3 from "@assets/stock_images/woman_artisan_crafts_5385a5d7.jpg";

export default function CommunityPage() {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  // TODO: remove mock data - replace with API calls
  const allInterests = [
    "Traditional Textiles",
    "Pottery",
    "Organic Farming",
    "Block Printing",
    "Handicrafts",
    "Sustainable Living",
    "Artisan Stories",
    "Organic Produce",
    "Traditional Art",
    "Handmade Textiles",
    "Eco-friendly Products"
  ];

  // TODO: remove mock data - replace with API calls
  const community = [
    {
      id: 1,
      avatar: artisan1,
      name: "Anita Mehta",
      interests: ["Traditional Textiles", "Pottery", "Organic Farming", "Block Printing"],
      sharedInterests: 3
    },
    {
      id: 2,
      avatar: artisan2,
      name: "Vikram Singh",
      interests: ["Handicrafts", "Sustainable Living", "Artisan Stories"],
      sharedInterests: 2
    },
    {
      id: 3,
      avatar: artisan3,
      name: "Deepa Iyer",
      interests: ["Organic Produce", "Traditional Art", "Handmade Textiles", "Eco-friendly Products"],
      sharedInterests: 4
    },
    {
      id: 4,
      avatar: artisan1,
      name: "Rajesh Patel",
      interests: ["Pottery", "Traditional Art", "Handicrafts"],
      sharedInterests: 2
    },
    {
      id: 5,
      avatar: artisan2,
      name: "Sneha Reddy",
      interests: ["Traditional Textiles", "Block Printing", "Handmade Textiles"],
      sharedInterests: 3
    },
    {
      id: 6,
      avatar: artisan3,
      name: "Arun Kumar",
      interests: ["Organic Farming", "Sustainable Living", "Eco-friendly Products", "Organic Produce"],
      sharedInterests: 4
    }
  ];

  const filteredCommunity = selectedInterest
    ? community.filter(member => member.interests.includes(selectedInterest))
    : community;

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
              Community
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow art enthusiasts who share your passion for Indian crafts and culture
            </p>
          </div>
        </section>

        {/* Interest Filter */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-lg font-semibold mb-4">Filter by Interest:</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedInterest === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedInterest(null)}
                data-testid="button-interest-all"
              >
                All
              </Button>
              {allInterests.map((interest) => (
                <Button
                  key={interest}
                  variant={selectedInterest === interest ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedInterest(interest)}
                  data-testid={`button-interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {interest}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Community Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            {filteredCommunity.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCommunity.map((member) => (
                  <CommunityCard key={member.id} {...member} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No community members found with this interest.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
      <AIChat />
    </div>
  );
}
