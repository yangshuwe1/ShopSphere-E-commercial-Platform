export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  details: string;
  price: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Smartphone X200",
    description: "6.5” OLED display, 128GB storage, 5G unlocked",
    image: "/api/placeholder/400/300",
    details: "Experience blazing‑fast performance, an edge‑to‑edge OLED display, and an advanced dual‑camera system. Unlocked 5G for use with major carriers.",
    price: "$699",
    features: [
      "128GB storage",
      "Dual 48MP cameras",
      "5G unlocked",
      "Fast charging",
      "1‑year warranty"
    ]
  },
  {
    id: 2,
    name: "Wireless Earbuds Pro",
    description: "Active noise canceling, 30‑hour playtime",
    image: "/api/placeholder/400/300",
    details: "Premium sound with adaptive ANC, comfortable fit, and a compact charging case that delivers up to 30 hours of total playtime.",
    price: "$129",
    features: [
      "Active noise canceling",
      "Transparency mode",
      "Wireless charging case",
      "IPX5 water resistance",
      "Voice assistant support"
    ]
  },
  {
    id: 3,
    name: "Air Fryer Max 6QT",
    description: "Healthy cooking with rapid air technology",
    image: "/api/placeholder/400/300",
    details: "Cook crispy fries, juicy chicken, and more with up to 85% less fat. Family‑size 6‑quart basket and dishwasher‑safe parts.",
    price: "$89",
    features: [
      "6‑quart capacity",
      "One‑touch presets",
      "Dishwasher‑safe parts",
      "Auto shut‑off",
      "Recipe booklet included"
    ]
  },
  {
    id: 4,
    name: "Robot Vacuum S7",
    description: "Smart mapping, powerful suction, self‑charge",
    image: "/api/placeholder/400/300",
    details: "Cleans carpets and hard floors with intelligent mapping, strong suction, and automatic return to charging dock.",
    price: "$249",
    features: [
      "Smart home integration",
      "Multi‑floor mapping",
      "Auto recharging",
      "Edge cleaning",
      "HEPA filtration"
    ]
  },
  {
    id: 5,
    name: "Espresso Machine Barista+",
    description: "15‑bar pump, milk frother, programmable",
    image: "/api/placeholder/400/300",
    details: "Brew rich espresso shots and creamy cappuccinos at home. Programmable settings and stainless steel design.",
    price: "$179",
    features: [
      "15‑bar Italian pump",
      "Steam wand frother",
      "Programmable shot volume",
      "Removable water tank",
      "Cleaning kit included"
    ]
  }
];
