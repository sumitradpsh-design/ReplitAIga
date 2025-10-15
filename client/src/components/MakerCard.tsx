import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Heart } from "lucide-react";
import { useState } from "react";

interface MakerCardProps {
  image: string;
  name: string;
  location: string;
  craft: string;
  bio: string;
}

export default function MakerCard({ image, name, location, craft, bio }: MakerCardProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <Card className="p-6 text-center hover-elevate active-elevate-2 transition-all duration-300">
      <div className="flex flex-col items-center">
        <Avatar className="w-32 h-32 mb-4 border-4 border-primary/20">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="text-2xl font-serif">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <h3 className="font-serif text-2xl font-semibold mb-2" data-testid={`text-maker-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          {name}
        </h3>
        
        <div className="flex items-center gap-1 text-sm text-accent-foreground mb-3" data-testid={`text-location-${location.toLowerCase().replace(/\s+/g, '-')}`}>
          <MapPin className="h-4 w-4" />
          {location}
        </div>
        
        <div className="inline-block px-4 py-1 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium mb-4">
          {craft}
        </div>
        
        <p className="text-base text-muted-foreground mb-6 line-clamp-3" data-testid={`text-bio-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          {bio}
        </p>
        
        <Button
          variant={isFollowing ? "secondary" : "outline"}
          className="w-full"
          data-testid={`button-connect-${name.toLowerCase().replace(/\s+/g, '-')}`}
          onClick={() => {
            setIsFollowing(!isFollowing);
            console.log(isFollowing ? `Unfollowed ${name}` : `Connected with ${name}`);
          }}
        >
          <Heart className={`mr-2 h-4 w-4 ${isFollowing ? 'fill-current' : ''}`} />
          {isFollowing ? 'Following' : 'Connect'}
        </Button>
      </div>
    </Card>
  );
}
