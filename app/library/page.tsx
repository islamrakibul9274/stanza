"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Folder, Trash2, Copy, Check, ArrowRight, Loader2 } from "lucide-react";
import { getPusherClient } from "@/lib/pusher";

interface ProjectItem {
  _id: string;
  title: string;
  script: string;
  voiceName: string;
  duration: number;
  wordCount: number;
  createdAt: string;
}

export default function LibraryPage() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      if (data.projects) {
        setProjects(data.projects);
      }
    } catch (err) {
      console.error("Failed to load projects:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();

    const pusher = getPusherClient();
    if (pusher) {
      const channel = pusher.subscribe("stanza-studio");
      channel.bind("project-created", () => fetchProjects());
      channel.bind("project-deleted", () => fetchProjects());
      return () => {
        pusher.unsubscribe("stanza-studio");
      };
    }
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/projects?id=${id}`, { method: "DELETE" });
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Failed to delete project:", err);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-neutral-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-800">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Project Library</h1>
            <p className="text-xs text-neutral-400 mt-1">
              All scripts, voice allocations, and audio deliverables saved to MongoDB.
            </p>
          </div>
          <Link
            href="/studio"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-medium transition-all"
          >
            <span>New Production</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-neutral-500 gap-3">
            <Loader2 className="w-6 h-6 animate-spin text-neutral-400" />
            <span className="text-xs font-mono">Loading from MongoDB Atlas...</span>
          </div>
        ) : projects.length === 0 ? (
          <div className="py-20 text-center rounded-3xl bg-neutral-900/30 border border-neutral-800/80 p-8">
            <Folder className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-white">No saved projects yet</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-sm mx-auto">
              Draft a script in the Studio Playground and click &ldquo;Save Project&rdquo; to store it here.
            </p>
            <div className="mt-6">
              <Link
                href="/studio"
                className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium border border-neutral-700 inline-block transition-colors"
              >
                Go to Studio
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((item) => (
              <div
                key={item._id}
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-sm text-white line-clamp-1">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 shrink-0">
                      {item.voiceName}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed mb-4">
                    {item.script}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-mono text-[11px]">
                    {item.wordCount} words &bull; ~{item.duration}s
                  </span>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleCopy(item._id, item.script)}
                      className="p-1.5 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                      title="Copy script"
                    >
                      {copiedId === item._id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="p-1.5 hover:text-rose-400 rounded-lg hover:bg-neutral-800 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
