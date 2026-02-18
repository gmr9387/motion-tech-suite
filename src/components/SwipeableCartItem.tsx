import { useRef, useState, useCallback } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';

interface CartItemData {
  product: {
    handle: string;
    title: string;
    price: number;
    image?: string;
  };
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

interface SwipeableCartItemProps {
  item: CartItemData;
  onRemove: (handle: string, color?: string, size?: string) => void;
  onUpdateQuantity: (handle: string, qty: number, color?: string, size?: string) => void;
  showSeparator: boolean;
}

export const SwipeableCartItem = ({ item, onRemove, onUpdateQuantity, showSeparator }: SwipeableCartItemProps) => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const THRESHOLD = 100;

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!isMobile) return;
    startXRef.current = e.touches[0].clientX;
    currentXRef.current = 0;
    setIsSwiping(true);
  }, [isMobile]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isSwiping || !isMobile) return;
    const diff = e.touches[0].clientX - startXRef.current;
    // Only allow left swipe
    const clamped = Math.min(0, Math.max(diff, -160));
    currentXRef.current = clamped;
    setOffsetX(clamped);
  }, [isSwiping, isMobile]);

  const handleTouchEnd = useCallback(() => {
    if (!isMobile) return;
    setIsSwiping(false);
    if (currentXRef.current < -THRESHOLD) {
      // Swipe past threshold — remove
      setOffsetX(-300);
      setTimeout(() => {
        onRemove(item.product.handle, item.selectedColor, item.selectedSize);
      }, 200);
    } else {
      setOffsetX(0);
    }
  }, [isMobile, item, onRemove]);

  return (
    <div className="relative overflow-hidden">
      {/* Delete background revealed on swipe */}
      <div className="absolute inset-y-0 right-0 flex items-center justify-end bg-destructive px-6 rounded-lg">
        <Trash2 className="h-5 w-5 text-destructive-foreground" />
      </div>

      {/* Swipeable content */}
      <div
        ref={containerRef}
        className="relative bg-background"
        style={{
          transform: `translateX(${offsetX}px)`,
          transition: isSwiping ? 'none' : 'transform 0.3s ease-out',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex gap-4">
          {/* Product Image */}
          <div className="h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
            {item.product.image ? (
              <img
                src={item.product.image}
                alt={item.product.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                No image
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm line-clamp-2">
              {item.product.title}
            </h4>
            {(item.selectedColor || item.selectedSize) && (
              <p className="text-xs text-muted-foreground mt-1">
                {[item.selectedColor, item.selectedSize].filter(Boolean).join(' / ')}
              </p>
            )}
            <p className="text-sm font-semibold mt-1">
              ${item.product.price.toFixed(2)}
            </p>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2 mt-2">
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={() => onUpdateQuantity(
                  item.product.handle,
                  item.quantity - 1,
                  item.selectedColor,
                  item.selectedSize
                )}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="text-sm font-medium w-8 text-center">
                {item.quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={() => onUpdateQuantity(
                  item.product.handle,
                  item.quantity + 1,
                  item.selectedColor,
                  item.selectedSize
                )}
              >
                <Plus className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 ml-auto text-destructive hover:text-destructive"
                onClick={() => onRemove(
                  item.product.handle,
                  item.selectedColor,
                  item.selectedSize
                )}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showSeparator && <Separator className="mt-4" />}
    </div>
  );
};
