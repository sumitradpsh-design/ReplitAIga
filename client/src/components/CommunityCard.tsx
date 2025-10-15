import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { useState } from "react";

interface CommunityCardProps {
  avatar: string;
  name: string;
  interests: string[];
  sharedInterests?: number;
}

export default function CommunityCard({ avatar, name, interests, sharedInterests = 0 }: CommunityCardProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <Card className="p-6 hover-elevate active-elevate-2 transition-all duration-300">
      <div className="flex items-start gap-4">
        <Avatar className="w-16 h-16 border-2 border-primary/20">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="text-lg font-serif">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-lg mb-1" data-testid={`text-user-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {name}
          </h4>
          
          {sharedInterests > 0 && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
              <Users className="h-4 w-4" />
              <span data-testid={`text-shared-interests-${sharedInterests}`}>
                {sharedInterests} shared interests
              </span>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-4">
            {interests.slice(0, 3).map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs"
                data-testid={`badge-interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {interest}
              </Badge>
            ))}
            {interests.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{interests.length - 3} more
              </Badge>
            )}
          </div>
          
          <Button
            size="sm"
            variant={isFollowing ? "secondary" : "default"}
            className="w-full"
            data-testid={`button-follow-${name.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => {
              setIsFollowing(!isFollowing);
              console.log(isFollowing ? `Unfollowed ${name}` : `Following ${name}`);
            }}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </Button>
        </div>
      </div>
    </Card>
  );
}
