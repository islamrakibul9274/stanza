"use client";

import React, { useState } from "react";
import { ChevronDown, Check, Volume2 } from "lucide-react";
import { VOICES, Voice } from "@/lib/voices";
import { cn } from "@/lib/utils";

interface VoiceSelectorProps {
  selectedVoice: Voice;
  onSelectVoice: (voice: Voice) => void;
}

export default function VoiceSelector({ selectedVoice, onSelectVoice }: VoiceSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all text-left group"
      >
        <div className="w-7 h-7 rounded-lg bg-neutral-800 border border-neutral-700/80 flex items-center justify-center font-bold text-xs text-neutral-200">
          {selectedVoice.name[0]}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-white tracking-tight">
              {selectedVoice.name}
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-neutral-800 text-neutral-400">
              {selectedVoice.accent}
            </span>
          </div>
          <span className="text-[11px] text-neutral-400">
            {selectedVoice.category}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-neutral-400 ml-2 transition-transform duration-200",
            isOpen && "rotate-180 text-white"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 mt-2 w-72 sm:w-80 bg-neutral-900 border border-neutral-800 rounded-2xl p-2 shadow-dark-elevation z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-3 py-2 text-[11px] font-mono font-medium text-neutral-400 uppercase tracking-wider border-b border-neutral-800">
              Select Voice Model
            </div>
            <div className="max-h-72 overflow-y-auto py-1 space-y-1">
              {VOICES.map((voice) => {
                const isSelected = voice.id === selectedVoice.id;
                return (
                  <button
                    key={voice.id}
                    onClick={() => {
                      onSelectVoice(voice);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-colors",
                      isSelected
                        ? "bg-neutral-800 text-white"
                        : "hover:bg-neutral-800/60 text-neutral-300"
                    )}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-neutral-800/90 border border-neutral-700/60 flex items-center justify-center font-bold text-xs text-white shrink-0 mt-0.5">
                        {voice.name[0]}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-white">
                            {voice.name}
                          </span>
                          <span className="text-[10px] text-neutral-400 font-mono">
                            &bull; {voice.accent}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 line-clamp-1 leading-snug">
                          {voice.description}
                        </p>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
