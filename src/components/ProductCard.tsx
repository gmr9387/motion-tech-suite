import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Product } from "@/data/products";
import { StarRating } from "@/components/StarRating";
import { useWishlist } from "@/contexts/WishlistContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.handle);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.handle);
    } else {
      addToWishlist(product);
    }
  };

  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-border/50 cursor-pointer" onClick={onClick}>
      <div className="aspect-square bg-muted relative overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
            <div className="text-6xl opacity-20">📱</div>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.originalPrice && (
            <Badge className="bg-destructive text-destructive-foreground">
              -{discountPercentage}%
            </Badge>
          )}
          {product.isNew && (
            <Badge className="bg-primary text-primary-foreground">
              New
            </Badge>
          )}
          {product.isBestseller && !product.isNew && (
            <Badge className="bg-accent text-accent-foreground">
              Bestseller
            </Badge>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlistClick}
          className={cn(
            "absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200",
            "bg-background/80 backdrop-blur-sm hover:bg-background",
            inWishlist && "text-destructive"
          )}
        >
          <Heart className={cn("w-5 h-5", inWishlist && "fill-current")} />
        </button>
      </div>
      
      <CardContent className="p-5 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1">
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>

        {product.rating && (
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        )}
        
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-0.5">
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
            <div className="text-xs text-muted-foreground">
              {product.category}
            </div>
          </div>
          
          <Button 
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
