import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Project } from "@/models/Project";
import { pusherServer } from "@/lib/pusher";

export async function GET() {
  try {
    await connectToDatabase();
    const projects = await Project.find().sort({ createdAt: -1 }).limit(50);
    return NextResponse.json({ projects });
  } catch (error: any) {
    console.error("GET Projects Error:", error);
    return NextResponse.json({ error: error.message || "Failed to load projects" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const { title, script, voiceId, voiceName, audioUrl, duration } = body;

    if (!script) {
      return NextResponse.json({ error: "Script content is required" }, { status: 400 });
    }

    const wordCount = script.trim().split(/\s+/).filter(Boolean).length;

    const newProject = await Project.create({
      title: title || "Untitled Script",
      script,
      voiceId: voiceId || "adam",
      voiceName: voiceName || "Adam (Narrative)",
      audioUrl: audioUrl || null,
      duration: duration || Math.ceil(wordCount / 2.5),
      wordCount,
    });

    // Real-time notification with Pusher
    try {
      await pusherServer.trigger("stanza-studio", "project-created", {
        id: newProject._id,
        title: newProject.title,
        createdAt: newProject.createdAt,
      });
    } catch (pusherErr) {
      console.warn("Pusher broadcast skipped:", pusherErr);
    }

    return NextResponse.json({ project: newProject }, { status: 201 });
  } catch (error: any) {
    console.error("POST Project Error:", error);
    return NextResponse.json({ error: error.message || "Failed to create project" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    await connectToDatabase();
    await Project.findByIdAndDelete(id);

    try {
      await pusherServer.trigger("stanza-studio", "project-deleted", { id });
    } catch (pusherErr) {
      console.warn("Pusher broadcast skipped:", pusherErr);
    }

    return NextResponse.json({ success: true, id });
  } catch (error: any) {
    console.error("DELETE Project Error:", error);
    return NextResponse.json({ error: error.message || "Failed to delete project" }, { status: 500 });
  }
}
