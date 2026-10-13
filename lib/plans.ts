export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: string;
  credits: number;
  popular?: boolean;
  stripePriceId?: string;
  features: string[];
}

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Starter",
    description: "Ideal for exploring AI voice & script workflows with baseline generation.",
    price: 0,
    interval: "month",
    credits: 10000,
    features: [
      "10,000 Generation Credits / mo",
      "Standard Voice Models",
      "Sub-second Groq Script Assistant",
      "Community Support",
      "Standard Quality Audio (128kbps)",
    ],
  },
  {
    id: "creator",
    name: "Creator",
    description: "Designed for indie podcasters, YouTube creators, and solo producers.",
    price: 19,
    interval: "month",
    credits: 100000,
    popular: true,
    stripePriceId: "price_creator_monthly",
    features: [
      "100,000 Generation Credits / mo",
      "All Premium Voices + Custom Accents",
      "Ultra-Fast Llama-3.3 70B Script Studio",
      "High-Definition WAV & MP3 Exports",
      "Cloudinary CDN Media Hosting",
      "Email & Priority Support",
    ],
  },
  {
    id: "pro",
    name: "Pro Studio",
    description: "Built for media studios, production teams, and high-output agencies.",
    price: 49,
    interval: "month",
    credits: 500000,
    stripePriceId: "price_pro_monthly",
    features: [
      "500,000 Generation Credits / mo",
      "Real-time Multiplayer Collaboration (Pusher)",
      "Dedicated Voice Cloning & Emotion Controls",
      "Unlimited Cloudinary Audio Storage",
      "API Access & Webhooks",
      "24/7 Dedicated Support",
    ],
  },
];
