import StudioEditor from "@/components/StudioEditor";
import { Sparkles, History, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function StudioPage() {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-neutral-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Studio Top Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Studio Workspace
              </h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-emerald-400">
                v2.4 Production
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              Draft scripts with Groq AI, test voice dynamics, and produce audio deliverables.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/library"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-300 transition-colors"
            >
              <History className="w-3.5 h-3.5" />
              <span>Saved Projects</span>
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-300 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Add Credits</span>
            </Link>
          </div>
        </div>

        {/* Central Studio Canvas */}
        <StudioEditor />
      </div>
    </div>
  );
}
