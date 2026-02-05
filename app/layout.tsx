import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAL — AI Operations for Salons | Investor Deck",
  description:
    "SAL is the AI operations assistant for salons, barbershops, and spas. Built by a barber who scaled two award-winning salons. Pre-seed round open.",
  keywords: [
    "SAL",
    "AI assistant",
    "salon operations",
    "barbershop",
    "WhatsApp AI",
    "OpenClaw",
    "Dubai startup",
    "pre-seed",
  ],
  authors: [{ name: "Anas" }],
  openGraph: {
    title: "SAL — AI Operations for Salons | Investor Deck",
    description:
      "The AI operations assistant built by a barber who scaled two award-winning salons. Pre-seed round: 500,000 AED.",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAL — AI Operations for Salons",
    description:
      "The AI operations assistant built by a barber who scaled two award-winning salons.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
