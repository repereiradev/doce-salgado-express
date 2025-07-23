import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

interface QuemSomosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuemSomosModal = ({ isOpen, onClose }: QuemSomosModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground text-center">
            Quem Somos
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* História */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <span className="w-8 h-8 bg-gradient-button rounded-full flex items-center justify-center mr-3 text-primary-foreground">
                📖
              </span>
              A Nossa História
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nascemos do sonho de uma família apaixonada pela arte da confeitaria portuguesa. 
              Há mais de 15 anos, iniciámos esta jornada numa pequena cozinha, com receitas 
              transmitidas de geração em geração. O que começou como um hobby familiar 
              transformou-se numa verdadeira paixão por criar momentos especiais através 
              dos sabores únicos das nossas delícias caseiras.
            </p>
          </section>

          <Separator />

          {/* Missão */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <span className="w-8 h-8 bg-gradient-button rounded-full flex items-center justify-center mr-3 text-primary-foreground">
                🎯
              </span>
              A Nossa Missão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Proporcionar momentos de felicidade através de produtos artesanais de 
              qualidade superior. Acreditamos que cada produto deve ser feito com amor 
              e dedicação, utilizando apenas ingredientes frescos e selecionados. 
              O nosso objetivo é manter viva a tradição da confeitaria portuguesa, 
              adaptando-a aos gostos modernos sem perder a sua essência autêntica.
            </p>
          </section>

          <Separator />

          {/* Valores */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <span className="w-8 h-8 bg-gradient-button rounded-full flex items-center justify-center mr-3 text-primary-foreground">
                💎
              </span>
              Os Nossos Valores
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">Qualidade</h4>
                <p className="text-sm text-muted-foreground">
                  Utilizamos apenas ingredientes premium e seguimos rigorosos 
                  padrões de qualidade em cada etapa da produção.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">Tradição</h4>
                <p className="text-sm text-muted-foreground">
                  Preservamos receitas ancestrais portuguesas, mantendo vivos 
                  os sabores que marcaram gerações.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">Inovação</h4>
                <p className="text-sm text-muted-foreground">
                  Criamos novos sabores e apresentações, sempre respeitando 
                  a base tradicional dos nossos produtos.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">Sustentabilidade</h4>
                <p className="text-sm text-muted-foreground">
                  Priorizamos fornecedores locais e práticas sustentáveis 
                  para proteger o nosso planeta.
                </p>
              </div>
            </div>
          </section>

          {/* Equipa */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <span className="w-8 h-8 bg-gradient-button rounded-full flex items-center justify-center mr-3 text-primary-foreground">
                👥
              </span>
              A Nossa Equipa
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Somos uma equipa unida de artesãos apaixonados pela confeitaria. 
              Cada membro da nossa família "Delícias Caseiras" contribui com 
              a sua experiência e criatividade para garantir que cada produto 
              saia das nossas mãos com a perfeição que os nossos clientes merecem.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuemSomosModal;