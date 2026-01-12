import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Package, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StockBadgeProps {
  stock?: number;
  showText?: boolean;
  className?: string;
}

export const StockBadge = ({ stock, showText = true, className }: StockBadgeProps) => {
  if (stock === undefined || stock === null) return null;

  if (stock === 0) {
    return (
      <Badge 
        variant="destructive" 
        className={cn("flex items-center gap-1", className)}
      >
        <XCircle className="w-3 h-3" />
        {showText && "Out of Stock"}
      </Badge>
    );
  }

  if (stock <= 5) {
    return (
      <Badge 
        className={cn(
          "flex items-center gap-1 bg-orange-500 text-white hover:bg-orange-600",
          className
        )}
      >
        <AlertTriangle className="w-3 h-3" />
        {showText && `Only ${stock} left`}
      </Badge>
    );
  }

  if (stock <= 20) {
    return (
      <Badge 
        variant="secondary" 
        className={cn("flex items-center gap-1", className)}
      >
        <Package className="w-3 h-3" />
        {showText && "Low Stock"}
      </Badge>
    );
  }

  return (
    <Badge 
      className={cn(
        "flex items-center gap-1 bg-green-500 text-white hover:bg-green-600",
        className
      )}
    >
      <Package className="w-3 h-3" />
      {showText && "In Stock"}
    </Badge>
  );
};
