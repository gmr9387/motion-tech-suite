import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { StarRating } from '@/components/StarRating';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart, setIsCartOpen } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof wishlist[0]) => {
    addToCart(product, 1);
    toast({
      title: "Added to cart!",
      description: `${product.title} added to your cart.`,
    });
    setIsCartOpen(true);
  };

  const handleAddAllToCart = () => {
    wishlist.forEach(product => {
      addToCart(product, 1);
    });
    toast({
      title: "All items added to cart!",
      description: `${wishlist.length} items added to your cart.`,
    });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="My Wishlist"
        description="View and manage your saved items. Add your favorite products to cart with one click."
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
            <div className="flex-1">
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <Heart className="h-8 w-8 text-destructive" />
                My Wishlist
              </h1>
              <p className="text-muted-foreground mt-1">
                {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
              </p>
            </div>
          </div>

          {wishlist.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent className="space-y-4">
                <Heart className="h-16 w-16 mx-auto text-muted-foreground/30" />
                <h2 className="text-xl font-semibold">Your wishlist is empty</h2>
                <p className="text-muted-foreground">
                  Save items you love by clicking the heart icon on products
                </p>
                <Link to="/#products">
                  <Button className="mt-4">Browse Products</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 justify-end">
                <Button variant="outline" onClick={clearWishlist}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
                <Button onClick={handleAddAllToCart}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add All to Cart
                </Button>
              </div>

              {/* Wishlist items */}
              <div className="space-y-4">
                {wishlist.map((product) => (
                  <Card key={product.handle} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        {/* Image */}
                        <div className="w-full sm:w-40 h-40 bg-muted flex-shrink-0">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-4xl opacity-20">
                              📱
                            </div>
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex-1 p-4 flex flex-col justify-between">
                          <div className="space-y-2">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="font-semibold text-lg">{product.title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {product.description}
                                </p>
                              </div>
                              <button
                                onClick={() => removeFromWishlist(product.handle)}
                                className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                                aria-label="Remove from wishlist"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>

                            {product.rating && (
                              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
                            )}
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-primary">
                                ${product.price.toFixed(2)}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through">
                                  ${product.originalPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                            <Button onClick={() => handleAddToCart(product)}>
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
