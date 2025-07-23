import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onQuemSomosClick: () => void;
  onProdutosClick: () => void;
  onPoliticasClick: () => void;
  onContatosClick: () => void;
}

const Header = ({ 
  cartCount, 
  onCartClick, 
  onQuemSomosClick, 
  onProdutosClick, 
  onPoliticasClick, 
  onContatosClick 
}: HeaderProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-button rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">D</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">Delícias Caseiras</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={onQuemSomosClick}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Quem Somos
          </button>
          <button 
            onClick={onProdutosClick}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Os nossos Produtos
          </button>
          <button 
            onClick={onPoliticasClick}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Políticas
          </button>
          <button 
            onClick={onContatosClick}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contatos
          </button>
        </nav>

        <Button
          variant="outline"
          size="sm"
          onClick={onCartClick}
          className="relative"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Carrinho
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;