"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AudioWaveform, Sparkles, ChevronRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/studio", label: "Studio" },
    { href: "/library", label: "Library" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-950 flex items-center justify-center font-bold text-sm shadow-sm transition-transform group-hover:scale-105">
              <AudioWaveform className="w-4 h-4 text-neutral-950" />
            </div>
            <span className="font-semibold text-base tracking-tight text-white">
              Stanza
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400">
              Studio
            </span>
          </Link>

          {/* Navigation items */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-md transition-colors",
                  pathname === link.href
                    ? "text-white bg-neutral-900"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {/* Credit balance badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
            <span>10,000</span>
            <span className="text-neutral-500">credits</span>
          </div>

          <Link
            href="/studio"
            className="flex items-center gap-1.5 bg-white text-neutral-950 hover:bg-neutral-200 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-lg transition-all shadow-sm active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Studio</span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-500" />
          </Link>
        </div>
      </div>
    </header>
  );
}
