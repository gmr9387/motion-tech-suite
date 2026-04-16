import { useCompare } from "@/contexts/CompareContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/StarRating";
import { Link, useNavigate } from "react-router-dom";
import { X, GitCompare, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Compare = () => {
  const { items, remove, clear } = useCompare();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const rows: { label: string; render: (p: typeof items[number]) => React.ReactNode }[] = [
    { label: "Price", render: (p) => <span className="font-semibold">${p.price.toFixed(2)}</span> },
    {
      label: "Original Price",
      render: (p) => (p.originalPrice ? <span className="text-muted-foreground line-through">${p.originalPrice.toFixed(2)}</span> : "—"),
    },
    { label: "Brand", render: (p) => p.vendor },
    { label: "Category", render: (p) => p.category },
    {
      label: "Rating",
      render: (p) =>
        p.rating ? (
          <div className="flex items-center gap-1">
            <StarRating rating={p.rating} size="sm" />
            <span className="text-xs text-muted-foreground">({p.reviewCount ?? 0})</span>
          </div>
        ) : "—",
    },
    {
      label: "Stock",
      render: (p) =>
        p.stock === undefined ? "—" :
        p.stock === 0 ? <span className="text-destructive">Out of stock</span> :
        p.stock < 10 ? <span className="text-accent-foreground">Low ({p.stock})</span> :
        <span className="text-primary">In stock</span>,
    },
    { label: "Colors", render: (p) => p.colors?.join(", ") || "—" },
    { label: "Sizes", render: (p) => p.sizes?.join(", ") || "—" },
    { label: "Description", render: (p) => <span className="text-sm text-muted-foreground line-clamp-3">{p.description}</span> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Compare Products | RioShop" description="Compare product specs side by side." />
      <Header onCategorySelect={() => {}} selectedCategory="All" searchQuery="" onSearchChange={() => {}} />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <GitCompare className="h-7 w-7" />
              Compare
            </h1>
            <p className="text-muted-foreground text-sm mt-1">Side-by-side specs for your selected items.</p>
          </div>
          {items.length > 0 && (
            <Button variant="outline" size="sm" onClick={clear}>Clear all</Button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border rounded-lg">
            <GitCompare className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">No products to compare</h2>
            <p className="text-muted-foreground mb-6">Add 2–4 products from any catalog page using the Compare button.</p>
            <Button onClick={() => navigate("/")}>Browse products</Button>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-3 w-32 sticky left-0 bg-muted/50 z-10">Spec</th>
                  {items.map((p) => (
                    <th key={p.handle} className="p-3 min-w-[200px] text-left align-top">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <Link to={`/product/${p.handle}`} className="font-semibold hover:underline line-clamp-2">
                          {p.title}
                        </Link>
                        <button
                          onClick={() => remove(p.handle)}
                          aria-label="Remove from compare"
                          className="text-muted-foreground hover:text-destructive shrink-0"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      {p.image && (
                        <Link to={`/product/${p.handle}`}>
                          <img src={p.image} alt={p.title} className="w-full h-32 object-cover rounded-md bg-muted" />
                        </Link>
                      )}
                      <Button
                        size="sm"
                        className="w-full mt-2"
                        disabled={p.stock === 0}
                        onClick={() => addToCart(p, 1, p.colors?.[0], p.sizes?.[0])}
                      >
                        <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                        Add to cart
                      </Button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-border last:border-0">
                    <td className="p-3 font-medium bg-muted/30 sticky left-0 z-10">{row.label}</td>
                    {items.map((p) => (
                      <td key={p.handle} className="p-3 align-top">{row.render(p)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Compare;
