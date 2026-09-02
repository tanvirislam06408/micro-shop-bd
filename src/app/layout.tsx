import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Micro-Shop BD — Premium AI Subscriptions & Digital Tools",
  description:
    "Get Gemini AI Pro (18 Months @ ৳350), ChatGPT Plus Owner Account (৳1,550), CapCut Pro, and premium AI tools at affordable prices from Micro-Shop BD.",
  keywords: [
    "Micro-Shop BD",
    "Gemini AI Pro 18 Months",
    "ChatGPT Plus BD",
    "CapCut Pro Bangladesh",
    "Codex API",
    "Claude API",
    "VPN Bangladesh",
    "AI Subscriptions BD",
  ],
  authors: [{ name: "Micro-Shop BD" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-slate-900 bg-purple-50/30 selection:bg-purple-200 selection:text-purple-900">
        {children}
      </body>
    </html>
  );
}
