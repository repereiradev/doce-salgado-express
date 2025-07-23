import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'salgados' | 'doces' | 'bolos';
  description?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return `€${price.toFixed(2)}`;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'salgados':
        return 'bg-category-salgados';
      case 'doces':
        return 'bg-category-doces';
      case 'bolos':
        return 'bg-category-bolos';
      default:
        return 'bg-accent';
    }
  };

  return (
    <Card className="group hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 bg-gradient-card border-border/50 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium text-foreground ${getCategoryColor(product.category)}`}>
          {product.category}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        {product.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          
          <Button
            size="sm"
            onClick={() => onAddToCart(product)}
            className="bg-gradient-button hover:shadow-soft transition-all duration-300 hover:scale-105"
          >
            <Plus className="w-4 h-4 mr-1" />
            Adicionar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;