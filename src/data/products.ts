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
import securityCam from "@/assets/products/smart-home_security-cam_main.jpg";
import diffuser from "@/assets/products/smart-home_diffuser_main.jpg";
import ledStrip from "@/assets/products/smart-home_led-strip_main.jpg";
import airPurifier from "@/assets/products/smart-home_air-purifier_main.jpg";
import deskLamp from "@/assets/products/smart-home_desk-lamp_main.jpg";
import dashCam from "@/assets/products/car-tech_dash-cam_main.jpg";
import tireInflator from "@/assets/products/car-tech_tire-inflator_main.jpg";
import hudDisplay from "@/assets/products/car-tech_hud-display_main.jpg";
import wirelessCharger from "@/assets/products/car-tech_wireless-charger_main.jpg";

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
    image: aeroMagChargerMount
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
    margin: "50%",
    image: novalinkUsbCable
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
    image: skyChargePowerBrick
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
    image: magneticBatteryPack
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
    margin: "50%",
    image: luxeGripPhoneCase
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
    image: pureSoundEarbuds
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
    image: "/src/assets/products/mobile-tech_lens-protector_main.jpg"
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
    image: chargingDock
  },
  {
    handle: "halo-glow-wireless-charging-pad",
    title: "HaloGlow Wireless Charging Pad",
    description: "Elegant wireless charging pad with fast charging support. Minimalist design with soft-glow LED indicators.",
    vendor: "Drive Mode",
    category: "Mobile Tech",
    tags: ["charging pad"],
    costPrice: 22.00,
    price: 33.00,
    margin: "50%",
    image: wirelessChargingPad
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
    image: titanPowerBank
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
    image: "/src/assets/products/mobile-tech_magsafe-mount_main.jpg"
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
    image: "/src/assets/products/mobile-tech_airpod-case_main.jpg"
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
    image: securityCam
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
    image: diffuser
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
    margin: "50%",
    image: ledStrip
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
    image: airPurifier
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
    image: "/src/assets/products/smart-home_stair-lights_main.jpg"
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
    image: deskLamp
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
    image: "/src/assets/products/smart-home_wall-switch_main.jpg"
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
    image: "/src/assets/products/smart-home_led-tower_main.jpg"
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
    image: dashCam
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
    image: tireInflator
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
    margin: "50%",
    image: hudDisplay
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
    image: wirelessCharger
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
    image: "/src/assets/products/car-tech_blindspot-mirror_main.jpg"
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
    image: "/src/assets/products/car-tech_steering-cover_main.jpg"
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
    image: "/src/assets/products/car-tech_car-diffuser_main.jpg"
  },
  {
    handle: "nightbeam-car-door-lights",
    title: "NightBeam Car Door Lights",
    description: "LED door lights for vehicles. Stylish safety upgrade with sleek design.",
    vendor: "Drive Mode",
    category: "Car Tech",
    tags: ["led lights"],
    costPrice: 18.00,
    price: 27.00,
    margin: "50%",
    image: "/src/assets/products/car-tech_door-lights_main.jpg"
  },
];

export const categories = ["All", "Mobile Tech", "Smart Home", "Car Tech"];
