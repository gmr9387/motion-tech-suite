import { useState, useMemo } from "react";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductDetailDialog } from "@/components/ProductDetailDialog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { products, categories, Product } from "@/data/products";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

    return result;
  }, [selectedCategory, searchQuery]);

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

            <div className="mb-12">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            {searchQuery && (
              <p className="text-sm text-muted-foreground mb-6 text-center">
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
