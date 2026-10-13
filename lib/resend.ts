import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(to: string, name: string) {
  try {
    return await resend.emails.send({
      from: "Stanza Studio <onboarding@resend.dev>",
      to,
      subject: "Welcome to Stanza Studio",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #18181b;">
          <h1 style="font-size: 24px; font-weight: 600; margin-bottom: 16px;">Welcome to Stanza, ${name}</h1>
          <p style="font-size: 15px; line-height: 1.6; color: #52525b;">Your studio is ready. You now have access to ultra-fast script orchestration powered by Groq, studio voice models, and Cloudinary media export.</p>
          <div style="margin: 32px 0;">
            <a href="${process.env.AUTH_URL || "http://localhost:3000"}/studio" style="background-color: #000; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500; display: inline-block;">Open Studio Playground</a>
          </div>
          <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 32px 0;" />
          <p style="font-size: 12px; color: #a1a1aa;">Stanza Inc. &bull; The Modern Studio for Intelligent Audio & Scripts</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    return null;
  }
}
