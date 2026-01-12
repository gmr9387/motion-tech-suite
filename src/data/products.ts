// Import all product images
import aeroMagChargerMount from "@/assets/products/mobile-tech_aero-mag-car-charger-mount_main.jpg";
import novalinkUsbCable from "@/assets/products/mobile-tech_novalink-usb-c-cable_main.jpg";
import skyChargePowerBrick from "@/assets/products/mobile-tech_skycharge-power-brick_main.jpg";
import magneticBatteryPack from "@/assets/products/mobile-tech_magnetic-battery-pack_main.jpg";
import luxeGripPhoneCase from "@/assets/products/mobile-tech_luxegrip-phone-case_main.jpg";
import pureSoundEarbuds from "@/assets/products/mobile-tech_puresound-earbuds_main.jpg";
import chargingDock from "@/assets/products/mobile-tech_charging-dock_main.jpg";
import wirelessChargingPad from "@/assets/products/mobile-tech_wireless-charging-pad_main.jpg";
import titanPowerBank from "@/assets/products/mobile-tech_titan-power-bank_main.jpg";
import lensProtector from "@/assets/products/mobile-tech_lens-protector_main.jpg";
import magsafeMount from "@/assets/products/mobile-tech_magsafe-mount_main.jpg";
import airpodCase from "@/assets/products/mobile-tech_airpod-case_main.jpg";
import gamingHeadphones from "@/assets/products/mobile-tech_gaming-headphones_main.jpg";
import bluetoothSpeaker from "@/assets/products/mobile-tech_bluetooth-speaker_main.jpg";
import phoneStand from "@/assets/products/mobile-tech_phone-stand_main.jpg";
import screenProtector from "@/assets/products/mobile-tech_screen-protector_main.jpg";
import laptopStand from "@/assets/products/mobile-tech_laptop-stand_main.jpg";
import fitnessTracker from "@/assets/products/mobile-tech_fitness-tracker_main.jpg";
import webcam from "@/assets/products/mobile-tech_webcam_main.jpg";
import wirelessKeyboard from "@/assets/products/mobile-tech_wireless-keyboard_main.jpg";
import securityCam from "@/assets/products/smart-home_security-cam_main.jpg";
import diffuser from "@/assets/products/smart-home_diffuser_main.jpg";
import ledStrip from "@/assets/products/smart-home_led-strip_main.jpg";
import airPurifier from "@/assets/products/smart-home_air-purifier_main.jpg";
import deskLamp from "@/assets/products/smart-home_desk-lamp_main.jpg";
import stairLights from "@/assets/products/smart-home_stair-lights_main.jpg";
import wallSwitch from "@/assets/products/smart-home_wall-switch_main.jpg";
import ledTower from "@/assets/products/smart-home_led-tower_main.jpg";
import smartDoorbell from "@/assets/products/smart-home_smart-doorbell_main.jpg";
import smartBulbs from "@/assets/products/smart-home_smart-bulbs_main.jpg";
import smartPlug from "@/assets/products/smart-home_smart-plug_main.jpg";
import robotVacuum from "@/assets/products/smart-home_robot-vacuum_main.jpg";
import thermostat from "@/assets/products/smart-home_thermostat_main.jpg";
import smartLock from "@/assets/products/smart-home_smart-lock_main.jpg";
import smartBottle from "@/assets/products/smart-home_smart-bottle_main.jpg";
import dashCam from "@/assets/products/car-tech_dash-cam_main.jpg";
import tireInflator from "@/assets/products/car-tech_tire-inflator_main.jpg";
import hudDisplay from "@/assets/products/car-tech_hud-display_main.jpg";
import wirelessCharger from "@/assets/products/car-tech_wireless-charger_main.jpg";
import blindspotMirror from "@/assets/products/car-tech_blindspot-mirror_main.jpg";
import steeringCover from "@/assets/products/car-tech_steering-cover_main.jpg";
import carDiffuser from "@/assets/products/car-tech_car-diffuser_main.jpg";
import doorLights from "@/assets/products/car-tech_door-lights_main.jpg";
import floorMats from "@/assets/products/car-tech_floor-mats_main.jpg";
import phoneHolder from "@/assets/products/car-tech_phone-holder_main.jpg";
import backupCamera from "@/assets/products/car-tech_backup-camera_main.jpg";
import interiorLights from "@/assets/products/car-tech_interior-lights_main.jpg";
import jumpStarter from "@/assets/products/car-tech_jump-starter_main.jpg";

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
  colors?: string[];
  sizes?: string[];
  rating?: number;
  reviewCount?: number;
  originalPrice?: number;
  isNew?: boolean;
  isBestseller?: boolean;
  stock?: number;
}

// Mock reviews data for product detail pages
export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

export const mockReviews: Record<string, Review[]> = {
  default: [
    {
      id: "r1",
      author: "Sarah M.",
      rating: 5,
      date: "2024-01-15",
      title: "Exactly what I needed!",
      content: "Amazing quality and fast shipping. The product exceeded my expectations.",
      verified: true
    },
    {
      id: "r2",
      author: "James K.",
      rating: 4,
      date: "2024-01-10",
      title: "Great value for money",
      content: "Good build quality and works as advertised. Would recommend to others.",
      verified: true
    },
    {
      id: "r3",
      author: "Emily R.",
      rating: 5,
      date: "2024-01-05",
      title: "Perfect addition to my setup",
      content: "Love the design and functionality. It integrates seamlessly with my other devices.",
      verified: false
    },
    {
      id: "r4",
      author: "Michael T.",
      rating: 4,
      date: "2023-12-28",
      title: "Solid product",
      content: "Does exactly what it says. Minor packaging issues but product itself is great.",
      verified: true
    }
  ]
};

export const products: Product[] = [
  // Mobile Tech
  {
    handle: "aero-mag-car-charger-mount",
    title: "AeroMag Car Charger Mount",
    description: "Premium magnetic car charger mount for effortless phone access. Sleek design, ultra-secure grip, and quick charge compatibility.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["charger"],
    costPrice: 18.00,
    price: 27.00,
    margin: "50%",
    image: aeroMagChargerMount,
    colors: ["Black", "Silver", "Midnight Blue"],
    rating: 4.8,
    reviewCount: 342,
    isBestseller: true,
    stock: 45
  },
  {
    handle: "novalink-usb-c-fast-cable",
    title: "NovaLink USB-C Fast Cable (6ft)",
    description: "Durable, high-speed USB-C cable for seamless device charging and data transfer. Elegant design complements luxury tech setups.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["usb cable"],
    costPrice: 12.00,
    price: 14.99,
    originalPrice: 18.00,
    margin: "50%",
    image: novalinkUsbCable,
    colors: ["Black", "White", "Space Gray"],
    sizes: ["3ft", "6ft", "10ft"],
    rating: 4.6,
    reviewCount: 891,
    stock: 3
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
    margin: "50%",
    image: skyChargePowerBrick,
    colors: ["White", "Black", "Gray"],
    rating: 4.7,
    reviewCount: 567,
    stock: 0
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
    margin: "50%",
    image: magneticBatteryPack,
    colors: ["Black", "White", "Navy Blue"],
    sizes: ["5,000mAh", "10,000mAh", "20,000mAh"],
    rating: 4.9,
    reviewCount: 234,
    isBestseller: true,
    stock: 15
  },
  {
    handle: "luxegrip-anti-slip-phone-case",
    title: "LuxeGrip Anti-Slip Phone Case",
    description: "Premium anti-slip phone case with luxury finish. Protects your device while maintaining sleek aesthetics.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["phone case"],
    costPrice: 10.00,
    price: 11.99,
    originalPrice: 15.00,
    margin: "50%",
    image: luxeGripPhoneCase,
    colors: ["Black", "Navy", "Rose Gold", "White"],
    rating: 4.5,
    reviewCount: 1203,
    stock: 87
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
    margin: "50%",
    image: pureSoundEarbuds,
    colors: ["Black", "White", "Space Gray"],
    rating: 4.7,
    reviewCount: 678,
    isNew: true,
    stock: 28
  },
  {
    handle: "motionguard-camera-lens-protector",
    title: "MotionGuard Camera Lens Protector",
    description: "High-quality lens protector for smartphones. Clear, durable, and keeps camera lenses pristine while on the move.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["accessory"],
    costPrice: 5.00,
    price: 7.50,
    margin: "50%",
    image: lensProtector,
    rating: 4.4,
    reviewCount: 445,
    stock: 156
  },
  {
    handle: "carbonshield-charging-dock",
    title: "CarbonShield Charging Dock",
    description: "Sleek carbon-finish charging dock. Supports multiple devices with minimal footprint and premium styling.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["dock"],
    costPrice: 25.00,
    price: 37.50,
    margin: "50%",
    image: chargingDock,
    colors: ["Carbon Black", "Silver", "White"],
    rating: 4.8,
    reviewCount: 312,
    stock: 5
  },
  {
    handle: "halo-glow-wireless-charging-pad",
    title: "HaloGlow Wireless Charging Pad",
    description: "Elegant wireless charging pad with fast charging support. Minimalist design with soft-glow LED indicators.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["charging pad"],
    costPrice: 22.00,
    price: 24.99,
    originalPrice: 33.00,
    margin: "50%",
    image: wirelessChargingPad,
    colors: ["White", "Black", "Rose Gold"],
    rating: 4.6,
    reviewCount: 523,
    stock: 42
  },
  {
    handle: "titan-power-bank-50k",
    title: "Titan Power Bank 50K",
    description: "High-capacity portable power bank with luxury finish. Rapid charge multiple devices seamlessly.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["power bank"],
    costPrice: 40.00,
    price: 60.00,
    margin: "50%",
    image: titanPowerBank,
    colors: ["Black", "Silver", "Navy"],
    sizes: ["20,000mAh", "30,000mAh", "50,000mAh"],
    rating: 4.9,
    reviewCount: 189,
    isBestseller: true,
    stock: 2
  },
  {
    handle: "starwave-magsafe-car-vent-mount",
    title: "StarWave Magsafe Car Vent Mount",
    description: "Premium MagSafe car mount with secure grip. Sleek metal finish, compatible with iPhone magnetic charging.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["car mount"],
    costPrice: 18.00,
    price: 27.00,
    margin: "50%",
    image: magsafeMount,
    colors: ["Black", "Silver", "Gunmetal"],
    rating: 4.7,
    reviewCount: 267
  },
  {
    handle: "airpod-case-carbon-pro",
    title: "AirPod Case Carbon Pro",
    description: "Luxury carbon-fiber finish protective case for AirPods. Sleek, durable, and minimalistic.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["accessory"],
    costPrice: 8.00,
    price: 12.00,
    margin: "50%",
    image: airpodCase,
    colors: ["Carbon Black", "Silver", "Rose Gold"],
    rating: 4.5,
    reviewCount: 834
  },
  {
    handle: "blaze-gaming-headphones",
    title: "Blaze Gaming Headphones",
    description: "Premium wireless gaming headphones with RGB lighting and immersive sound. Perfect for gamers and music lovers.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["headphones", "gaming"],
    costPrice: 50.00,
    price: 59.99,
    originalPrice: 75.00,
    margin: "50%",
    image: gamingHeadphones,
    colors: ["Black", "White", "Red"],
    rating: 4.8,
    reviewCount: 456,
    isBestseller: true
  },
  {
    handle: "wave-bluetooth-speaker",
    title: "Wave Bluetooth Speaker",
    description: "Portable Bluetooth speaker with premium fabric wrap. Powerful sound in a compact design.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["speaker"],
    costPrice: 35.00,
    price: 52.50,
    margin: "50%",
    image: bluetoothSpeaker,
    colors: ["Black", "Gray", "Navy", "Forest Green"],
    rating: 4.6,
    reviewCount: 378
  },
  {
    handle: "altitude-phone-stand",
    title: "Altitude Phone Stand",
    description: "Adjustable aluminum phone stand with weighted base. Perfect for desk use and video calls.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["stand"],
    costPrice: 20.00,
    price: 30.00,
    margin: "50%",
    image: phoneStand,
    colors: ["Silver", "Black", "Rose Gold"],
    rating: 4.7,
    reviewCount: 245
  },
  {
    handle: "crystal-screen-protector-kit",
    title: "Crystal Screen Protector Kit",
    description: "Premium tempered glass screen protectors with easy installation kit. Crystal clear protection.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["screen protector"],
    costPrice: 8.00,
    price: 12.00,
    margin: "50%",
    image: screenProtector,
    sizes: ["iPhone 14/15", "iPhone 14/15 Pro", "iPhone 14/15 Pro Max", "Samsung Galaxy"],
    rating: 4.4,
    reviewCount: 1567
  },
  {
    handle: "elevate-laptop-stand",
    title: "Elevate Laptop Stand",
    description: "Premium aluminum laptop stand with adjustable angles. Ergonomic design for comfortable work sessions.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["laptop stand", "desk"],
    costPrice: 35.00,
    price: 52.50,
    margin: "50%",
    image: laptopStand,
    colors: ["Silver", "Space Gray", "Rose Gold"],
    rating: 4.8,
    reviewCount: 234,
    isNew: true
  },
  {
    handle: "pulse-fitness-tracker",
    title: "Pulse Fitness Tracker",
    description: "Smart fitness band with heart rate monitoring, sleep tracking, and water resistance. Stay connected on the move.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["fitness", "wearable"],
    costPrice: 40.00,
    price: 59.99,
    margin: "50%",
    image: fitnessTracker,
    colors: ["Black", "Navy", "White"],
    rating: 4.6,
    reviewCount: 567,
    isNew: true
  },
  {
    handle: "clarity-4k-webcam",
    title: "Clarity 4K Webcam",
    description: "Professional 4K webcam with built-in ring light and auto-focus. Crystal clear video for streaming and calls.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["webcam", "streaming"],
    costPrice: 55.00,
    price: 82.50,
    margin: "50%",
    image: webcam,
    colors: ["Black"],
    rating: 4.9,
    reviewCount: 189,
    isBestseller: true
  },
  {
    handle: "whisper-wireless-keyboard",
    title: "Whisper Wireless Keyboard",
    description: "Ultra-slim wireless keyboard with whisper-quiet keys and multi-device connectivity. Elegant design for modern desks.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["keyboard", "desk"],
    costPrice: 45.00,
    price: 67.50,
    margin: "50%",
    image: wirelessKeyboard,
    colors: ["White", "Black", "Silver"],
    rating: 4.7,
    reviewCount: 312,
    isNew: true
  },
  
  // Smart Home
  {
    handle: "homevision-mini-security-cam",
    title: "HomeVision Mini Security Cam",
    description: "Compact smart security camera with HD video, motion detection, and cloud storage. Sleek, modern, and discreet.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["security camera"],
    costPrice: 40.00,
    price: 60.00,
    margin: "50%",
    image: securityCam,
    colors: ["White", "Black"],
    rating: 4.7,
    reviewCount: 445,
    isBestseller: true
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
    margin: "50%",
    image: diffuser,
    colors: ["White", "Bamboo", "Dark Wood"],
    rating: 4.5,
    reviewCount: 334
  },
  {
    handle: "luminap-strip-light-pro",
    title: "Lumina Strip Light Pro",
    description: "High-end LED strip light kit with color control and smart app integration. Modern, luxurious, and dynamic lighting.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["led strip"],
    costPrice: 35.00,
    price: 39.99,
    originalPrice: 52.50,
    margin: "50%",
    image: ledStrip,
    sizes: ["5ft", "10ft", "16ft", "32ft"],
    rating: 4.6,
    reviewCount: 789
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
    margin: "50%",
    image: airPurifier,
    colors: ["White", "Gray", "Black"],
    rating: 4.8,
    reviewCount: 223
  },
  {
    handle: "nightrunner-stair-motion-light",
    title: "NightRunner Stair Motion Light",
    description: "Smart motion-activated LED stair lights. Sleek, minimal, and designed for safety and style.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["motion light"],
    costPrice: 18.00,
    price: 27.00,
    margin: "50%",
    image: stairLights,
    rating: 4.4,
    reviewCount: 156
  },
  {
    handle: "brightwave-desk-lamp",
    title: "BrightWave Desk Lamp",
    description: "Luxury LED desk lamp with touch control, adjustable angles, and minimalist design.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["desk lamp"],
    costPrice: 30.00,
    price: 45.00,
    margin: "50%",
    image: deskLamp,
    colors: ["White", "Black", "Silver"],
    rating: 4.7,
    reviewCount: 289
  },
  {
    handle: "smarttouch-wall-switch",
    title: "SmartTouch Wall Switch",
    description: "Smart wall switch with touch-sensitive controls and Wi-Fi integration. Sleek, modern design.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["wall switch"],
    costPrice: 22.00,
    price: 33.00,
    margin: "50%",
    image: wallSwitch,
    colors: ["White", "Black", "Gray"],
    rating: 4.5,
    reviewCount: 412
  },
  {
    handle: "waveroom-led-corner-tower",
    title: "WaveRoom LED Corner Tower",
    description: "Luxury LED corner tower light with color control. Modern aesthetics with smart app integration.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["led tower"],
    costPrice: 32.00,
    price: 48.00,
    margin: "50%",
    image: ledTower,
    colors: ["Black", "White"],
    sizes: ["3ft", "5ft", "7ft"],
    rating: 4.8,
    reviewCount: 178,
    isNew: true
  },
  {
    handle: "visionsafe-smart-doorbell",
    title: "VisionSafe Smart Doorbell",
    description: "HD video doorbell with two-way audio and motion detection. Luxury finish with smart home integration.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["doorbell", "security"],
    costPrice: 45.00,
    price: 67.50,
    margin: "50%",
    image: smartDoorbell,
    colors: ["Silver", "Black", "Bronze"],
    rating: 4.9,
    reviewCount: 567,
    isBestseller: true
  },
  {
    handle: "colorshift-smart-bulbs-4pack",
    title: "ColorShift Smart Bulbs (4-Pack)",
    description: "RGB smart bulbs with voice control and app integration. Transform any room with millions of colors.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["smart bulbs", "lighting"],
    costPrice: 28.00,
    price: 34.99,
    originalPrice: 42.00,
    margin: "50%",
    image: smartBulbs,
    rating: 4.6,
    reviewCount: 923
  },
  {
    handle: "energywatch-smart-plug",
    title: "EnergyWatch Smart Plug",
    description: "Compact smart plug with energy monitoring. Control devices remotely and track power usage.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["smart plug"],
    costPrice: 12.00,
    price: 18.00,
    margin: "50%",
    image: smartPlug,
    colors: ["White", "Black"],
    rating: 4.5,
    reviewCount: 678
  },
  {
    handle: "cleanpath-robot-vacuum",
    title: "CleanPath Robot Vacuum",
    description: "Premium robot vacuum with laser navigation and smart mapping. Luxury cleaning on autopilot.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["robot vacuum", "cleaning"],
    costPrice: 180.00,
    price: 219.99,
    originalPrice: 270.00,
    margin: "50%",
    image: robotVacuum,
    colors: ["White", "Black", "Silver"],
    rating: 4.9,
    reviewCount: 345,
    isBestseller: true
  },
  {
    handle: "climate-smart-thermostat",
    title: "Climate Smart Thermostat",
    description: "Intelligent thermostat with learning capabilities and energy savings. Sleek round design with intuitive controls.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["thermostat", "climate"],
    costPrice: 85.00,
    price: 127.50,
    margin: "50%",
    image: thermostat,
    colors: ["White", "Black"],
    rating: 4.8,
    reviewCount: 234,
    isNew: true
  },
  {
    handle: "securekey-smart-lock",
    title: "SecureKey Smart Lock",
    description: "Fingerprint and keypad smart lock with remote access. Premium security meets modern convenience.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["smart lock", "security"],
    costPrice: 95.00,
    price: 142.50,
    margin: "50%",
    image: smartLock,
    colors: ["Black", "Silver", "Bronze"],
    rating: 4.9,
    reviewCount: 189,
    isBestseller: true
  },
  {
    handle: "hydro-smart-bottle",
    title: "Hydro Smart Bottle",
    description: "Smart water bottle with LED temperature display and hydration reminders. Stay healthy, stay stylish.",
    vendor: "SafeTech",
    category: "Smart Home",
    tags: ["smart bottle", "health"],
    costPrice: 25.00,
    price: 37.50,
    margin: "50%",
    image: smartBottle,
    colors: ["Black", "White", "Navy"],
    rating: 4.5,
    reviewCount: 267,
    isNew: true
  },
  
  // Car Tech
  {
    handle: "roadvision-dash-cam",
    title: "RoadVision Dash Cam",
    description: "Full HD dash cam with motion detection, night vision, and sleek design. Protect your ride in style.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["dash cam"],
    costPrice: 50.00,
    price: 75.00,
    margin: "50%",
    image: dashCam,
    colors: ["Black", "Silver"],
    rating: 4.7,
    reviewCount: 423,
    isBestseller: true
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
    margin: "50%",
    image: tireInflator,
    colors: ["Black", "Red", "Silver"],
    rating: 4.6,
    reviewCount: 289
  },
  {
    handle: "hud-drive-head-display",
    title: "HUD-Drive Head Display",
    description: "Heads-up display for cars with speed, navigation, and alerts. Sleek, futuristic design.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["HUD"],
    costPrice: 40.00,
    price: 49.99,
    originalPrice: 60.00,
    margin: "50%",
    image: hudDisplay,
    colors: ["Black", "Silver"],
    rating: 4.5,
    reviewCount: 178
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
    margin: "50%",
    image: wirelessCharger,
    colors: ["Black", "Silver", "Carbon Fiber"],
    rating: 4.8,
    reviewCount: 345
  },
  {
    handle: "blindspot-mirror-pro",
    title: "BlindSpot Mirror Pro",
    description: "Enhanced blind spot mirror for luxury vehicles. Sleek, high-quality materials, and improved safety.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["mirror"],
    costPrice: 12.00,
    price: 18.00,
    margin: "50%",
    image: blindspotMirror,
    rating: 4.4,
    reviewCount: 567
  },
  {
    handle: "motiongrip-steering-cover",
    title: "MotionGrip Steering Cover",
    description: "Premium leather steering cover with ergonomic grip. Modern design and enhanced control.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["steering cover"],
    costPrice: 18.00,
    price: 27.00,
    margin: "50%",
    image: steeringCover,
    colors: ["Black", "Brown", "Gray"],
    rating: 4.6,
    reviewCount: 234
  },
  {
    handle: "scentboost-car-diffuser",
    title: "ScentBoost Car Diffuser",
    description: "Luxury car diffuser with premium essential oils. Sleek design and discreet installation.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["car diffuser"],
    costPrice: 22.00,
    price: 33.00,
    margin: "50%",
    image: carDiffuser,
    colors: ["Black", "Silver", "Rose Gold"],
    rating: 4.5,
    reviewCount: 312
  },
  {
    handle: "nightbeam-car-door-lights",
    title: "NightBeam Car Door Lights",
    description: "LED door lights for vehicles. Stylish safety upgrade with sleek design.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["led lights"],
    costPrice: 18.00,
    price: 21.99,
    originalPrice: 27.00,
    margin: "50%",
    image: doorLights,
    colors: ["White", "Blue", "Red", "Amber"],
    rating: 4.4,
    reviewCount: 445
  },
  {
    handle: "carbon-elite-floor-mats",
    title: "Carbon Elite Floor Mats",
    description: "Luxury car floor mats with carbon fiber pattern and premium stitching. Style meets protection.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["floor mats"],
    costPrice: 45.00,
    price: 67.50,
    margin: "50%",
    image: floorMats,
    colors: ["Black", "Gray", "Beige"],
    rating: 4.7,
    reviewCount: 189
  },
  {
    handle: "grip-pro-phone-holder",
    title: "Grip Pro Phone Holder",
    description: "Universal car phone holder with suction cup and adjustable arm. Secure grip for any device.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["phone holder"],
    costPrice: 15.00,
    price: 22.50,
    margin: "50%",
    image: phoneHolder,
    colors: ["Black", "Silver", "Red"],
    rating: 4.5,
    reviewCount: 678
  },
  {
    handle: "rearvision-backup-camera",
    title: "RearVision Backup Camera",
    description: "HD backup camera with wide-angle lens and night vision. Easy installation, enhanced safety.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["backup camera", "safety"],
    costPrice: 35.00,
    price: 52.50,
    margin: "50%",
    image: backupCamera,
    colors: ["Black"],
    rating: 4.6,
    reviewCount: 234,
    isNew: true
  },
  {
    handle: "ambient-interior-led-kit",
    title: "Ambient Interior LED Kit",
    description: "RGB interior lighting kit with app control. Transform your car's interior with dynamic colors.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["interior lights", "led"],
    costPrice: 28.00,
    price: 42.00,
    margin: "50%",
    image: interiorLights,
    rating: 4.7,
    reviewCount: 345,
    isNew: true
  },
  {
    handle: "powerboost-jump-starter",
    title: "PowerBoost Jump Starter",
    description: "Portable jump starter with 20000mAh capacity. Start your car and charge devices on the go.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["jump starter", "power bank"],
    costPrice: 55.00,
    price: 82.50,
    margin: "50%",
    image: jumpStarter,
    colors: ["Black", "Red"],
    rating: 4.9,
    reviewCount: 178,
    isBestseller: true
  },
];

export const categories = ["All", "Mobile Tech", "Smart Home", "Car Tech"];
