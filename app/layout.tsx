import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

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
    <html
      lang="en"
      className={`dark scroll-smooth ${roboto.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${roboto.className} min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans antialiased selection:bg-neutral-800 selection:text-white`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
