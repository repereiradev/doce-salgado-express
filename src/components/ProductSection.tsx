import ProductCard, { Product } from "./ProductCard";

interface ProductSectionProps {
  id: string;
  title: string;
  emoji: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductSection = ({ id, title, emoji, products, onAddToCart }: ProductSectionProps) => {
  return (
    <section id={id} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-button rounded-full mb-4 shadow-soft">
            <span className="text-3xl">{emoji}</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
          <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;