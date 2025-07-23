import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContatosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContatosModal = ({ isOpen, onClose }: ContatosModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6, 9)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo seu contacto. Responderemos em breve!",
    });

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground text-center">
            Contactos
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
          {/* Informações de Contacto */}
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Como nos encontrar
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Morada</h4>
                    <p className="text-sm text-muted-foreground">
                      Rua das Delícias, 123<br />
                      1200-123 Lisboa<br />
                      Portugal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Telefone</h4>
                    <p className="text-sm text-muted-foreground">
                      +351 912 345 678<br />
                      +351 21 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <p className="text-sm text-muted-foreground">
                      info@deliciascaseiras.pt<br />
                      encomendas@deliciascaseiras.pt
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Horário de Funcionamento</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Segunda a Sexta: 8h00 - 19h00</p>
                      <p>Sábado: 8h00 - 17h00</p>
                      <p>Domingo: 10h00 - 14h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            {/* Mapa */}
            <section>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Localização
              </h3>
              <div className="bg-card rounded-lg border p-4 text-center">
                <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">
                      Mapa interativo<br />
                      Rua das Delícias, 123<br />
                      Lisboa
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Estacionamento gratuito disponível • Metro: Estação Marquês de Pombal
                </p>
              </div>
            </section>
          </div>

          {/* Formulário de Contacto */}
          <div>
            <section>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Envie-nos uma mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name" className="flex items-center">
                      <span className="text-destructive mr-1">*</span>
                      Nome
                    </Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="O seu nome"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contact-email" className="flex items-center">
                      <span className="text-destructive mr-1">*</span>
                      Email
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-phone">Telefone</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm bg-muted border border-r-0 border-input rounded-l-md">
                        +351
                      </span>
                      <Input
                        id="contact-phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="912 345 678"
                        className="rounded-l-none"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="contact-subject">Assunto</Label>
                    <Input
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="contact-message" className="flex items-center">
                    <span className="text-destructive mr-1">*</span>
                    Mensagem
                  </Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Escreva aqui a sua mensagem..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-button hover:shadow-soft"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </section>

            <Separator className="my-6" />

            {/* Redes Sociais */}
            <section>
              <h4 className="font-semibold text-foreground mb-3">Siga-nos</h4>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-gradient-button rounded-full flex items-center justify-center text-primary-foreground">
                  📘
                </div>
                <div className="w-10 h-10 bg-gradient-button rounded-full flex items-center justify-center text-primary-foreground">
                  📷
                </div>
                <div className="w-10 h-10 bg-gradient-button rounded-full flex items-center justify-center text-primary-foreground">
                  🐦
                </div>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContatosModal;