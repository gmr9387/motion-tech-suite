import { useState, useMemo } from "react";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductDetailDialog } from "@/components/ProductDetailDialog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { ProductSorting, SortOption } from "@/components/ProductSorting";
import { products, categories, Product } from "@/data/products";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("featured");

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query)) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Sort products
    switch (sortOption) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
        result = [...result].sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        break;
      case "featured":
      default:
        result = [...result].sort((a, b) => {
          if (a.isBestseller && !b.isBestseller) return -1;
          if (!a.isBestseller && b.isBestseller) return 1;
          return 0;
        });
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortOption]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main className="flex-1">
        <Hero />
        
        <section id="products" className="py-20 px-4 bg-background">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">
                Explore Our Collection
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Premium tech for the modern mover. Every product designed with precision and style.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
              <ProductSorting value={sortOption} onChange={setSortOption} />
            </div>

            {searchQuery && (
              <p className="text-sm text-muted-foreground mb-6">
                {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.handle}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  <ProductCard 
                    product={product}
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsDialogOpen(true);
                    }}
                  />
                </div>
              ))}
            </div>
            
            <ProductDetailDialog
              product={selectedProduct}
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
              onProductSelect={(product) => {
                setSelectedProduct(product);
              }}
            />

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">
                  {searchQuery 
                    ? `No products found for "${searchQuery}"`
                    : "No products found in this category."
                  }
                </p>
              </div>
            )}
          </div>
        </section>

        <Newsletter />

        <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-glow text-white">
          <div className="container mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Move Forward?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands who trust RioShop for their tech lifestyle.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
