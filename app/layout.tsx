import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Marcus Arriola",
  description:
    "Senior copywriter. Building ideas, stories, and experiences people actually want to engage with.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white font-sans text-neutral-900 antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
