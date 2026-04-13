import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { departments } from "@/data/departments";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const MegaMenu = () => {
  const [openDept, setOpenDept] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (slug: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDept(slug);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDept(null), 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {departments.map((dept) => (
        <div
          key={dept.slug}
          className="relative"
          onMouseEnter={() => handleMouseEnter(dept.slug)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to={`/department/${dept.slug}`}
            className={cn(
              "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
              "text-muted-foreground hover:text-foreground hover:bg-muted/50",
              openDept === dept.slug && "text-foreground bg-muted/50"
            )}
          >
            <span className="text-base mr-0.5">{dept.icon}</span>
            {dept.name}
            <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", openDept === dept.slug && "rotate-180")} />
          </Link>

          {/* Dropdown */}
          {openDept === dept.slug && (
            <div
              className="absolute top-full left-0 mt-1 w-64 bg-popover border border-border rounded-lg shadow-lg p-3 z-50"
              onMouseEnter={() => handleMouseEnter(dept.slug)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={`/department/${dept.slug}`}
                className="block px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted rounded-md mb-1"
              >
                All {dept.name} →
              </Link>
              {dept.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  to={`/department/${dept.slug}/${sub.slug}`}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
