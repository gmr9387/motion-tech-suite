import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, Package, ShoppingBag, CheckCircle2, Clock, Truck, PackageCheck, XCircle } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

interface OrderItem {
  id: string;
  product_handle: string;
  product_name: string;
  product_price: number;
  quantity: number;
  selected_color: string | null;
  selected_size: string | null;
}

interface Order {
  id: string;
  status: string;
  total_amount: number;
  shipping_address: Record<string, unknown>;
  created_at: string;
  order_items: OrderItem[];
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500',
  processing: 'bg-blue-500',
  shipped: 'bg-purple-500',
  delivered: 'bg-green-500',
  cancelled: 'bg-destructive'
};

const statusSteps = [
  { key: 'pending', label: 'Order Placed', icon: Clock },
  { key: 'processing', label: 'Processing', icon: Package },
  { key: 'shipped', label: 'Shipped', icon: Truck },
  { key: 'delivered', label: 'Delivered', icon: PackageCheck },
];

const getStepIndex = (status: string) => {
  if (status === 'cancelled') return -1;
  return statusSteps.findIndex(s => s.key === status);
};

const Orders = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
      return;
    }

    if (user) {
      fetchOrders();

      // Subscribe to realtime order status updates
      const channel = supabase
        .channel('orders-realtime')
        .on(
          'postgres_changes',
          {
            event: 'UPDATE',
            schema: 'public',
            table: 'orders',
            filter: `user_id=eq.${user.id}`,
          },
          (payload) => {
            setOrders((prev) =>
              prev.map((order) =>
                order.id === payload.new.id
                  ? { ...order, status: payload.new.status as string }
                  : order
              )
            );
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [user, authLoading, navigate]);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (*)
      `)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setOrders(data as Order[]);
    }
    setLoading(false);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="My Orders | RioShop"
        description="View your order history and track your RioShop purchases."
      />
      <Header 
        onCategorySelect={() => {}} 
        selectedCategory="All" 
        searchQuery="" 
        onSearchChange={() => {}} 
      />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">My Orders</h1>
          
          {orders.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-16 space-y-4">
                <ShoppingBag className="w-16 h-16 text-muted-foreground" />
                <h2 className="text-xl font-semibold">No orders yet</h2>
                <p className="text-muted-foreground text-center">
                  When you place orders, they'll appear here.
                </p>
                <Button asChild>
                  <Link to="/#products">Start Shopping</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Package className="w-5 h-5" />
                          Order #{order.id.slice(0, 8).toUpperCase()}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Placed on {format(new Date(order.created_at), 'MMMM d, yyyy')}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={`${statusColors[order.status]} text-white`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </Badge>
                        <span className="font-bold text-lg">
                          ${order.total_amount.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    {/* Order Tracking Timeline */}
                    {order.status === 'cancelled' ? (
                      <div className="flex items-center gap-2 text-destructive bg-destructive/10 rounded-lg p-3">
                        <XCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">Order Cancelled</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between px-2">
                        {statusSteps.map((step, i) => {
                          const currentIdx = getStepIndex(order.status);
                          const isComplete = i <= currentIdx;
                          const isCurrent = i === currentIdx;
                          const Icon = step.icon;
                          return (
                            <div key={step.key} className="flex flex-col items-center flex-1 relative">
                              {i > 0 && (
                                <div className={`absolute top-4 -left-1/2 w-full h-0.5 ${i <= currentIdx ? 'bg-primary' : 'bg-muted'}`} />
                              )}
                              <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${isComplete ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} ${isCurrent ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''}`}>
                                {isComplete && i < currentIdx ? (
                                  <CheckCircle2 className="w-4 h-4" />
                                ) : (
                                  <Icon className="w-4 h-4" />
                                )}
                              </div>
                              <span className={`text-xs mt-1 text-center ${isComplete ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                                {step.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Order Items */}
                    <div className="space-y-3">
                      {order.order_items?.map((item) => (
                        <div key={item.id} className="flex items-center justify-between py-2 border-b last:border-0">
                          <div className="flex-1">
                            <p className="font-medium">{item.product_name}</p>
                            <div className="flex gap-2 text-sm text-muted-foreground">
                              {item.selected_color && <span>Color: {item.selected_color}</span>}
                              {item.selected_size && <span>Size: {item.selected_size}</span>}
                              <span>Qty: {item.quantity}</span>
                            </div>
                          </div>
                          <p className="font-medium">
                            ${(item.product_price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        <strong>Shipping to:</strong>{' '}
                        {String(order.shipping_address?.name || '')}, {String(order.shipping_address?.street || '')}, {String(order.shipping_address?.city || '')}, {String(order.shipping_address?.state || '')} {String(order.shipping_address?.zip || '')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Orders;
