import { useCompare } from "@/contexts/CompareContext";
import { Button } from "@/components/ui/button";
import { X, GitCompare, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const CompareBar = () => {
  const { items, remove, clear, count, max } = useCompare();
  const navigate = useNavigate();
  const location = useLocation();

  if (count === 0 || location.pathname === "/compare") return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-3xl">
      <div className="bg-background/95 backdrop-blur border border-border shadow-2xl rounded-xl p-3 flex items-center gap-3">
        <div className="flex items-center gap-2 text-sm font-medium shrink-0">
          <GitCompare className="h-4 w-4 text-primary" />
          <span className="hidden sm:inline">Compare</span>
          <span className="text-muted-foreground">({count}/{max})</span>
        </div>

        <div className="flex-1 flex gap-2 overflow-x-auto">
          {items.map((p) => (
            <div
              key={p.handle}
              className="relative shrink-0 w-12 h-12 rounded-md overflow-hidden border border-border bg-muted"
            >
              {p.image ? (
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                  {p.title.slice(0, 2)}
                </div>
              )}
              <button
                onClick={() => remove(p.handle)}
                aria-label={`Remove ${p.title} from compare`}
                className="absolute -top-1 -right-1 bg-background border border-border rounded-full w-4 h-4 flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
              >
                <X className="h-2.5 w-2.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button variant="ghost" size="sm" onClick={clear} className="hidden sm:inline-flex">
            Clear
          </Button>
          <Button
            size="sm"
            onClick={() => navigate("/compare")}
            disabled={count < 2}
          >
            Compare <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};
