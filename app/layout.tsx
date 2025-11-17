import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Updated Metadata for Crispy Thekua Hub
export const metadata: Metadata = {
  title: "Crispy Thekua Hub | Homemade Traditional Bihari Thekua",
  description:
    "Crispy Thekua Hub offers fresh, homemade, traditional Bihari Thekua made using pure ingredients. Order 10 pcs, 18 pcs, and 20 pcs fresh Thekua packs.",
  keywords: [
    "Thekua",
    "Crispy Thekua",
    "Bihari Thekua",
    "Homemade Thekua",
    "Thekua Delivery",
    "Thekua Online",
    "Traditional Thekua",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Crispy Thekua Hub – Fresh Homemade Thekua",
    description:
      "Order pure homemade crispy Bihari Thekua. Available in multiple packs with fast delivery.",
    url: "https://yourwebsite.com",
    siteName: "Crispy Thekua Hub",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
