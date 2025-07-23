import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import CartModal, { CartItem } from "@/components/CartModal";
import { Product } from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";

// Importar imagens
import salgado1 from "@/assets/salgado-1.jpg";
import salgado2 from "@/assets/salgado-2.jpg";
import doce1 from "@/assets/doce-1.jpg";
import doce2 from "@/assets/doce-2.jpg";
import bolo1 from "@/assets/bolo-1.jpg";
import bolo2 from "@/assets/bolo-2.jpg";

const CatalogoPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  // Carregar carrinho do localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('deliciasCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Salvar carrinho no localStorage
  useEffect(() => {
    localStorage.setItem('deliciasCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const products: Product[] = [
    {
      id: '1',
      name: 'Empada de Frango',
      price: 2.50,
      image: salgado1,
      category: 'salgados',
      description: 'Deliciosa empada recheada com frango temperado e legumes frescos'
    },
    {
      id: '2',
      name: 'Pastel de Carne',
      price: 2.80,
      image: salgado2,
      category: 'salgados',
      description: 'Pastel crocante com recheio suculento de carne moída temperada'
    },
    {
      id: '3',
      name: 'Pastéis de Nata',
      price: 1.20,
      image: doce1,
      category: 'doces',
      description: 'Tradicionais pastéis de nata com massa folhada e creme de ovos'
    },
    {
      id: '4',
      name: 'Brownie de Chocolate',
      price: 3.50,
      image: doce2,
      category: 'doces',
      description: 'Brownie húmido de chocolate belga com pedaços de nozes'
    },
    {
      id: '5',
      name: 'Bolo de Aniversário',
      price: 25.00,
      image: bolo1,
      category: 'bolos',
      description: 'Bolo especial para aniversários com creme e decoração personalizada'
    },
    {
      id: '6',
      name: 'Bolo de Chocolate',
      price: 18.00,
      image: bolo2,
      category: 'bolos',
      description: 'Bolo de chocolate negro com cobertura de chocolate e morangos'
    }
  ];

  const salgados = products.filter(p => p.category === 'salgados');
  const doces = products.filter(p => p.category === 'doces');
  const bolos = products.filter(p => p.category === 'bolos');

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    
    toast({
      title: "Produto removido",
      description: "Produto foi removido do carrinho.",
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('deliciasCart');
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      
      <Hero />
      
      <ProductSection
        id="salgados"
        title="Salgados"
        emoji="🥟"
        products={salgados}
        onAddToCart={addToCart}
      />
      
      <div className="h-px bg-border/50"></div>
      
      <ProductSection
        id="doces"
        title="Doces"
        emoji="🧁"
        products={doces}
        onAddToCart={addToCart}
      />
      
      <div className="h-px bg-border/50"></div>
      
      <ProductSection
        id="bolos"
        title="Bolos"
        emoji="🎂"
        products={bolos}
        onAddToCart={addToCart}
      />

      <footer className="bg-secondary py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Delícias Caseiras
            </h3>
            <p className="text-muted-foreground mb-6">
              Sabores autênticos feitos com amor e ingredientes selecionados. 
              Entre em contacto connosco para encomendar os seus produtos favoritos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Produtos frescos diariamente
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Entrega rápida
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Qualidade garantida
              </div>
            </div>
          </div>
        </div>
      </footer>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />
    </div>
  );
};

export default CatalogoPage;