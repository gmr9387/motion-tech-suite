export interface Product {
  handle: string;
  title: string;
  description: string;
  vendor: string;
  category: string;
  tags: string[];
  price: number;
  costPrice: number;
  margin: string;
  image?: string;
}

export const products: Product[] = [
  {
    handle: "aero-mag-car-charger-mount",
    title: "AeroMag Car Charger Mount",
    description: "Premium magnetic car charger mount for effortless phone access. Sleek design, ultra-secure grip, and quick charge compatibility.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["charger"],
    costPrice: 18.00,
    price: 27.00,
    margin: "50%"
  },
  {
    handle: "novalink-usb-c-fast-cable",
    title: "NovaLink USB-C Fast Cable (6ft)",
    description: "Durable, high-speed USB-C cable for seamless device charging and data transfer. Elegant design complements luxury tech setups.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["usb cable"],
    costPrice: 12.00,
    price: 18.00,
    margin: "50%"
  },
  {
    handle: "skycharge-20w-mini-power-brick",
    title: "SkyCharge 20W Mini Power Brick",
    description: "Compact 20W power brick with fast charging capabilities. Minimalist design with premium finish for everyday luxury tech.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["power brick"],
    costPrice: 15.00,
    price: 22.50,
    margin: "50%"
  },
  {
    handle: "magnetic-snap-battery-pack-pro",
    title: "Magnetic Snap Battery Pack Pro",
    description: "Wireless magnetic battery pack for fast charging on the go. Sleek, portable, and built for motion.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["battery pack"],
    costPrice: 20.00,
    price: 30.00,
    margin: "50%"
  },
  {
    handle: "luxegrip-anti-slip-phone-case",
    title: "LuxeGrip Anti-Slip Phone Case",
    description: "Premium anti-slip phone case with luxury finish. Protects your device while maintaining sleek aesthetics.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["phone case"],
    costPrice: 10.00,
    price: 15.00,
    margin: "50%"
  },
  {
    handle: "puresound-bluetooth-earbuds",
    title: "PureSound Bluetooth Earbuds",
    description: "Wireless earbuds with premium sound quality, sleek design, and secure fit for active lifestyles.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["earbuds"],
    costPrice: 30.00,
    price: 45.00,
    margin: "50%"
  },
  {
    handle: "homevision-mini-security-cam",
    title: "HomeVision Mini Security Cam",
    description: "Compact smart security camera with HD video, motion detection, and cloud storage. Sleek, modern, and discreet.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["security camera"],
    costPrice: 40.00,
    price: 60.00,
    margin: "50%"
  },
  {
    handle: "zenmotion-smart-diffuser",
    title: "ZenMotion Smart Diffuser",
    description: "Ultrasonic smart diffuser for aromatherapy with LED mood lighting. Elegant design for modern homes.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["diffuser"],
    costPrice: 25.00,
    price: 37.50,
    margin: "50%"
  },
  {
    handle: "luminap-strip-light-pro",
    title: "Lumina Strip Light Pro",
    description: "High-end LED strip light kit with color control and smart app integration. Modern, luxurious, and dynamic lighting.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["led strip"],
    costPrice: 35.00,
    price: 52.50,
    margin: "50%"
  },
  {
    handle: "airclean-mini-purifier",
    title: "AirClean Mini Purifier",
    description: "Compact air purifier with HEPA filter and quiet operation. Designed for style-conscious tech users.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["air purifier"],
    costPrice: 28.00,
    price: 42.00,
    margin: "50%"
  },
  {
    handle: "roadvision-dash-cam",
    title: "RoadVision Dash Cam",
    description: "Full HD dash cam with motion detection, night vision, and sleek design. Protect your ride in style.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["dash cam"],
    costPrice: 50.00,
    price: 75.00,
    margin: "50%"
  },
  {
    handle: "smarttire-digital-inflator",
    title: "SmartTire Digital Inflator",
    description: "Compact digital tire inflator with smart pressure readings. Modern, sleek, and easy to use.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["tire inflator"],
    costPrice: 35.00,
    price: 52.50,
    margin: "50%"
  },
  {
    handle: "hud-drive-head-display",
    title: "HUD-Drive Head Display",
    description: "Heads-up display for cars with speed, navigation, and alerts. Sleek, futuristic design.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["HUD"],
    costPrice: 40.00,
    price: 60.00,
    margin: "50%"
  },
  {
    handle: "jetport-wireless-car-charger",
    title: "JetPort Wireless Car Charger",
    description: "Fast wireless car charger with luxury design. Securely holds phone while charging.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["wireless charger"],
    costPrice: 30.00,
    price: 45.00,
    margin: "50%"
  },
];

export const categories = ["All", "Mobile Tech", "Smart Home", "Car Tech"];
