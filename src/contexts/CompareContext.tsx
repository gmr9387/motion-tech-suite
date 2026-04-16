import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { Product } from "@/data/products";
import { toast } from "sonner";

const STORAGE_KEY = "rioshop-compare";
const MAX_COMPARE = 4;

interface CompareContextType {
  items: Product[];
  add: (product: Product) => void;
  remove: (handle: string) => void;
  clear: () => void;
  isInCompare: (handle: string) => boolean;
  count: number;
  max: number;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const add = useCallback((product: Product) => {
    setItems((prev) => {
      if (prev.some((p) => p.handle === product.handle)) return prev;
      if (prev.length >= MAX_COMPARE) {
        toast.error(`You can compare up to ${MAX_COMPARE} products at a time.`);
        return prev;
      }
      toast.success(`${product.title} added to compare`);
      return [...prev, product];
    });
  }, []);

  const remove = useCallback((handle: string) => {
    setItems((prev) => prev.filter((p) => p.handle !== handle));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const isInCompare = useCallback(
    (handle: string) => items.some((p) => p.handle === handle),
    [items]
  );

  return (
    <CompareContext.Provider
      value={{ items, add, remove, clear, isInCompare, count: items.length, max: MAX_COMPARE }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used within CompareProvider");
  return ctx;
};
