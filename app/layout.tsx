import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stanza — Intelligent Voice & Script Studio",
  description:
    "Generate broadcast-grade voiceovers, compose scripts at the speed of thought with Groq, and orchestrate media workflows with Stanza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col antialiased selection:bg-neutral-800 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
