"use client";

import React, { useState } from "react";
import { Check, Sparkles, Loader2, ShieldCheck, Zap, HelpCircle } from "lucide-react";
import { PLANS } from "@/lib/stripe";

export default function PricingPage() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleCheckout = async (planId: string) => {
    if (planId === "free") {
      window.location.href = "/studio";
      return;
    }

    setLoadingPlan(planId);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Failed to start checkout session");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Unable to reach payment provider");
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-neutral-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 mb-4">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Stripe Production Checkout Ready</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Predictable plans for ambitious creators.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Scale seamlessly from personal exploratory scripts to full production audio pipelines.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => {
            const isPopular = plan.popular;
            const isLoading = loadingPlan === plan.id;

            return (
              <div
                key={plan.id}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                  isPopular
                    ? "bg-neutral-900 border-neutral-600 shadow-dark-elevation relative scale-[1.02]"
                    : "bg-neutral-950 border-neutral-800 hover:border-neutral-700"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-white text-neutral-950 font-mono text-[10px] font-bold uppercase tracking-wider">
                    Recommended
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1 min-h-[32px]">
                    {plan.description}
                  </p>

                  <div className="mt-6 mb-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                    <span className="text-xs text-neutral-400">/{plan.interval}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 mb-6 text-xs font-mono text-neutral-300 flex items-center justify-between">
                    <span>Monthly Quota:</span>
                    <span className="font-bold text-white">{plan.credits.toLocaleString()} Credits</span>
                  </div>

                  <ul className="space-y-3 text-xs text-neutral-300">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800/80">
                  <button
                    onClick={() => handleCheckout(plan.id)}
                    disabled={isLoading}
                    className={`w-full py-3 rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 ${
                      isPopular
                        ? "bg-white text-neutral-950 hover:bg-neutral-200 shadow-sm"
                        : "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700"
                    }`}
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{plan.price === 0 ? "Get Started Free" : `Upgrade to ${plan.name}`}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-12 border-t border-neutral-800 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <h4 className="font-semibold text-white mb-1">How are generation credits counted?</h4>
              <p className="text-neutral-400 leading-relaxed">
                Credits reflect characters and audio seconds synthesized. 1 credit equals approximately 1 character synthesized into broadcast audio. Unused credits roll over on paid tiers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <h4 className="font-semibold text-white mb-1">Do I own commercial rights to generated audio?</h4>
              <p className="text-neutral-400 leading-relaxed">
                Yes. On both Creator and Pro Studio plans, you own full commercial rights to all audio files generated and exported through Cloudinary CDN.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <h4 className="font-semibold text-white mb-1">Can I cancel anytime?</h4>
              <p className="text-neutral-400 leading-relaxed">
                Yes, your subscription is managed securely through Stripe. You can cancel with a single click at any time, retaining access through the end of your billing cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
