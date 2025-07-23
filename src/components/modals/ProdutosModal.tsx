import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Clock, Thermometer, Heart, Award } from "lucide-react";

interface ProdutosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProdutosModal = ({ isOpen, onClose }: ProdutosModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground text-center">
            Os Nossos Produtos
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Introdução */}
          <section className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada produto é uma obra de arte culinária, criada com técnicas tradicionais 
              e ingredientes cuidadosamente selecionados.
            </p>
          </section>

          <Separator />

          {/* Processo de Produção */}
          <section>
            <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
              Como Fazemos
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-category-salgados rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Com Amor e Dedicação</h4>
                  <p className="text-sm text-muted-foreground">
                    Cada produto é preparado manualmente, com o cuidado e atenção 
                    que só o trabalho artesanal pode proporcionar.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-category-doces rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Ingredientes Premium</h4>
                  <p className="text-sm text-muted-foreground">
                    Selecionamos cuidadosamente cada ingrediente, priorizando 
                    fornecedores locais e produtos orgânicos sempre que possível.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-category-bolos rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tempo de Maturação</h4>
                  <p className="text-sm text-muted-foreground">
                    Respeitamos os tempos de cada receita, permitindo que os 
                    sabores se desenvolvam naturalmente para o resultado perfeito.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Thermometer className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Controlo de Temperatura</h4>
                  <p className="text-sm text-muted-foreground">
                    Utilizamos fornos profissionais com controlo preciso de 
                    temperatura para garantir a textura e sabor ideais.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Categorias Detalhadas */}
          <section>
            <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
              As Nossas Especialidades
            </h3>

            <div className="space-y-6">
              {/* Salgados */}
              <div className="bg-category-salgados/20 p-6 rounded-lg border">
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                  <span className="text-2xl mr-3">🥟</span>
                  Salgados Artesanais
                </h4>
                <p className="text-muted-foreground mb-4">
                  Os nossos salgados são preparados com massas folhadas feitas 
                  na hora e recheios frescos. Utilizamos carnes selecionadas, 
                  vegetais da época e temperos tradicionais portugueses.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="bg-card px-3 py-1 rounded-full border">• Massa folhada artesanal</span>
                  <span className="bg-card px-3 py-1 rounded-full border">• Recheios frescos diários</span>
                  <span className="bg-card px-3 py-1 rounded-full border">• Carnes premium</span>
                  <span className="bg-card px-3 py-1 rounded-full border">• Vegetais da época</span>
                </div>
              </div>

              {/* Doces */}
              <div className="bg-category-doces/20 p-6 rounded-lg border">
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                  <span className="text-2xl mr-3">🧁</span>
                  Doces Tradicionais
                </h4>
                <p className="text-muted-foreground mb-4">
                  Seguimos receitas centenárias portuguesas, adaptadas com 
                  técnicas modernas. Utilizamos ovos frescos de quinta, 
                  nata do dia e açúcar refinado para texturas perfeitas.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="bg-card px-3 py-1 rounded-full border">• Receitas tradicionais</span>
                  <span className="bg-card px-3 py-1 rounded-full border">• Ovos de quinta</span>
                  <span className="bg-card px-3 py-1 rounded-full border">• Nata fresca diária</span>
                  <span className="bg-card px-3 py-1 rounded-full border">• Técnicas artesanais</span>
                </div>
              </div>

              {/* Bolos */}
              <div className="bg-category-bolos/20 p-6 rounded-lg border">
                <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                  <span className="text-2xl mr-3">🎂</span>
                  Bolos Personalizados
                </h4>
                <p className="text-muted-foreground mb-4">
                  Criamos bolos únicos para ocasiões especiais. Cada bolo é 
                  uma obra de arte comestível, com sabores equilibrados e 
                  decorações personalizadas conforme o seu pedido.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="bg-card px-3 py-1 rounded-full border">• Design personalizado</span>
                  <span className="bg-card px-3 py-1 rounded-full border">• Sabores únicos</span>
                  <span className="bg-card px-3 py-1 rounded-full border">• Decoração artística</span>
                  <span className="bg-card px-3 py-1 rounded-full border">• Ocasiões especiais</span>
                </div>
              </div>
            </div>
          </section>

          {/* Certificações */}
          <section className="bg-gradient-card p-6 rounded-lg border">
            <h3 className="text-xl font-semibold text-primary mb-3 text-center">
              Qualidade Certificada
            </h3>
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">
                Seguimos rigorosos padrões de higiene e segurança alimentar
              </p>
              <div className="flex justify-center space-x-4 text-sm">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">HACCP</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">ISO 22000</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Certificado Biológico</span>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProdutosModal;