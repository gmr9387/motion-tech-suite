import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Home, Search, ArrowLeft, PackageX } from "lucide-react";
import { departments } from "@/data/departments";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Page Not Found | RioShop" description="The page you're looking for doesn't exist." />
      <Header onCategorySelect={() => {}} selectedCategory="All" searchQuery="" onSearchChange={() => {}} />

      <main className="flex-1 flex items-center">
        <div className="container mx-auto px-4 py-16 text-center max-w-2xl">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
            <PackageX className="h-10 w-10 text-muted-foreground" />
          </div>

          <h1 className="text-7xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-3">Page not found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            We couldn't find{" "}
            <code className="px-1.5 py-0.5 bg-muted rounded text-xs">{location.pathname}</code>.
            It may have been moved or no longer exists.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Button onClick={() => navigate(-1)} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" /> Go back
            </Button>
            <Button asChild>
              <Link to="/"><Home className="h-4 w-4 mr-2" /> Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contact"><Search className="h-4 w-4 mr-2" /> Contact support</Link>
            </Button>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Or browse by department:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map((d) => (
                <Link
                  key={d.slug}
                  to={`/department/${d.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-muted hover:bg-muted/70 transition-colors"
                >
                  <span>{d.icon}</span>
                  {d.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
