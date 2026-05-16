import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
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
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-white font-sans text-neutral-900 antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
