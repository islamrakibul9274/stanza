import Link from "next/link";
import { AudioWaveform } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950 py-16 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-semibold">
              <div className="w-6 h-6 rounded bg-white text-neutral-950 flex items-center justify-center font-bold text-xs">
                <AudioWaveform className="w-3.5 h-3.5 text-neutral-950" />
              </div>
              <span>Stanza</span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              The creative audio and script studio for modern creators. Generate broadcast-quality voiceovers, compose scripts with Groq AI, and orchestrate media workflows in real-time.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-neutral-500 font-mono">Systems Operational &bull; Groq Llama-3.3 Live</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 font-mono mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/studio" className="hover:text-white transition-colors">Studio Playground</Link></li>
              <li><Link href="/library" className="hover:text-white transition-colors">Project Library</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing & Plans</Link></li>
              <li><a href="#features" className="hover:text-white transition-colors">Voice Catalog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 font-mono mb-3">
              Infrastructure
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-neutral-500">Groq High-Speed LLM</span></li>
              <li><span className="text-neutral-500">Cloudinary CDN Audio</span></li>
              <li><span className="text-neutral-500">Pusher Live Multiplayer</span></li>
              <li><span className="text-neutral-500">Stripe Billing Security</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 font-mono mb-3">
              Legal & Policy
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Audio Licensing</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Security Overview</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Stanza Studio Inc. All rights reserved.</p>
          <p className="font-mono text-[11px]">Crafted for high-fidelity media production</p>
        </div>
      </div>
    </footer>
  );
}
