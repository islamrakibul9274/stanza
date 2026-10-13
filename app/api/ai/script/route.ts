import { NextRequest, NextResponse } from "next/server";
import { groq, DEFAULT_MODEL } from "@/lib/groq";

export async function POST(req: NextRequest) {
  try {
    const { prompt, tone = "natural", format = "voiceover", length = "medium" } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const systemPrompt = `You are Stanza's Lead Script Architect and Vocal Director. 
Your goal is to write realistic, human, broadcast-ready scripts optimized for spoken delivery and voiceovers (like ElevenLabs).
Follow these guidelines strictly:
- Write for the ear, not the eye: use natural rhythm, conversational punctuation (commas, dashes), and breath pauses.
- Tone: ${tone}.
- Format: ${format}.
- Approximate length: ${length} (short = ~50 words, medium = ~150 words, long = ~300 words).
- Do NOT output preamble, meta-instructions, or quote marks unless part of the speech.
- Output ONLY the clean script text ready for the voice actor or TTS engine.`;

    const completion = await groq.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });

    const script = completion.choices[0]?.message?.content || "";

    return NextResponse.json({
      script,
      wordCount: script.trim().split(/\s+/).length,
      estimatedDurationSeconds: Math.ceil(script.trim().split(/\s+/).length / 2.5),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to generate script";
    console.error("Groq Script Generation Error:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
