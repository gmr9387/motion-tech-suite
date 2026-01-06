import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, Clock, MapPin, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';

const shippingOptions = [
  {
    name: "Standard Shipping",
    time: "5-7 business days",
    price: "$5.99",
    freeOver: "$50+",
    icon: Package
  },
  {
    name: "Express Shipping",
    time: "2-3 business days",
    price: "$12.99",
    freeOver: null,
    icon: Truck
  },
  {
    name: "Overnight Shipping",
    time: "Next business day",
    price: "$24.99",
    freeOver: null,
    icon: Clock
  }
];

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Shipping Information"
        description="Learn about RioShop shipping options, delivery times, and costs. Free shipping on orders over $50."
      />
      <Header
        onCategorySelect={() => {}}
        selectedCategory="All"
        searchQuery=""
        onSearchChange={() => {}}
      />

      <main className="flex-1 py-12 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Shipping Information</h1>
          </div>

          {/* Shipping Options */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Shipping Options</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {shippingOptions.map((option) => (
                <Card key={option.name}>
                  <CardHeader className="pb-2">
                    <option.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{option.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">{option.price}</p>
                    <p className="text-muted-foreground">{option.time}</p>
                    {option.freeOver && (
                      <p className="text-sm text-green-600 mt-2">Free on orders {option.freeOver}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Delivery Areas */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Delivery Areas</h2>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-2">Currently shipping to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>All 50 United States</li>
                      <li>Canada (excluding remote areas)</li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">
                      International shipping coming soon! Sign up for our newsletter to be notified.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Policies */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Shipping Policies</h2>
            <div className="prose prose-gray max-w-none space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Order Processing:</strong> Orders placed before 2 PM EST Monday-Friday are processed the same day. Orders placed after 2 PM or on weekends will be processed the next business day.
              </p>
              <p>
                <strong className="text-foreground">Tracking:</strong> You will receive a shipping confirmation email with tracking information once your order has shipped.
              </p>
              <p>
                <strong className="text-foreground">Lost/Damaged Packages:</strong> If your package is lost or arrives damaged, please contact us within 48 hours of the expected delivery date.
              </p>
              <p>
                <strong className="text-foreground">P.O. Boxes:</strong> We can ship to P.O. boxes using Standard Shipping only.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
