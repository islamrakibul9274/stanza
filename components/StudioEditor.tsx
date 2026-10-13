"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Save, Wand2, Users, Loader2, CheckCircle2 } from "lucide-react";
import { VOICES, Voice } from "@/lib/voices";
import VoiceSelector from "@/components/VoiceSelector";
import WaveformPlayer from "@/components/WaveformPlayer";
import { getPusherClient } from "@/lib/pusher";

interface StudioEditorProps {
  initialScript?: string;
  initialTitle?: string;
}

export default function StudioEditor({
  initialScript = "In a world where attention is the rarest currency, voice is your deepest signature. With Stanza, every phrase holds gravity, every cadence is calibrated, and every story finds its frequency.",
  initialTitle = "Untitled Production",
}: StudioEditorProps) {
  const [title, setTitle] = useState(initialTitle);
  const [script, setScript] = useState(initialScript);
  const [selectedVoice, setSelectedVoice] = useState<Voice>(VOICES[0]);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [collaborators, setCollaborators] = useState(1);
  const [credits, setCredits] = useState(10000);

  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize SpeechSynthesis and Pusher
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;
    }

    // Connect Pusher for live studio collaboration
    const pusher = getPusherClient();
    if (pusher) {
      const channel = pusher.subscribe("stanza-studio");
      channel.bind("pusher:subscription_succeeded", () => {
        setCollaborators((prev) => Math.max(prev, 2));
      });
      channel.bind("project-created", () => {
        // Someone saved a project
      });

      return () => {
        pusher.unsubscribe("stanza-studio");
      };
    }
  }, []);

  // Calculate words and estimated duration
  const wordCount = script.trim().split(/\s+/).filter(Boolean).length;
  const estimatedSeconds = Math.max(3, Math.ceil(wordCount / 2.5));

  // Groq AI Script Generation
  const handleAIAssist = async (actionType: string) => {
    setIsGeneratingAI(true);
    let prompt = "";

    if (actionType === "podcast") {
      prompt = `Write an engaging, 2-sentence podcast intro about future technology and creative flow. Hook the listener immediately.`;
    } else if (actionType === "commercial") {
      prompt = `Write a punchy, 30-word luxury product voiceover ad for an intelligent modern workflow tool.`;
    } else if (actionType === "refine") {
      prompt = `Refine and polish the following script for spoken delivery. Add natural pauses, rhythm, and conversational cadence without changing the core meaning:\n\n"${script}"`;
    }

    try {
      const res = await fetch("/api/ai/script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, tone: "refined", format: "voiceover" }),
      });

      const data = await res.json();
      if (data.script) {
        setScript(data.script.trim());
        setCredits((prev) => Math.max(0, prev - 150));
      }
    } catch (err) {
      console.error("AI Assist failed:", err);
    } finally {
      setIsGeneratingAI(false);
    }
  };

  // Play Speech with Web Speech Synthesis and Waveform
  const togglePlayAudio = () => {
    if (!synthRef.current) {
      setIsPlaying(!isPlaying);
      return;
    }

    if (isPlaying) {
      synthRef.current.cancel();
      setIsPlaying(false);
    } else {
      synthRef.current.cancel();
      const utterance = new SpeechSynthesisUtterance(script);
      utterance.rate = selectedVoice.speed;
      utterance.pitch = selectedVoice.pitch;

      // Try to find matching voice language/gender
      const availableVoices = synthRef.current.getVoices();
      const matched = availableVoices.find(
        (v) =>
          v.lang.startsWith("en") &&
          v.name.toLowerCase().includes(selectedVoice.gender.toLowerCase())
      );
      if (matched) utterance.voice = matched;

      utterance.onend = () => {
        setIsPlaying(false);
      };
      utterance.onerror = () => {
        setIsPlaying(false);
      };

      utteranceRef.current = utterance;
      synthRef.current.speak(utterance);
      setIsPlaying(true);
    }
  };

  // Save to MongoDB Library
  const handleSaveProject = async () => {
    setIsSaving(true);
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title || "Untitled Script",
          script,
          voiceId: selectedVoice.id,
          voiceName: `${selectedVoice.name} (${selectedVoice.category})`,
          duration: estimatedSeconds,
        }),
      });

      if (res.ok) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (err) {
      console.error("Save project failed:", err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Studio Top Control Ribbon */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-xl">
        {/* Project Title Input */}
        <div className="flex-1 w-full sm:w-auto">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Name your production..."
            suppressHydrationWarning
            className="w-full bg-transparent text-lg font-medium text-white placeholder-neutral-500 focus:outline-none focus:ring-0 tracking-tight"
          />
          <div className="flex items-center gap-3 text-xs text-neutral-400 mt-0.5">
            <span>{wordCount} words</span>
            <span>&bull;</span>
            <span>~{estimatedSeconds}s estimated audio</span>
          </div>
        </div>

        {/* Pusher Live Collaborators & Actions */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800/80 border border-neutral-700/60 text-xs text-neutral-300 font-mono">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>{collaborators} live</span>
          </div>

          <button
            onClick={handleSaveProject}
            disabled={isSaving}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium border border-neutral-700 transition-all active:scale-95 disabled:opacity-50"
          >
            {isSaving ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : saveSuccess ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Save className="w-3.5 h-3.5" />
            )}
            <span>{saveSuccess ? "Saved to Library" : "Save Project"}</span>
          </button>
        </div>
      </div>

      {/* Main Studio Editor Workspace */}
      <div className="relative rounded-3xl bg-neutral-900/80 border border-neutral-800 shadow-elevation overflow-hidden flex flex-col">
        {/* Groq Prompt Bar */}
        <div className="p-3 border-b border-neutral-800/80 bg-neutral-950/40 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-neutral-400 flex items-center gap-1.5 px-2 py-1 rounded bg-neutral-900 border border-neutral-800">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Groq Llama-3.3 Assistant
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleAIAssist("refine")}
              disabled={isGeneratingAI}
              className="text-xs px-2.5 py-1 rounded-lg bg-neutral-800/80 hover:bg-neutral-750 text-neutral-200 hover:text-white border border-neutral-700/50 transition-colors flex items-center gap-1 disabled:opacity-50"
            >
              <Wand2 className="w-3 h-3" />
              <span>Refine Cadence</span>
            </button>
            <button
              onClick={() => handleAIAssist("podcast")}
              disabled={isGeneratingAI}
              className="text-xs px-2.5 py-1 rounded-lg bg-neutral-800/80 hover:bg-neutral-750 text-neutral-200 hover:text-white border border-neutral-700/50 transition-colors hidden sm:inline-flex disabled:opacity-50"
            >
              Podcast Hook
            </button>
            <button
              onClick={() => handleAIAssist("commercial")}
              disabled={isGeneratingAI}
              className="text-xs px-2.5 py-1 rounded-lg bg-neutral-800/80 hover:bg-neutral-750 text-neutral-200 hover:text-white border border-neutral-700/50 transition-colors hidden sm:inline-flex disabled:opacity-50"
            >
              Commercial Ad
            </button>
          </div>
        </div>

        {/* Script Canvas Text Area */}
        <div className="p-6 relative min-h-[220px]">
          {isGeneratingAI && (
            <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm flex items-center justify-center z-10 gap-2 text-sm text-neutral-200">
              <Loader2 className="w-5 h-5 animate-spin text-white" />
              <span>Groq is composing script...</span>
            </div>
          )}
          <textarea
            value={script}
            onChange={(e) => setScript(e.target.value)}
            placeholder="Type or paste your script here, or use Groq AI to draft one instantly..."
            suppressHydrationWarning
            className="w-full h-48 bg-transparent text-white placeholder-neutral-600 focus:outline-none resize-none font-sans text-base sm:text-lg leading-relaxed selection:bg-neutral-700"
          />
        </div>

        {/* Studio Bottom Bar: Voice Selector & Action Pill */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/70 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <VoiceSelector
              selectedVoice={selectedVoice}
              onSelectVoice={setSelectedVoice}
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={togglePlayAudio}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white text-neutral-950 hover:bg-neutral-200 font-medium text-sm transition-all shadow-md active:scale-95"
            >
              <span>{isPlaying ? "Pause Speech" : "Synthesize & Listen"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Waveform Audio Scrubber */}
      <WaveformPlayer
        isPlaying={isPlaying}
        onTogglePlay={togglePlayAudio}
        duration={estimatedSeconds}
        voiceName={selectedVoice.name}
        onExport={handleSaveProject}
      />
    </div>
  );
}
