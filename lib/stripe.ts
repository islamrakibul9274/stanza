import Stripe from "stripe";
export * from "./plans";

const apiKey = process.env.STRIPE_SECRET_KEY || "sk_test_placeholder_key_for_build";

export const stripe = new Stripe(apiKey, {
  typescript: true,
});
