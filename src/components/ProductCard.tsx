import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
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
        {product.tags[0] && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            {product.tags[0]}
          </Badge>
        )}
      </div>
      
      <CardContent className="p-5 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-primary">
              ${product.price.toFixed(2)}
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
