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
  department: string;
  subcategory: string;
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
    { id: "r1", author: "Sarah M.", rating: 5, date: "2024-01-15", title: "Exactly what I needed!", content: "Amazing quality and fast shipping. The product exceeded my expectations.", verified: true },
    { id: "r2", author: "James K.", rating: 4, date: "2024-01-10", title: "Great value for money", content: "Good build quality and works as advertised. Would recommend to others.", verified: true },
    { id: "r3", author: "Emily R.", rating: 5, date: "2024-01-05", title: "Perfect addition to my setup", content: "Love the design and functionality. It integrates seamlessly with my other devices.", verified: false },
    { id: "r4", author: "Michael T.", rating: 4, date: "2023-12-28", title: "Solid product", content: "Does exactly what it says. Minor packaging issues but product itself is great.", verified: true },
  ],
};

export const products: Product[] = [
  // ═══════════════════════════════════════════
  // MOBILE TECH
  // ═══════════════════════════════════════════

  // Chargers & Cables
  { handle: "aero-mag-car-charger-mount", title: "AeroMag Car Charger Mount", description: "Premium magnetic car charger mount for effortless phone access. Sleek design, ultra-secure grip, and quick charge compatibility.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "chargers-cables", tags: ["charger"], costPrice: 18.00, price: 27.00, margin: "50%", image: aeroMagChargerMount, colors: ["Black", "Silver", "Midnight Blue"], rating: 4.8, reviewCount: 342, isBestseller: true, stock: 45 },
  { handle: "novalink-usb-c-fast-cable", title: "NovaLink USB-C Fast Cable (6ft)", description: "Durable, high-speed USB-C cable for seamless device charging and data transfer.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "chargers-cables", tags: ["usb cable"], costPrice: 12.00, price: 14.99, originalPrice: 18.00, margin: "50%", image: novalinkUsbCable, colors: ["Black", "White", "Space Gray"], sizes: ["3ft", "6ft", "10ft"], rating: 4.6, reviewCount: 891, stock: 3 },
  { handle: "skycharge-power-brick", title: "SkyCharge 65W GaN Charger", description: "Compact 65W GaN power brick. Charges laptops, tablets, and phones simultaneously.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "chargers-cables", tags: ["charger", "gan"], costPrice: 28.00, price: 39.99, margin: "43%", image: skyChargePowerBrick, colors: ["White", "Black"], rating: 4.7, reviewCount: 567, isNew: true, stock: 28 },
  { handle: "wireless-charging-pad", title: "AuraCharge Wireless Pad", description: "Sleek Qi wireless charging pad with LED indicator. Compatible with all Qi-enabled devices.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "chargers-cables", tags: ["wireless charger"], costPrice: 15.00, price: 22.50, margin: "50%", image: wirelessChargingPad, colors: ["Black", "White"], rating: 4.5, reviewCount: 723, stock: 60 },
  { handle: "charging-dock", title: "TriCharge Dock Station", description: "3-in-1 charging dock for phone, watch, and earbuds. Elegant bamboo and aluminum design.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "chargers-cables", tags: ["charging dock"], costPrice: 32.00, price: 48.00, margin: "50%", image: chargingDock, colors: ["Black", "Silver"], rating: 4.6, reviewCount: 234, stock: 19 },
  { handle: "braided-lightning-cable", title: "ToughBraid Lightning Cable (6ft)", description: "Military-grade braided Lightning cable with reinforced connectors. Lifetime warranty included.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "chargers-cables", tags: ["lightning", "cable"], costPrice: 10.00, price: 16.99, margin: "70%", rating: 4.4, reviewCount: 1203, stock: 150 },
  { handle: "usb-c-to-hdmi-adapter", title: "ProLink USB-C to HDMI Adapter", description: "4K@60Hz USB-C to HDMI adapter for presentations and streaming. Plug and play, no drivers needed.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "chargers-cables", tags: ["adapter", "hdmi"], costPrice: 14.00, price: 22.99, margin: "64%", rating: 4.3, reviewCount: 445, stock: 72 },

  // Cases & Protection
  { handle: "luxegrip-phone-case", title: "LuxeGrip Premium Phone Case", description: "Military-grade protection meets luxury design. Shock-absorbent corners with premium textured grip.", vendor: "Shield Tech", category: "Mobile Tech", department: "mobile-tech", subcategory: "cases-protection", tags: ["phone case"], costPrice: 15.00, price: 24.99, margin: "67%", image: luxeGripPhoneCase, colors: ["Midnight Black", "Forest Green", "Ocean Blue", "Wine Red"], rating: 4.7, reviewCount: 1456, isBestseller: true, stock: 89 },
  { handle: "lens-protector", title: "CrystalShield Lens Protector", description: "Ultra-thin sapphire camera lens protector. Scratch-proof protection without affecting photo quality.", vendor: "Shield Tech", category: "Mobile Tech", department: "mobile-tech", subcategory: "cases-protection", tags: ["lens protector"], costPrice: 8.00, price: 12.00, margin: "50%", image: lensProtector, rating: 4.4, reviewCount: 678, stock: 200 },
  { handle: "screen-protector", title: "DiamondGuard Screen Protector", description: "9H tempered glass with oleophobic coating. Anti-fingerprint, anti-glare, and edge-to-edge coverage.", vendor: "Shield Tech", category: "Mobile Tech", department: "mobile-tech", subcategory: "cases-protection", tags: ["screen protector"], costPrice: 5.00, price: 9.99, margin: "100%", image: screenProtector, sizes: ["iPhone 15", "iPhone 15 Pro", "Samsung S24", "Pixel 8"], rating: 4.5, reviewCount: 2341, stock: 500 },
  { handle: "airpod-case", title: "PodShield AirPods Case", description: "Premium silicone AirPods case with carabiner clip. Drop-proof protection with wireless charging support.", vendor: "Shield Tech", category: "Mobile Tech", department: "mobile-tech", subcategory: "cases-protection", tags: ["airpods case"], costPrice: 6.00, price: 11.99, margin: "100%", image: airpodCase, colors: ["Black", "White", "Red", "Blue"], rating: 4.3, reviewCount: 891, stock: 120 },
  { handle: "tablet-folio-case", title: "EliteGuard Tablet Folio", description: "Premium leather-finish tablet folio with magnetic stand. Auto wake/sleep and Apple Pencil holder.", vendor: "Shield Tech", category: "Mobile Tech", department: "mobile-tech", subcategory: "cases-protection", tags: ["tablet case"], costPrice: 20.00, price: 34.99, margin: "75%", colors: ["Charcoal", "Navy", "Tan"], rating: 4.6, reviewCount: 334, stock: 45 },

  // Mounts & Stands
  { handle: "magsafe-mount", title: "MagLock Car Mount", description: "Ultra-strong MagSafe car mount with one-hand operation. Dashboard and vent compatible.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "mounts-stands", tags: ["car mount"], costPrice: 18.00, price: 29.99, margin: "67%", image: magsafeMount, colors: ["Black", "Silver"], rating: 4.7, reviewCount: 567, isBestseller: true, stock: 34 },
  { handle: "phone-stand", title: "ProAngle Phone Stand", description: "Adjustable aluminum phone stand for desk. 360° rotation with anti-slip base.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "mounts-stands", tags: ["phone stand"], costPrice: 12.00, price: 19.99, margin: "67%", image: phoneStand, colors: ["Silver", "Space Gray", "Rose Gold"], rating: 4.5, reviewCount: 445, stock: 67 },
  { handle: "laptop-stand", title: "ElevaDesk Laptop Stand", description: "Ergonomic aluminum laptop stand with heat-dissipation design. Compatible with 10-17 inch laptops.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "mounts-stands", tags: ["laptop stand"], costPrice: 22.00, price: 34.99, margin: "59%", image: laptopStand, colors: ["Silver", "Space Gray"], rating: 4.8, reviewCount: 890, isBestseller: true, stock: 42 },
  { handle: "tablet-wall-mount", title: "SmartMount Tablet Wall Mount", description: "Flush-mount tablet bracket for smart home control panels. Fits iPad and Samsung tablets.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "mounts-stands", tags: ["wall mount", "tablet"], costPrice: 16.00, price: 27.99, margin: "75%", rating: 4.2, reviewCount: 189, stock: 55 },

  // Power Banks
  { handle: "magnetic-battery-pack", title: "MagPulse Battery Pack", description: "5000mAh MagSafe battery pack with built-in stand. Slim enough to use while holding your phone.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "power-banks", tags: ["battery pack", "magsafe"], costPrice: 22.00, price: 32.00, margin: "45%", image: magneticBatteryPack, colors: ["Black", "White"], rating: 4.5, reviewCount: 456, stock: 67 },
  { handle: "titan-power-bank", title: "Titan 20000mAh Power Bank", description: "Massive 20000mAh capacity with 100W USB-C PD. Charges MacBooks, iPads, and phones.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "power-banks", tags: ["power bank"], costPrice: 38.00, price: 59.99, margin: "58%", image: titanPowerBank, colors: ["Matte Black", "Dark Blue"], rating: 4.8, reviewCount: 1234, isBestseller: true, stock: 25 },
  { handle: "solar-power-bank", title: "SunVolt Solar Power Bank", description: "10000mAh solar power bank with dual USB output. Built-in LED flashlight for emergencies.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "power-banks", tags: ["solar", "power bank"], costPrice: 20.00, price: 34.99, margin: "75%", colors: ["Green", "Orange", "Black"], rating: 4.1, reviewCount: 567, isNew: true, stock: 80 },
  { handle: "slim-card-charger", title: "CardCharge Ultra-Slim 3000mAh", description: "Credit-card sized emergency charger. Fits in your wallet, charges via built-in Lightning or USB-C tip.", vendor: "Drive Mode", category: "Mobile Tech", department: "mobile-tech", subcategory: "power-banks", tags: ["slim charger"], costPrice: 12.00, price: 19.99, margin: "67%", rating: 4.0, reviewCount: 234, stock: 110 },

  // ═══════════════════════════════════════════
  // SMART HOME
  // ═══════════════════════════════════════════

  // Smart Lighting
  { handle: "smart-bulbs", title: "LumaGlow Smart Bulbs (4-Pack)", description: "RGBW smart bulbs with 16 million colors. Voice control via Alexa, Google, and HomeKit.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "lighting", tags: ["smart bulbs"], costPrice: 20.00, price: 32.00, margin: "60%", image: smartBulbs, rating: 4.6, reviewCount: 2345, isBestseller: true, stock: 89 },
  { handle: "led-strip", title: "AmbientFlow LED Strip (16ft)", description: "Addressable RGB LED strip with music sync and app control. Cut-to-size installation.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "lighting", tags: ["led strip"], costPrice: 15.00, price: 24.99, margin: "67%", image: ledStrip, sizes: ["8ft", "16ft", "32ft"], rating: 4.5, reviewCount: 1890, stock: 120 },
  { handle: "led-tower", title: "SpectraSpire LED Tower Lamp", description: "Modern floor lamp with ambient LED glow. 12 preset scenes and custom color mixing.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "lighting", tags: ["floor lamp", "led"], costPrice: 35.00, price: 55.00, margin: "57%", image: ledTower, colors: ["White", "Black"], rating: 4.7, reviewCount: 345, isNew: true, stock: 18 },
  { handle: "stair-lights", title: "StepGlow Motion Stair Lights", description: "Battery-powered motion-activated stair lights. Easy peel-and-stick installation.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "lighting", tags: ["stair lights"], costPrice: 18.00, price: 28.00, margin: "56%", image: stairLights, rating: 4.4, reviewCount: 567, stock: 45 },
  { handle: "desk-lamp", title: "NovaBright Smart Desk Lamp", description: "LED desk lamp with adjustable color temperature and brightness. USB-C charging port built in.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "lighting", tags: ["desk lamp"], costPrice: 25.00, price: 38.00, margin: "52%", image: deskLamp, colors: ["White", "Black", "Rose Gold"], rating: 4.6, reviewCount: 789, stock: 33 },
  { handle: "outdoor-path-lights", title: "SolarPath Smart Garden Lights (6-Pack)", description: "Solar-powered pathway lights with warm white LEDs. Auto on/off with dusk sensor.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "lighting", tags: ["outdoor", "solar"], costPrice: 22.00, price: 36.99, margin: "68%", rating: 4.3, reviewCount: 445, stock: 60 },
  { handle: "ceiling-spot-lights", title: "Halo Recessed Smart Spots (4-Pack)", description: "5-inch recessed smart spotlights with color tuning. Schedule scenes for morning to evening transitions.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "lighting", tags: ["recessed", "smart lights"], costPrice: 30.00, price: 49.99, margin: "67%", rating: 4.5, reviewCount: 312, stock: 38 },

  // Security & Cameras
  { handle: "security-cam", title: "SentryPro 2K Security Camera", description: "Indoor/outdoor 2K security camera with night vision, motion alerts, and 2-way audio.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "security", tags: ["security camera"], costPrice: 35.00, price: 54.99, margin: "57%", image: securityCam, colors: ["White", "Black"], rating: 4.7, reviewCount: 1234, isBestseller: true, stock: 56 },
  { handle: "smart-doorbell", title: "RingView Pro Video Doorbell", description: "1080p video doorbell with package detection, HDR night vision, and pre-roll recording.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "security", tags: ["doorbell"], costPrice: 45.00, price: 69.99, margin: "56%", image: smartDoorbell, colors: ["Nickel", "Bronze"], rating: 4.6, reviewCount: 2456, isBestseller: true, stock: 28 },
  { handle: "smart-lock", title: "KeyGuard Smart Lock", description: "Fingerprint, PIN, and app-controlled smart deadbolt. Auto-lock and guest access codes.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "security", tags: ["smart lock"], costPrice: 55.00, price: 89.99, margin: "64%", image: smartLock, colors: ["Silver", "Black", "Bronze"], rating: 4.8, reviewCount: 890, stock: 15 },
  { handle: "motion-sensor-pack", title: "AlertZone Motion Sensors (3-Pack)", description: "Zigbee motion sensors with pet immunity. Instant push alerts and automation triggers.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "security", tags: ["motion sensor"], costPrice: 18.00, price: 29.99, margin: "67%", rating: 4.3, reviewCount: 567, stock: 90 },
  { handle: "window-contact-sensor", title: "GuardPoint Door/Window Sensors (4-Pack)", description: "Slim contact sensors for doors and windows. Pairs with most smart home hubs.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "security", tags: ["contact sensor"], costPrice: 14.00, price: 24.99, margin: "78%", rating: 4.2, reviewCount: 345, stock: 110 },

  // Climate & Air
  { handle: "thermostat", title: "ClimaSmart Pro Thermostat", description: "Learning thermostat with room sensors and energy reports. Saves up to 23% on energy bills.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "climate", tags: ["thermostat"], costPrice: 85.00, price: 129.99, margin: "53%", image: thermostat, colors: ["White", "Black"], rating: 4.8, reviewCount: 3456, isBestseller: true, stock: 22 },
  { handle: "air-purifier", title: "PureBreeze Air Purifier", description: "HEPA H13 air purifier with real-time AQI display. Covers up to 500 sq ft.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "climate", tags: ["air purifier"], costPrice: 65.00, price: 99.99, margin: "54%", image: airPurifier, rating: 4.7, reviewCount: 1567, stock: 30 },
  { handle: "diffuser", title: "AromaCloud Smart Diffuser", description: "App-controlled essential oil diffuser with mood lighting. Whisper-quiet ultrasonic mist.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "climate", tags: ["diffuser"], costPrice: 18.00, price: 28.00, margin: "56%", image: diffuser, colors: ["White", "Wood Grain", "Black"], rating: 4.4, reviewCount: 890, stock: 75 },
  { handle: "smart-fan", title: "BreezeIQ Smart Tower Fan", description: "Oscillating tower fan with voice control and sleep mode. 10 speed settings with timer.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "climate", tags: ["fan", "smart"], costPrice: 40.00, price: 64.99, margin: "63%", rating: 4.5, reviewCount: 678, stock: 35 },
  { handle: "smart-humidifier", title: "MistFlow Smart Humidifier", description: "4L cool mist humidifier with humidity sensor. Auto mode maintains ideal 40-60% humidity.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "climate", tags: ["humidifier"], costPrice: 25.00, price: 42.99, margin: "72%", rating: 4.3, reviewCount: 456, stock: 48 },

  // Plugs & Switches
  { handle: "smart-plug", title: "PowerSmart Mini Plug (2-Pack)", description: "Wi-Fi smart plug with energy monitoring. Schedule and control appliances from anywhere.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "automation", tags: ["smart plug"], costPrice: 10.00, price: 17.99, margin: "80%", image: smartPlug, rating: 4.5, reviewCount: 4567, isBestseller: true, stock: 200 },
  { handle: "wall-switch", title: "TouchPanel Smart Switch", description: "Capacitive touch smart light switch. Neutral wire required. Works with Alexa and Google.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "automation", tags: ["smart switch"], costPrice: 15.00, price: 24.99, margin: "67%", image: wallSwitch, colors: ["White", "Black"], rating: 4.4, reviewCount: 890, stock: 65 },
  { handle: "smart-power-strip", title: "FlexPower Smart Power Strip", description: "4 smart outlets + 4 USB ports. Individual outlet control and surge protection.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "automation", tags: ["power strip", "smart"], costPrice: 18.00, price: 29.99, margin: "67%", rating: 4.6, reviewCount: 1234, stock: 55 },
  { handle: "smart-dimmer", title: "SlideDim Smart Dimmer Switch", description: "Touch slider dimmer with gentle fade transitions. Compatible with dimmable LED, CFL, and incandescent.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "automation", tags: ["dimmer", "switch"], costPrice: 18.00, price: 32.99, margin: "83%", colors: ["White", "Ivory"], rating: 4.4, reviewCount: 567, stock: 42 },

  // ═══════════════════════════════════════════
  // CAR TECH
  // ═══════════════════════════════════════════

  // Dash Cams & Cameras
  { handle: "dash-cam", title: "RoadEye 4K Dash Cam", description: "4K front dash cam with GPS, night vision, and loop recording. 170° wide-angle lens.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "dash-cams", tags: ["dash cam"], costPrice: 55.00, price: 84.99, margin: "55%", image: dashCam, rating: 4.8, reviewCount: 2345, isBestseller: true, stock: 40 },
  { handle: "backup-camera", title: "RearView HD Backup Camera", description: "Waterproof 1080p backup camera with dynamic guidelines. Easy DIY installation.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "dash-cams", tags: ["backup camera"], costPrice: 25.00, price: 39.99, margin: "60%", image: backupCamera, rating: 4.5, reviewCount: 890, stock: 55 },
  { handle: "dual-dash-cam", title: "RoadEye Dual Cam System", description: "Front + rear dual dash cam system with parking mode. Cloud storage ready via Wi-Fi.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "dash-cams", tags: ["dash cam", "dual"], costPrice: 75.00, price: 119.99, margin: "60%", rating: 4.7, reviewCount: 678, isNew: true, stock: 22 },

  // Car Audio
  { handle: "car-bt-adapter", title: "AutoStream Bluetooth Adapter", description: "Bluetooth 5.3 car audio adapter with dual USB charging. Crystal-clear hands-free calls.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-audio", tags: ["bluetooth", "car audio"], costPrice: 10.00, price: 18.99, margin: "90%", rating: 4.4, reviewCount: 3456, isBestseller: true, stock: 180 },
  { handle: "car-subwoofer", title: "BassBox Under-Seat Subwoofer", description: "Slim-profile powered subwoofer that fits under car seats. 8-inch driver with 500W peak.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-audio", tags: ["subwoofer", "car audio"], costPrice: 55.00, price: 89.99, margin: "64%", rating: 4.6, reviewCount: 567, stock: 25 },
  { handle: "car-speaker-set", title: "ProSound 6.5\" Car Speakers (Pair)", description: "Component car speakers with silk dome tweeters. 300W peak power handling.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-audio", tags: ["car speakers"], costPrice: 30.00, price: 49.99, margin: "67%", rating: 4.5, reviewCount: 445, stock: 38 },

  // Interior Accessories
  { handle: "hud-display", title: "HoloView HUD Display", description: "OBD2 heads-up display showing speed, RPM, and diagnostics on your windshield.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-accessories", tags: ["hud display"], costPrice: 28.00, price: 44.99, margin: "61%", image: hudDisplay, rating: 4.5, reviewCount: 567, isNew: true, stock: 30 },
  { handle: "blindspot-mirror", title: "WideAngle Blindspot Mirrors (2-Pack)", description: "Adjustable convex blindspot mirrors with 360° rotation. Frameless design.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-accessories", tags: ["blindspot mirror"], costPrice: 5.00, price: 9.99, margin: "100%", image: blindspotMirror, rating: 4.3, reviewCount: 2345, stock: 300 },
  { handle: "steering-cover", title: "GripLux Steering Wheel Cover", description: "Breathable microfiber steering wheel cover with anti-slip pattern. Universal fit.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-accessories", tags: ["steering cover"], costPrice: 10.00, price: 16.99, margin: "70%", image: steeringCover, colors: ["Black", "Gray", "Tan"], rating: 4.4, reviewCount: 1234, stock: 90 },
  { handle: "car-diffuser", title: "AutoScent Car Diffuser", description: "Minimalist car air freshener with refillable essential oil pads. Vent-clip design.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-accessories", tags: ["car diffuser"], costPrice: 8.00, price: 13.99, margin: "75%", image: carDiffuser, colors: ["Silver", "Black", "Rose Gold"], rating: 4.2, reviewCount: 890, stock: 150 },
  { handle: "door-lights", title: "LogoGlow Door Projector Lights (2-Pack)", description: "LED door logo projector lights. Plug-and-play installation, universal fit.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-accessories", tags: ["door lights"], costPrice: 12.00, price: 19.99, margin: "67%", image: doorLights, rating: 4.3, reviewCount: 567, stock: 80 },
  { handle: "floor-mats", title: "AllWeather Custom Floor Mats", description: "Heavy-duty TPE floor mats with 3D contour fit. Waterproof and easy to clean.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-accessories", tags: ["floor mats"], costPrice: 30.00, price: 49.99, margin: "67%", image: floorMats, colors: ["Black", "Gray", "Tan"], rating: 4.7, reviewCount: 1890, isBestseller: true, stock: 45 },
  { handle: "interior-lights", title: "AmbientDrive Interior LED Kit", description: "RGB interior lighting kit with app control. Transform your car's interior with dynamic colors.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-accessories", tags: ["interior lights", "led"], costPrice: 28.00, price: 42.00, margin: "50%", image: interiorLights, rating: 4.7, reviewCount: 345, isNew: true },

  // Car Power & Charging
  { handle: "car-wireless-charger", title: "AutoCharge Qi Car Mount", description: "Auto-clamping wireless car charger mount. 15W fast charge with air vent and dashboard options.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-power", tags: ["wireless charger", "car mount"], costPrice: 18.00, price: 29.99, margin: "67%", image: wirelessCharger, colors: ["Black", "Silver"], rating: 4.6, reviewCount: 1234, stock: 55 },
  { handle: "phone-holder", title: "SturdyGrip Universal Phone Holder", description: "Heavy-duty phone holder with one-touch release. Dashboard, windshield, and vent compatible.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-power", tags: ["phone holder"], costPrice: 8.00, price: 14.99, margin: "87%", image: phoneHolder, colors: ["Black"], rating: 4.4, reviewCount: 3456, stock: 200 },
  { handle: "tire-inflator", title: "AirBoost Tire Inflator", description: "Cordless digital tire inflator with auto-stop. Preset pressure and LED light for emergencies.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-power", tags: ["tire inflator"], costPrice: 28.00, price: 44.99, margin: "61%", image: tireInflator, rating: 4.7, reviewCount: 890, stock: 35 },
  { handle: "jump-starter", title: "PowerBoost Jump Starter", description: "Portable jump starter with 20000mAh capacity. Start your car and charge devices on the go.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-power", tags: ["jump starter", "power bank"], costPrice: 55.00, price: 82.50, margin: "50%", image: jumpStarter, colors: ["Black", "Red"], rating: 4.9, reviewCount: 178, isBestseller: true },
  { handle: "car-usb-hub", title: "QuadPort Car USB Hub", description: "4-port USB car charger with QC3.0 + PD fast charging. 120W total output.", vendor: "Drive Mode", category: "Car Tech", department: "car-tech", subcategory: "car-power", tags: ["car charger", "usb"], costPrice: 12.00, price: 21.99, margin: "83%", rating: 4.5, reviewCount: 1567, stock: 120 },

  // ═══════════════════════════════════════════
  // COMPUTING
  // ═══════════════════════════════════════════

  // Keyboards & Mice
  { handle: "wireless-keyboard", title: "TypeFlow Wireless Keyboard", description: "Slim wireless keyboard with backlit keys and multi-device Bluetooth switching.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "keyboards-mice", tags: ["keyboard", "wireless"], costPrice: 28.00, price: 44.99, margin: "61%", image: wirelessKeyboard, colors: ["White", "Black", "Space Gray"], rating: 4.6, reviewCount: 1234, isBestseller: true, stock: 45 },
  { handle: "ergonomic-mouse", title: "VertiFlex Ergonomic Mouse", description: "Vertical ergonomic mouse that reduces wrist strain. 6 programmable buttons and adjustable DPI.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "keyboards-mice", tags: ["mouse", "ergonomic"], costPrice: 18.00, price: 29.99, margin: "67%", colors: ["Black", "Gray"], rating: 4.5, reviewCount: 890, stock: 60 },
  { handle: "mechanical-keyboard", title: "ClickForce Mechanical Keyboard", description: "Hot-swappable mechanical keyboard with RGB per-key lighting. Cherry MX compatible switches.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "keyboards-mice", tags: ["mechanical keyboard", "rgb"], costPrice: 45.00, price: 74.99, margin: "67%", colors: ["Black", "White"], rating: 4.8, reviewCount: 2345, isBestseller: true, stock: 28 },
  { handle: "trackpad", title: "GlidePad Wireless Trackpad", description: "Multi-touch wireless trackpad for desktop use. Glass surface with gesture support.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "keyboards-mice", tags: ["trackpad"], costPrice: 25.00, price: 42.99, margin: "72%", colors: ["Silver", "Space Gray"], rating: 4.4, reviewCount: 445, stock: 35 },
  { handle: "keyboard-wrist-rest", title: "CloudRest Keyboard Wrist Pad", description: "Memory foam wrist rest with cooling gel layer. Anti-slip base and machine washable cover.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "keyboards-mice", tags: ["wrist rest"], costPrice: 8.00, price: 14.99, margin: "87%", colors: ["Black", "Gray"], rating: 4.3, reviewCount: 678, stock: 95 },
  { handle: "mouse-pad-xl", title: "DeskMat XL Mouse Pad (36x18\")", description: "Extended desk mat with stitched edges. Non-slip rubber base and water-resistant surface.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "keyboards-mice", tags: ["mouse pad", "desk mat"], costPrice: 10.00, price: 18.99, margin: "90%", colors: ["Black", "Dark Gray", "Navy"], rating: 4.6, reviewCount: 1567, stock: 120 },

  // Monitors & Displays
  { handle: "portable-monitor", title: "ScreenGo 15.6\" Portable Monitor", description: "1080p IPS portable monitor with USB-C and mini-HDMI. Built-in speakers and kickstand.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "monitors-displays", tags: ["portable monitor"], costPrice: 85.00, price: 139.99, margin: "65%", rating: 4.7, reviewCount: 890, isNew: true, stock: 20 },
  { handle: "monitor-light-bar", title: "GlowBar Monitor Light Bar", description: "Asymmetric LED monitor light bar. No screen glare, auto-dimming ambient sensor.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "monitors-displays", tags: ["monitor light", "led"], costPrice: 22.00, price: 36.99, margin: "68%", colors: ["Black", "Silver"], rating: 4.7, reviewCount: 1234, isBestseller: true, stock: 45 },
  { handle: "monitor-arm", title: "FlexArm Monitor Mount", description: "Gas spring monitor arm for 17-32\" displays. Full 360° motion with cable management.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "monitors-displays", tags: ["monitor arm", "mount"], costPrice: 25.00, price: 42.99, margin: "72%", colors: ["Black", "Silver"], rating: 4.6, reviewCount: 567, stock: 38 },
  { handle: "webcam", title: "ClearView 4K Webcam", description: "4K webcam with auto-focus, HDR, and built-in privacy shutter. Great for streaming and calls.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "monitors-displays", tags: ["webcam"], costPrice: 35.00, price: 54.99, margin: "57%", image: webcam, rating: 4.6, reviewCount: 1456, stock: 40 },

  // Storage & Drives
  { handle: "portable-ssd", title: "SpeedVault 1TB Portable SSD", description: "1TB NVMe portable SSD with 1050MB/s read speeds. USB 3.2 Gen 2 with hardware encryption.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "storage", tags: ["ssd", "portable"], costPrice: 55.00, price: 89.99, margin: "64%", colors: ["Slate Gray", "Blue"], rating: 4.8, reviewCount: 2345, isBestseller: true, stock: 35 },
  { handle: "usb-flash-drive", title: "NanoStick 256GB USB-C Flash Drive", description: "Ultra-compact USB-C flash drive with 400MB/s transfer speeds. Waterproof and shockproof.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "storage", tags: ["flash drive", "usb-c"], costPrice: 15.00, price: 27.99, margin: "87%", sizes: ["64GB", "128GB", "256GB", "512GB"], rating: 4.5, reviewCount: 890, stock: 150 },
  { handle: "sd-card-reader", title: "MultiRead SD Card Reader", description: "USB-C/USB-A dual reader supporting SD, microSD, CF, and CFexpress cards.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "storage", tags: ["card reader"], costPrice: 12.00, price: 22.99, margin: "92%", colors: ["Space Gray"], rating: 4.4, reviewCount: 567, stock: 80 },
  { handle: "docking-station", title: "HubMax 12-in-1 Docking Station", description: "USB-C docking station with dual HDMI, Ethernet, SD slot, and 100W passthrough charging.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "storage", tags: ["docking station", "hub"], costPrice: 40.00, price: 69.99, margin: "75%", colors: ["Silver", "Space Gray"], rating: 4.7, reviewCount: 1234, isBestseller: true, stock: 25 },

  // Laptop Accessories
  { handle: "laptop-sleeve", title: "ShieldSleeve Laptop Case (14\")", description: "Water-resistant laptop sleeve with magnetic closure and accessory pocket.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "laptop-accessories", tags: ["laptop sleeve"], costPrice: 12.00, price: 22.99, margin: "92%", colors: ["Charcoal", "Navy", "Sage"], sizes: ["13\"", "14\"", "15.6\"", "16\""], rating: 4.5, reviewCount: 1890, stock: 100 },
  { handle: "laptop-cooling-pad", title: "FrostBase Laptop Cooling Pad", description: "Dual-fan laptop cooling pad with adjustable height. RGB underglow and USB hub.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "laptop-accessories", tags: ["cooling pad"], costPrice: 18.00, price: 29.99, margin: "67%", rating: 4.4, reviewCount: 678, stock: 50 },
  { handle: "privacy-screen", title: "ShieldView Privacy Screen Filter", description: "Anti-spy privacy screen filter for 14\" laptops. Reduces blue light and screen glare.", vendor: "Desktop Pro", category: "Computing", department: "computing", subcategory: "laptop-accessories", tags: ["privacy screen"], costPrice: 15.00, price: 26.99, margin: "80%", sizes: ["13.3\"", "14\"", "15.6\"", "16\""], rating: 4.3, reviewCount: 445, stock: 65 },

  // ═══════════════════════════════════════════
  // FITNESS & OUTDOOR
  // ═══════════════════════════════════════════

  // Fitness Trackers
  { handle: "fitness-tracker", title: "PulseTrack Fitness Band", description: "Advanced fitness tracker with heart rate, SpO2, and sleep tracking. 7-day battery life.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "fitness-trackers", tags: ["fitness tracker"], costPrice: 28.00, price: 44.99, margin: "61%", image: fitnessTracker, colors: ["Black", "Navy", "Coral"], rating: 4.5, reviewCount: 2345, isBestseller: true, stock: 55 },
  { handle: "smart-scale", title: "BodySync Smart Scale", description: "Wi-Fi body composition scale measuring 13 metrics. Syncs with Apple Health and Google Fit.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "fitness-trackers", tags: ["smart scale"], costPrice: 22.00, price: 36.99, margin: "68%", colors: ["White", "Black"], rating: 4.6, reviewCount: 1234, stock: 42 },
  { handle: "jump-rope-smart", title: "SkipSync Smart Jump Rope", description: "Weighted smart jump rope with rep counter and calorie tracking via Bluetooth app.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "fitness-trackers", tags: ["jump rope", "smart"], costPrice: 15.00, price: 27.99, margin: "87%", colors: ["Black", "Red"], rating: 4.3, reviewCount: 567, stock: 70 },
  { handle: "posture-corrector", title: "SpineAlign Posture Trainer", description: "Vibration-alert posture corrector that trains you to sit straight. Discreet under-shirt design.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "fitness-trackers", tags: ["posture"], costPrice: 18.00, price: 32.99, margin: "83%", sizes: ["S", "M", "L", "XL"], rating: 4.2, reviewCount: 445, stock: 55 },

  // Smart Watches
  { handle: "sport-smartwatch", title: "PeakWatch Sport GPS", description: "Rugged GPS smartwatch with 100+ sport modes, altimeter, and offline maps. 14-day battery.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "smart-watches", tags: ["smartwatch", "gps"], costPrice: 85.00, price: 149.99, margin: "76%", colors: ["Matte Black", "Forest Green", "Desert Tan"], rating: 4.8, reviewCount: 1890, isBestseller: true, stock: 18 },
  { handle: "casual-smartwatch", title: "StyleTime Hybrid Watch", description: "Classic analog look with smart notifications, step tracking, and 6-month battery life.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "smart-watches", tags: ["smartwatch", "hybrid"], costPrice: 55.00, price: 89.99, margin: "64%", colors: ["Silver/White", "Gold/Brown", "Black/Black"], rating: 4.5, reviewCount: 678, stock: 30 },
  { handle: "watch-bands-pack", title: "FlexBand Watch Straps (3-Pack)", description: "Silicone sport watch bands compatible with most 20mm/22mm smartwatches.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "smart-watches", tags: ["watch band"], costPrice: 8.00, price: 16.99, margin: "112%", sizes: ["20mm", "22mm"], colors: ["Black/Gray/Navy", "Black/Red/White"], rating: 4.4, reviewCount: 2345, stock: 200 },

  // Outdoor Gear
  { handle: "headlamp", title: "TrailBeam Rechargeable Headlamp", description: "1200 lumen rechargeable headlamp with red night-vision mode. IPX6 waterproof.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "outdoor-gear", tags: ["headlamp"], costPrice: 15.00, price: 26.99, margin: "80%", colors: ["Black", "Orange"], rating: 4.6, reviewCount: 890, stock: 60 },
  { handle: "bluetooth-thermometer", title: "TempTrack Wireless Thermometer", description: "Bluetooth meat/ambient thermometer with 4 probes. Real-time alerts on your phone.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "outdoor-gear", tags: ["thermometer", "bluetooth"], costPrice: 22.00, price: 38.99, margin: "77%", rating: 4.5, reviewCount: 567, stock: 40 },
  { handle: "portable-lantern", title: "CampGlow Collapsible Lantern", description: "Solar + USB rechargeable camping lantern. Collapsible design with power bank function.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "outdoor-gear", tags: ["lantern", "camping"], costPrice: 12.00, price: 21.99, margin: "83%", colors: ["Green", "Orange", "Gray"], rating: 4.4, reviewCount: 1234, stock: 85 },
  { handle: "insulated-bottle", title: "ThermoCore Insulated Bottle (32oz)", description: "Triple-insulated stainless steel bottle. Keeps cold 24hrs, hot 12hrs. Wide-mouth design.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "outdoor-gear", tags: ["water bottle"], costPrice: 14.00, price: 24.99, margin: "78%", colors: ["Matte Black", "Navy", "Sage", "Coral"], sizes: ["24oz", "32oz", "40oz"], rating: 4.7, reviewCount: 3456, isBestseller: true, stock: 100 },

  // Sports Accessories
  { handle: "bone-conduction-headphones", title: "OpenRun Bone Conduction Headphones", description: "Open-ear bone conduction headphones for safe outdoor listening. IP67 waterproof, 8hr battery.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "sports-accessories", tags: ["headphones", "bone conduction"], costPrice: 45.00, price: 79.99, margin: "78%", colors: ["Black", "Blue", "Red"], rating: 4.6, reviewCount: 1890, isBestseller: true, stock: 30 },
  { handle: "arm-band", title: "RunGrip Phone Armband", description: "Sweat-proof running armband with touch-through window. Reflective strips for night visibility.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "sports-accessories", tags: ["armband", "running"], costPrice: 6.00, price: 12.99, margin: "117%", sizes: ["S/M", "L/XL"], colors: ["Black", "Neon Green"], rating: 4.3, reviewCount: 1567, stock: 150 },
  { handle: "bike-phone-mount", title: "CycleLock Bike Phone Mount", description: "Vibration-dampened bike phone mount with 360° rotation. One-hand quick release.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "sports-accessories", tags: ["bike mount"], costPrice: 10.00, price: 19.99, margin: "100%", colors: ["Black"], rating: 4.5, reviewCount: 890, stock: 65 },
  { handle: "resistance-bands", title: "FlexForce Resistance Bands (5-Pack)", description: "Latex-free resistance bands in 5 strengths. Includes carry bag and exercise guide.", vendor: "ActiveGear", category: "Fitness & Outdoor", department: "fitness-outdoor", subcategory: "sports-accessories", tags: ["resistance bands", "fitness"], costPrice: 8.00, price: 16.99, margin: "112%", rating: 4.4, reviewCount: 2345, stock: 120 },

  // ═══════════════════════════════════════════
  // HOME & OFFICE
  // ═══════════════════════════════════════════

  // Desk Accessories
  { handle: "desk-organizer", title: "SlotMaster Desk Organizer", description: "Bamboo desk organizer with phone stand, pen holders, and cable management slots.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "desk-accessories", tags: ["desk organizer"], costPrice: 18.00, price: 29.99, margin: "67%", colors: ["Natural Bamboo", "Walnut"], rating: 4.5, reviewCount: 890, stock: 55 },
  { handle: "cable-management-kit", title: "TidyDesk Cable Management Kit", description: "10-piece cable management set with clips, sleeves, and ties. Adhesive-mount, damage-free.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "desk-accessories", tags: ["cable management"], costPrice: 8.00, price: 14.99, margin: "87%", colors: ["Black", "White"], rating: 4.3, reviewCount: 1234, stock: 150 },
  { handle: "desk-pad", title: "LeatherTouch Desk Pad (32x16\")", description: "Vegan leather desk pad with stitched edges. Water-resistant surface, dual-sided design.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "desk-accessories", tags: ["desk pad"], costPrice: 12.00, price: 22.99, margin: "92%", colors: ["Black/Gray", "Brown/Tan", "Navy/Gray"], rating: 4.6, reviewCount: 1567, isBestseller: true, stock: 80 },
  { handle: "wireless-charger-pad-desk", title: "DeskCharge Wireless Charging Pad", description: "Flush-mount wireless charging pad for desks. Cut a hole, drop in, and charge. 15W fast charge.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "desk-accessories", tags: ["wireless charger", "desk"], costPrice: 15.00, price: 27.99, margin: "87%", colors: ["Black", "White"], rating: 4.4, reviewCount: 445, stock: 42 },

  // Office Lighting
  { handle: "monitor-desk-lamp", title: "TaskBright Clamp Desk Lamp", description: "Adjustable architect-style clamp lamp with 5 color temps and touch dimming.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "lighting", tags: ["desk lamp", "clamp"], costPrice: 22.00, price: 36.99, margin: "68%", colors: ["Black", "White", "Silver"], rating: 4.6, reviewCount: 890, stock: 38 },
  { handle: "led-panel-light", title: "SoftGlow LED Panel Light", description: "Edge-lit LED panel for video calls and content creation. Adjustable color temp and brightness.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "lighting", tags: ["led panel", "video light"], costPrice: 25.00, price: 42.99, margin: "72%", rating: 4.5, reviewCount: 567, isNew: true, stock: 30 },
  { handle: "under-cabinet-light", title: "BarLight Under-Cabinet LEDs (3-Pack)", description: "Rechargeable motion-activated under-cabinet lights. Magnetic mount, no wiring needed.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "lighting", tags: ["under cabinet", "led"], costPrice: 14.00, price: 24.99, margin: "78%", rating: 4.4, reviewCount: 1234, stock: 70 },

  // Organizers & Storage
  { handle: "file-sorter", title: "StepFile Document Sorter (5-Tier)", description: "5-tier stepped file sorter for papers and folders. Powder-coated steel with anti-scratch feet.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "organizers", tags: ["file sorter"], costPrice: 15.00, price: 26.99, margin: "80%", colors: ["Black", "White", "Rose Gold"], rating: 4.3, reviewCount: 567, stock: 55 },
  { handle: "drawer-organizer", title: "ModuTray Drawer Organizer Set", description: "Interlocking drawer organizer trays in 5 sizes. Stackable and customizable layout.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "organizers", tags: ["drawer organizer"], costPrice: 10.00, price: 18.99, margin: "90%", colors: ["Bamboo", "White", "Gray"], rating: 4.5, reviewCount: 890, stock: 65 },
  { handle: "pegboard", title: "FlexBoard Wall Pegboard Kit", description: "Metal pegboard with 20 hooks, shelves, and holders. Tool-free mounting system.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "organizers", tags: ["pegboard", "wall organizer"], costPrice: 20.00, price: 34.99, margin: "75%", colors: ["White", "Black", "Sage Green"], rating: 4.6, reviewCount: 678, isNew: true, stock: 35 },

  // Ergonomic Gear
  { handle: "standing-desk-converter", title: "RisePro Standing Desk Converter", description: "Sit-stand desk converter with gas spring lift. Fits two monitors and keyboard tray.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "ergonomics", tags: ["standing desk"], costPrice: 85.00, price: 149.99, margin: "76%", colors: ["Black", "White/Bamboo"], rating: 4.7, reviewCount: 1234, isBestseller: true, stock: 15 },
  { handle: "ergonomic-footrest", title: "ComfortStep Ergonomic Footrest", description: "Adjustable tilting footrest with textured massage surface. Reduces lower back strain.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "ergonomics", tags: ["footrest"], costPrice: 15.00, price: 27.99, margin: "87%", colors: ["Black", "Gray"], rating: 4.4, reviewCount: 567, stock: 50 },
  { handle: "lumbar-cushion", title: "SpineRest Memory Foam Lumbar Cushion", description: "Contoured memory foam back support with cooling gel. Adjustable strap fits any chair.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "ergonomics", tags: ["lumbar support"], costPrice: 12.00, price: 22.99, margin: "92%", colors: ["Black", "Gray", "Navy"], rating: 4.5, reviewCount: 1890, isBestseller: true, stock: 75 },
  { handle: "monitor-riser", title: "StackView Monitor Riser", description: "Bamboo monitor riser with storage drawer and phone/tablet slot. Elevates screen to eye level.", vendor: "WorkSpace Co", category: "Home & Office", department: "home-office", subcategory: "ergonomics", tags: ["monitor riser"], costPrice: 18.00, price: 32.99, margin: "83%", colors: ["Natural Bamboo", "Walnut", "White"], rating: 4.6, reviewCount: 1234, stock: 40 },

  // ═══════════════════════════════════════════
  // AUDIO & ENTERTAINMENT
  // ═══════════════════════════════════════════

  // Headphones & Earbuds
  { handle: "puresound-earbuds", title: "PureSound Pro Earbuds", description: "Active noise-cancelling true wireless earbuds with spatial audio. 30hr total battery with case.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "headphones", tags: ["earbuds", "anc"], costPrice: 45.00, price: 79.99, margin: "78%", image: pureSoundEarbuds, colors: ["Black", "White", "Navy"], rating: 4.7, reviewCount: 3456, isBestseller: true, stock: 40 },
  { handle: "gaming-headphones", title: "ThunderStrike Gaming Headset", description: "7.1 surround sound gaming headset with detachable mic. RGB lighting and memory foam cushions.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "headphones", tags: ["gaming headset"], costPrice: 35.00, price: 59.99, margin: "71%", image: gamingHeadphones, colors: ["Black/Red", "Black/Blue", "White"], rating: 4.6, reviewCount: 2345, stock: 35 },
  { handle: "over-ear-headphones", title: "StudioMax Over-Ear Headphones", description: "Hi-Res certified over-ear headphones with 40mm drivers. Foldable design with carry case.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "headphones", tags: ["over-ear", "hi-res"], costPrice: 55.00, price: 94.99, margin: "73%", colors: ["Matte Black", "Silver", "Cream"], rating: 4.8, reviewCount: 1234, stock: 22 },
  { handle: "sleep-earbuds", title: "DreamBuds Sleep Earphones", description: "Ultra-small silicone earbuds designed for side-sleepers. White noise and nature sounds built in.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "headphones", tags: ["sleep earbuds"], costPrice: 25.00, price: 44.99, margin: "80%", colors: ["White", "Lavender"], rating: 4.3, reviewCount: 678, isNew: true, stock: 45 },
  { handle: "sport-earbuds", title: "AquaPods Waterproof Sport Earbuds", description: "IP68 waterproof earbuds for swimming and extreme sports. Secure ear-hook design, 10hr battery.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "headphones", tags: ["sport earbuds", "waterproof"], costPrice: 35.00, price: 59.99, margin: "71%", colors: ["Black", "Lime Green", "Electric Blue"], rating: 4.5, reviewCount: 890, stock: 38 },

  // Speakers
  { handle: "bluetooth-speaker", title: "BoomBox Portable Speaker", description: "360° sound Bluetooth speaker with 24hr battery. IPX7 waterproof with built-in microphone.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "speakers", tags: ["bluetooth speaker"], costPrice: 28.00, price: 44.99, margin: "61%", image: bluetoothSpeaker, colors: ["Black", "Teal", "Red", "Sand"], rating: 4.6, reviewCount: 4567, isBestseller: true, stock: 55 },
  { handle: "smart-speaker", title: "EchoSphere Smart Speaker", description: "Voice assistant speaker with premium 360° audio. Multi-room music and smart home hub.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "speakers", tags: ["smart speaker"], costPrice: 45.00, price: 74.99, margin: "67%", colors: ["Charcoal", "Chalk", "Sage"], rating: 4.7, reviewCount: 2345, stock: 28 },
  { handle: "soundbar", title: "CinemaBar 2.1 Soundbar", description: "Soundbar with wireless subwoofer. Dolby Atmos support, HDMI eARC, and Bluetooth 5.3.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "speakers", tags: ["soundbar"], costPrice: 85.00, price: 149.99, margin: "76%", colors: ["Black"], rating: 4.8, reviewCount: 1567, isBestseller: true, stock: 15 },
  { handle: "shower-speaker", title: "SplashTune Shower Speaker", description: "Suction-cup Bluetooth shower speaker with FM radio. IPX7 waterproof, 10hr battery.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "speakers", tags: ["shower speaker", "waterproof"], costPrice: 10.00, price: 18.99, margin: "90%", colors: ["Blue", "Green", "Orange", "Black"], rating: 4.3, reviewCount: 1234, stock: 90 },

  // Streaming Devices
  { handle: "streaming-stick", title: "StreamMax 4K Stick", description: "4K HDR streaming stick with voice remote. Supports all major apps: Netflix, Disney+, Prime, etc.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "streaming", tags: ["streaming", "4k"], costPrice: 22.00, price: 39.99, margin: "82%", rating: 4.7, reviewCount: 5678, isBestseller: true, stock: 65 },
  { handle: "hdmi-switch", title: "SwiftSwitch 4K HDMI Switcher (3-Port)", description: "3-input 1-output 4K HDMI switch with remote control. Automatic switching and CEC support.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "streaming", tags: ["hdmi switch"], costPrice: 12.00, price: 21.99, margin: "83%", colors: ["Black"], rating: 4.4, reviewCount: 890, stock: 75 },
  { handle: "capture-card", title: "StreamCap HD Capture Card", description: "USB 3.0 capture card for game streaming. 4K passthrough with 1080p60 recording.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "streaming", tags: ["capture card", "streaming"], costPrice: 25.00, price: 44.99, margin: "80%", rating: 4.5, reviewCount: 567, stock: 30 },

  // Gaming Accessories
  { handle: "controller-stand", title: "DualDock Controller Stand", description: "Charging stand for 2 controllers with LED indicators. Compatible with PS5 and Xbox controllers.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "gaming", tags: ["controller stand", "charging"], costPrice: 12.00, price: 22.99, margin: "92%", colors: ["Black", "White"], rating: 4.5, reviewCount: 1234, stock: 55 },
  { handle: "gaming-mouse", title: "PixelStrike Gaming Mouse", description: "16000 DPI optical gaming mouse with 11 programmable buttons. RGB lighting and on-board memory.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "gaming", tags: ["gaming mouse"], costPrice: 25.00, price: 44.99, margin: "80%", colors: ["Black", "White"], rating: 4.7, reviewCount: 2345, isBestseller: true, stock: 35 },
  { handle: "gaming-mousepad-xl", title: "ArenaGrip RGB Mouse Pad (36x18\")", description: "Extended RGB gaming mouse pad with 14 lighting modes. Micro-textured surface for precision.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "gaming", tags: ["mouse pad", "rgb", "gaming"], costPrice: 14.00, price: 26.99, margin: "93%", rating: 4.4, reviewCount: 890, stock: 60 },
  { handle: "headset-stand", title: "TowerHold Headset Stand", description: "Aluminum headset stand with USB hub and 3.5mm audio passthrough. Non-slip silicone top.", vendor: "SoundWave", category: "Audio & Entertainment", department: "audio-entertainment", subcategory: "gaming", tags: ["headset stand"], costPrice: 12.00, price: 22.99, margin: "92%", colors: ["Black", "Silver", "White"], rating: 4.5, reviewCount: 678, stock: 48 },

  // ═══════════════════════════════════════════
  // BONUS: Smart Home extras  
  // ═══════════════════════════════════════════
  { handle: "robot-vacuum", title: "CleanBot LiDAR Robot Vacuum", description: "LiDAR navigation robot vacuum with mopping function. Self-emptying base and app control.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "automation", tags: ["robot vacuum"], costPrice: 150.00, price: 249.99, margin: "67%", image: robotVacuum, rating: 4.8, reviewCount: 3456, isBestseller: true, stock: 12 },
  { handle: "smart-bottle", title: "HydraTrack Smart Water Bottle", description: "LED temperature display water bottle with hydration reminders. Vacuum-insulated stainless steel.", vendor: "Home Pulse", category: "Smart Home", department: "smart-home", subcategory: "automation", tags: ["smart bottle"], costPrice: 15.00, price: 24.99, margin: "67%", image: smartBottle, colors: ["White", "Black", "Pink"], rating: 4.3, reviewCount: 567, isNew: true, stock: 60 },
];

// Legacy categories for backward compat
export const categories = [
  "All",
  "Mobile Tech",
  "Smart Home",
  "Car Tech",
  "Computing",
  "Fitness & Outdoor",
  "Home & Office",
  "Audio & Entertainment",
];

export const getProductByHandle = (handle: string) =>
  products.find((p) => p.handle === handle);

export const getProductsByDepartment = (deptSlug: string) =>
  products.filter((p) => p.department === deptSlug);

export const getProductsBySubcategory = (deptSlug: string, subSlug: string) =>
  products.filter((p) => p.department === deptSlug && p.subcategory === subSlug);
