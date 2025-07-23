import heroBakery from "@/assets/hero-bakery.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23f8f4f0\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" 
           }}>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Delícias Caseiras
            <span className="block text-3xl md:text-4xl text-muted-foreground font-normal mt-2">
              feitas com amor
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Sabores autênticos que aquecem o coração. 
            Cada produto é preparado com carinho e ingredientes selecionados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToProducts}
              className="bg-gradient-button text-primary-foreground px-8 py-4 rounded-full text-lg font-medium shadow-floating hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Ver Produtos
            </button>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm">Entrega rápida • Produtos frescos</span>
            </div>
          </div>

          {/* Imagem do hero */}
          <div className="max-w-4xl mx-auto mb-8">
            <img
              src={heroBakery}
              alt="Delícias caseiras artesanais"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-card"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-category-salgados rounded-full mx-auto mb-2 flex items-center justify-center shadow-soft">
              <span className="text-2xl">🥟</span>
            </div>
            <p className="text-sm font-medium text-foreground">Salgados</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-category-doces rounded-full mx-auto mb-2 flex items-center justify-center shadow-soft">
              <span className="text-2xl">🧁</span>
            </div>
            <p className="text-sm font-medium text-foreground">Doces</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-category-bolos rounded-full mx-auto mb-2 flex items-center justify-center shadow-soft">
              <span className="text-2xl">🎂</span>
            </div>
            <p className="text-sm font-medium text-foreground">Bolos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;