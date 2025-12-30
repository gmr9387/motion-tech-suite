import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
  showCount?: boolean;
}

export const StarRating = ({ rating, reviewCount, size = "sm", showCount = true }: StarRatingProps) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <Star
          key={i}
          className={cn(
            "fill-accent text-accent",
            size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
          )}
        />
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <div key={i} className="relative">
          <Star className={cn("text-muted-foreground/30", size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4")} />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className={cn("fill-accent text-accent", size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4")} />
          </div>
        </div>
      );
    } else {
      stars.push(
        <Star
          key={i}
          className={cn(
            "text-muted-foreground/30",
            size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
          )}
        />
      );
    }
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex">{stars}</div>
      {showCount && reviewCount !== undefined && (
        <span className={cn(
          "text-muted-foreground",
          size === "sm" ? "text-xs" : "text-sm"
        )}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
};
