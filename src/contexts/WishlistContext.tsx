import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Product, products as allProducts } from '@/data/products';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (handle: string) => void;
  clearWishlist: () => void;
  isInWishlist: (handle: string) => boolean;
  wishlistCount: number;
  loading: boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const LOCAL_KEY = 'rioshop-wishlist';

const getLocalWishlist = (): Product[] => {
  if (typeof window === 'undefined') return [];
  const saved = localStorage.getItem(LOCAL_KEY);
  return saved ? JSON.parse(saved) : [];
};

const handlesToProducts = (handles: string[]): Product[] =>
  handles
    .map(h => allProducts.find(p => p.handle === h))
    .filter((p): p is Product => !!p);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState<Product[]>(getLocalWishlist);
  const [loading, setLoading] = useState(false);

  // Fetch wishlist from DB when user logs in
  useEffect(() => {
    if (!user) {
      // Logged out — fall back to localStorage
      setWishlist(getLocalWishlist());
      return;
    }

    let cancelled = false;
    const fetchWishlist = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('wishlists')
        .select('product_handle')
        .eq('user_id', user.id);

      if (!cancelled && !error && data) {
        const handles = data.map(r => r.product_handle);

        // Merge any localStorage items the user added while logged out
        const localHandles = getLocalWishlist().map(p => p.handle);
        const merged = Array.from(new Set([...handles, ...localHandles]));

        // Persist any local-only items to DB
        const newHandles = localHandles.filter(h => !handles.includes(h));
        if (newHandles.length > 0) {
          await supabase.from('wishlists').insert(
            newHandles.map(h => ({ user_id: user.id, product_handle: h }))
          );
        }

        setWishlist(handlesToProducts(merged));
        localStorage.removeItem(LOCAL_KEY); // DB is now source of truth
      }
      if (!cancelled) setLoading(false);
    };

    fetchWishlist();
    return () => { cancelled = true; };
  }, [user]);

  // Persist to localStorage only when logged out
  useEffect(() => {
    if (!user) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(wishlist));
    }
  }, [wishlist, user]);

  const addToWishlist = useCallback(async (product: Product) => {
    setWishlist(prev => {
      if (prev.some(item => item.handle === product.handle)) return prev;
      return [...prev, product];
    });

    if (user) {
      await supabase.from('wishlists').insert({
        user_id: user.id,
        product_handle: product.handle,
      });
    }
  }, [user]);

  const removeFromWishlist = useCallback(async (handle: string) => {
    setWishlist(prev => prev.filter(item => item.handle !== handle));

    if (user) {
      await supabase
        .from('wishlists')
        .delete()
        .eq('user_id', user.id)
        .eq('product_handle', handle);
    }
  }, [user]);

  const isInWishlist = useCallback((handle: string) => {
    return wishlist.some(item => item.handle === handle);
  }, [wishlist]);

  const clearWishlist = useCallback(async () => {
    setWishlist([]);

    if (user) {
      await supabase.from('wishlists').delete().eq('user_id', user.id);
    }
  }, [user]);

  return (
    <WishlistContext.Provider value={{
      wishlist,
      addToWishlist,
      removeFromWishlist,
      clearWishlist,
      isInWishlist,
      wishlistCount: wishlist.length,
      loading,
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
