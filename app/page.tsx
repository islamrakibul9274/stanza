import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers, Globe, Radio } from "lucide-react";
import StudioEditor from "@/components/StudioEditor";
import { VOICES } from "@/lib/voices";
import { PLANS } from "@/lib/stripe";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Pill Announcement */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 mb-6 transition-colors hover:border-neutral-700">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
          <span className="font-mono text-neutral-400">Next-Gen Audio Engine</span>
          <span className="text-neutral-600">&bull;</span>
          <span className="text-neutral-200">Powered by Groq & Cloudinary</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.08]">
          The creative audio studio for{" "}
          <span className="text-neutral-400">modern teams.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
          Generate broadcast-quality voiceovers, compose scripts at sub-second latency with Groq, and direct synthetic speech with precision controls.
        </p>

        {/* CTA Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/studio"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch Studio Playground</span>
          </Link>
          <Link
            href="/pricing"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium text-sm hover:text-white hover:bg-neutral-850 transition-all flex items-center justify-center gap-2"
          >
            <span>View Pricing & Plans</span>
            <ArrowRight className="w-4 h-4 text-neutral-500" />
          </Link>
        </div>

        {/* Embedded Live Studio Demo (ElevenLabs style) */}
        <div className="w-full mt-14 sm:mt-16 text-left">
          <div className="flex items-center justify-between mb-3 px-2">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Interactive Preview &bull; Click to Synthesize
            </span>
            <span className="text-xs text-neutral-500 hidden sm:inline">
              Try typing custom text below
            </span>
          </div>
          <StudioEditor />
        </div>
      </section>

      {/* Voice Showcase Section */}
      <section id="features" className="w-full py-20 border-t border-neutral-800/80 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Engineered for natural human cadence.
            </h2>
            <p className="mt-3 text-sm text-neutral-400">
              Each voice model is tuned for nuanced dynamics, emotional warmth, and breath pacing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VOICES.map((voice) => (
              <div
                key={voice.id}
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 hover:border-neutral-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-sm text-white">
                        {voice.name[0]}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-white group-hover:text-emerald-400 transition-colors">
                          {voice.name}
                        </h3>
                        <span className="text-xs text-neutral-400">
                          {voice.category} &bull; {voice.accent}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">
                      {voice.gender}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {voice.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono text-[11px]">Speed: {voice.speed}x</span>
                  <Link
                    href={`/studio?voice=${voice.id}`}
                    className="text-xs text-white hover:underline flex items-center gap-1"
                  >
                    <span>Use in Studio</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Infrastructure Section */}
      <section className="w-full py-20 border-t border-neutral-800/80 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-semibold text-base text-white">Sub-Second Groq Engine</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Powered by Groq's high-speed Llama-3.3 inference. Generate full podcast intros and polished commercial copy in milliseconds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
              <Radio className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-semibold text-base text-white">Live Multiplayer Pusher</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Collaborate live with your team. Broadcast script edits and monitor generation pipelines with instant WebSocket events.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
              <Globe className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-base text-white">Cloudinary Global CDN</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every generation, audio track, and attachment is signed and stored on Cloudinary with edge CDN playback speed worldwide.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="font-semibold text-base text-white">Stripe Verified Billing</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Automated credit allocation, invoice receipts via Resend, and enterprise-grade subscription security.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="w-full py-20 border-t border-neutral-800/80 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Simple, predictable credit plans.
          </h2>
          <p className="mt-3 text-sm text-neutral-400 max-w-xl mx-auto">
            Start free, scale as your audio production demands grow. Upgrade or cancel anytime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto text-left">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`p-6 rounded-3xl border flex flex-col justify-between ${
                  plan.popular
                    ? "bg-neutral-900 border-neutral-600 shadow-elevation relative"
                    : "bg-neutral-950 border-neutral-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-white text-neutral-950 font-mono text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1 min-h-[32px]">
                    {plan.description}
                  </p>

                  <div className="mt-5 mb-6 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">${plan.price}</span>
                    <span className="text-xs text-neutral-400">/{plan.interval}</span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-neutral-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href={`/pricing?select=${plan.id}`}
                    className={`w-full py-2.5 rounded-xl font-medium text-xs flex items-center justify-center transition-all ${
                      plan.popular
                        ? "bg-white text-neutral-950 hover:bg-neutral-200"
                        : "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700"
                    }`}
                  >
                    {plan.price === 0 ? "Get Started Free" : "Subscribe to " + plan.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
