import MakerCard from '../MakerCard';
import artisanImage from '@assets/stock_images/woman_artisan_crafts_a2bbf57e.jpg';

export default function MakerCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <MakerCard
        image={artisanImage}
        name="Priya Sharma"
        location="Jaipur, Rajasthan"
        craft="Block Printing"
        bio="With over 15 years of experience, I create stunning hand-block printed textiles using traditional techniques passed down through generations."
      />
    </div>
  );
}
