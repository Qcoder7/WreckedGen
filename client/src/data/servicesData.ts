import { UserPlus, Wrench, Bot } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: string;
  buttonText: string;
  icon: any;
  gradient: string;
  color: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Premium Accounts",
    description: "Get access to all types of accounts including free and premium options for various platforms and services.",
    features: [
      "Netflix, Spotify, Gaming Accounts",
      "Instant Delivery",
      "24/7 Support",
      "Warranty Included"
    ],
    price: "$0",
    buttonText: "Browse Accounts",
    icon: UserPlus,
    gradient: "from-primary to-secondary",
    color: "primary"
  },
  {
    id: 2,
    title: "Custom Tools",
    description: "Access our exclusive collection of custom-made tools and utilities at competitive prices.",
    features: [
      "Discord Automation Tools",
      "Custom Scripts & Utilities",
      "Regular Updates",
      "Documentation Included"
    ],
    price: "$5",
    buttonText: "View Tools",
    icon: Wrench,
    gradient: "from-accent to-primary",
    color: "accent"
  },
  {
    id: 3,
    title: "Custom Discord Bots",
    description: "Get professional Discord bots tailored specifically for your server's needs and requirements.",
    features: [
      "Moderation & Management",
      "Custom Commands",
      "24/7 Hosting",
      "Full Support & Updates"
    ],
    price: "$17",
    buttonText: "Get Custom Bot",
    icon: Bot,
    gradient: "from-[hsl(353,83%,69%)] to-accent",
    color: "accent-pink"
  }
];
