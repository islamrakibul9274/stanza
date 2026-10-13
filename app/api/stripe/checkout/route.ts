import { NextRequest, NextResponse } from "next/server";
import { stripe, PLANS } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { planId, userEmail = "guest@example.com" } = await req.json();

    const selectedPlan = PLANS.find((p) => p.id === planId);
    if (!selectedPlan || selectedPlan.price === 0) {
      return NextResponse.json({ error: "Invalid subscription plan selected" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || process.env.AUTH_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Stanza ${selectedPlan.name}`,
              description: selectedPlan.description,
            },
            unit_amount: selectedPlan.price * 100, // in cents
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      customer_email: userEmail,
      success_url: `${origin}/studio?upgraded=true&plan=${selectedPlan.id}`,
      cancel_url: `${origin}/pricing?canceled=true`,
      metadata: {
        planId: selectedPlan.id,
        credits: String(selectedPlan.credits),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to initiate Stripe session";
    console.error("Stripe Checkout Session Error:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
