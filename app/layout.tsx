import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Graham Anderson | Full Stack Software Engineer — AI-Native Products",
  description: "Full stack software engineer building AI-native enterprise products end to end — JVM/Spring Boot services and APIs behind TypeScript/React interfaces, with agentic and conversational experiences on Claude: MCP, tool-calling, and real-time streaming.",
  metadataBase: new URL("https://grahamanderson.dev"),
  openGraph: {
    title: "Graham Anderson | Full Stack Software Engineer — AI-Native Products",
    description: "Full stack software engineer building AI-native enterprise products end to end — JVM/Spring Boot services and APIs behind TypeScript/React interfaces, with agentic and conversational experiences on Claude: MCP, tool-calling, and real-time streaming.",
    url: "https://grahamanderson.dev",
    siteName: "Graham Anderson",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
