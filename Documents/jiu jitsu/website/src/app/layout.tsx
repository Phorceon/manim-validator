import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Academy of Jiu Jitsu | Ripon, CA",
  description: "Brazilian Jiu Jitsu for all ages and levels. Head instructor Devon Elias Martinez. Located at 505 Doak Blvd Suite-H, Ripon, CA. Free trial available.",
  keywords: ["jiu jitsu", "brazilian jiu jitsu", "bjj", "martial arts", "ripon", "california", "kids classes", "adult classes", "no-gi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
