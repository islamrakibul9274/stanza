import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <span className="text-xs font-mono px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 mb-4">
        404 &bull; Page Not Found
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        Lost in the frequency
      </h2>
      <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-sm">
        The studio track or production page you requested does not exist or has been moved.
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-neutral-950 font-medium text-xs hover:bg-neutral-200 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
