import { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, Heart, Sun, Moon, User, LogOut, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { departments } from '@/data/departments';
import { cn } from '@/lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import { MegaMenu } from '@/components/MegaMenu';
import { GlobalSearch } from '@/components/GlobalSearch';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header = ({ 
  onCategorySelect, 
  selectedCategory, 
  searchQuery, 
  onSearchChange 
}: HeaderProps) => {
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const { theme, toggleTheme } = useTheme();
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [globalSearchOpen, setGlobalSearchOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              RioShop
            </span>
          </Link>

          {/* Desktop Search trigger (center) */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <button
              type="button"
              onClick={() => setGlobalSearchOpen(true)}
              className="relative w-full h-9 flex items-center text-left rounded-md border border-input bg-background hover:bg-muted/50 transition-colors px-3"
              aria-label="Search products"
            >
              <Search className="h-4 w-4 text-muted-foreground mr-2 shrink-0" />
              <span className="text-sm text-muted-foreground flex-1 truncate">
                Search products...
              </span>
              <kbd className="hidden lg:inline-flex pointer-events-none ml-2 h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>

          {/* Right actions */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Mobile Search Toggle */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setGlobalSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden sm:flex">
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            {/* User Account */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden sm:flex">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{profile?.full_name || 'My Account'}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/orders" className="flex items-center"><Package className="mr-2 h-4 w-4" />My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/account" className="flex items-center"><User className="mr-2 h-4 w-4" />My Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/wishlist" className="flex items-center"><Heart className="mr-2 h-4 w-4" />Wishlist ({wishlistCount})</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
            )}

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative hidden sm:flex" onClick={() => navigate('/wishlist')}>
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-destructive-foreground text-xs font-bold flex items-center justify-center">{wishlistCount}</span>
              )}
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">{totalItems > 99 ? '99+' : totalItems}</span>
              )}
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mega Menu (desktop) */}
        <div className="hidden lg:block border-t border-border/50 -mx-4 px-4">
          <MegaMenu />
        </div>

        <GlobalSearch open={globalSearchOpen} onOpenChange={setGlobalSearchOpen} />

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {departments.map((dept) => (
                <div key={dept.slug}>
                  <Link
                    to={`/department/${dept.slug}`}
                    className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{dept.icon}</span>
                    {dept.name}
                  </Link>
                  <div className="pl-8 flex flex-col">
                    {dept.subcategories.map((sub) => (
                      <Link
                        key={sub.slug}
                        to={`/department/${dept.slug}/${sub.slug}`}
                        className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile-only links */}
              <div className="border-t border-border pt-2 mt-2">
                <Button variant="ghost" size="sm" className="w-full justify-start" onClick={toggleTheme}>
                  {theme === 'light' ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </Button>
                {user && (
                  <>
                    <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                      <Link to="/account" onClick={() => setIsMobileMenuOpen(false)}><User className="mr-2 h-4 w-4" />Account</Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                      <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)}><Heart className="mr-2 h-4 w-4" />Wishlist ({wishlistCount})</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
