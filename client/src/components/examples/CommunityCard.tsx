import CommunityCard from '../CommunityCard';
import avatarImage from '@assets/stock_images/woman_artisan_crafts_30d87004.jpg';

export default function CommunityCardExample() {
  return (
    <div className="p-8 max-w-md">
      <CommunityCard
        avatar={avatarImage}
        name="Anita Mehta"
        interests={["Traditional Textiles", "Pottery", "Organic Farming", "Block Printing"]}
        sharedInterests={3}
      />
    </div>
  );
}
