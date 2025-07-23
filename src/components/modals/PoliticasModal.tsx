import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Truck, CreditCard, Clock, Shield, MapPin, Euro } from "lucide-react";

interface PoliticasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PoliticasModal = ({ isOpen, onClose }: PoliticasModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground text-center">
            Políticas de Entregas e Pagamentos
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Entregas */}
          <section>
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
              <Truck className="w-8 h-8 mr-3" />
              Entregas
            </h3>

            <div className="space-y-4">
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Zonas de Entrega
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <strong className="text-foreground">Entrega Gratuita:</strong>
                    <ul className="text-muted-foreground ml-4 mt-1">
                      <li>• Pedidos superiores a €25</li>
                      <li>• Raio de 10km da nossa loja</li>
                      <li>• Lisboa e arredores</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-foreground">Taxa de Entrega:</strong>
                    <ul className="text-muted-foreground ml-4 mt-1">
                      <li>• €3,50 (pedidos até €25)</li>
                      <li>• €5,00 (fora do raio de 10km)</li>
                      <li>• Consulte para outras zonas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Horários de Entrega
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <strong className="text-foreground">Segunda a Sexta:</strong>
                    <p className="text-muted-foreground">9h00 - 19h00</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Sábados:</strong>
                    <p className="text-muted-foreground">9h00 - 17h00</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Domingos:</strong>
                    <p className="text-muted-foreground">Apenas encomendas especiais</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Tempo de Entrega:</strong>
                    <p className="text-muted-foreground">2-4 horas após confirmação</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">Produtos Frescos</h4>
                <p className="text-sm text-muted-foreground">
                  Todos os nossos produtos são entregues frescos do dia. Para bolos personalizados, 
                  solicitamos 48h de antecedência mínima.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Pagamentos */}
          <section>
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
              <CreditCard className="w-8 h-8 mr-3" />
              Pagamentos
            </h3>

            <div className="space-y-4">
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Euro className="w-5 h-5 mr-2 text-primary" />
                  Métodos de Pagamento Aceites
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center p-3 bg-background rounded-lg border">
                    <div className="text-2xl mb-2">💳</div>
                    <p className="text-xs font-medium">Cartão de Débito/Crédito</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg border">
                    <div className="text-2xl mb-2">📱</div>
                    <p className="text-xs font-medium">MB Way</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg border">
                    <div className="text-2xl mb-2">💰</div>
                    <p className="text-xs font-medium">Dinheiro</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg border">
                    <div className="text-2xl mb-2">🏧</div>
                    <p className="text-xs font-medium">Transferência Bancária</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">Condições de Pagamento</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pagamento na entrega:</span>
                    <span className="text-foreground">Disponível</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pagamento antecipado:</span>
                    <span className="text-foreground">5% desconto</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Encomendas acima de €50:</span>
                    <span className="text-foreground">50% sinal obrigatório</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Segurança
                </h4>
                <p className="text-sm text-muted-foreground">
                  Todos os pagamentos online são processados através de plataformas seguras 
                  com encriptação SSL. Os seus dados pessoais e de pagamento estão sempre protegidos.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Política de Cancelamento */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Política de Cancelamento
            </h3>
            <div className="bg-gradient-card p-4 rounded-lg border space-y-2 text-sm">
              <div>
                <strong className="text-foreground">Cancelamento gratuito:</strong>
                <span className="text-muted-foreground ml-2">Até 2 horas antes da entrega</span>
              </div>
              <div>
                <strong className="text-foreground">Produtos personalizados:</strong>
                <span className="text-muted-foreground ml-2">Cancelamento até 24h antes</span>
              </div>
              <div>
                <strong className="text-foreground">Reembolsos:</strong>
                <span className="text-muted-foreground ml-2">Processados em 3-5 dias úteis</span>
              </div>
            </div>
          </section>

          {/* Contacto para Dúvidas */}
          <section className="bg-primary/5 p-4 rounded-lg border text-center">
            <h4 className="font-semibold text-foreground mb-2">Tem Dúvidas?</h4>
            <p className="text-sm text-muted-foreground mb-3">
              A nossa equipa está sempre disponível para esclarecer qualquer questão 
              sobre entregas e pagamentos.
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <span className="text-primary">📞 +351 912 345 678</span>
              <span className="text-primary">✉️ info@deliciascaseiras.pt</span>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PoliticasModal;