import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ErimaGodsOwnEnterprise | Premium Furniture, Handmade to Order",
    template: "%s | ErimaGodsOwnEnterprise",
  },
  description:
    "Premium handmade furniture — sofas, chairs, and more — finished by hand and delivered nationwide across Nigeria. Custom sizes available.",
  keywords: [
    "furniture Nigeria",
    "handmade sofa",
    "custom furniture",
    "luxury sofa Nigeria",
    "ErimaGodsOwnEnterprise",
  ],
  openGraph: {
    title: "ErimaGodsOwnEnterprise | Premium Furniture, Handmade to Order",
    description:
      "Premium handmade furniture — sofas, chairs, and more — finished by hand and delivered nationwide across Nigeria.",
    siteName: "ErimaGodsOwnEnterprise",
    locale: "en_NG",
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
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <CartProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
