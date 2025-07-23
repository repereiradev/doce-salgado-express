import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header = ({ cartCount, onCartClick }: HeaderProps) => {
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
            onClick={() => scrollToSection('salgados')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Salgados
          </button>
          <button 
            onClick={() => scrollToSection('doces')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Doces
          </button>
          <button 
            onClick={() => scrollToSection('bolos')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Bolos
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