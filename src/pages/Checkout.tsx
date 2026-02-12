import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, Shield, CheckCircle, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useIsMobile } from '@/hooks/use-mobile';

interface FormErrors {
  email?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : v;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (name === 'expiry') {
      formattedValue = formatExpiry(value);
    } else if (name === 'cvv') {
      formattedValue = value.replace(/[^0-9]/g, '').substring(0, 4);
    } else if (name === 'zipCode') {
      formattedValue = value.replace(/[^0-9-]/g, '').substring(0, 10);
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Enter a valid ZIP code';
    }

    // Card validation
    const cardDigits = formData.cardNumber.replace(/\s/g, '');
    if (!cardDigits) {
      newErrors.cardNumber = 'Card number is required';
    } else if (cardDigits.length < 15 || cardDigits.length > 16) {
      newErrors.cardNumber = 'Enter a valid card number';
    }

    // Expiry validation
    if (!formData.expiry) {
      newErrors.expiry = 'Expiry is required';
    } else {
      const [month, year] = formData.expiry.split('/');
      const now = new Date();
      const currentYear = now.getFullYear() % 100;
      const currentMonth = now.getMonth() + 1;
      
      if (!month || !year || parseInt(month) < 1 || parseInt(month) > 12) {
        newErrors.expiry = 'Invalid expiry date';
      } else if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
        newErrors.expiry = 'Card has expired';
      }
    }

    // CVV validation
    if (!formData.cvv) {
      newErrors.cvv = 'CVV is required';
    } else if (formData.cvv.length < 3) {
      newErrors.cvv = 'Enter a valid CVV';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      // If user is logged in, save order to database
      if (user) {
        const shippingAddress = {
          name: `${formData.firstName} ${formData.lastName}`,
          street: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zipCode
        };

        // Create order
        const { data: order, error: orderError } = await supabase
          .from('orders')
          .insert({
            user_id: user.id,
            total_amount: grandTotal,
            shipping_address: shippingAddress,
            payment_method: 'card',
            status: 'processing'
          })
          .select()
          .single();

        if (orderError) throw orderError;

        // Create order items
        const orderItems = items.map(item => ({
          order_id: order.id,
          product_handle: item.product.handle,
          product_name: item.product.title,
          product_price: item.product.price,
          quantity: item.quantity,
          selected_color: item.selectedColor || null,
          selected_size: item.selectedSize || null
        }));

        const { error: itemsError } = await supabase
          .from('order_items')
          .insert(orderItems);

        if (itemsError) throw itemsError;

        setOrderId(order.id);
         
         // Send order confirmation email (fire and forget)
         const emailData = {
           orderId: order.id,
           email: formData.email,
           customerName: `${formData.firstName} ${formData.lastName}`,
           items: items.map(item => ({
             product_name: item.product.title,
             product_price: item.product.price,
             quantity: item.quantity,
             selected_color: item.selectedColor,
             selected_size: item.selectedSize
           })),
           shippingAddress,
           subtotal: totalPrice,
           shipping: shippingCost,
           tax: taxAmount,
           total: grandTotal
         };
         
         supabase.functions.invoke('send-order-confirmation', {
           body: emailData
         }).then(response => {
           if (response.error) {
             console.error('Failed to send order confirmation email:', response.error);
           } else {
             console.log('Order confirmation email sent successfully');
           }
         }).catch(err => {
           console.error('Error invoking email function:', err);
         });
      }

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();

      toast({
        title: "Order Confirmed!",
        description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
      });
    } catch (error) {
      console.error('Checkout error:', error);
      setIsProcessing(false);
      toast({
        title: "Checkout failed",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive",
      });
    }
  };

  const shippingCost = totalPrice >= 50 ? 0 : 5.99;
  const taxRate = 0.08;
  const taxAmount = totalPrice * taxRate;
  const grandTotal = totalPrice + shippingCost + taxAmount;

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Your cart is empty</h1>
          <p className="text-muted-foreground">Add some products to checkout</p>
          <Button onClick={() => navigate('/')}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center">
          <CardContent className="pt-8 pb-8 space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h1 className="text-2xl font-bold">Order Confirmed!</h1>
            {orderId && (
              <p className="text-sm text-muted-foreground">
                Order ID: {orderId.slice(0, 8).toUpperCase()}
              </p>
            )}
            <p className="text-muted-foreground">
              Thank you for your purchase. You'll receive a confirmation email with your order details shortly.
            </p>
            <div className="pt-4 space-y-2">
              {user && (
                <Button asChild variant="outline" className="w-full">
                  <Link to="/orders">View My Orders</Link>
                </Button>
              )}
              <Button onClick={() => navigate('/')} className="w-full">
                Continue Shopping
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const InputWithError = ({ 
    id, 
    label, 
    error, 
    ...props 
  }: { 
    id: string; 
    label: string; 
    error?: string; 
  } & React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="space-y-1">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        className={error ? 'border-destructive focus-visible:ring-destructive' : ''}
        {...props}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate('/')} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <InputWithError
                    id="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    error={errors.email}
                  />
                </CardContent>
              </Card>

              {/* Shipping */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <InputWithError
                        id="firstName"
                        label="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        error={errors.firstName}
                      />
                      <InputWithError
                        id="lastName"
                        label="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        error={errors.lastName}
                      />
                    </div>
                    <InputWithError
                      id="address"
                      label="Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main St"
                      error={errors.address}
                    />
                    <div className="grid grid-cols-3 gap-4">
                      <InputWithError
                        id="city"
                        label="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        error={errors.city}
                      />
                      <InputWithError
                        id="state"
                        label="State"
                        value={formData.state}
                        onChange={handleInputChange}
                        error={errors.state}
                      />
                      <InputWithError
                        id="zipCode"
                        label="ZIP"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="12345"
                        error={errors.zipCode}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <InputWithError
                      id="cardNumber"
                      label="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      error={errors.cardNumber}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <InputWithError
                        id="expiry"
                        label="Expiry Date"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        error={errors.expiry}
                      />
                      <InputWithError
                        id="cvv"
                        label="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength={4}
                        error={errors.cvv}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Pay $${grandTotal.toFixed(2)}`}
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                Secure checkout powered by SSL encryption
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card>
              <CardHeader 
                className={isMobile ? 'cursor-pointer' : ''}
                onClick={() => isMobile && setSummaryOpen(!summaryOpen)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle>Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'})</CardTitle>
                  {isMobile && (
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">${grandTotal.toFixed(2)}</span>
                      {summaryOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  )}
                </div>
              </CardHeader>
              {(!isMobile || summaryOpen) && (
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3">
                    {items.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                          {item.product.image && (
                            <img
                              src={item.product.image}
                              alt={item.product.title}
                              className="h-full w-full object-cover"
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium line-clamp-1">{item.product.title}</p>
                          {(item.selectedColor || item.selectedSize) && (
                            <p className="text-xs text-muted-foreground">
                              {[item.selectedColor, item.selectedSize].filter(Boolean).join(' / ')}
                            </p>
                          )}
                          <p className="text-sm">
                            Qty: {item.quantity} × ${item.product.price.toFixed(2)}
                          </p>
                        </div>
                        <p className="text-sm font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>${taxAmount.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>

                  {totalPrice < 50 && (
                    <p className="text-sm text-muted-foreground text-center">
                      Add ${(50 - totalPrice).toFixed(2)} more for free shipping!
                    </p>
                  )}
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
