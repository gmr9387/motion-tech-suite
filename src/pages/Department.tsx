import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailDialog } from "@/components/ProductDetailDialog";
import { ProductSorting, SortOption } from "@/components/ProductSorting";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PriceFilter } from "@/components/PriceFilter";
import { SEO } from "@/components/SEO";
import { getDepartmentBySlug, getSubcategoryBySlug } from "@/data/departments";
import { getProductsByDepartment, getProductsBySubcategory, Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Department = () => {
  const { slug, subcategory } = useParams<{ slug: string; subcategory?: string }>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [minRating, setMinRating] = useState(0);

  const department = getDepartmentBySlug(slug || "");
  const sub = subcategory ? getSubcategoryBySlug(slug || "", subcategory) : null;

  const allProducts = useMemo(() => {
    if (subcategory && slug) {
      return getProductsBySubcategory(slug, subcategory);
    }
    if (slug) {
      return getProductsByDepartment(slug);
    }
    return [];
  }, [slug, subcategory]);

  const filteredProducts = useMemo(() => {
    let result = allProducts;

    // Price filter
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Rating filter
    if (minRating > 0) {
      result = result.filter((p) => (p.rating || 0) >= minRating);
    }

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sort
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
      default:
        result = [...result].sort((a, b) => {
          if (a.isBestseller && !b.isBestseller) return -1;
          if (!a.isBestseller && b.isBestseller) return 1;
          return 0;
        });
    }

    return result;
  }, [allProducts, priceRange, minRating, searchQuery, sortOption]);

  if (!department) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Department Not Found</h1>
            <Link to="/" className="text-primary hover:underline">Back to Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: department.name, href: `/department/${department.slug}` },
    ...(sub ? [{ label: sub.name }] : []),
  ];

  const maxPrice = Math.max(...allProducts.map((p) => p.price), 500);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${sub?.name || department.name} | RioShop`}
        description={department.description}
      />
      <Header
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        {/* Department Hero */}
        <section className="bg-gradient-to-br from-primary to-primary-glow text-white py-12 px-4">
          <div className="container mx-auto">
            <Breadcrumbs items={breadcrumbs} className="mb-4 text-white/70" />
            <div className="flex items-center gap-4">
              <span className="text-5xl">{department.icon}</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  {sub?.name || department.name}
                </h1>
                <p className="text-white/80 mt-1">{department.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Subcategory nav */}
        {!subcategory && (
          <section className="border-b border-border bg-background">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="default"
                  size="sm"
                  asChild
                >
                  <Link to={`/department/${department.slug}`}>All {department.name}</Link>
                </Button>
                {department.subcategories.map((sc) => (
                  <Button key={sc.slug} variant="outline" size="sm" asChild>
                    <Link to={`/department/${department.slug}/${sc.slug}`}>{sc.name}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </section>
        )}

        {subcategory && (
          <section className="border-b border-border bg-background">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/department/${department.slug}`}>← All {department.name}</Link>
                </Button>
                {department.subcategories.map((sc) => (
                  <Button
                    key={sc.slug}
                    variant={sc.slug === subcategory ? "default" : "outline"}
                    size="sm"
                    asChild
                  >
                    <Link to={`/department/${department.slug}/${sc.slug}`}>{sc.name}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Products grid with sidebar */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar filters */}
              <aside className="lg:w-64 shrink-0 space-y-6">
                <PriceFilter
                  min={0}
                  max={Math.ceil(maxPrice / 10) * 10}
                  value={priceRange}
                  onChange={setPriceRange}
                />

                <div>
                  <h3 className="font-semibold mb-3">Minimum Rating</h3>
                  <div className="flex gap-2">
                    {[0, 3, 4, 4.5].map((r) => (
                      <Button
                        key={r}
                        variant={minRating === r ? "default" : "outline"}
                        size="sm"
                        onClick={() => setMinRating(r)}
                      >
                        {r === 0 ? "All" : `${r}★+`}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
                </div>
              </aside>

              {/* Products */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">
                    {sub?.name || `All ${department.name}`}
                  </h2>
                  <ProductSorting value={sortOption} onChange={setSortOption} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.handle}
                      product={product}
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsDialogOpen(true);
                      }}
                    />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-xl text-muted-foreground">No products match your filters.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <ProductDetailDialog
          product={selectedProduct}
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onProductSelect={setSelectedProduct}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Department;
