import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailDialog } from "@/components/ProductDetailDialog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { ProductSorting, SortOption } from "@/components/ProductSorting";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SEO } from "@/components/SEO";
import { products, categories, Product } from "@/data/products";
import { departments } from "@/data/departments";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("featured");

  const featuredProducts = useMemo(() => {
    return products.filter((p) => p.isBestseller).slice(0, 8);
  }, []);

  const newProducts = useMemo(() => {
    return products.filter((p) => p.isNew).slice(0, 8);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      );
    }
    switch (sortOption) {
      case "price-low": return [...result].sort((a, b) => a.price - b.price);
      case "price-high": return [...result].sort((a, b) => b.price - a.price);
      case "rating": return [...result].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "newest": return [...result].sort((a, b) => (a.isNew ? -1 : 0) - (b.isNew ? -1 : 0));
      default: return [...result].sort((a, b) => (a.isBestseller ? -1 : 0) - (b.isBestseller ? -1 : 0));
    }
  }, [selectedCategory, searchQuery, sortOption]);

  const showFullCatalog = selectedCategory !== "All" || searchQuery.trim();

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        <Hero />

        {/* Shop by Department */}
        {!showFullCatalog && (
          <section className="py-16 px-4 bg-background">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Shop by Department</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                {departments.map((dept) => (
                  <Link
                    key={dept.slug}
                    to={`/department/${dept.slug}`}
                    className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-4xl group-hover:scale-110 transition-transform">{dept.icon}</span>
                    <span className="text-sm font-semibold text-center group-hover:text-primary transition-colors">{dept.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bestsellers */}
        {!showFullCatalog && (
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl md:text-4xl font-bold">Bestsellers</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.handle} product={product} onClick={() => openProduct(product)} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* New Arrivals */}
        {!showFullCatalog && newProducts.length > 0 && (
          <section className="py-16 px-4 bg-background">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">New Arrivals</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {newProducts.map((product) => (
                  <ProductCard key={product.handle} product={product} onClick={() => openProduct(product)} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Full catalog (when filtered/searched) */}
        {showFullCatalog && (
          <section id="products" className="py-12 px-4 bg-background">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <CategoryFilter categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
                <ProductSorting value={sortOption} onChange={setSortOption} />
              </div>
              {searchQuery && (
                <p className="text-sm text-muted-foreground mb-6">
                  {filteredProducts.length} result{filteredProducts.length !== 1 ? "s" : ""} for "{searchQuery}"
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.handle} product={product} onClick={() => openProduct(product)} />
                ))}
              </div>
              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-xl text-muted-foreground">
                    {searchQuery ? `No products found for "${searchQuery}"` : "No products found in this category."}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        <ProductDetailDialog
          product={selectedProduct}
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onProductSelect={setSelectedProduct}
        />

        <Newsletter />

        <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-glow text-white">
          <div className="container mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Move Forward?</h2>
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
