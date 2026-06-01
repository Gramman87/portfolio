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
  title: "Graham Anderson | Forward Deployed Engineer, Applied AI",
  description: "Forward Deployed Engineer shipping production applications on Claude — MCP servers, sub-agents, and agent skills — embedded inside enterprise customer systems.",
  metadataBase: new URL("https://grahamanderson.dev"),
  openGraph: {
    title: "Graham Anderson | Forward Deployed Engineer, Applied AI",
    description: "Forward Deployed Engineer shipping production applications on Claude — MCP servers, sub-agents, and agent skills — embedded inside enterprise customer systems.",
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
