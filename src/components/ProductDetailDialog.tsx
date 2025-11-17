import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product, products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { ProductCard } from "./ProductCard";

interface ProductDetailDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProductSelect?: (product: Product) => void;
}

export const ProductDetailDialog = ({
  product,
  open,
  onOpenChange,
  onProductSelect,
}: ProductDetailDialogProps) => {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) return null;

  // Set initial selections when product changes
  if (product.colors && !selectedColor) {
    setSelectedColor(product.colors[0]);
  }
  if (product.sizes && !selectedSize) {
    setSelectedSize(product.sizes[0]);
  }

  // Get related products (same category, different product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.handle !== product.handle)
    .slice(0, 4);

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleBuyNow = () => {
    const variantInfo = [];
    if (selectedColor) variantInfo.push(`Color: ${selectedColor}`);
    if (selectedSize) variantInfo.push(`Size: ${selectedSize}`);
    const variantText = variantInfo.length > 0 ? ` (${variantInfo.join(", ")})` : "";

    toast({
      title: "Added to cart!",
      description: `${quantity}x ${product.title}${variantText} added to your cart.`,
    });
    onOpenChange(false);
    setQuantity(1);
  };

  const handleRelatedProductClick = (relatedProduct: Product) => {
    setQuantity(1);
    setSelectedColor(null);
    setSelectedSize(null);
    onProductSelect?.(relatedProduct);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <div className="text-6xl opacity-20">📱</div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">Category</p>
              <p className="font-medium">{product.category}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Description</p>
              <p className="text-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <p className="text-sm text-muted-foreground mb-2">Color</p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <p className="text-sm text-muted-foreground mb-2">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-medium w-12 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="text-3xl font-bold text-primary mb-4">
                ${(product.price * quantity).toFixed(2)}
              </div>
              
              <Button
                size="lg"
                className="w-full"
                onClick={handleBuyNow}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-4">Related Products</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.handle}
                  product={relatedProduct}
                  onClick={() => handleRelatedProductClick(relatedProduct)}
                />
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
