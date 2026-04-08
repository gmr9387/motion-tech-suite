import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useAdminRole } from '@/hooks/useAdminRole';
import { supabase } from '@/integrations/supabase/client';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Loader2,
  Package,
  DollarSign,
  Users,
  ShoppingCart,
  Shield,
} from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

interface OrderItem {
  id: string;
  product_name: string;
  product_price: number;
  quantity: number;
  selected_color: string | null;
  selected_size: string | null;
}

interface AdminOrder {
  id: string;
  user_id: string;
  status: string;
  total_amount: number;
  shipping_address: Record<string, unknown>;
  created_at: string;
  notes: string | null;
  payment_method: string | null;
  order_items: OrderItem[];
}

const statusOptions = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30',
  processing: 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30',
  shipped: 'bg-purple-500/15 text-purple-700 dark:text-purple-400 border-purple-500/30',
  delivered: 'bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/30',
  cancelled: 'bg-destructive/15 text-destructive border-destructive/30',
};

const Admin = () => {
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: roleLoading } = useAdminRole();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingOrder, setUpdatingOrder] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  useEffect(() => {
    if (!authLoading && !roleLoading) {
      if (!user) {
        navigate('/auth');
        return;
      }
      if (!isAdmin) {
        navigate('/');
        toast({
          title: 'Access Denied',
          description: 'You do not have admin privileges.',
          variant: 'destructive',
        });
        return;
      }
      fetchOrders();

      // Realtime subscription for order updates
      const channel = supabase
        .channel('admin-orders')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'orders' },
          () => fetchOrders()
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [user, authLoading, isAdmin, roleLoading, navigate]);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select('*, order_items(*)')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setOrders(data as AdminOrder[]);
    }
    setLoading(false);
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    setUpdatingOrder(orderId);
    const { error } = await supabase
      .from('orders')
      .update({ status: newStatus })
      .eq('id', orderId);

    if (error) {
      toast({
        title: 'Update Failed',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({ title: 'Order Updated', description: `Status changed to ${newStatus}.` });
      setOrders(prev =>
        prev.map(o => (o.id === orderId ? { ...o, status: newStatus } : o))
      );
    }
    setUpdatingOrder(null);
  };

  const filteredOrders =
    filterStatus === 'all' ? orders : orders.filter(o => o.status === filterStatus);

  // Stats
  const totalRevenue = orders.reduce((s, o) => s + o.total_amount, 0);
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'pending').length;
  const uniqueCustomers = new Set(orders.map(o => o.user_id)).size;

  if (authLoading || roleLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Admin Dashboard | RioShop" description="Manage orders and inventory." />
      <Header
        onCategorySelect={() => {}}
        selectedCategory="All"
        searchQuery=""
        onSearchChange={() => {}}
      />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-7xl space-y-8">
          {/* Header */}
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage orders, track revenue, update statuses</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold">${totalRevenue.toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <ShoppingCart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                    <p className="text-2xl font-bold">{totalOrders}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Package className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-2xl font-bold">{pendingOrders}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-secondary">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Customers</p>
                    <p className="text-2xl font-bold">{uniqueCustomers}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Orders Table */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <CardTitle className="text-xl">Orders</CardTitle>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Orders</SelectItem>
                    {statusOptions.map(s => (
                      <SelectItem key={s} value={s}>
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              {filteredOrders.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No orders found.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredOrders.map(order => (
                        <TableRow key={order.id}>
                          <TableCell className="font-mono text-sm">
                            #{order.id.slice(0, 8).toUpperCase()}
                          </TableCell>
                          <TableCell className="text-sm">
                            {format(new Date(order.created_at), 'MMM d, yyyy')}
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              {order.order_items?.map(item => (
                                <div key={item.id} className="text-sm">
                                  {item.product_name} × {item.quantity}
                                </div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold">
                            ${order.total_amount.toFixed(2)}
                          </TableCell>
                          <TableCell className="text-sm">
                            {String(order.shipping_address?.name || 'N/A')}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={statusColors[order.status] || ''}
                            >
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Select
                              value={order.status}
                              onValueChange={v => updateOrderStatus(order.id, v)}
                              disabled={updatingOrder === order.id}
                            >
                              <SelectTrigger className="w-[140px] h-9">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {statusOptions.map(s => (
                                  <SelectItem key={s} value={s}>
                                    {s.charAt(0).toUpperCase() + s.slice(1)}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
