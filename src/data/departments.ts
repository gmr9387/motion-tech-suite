export interface Department {
  slug: string;
  name: string;
  description: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  slug: string;
  name: string;
  department: string;
}

export const departments: Department[] = [
  {
    slug: "mobile-tech",
    name: "Mobile Tech",
    description: "Phones, chargers, cables, and mobile accessories",
    icon: "📱",
    subcategories: [
      { slug: "chargers-cables", name: "Chargers & Cables", department: "mobile-tech" },
      { slug: "cases-protection", name: "Cases & Protection", department: "mobile-tech" },
      { slug: "mounts-stands", name: "Mounts & Stands", department: "mobile-tech" },
      { slug: "power-banks", name: "Power Banks", department: "mobile-tech" },
    ],
  },
  {
    slug: "smart-home",
    name: "Smart Home",
    description: "Smart lighting, security, climate control, and automation",
    icon: "🏠",
    subcategories: [
      { slug: "lighting", name: "Smart Lighting", department: "smart-home" },
      { slug: "security", name: "Security & Cameras", department: "smart-home" },
      { slug: "climate", name: "Climate & Air", department: "smart-home" },
      { slug: "automation", name: "Plugs & Switches", department: "smart-home" },
    ],
  },
  {
    slug: "car-tech",
    name: "Car Tech",
    description: "Dash cams, audio, GPS, and car accessories",
    icon: "🚗",
    subcategories: [
      { slug: "dash-cams", name: "Dash Cams & Cameras", department: "car-tech" },
      { slug: "car-audio", name: "Car Audio", department: "car-tech" },
      { slug: "car-accessories", name: "Interior Accessories", department: "car-tech" },
      { slug: "car-power", name: "Car Power & Charging", department: "car-tech" },
    ],
  },
  {
    slug: "computing",
    name: "Computing",
    description: "Laptops, monitors, keyboards, mice, and storage",
    icon: "💻",
    subcategories: [
      { slug: "keyboards-mice", name: "Keyboards & Mice", department: "computing" },
      { slug: "monitors-displays", name: "Monitors & Displays", department: "computing" },
      { slug: "storage", name: "Storage & Drives", department: "computing" },
      { slug: "laptop-accessories", name: "Laptop Accessories", department: "computing" },
    ],
  },
  {
    slug: "fitness-outdoor",
    name: "Fitness & Outdoor",
    description: "Fitness trackers, smart watches, and outdoor gear",
    icon: "🏃",
    subcategories: [
      { slug: "fitness-trackers", name: "Fitness Trackers", department: "fitness-outdoor" },
      { slug: "smart-watches", name: "Smart Watches", department: "fitness-outdoor" },
      { slug: "outdoor-gear", name: "Outdoor Gear", department: "fitness-outdoor" },
      { slug: "sports-accessories", name: "Sports Accessories", department: "fitness-outdoor" },
    ],
  },
  {
    slug: "home-office",
    name: "Home & Office",
    description: "Desks, chairs, lighting, and workspace accessories",
    icon: "🪑",
    subcategories: [
      { slug: "desk-accessories", name: "Desk Accessories", department: "home-office" },
      { slug: "lighting", name: "Office Lighting", department: "home-office" },
      { slug: "organizers", name: "Organizers & Storage", department: "home-office" },
      { slug: "ergonomics", name: "Ergonomic Gear", department: "home-office" },
    ],
  },
  {
    slug: "audio-entertainment",
    name: "Audio & Entertainment",
    description: "Headphones, speakers, streaming, and gaming accessories",
    icon: "🎧",
    subcategories: [
      { slug: "headphones", name: "Headphones & Earbuds", department: "audio-entertainment" },
      { slug: "speakers", name: "Speakers", department: "audio-entertainment" },
      { slug: "streaming", name: "Streaming Devices", department: "audio-entertainment" },
      { slug: "gaming", name: "Gaming Accessories", department: "audio-entertainment" },
    ],
  },
];

export const getDepartmentBySlug = (slug: string) =>
  departments.find((d) => d.slug === slug);

export const getSubcategoryBySlug = (deptSlug: string, subSlug: string) => {
  const dept = getDepartmentBySlug(deptSlug);
  return dept?.subcategories.find((s) => s.slug === subSlug);
};
