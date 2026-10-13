"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Download, RotateCcw } from "lucide-react";
import { formatTime } from "@/lib/utils";

interface WaveformPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  duration?: number;
  voiceName?: string;
  onExport?: () => void;
}

const STATIC_BAR_HEIGHTS: number[] = [
  40, 52, 62, 68, 70, 68, 62, 53, 44, 38, 36, 39, 46, 56, 65, 72,
  74, 71, 64, 54, 43, 35, 32, 34, 41, 51, 62, 70, 74, 72, 65, 54,
  43, 34, 30, 31, 38, 48, 59, 68, 73, 72, 66, 56, 44, 34, 29, 30
];

export default function WaveformPlayer({
  isPlaying,
  onTogglePlay,
  duration = 45,
  voiceName = "Adam",
  onExport,
}: WaveformPlayerProps) {
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1.0);
  const [isMuted, setIsMuted] = useState(false);
  const barHeights = STATIC_BAR_HEIGHTS;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            onTogglePlay();
            return 0;
          }
          return prev + (100 / (duration * 10)) * speed;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration, speed, onTogglePlay]);

  const handleBarClick = (index: number) => {
    const newProgress = (index / barHeights.length) * 100;
    setProgress(newProgress);
  };

  const currentSeconds = Math.floor((progress / 100) * duration);

  const toggleSpeed = () => {
    const speeds = [1.0, 1.25, 1.5, 2.0];
    const nextIdx = (speeds.indexOf(speed) + 1) % speeds.length;
    setSpeed(speeds[nextIdx]);
  };

  return (
    <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4 sm:p-5 backdrop-blur-xl transition-all shadow-elevation">
      {/* Player Header */}
      <div className="flex items-center justify-between mb-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium text-neutral-300">
            Voice Synthesis &bull; {voiceName}
          </span>
        </div>
        <div className="font-mono text-neutral-400">
          {formatTime(currentSeconds)} / {formatTime(duration)}
        </div>
      </div>

      {/* Waveform Scrubber */}
      <div className="h-16 w-full flex items-center justify-between gap-[3px] py-2 px-1 cursor-pointer select-none">
        {barHeights.map((height, i) => {
          const barProgress = (i / barHeights.length) * 100;
          const isPassed = barProgress <= progress;

          return (
            <div
              key={i}
              onClick={() => handleBarClick(i)}
              className="flex-1 h-full flex items-center justify-center group"
            >
              <div
                style={{ height: `${height}%` }}
                className={`w-full rounded-full transition-all duration-150 ${
                  isPassed
                    ? "bg-white group-hover:bg-neutral-200"
                    : "bg-neutral-800 group-hover:bg-neutral-700"
                } ${isPlaying && isPassed ? "opacity-100" : "opacity-90"}`}
              />
            </div>
          );
        })}
      </div>

      {/* Control Bar */}
      <div className="flex items-center justify-between pt-3 mt-1 border-t border-neutral-800/80">
        <div className="flex items-center gap-2">
          {/* Main Play/Pause Button */}
          <button
            onClick={onTogglePlay}
            className="w-10 h-10 rounded-full bg-white text-neutral-950 flex items-center justify-center hover:bg-neutral-200 active:scale-95 transition-all shadow-sm"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-neutral-950" />
            ) : (
              <Play className="w-4 h-4 fill-neutral-950 translate-x-0.5" />
            )}
          </button>

          {/* Reset */}
          <button
            onClick={() => setProgress(0)}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            title="Restart"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Speed Toggle Pill */}
          <button
            onClick={toggleSpeed}
            className="px-2.5 py-1 text-xs font-mono font-medium text-neutral-300 hover:text-white rounded-md bg-neutral-800/80 hover:bg-neutral-750 transition-colors border border-neutral-700/50"
          >
            {speed}x
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Mute button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Export / Download */}
          {onExport && (
            <button
              onClick={onExport}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors border border-neutral-700/60"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
