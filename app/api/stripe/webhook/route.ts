import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing webhook signature" }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  try {
    await connectToDatabase();

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as any;
        const email = session.customer_email;
        const planId = session.metadata?.planId;
        const credits = Number(session.metadata?.credits || 100000);

        if (email && planId) {
          await User.findOneAndUpdate(
            { email },
            {
              plan: planId,
              credits,
              stripeCustomerId: session.customer,
              stripeSubscriptionId: session.subscription,
            },
            { upsert: true }
          );
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as any;
        await User.findOneAndUpdate(
          { stripeSubscriptionId: subscription.id },
          { plan: "free", credits: 10000 }
        );
        break;
      }

      default:
        // Unhandled event
        break;
    }

    return NextResponse.json({ received: true });
  } catch (dbError: any) {
    console.error("Database update on webhook failed:", dbError);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
