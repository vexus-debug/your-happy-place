import { 
  Sparkles, 
  Heart, 
  Scissors, 
  Star,
  Waves,
  Droplet,
  Zap,
  Bath,
  Wind,
  Palette,
  Gift,
  ShoppingBag,
  Syringe
} from "lucide-react";

export interface Service {
  name: string;
  price: string;
  duration?: string;
  note?: string;
}

export interface ServiceCategory {
  category: string;
  iconName: string;
  badge?: string;
  services: Service[];
}

export const servicesData: ServiceCategory[] = [
  {
    category: "Botox Treatments",
    iconName: "Sparkles",
    badge: "Popular",
    services: [
      { name: "Full Face Botox", price: "₦350,000" },
      { name: "Frontalis (Forehead wrinkles)", price: "₦179,900" },
      { name: "Crow's Feet (Eye wrinkles)", price: "₦159,200" },
      { name: "Frown Lines", price: "₦98,700" },
      { name: "Lip Flip Botox (Lip lift without filler)", price: "₦49,900" },
      { name: "Brow Lift Botox (Lifted eye illusion)", price: "₦168,900" },
      { name: "Twitching / Muscle Spasm Treatment", price: "₦79,900" },
      { name: "Armpit Botox (Stops excessive sweating)", price: "₦250,000" },
      { name: "Palms Botox", price: "₦250,000" },
      { name: "Feet Botox", price: "₦250,000" },
      { name: "Neck Band Botox", price: "₦159,200" },
      { name: "Botox Per Unit", price: "₦5,000" }
    ]
  },
  {
    category: "Dermal Fillers",
    iconName: "Heart",
    badge: "Featured",
    services: [
      { name: "Lip Filler — 1ml", price: "₦139,900" },
      { name: "Russian Lips", price: "₦259,500" },
      { name: "Smile Line Fillers — 1ml", price: "₦139,900" },
      { name: "Smile Line Fillers — 2ml (Deep lines)", price: "₦260,000" },
      { name: "Under-Eye Filler", price: "₦139,900" },
      { name: "Chin Filler — 1ml", price: "₦139,900" },
      { name: "Chin Filler — 2ml", price: "₦260,000" },
      { name: "Cheek Filler (Contoured look)", price: "₦260,000" },
      { name: "Jawline Filler", price: "₦260,000" },
      { name: "Vaginal Lip Filler", price: "₦180,000" },
      { name: "Breast Filler (per 50ml)", price: "₦350,000" }
    ]
  },
  {
    category: "Non-Surgical Nose Jobs",
    iconName: "Star",
    badge: "Luxury",
    services: [
      { name: "Nose Filler Only", price: "₦139,900" },
      { name: "PDO Thread Only", price: "₦160,000" },
      { name: "PDO Thread + Filler", price: "₦229,700" }
    ]
  },
  {
    category: "PDO Thread Lift",
    iconName: "Zap",
    services: [
      { name: "Fox Eye Lift", price: "₦230,000" },
      { name: "Full Face Lift", price: "₦389,000" },
      { name: "Nose Thread Lift", price: "₦160,000" },
      { name: "Nose Thread + Filler", price: "₦229,700" },
      { name: "Total 'Janna Doll' Package", price: "₦1,485,000", note: "Complete transformation" }
    ]
  },
  {
    category: "Fat Reduction & Slimming",
    iconName: "Wind",
    services: [
      { name: "Lypolysis (Per vial)", price: "₦55,000" },
      { name: "Total Body Slimming", price: "Consultation Only" }
    ]
  },
  {
    category: "Skin Tag Removal",
    iconName: "Scissors",
    services: [
      { name: "Small", price: "₦35,900" },
      { name: "Mild", price: "₦55,000" },
      { name: "Heavy", price: "Consultation Required" }
    ]
  },
  {
    category: "Massage Therapy",
    iconName: "Waves",
    services: [
      { name: "Swedish Massage", price: "₦49,800" },
      { name: "Deep Tissue Massage", price: "₦56,800" },
      { name: "Deep Tissue + Warm Stone", price: "₦74,900" },
      { name: "Signature Massage (2 hrs)", price: "₦120,000" },
      { name: "Pregnancy Massage", price: "₦55,000" },
      { name: "Sports Massage", price: "₦56,800" }
    ]
  }
];

export const iconMap = {
  Sparkles,
  Heart,
  Scissors,
  Star,
  Waves,
  Droplet,
  Zap,
  Bath,
  Wind,
  Palette,
  Gift,
  ShoppingBag
};

// Important Note
export const extraTimeNote = "Note: Consultation may be required for some treatments.";
