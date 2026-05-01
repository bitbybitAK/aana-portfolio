import type { Metadata } from "next";
import { Lora, Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Aana Khanduri",
  description: "Field Notebook Vol. I. Product analytics, data projects, personal builds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${inter.variable} ${mono.variable} ${caveat.variable} font-sans bg-cream text-ink-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
