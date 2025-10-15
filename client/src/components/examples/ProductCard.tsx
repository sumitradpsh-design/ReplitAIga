import ProductCard from '../ProductCard';
import productImage from '@assets/stock_images/traditional_handmade_794aaafd.jpg';

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        image={productImage}
        name="Handwoven Silk Saree"
        artisan="Lakshmi Devi"
        price={4500}
        category="Textiles"
      />
    </div>
  );
}
