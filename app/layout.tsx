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
    "Portfolio of Marcus, Senior Copywriter and keyboard pummeller.",
  openGraph: {
    title: "Marcus Arriola — Creative Chaos",
    description:
      "Portfolio of Marcus, Senior Copywriter and keyboard pummeller.",
    url: "https://marcus-creativeportfolio.vercel.app",
    siteName: "Marcus Arriola",
    images: [
      {
        url: "https://marcus-creativeportfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marcus Arriola — Senior Copywriter",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Arriola — Creative Chaos",
    description:
      "Portfolio of Marcus, Senior Copywriter and keyboard pummeller.",
    images: ["https://marcus-creativeportfolio.vercel.app/og-image.png"],
  },
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