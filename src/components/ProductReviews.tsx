import { Star, CheckCircle } from "lucide-react";
import { Review } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductReviewsProps {
  reviews: Review[];
  averageRating?: number;
  totalReviews?: number;
}

export const ProductReviews = ({ reviews, averageRating, totalReviews }: ProductReviewsProps) => {
  const ratingDistribution = [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: reviews.filter(r => Math.floor(r.rating) === stars).length,
    percentage: (reviews.filter(r => Math.floor(r.rating) === stars).length / reviews.length) * 100
  }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Rating Summary */}
        <div className="flex-shrink-0 text-center sm:text-left">
          <div className="text-4xl font-bold text-foreground">{averageRating?.toFixed(1) || "4.5"}</div>
          <div className="flex justify-center sm:justify-start mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={cn(
                  "w-4 h-4",
                  star <= Math.floor(averageRating || 4.5)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-muted-foreground"
                )}
              />
            ))}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Based on {totalReviews || reviews.length} reviews
          </div>
        </div>

        {/* Rating Bars */}
        <div className="flex-1 space-y-1.5">
          {ratingDistribution.map(({ stars, count, percentage }) => (
            <div key={stars} className="flex items-center gap-2 text-sm">
              <span className="w-8 text-muted-foreground">{stars}★</span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400 rounded-full transition-all"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="w-8 text-muted-foreground text-right">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4 pt-4 border-t">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-2 pb-4 border-b last:border-b-0">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{review.author}</span>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "w-3 h-3",
                          star <= review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-muted-foreground"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(review.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </div>
            <h4 className="font-medium text-foreground">{review.title}</h4>
            <p className="text-sm text-muted-foreground">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
