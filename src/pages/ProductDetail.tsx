import { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { getProductByHandle, products, Product, mockReviews } from "@/data/products";
import { getDepartmentBySlug, getSubcategoryBySlug } from "@/data/departments";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/StarRating";
import { StockBadge } from "@/components/StockBadge";
import { ProductReviews } from "@/components/ProductReviews";
import { ReviewSubmissionForm } from "@/components/ReviewSubmissionForm";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailDialog } from "@/components/ProductDetailDialog";
import { ShoppingCart, Heart, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const product = getProductByHandle(handle || "");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dialogProduct, setDialogProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { addToCart, setIsCartOpen } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { toast } = useToast();

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedColor(product.colors?.[0] || null);
      setSelectedSize(product.sizes?.[0] || null);
      window.scrollTo(0, 0);
    }
  }, [product?.handle]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.department === product.department && p.handle !== product.handle)
      .slice(0, 4);
  }, [product?.handle]);

  // Recently viewed (stored in sessionStorage)
  useEffect(() => {
    if (!product) return;
    const key = "rio_recently_viewed";
    const stored = JSON.parse(sessionStorage.getItem(key) || "[]") as string[];
    const updated = [product.handle, ...stored.filter((h) => h !== product.handle)].slice(0, 8);
    sessionStorage.setItem(key, JSON.stringify(updated));
  }, [product?.handle]);

  const recentlyViewed = useMemo(() => {
    const stored = JSON.parse(sessionStorage.getItem("rio_recently_viewed") || "[]") as string[];
    return stored
      .filter((h) => h !== product?.handle)
      .map(getProductByHandle)
      .filter(Boolean)
      .slice(0, 4) as Product[];
  }, [product?.handle]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Product Not Found</h1>
            <Link to="/" className="text-primary hover:underline">Back to Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const department = getDepartmentBySlug(product.department);
  const sub = getSubcategoryBySlug(product.department, product.subcategory);
  const inWishlist = isInWishlist(product.handle);
  const isOutOfStock = product.stock === 0;
  const reviews = mockReviews.default;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...(department ? [{ label: department.name, href: `/department/${department.slug}` }] : []),
    ...(sub && department ? [{ label: sub.name, href: `/department/${department.slug}/${sub.slug}` }] : []),
    { label: product.title },
  ];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor || undefined, selectedSize || undefined);
    const parts = [selectedColor, selectedSize].filter(Boolean);
    toast({
      title: "Added to cart!",
      description: `${quantity}x ${product.title}${parts.length ? ` (${parts.join(", ")})` : ""} added.`,
    });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={`${product.title} | RioShop`} description={product.description} />
      <Header onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          {/* Product hero */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="aspect-square bg-muted rounded-xl overflow-hidden relative">
              {product.image ? (
                <img src={product.image} alt={product.title} className={cn("w-full h-full object-cover", isOutOfStock && "grayscale")} />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <span className="text-8xl opacity-20">{department?.icon || "📦"}</span>
                </div>
              )}
              {isOutOfStock && (
                <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                  <Badge variant="destructive" className="text-lg px-4 py-2">Out of Stock</Badge>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.isNew && <Badge className="bg-primary text-primary-foreground">New</Badge>}
                  {product.isBestseller && <Badge className="bg-accent text-accent-foreground">Bestseller</Badge>}
                  <StockBadge stock={product.stock} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">{product.title}</h1>
                <p className="text-muted-foreground mt-1">{product.vendor}</p>
              </div>

              {product.rating && (
                <StarRating rating={product.rating} reviewCount={product.reviewCount} />
              )}

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-primary">${(product.price * quantity).toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">${(product.originalPrice * quantity).toFixed(2)}</span>
                )}
              </div>

              <p className="text-foreground leading-relaxed">{product.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>

              {/* Color selector */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Color: {selectedColor}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => (
                      <Button key={c} variant={selectedColor === c ? "default" : "outline"} size="sm" onClick={() => setSelectedColor(c)}>{c}</Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Size: {selectedSize}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <Button key={s} variant={selectedSize === s ? "default" : "outline"} size="sm" onClick={() => setSelectedSize(s)}>{s}</Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <p className="text-sm font-medium mb-2">Quantity</p>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={quantity <= 1}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => setQuantity(Math.min(10, quantity + 1))} disabled={quantity >= 10}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <Button size="lg" className="flex-1" onClick={handleAddToCart} disabled={isOutOfStock}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => inWishlist ? removeFromWishlist(product.handle) : addToWishlist(product)}
                  className={cn(inWishlist && "text-destructive border-destructive")}
                >
                  <Heart className={cn("h-5 w-5", inWishlist && "fill-current")} />
                </Button>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
            <ReviewSubmissionForm productHandle={product.handle} />
            <div className="mt-6">
              <ProductReviews reviews={reviews} averageRating={product.rating} totalReviews={product.reviewCount} />
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((rp) => (
                  <ProductCard
                    key={rp.handle}
                    product={rp}
                    onClick={() => {
                      setDialogProduct(rp);
                      setIsDialogOpen(true);
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Recently Viewed */}
          {recentlyViewed.length > 0 && (
            <div className="mt-16 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {recentlyViewed.map((rp) => (
                  <ProductCard
                    key={rp.handle}
                    product={rp}
                    onClick={() => {
                      setDialogProduct(rp);
                      setIsDialogOpen(true);
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <ProductDetailDialog
          product={dialogProduct}
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onProductSelect={setDialogProduct}
        />
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
