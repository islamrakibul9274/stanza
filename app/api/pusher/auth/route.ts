import { NextRequest, NextResponse } from "next/server";
import { pusherServer } from "@/lib/pusher";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const socketId = data.get("socket_id") as string;
    const channelName = data.get("channel_name") as string;

    if (!socketId || !channelName) {
      return NextResponse.json({ error: "Missing socket_id or channel_name" }, { status: 400 });
    }

    const authResponse = pusherServer.authorizeChannel(socketId, channelName, {
      user_id: `user_${Math.random().toString(36).substring(2, 9)}`,
      user_info: {
        name: "Studio Collaborator",
      },
    });

    return NextResponse.json(authResponse);
  } catch (error: any) {
    console.error("Pusher Auth Error:", error);
    return NextResponse.json({ error: "Failed to authorize Pusher channel" }, { status: 500 });
  }
}
