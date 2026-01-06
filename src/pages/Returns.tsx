import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Returns & Exchanges"
        description="Learn about RioShop's 30-day return policy. Easy returns and exchanges for unused items in original packaging."
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
            <h1 className="text-3xl font-bold">Returns & Exchanges</h1>
          </div>

          {/* Return Policy Overview */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <RotateCcw className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>30-Day Return Policy</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We want you to love your purchase. If you're not completely satisfied, you can return any unused item in its original packaging within 30 days of delivery for a full refund.
              </p>
            </CardContent>
          </Card>

          {/* What's Eligible */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Eligible for Return
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Unused items in original packaging</li>
                  <li>• Items with all tags attached</li>
                  <li>• Items returned within 30 days</li>
                  <li>• Defective or damaged products</li>
                  <li>• Wrong item received</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <XCircle className="h-5 w-5 text-destructive" />
                  Not Eligible
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Used or opened items</li>
                  <li>• Items without original packaging</li>
                  <li>• Items returned after 30 days</li>
                  <li>• Items damaged by customer</li>
                  <li>• Final sale items (marked as such)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* How to Return */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">How to Return an Item</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { step: 1, title: "Contact Us", desc: "Email support@rioshop.com with your order number and reason for return." },
                { step: 2, title: "Get Label", desc: "We'll send you a prepaid return shipping label within 24 hours." },
                { step: 3, title: "Ship It", desc: "Pack the item securely and drop it off at any carrier location." }
              ].map((item) => (
                <Card key={item.step}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Refund Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Refund Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">Processing:</strong> Once we receive your return, we'll inspect it within 2 business days.
              </p>
              <p>
                <strong className="text-foreground">Refund:</strong> Approved refunds are processed within 3-5 business days.
              </p>
              <p>
                <strong className="text-foreground">Bank Processing:</strong> Your bank may take an additional 5-10 business days to credit your account.
              </p>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Need help with a return?</p>
            <Link to="/contact">
              <Button>Contact Support</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
