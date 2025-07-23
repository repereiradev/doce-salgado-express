import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus, Trash2, Phone, Mail, MessageSquare } from "lucide-react";
import { Product } from "./ProductCard";
import { useToast } from "@/hooks/use-toast";

export interface CartItem extends Product {
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

const CartModal = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart 
}: CartModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const formatPrice = (price: number) => `€${price.toFixed(2)}`;
  
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatPhoneNumber = (value: string) => {
    // Remove tudo exceto números
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara +351 XXX XXX XXX
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

  const generateOrderSummary = () => {
    let summary = "=== RESUMO DO PEDIDO ===\n\n";
    
    cartItems.forEach(item => {
      summary += `${item.name} - Qtd: ${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`;
    });
    
    summary += `\nTOTAL: ${formatPrice(total)}\n\n`;
    summary += "--- Pode adicionar comentários abaixo ---\n";
    
    return summary;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha pelo menos o nome e telefone.",
        variant: "destructive"
      });
      return;
    }

    const orderSummary = generateOrderSummary();
    const fullMessage = orderSummary + (formData.message || '');
    
    // Simular envio - pode ser WhatsApp ou email
    const whatsappNumber = "351912345678"; // Substitua pelo número real
    const whatsappMessage = encodeURIComponent(
      `Olá! Gostaria de fazer um pedido:\n\n${fullMessage}\n\nContacto: ${formData.name}\nTelefone: +351 ${formData.phone}\nEmail: ${formData.email || 'Não informado'}`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "Pedido enviado!",
      description: "O seu pedido foi enviado via WhatsApp. Entraremos em contacto em breve!",
    });
    
    onClearCart();
    onClose();
  };

  // Atualiza a mensagem automaticamente quando o carrinho muda
  const orderSummary = generateOrderSummary();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Carrinho de Compras
          </DialogTitle>
        </DialogHeader>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-lg">O seu carrinho está vazio</p>
          </div>
        ) : (
          <>
            {/* Lista de produtos */}
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-card rounded-lg border">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{formatPrice(item.price)} cada</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-foreground">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                    
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="text-right border-t pt-4">
                <p className="text-2xl font-bold text-primary">
                  Total: {formatPrice(total)}
                </p>
              </div>
            </div>

            {/* Formulário de pedido */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="flex items-center">
                    <span className="text-destructive mr-1">*</span>
                    Nome
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="O seu nome"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    <span className="text-destructive mr-1">*</span>
                    Telemóvel
                  </Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm bg-muted border border-r-0 border-input rounded-l-md">
                      +351
                    </span>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="912 345 678"
                      className="rounded-l-none"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  Email (opcional)
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Observações
                </Label>
                <Textarea
                  id="message"
                  value={orderSummary + formData.message}
                  onChange={(e) => {
                    // Permite apenas editar após o resumo do pedido
                    const newValue = e.target.value;
                    if (newValue.startsWith(orderSummary)) {
                      setFormData(prev => ({ 
                        ...prev, 
                        message: newValue.substring(orderSummary.length) 
                      }));
                    }
                  }}
                  placeholder="Comentários adicionais..."
                  rows={8}
                  className="font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  O resumo do pedido é gerado automaticamente. Pode adicionar comentários no final.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-button hover:shadow-soft"
                  size="lg"
                >
                  Enviar Pedido via WhatsApp
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  size="lg"
                >
                  Continuar Comprando
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;