import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Cookie, Shield, Settings, Eye } from "lucide-react";

interface CookieBannerProps {
  onAccept: () => void;
  onReject: () => void;
  onCustomize: () => void;
}

const CookieBanner = ({ onAccept, onReject, onCustomize }: CookieBannerProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t shadow-floating p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">
                Utilizamos cookies para melhorar a sua experiência
              </h4>
              <p className="text-sm text-muted-foreground">
                Este site utiliza cookies para garantir o melhor funcionamento e personalizar conteúdos. 
                Pode configurar as suas preferências ou ver mais informações na nossa política de privacidade.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
            <Button variant="outline" size="sm" onClick={onCustomize}>
              <Settings className="w-4 h-4 mr-1" />
              Personalizar
            </Button>
            <Button variant="outline" size="sm" onClick={onReject}>
              Rejeitar
            </Button>
            <Button size="sm" onClick={onAccept}>
              Aceitar Todos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CookieCustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: CookiePreferences) => void;
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

const CookieCustomizationModal = ({ isOpen, onClose, onSave }: CookieCustomizationModalProps) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false,
  });

  const handleSave = () => {
    onSave(preferences);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center">
            <Cookie className="w-6 h-6 mr-2" />
            Configurações de Cookies
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <p className="text-muted-foreground">
            Escolha que tipos de cookies pretende aceitar. Pode alterar estas preferências 
            a qualquer momento.
          </p>

          <div className="space-y-4">
            {/* Necessários */}
            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-foreground flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Cookies Necessários
                </h4>
                <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">
                  Sempre ativo
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Estes cookies são essenciais para o funcionamento básico do site, 
                incluindo carrinho de compras e formulários de contacto.
              </p>
            </div>

            {/* Analytics */}
            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-foreground flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-primary" />
                  Cookies de Análise
                </h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <p className="text-sm text-muted-foreground">
                Ajudam-nos a entender como utiliza o site para melhorarmos os nossos serviços.
              </p>
            </div>

            {/* Marketing */}
            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-foreground">
                  Cookies de Marketing
                </h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <p className="text-sm text-muted-foreground">
                Utilizados para mostrar anúncios relevantes e medir a eficácia das campanhas.
              </p>
            </div>

            {/* Personalização */}
            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-foreground">
                  Cookies de Personalização
                </h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.personalization}
                    onChange={(e) => setPreferences(prev => ({ ...prev, personalization: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <p className="text-sm text-muted-foreground">
                Permitem personalizar conteúdos e funcionalidades com base nas suas preferências.
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button onClick={handleSave} className="flex-1">
              Guardar Preferências
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiePolicyModal = ({ isOpen, onClose }: CookiePolicyModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground text-center">
            Política de Cookies
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4 text-sm">
          <section>
            <h3 className="text-xl font-semibold text-primary mb-3">O que são cookies?</h3>
            <p className="text-muted-foreground mb-4">
              Os cookies são pequenos ficheiros de texto que são colocados no seu dispositivo 
              quando visita o nosso site. Eles ajudam-nos a tornar o site mais útil e eficiente, 
              permitindo-nos personalizar a sua experiência.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="text-xl font-semibold text-primary mb-3">Tipos de cookies que utilizamos</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">1. Cookies Necessários</h4>
                <p className="text-muted-foreground">
                  Estes cookies são essenciais para o funcionamento do site e não podem ser desativados. 
                  Incluem cookies de sessão, carrinho de compras e segurança.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">2. Cookies de Análise</h4>
                <p className="text-muted-foreground">
                  Utilizamos ferramentas como Google Analytics para entender como os visitantes 
                  interagem com o nosso site, ajudando-nos a melhorar a experiência do utilizador.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">3. Cookies de Marketing</h4>
                <p className="text-muted-foreground">
                  Estes cookies são utilizados para mostrar anúncios relevantes e medir 
                  a eficácia das nossas campanhas de marketing.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">4. Cookies de Personalização</h4>
                <p className="text-muted-foreground">
                  Permitem-nos recordar as suas preferências e personalizar conteúdos 
                  com base no seu comportamento no site.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h3 className="text-xl font-semibold text-primary mb-3">Como gerir cookies</h3>
            <p className="text-muted-foreground mb-4">
              Pode controlar e/ou eliminar cookies conforme desejar. Pode eliminar todos 
              os cookies que já estão no seu computador e pode configurar a maioria dos 
              navegadores para impedir que sejam colocados.
            </p>
            
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-semibold text-foreground mb-2">Configurações do navegador:</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Chrome: Definições → Privacidade e segurança → Cookies</li>
                <li>• Firefox: Opções → Privacidade e segurança → Cookies</li>
                <li>• Safari: Preferências → Privacidade → Cookies</li>
                <li>• Edge: Definições → Privacidade → Cookies</li>
              </ul>
            </div>
          </section>

          <Separator />

          <section>
            <h3 className="text-xl font-semibold text-primary mb-3">Contacto</h3>
            <p className="text-muted-foreground">
              Se tiver questões sobre a nossa política de cookies, pode contactar-nos:
            </p>
            <div className="bg-gradient-card p-4 rounded-lg border mt-3">
              <p className="text-foreground">
                📧 privacidade@deliciascaseiras.pt<br />
                📞 +351 912 345 678<br />
                📍 Rua das Delícias, 123, 1200-123 Lisboa
              </p>
            </div>
          </section>

          <section className="text-center">
            <p className="text-xs text-muted-foreground">
              Última atualização: Janeiro 2024
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { CookieBanner, CookieCustomizationModal, CookiePolicyModal };
export type { CookiePreferences };