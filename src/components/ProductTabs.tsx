import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { Product } from "./ProductCard";

interface ProductTabsProps {
  salgados: Product[];
  doces: Product[];
  bolos: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductTabs = ({ salgados, doces, bolos, onAddToCart }: ProductTabsProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Os Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra a nossa seleção de produtos artesanais, preparados diariamente 
            com ingredientes frescos e receitas tradicionais.
          </p>
          <div className="w-24 h-1 bg-gradient-button mx-auto rounded-full mt-6"></div>
        </div>

        <Tabs defaultValue="salgados" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-12">
            <TabsTrigger 
              value="salgados" 
              className="text-lg data-[state=active]:bg-category-salgados data-[state=active]:text-foreground"
            >
              <span className="mr-2 text-xl">🥟</span>
              Salgados
            </TabsTrigger>
            <TabsTrigger 
              value="doces"
              className="text-lg data-[state=active]:bg-category-doces data-[state=active]:text-foreground"
            >
              <span className="mr-2 text-xl">🧁</span>
              Doces
            </TabsTrigger>
            <TabsTrigger 
              value="bolos"
              className="text-lg data-[state=active]:bg-category-bolos data-[state=active]:text-foreground"
            >
              <span className="mr-2 text-xl">🎂</span>
              Bolos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="salgados" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {salgados.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="doces" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doces.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bolos" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bolos.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductTabs;