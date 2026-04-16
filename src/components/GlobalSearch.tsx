import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { products } from "@/data/products";
import { departments } from "@/data/departments";
import { Search } from "lucide-react";

interface GlobalSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const GlobalSearch = ({ open, onOpenChange }: GlobalSearchProps) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return {} as Record<string, typeof products>;
    const matches = products.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
    );
    return matches.reduce<Record<string, typeof products>>((acc, p) => {
      const dept = departments.find((d) => d.slug === p.department);
      const key = dept?.name || p.category;
      (acc[key] ||= []).push(p);
      return acc;
    }, {});
  }, [query]);

  const matchedDepartments = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return departments.slice(0, 5);
    return departments.filter((d) => d.name.toLowerCase().includes(q));
  }, [query]);

  const go = (path: string) => {
    onOpenChange(false);
    setQuery("");
    navigate(path);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search products, brands, and categories..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>
          <div className="flex flex-col items-center gap-2 py-6 text-muted-foreground">
            <Search className="h-8 w-8 opacity-40" />
            <span>No results for "{query}"</span>
          </div>
        </CommandEmpty>

        {matchedDepartments.length > 0 && (
          <CommandGroup heading="Departments">
            {matchedDepartments.map((d) => (
              <CommandItem
                key={d.slug}
                value={`dept-${d.slug}`}
                onSelect={() => go(`/department/${d.slug}`)}
              >
                <span className="mr-2 text-base">{d.icon}</span>
                {d.name}
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {Object.entries(grouped).map(([deptName, items], idx) => (
          <div key={deptName}>
            {(idx > 0 || matchedDepartments.length > 0) && <CommandSeparator />}
            <CommandGroup heading={deptName}>
              {items.slice(0, 6).map((p) => (
                <CommandItem
                  key={p.handle}
                  value={`${p.handle}-${p.title}`}
                  onSelect={() => go(`/product/${p.handle}`)}
                  className="flex items-center gap-3"
                >
                  {p.image && (
                    <img
                      src={p.image}
                      alt=""
                      className="h-8 w-8 rounded object-cover"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="truncate text-sm">{p.title}</div>
                    <div className="text-xs text-muted-foreground">
                      ${p.price.toFixed(2)}
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </div>
        ))}
      </CommandList>
    </CommandDialog>
  );
};
